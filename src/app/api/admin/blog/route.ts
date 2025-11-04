/**
 * Admin Blog Generation API
 * Manually trigger blog post generation
 */

import { NextResponse } from 'next/server';
import { isAdminAuthenticated } from '@/lib/admin-auth';
import { blogDb } from '@/lib/supabase-admin';
import { createSanityBlogPost } from '@/lib/sanity-client';
import { uploadImageToSupabase } from '@/lib/supabase-storage';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    // Check admin authentication
    const isAuth = await isAdminAuthenticated();
    if (!isAuth) {
      return NextResponse.json(
        { success: false, message: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Load settings
    const settings = await blogDb.getSettings();
    const schedule = await blogDb.getSchedule();

    if (!settings || !schedule) {
      return NextResponse.json(
        { success: false, message: 'Configuration not found' },
        { status: 500 }
      );
    }

    // Generate blog post idea
    const themes = schedule.themes.split(',').map((t: string) => t.trim());
    const randomTheme = themes[Math.floor(Math.random() * themes.length)];

    console.log('🎯 Generating blog post idea for theme:', randomTheme);

    // Generate blog content with GPT-4o
    const blogCompletion = await openai.chat.completions.create({
      model: settings.gpt_model || 'gpt-4o',
      messages: [
        { role: 'system', content: settings.gpt_system_message },
        {
          role: 'user',
          content: settings.gpt_user_prompt_template.replace('{topic}', randomTheme),
        },
      ],
      response_format: { type: 'json_object' },
      temperature: parseFloat(settings.gpt_temperature || '0.7'),
    });

    const blogPost = JSON.parse(blogCompletion.choices[0].message.content || '{}');

    console.log('✍️ Blog post generated:', blogPost.title);

    // Generate featured image with DALL-E 3
    const imagePrompt = settings.dalle_prompt_template.replace(
      '{topic}',
      blogPost.title
    );

    console.log('🎨 Generating featured image...');

    const imageResponse = await openai.images.generate({
      model: settings.dalle_model || 'dall-e-3',
      prompt: imagePrompt,
      size: (settings.dalle_size || '1792x1024') as '1792x1024' | '1024x1792' | '1024x1024',
      quality: (settings.dalle_quality || 'standard') as 'standard' | 'hd',
      n: 1,
    });

    const dalleImageUrl = imageResponse.data[0]?.url;

    console.log('📸 DALL-E image generated:', dalleImageUrl);

    // Upload image to Supabase storage
    let featuredImageUrl = dalleImageUrl;
    if (dalleImageUrl) {
      const uploadedUrl = await uploadImageToSupabase(
        dalleImageUrl,
        blogPost.slug
      );
      if (uploadedUrl) {
        featuredImageUrl = uploadedUrl;
        console.log('💾 Image saved to Supabase storage');
      } else {
        console.warn('⚠️ Failed to upload to storage, using DALL-E URL');
      }
    }

    // Save to Supabase (PRIMARY STORAGE)
    const savedPost = await blogDb.createPost({
      title: blogPost.title,
      slug: blogPost.slug,
      content: blogPost.content,
      excerpt: blogPost.excerpt,
      featured_image: featuredImageUrl,
      author: 'True Rank Digital',
      tags: blogPost.tags || [],
      categories: blogPost.categories || [],
    });

    console.log('💾 Blog post saved to database');

    // Optionally publish to Sanity CMS
    let sanityResult = null;
    if (schedule.auto_publish && featuredImageUrl) {
      try {
        sanityResult = await createSanityBlogPost({
          title: blogPost.title,
          slug: blogPost.slug,
          content: blogPost.content,
          excerpt: blogPost.excerpt,
          author: 'True Rank Digital',
          tags: blogPost.tags || [],
          featuredImage: featuredImageUrl,
        });

        if (sanityResult?.success) {
          console.log('📤 Published to Sanity CMS');
        }
      } catch (sanityError) {
        console.error('Sanity publish error:', sanityError);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Blog post generated successfully',
      post: {
        title: blogPost.title,
        slug: blogPost.slug,
        featured_image: featuredImageUrl,
        published_to_sanity: sanityResult?.success || false,
      },
    });
  } catch (error) {
    console.error('Blog generation error:', error);
    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : 'Generation failed',
      },
      { status: 500 }
    );
  }
}

