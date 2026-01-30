-- Add compliance columns to form_submissions table
ALTER TABLE form_submissions 
ADD COLUMN IF NOT EXISTS consent_transactional BOOLEAN DEFAULT false,
ADD COLUMN IF NOT EXISTS consent_marketing BOOLEAN DEFAULT false;

-- Add comment for documentation
COMMENT ON COLUMN form_submissions.consent_transactional IS 'Whether the user consented to transactional SMS (A2P 10DLC compliance)';
COMMENT ON COLUMN form_submissions.consent_marketing IS 'Whether the user consented to marketing SMS (A2P 10DLC compliance)';
