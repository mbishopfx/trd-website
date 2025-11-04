-- Blog Settings Table
-- Stores AI configuration for GPT and DALL-E prompts

CREATE TABLE IF NOT EXISTS blog_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  setting_key VARCHAR(100) UNIQUE NOT NULL,
  setting_value TEXT,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create index for faster lookups
CREATE INDEX IF NOT EXISTS blog_settings_key_idx ON blog_settings(setting_key);

-- Default AI settings optimized for AIO/SERP-focused content
INSERT INTO blog_settings (setting_key, setting_value) VALUES
  ('gpt_system_message', 'You are an elite SEO and AIO (AI Optimization) content strategist. Your expertise is in the evolution of search beyond traditional SEO. You write authoritative, forward-thinking content about how AI is transforming search, why old SEO tactics are dying, and how businesses must adapt to AI Overviews, ChatGPT, Perplexity, and voice assistants. Your writing is professional, data-driven, and actionable. You must return valid JSON with the following structure: {"title": "Blog Title Here", "slug": "blog-slug-here", "excerpt": "Brief 2-3 sentence summary", "content": "Full blog post content in HTML format with proper headings, paragraphs, and structure", "tags": ["tag1", "tag2", "tag3"]}'),
  ('gpt_user_prompt_template', 'Write a comprehensive, SEO-optimized blog post about: {topic}. Focus on: 1) Why traditional SEO is becoming obsolete, 2) How AI search (ChatGPT, Perplexy, Google AI Overviews) is changing the game, 3) Practical strategies businesses MUST implement now to rank in AI-powered search, 4) Real-world impact and case studies. Make it authoritative, data-backed, and actionable. Use proper HTML formatting with <h2>, <h3>, <p>, <ul>, <li> tags. Include 8-12 paragraphs with concrete examples. Target 1500-2000 words. Make the title compelling and clickable. Return as JSON.'),
  ('dalle_prompt_template', 'A professional, modern, futuristic illustration representing AI-powered search and the evolution of SEO. Topic: {topic}. Style: Clean, tech-forward, gradient colors (blue, purple, teal), abstract geometric shapes, digital interface elements, data visualization aesthetic. Professional business quality.'),
  ('gpt_model', 'gpt-4o'),
  ('gpt_temperature', '0.7'),
  ('dalle_model', 'dall-e-3'),
  ('dalle_size', '1792x1024'),
  ('dalle_quality', 'standard')
ON CONFLICT (setting_key) DO NOTHING;

-- Update timestamp trigger
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

