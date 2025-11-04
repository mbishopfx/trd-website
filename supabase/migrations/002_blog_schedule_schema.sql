-- Blog Schedule Table
-- Controls automation frequency, themes, and publishing settings

CREATE TABLE IF NOT EXISTS blog_schedule (
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

-- Default configuration focused on AIO and modern search
INSERT INTO blog_schedule (enabled, themes, frequency, posts_per_run, auto_publish, next_run)
VALUES (
  false, 
  'AI Search Optimization, Google AI Overviews, ChatGPT SEO, Voice Search, Traditional SEO vs AIO, Future of SERP, E-E-A-T for AI, Semantic Search, Zero-Click Search, Answer Engine Optimization',
  'daily',
  1,
  true,
  NOW() + INTERVAL '1 day'
)
ON CONFLICT DO NOTHING;

-- Update timestamp trigger
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

-- Ensure only one schedule row exists
CREATE UNIQUE INDEX IF NOT EXISTS blog_schedule_singleton ON blog_schedule ((true));

