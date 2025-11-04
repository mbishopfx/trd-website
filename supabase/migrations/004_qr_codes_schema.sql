-- ================================================
-- QR CODE GENERATOR SCHEMA
-- ================================================

-- Table to store generated QR codes
CREATE TABLE IF NOT EXISTS qr_codes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  url TEXT NOT NULL,
  qr_code_url TEXT NOT NULL, -- URL to the QR code image in Supabase storage
  page_type TEXT, -- 'page', 'blog', 'manual'
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Add indexes
CREATE INDEX idx_qr_codes_url ON qr_codes(url);
CREATE INDEX idx_qr_codes_page_type ON qr_codes(page_type);
CREATE INDEX idx_qr_codes_created_at ON qr_codes(created_at DESC);

-- Enable RLS
ALTER TABLE qr_codes ENABLE ROW LEVEL SECURITY;

-- Policy: Allow service role full access
CREATE POLICY "Service role full access to qr_codes"
  ON qr_codes
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Policy: Allow public read access (for displaying QR codes)
CREATE POLICY "Public read access to qr_codes"
  ON qr_codes
  FOR SELECT
  TO public
  USING (true);

-- Function to update timestamp
CREATE OR REPLACE FUNCTION update_qr_codes_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to auto-update timestamp
CREATE TRIGGER qr_codes_updated
  BEFORE UPDATE ON qr_codes
  FOR EACH ROW
  EXECUTE FUNCTION update_qr_codes_timestamp();

-- Comments
COMMENT ON TABLE qr_codes IS 'Stores generated QR codes for pages and blog posts';
COMMENT ON COLUMN qr_codes.title IS 'Display name for the QR code';
COMMENT ON COLUMN qr_codes.url IS 'The URL that the QR code links to';
COMMENT ON COLUMN qr_codes.qr_code_url IS 'Supabase storage URL for the QR code image';
COMMENT ON COLUMN qr_codes.page_type IS 'Type of page: page, blog, or manual';

