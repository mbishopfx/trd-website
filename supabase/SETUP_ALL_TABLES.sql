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

-- Insert default settings with ultra-informative, schema-optimized prompts
INSERT INTO blog_settings (setting_key, setting_value) VALUES
  ('gpt_system_message', 'You are an elite SEO and AIO (AI Optimization) content strategist with expertise in structured content and semantic HTML. Your content is ULTRA-INFORMATIVE with deep technical insights, data-driven analysis, and actionable strategies. You write authoritative articles about how AI is transforming search and why traditional SEO is obsolete. CRITICAL: Use proper HTML heading hierarchy (H1 for title, H2 for main sections, H3-H6 for subsections). Use <strong> for emphasis, <ul>/<ol> for lists, proper paragraph breaks, and semantic structure. Every article must be schema-ready with clear heading hierarchy for automatic indexing. Return valid JSON: {"title": "Compelling H1 Title", "slug": "seo-friendly-slug", "excerpt": "Engaging 2-3 sentence summary with key benefits", "content": "Full HTML article with H2-H6 structure, bold text, lists, and rich formatting", "tags": ["Primary-Keyword", "Secondary-Keyword", "Topic-Category"]}'),
  ('gpt_user_prompt_template', 'Write an ULTRA-COMPREHENSIVE, schema-optimized blog post about: {topic}. STRUCTURE REQUIREMENTS: Use H2 for main sections, H3-H4 for subsections, H5-H6 for deep details. Include: 1) H2: Why Traditional SEO is Dead (with specific examples and data), 2) H2: How AI Search is Dominating (ChatGPT, Perplexity, Google AI Overviews with statistics), 3) H2: The New Search Visibility Framework (step-by-step strategies), 4) H2: Implementation Roadmap (actionable checklist), 5) H2: Case Studies & Results (real examples with metrics), 6) H2: Future-Proofing Your Strategy. FORMATTING: Use <strong> for key terms, <ul>/<li> for actionable lists, <blockquote> for expert insights, proper <p> tags. Target 2000-2500 words with deep technical insights, specific tools, concrete metrics, and detailed explanations. Make every section information-rich and immediately actionable. Return as structured JSON.'),
  ('dalle_prompt_template', 'Create a professional, clean, and minimalist image related to "{topic}". Use a modern business style with simple graphics, clean lines, and professional color scheme. Avoid overly stylized or futuristic elements. Focus on clarity and professionalism suitable for a business blog. Style: corporate, clean, professional photography or simple illustration.'),
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

-- Insert default schedule (3 posts every 4 hours)
INSERT INTO blog_schedule (enabled, themes, frequency, posts_per_run, auto_publish, next_run)
VALUES (
  false, 
  'AI Search Optimization, Google AI Overviews, ChatGPT SEO, Voice Search Optimization, Traditional SEO vs AIO, Future of SERP, E-E-A-T for AI Era, Semantic Search Strategies, Zero-Click Search Solutions, Answer Engine Optimization, AI Content Strategy, Schema Markup for AI, SGE Optimization, Perplexity SEO, Voice Assistant Optimization',
  'hourly',
  3,
  true,
  NOW() + INTERVAL '4 hours'
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

