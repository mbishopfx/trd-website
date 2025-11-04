'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function GenerateButton() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/admin/blog', {
        method: 'POST',
      });

      const data = await response.json();

      if (data.success) {
        alert(`✅ Success! Generated: ${data.post?.title || 'New post'}`);
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
      className="px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg font-semibold hover:from-green-700 hover:to-teal-700 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {loading ? '⏳ Generating...' : '+ Generate New Post'}
    </button>
  );
}

