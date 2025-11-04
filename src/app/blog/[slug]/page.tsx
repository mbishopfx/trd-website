/**
 * Single Blog Post Page
 * Displays individual blog post with comprehensive schema optimization
 */

import { blogDb } from '@/lib/supabase-admin';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import BlogContent from '@/components/BlogContent';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await blogDb.getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.meta_title || post.title,
    description: post.meta_description || post.excerpt,
    keywords: post.focus_keyword,
    openGraph: {
      title: post.title,
      description: post.excerpt || '',
      type: 'article',
      publishedTime: post.published_at,
      authors: [post.author || 'True Rank Digital'],
      images: post.featured_image ? [post.featured_image] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt || '',
      images: post.featured_image ? [post.featured_image] : [],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await blogDb.getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Generate comprehensive JSON-LD schema
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.featured_image,
    datePublished: post.published_at,
    dateModified: post.updated_at || post.published_at,
    author: {
      '@type': 'Organization',
      name: post.author || 'True Rank Digital',
      url: process.env.NEXT_PUBLIC_SITE_URL || 'https://truerankdigital.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'True Rank Digital',
      logo: {
        '@type': 'ImageObject',
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://truerankdigital.com'}/images/logos/trdlogoblue.webp`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${process.env.NEXT_PUBLIC_SITE_URL || 'https://truerankdigital.com'}/blog/${post.slug}`,
    },
    keywords: post.tags?.join(', '),
    articleSection: 'AI Search & SEO',
  };

  // Breadcrumb schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: process.env.NEXT_PUBLIC_SITE_URL || 'https://truerankdigital.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://truerankdigital.com'}/blog`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://truerankdigital.com'}/blog/${post.slug}`,
      },
    ],
  };

  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <article className="min-h-screen bg-black pt-20">
        {/* Breadcrumb Navigation */}
        <div className="bg-gray-900 border-b border-gray-800">
          <div className="max-w-4xl mx-auto px-4 py-4">
            <nav className="flex items-center gap-2 text-sm text-gray-400">
              <Link href="/" className="hover:text-blue-400 transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-blue-400 transition-colors">
                Blog
              </Link>
              <span>/</span>
              <span className="text-white font-medium truncate">
                {post.title}
              </span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <header className="bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 text-white py-16">
          <div className="max-w-4xl mx-auto px-4">
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300 mb-6">
              <span className="flex items-center gap-2">
                📅 {new Date(post.published_at).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
              <span>•</span>
              <span className="flex items-center gap-2">
                ✍️ {post.author || 'True Rank Digital'}
              </span>
              <span>•</span>
              <span className="flex items-center gap-2">
                👁️ {post.views} views
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Excerpt */}
            {post.excerpt && (
              <p className="text-xl text-gray-200 leading-relaxed">
                {post.excerpt}
              </p>
            )}

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-6">
                {post.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-white/10 backdrop-blur-lg rounded-full text-sm font-medium border border-white/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </header>

        {/* Featured Image */}
        {post.featured_image && (
          <div className="max-w-5xl mx-auto px-4 -mt-12 mb-12">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={post.featured_image}
                alt={post.title}
                className="w-full h-auto"
              />
            </div>
          </div>
        )}

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 pb-16">
          <BlogContent content={post.content} />

          {/* CTA Box */}
          <div className="mt-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Optimize for AI Search?
            </h2>
            <p className="text-xl mb-6 text-blue-100">
              Get a free audit and discover how to dominate the new search landscape.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-xl"
            >
              Get Your Free AI Search Audit
            </Link>
          </div>

          {/* Back to Blog */}
          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors"
            >
              ← Back to All Articles
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}

export const revalidate = 60; // Revalidate every 60 seconds

