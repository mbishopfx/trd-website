# 🚀 Auto-Blog System Setup Instructions

## Overview

Your True Rank Digital website now has a fully automated AI-powered blog system with:
- 🤖 GPT-4o for content generation (AIO/SERP focused)
- 🎨 DALL-E 3 for featured image generation
- 📊 Supabase PostgreSQL database for storage
- 📝 Optional Sanity CMS integration
- ⏰ Vercel Cron for automated scheduling
- 🔐 Password-protected admin panel (Password: `TRD2025!!!`)

---

## 📋 Setup Checklist

### 1. Database Setup (Supabase)

You need to run the 3 migration files in your Supabase project:

```bash
# Option A: Using Supabase CLI (if installed)
cd website/supabase/migrations
supabase db push

# Option B: Using psql (direct database connection)
psql YOUR_DATABASE_URL -f supabase/migrations/001_blog_settings_schema.sql
psql YOUR_DATABASE_URL -f supabase/migrations/002_blog_schedule_schema.sql
psql YOUR_DATABASE_URL -f supabase/migrations/003_blog_posts_schema.sql

# Option C: Copy/paste in Supabase SQL Editor
# 1. Go to your Supabase dashboard > SQL Editor
# 2. Create a new query
# 3. Copy contents of each migration file and run them
```

**Migration Files Location:**
- `website/supabase/migrations/001_blog_settings_schema.sql`
- `website/supabase/migrations/002_blog_schedule_schema.sql`
- `website/supabase/migrations/003_blog_posts_schema.sql`

### 2. Environment Variables

Update your `.env.local` file with these variables:

```bash
# Admin Panel
ADMIN_PASSWORD=TRD2025!!!

# OpenAI (REQUIRED)
OPENAI_API_KEY=sk-your-openai-api-key-here

# Supabase (REQUIRED)
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here

# Sanity CMS (Already configured)
NEXT_PUBLIC_SANITY_PROJECT_ID=haeswgd6
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=skiREUIcs7v0gpjJ5B2EToIigIkZ5qPQB2ISbba4WQKc5Gx9vdTJHXLQk4azew09FVlJwlFx77T1kk0sRAanKCOY9EsZAVkgfu3D8t5hLypgdVAvmQqg7d8YZDIrfSunwvXmy2bHCQVNH4aEq5SQOZiCUAl1UmGj5bpsz4gydRDUD4YurIzb

# Cron Security (Optional but recommended)
CRON_SECRET=generate-a-random-secret-string-here

# Site URL
NEXT_PUBLIC_SITE_URL=https://truerankdigital.com
```

### 3. Vercel Deployment

The `vercel.json` file is already configured to run the cron job every 6 hours:

```json
{
  "crons": [
    {
      "path": "/api/cron/auto-blog",
      "schedule": "0 */6 * * *"
    }
  ]
}
```

**Schedule Options:**
- `"0 */1 * * *"` - Every hour
- `"0 */6 * * *"` - Every 6 hours (current setting)
- `"0 0 * * *"` - Daily at midnight
- `"0 0 * * 1"` - Weekly on Monday

**Deploy to Vercel:**
```bash
git add .
git commit -m "Add auto-blog system"
git push
```

Vercel will automatically register the cron job!

---

## 🎯 How to Use

### Access Admin Panel

1. Go to `https://your-site.com/admin`
2. Enter password: `TRD2025!!!`
3. You'll see the dashboard with:
   - Automation status
   - Total posts
   - Next run schedule
   - Quick actions

### Enable Automation

1. Go to **Settings** in admin panel
2. Check "Enable Automation"
3. Configure:
   - **Themes**: Topics to write about (already pre-configured with AIO/SERP themes)
   - **Frequency**: hourly/daily/weekly
   - **Posts Per Run**: How many posts to generate each time
   - **Auto-publish to Sanity**: Enable/disable CMS publishing
4. Click "Save Schedule Settings"

### Manual Generation

- From dashboard: Click "Generate Now"
- From posts page: Click "+ Generate New Post"
- This bypasses the schedule and creates a post immediately

### View Blog Posts

Public pages:
- Blog listing: `https://your-site.com/blog`
- Single post: `https://your-site.com/blog/post-slug`

All posts include:
- ✅ Schema.org markup (BlogPosting, Breadcrumb)
- ✅ OpenGraph tags
- ✅ Twitter cards
- ✅ SEO-optimized meta tags
- ✅ Featured images from DALL-E 3
- ✅ AIO-focused content

---

## 🛠️ Configuration

### AI Prompts (Pre-configured for AIO/SERP)

The system prompts are already optimized for:
- Why traditional SEO is dying
- How AI search (ChatGPT, Perplexity, Google AI Overviews) is changing the game
- Practical strategies for AI-powered search
- Real-world impact and case studies

You can customize these in **Admin > Settings > AI Prompts**.

### Default Blog Themes

Pre-configured themes:
- AI Search Optimization
- Google AI Overviews
- ChatGPT SEO
- Voice Search
- Traditional SEO vs AIO
- Future of SERP
- E-E-A-T for AI
- Semantic Search
- Zero-Click Search
- Answer Engine Optimization

### Cost Estimation

**Per Blog Post:**
- GPT-4o (~1500 words): $0.015
- DALL-E 3 (1792x1024): $0.080
- **Total: ~$0.10 per post**

**Monthly Costs:**
- Every 6 hours (4/day): ~$12/month
- Daily (1/day): ~$3/month
- Hourly (24/day): ~$72/month

**Cost Optimization:**
- Use `gpt-4o-mini` instead: ~$0.001 per post
- Reduce `posts_per_run` to 1
- Increase frequency interval

---

## 🧪 Testing

### Test Cron Job Manually

```bash
curl https://your-site.vercel.app/api/cron/auto-blog \
  -H "Authorization: Bearer YOUR_CRON_SECRET"
```

### Test Manual Generation

1. Login to admin panel
2. Go to "Manage Posts"
3. Click "+ Generate New Post"
4. Check `/blog` page for new post

### Verify Database

```sql
-- Check settings
SELECT * FROM blog_settings;

-- Check schedule
SELECT * FROM blog_schedule;

-- Check posts
SELECT title, slug, published_at, views FROM blog_posts ORDER BY published_at DESC;
```

---

## 🐛 Troubleshooting

### Posts Not Generating

1. Check Supabase connection:
   - Verify `NEXT_PUBLIC_SUPABASE_URL`
   - Verify `SUPABASE_SERVICE_ROLE_KEY`
   - Ensure migrations ran successfully

2. Check OpenAI:
   - Verify `OPENAI_API_KEY` is valid
   - Check OpenAI billing limits
   - Check API logs in OpenAI dashboard

3. Check schedule:
   ```sql
   SELECT * FROM blog_schedule;
   ```
   - Ensure `enabled = true`
   - Check `next_run` timestamp

### Cron Not Running

1. Check Vercel logs:
   ```bash
   vercel logs --follow
   ```

2. Verify `vercel.json` is deployed

3. Test manually with curl (see Testing section above)

### Sanity Errors

- Sanity is optional! Posts still save to database
- Check `SANITY_API_TOKEN` permissions
- Verify project ID: `haeswgd6`

### Images Not Showing

1. Check DALL-E generation in logs
2. Verify image URL is saved in database:
   ```sql
   SELECT featured_image FROM blog_posts LIMIT 5;
   ```
3. Test image URL in browser

---

## 📊 Admin Panel Features

### Dashboard (`/admin/dashboard`)
- Automation status
- Total posts count
- Next/last run times
- Recent posts list
- Quick actions

### Settings (`/admin/settings`)
- Schedule configuration
- AI model selection (GPT-4o, GPT-4o-mini, etc.)
- Temperature and quality settings
- Custom prompts for content and images

### Posts Management (`/admin/posts`)
- View all posts
- Copy post links
- View stats (views, tags, Sanity status)
- Manual generation

---

## 🎓 Best Practices

1. **Start Small**: Begin with daily posts, scale up gradually
2. **Monitor Costs**: Check OpenAI usage dashboard weekly
3. **Review Content**: Check quality of first few posts
4. **Backup Database**: Regular Supabase backups
5. **Test in Dev**: Use staging environment first
6. **Update Themes**: Adjust themes based on performance
7. **Check Analytics**: Monitor blog traffic and engagement

---

## 📝 File Structure

```
website/
├── src/
│   ├── app/
│   │   ├── admin/              # Admin panel
│   │   │   ├── page.tsx        # Login
│   │   │   ├── dashboard/      # Main dashboard
│   │   │   ├── settings/       # Configuration
│   │   │   └── posts/          # Post management
│   │   ├── blog/               # Public blog
│   │   │   ├── page.tsx        # Listing
│   │   │   └── [slug]/         # Single post
│   │   └── api/
│   │       ├── admin/          # Admin APIs
│   │       │   ├── auth/       # Authentication
│   │       │   └── blog/       # Manual generation
│   │       └── cron/
│   │           └── auto-blog/  # Automated cron
│   └── lib/
│       ├── supabase-admin.ts   # Database client
│       ├── sanity-client.ts    # CMS client
│       └── admin-auth.ts       # Authentication
├── supabase/
│   └── migrations/             # Database schemas
├── vercel.json                 # Cron configuration
└── .env.local                  # Environment variables
```

---

## 🚀 Quick Start

```bash
# 1. Run database migrations in Supabase

# 2. Set environment variables in .env.local

# 3. Test locally
npm run dev

# 4. Login to admin
# Visit http://localhost:3000/admin
# Password: TRD2025!!!

# 5. Generate test post
# Click "Generate Now" in dashboard

# 6. View blog
# Visit http://localhost:3000/blog

# 7. Deploy to Vercel
git push

# 8. Enable automation in admin panel
```

---

## 🎉 You're All Set!

Your auto-blog system is ready to generate AI-powered content about AIO, the death of traditional SEO, and the future of search!

**Support:**
- Admin Panel: `https://your-site.com/admin`
- Password: `TRD2025!!!`
- OpenAI Dashboard: https://platform.openai.com/usage
- Supabase Dashboard: https://supabase.com/dashboard

**Ready to dominate AI search!** 🚀

