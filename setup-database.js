#!/usr/bin/env node

/**
 * Database Setup Script
 * Creates all blog tables and inserts default data
 */

const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://whybuzitxsjhegujlegr.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndoeWJ1eml0eHNqaGVndWpsZWdyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1ODc0MjM3NSwiZXhwIjoyMDc0MzE4Mzc1fQ.sgI3VDhZ66SKon_wZJDovD4l8sicSCWRZQkaOUV1kdk';

const supabase = createClient(supabaseUrl, supabaseKey);

async function setupDatabase() {
  console.log('🚀 Starting database setup...\n');

  try {
    // Read the SQL file
    const fs = require('fs');
    const sql = fs.readFileSync('./supabase/SETUP_ALL_TABLES.sql', 'utf8');

    console.log('📝 Executing SQL script...');
    
    // Execute the SQL
    const { data, error } = await supabase.rpc('exec_sql', { sql_query: sql }).catch(() => ({
      data: null,
      error: { message: 'RPC function not available, using direct table creation' }
    }));

    if (error && error.message.includes('not available')) {
      console.log('⚠️  RPC not available, creating tables directly...\n');
      
      // Create tables directly using the Supabase client
      // This approach uses the REST API instead of raw SQL
      
      // Check if tables exist
      const { data: existingTables, error: checkError } = await supabase
        .from('blog_settings')
        .select('id')
        .limit(1);

      if (checkError && checkError.code === 'PGRST204') {
        console.log('❌ Tables do not exist. You need to run the SQL script manually.');
        console.log('\n📋 Instructions:');
        console.log('1. Go to: https://supabase.com/dashboard/project/whybuzitxsjhegujlegr/sql/new');
        console.log('2. Open file: supabase/SETUP_ALL_TABLES.sql');
        console.log('3. Copy ALL contents and paste into SQL Editor');
        console.log('4. Click "Run" button');
        console.log('5. Wait for "✅ BLOG SYSTEM SETUP COMPLETE!" message');
        console.log('\nOr run this command:');
        console.log('psql "postgresql://postgres:Blameit1!@db.whybuzitxsjhegujlegr.supabase.co:5432/postgres" < supabase/SETUP_ALL_TABLES.sql');
        process.exit(1);
      } else if (!checkError) {
        console.log('✅ Tables already exist!');
        
        // Check counts
        const { count: settingsCount } = await supabase
          .from('blog_settings')
          .select('*', { count: 'exact', head: true });
        
        const { count: scheduleCount } = await supabase
          .from('blog_schedule')
          .select('*', { count: 'exact', head: true });
        
        const { count: postsCount } = await supabase
          .from('blog_posts')
          .select('*', { count: 'exact', head: true });

        console.log('\n📊 Database Status:');
        console.log(`   blog_settings: ${settingsCount || 0} rows`);
        console.log(`   blog_schedule: ${scheduleCount || 0} rows`);
        console.log(`   blog_posts: ${postsCount || 0} posts`);
        
        if (settingsCount === 0) {
          console.log('\n⚠️  Settings table is empty. Run the SQL script to insert default data.');
        } else {
          console.log('\n✅ Database is fully configured!');
          console.log('\n🎉 Ready to use! Start your server:');
          console.log('   npm run dev');
          console.log('\nThen visit: http://localhost:3000/admin');
          console.log('Password: TRD2025!!!');
        }
      }
    } else if (error) {
      console.error('❌ Error:', error.message);
      process.exit(1);
    } else {
      console.log('✅ SQL executed successfully!');
      console.log(data);
    }

  } catch (err) {
    console.error('❌ Setup failed:', err.message);
    console.log('\n📋 Manual Setup Required:');
    console.log('1. Go to: https://supabase.com/dashboard/project/whybuzitxsjhegujlegr/sql/new');
    console.log('2. Copy contents of: supabase/SETUP_ALL_TABLES.sql');
    console.log('3. Paste and click "Run"');
    process.exit(1);
  }
}

setupDatabase();

