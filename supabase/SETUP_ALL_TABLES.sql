-- ================================================
-- COMPLETE BLOG SYSTEM SETUP FOR SUPABASE
-- Run this in Supabase SQL Editor
-- ================================================

-- Drop existing tables if they exist (clean slate)
DROP TABLE IF EXISTS blog_posts CASCADE;
DROP TABLE IF EXISTS blog_schedule CASCADE;
DROP TABLE IF EXISTS blog_settings CASCADE;

-- ================================================
-- 1. BLOG SETTINGS TABLE
-- ================================================
CREATE TABLE blog_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  setting_key VARCHAR(100) UNIQUE NOT NULL,
  setting_value TEXT,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create index
CREATE INDEX blog_settings_key_idx ON blog_settings(setting_key);

-- Insert default settings
INSERT INTO blog_settings (setting_key, setting_value) VALUES
  ('gpt_system_message', 'You are an elite SEO and AIO (AI Optimization) content strategist. Your expertise is in the evolution of search beyond traditional SEO. You write authoritative, forward-thinking content about how AI is transforming search, why old SEO tactics are dying, and how businesses must adapt to AI Overviews, ChatGPT, Perplexity, and voice assistants. Your writing is professional, data-driven, and actionable. You must return valid JSON with the following structure: {"title": "Blog Title Here", "slug": "blog-slug-here", "excerpt": "Brief 2-3 sentence summary", "content": "Full blog post content in HTML format with proper headings, paragraphs, and structure", "tags": ["tag1", "tag2", "tag3"]}'),
  ('gpt_user_prompt_template', 'Write a comprehensive, SEO-optimized blog post about: {topic}. Focus on: 1) Why traditional SEO is becoming obsolete, 2) How AI search (ChatGPT, Perplexity, Google AI Overviews) is changing the game, 3) Practical strategies businesses MUST implement now to rank in AI-powered search, 4) Real-world impact and case studies. Make it authoritative, data-backed, and actionable. Use proper HTML formatting with <h2>, <h3>, <p>, <ul>, <li> tags. Include 8-12 paragraphs with concrete examples. Target 1500-2000 words. Make the title compelling and clickable. Return as JSON.'),
  ('dalle_prompt_template', 'A professional, modern, futuristic illustration representing AI-powered search and the evolution of SEO. Topic: {topic}. Style: Clean, tech-forward, gradient colors (blue, purple, teal), abstract geometric shapes, digital interface elements, data visualization aesthetic. Professional business quality.'),
  ('gpt_model', 'gpt-4o'),
  ('gpt_temperature', '0.7'),
  ('dalle_model', 'dall-e-3'),
  ('dalle_size', '1792x1024'),
  ('dalle_quality', 'standard');

-- ================================================
-- 2. BLOG SCHEDULE TABLE
-- ================================================
CREATE TABLE blog_schedule (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  enabled BOOLEAN DEFAULT false,
  themes TEXT NOT NULL,
  frequency VARCHAR(50) DEFAULT 'daily',
  posts_per_run INTEGER DEFAULT 1,
  auto_publish BOOLEAN DEFAULT true,
  last_run TIMESTAMPTZ,
  next_run TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Insert default schedule
INSERT INTO blog_schedule (enabled, themes, frequency, posts_per_run, auto_publish, next_run)
VALUES (
  false, 
  'AI Search Optimization, Google AI Overviews, ChatGPT SEO, Voice Search, Traditional SEO vs AIO, Future of SERP, E-E-A-T for AI, Semantic Search, Zero-Click Search, Answer Engine Optimization',
  'daily',
  1,
  true,
  NOW() + INTERVAL '1 day'
);

-- Create unique index (only one schedule row)
CREATE UNIQUE INDEX blog_schedule_singleton ON blog_schedule ((true));

-- ================================================
-- 3. BLOG POSTS TABLE
-- ================================================
CREATE TABLE blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(500) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT NOT NULL,
  featured_image TEXT,
  author VARCHAR(100) DEFAULT 'True Rank Digital',
  tags TEXT[] DEFAULT '{}',
  categories TEXT[] DEFAULT '{}',
  meta_title VARCHAR(70),
  meta_description VARCHAR(160),
  focus_keyword VARCHAR(100),
  published BOOLEAN DEFAULT true,
  published_at TIMESTAMPTZ DEFAULT NOW(),
  sanity_id VARCHAR(255),
  views INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for performance
CREATE INDEX blog_posts_slug_idx ON blog_posts(slug);
CREATE INDEX blog_posts_published_at_idx ON blog_posts(published_at DESC);
CREATE INDEX blog_posts_published_idx ON blog_posts(published);
CREATE INDEX blog_posts_tags_idx ON blog_posts USING GIN(tags);
CREATE INDEX blog_posts_sanity_id_idx ON blog_posts(sanity_id);

-- Full-text search index
CREATE INDEX blog_posts_search_idx ON blog_posts 
  USING GIN(to_tsvector('english', title || ' ' || COALESCE(excerpt, '') || ' ' || content));

-- ================================================
-- 4. FUNCTIONS & TRIGGERS
-- ================================================

-- Function to increment blog views
CREATE OR REPLACE FUNCTION increment_blog_views(post_slug VARCHAR)
RETURNS VOID AS $$
BEGIN
  UPDATE blog_posts 
  SET views = views + 1 
  WHERE slug = post_slug;
END;
$$ LANGUAGE plpgsql;

-- Function to update timestamps
CREATE OR REPLACE FUNCTION update_blog_posts_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER blog_posts_updated
  BEFORE UPDATE ON blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION update_blog_posts_timestamp();

-- Function to update schedule timestamps
CREATE OR REPLACE FUNCTION update_blog_schedule_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER blog_schedule_updated
  BEFORE UPDATE ON blog_schedule
  FOR EACH ROW
  EXECUTE FUNCTION update_blog_schedule_timestamp();

-- Function to update settings timestamps
CREATE OR REPLACE FUNCTION update_blog_settings_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER blog_settings_updated
  BEFORE UPDATE ON blog_settings
  FOR EACH ROW
  EXECUTE FUNCTION update_blog_settings_timestamp();

-- Function to auto-generate meta fields
CREATE OR REPLACE FUNCTION generate_blog_meta_fields()
RETURNS TRIGGER AS $$
BEGIN
  -- Auto-generate meta_title if not provided
  IF NEW.meta_title IS NULL OR NEW.meta_title = '' THEN
    NEW.meta_title = LEFT(NEW.title, 70);
  END IF;
  
  -- Auto-generate meta_description if not provided
  IF NEW.meta_description IS NULL OR NEW.meta_description = '' THEN
    NEW.meta_description = LEFT(COALESCE(NEW.excerpt, NEW.content), 160);
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER blog_posts_generate_meta
  BEFORE INSERT OR UPDATE ON blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION generate_blog_meta_fields();

-- ================================================
-- 5. ROW LEVEL SECURITY (RLS)
-- ================================================

-- Enable RLS on all tables
ALTER TABLE blog_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_schedule ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Policy: Allow service role full access
CREATE POLICY "Service role full access to blog_settings"
  ON blog_settings
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Service role full access to blog_schedule"
  ON blog_schedule
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Service role full access to blog_posts"
  ON blog_posts
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Policy: Allow anonymous users to read published posts
CREATE POLICY "Public read access to published blog_posts"
  ON blog_posts
  FOR SELECT
  TO anon
  USING (published = true);

-- Policy: Allow authenticated users to read published posts
CREATE POLICY "Authenticated read access to published blog_posts"
  ON blog_posts
  FOR SELECT
  TO authenticated
  USING (published = true);

-- ================================================
-- VERIFICATION
-- ================================================

-- Show all blog tables
SELECT 
  tablename,
  schemaname
FROM pg_tables
WHERE tablename LIKE 'blog%'
ORDER BY tablename;

-- Show counts
SELECT 'blog_settings' as table_name, COUNT(*) as row_count FROM blog_settings
UNION ALL
SELECT 'blog_schedule', COUNT(*) FROM blog_schedule
UNION ALL
SELECT 'blog_posts', COUNT(*) FROM blog_posts;

-- Show settings
SELECT setting_key, LEFT(setting_value, 50) || '...' as setting_value_preview
FROM blog_settings
ORDER BY setting_key;

-- Show schedule
SELECT 
  enabled,
  frequency,
  posts_per_run,
  auto_publish,
  LEFT(themes, 100) || '...' as themes_preview,
  next_run
FROM blog_schedule;

-- ================================================
-- SUCCESS MESSAGE
-- ================================================
SELECT '✅ BLOG SYSTEM SETUP COMPLETE!' as status,
       '3 tables created' as tables,
       '8 default settings inserted' as settings,
       '1 schedule configured' as schedule,
       'RLS policies enabled' as security;

