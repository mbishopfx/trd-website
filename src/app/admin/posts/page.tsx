/**
 * Admin Posts Management Page
 * View all posts and manually generate new ones
 */

import { redirect } from 'next/navigation';
import { isAdminAuthenticated } from '@/lib/admin-auth';
import { blogDb } from '@/lib/supabase-admin';
import Link from 'next/link';

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
          <form action={async () => {
            'use server';
            await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/admin/blog/generate`, { 
              method: 'POST' 
            });
            redirect('/admin/posts?generated=true');
          }}>
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg font-semibold hover:from-green-700 hover:to-teal-700 transition-all shadow-lg"
            >
              + Generate New Post
            </button>
          </form>
        </div>
        {posts.length === 0 ? (
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-12 border border-white/20 text-center">
            <div className="text-6xl mb-4">📝</div>
            <h2 className="text-2xl font-bold text-white mb-2">No Posts Yet</h2>
            <p className="text-gray-300 mb-6">
              Generate your first AI-powered blog post to get started!
            </p>
            <form action={async () => {
              'use server';
              await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/admin/blog/generate`, { 
                method: 'POST' 
              });
              redirect('/admin/posts?generated=true');
            }}>
              <button
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all"
              >
                Generate First Post
              </button>
            </form>
          </div>
        ) : (
          <div className="space-y-4">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-colors"
              >
                <div className="flex items-start gap-6">
                  {/* Featured Image */}
                  {post.featured_image && (
                    <div className="flex-shrink-0 w-40 h-24 rounded-lg overflow-hidden bg-white/5">
                      <img
                        src={post.featured_image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}

                  {/* Post Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                      {post.excerpt}
                    </p>
                    
                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                      <span>📅 {new Date(post.published_at).toLocaleDateString()}</span>
                      <span>👁️ {post.views} views</span>
                      <span>🏷️ {post.tags?.length || 0} tags</span>
                      {post.sanity_id && <span className="text-green-400">✓ Published to Sanity</span>}
                    </div>

                    {/* Tags */}
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-blue-500/20 text-blue-200 rounded text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col gap-2">
                    <Link
                      href={`/blog/${post.slug}`}
                      target="_blank"
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm text-center whitespace-nowrap"
                    >
                      View Post →
                    </Link>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(`${window.location.origin}/blog/${post.slug}`);
                        alert('Link copied!');
                      }}
                      className="px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors text-sm whitespace-nowrap"
                    >
                      Copy Link
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
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

