/**
 * Supabase Admin Client
 * Server-side only client with service role permissions
 * DO NOT use in client-side code
 */

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

if (!supabaseUrl || !supabaseServiceKey) {
  console.warn('⚠️ Supabase credentials not configured. Blog features will not work.');
}

let supabaseAdmin: ReturnType<typeof createClient> | null = null;

export function getServiceSupabase() {
  if (!supabaseAdmin && supabaseUrl && supabaseServiceKey) {
    supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    });
  }
  return supabaseAdmin;
}

/**
 * Blog-specific database operations
 */
export const blogDb = {
  // Get blog settings
  async getSettings() {
    const supabase = getServiceSupabase();
    if (!supabase) return null;

    const { data, error } = await supabase
      .from('blog_settings')
      .select('setting_key, setting_value');

    if (error) {
      console.error('Error fetching blog settings:', error);
      return null;
    }

    // Convert to key-value object
    const settings: Record<string, string> = {};
    data?.forEach((row) => {
      settings[row.setting_key] = row.setting_value;
    });

    return settings;
  },

  // Get schedule configuration
  async getSchedule() {
    const supabase = getServiceSupabase();
    if (!supabase) return null;

    const { data, error } = await supabase
      .from('blog_schedule')
      .select('*')
      .single();

    if (error) {
      console.error('Error fetching blog schedule:', error);
      return null;
    }

    return data;
  },

  // Get all published posts
  async getPosts(limit?: number) {
    const supabase = getServiceSupabase();
    if (!supabase) return [];

    let query = supabase
      .from('blog_posts')
      .select('*')
      .eq('published', true)
      .order('published_at', { ascending: false });

    if (limit) {
      query = query.limit(limit);
    }

    const { data, error } = await query;

    if (error) {
      console.error('Error fetching blog posts:', error);
      return [];
    }

    return data || [];
  },

  // Get single post by slug
  async getPostBySlug(slug: string) {
    const supabase = getServiceSupabase();
    if (!supabase) return null;

    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('slug', slug)
      .eq('published', true)
      .single();

    if (error) {
      console.error('Error fetching blog post:', error);
      return null;
    }

    // Increment view count
    if (data) {
      await supabase.rpc('increment_blog_views', { post_slug: slug });
    }

    return data;
  },

  // Create new post
  async createPost(post: {
    title: string;
    slug: string;
    content: string;
    excerpt?: string;
    featured_image?: string;
    author?: string;
    tags?: string[];
    categories?: string[];
    meta_title?: string;
    meta_description?: string;
    focus_keyword?: string;
    sanity_id?: string;
  }) {
    const supabase = getServiceSupabase();
    if (!supabase) return null;

    const { data, error } = await supabase
      .from('blog_posts')
      .insert({
        title: post.title,
        slug: post.slug,
        content: post.content,
        excerpt: post.excerpt,
        featured_image: post.featured_image,
        author: post.author || 'True Rank Digital',
        tags: post.tags || [],
        categories: post.categories || [],
        meta_title: post.meta_title,
        meta_description: post.meta_description,
        focus_keyword: post.focus_keyword,
        sanity_id: post.sanity_id,
        published: true,
      })
      .select()
      .single();

    if (error) {
      console.error('Error creating blog post:', error);
      return null;
    }

    return data;
  },

  // Update schedule
  async updateSchedule(updates: {
    enabled?: boolean;
    themes?: string;
    frequency?: string;
    posts_per_run?: number;
    auto_publish?: boolean;
    last_run?: string;
    next_run?: string;
  }) {
    const supabase = getServiceSupabase();
    if (!supabase) return null;

    // First get the schedule to get its ID
    const { data: currentSchedule } = await supabase
      .from('blog_schedule')
      .select('id')
      .limit(1)
      .single();

    if (!currentSchedule?.id) {
      console.error('No schedule found to update');
      return null;
    }

    const { data, error } = await supabase
      .from('blog_schedule')
      .update(updates)
      .eq('id', currentSchedule.id)
      .select()
      .single();

    if (error) {
      console.error('Error updating blog schedule:', error);
      return null;
    }

    return data;
  },

  // Update setting
  async updateSetting(key: string, value: string) {
    const supabase = getServiceSupabase();
    if (!supabase) return null;

    const { data, error } = await supabase
      .from('blog_settings')
      .update({ setting_value: value })
      .eq('setting_key', key)
      .select()
      .single();

    if (error) {
      console.error('Error updating blog setting:', error);
      return null;
    }

    return data;
  },
};

