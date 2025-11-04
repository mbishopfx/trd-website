'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export function GenerateSingleButton() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleGenerate = async () => {
    if (!confirm('Generate 1 blog post now? This will take about 30 seconds.')) {
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('/api/admin/blog', {
        method: 'POST',
      });

      const data = await response.json();

      if (data.success) {
        alert(`✅ Success! Generated: ${data.post?.title || 'New post'}`);
        router.push('/admin/posts');
        router.refresh();
      } else {
        alert(`❌ Error: ${data.message || 'Failed to generate post'}`);
      }
    } catch (error) {
      console.error('Generation error:', error);
      alert('❌ Error: Failed to generate post. Check console for details.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleGenerate}
      disabled={loading}
      className="w-full bg-gradient-to-br from-orange-600 to-pink-600 rounded-xl p-6 hover:shadow-2xl transition-all duration-200 group text-left disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <div className="flex items-center gap-4 mb-3">
        <span className="text-4xl">{loading ? '⏳' : '🚀'}</span>
        <h3 className="text-xl font-bold text-white">
          {loading ? 'Generating...' : 'Generate 1 Post'}
        </h3>
      </div>
      <p className="text-orange-100 text-sm">
        {loading ? 'Creating your blog post...' : 'Manually trigger single blog post generation'}
      </p>
      <div className="mt-4 text-white font-semibold group-hover:translate-x-2 transition-transform">
        {loading ? 'Please wait...' : 'Generate →'}
      </div>
    </button>
  );
}

export function GenerateBulkButton() {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState('');
  const router = useRouter();

  const handleBulkGenerate = async () => {
    if (!confirm('Generate 10 blog posts now? This will take 3-5 minutes and cost about $1.00.')) {
      return;
    }

    setLoading(true);
    setProgress('Starting bulk generation...');

    try {
      const response = await fetch('/api/admin/blog/bulk-generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ count: 10 }),
      });

      const data = await response.json();

      if (data.success) {
        alert(`✅ Success! Generated ${data.postsGenerated} posts!\n\nClick OK to view them.`);
        router.push('/admin/posts');
        router.refresh();
      } else {
        alert(`❌ Error: ${data.message || 'Failed to generate posts'}`);
      }
    } catch (error) {
      console.error('Bulk generation error:', error);
      alert('❌ Error: Failed to generate posts. Check console for details.');
    } finally {
      setLoading(false);
      setProgress('');
    }
  };

  return (
    <button
      onClick={handleBulkGenerate}
      disabled={loading}
      className="w-full bg-gradient-to-br from-purple-600 to-indigo-600 rounded-xl p-6 hover:shadow-2xl transition-all duration-200 group text-left disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <div className="flex items-center gap-4 mb-3">
        <span className="text-4xl">{loading ? '⏳' : '⚡'}</span>
        <h3 className="text-xl font-bold text-white">
          {loading ? 'Generating...' : 'Generate 10 Posts'}
        </h3>
      </div>
      <p className="text-purple-100 text-sm">
        {loading ? progress || 'Creating 10 comprehensive articles...' : 'Bulk generate 10 AI blog posts at once'}
      </p>
      <div className="mt-4 text-white font-semibold group-hover:translate-x-2 transition-transform">
        {loading ? 'Please wait (3-5 min)...' : 'Generate Bulk →'}
      </div>
    </button>
  );
}

