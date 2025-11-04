/**
 * Sanity CMS Client
 * Handles publishing blog posts to Sanity headless CMS
 */

import { createClient, type SanityClient } from '@sanity/client';

export const sanityConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'haeswgd6',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.SANITY_API_VERSION || '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN || 'skiREUIcs7v0gpjJ5B2EToIigIkZ5qPQB2ISbba4WQKc5Gx9vdTJHXLQk4azew09FVlJwlFx77T1kk0sRAanKCOY9EsZAVkgfu3D8t5hLypgdVAvmQqg7d8YZDIrfSunwvXmy2bHCQVNH4aEq5SQOZiCUAl1UmGj5bpsz4gydRDUD4YurIzb',
};

let _sanityClient: SanityClient | null = null;

/**
 * Get Sanity client instance
 * Returns null if not properly configured
 */
export function getSanityClient(): SanityClient | null {
  if (!sanityConfig.projectId || !sanityConfig.token) {
    console.warn('⚠️ Sanity CMS not configured. Posts will only be saved to database.');
    return null;
  }

  if (!_sanityClient) {
    try {
      _sanityClient = createClient(sanityConfig);
    } catch (error) {
      console.error('Error creating Sanity client:', error);
      return null;
    }
  }

  return _sanityClient;
}

/**
 * Create a blog post in Sanity CMS
 */
export async function createSanityBlogPost(post: {
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  author?: string;
  tags?: string[];
  featuredImage?: string;
}) {
  const client = getSanityClient();

  // Graceful fallback if Sanity not configured
  if (!client) {
    return {
      success: false,
      message: 'Sanity CMS not configured',
      skipped: true,
    };
  }

  try {
    // First, upload the featured image if provided
    let imageAssetRef = null;
    if (post.featuredImage && post.featuredImage.startsWith('http')) {
      try {
        const imageBuffer = await fetch(post.featuredImage).then((res) => res.arrayBuffer());
        const imageAsset = await client.assets.upload('image', Buffer.from(imageBuffer), {
          filename: `${post.slug}.png`,
        });
        imageAssetRef = imageAsset._id;
      } catch (imgError) {
        console.error('Error uploading image to Sanity:', imgError);
        // Continue without image
      }
    }

    // Create the blog post document
    const document = {
      _type: 'post',
      title: post.title,
      slug: {
        _type: 'slug',
        current: post.slug,
      },
      publishedAt: new Date().toISOString(),
      excerpt: post.excerpt || '',
      body: [
        {
          _type: 'block',
          style: 'normal',
          children: [
            {
              _type: 'span',
              text: post.content,
              marks: [],
            },
          ],
        },
      ],
      categories: post.tags?.map((tag) => ({
        _type: 'reference',
        _ref: tag,
      })),
      mainImage: imageAssetRef
        ? {
            _type: 'image',
            asset: {
              _type: 'reference',
              _ref: imageAssetRef,
            },
          }
        : undefined,
    };

    const result = await client.create(document);

    return {
      success: true,
      message: 'Blog post created in Sanity',
      sanityId: result._id,
    };
  } catch (error) {
    console.error('Error creating Sanity blog post:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Unknown error',
      error,
    };
  }
}

/**
 * Get blog posts from Sanity
 */
export async function getSanityBlogPosts(limit = 100) {
  const client = getSanityClient();

  if (!client) {
    return [];
  }

  try {
    const query = `*[_type == "post"] | order(publishedAt desc) [0...${limit}] {
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      body,
      mainImage,
      categories
    }`;

    const posts = await client.fetch(query);
    return posts;
  } catch (error) {
    console.error('Error fetching Sanity posts:', error);
    return [];
  }
}

/**
 * Get single blog post from Sanity by slug
 */
export async function getSanityBlogPost(slug: string) {
  const client = getSanityClient();

  if (!client) {
    return null;
  }

  try {
    const query = `*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      body,
      mainImage,
      categories
    }`;

    const post = await client.fetch(query, { slug });
    return post;
  } catch (error) {
    console.error('Error fetching Sanity post:', error);
    return null;
  }
}

