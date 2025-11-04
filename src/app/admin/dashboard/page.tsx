/**
 * Admin Dashboard - Main Control Panel
 * Blog automation management and statistics
 */

import { redirect } from 'next/navigation';
import { isAdminAuthenticated, clearAdminAuth } from '@/lib/admin-auth';
import { blogDb } from '@/lib/supabase-admin';
import Link from 'next/link';
import { GenerateSingleButton, GenerateBulkButton } from './GenerateButtons';
import QRCodeGenerator from '@/components/QRCodeGenerator';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

export default async function AdminDashboardPage() {
  // Check authentication
  const isAuth = await isAdminAuthenticated();
  if (!isAuth) {
    redirect('/admin');
  }

  // Load dashboard data
  const schedule = await blogDb.getSchedule();
  const recentPosts = await blogDb.getPosts(5);

  // Load forms data
  const supabase = createClient(supabaseUrl, supabaseServiceKey);
  const { data: forms } = await supabase
    .from('forms')
    .select(`
      id,
      title,
      is_active,
      submissions:form_submissions(count)
    `)
    .order('created_at', { ascending: false })
    .limit(5);

  const formsWithCounts = forms?.map(form => ({
    ...form,
    submission_count: form.submissions?.[0]?.count || 0,
  })) || [];

  const totalSubmissions = formsWithCounts.reduce(
    (sum, f) => sum + f.submission_count,
    0
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Page Title */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">
              📊 Admin Dashboard
            </h1>
            <p className="text-gray-300">
              AI-Powered Blog System - True Rank Digital
            </p>
          </div>
          <form action={async () => {
            'use server';
            await clearAdminAuth();
            redirect('/admin');
          }}>
            <button
              type="submit"
              className="px-4 py-2 bg-red-500/20 text-red-200 rounded-lg hover:bg-red-500/30 transition-colors"
            >
              Logout
            </button>
          </form>
        </div>
        {/* Status Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-gray-300 text-sm font-medium">Automation Status</h3>
              <span className="text-2xl">{schedule?.enabled ? '✅' : '⏸️'}</span>
            </div>
            <p className="text-3xl font-bold text-white">
              {schedule?.enabled ? 'Active' : 'Paused'}
            </p>
            <p className="text-gray-400 text-sm mt-1">
              {schedule?.frequency || 'daily'} posts
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-gray-300 text-sm font-medium">Total Posts</h3>
              <span className="text-2xl">📝</span>
            </div>
            <p className="text-3xl font-bold text-white">
              {recentPosts.length}
            </p>
            <p className="text-gray-400 text-sm mt-1">
              Published articles
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-gray-300 text-sm font-medium">Next Run</h3>
              <span className="text-2xl">⏰</span>
            </div>
            <p className="text-xl font-bold text-white">
              {schedule?.next_run 
                ? new Date(schedule.next_run).toLocaleDateString()
                : 'Not scheduled'}
            </p>
            <p className="text-gray-400 text-sm mt-1">
              {schedule?.next_run 
                ? new Date(schedule.next_run).toLocaleTimeString()
                : 'Enable automation'}
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-gray-300 text-sm font-medium">Last Run</h3>
              <span className="text-2xl">📅</span>
            </div>
            <p className="text-xl font-bold text-white">
              {schedule?.last_run 
                ? new Date(schedule.last_run).toLocaleDateString()
                : 'Never'}
            </p>
            <p className="text-gray-400 text-sm mt-1">
              {schedule?.last_run 
                ? new Date(schedule.last_run).toLocaleTimeString()
                : 'No runs yet'}
            </p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Link
            href="/admin/settings"
            className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-6 hover:shadow-2xl transition-all duration-200 group"
          >
            <div className="flex items-center gap-4 mb-3">
              <span className="text-4xl">⚙️</span>
              <h3 className="text-xl font-bold text-white">Settings</h3>
            </div>
            <p className="text-blue-100 text-sm">
              Configure AI models, prompts, schedule, and themes
            </p>
            <div className="mt-4 text-white font-semibold group-hover:translate-x-2 transition-transform">
              Configure →
            </div>
          </Link>

          <Link
            href="/admin/posts"
            className="bg-gradient-to-br from-green-600 to-teal-600 rounded-xl p-6 hover:shadow-2xl transition-all duration-200 group"
          >
            <div className="flex items-center gap-4 mb-3">
              <span className="text-4xl">📚</span>
              <h3 className="text-xl font-bold text-white">Manage Posts</h3>
            </div>
            <p className="text-green-100 text-sm">
              View, edit, and manually generate blog posts
            </p>
            <div className="mt-4 text-white font-semibold group-hover:translate-x-2 transition-transform">
              Manage →
            </div>
          </Link>

          <Link
            href="/admin/forms"
            className="bg-gradient-to-br from-yellow-600 to-orange-600 rounded-xl p-6 hover:shadow-2xl transition-all duration-200 group"
          >
            <div className="flex items-center gap-4 mb-3">
              <span className="text-4xl">📋</span>
              <h3 className="text-xl font-bold text-white">Forms</h3>
            </div>
            <p className="text-yellow-100 text-sm">
              Create lead capture forms with QR codes
            </p>
            <div className="mt-4 text-white font-semibold group-hover:translate-x-2 transition-transform">
              Manage →
            </div>
          </Link>

          <GenerateSingleButton />
        </div>

        {/* More Actions */}
        <div className="grid md:grid-cols-1 gap-6 mb-8">
          <GenerateBulkButton />
        </div>

        {/* Forms Overview */}
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span>📋</span> Forms & Submissions
            </h2>
            <Link
              href="/admin/forms/builder"
              className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              + Create Form
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white/5 rounded-lg p-4">
              <div className="text-gray-400 text-sm mb-1">Total Forms</div>
              <div className="text-2xl font-bold text-white">{formsWithCounts.length}</div>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <div className="text-gray-400 text-sm mb-1">Active Forms</div>
              <div className="text-2xl font-bold text-green-400">
                {formsWithCounts.filter(f => f.is_active).length}
              </div>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <div className="text-gray-400 text-sm mb-1">Total Submissions</div>
              <div className="text-2xl font-bold text-blue-400">{totalSubmissions}</div>
            </div>
          </div>

          {formsWithCounts.length === 0 ? (
            <div className="text-center py-8 text-gray-400">
              <p className="text-lg mb-2">No forms yet</p>
              <p className="text-sm">Create your first lead capture form!</p>
            </div>
          ) : (
            <div className="space-y-3">
              {formsWithCounts.map((form) => (
                <div
                  key={form.id}
                  className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-white font-semibold">{form.title}</h3>
                        <span
                          className={`px-2 py-0.5 rounded text-xs font-semibold ${
                            form.is_active
                              ? 'bg-green-500/20 text-green-400'
                              : 'bg-gray-500/20 text-gray-400'
                          }`}
                        >
                          {form.is_active ? 'Active' : 'Inactive'}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm">
                        {form.submission_count} submission{form.submission_count !== 1 ? 's' : ''}
                      </p>
                    </div>
                    <Link
                      href={`/admin/forms/${form.id}/submissions`}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                    >
                      View →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Recent Posts */}
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span>📝</span> Recent Blog Posts
          </h2>
          
          {recentPosts.length === 0 ? (
            <div className="text-center py-12 text-gray-400">
              <p className="text-lg mb-2">No posts yet</p>
              <p className="text-sm">Generate your first blog post to get started!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {recentPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-white font-semibold mb-1">
                        {post.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span>📅 {new Date(post.published_at).toLocaleDateString()}</span>
                        <span>👁️ {post.views} views</span>
                        <span>🏷️ {post.tags?.length || 0} tags</span>
                      </div>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      target="_blank"
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm whitespace-nowrap"
                    >
                      View →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* QR Code Generator */}
        <div className="mt-8">
          <QRCodeGenerator />
        </div>

        {/* System Info */}
        <div className="mt-8 bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
          <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
            <span>ℹ️</span> System Information
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <p className="text-gray-400 mb-1">Current Themes</p>
              <p className="text-white font-medium">
                {schedule?.themes || 'Not configured'}
              </p>
            </div>
            <div>
              <p className="text-gray-400 mb-1">Posts Per Run</p>
              <p className="text-white font-medium">
                {schedule?.posts_per_run || 1} post(s)
              </p>
            </div>
            <div>
              <p className="text-gray-400 mb-1">Auto Publish</p>
              <p className="text-white font-medium">
                {schedule?.auto_publish ? 'Enabled' : 'Disabled'}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

