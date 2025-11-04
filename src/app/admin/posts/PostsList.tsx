'use client';

import Link from 'next/link';

interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  featured_image?: string;
  published_at: string;
  views: number;
  tags?: string[];
  sanity_id?: string;
}

export default function PostsList({ posts }: { posts: Post[] }) {
  const copyLink = (slug: string) => {
    navigator.clipboard.writeText(`${window.location.origin}/blog/${slug}`);
    alert('✅ Link copied to clipboard!');
  };

  return (
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
                onClick={() => copyLink(post.slug)}
                className="px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors text-sm whitespace-nowrap"
              >
                Copy Link
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

