#!/usr/bin/env node

const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  'https://whybuzitxsjhegujlegr.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndoeWJ1eml0eHNqaGVndWpsZWdyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1ODc0MjM3NSwiZXhwIjoyMDc0MzE4Mzc1fQ.sgI3VDhZ66SKon_wZJDovD4l8sicSCWRZQkaOUV1kdk'
);

async function checkDatabase() {
  console.log('🔍 Checking database status...\n');

  try {
    // Check if tables exist
    const { data: settings, error: settingsError } = await supabase
      .from('blog_settings')
      .select('*', { count: 'exact', head: true });

    if (settingsError) {
      console.log('❌ Tables not found!');
      console.log('\n📋 Run SQL Setup:');
      console.log('1. Go to: https://supabase.com/dashboard/project/whybuzitxsjhegujlegr/sql/new');
      console.log('2. Open file: supabase/SETUP_ALL_TABLES.sql');
      console.log('3. Copy ALL contents and paste into SQL Editor');
      console.log('4. Click RUN button');
      process.exit(1);
    }

    // Get counts
    const { count: settingsCount } = await supabase
      .from('blog_settings')
      .select('*', { count: 'exact', head: true });

    const { count: scheduleCount } = await supabase
      .from('blog_schedule')
      .select('*', { count: 'exact', head: true });

    const { count: postsCount } = await supabase
      .from('blog_posts')
      .select('*', { count: 'exact', head: true });

    console.log('✅ Database Status:');
    console.log(`   blog_settings: ${settingsCount || 0} rows`);
    console.log(`   blog_schedule: ${scheduleCount || 0} rows`);
    console.log(`   blog_posts: ${postsCount || 0} posts`);

    if (settingsCount === 0) {
      console.log('\n⚠️  Settings table is empty!');
      console.log('Run the SQL setup script to insert default data.');
      process.exit(1);
    }

    // Check schedule settings
    const { data: schedule } = await supabase
      .from('blog_schedule')
      .select('*')
      .single();

    console.log('\n📅 Automation Config:');
    console.log(`   Enabled: ${schedule?.enabled ? '✅ YES' : '❌ NO'}`);
    console.log(`   Frequency: ${schedule?.frequency}`);
    console.log(`   Posts per run: ${schedule?.posts_per_run}`);
    console.log(`   Themes: ${schedule?.themes?.split(',').length || 0} themes configured`);

    console.log('\n🎉 Database is fully configured!');
    console.log('\n🚀 Ready to use:');
    console.log('   npm run dev');
    console.log('   Visit: http://localhost:3000/admin');
    console.log('   Password: TRD2025!!!');
    console.log('\n💡 Try the new "Generate 10 Posts" button!');

  } catch (err) {
    console.error('❌ Error:', err.message);
    process.exit(1);
  }
}

checkDatabase();

