/**
 * Admin Bulk Blog Generation API
 * Generate multiple blog posts at once
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

    const body = await request.json();
    const count = body.count || 10;

    console.log(`🚀 Starting bulk generation of ${count} posts...`);

    // Load settings
    const settings = await blogDb.getSettings();
    const schedule = await blogDb.getSchedule();

    if (!settings || !schedule) {
      return NextResponse.json(
        { success: false, message: 'Configuration not found' },
        { status: 500 }
      );
    }

    // Get themes
    const themes = schedule.themes.split(',').map((t: string) => t.trim());
    const generatedPosts = [];
    const errors = [];

    // Generate posts
    for (let i = 0; i < count; i++) {
      try {
        const randomTheme = themes[Math.floor(Math.random() * themes.length)];
        console.log(`\n📝 [${i + 1}/${count}] Generating post for: ${randomTheme}`);

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
        console.log(`   ✅ Content generated: ${blogPost.title}`);

        // Generate featured image with DALL-E 3
        const imagePrompt = settings.dalle_prompt_template.replace(
          '{topic}',
          blogPost.title
        );

        const imageResponse = await openai.images.generate({
          model: settings.dalle_model || 'dall-e-3',
          prompt: imagePrompt,
          size: (settings.dalle_size || '1792x1024') as '1792x1024' | '1024x1792' | '1024x1024',
          quality: (settings.dalle_quality || 'standard') as 'standard' | 'hd',
          n: 1,
        });

        const dalleImageUrl = imageResponse.data[0]?.url;
        console.log(`   ✅ Image generated`);

        // Upload image to Supabase storage
        let featuredImageUrl = dalleImageUrl;
        if (dalleImageUrl) {
          const uploadedUrl = await uploadImageToSupabase(
            dalleImageUrl,
            blogPost.slug
          );
          if (uploadedUrl) {
            featuredImageUrl = uploadedUrl;
            console.log(`   ✅ Image uploaded to storage`);
          }
        }

        // Save to database
        await blogDb.createPost({
          title: blogPost.title,
          slug: blogPost.slug,
          content: blogPost.content,
          excerpt: blogPost.excerpt,
          featured_image: featuredImageUrl,
          author: 'True Rank Digital',
          tags: blogPost.tags || [],
          categories: blogPost.categories || [],
        });

        console.log(`   ✅ Saved to database`);

        // Optionally publish to Sanity
        let published = false;
        if (schedule.auto_publish && featuredImageUrl) {
          try {
            const sanityResult = await createSanityBlogPost({
              title: blogPost.title,
              slug: blogPost.slug,
              content: blogPost.content,
              excerpt: blogPost.excerpt,
              author: 'True Rank Digital',
              tags: blogPost.tags || [],
              featuredImage: featuredImageUrl,
            });

            if (sanityResult?.success) {
              published = true;
              console.log(`   ✅ Published to Sanity`);
            }
          } catch (sanityError) {
            console.log(`   ⚠️  Sanity publish skipped`);
          }
        }

        generatedPosts.push({
          title: blogPost.title,
          slug: blogPost.slug,
          published,
        });

        // Rate limiting: wait 3 seconds between posts
        if (i < count - 1) {
          console.log(`   ⏳ Waiting 3 seconds...`);
          await new Promise((resolve) => setTimeout(resolve, 3000));
        }
      } catch (postError) {
        console.error(`   ❌ Error on post ${i + 1}:`, postError);
        errors.push({
          index: i + 1,
          error: postError instanceof Error ? postError.message : 'Unknown error',
        });
        // Continue with next post
        continue;
      }
    }

    console.log(`\n🎉 Bulk generation complete!`);
    console.log(`   ✅ Generated: ${generatedPosts.length} posts`);
    console.log(`   ❌ Errors: ${errors.length}`);

    return NextResponse.json({
      success: true,
      message: `Generated ${generatedPosts.length} blog posts`,
      postsGenerated: generatedPosts.length,
      posts: generatedPosts,
      errors: errors.length > 0 ? errors : undefined,
    });
  } catch (error) {
    console.error('❌ Bulk generation error:', error);
    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : 'Bulk generation failed',
      },
      { status: 500 }
    );
  }
}

