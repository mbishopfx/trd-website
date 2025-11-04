/**
 * Available Pages API
 * Returns all public pages and blog posts for QR code generation
 */

import { NextResponse } from 'next/server';
import { isAdminAuthenticated } from '@/lib/admin-auth';
import { blogDb } from '@/lib/supabase-admin';

export async function GET() {
  try {
    // Check admin authentication
    const isAuth = await isAdminAuthenticated();
    if (!isAuth) {
      return NextResponse.json(
        { success: false, message: 'Unauthorized' },
        { status: 401 }
      );
    }

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://truerankdigital.com';

    // Define static pages
    const staticPages = [
      { title: 'Home', url: siteUrl, type: 'page' },
      { title: 'Blog', url: `${siteUrl}/blog`, type: 'page' },
      { title: 'Contact', url: `${siteUrl}/contact`, type: 'page' },
      { title: 'Services', url: `${siteUrl}/services`, type: 'page' },
      { title: 'About', url: `${siteUrl}/about`, type: 'page' },
    ];

    // Get all blog posts
    const blogPosts = await blogDb.getPosts();
    const blogPages = blogPosts.map(post => ({
      title: `Blog: ${post.title}`,
      url: `${siteUrl}/blog/${post.slug}`,
      type: 'blog',
    }));

    // Combine all pages
    const allPages = [...staticPages, ...blogPages];

    return NextResponse.json({
      success: true,
      pages: allPages,
    });
  } catch (error) {
    console.error('Pages fetch error:', error);
    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : 'Fetch failed',
      },
      { status: 500 }
    );
  }
}

