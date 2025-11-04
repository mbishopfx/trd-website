# 📋 Custom Form Builder System - Complete Documentation

## Overview

A comprehensive lead capture form system with drag-drop builder, QR code generation, file uploads, and submission management. All forms are stored in Supabase with public URLs at `/forms/[slug]`.

## 🎯 Features

### ✅ Form Builder
- **Visual Form Builder**: 3-panel interface (palette, preview, properties)
- **11 Field Types**: Text, Email, Phone, Textarea, Number, Date, Select, Radio, Checkbox, Rating, File Upload
- **Field Reordering**: Move fields up/down with arrow buttons
- **Real-time Preview**: See form as you build it
- **Property Editor**: Configure labels, placeholders, validation, options

### ✅ Form Management
- **Forms List**: View all forms with submission counts
- **QR Code Auto-Generation**: Each form gets a QR code automatically
- **Copy URL**: One-click URL copying
- **Download QR**: Export QR codes as PNG
- **Delete Forms**: Remove forms and all submissions

### ✅ Submission Tracking
- **Submissions Table**: View all form submissions
- **Details Modal**: View individual submission details
- **Export to CSV**: Download submissions as spreadsheet
- **Delete Submissions**: Remove individual submissions
- **IP Tracking**: Track submitter IP addresses

### ✅ Public Forms
- **Clean URLs**: `/forms/[slug]`
- **Dark Theme**: Matches main site design
- **Client Validation**: Real-time field validation
- **File Uploads**: Store files in Supabase storage
- **Success Messages**: Confirmation after submission
- **Schema.org Markup**: SEO optimized

### ✅ Dashboard Integration
- **Quick Links**: Access forms from main dashboard
- **Stats Display**: See forms and submissions at a glance
- **Recent Forms**: View latest forms and their activity

## 📁 File Structure

```
website/
├── src/
│   ├── app/
│   │   ├── admin/
│   │   │   ├── dashboard/
│   │   │   │   └── page.tsx                    # Updated with forms integration
│   │   │   └── forms/
│   │   │       ├── page.tsx                    # Forms list (server)
│   │   │       ├── FormsListClient.tsx         # Forms list (client)
│   │   │       ├── builder/
│   │   │       │   └── page.tsx                # Form builder page
│   │   │       └── [id]/
│   │   │           └── submissions/
│   │   │               ├── page.tsx            # Submissions viewer (server)
│   │   │               └── SubmissionsClient.tsx # Submissions viewer (client)
│   │   ├── api/
│   │   │   ├── admin/
│   │   │   │   └── forms/
│   │   │   │       ├── route.ts                # GET all, POST create
│   │   │   │       └── [id]/
│   │   │   │           ├── route.ts            # GET, PUT, DELETE single form
│   │   │   │           └── submissions/
│   │   │   │               └── route.ts        # GET, DELETE submissions
│   │   │   └── forms/
│   │   │       ├── [slug]/
│   │   │       │   └── route.ts                # Public: GET form, POST submission
│   │   │       └── upload/
│   │   │           └── route.ts                # File upload handler
│   │   └── forms/
│   │       └── [slug]/
│   │           └── page.tsx                    # Public form page
│   └── components/
│       ├── FormBuilder.tsx                     # Form builder component
│       ├── DynamicForm.tsx                     # Form renderer component
│       └── form-fields/
│           ├── TextField.tsx
│           ├── EmailField.tsx
│           ├── PhoneField.tsx
│           ├── TextareaField.tsx
│           ├── CheckboxField.tsx
│           ├── RadioField.tsx
│           ├── SelectField.tsx
│           ├── DateField.tsx
│           ├── NumberField.tsx
│           ├── RatingField.tsx
│           └── FileUploadField.tsx
├── supabase/
│   └── migrations/
│       └── 005_forms_schema.sql                # Database schema
└── FORM_BUILDER_SYSTEM.md                      # This file
```

## 🗄️ Database Schema

### `forms` Table
```sql
- id: UUID (PK)
- title: TEXT
- slug: TEXT (unique)
- description: TEXT
- fields: JSONB (field definitions)
- settings: JSONB (form settings)
- qr_code_url: TEXT (Supabase storage URL)
- is_active: BOOLEAN
- created_at: TIMESTAMPTZ
- updated_at: TIMESTAMPTZ
```

### `form_submissions` Table
```sql
- id: UUID (PK)
- form_id: UUID (FK -> forms)
- data: JSONB (submitted data)
- ip_address: TEXT
- user_agent: TEXT
- created_at: TIMESTAMPTZ
```

## 🎨 Field Types

### 1. **Text** (`text`)
Standard single-line text input.
```json
{
  "id": "field_123",
  "type": "text",
  "label": "Full Name",
  "placeholder": "Enter your name",
  "required": true
}
```

### 2. **Email** (`email`)
Email input with validation.
```json
{
  "id": "field_124",
  "type": "email",
  "label": "Email Address",
  "required": true
}
```

### 3. **Phone** (`phone`)
Phone number input.
```json
{
  "id": "field_125",
  "type": "phone",
  "label": "Phone Number"
}
```

### 4. **Textarea** (`textarea`)
Multi-line text input.
```json
{
  "id": "field_126",
  "type": "textarea",
  "label": "Message",
  "rows": 5
}
```

### 5. **Number** (`number`)
Numeric input with min/max.
```json
{
  "id": "field_127",
  "type": "number",
  "label": "Age",
  "min": 18,
  "max": 100
}
```

### 6. **Date** (`date`)
Date picker.
```json
{
  "id": "field_128",
  "type": "date",
  "label": "Birth Date"
}
```

### 7. **Select** (`select`)
Dropdown menu.
```json
{
  "id": "field_129",
  "type": "select",
  "label": "Choose Option",
  "options": ["Option 1", "Option 2", "Option 3"]
}
```

### 8. **Radio** (`radio`)
Radio button group.
```json
{
  "id": "field_130",
  "type": "radio",
  "label": "Select One",
  "options": ["Yes", "No", "Maybe"]
}
```

### 9. **Checkbox** (`checkbox`)
Single checkbox.
```json
{
  "id": "field_131",
  "type": "checkbox",
  "label": "I agree to terms"
}
```

### 10. **Rating** (`rating`)
Star rating (1-5).
```json
{
  "id": "field_132",
  "type": "rating",
  "label": "Rate our service",
  "maxRating": 5
}
```

### 11. **File Upload** (`file`)
File attachment field.
```json
{
  "id": "field_133",
  "type": "file",
  "label": "Upload Resume",
  "accept": ".pdf,.doc,.docx",
  "maxSize": 5
}
```

## 🚀 Usage Guide

### Creating a Form

1. **Access Form Builder**
   - Login to `/admin` (password: TRD2025!!!)
   - Click "Forms" from dashboard
   - Click "+ Create New Form"

2. **Build Your Form**
   - Enter form title and description
   - Click field types from left sidebar to add
   - Click fields to edit properties in right sidebar
   - Use ↑↓ arrows to reorder fields
   - Click 🗑️ to delete fields

3. **Configure Fields**
   - **Label**: Display name for the field
   - **Placeholder**: Hint text (text inputs)
   - **Required**: Make field mandatory
   - **Options**: For select/radio fields (one per line)
   - **Rows**: For textarea height
   - **Min/Max**: For number fields

4. **Save Form**
   - Click "Save Form" button
   - QR code is generated automatically
   - Form is published at `/forms/[slug]`

### Viewing Submissions

1. **From Dashboard**
   - See submission counts in Forms overview
   - Click "View →" on any form

2. **From Forms List**
   - Go to `/admin/forms`
   - Click "📊 View Submissions" on any form

3. **Submissions Table**
   - View all submissions in table format
   - Click "View Details" to see full submission
   - Click "Delete" to remove submission
   - Click "📥 Export to CSV" to download all

### Sharing Forms

**Option 1: Direct URL**
- Copy URL from forms list: `/forms/[slug]`
- Share via email, SMS, or website

**Option 2: QR Code**
- Download QR code from forms list
- Print on flyers, business cards, etc.
- Users scan QR code → opens form

## 🔒 Security Features

### Admin Protection
- Password-protected admin routes (TRD2025!!!)
- Authentication middleware on all admin APIs

### Form Security
- RLS policies on database tables
- IP address tracking for submissions
- User agent logging

### File Upload Security
- File type validation
- 5MB max file size
- Unique filename generation
- Public storage bucket

### Data Protection
- XSS protection via React escaping
- JSONB storage for flexible data
- Cascade delete (form → submissions)

## 🎨 Styling

### Dark Theme
All forms use dark theme matching main site:
- Background: `black`
- Cards: `gray-900` with `gray-800` borders
- Text: `white` / `gray-300`
- Inputs: `white/5` background, `white/10` borders
- Buttons: `blue-600` gradients

### Responsive Design
- Mobile-friendly layouts
- Touch-optimized inputs
- Adaptive form widths

## 📊 API Endpoints

### Admin APIs (Require Authentication)

**Get All Forms**
```http
GET /api/admin/forms
Returns: { success: true, forms: [...] }
```

**Create Form**
```http
POST /api/admin/forms
Body: { title, description, fields, settings }
Returns: { success: true, form: {...} }
```

**Get Single Form**
```http
GET /api/admin/forms/[id]
Returns: { success: true, form: {...} }
```

**Update Form**
```http
PUT /api/admin/forms/[id]
Body: { title, description, fields, settings, is_active }
Returns: { success: true, form: {...} }
```

**Delete Form**
```http
DELETE /api/admin/forms/[id]
Returns: { success: true }
```

**Get Submissions**
```http
GET /api/admin/forms/[id]/submissions
Returns: { success: true, submissions: [...] }
```

**Delete Submission**
```http
DELETE /api/admin/forms/[id]/submissions?submissionId=xxx
Returns: { success: true }
```

### Public APIs

**Get Form by Slug**
```http
GET /api/forms/[slug]
Returns: { success: true, form: {...} }
```

**Submit Form**
```http
POST /api/forms/[slug]
Body: { data: { field1: value1, ... } }
Returns: { success: true, submissionId: "xxx" }
```

**Upload File**
```http
POST /api/forms/upload
Body: FormData with 'file' field
Returns: { success: true, url: "https://..." }
```

## 🔮 Future Enhancements (Not Implemented)

### Email Notifications
To add email notifications for new submissions:

1. **Install Resend**
   ```bash
   npm install resend
   ```

2. **Add Environment Variables**
   ```env
   RESEND_API_KEY=re_xxx
   EMAIL_FROM=forms@truerankdigital.com
   EMAIL_TO=admin@truerankdigital.com
   ```

3. **Create Email Handler**
   ```typescript
   // src/lib/email-notification.ts
   import { Resend } from 'resend';
   
   const resend = new Resend(process.env.RESEND_API_KEY);
   
   export async function sendSubmissionEmail(formTitle: string, data: any) {
     await resend.emails.send({
       from: process.env.EMAIL_FROM!,
       to: process.env.EMAIL_TO!,
       subject: `New submission: ${formTitle}`,
       html: generateEmailHTML(data),
     });
   }
   ```

4. **Update Submission API**
   ```typescript
   // In /api/forms/[slug]/route.ts POST handler
   import { sendSubmissionEmail } from '@/lib/email-notification';
   
   // After successful submission:
   await sendSubmissionEmail(form.title, data);
   ```

### Conditional Logic
Add conditional field visibility based on other fields.

### Multi-Page Forms
Split long forms into multiple pages/steps.

### Form Analytics
Track form views, completion rates, drop-off points.

### Integration Webhooks
Send submissions to external services via webhooks.

## 🐛 Troubleshooting

### Forms not loading
- Check Supabase connection in `.env.local`
- Verify migration was applied: `005_forms_schema.sql`
- Check browser console for errors

### Submissions not saving
- Verify RLS policies on `form_submissions` table
- Check API response in Network tab
- Ensure all required fields are filled

### File uploads failing
- Verify `truerankdigital` bucket exists and is public
- Check file size < 5MB
- Verify file type is allowed

### QR codes not generating
- Check `qrcode` package is installed
- Verify Supabase storage permissions
- Check API logs for errors

## 📝 Notes

- All forms require admin authentication to manage
- Public forms are accessible without authentication
- QR codes are automatically generated on form creation
- File uploads are stored in Supabase storage bucket `truerankdigital`
- Submissions include IP address and user agent for tracking
- Form slugs are auto-generated from titles (lowercase, hyphens)
- Email notifications are not implemented (can be added later)

## ✅ System Status

**Completed Features:**
- ✅ Database schema with forms and submissions tables
- ✅ All 11 field type components
- ✅ Form builder with visual editor
- ✅ Forms list with management actions
- ✅ Submissions viewer with details modal
- ✅ Public form pages with validation
- ✅ QR code auto-generation
- ✅ File upload handling
- ✅ Dashboard integration
- ✅ Export to CSV

**Not Implemented:**
- ❌ Email notifications (requires email service setup)
- ❌ Conditional logic
- ❌ Multi-page forms
- ❌ Form analytics

---

**System Ready for Production! 🚀**

All core functionality is complete and tested. Forms can be created, shared via URL or QR code, and submissions can be tracked in the admin dashboard.

