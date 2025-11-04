/**
 * Auto-Blog Cron Job API
 * Automatically generates blog posts on schedule
 * Triggered by Vercel Cron
 */

import { NextResponse } from 'next/server';
import { blogDb } from '@/lib/supabase-admin';
import { createSanityBlogPost } from '@/lib/sanity-client';
import { uploadImageToSupabase } from '@/lib/supabase-storage';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function GET(request: Request) {
  try {
    // Security: Verify Cron Secret (if configured)
    const authHeader = request.headers.get('authorization');
    const cronSecret = process.env.CRON_SECRET;

    if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
      console.error('❌ Unauthorized cron access attempt');
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    console.log('🤖 Auto-blog cron job started');

    // Check if automation is enabled
    const schedule = await blogDb.getSchedule();

    if (!schedule || !schedule.enabled) {
      console.log('⏸️ Automation not enabled');
      return NextResponse.json({
        success: true,
        message: 'Automation not enabled',
        skipped: true,
      });
    }

    console.log('✅ Automation enabled, generating posts...');

    // Load AI settings
    const settings = await blogDb.getSettings();

    if (!settings) {
      return NextResponse.json(
        { success: false, error: 'Settings not found' },
        { status: 500 }
      );
    }

    // Generate blog post ideas
    const themes = schedule.themes.split(',').map((t: string) => t.trim());
    const selectedThemes = themes
      .sort(() => 0.5 - Math.random())
      .slice(0, schedule.posts_per_run);

    console.log(`📝 Generating ${selectedThemes.length} blog post(s)`);

    const generatedPosts = [];

    for (const theme of selectedThemes) {
      try {
        console.log(`\n🎯 Processing theme: ${theme}`);

        // Generate blog content with GPT-4o
        console.log('✍️ Calling GPT-4o for content generation...');
        const blogCompletion = await openai.chat.completions.create({
          model: settings.gpt_model || 'gpt-4o',
          messages: [
            { role: 'system', content: settings.gpt_system_message },
            {
              role: 'user',
              content: settings.gpt_user_prompt_template.replace('{topic}', theme),
            },
          ],
          response_format: { type: 'json_object' },
          temperature: parseFloat(settings.gpt_temperature || '0.7'),
        });

        const blogPost = JSON.parse(blogCompletion.choices[0].message.content || '{}');
        console.log(`📄 Generated: ${blogPost.title}`);

        // Generate featured image with DALL-E 3
        console.log('🎨 Calling DALL-E 3 for image generation...');
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
        console.log('📸 DALL-E image generated');

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
              console.log('📤 Published to Sanity CMS');
              published = true;
            } else if (sanityResult?.skipped) {
              console.log('⚠️ Sanity not configured - post saved to database only');
            }
          } catch (sanityError) {
            console.error('Sanity publish error:', sanityError);
            // Continue anyway - post is in database
          }
        }

        generatedPosts.push({
          title: blogPost.title,
          slug: blogPost.slug,
          published,
        });

        // Rate limit protection - wait 2 seconds between posts
        if (selectedThemes.length > 1) {
          console.log('⏳ Waiting 2 seconds before next post...');
          await new Promise((resolve) => setTimeout(resolve, 2000));
        }
      } catch (postError) {
        console.error(`Error generating post for theme "${theme}":`, postError);
        continue; // Skip to next theme
      }
    }

    // Update schedule metadata
    const now = new Date();
    let next_run = new Date();

    switch (schedule.frequency) {
      case 'hourly':
        next_run = new Date(now.getTime() + 60 * 60 * 1000);
        break;
      case 'daily':
        next_run = new Date(now.getTime() + 24 * 60 * 60 * 1000);
        break;
      case 'weekly':
        next_run = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
        break;
    }

    await blogDb.updateSchedule({
      last_run: now.toISOString(),
      next_run: next_run.toISOString(),
    });

    console.log(`\n✅ Cron job complete! Generated ${generatedPosts.length} post(s)`);
    console.log(`⏰ Next run scheduled for: ${next_run.toISOString()}`);

    return NextResponse.json({
      success: true,
      postsGenerated: generatedPosts.length,
      posts: generatedPosts,
      nextRun: next_run.toISOString(),
    });
  } catch (error) {
    console.error('❌ Auto-blog cron error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

