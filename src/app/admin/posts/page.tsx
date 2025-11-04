/**
 * Admin Posts Management Page
 * View all posts and manually generate new ones
 */

import { redirect } from 'next/navigation';
import { isAdminAuthenticated } from '@/lib/admin-auth';
import { blogDb } from '@/lib/supabase-admin';
import Link from 'next/link';
import GenerateButton from './GenerateButton';
import PostsList from './PostsList';

export default async function AdminPostsPage() {
  // Check authentication
  const isAuth = await isAdminAuthenticated();
  if (!isAuth) {
    redirect('/admin');
  }

  // Load all posts
  const posts = await blogDb.getPosts();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Page Title */}
        <div className="flex items-center gap-4 mb-4">
          <Link
            href="/admin/dashboard"
            className="text-gray-400 hover:text-white transition-colors text-lg"
          >
            ← Back to Dashboard
          </Link>
        </div>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">
              📚 Blog Posts
            </h1>
            <p className="text-gray-300">
              {posts.length} total posts • Manage and generate content
            </p>
          </div>
          <GenerateButton />
        </div>
        {posts.length === 0 ? (
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-12 border border-white/20 text-center">
            <div className="text-6xl mb-4">📝</div>
            <h2 className="text-2xl font-bold text-white mb-2">No Posts Yet</h2>
            <p className="text-gray-300 mb-6">
              Generate your first AI-powered blog post to get started!
            </p>
            <GenerateButton />
          </div>
        ) : (
          <PostsList posts={posts} />
        )}

        {/* Post Stats */}
        {posts.length > 0 && (
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-gray-300 text-sm font-medium mb-2">Total Posts</h3>
              <p className="text-3xl font-bold text-white">{posts.length}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-gray-300 text-sm font-medium mb-2">Total Views</h3>
              <p className="text-3xl font-bold text-white">
                {posts.reduce((sum, post) => sum + (post.views || 0), 0)}
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-gray-300 text-sm font-medium mb-2">Published to Sanity</h3>
              <p className="text-3xl font-bold text-white">
                {posts.filter((post) => post.sanity_id).length}
              </p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

