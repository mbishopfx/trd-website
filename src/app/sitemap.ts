import type { MetadataRoute } from 'next';
import path from 'path';
import { promises as fs } from 'fs';
import { siteUrl } from '@/lib/seo/siteIdentity';

type PageEntry = {
  url: string;
  lastModified?: string;
};

const SKIP_DIRS = new Set(['api', 'admin', 'forms']);

function isRouteGroup(segment: string) {
  return segment.startsWith('(') && segment.endsWith(')');
}

function isDynamicSegment(segment: string) {
  return segment.includes('[') && segment.includes(']');
}

async function fileExists(filePath: string) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function collectStaticRoutesFromAppDir(): Promise<PageEntry[]> {
  const appDir = path.join(process.cwd(), 'src', 'app');
  const entries: PageEntry[] = [];

  async function walk(currentDir: string, routeSegments: string[]) {
    const dirents = await fs.readdir(currentDir, { withFileTypes: true });

    const pageFile = path.join(currentDir, 'page.tsx');
    if (await fileExists(pageFile)) {
      const routePath = `/${routeSegments.filter(Boolean).join('/')}`.replace(/\/+$/, '') || '/';
      const stats = await fs.stat(pageFile);
      entries.push({
        url: `${siteUrl}${routePath === '/' ? '' : routePath}`,
        lastModified: stats.mtime.toISOString(),
      });
    }

    for (const dirent of dirents) {
      if (!dirent.isDirectory()) continue;
      if (dirent.name.startsWith('.')) continue;
      if (SKIP_DIRS.has(dirent.name)) continue;
      if (isDynamicSegment(dirent.name)) continue;

      const nextSegments = isRouteGroup(dirent.name)
        ? routeSegments
        : [...routeSegments, dirent.name];
      await walk(path.join(currentDir, dirent.name), nextSegments);
    }
  }

  await walk(appDir, []);

  const uniqueByUrl = new Map<string, PageEntry>();
  for (const entry of entries) uniqueByUrl.set(entry.url, entry);

  return [...uniqueByUrl.values()];
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticEntries = await collectStaticRoutesFromAppDir();

  const blogEntries: PageEntry[] = [];
  try {
    const { blogDb } = await import('@/lib/supabase-admin');
    const posts = await blogDb.getPosts();
    for (const post of posts) {
      if (!post?.slug || !post?.published_at) continue;
      blogEntries.push({
        url: `${siteUrl}/blog/${post.slug}`,
        lastModified: new Date(post.updated_at || post.published_at).toISOString(),
      });
    }
  } catch {
    // If DB credentials are unavailable at build/runtime, ship a sitemap for the static site only.
  }

  const allEntries = [...staticEntries, ...blogEntries];
  const uniqueByUrl = new Map<string, PageEntry>();
  for (const entry of allEntries) uniqueByUrl.set(entry.url, entry);

  return [...uniqueByUrl.values()];
}

