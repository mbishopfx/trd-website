/**
 * Blog Listing Page
 * Displays all published blog posts with schema optimization
 */

import { blogDb } from '@/lib/supabase-admin';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - AI Search Optimization & The Future of SEO | True Rank Digital',
  description: 'Discover cutting-edge insights on AI search, AIO optimization, and why traditional SEO is evolving. Expert analysis on Google AI Overviews, ChatGPT SEO, and the future of SERP.',
  openGraph: {
    title: 'Blog - AI Search Optimization & The Future of SEO',
    description: 'Expert insights on AI search, AIO optimization, and the evolution of SEO',
    type: 'website',
  },
};

export default async function BlogPage() {
  const posts = await blogDb.getPosts();

  // Generate JSON-LD schema for the blog listing
  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'True Rank Digital Blog',
    description: 'Expert insights on AI search optimization and the future of SEO',
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://truerankdigital.com'}/blog`,
    publisher: {
      '@type': 'Organization',
      name: 'True Rank Digital',
      logo: {
        '@type': 'ImageObject',
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://truerankdigital.com'}/images/logos/trdlogoblue.webp`,
      },
    },
    blogPost: posts.slice(0, 10).map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      image: post.featured_image,
      datePublished: post.published_at,
      author: {
        '@type': 'Organization',
        name: post.author || 'True Rank Digital',
      },
      url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://truerankdigital.com'}/blog/${post.slug}`,
    })),
  };

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      <div className="min-h-screen bg-black">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                AI Search & The Future of SEO
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed">
                Discover how AI is transforming search, why traditional SEO is evolving, 
                and practical strategies to dominate AI Overviews, ChatGPT, and the new SERP landscape.
              </p>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">📝</div>
              <h2 className="text-2xl font-bold text-white mb-2">
                Coming Soon
              </h2>
              <p className="text-gray-400">
                AI-powered content is being generated. Check back soon!
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group"
                >
                  <article className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 h-full flex flex-col border border-gray-800">
                    {/* Featured Image */}
                    {post.featured_image && (
                      <div className="aspect-video w-full overflow-hidden bg-gray-800">
                        <img
                          src={post.featured_image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h2 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                        {post.title}
                      </h2>
                      
                      <p className="text-gray-300 mb-4 line-clamp-3 flex-1 leading-relaxed">
                        {post.excerpt}
                      </p>

                      {/* Meta Info */}
                      <div className="flex items-center justify-between text-sm text-gray-400 pt-4 border-t border-gray-800">
                        <span className="flex items-center gap-1">
                          📅 {new Date(post.published_at).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </span>
                        <span className="flex items-center gap-1">
                          👁️ {post.views} views
                        </span>
                      </div>

                      {/* Tags */}
                      {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-4">
                          {post.tags.slice(0, 3).map((tag, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-medium border border-blue-500/30"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Read More */}
                      <div className="mt-4 text-blue-400 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                        Read Article
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Dominate AI Search?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Let's optimize your business for the future of search engines.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl"
            >
              Get Your Free AI Search Audit
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export const revalidate = 60; // Revalidate every 60 seconds

