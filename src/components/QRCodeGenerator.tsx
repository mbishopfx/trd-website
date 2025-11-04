'use client';

import { useState, useEffect } from 'react';

interface Page {
  title: string;
  url: string;
  type: string;
}

interface QRCode {
  id: string;
  title: string;
  url: string;
  qrCodeUrl: string;
  pageType: string;
  createdAt: string;
}

export default function QRCodeGenerator() {
  const [pages, setPages] = useState<Page[]>([]);
  const [qrCodes, setQrCodes] = useState<QRCode[]>([]);
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState<'dropdown' | 'manual'>('dropdown');
  const [selectedPage, setSelectedPage] = useState('');
  const [manualTitle, setManualTitle] = useState('');
  const [manualUrl, setManualUrl] = useState('');
  const [showGenerated, setShowGenerated] = useState(false);

  useEffect(() => {
    fetchPages();
    fetchQRCodes();
  }, []);

  const fetchPages = async () => {
    try {
      const response = await fetch('/api/admin/qr-codes/pages');
      const data = await response.json();
      if (data.success) {
        setPages(data.pages);
      }
    } catch (error) {
      console.error('Error fetching pages:', error);
    }
  };

  const fetchQRCodes = async () => {
    try {
      const response = await fetch('/api/admin/qr-codes');
      const data = await response.json();
      if (data.success) {
        setQrCodes(data.qrCodes);
      }
    } catch (error) {
      console.error('Error fetching QR codes:', error);
    }
  };

  const handleGenerate = async () => {
    if (mode === 'dropdown' && !selectedPage) {
      alert('Please select a page');
      return;
    }

    if (mode === 'manual' && (!manualTitle || !manualUrl)) {
      alert('Please provide both title and URL');
      return;
    }

    setLoading(true);

    try {
      let title, url, pageType;

      if (mode === 'dropdown') {
        const page = pages.find(p => p.url === selectedPage);
        title = page?.title || '';
        url = selectedPage;
        pageType = page?.type || 'page';
      } else {
        title = manualTitle;
        url = manualUrl;
        pageType = 'manual';
      }

      const response = await fetch('/api/admin/qr-codes/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, url, pageType }),
      });

      const data = await response.json();

      if (data.success) {
        alert('✅ QR Code generated successfully!');
        fetchQRCodes();
        setSelectedPage('');
        setManualTitle('');
        setManualUrl('');
        setShowGenerated(true);
      } else {
        alert(`❌ Error: ${data.message}`);
      }
    } catch (error) {
      console.error('Generation error:', error);
      alert('❌ Failed to generate QR code');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this QR code?')) return;

    try {
      const response = await fetch(`/api/admin/qr-codes?id=${id}`, {
        method: 'DELETE',
      });

      const data = await response.json();

      if (data.success) {
        alert('✅ QR code deleted');
        fetchQRCodes();
      } else {
        alert(`❌ Error: ${data.message}`);
      }
    } catch (error) {
      console.error('Delete error:', error);
      alert('❌ Failed to delete QR code');
    }
  };

  const handleDownload = (qrCodeUrl: string, title: string) => {
    const link = document.createElement('a');
    link.href = qrCodeUrl;
    link.download = `qr-${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-6">
      {/* Generator Section */}
      <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          📱 QR Code Generator
        </h2>

        {/* Mode Toggle */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setMode('dropdown')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              mode === 'dropdown'
                ? 'bg-blue-600 text-white'
                : 'bg-white/5 text-gray-400 hover:bg-white/10'
            }`}
          >
            📋 Select Page
          </button>
          <button
            onClick={() => setMode('manual')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              mode === 'manual'
                ? 'bg-blue-600 text-white'
                : 'bg-white/5 text-gray-400 hover:bg-white/10'
            }`}
          >
            ✏️ Manual Entry
          </button>
        </div>

        {/* Dropdown Mode */}
        {mode === 'dropdown' && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Select Page or Blog Post
              </label>
              <select
                value={selectedPage}
                onChange={(e) => setSelectedPage(e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Choose a page...</option>
                <optgroup label="Pages">
                  {pages.filter(p => p.type === 'page').map((page, idx) => (
                    <option key={idx} value={page.url}>
                      {page.title}
                    </option>
                  ))}
                </optgroup>
                <optgroup label="Blog Posts">
                  {pages.filter(p => p.type === 'blog').map((page, idx) => (
                    <option key={idx} value={page.url}>
                      {page.title}
                    </option>
                  ))}
                </optgroup>
              </select>
            </div>
          </div>
        )}

        {/* Manual Mode */}
        {mode === 'manual' && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                QR Code Title
              </label>
              <input
                type="text"
                value={manualTitle}
                onChange={(e) => setManualTitle(e.target.value)}
                placeholder="e.g., Special Offer Page"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Destination URL
              </label>
              <input
                type="url"
                value={manualUrl}
                onChange={(e) => setManualUrl(e.target.value)}
                placeholder="https://example.com/page"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        )}

        {/* Generate Button */}
        <button
          onClick={handleGenerate}
          disabled={loading}
          className="mt-6 w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? '⏳ Generating...' : '🔲 Generate QR Code'}
        </button>
      </div>

      {/* Generated QR Codes */}
      <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            📦 Generated QR Codes ({qrCodes.length})
          </h2>
          <button
            onClick={() => setShowGenerated(!showGenerated)}
            className="text-blue-400 hover:text-blue-300 font-semibold"
          >
            {showGenerated ? '▼ Hide' : '▶ Show'}
          </button>
        </div>

        {showGenerated && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {qrCodes.length === 0 ? (
              <div className="col-span-full text-center py-12 text-gray-400">
                <div className="text-6xl mb-4">📱</div>
                <p>No QR codes generated yet</p>
              </div>
            ) : (
              qrCodes.map((qr) => (
                <div
                  key={qr.id}
                  className="bg-white/5 rounded-lg p-4 border border-white/10 hover:border-blue-500 transition-all"
                >
                  <div className="aspect-square w-full bg-white rounded-lg p-4 mb-4">
                    <img
                      src={qr.qrCodeUrl}
                      alt={qr.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="font-semibold text-white mb-2 truncate">
                    {qr.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-2 truncate">
                    {qr.url}
                  </p>
                  <span className="inline-block text-xs px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full mb-3">
                    {qr.pageType}
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleDownload(qr.qrCodeUrl, qr.title)}
                      className="flex-1 px-3 py-2 bg-green-600 hover:bg-green-700 text-white text-sm rounded-lg transition-all"
                    >
                      💾 Download
                    </button>
                    <button
                      onClick={() => handleDelete(qr.id)}
                      className="px-3 py-2 bg-red-600 hover:bg-red-700 text-white text-sm rounded-lg transition-all"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}

