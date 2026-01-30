-- Insert A2P 10DLC Compliant Lead Capture Form
INSERT INTO forms (title, slug, description, fields, settings, is_active)
VALUES (
  'Lead Capture Form',
  'lead-capture',
  'A2P 10DLC Compliant Lead Capture Form',
  '[
    {
      "id": "First_Name",
      "type": "text",
      "label": "First Name",
      "placeholder": "Jane",
      "required": true
    },
    {
      "id": "Last_Name",
      "type": "text",
      "label": "Last Name",
      "placeholder": "Doe",
      "required": true
    },
    {
      "id": "Phone_Number",
      "type": "phone",
      "label": "Phone Number",
      "placeholder": "(555) 000-0000",
      "required": true
    },
    {
      "id": "Email_Address",
      "type": "email",
      "label": "Email Address",
      "placeholder": "jane@example.com",
      "required": true
    },
    {
      "id": "consent_transactional",
      "type": "checkbox",
      "label": "I consent to receive transactional messages from True Rank Digital at the phone number provided. Message frequency may vary. Message & Data rates may apply. Reply HELP for help or STOP to opt-out.",
      "required": true
    },
    {
      "id": "consent_marketing",
      "type": "checkbox",
      "label": "I consent to receive marketing and promotional messages from True Rank Digital at the phone number provided. Message frequency may vary. Message & Data rates may apply. Reply HELP for help or STOP to opt-out.",
      "required": false
    }
  ]'::jsonb,
  '{
    "success_message": "Thank you! Your request has been received. One of our specialists will reach out to you shortly.",
    "email_notifications": true
  }'::jsonb,
  true
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  fields = EXCLUDED.fields,
  settings = EXCLUDED.settings,
  is_active = EXCLUDED.is_active,
  updated_at = NOW();
