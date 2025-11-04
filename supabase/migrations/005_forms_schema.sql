-- ================================================
-- CUSTOM FORM BUILDER SCHEMA
-- ================================================

-- Forms table
CREATE TABLE IF NOT EXISTS forms (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  fields JSONB NOT NULL DEFAULT '[]',
  settings JSONB DEFAULT '{}',
  qr_code_url TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Form submissions table
CREATE TABLE IF NOT EXISTS form_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  form_id UUID REFERENCES forms(id) ON DELETE CASCADE,
  data JSONB NOT NULL,
  ip_address TEXT,
  user_agent TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_forms_slug ON forms(slug);
CREATE INDEX IF NOT EXISTS idx_forms_active ON forms(is_active);
CREATE INDEX IF NOT EXISTS idx_forms_created ON forms(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_submissions_form_id ON form_submissions(form_id);
CREATE INDEX IF NOT EXISTS idx_submissions_created ON form_submissions(created_at DESC);

-- Enable RLS
ALTER TABLE forms ENABLE ROW LEVEL SECURITY;
ALTER TABLE form_submissions ENABLE ROW LEVEL SECURITY;

-- Policies for forms
CREATE POLICY "Service role full access to forms"
  ON forms
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Public read access to active forms"
  ON forms
  FOR SELECT
  TO public
  USING (is_active = true);

-- Policies for form_submissions
CREATE POLICY "Service role full access to form_submissions"
  ON form_submissions
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Public can insert submissions"
  ON form_submissions
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Function to update timestamp
CREATE OR REPLACE FUNCTION update_forms_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to auto-update timestamp
CREATE TRIGGER forms_updated
  BEFORE UPDATE ON forms
  FOR EACH ROW
  EXECUTE FUNCTION update_forms_timestamp();

-- Comments for documentation
COMMENT ON TABLE forms IS 'Stores custom lead capture forms with field definitions';
COMMENT ON COLUMN forms.title IS 'Display name for the form';
COMMENT ON COLUMN forms.slug IS 'URL-safe identifier for public access';
COMMENT ON COLUMN forms.fields IS 'JSON array of field definitions with type, label, validation, etc.';
COMMENT ON COLUMN forms.settings IS 'Form settings like success message, email notifications, etc.';
COMMENT ON COLUMN forms.qr_code_url IS 'Supabase storage URL for the auto-generated QR code';

COMMENT ON TABLE form_submissions IS 'Stores submitted form data from leads';
COMMENT ON COLUMN form_submissions.data IS 'JSON object containing submitted field values';
COMMENT ON COLUMN form_submissions.ip_address IS 'IP address of the submitter';
COMMENT ON COLUMN form_submissions.user_agent IS 'Browser user agent string';

