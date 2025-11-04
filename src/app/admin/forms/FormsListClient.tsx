'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

interface Form {
  id: string;
  title: string;
  slug: string;
  description?: string;
  is_active: boolean;
  qr_code_url?: string;
  created_at: string;
  submission_count: number;
}

export default function FormsListClient({ initialForms }: { initialForms: Form[] }) {
  const [forms, setForms] = useState(initialForms);
  const router = useRouter();

  const copyUrl = (slug: string) => {
    const url = `${window.location.origin}/forms/${slug}`;
    navigator.clipboard.writeText(url);
    alert('✅ URL copied to clipboard!');
  };

  const downloadQR = async (qrUrl: string, title: string) => {
    try {
      const response = await fetch(qrUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `qr-${title.toLowerCase().replace(/\s+/g, '-')}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download error:', error);
      alert('Failed to download QR code');
    }
  };

  const deleteForm = async (id: string, title: string) => {
    if (!confirm(`Are you sure you want to delete "${title}"?\n\nThis will also delete all submissions.`)) {
      return;
    }

    try {
      const response = await fetch(`/api/admin/forms/${id}`, {
        method: 'DELETE',
      });

      const data = await response.json();

      if (data.success) {
        setForms(forms.filter(f => f.id !== id));
        alert('✅ Form deleted successfully');
        router.refresh();
      } else {
        alert(`❌ Error: ${data.message}`);
      }
    } catch (error) {
      console.error('Delete error:', error);
      alert('Failed to delete form');
    }
  };

  if (forms.length === 0) {
    return (
      <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-16 text-center">
        <div className="text-6xl mb-4">📝</div>
        <h3 className="text-2xl font-bold text-white mb-2">No Forms Yet</h3>
        <p className="text-gray-400 mb-6">Create your first lead capture form to get started</p>
        <Link
          href="/admin/forms/builder"
          className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all"
        >
          Create Your First Form
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-6">
      {forms.map(form => (
        <div
          key={form.id}
          className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all"
        >
          <div className="flex items-start gap-6">
            {/* QR Code Thumbnail */}
            {form.qr_code_url && (
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-white rounded-lg p-2 relative">
                  <Image
                    src={form.qr_code_url}
                    alt={`QR code for ${form.title}`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            )}

            {/* Form Info */}
            <div className="flex-1">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{form.title}</h3>
                  {form.description && (
                    <p className="text-gray-400 text-sm mb-2">{form.description}</p>
                  )}
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-gray-500">
                      /forms/{form.slug}
                    </span>
                    <span
                      className={`px-2 py-1 rounded text-xs font-semibold ${
                        form.is_active
                          ? 'bg-green-500/20 text-green-400'
                          : 'bg-gray-500/20 text-gray-400'
                      }`}
                    >
                      {form.is_active ? 'Active' : 'Inactive'}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-blue-400">
                    {form.submission_count}
                  </div>
                  <div className="text-xs text-gray-500">submissions</div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2 mt-4">
                <Link
                  href={`/admin/forms/${form.id}/submissions`}
                  className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  📊 View Submissions ({form.submission_count})
                </Link>
                <button
                  onClick={() => copyUrl(form.slug)}
                  className="px-4 py-2 bg-gray-700 text-white text-sm font-semibold rounded-lg hover:bg-gray-600 transition-colors"
                >
                  📋 Copy URL
                </button>
                {form.qr_code_url && (
                  <button
                    onClick={() => downloadQR(form.qr_code_url!, form.title)}
                    className="px-4 py-2 bg-gray-700 text-white text-sm font-semibold rounded-lg hover:bg-gray-600 transition-colors"
                  >
                    ⬇️ Download QR
                  </button>
                )}
                <button
                  onClick={() => window.open(`/forms/${form.slug}`, '_blank')}
                  className="px-4 py-2 bg-gray-700 text-white text-sm font-semibold rounded-lg hover:bg-gray-600 transition-colors"
                >
                  👁️ Preview
                </button>
                <button
                  onClick={() => deleteForm(form.id, form.title)}
                  className="px-4 py-2 bg-red-600/20 text-red-400 text-sm font-semibold rounded-lg hover:bg-red-600/30 transition-colors ml-auto"
                >
                  🗑️ Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

