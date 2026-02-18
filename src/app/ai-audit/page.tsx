'use client';

import { useState } from 'react';

type ScanResponse = {
  score: number;
  summary: string;
  projectedLift: string;
  gaps: string[];
  bookingUrl: string;
};

const checklist = [
  'GBP completeness + category alignment',
  'Schema depth (LocalBusiness, Service, FAQ, Review)',
  'Citation consistency + map ecosystem trust',
  'AI-answer targeting (entity-rich service content)',
  'Conversion path clarity (call/form/scheduling)',
];

export default function AIAuditPage() {
  const [business, setBusiness] = useState('');
  const [location, setLocation] = useState('Missouri');
  const [website, setWebsite] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState<ScanResponse | null>(null);

  const run = async () => {
    setError('');
    setLoading(true);
    setResult(null);
    try {
      const r = await fetch('/api/ai-scan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ business: `${business} (${location})`, website, email, variant: 'ai-audit' }),
      });
      const j = await r.json();
      if (!r.ok) throw new Error(j?.error || 'Scan failed');
      setResult(j);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : 'Scan failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#f7f4ef] text-[#17120f]">
      <section className="mx-auto max-w-5xl px-6 py-14 md:py-20">
        <div className="grid gap-10 md:grid-cols-[0.95fr,1.05fr]">
          <aside className="rounded-2xl border border-[#d7cfc3] bg-white p-6 md:p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-[#7a5d42]">True Rank Digital • Variant C (Light)</p>
            <h1 className="mt-3 text-4xl font-semibold leading-tight md:text-5xl">AI Audit</h1>
            <p className="mt-4 text-sm text-[#4c3d2d]">A client-ready audit preview for local and multi-location businesses.</p>

            <div className="mt-8 space-y-4">
              <input value={business} onChange={(e) => setBusiness(e.target.value)} placeholder="Business name" className="w-full rounded-xl border border-[#d7cfc3] bg-[#fdfbf8] px-4 py-3" />
              <input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Primary city/state" className="w-full rounded-xl border border-[#d7cfc3] bg-[#fdfbf8] px-4 py-3" />
              <input value={website} onChange={(e) => setWebsite(e.target.value)} placeholder="Website URL" className="w-full rounded-xl border border-[#d7cfc3] bg-[#fdfbf8] px-4 py-3" />
              <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Work email (required)" className="w-full rounded-xl border border-[#d7cfc3] bg-[#fdfbf8] px-4 py-3" />
              <button onClick={run} disabled={loading} className="w-full rounded-xl bg-[#17120f] px-4 py-3 font-semibold text-white disabled:opacity-60">{loading ? 'Scanning…' : 'Start Audit'}</button>
              {error && <p className="text-sm text-red-700">{error}</p>}
            </div>

            {result && (
              <div className="mt-6 rounded-xl border border-[#d7cfc3] bg-[#fffdf9] p-4">
                <p className="text-xs uppercase tracking-widest text-[#7a5d42]">Readiness</p>
                <p className="text-4xl font-semibold">{result.score}/100</p>
                <p className="mt-2 text-sm text-[#4c3d2d]">{result.summary}</p>
                <p className="mt-2 text-xs text-[#7a5d42]">{result.projectedLift}</p>
                <a href={result.bookingUrl} className="mt-4 inline-block w-full rounded-lg bg-[#17120f] px-4 py-2 text-center text-sm font-semibold text-white">Book a Strategy Call</a>
              </div>
            )}
          </aside>

          <article className="rounded-2xl border border-[#d7cfc3] bg-white p-6 md:p-8">
            <h2 className="text-2xl font-semibold">What this scanner checks</h2>
            <ul className="mt-5 space-y-3">
              {checklist.map((item) => (
                <li key={item} className="rounded-lg border border-[#e6ddd2] bg-[#fcf9f4] px-3 py-2 text-sm">{item}</li>
              ))}
            </ul>
            {result && (
              <div className="mt-8 border-t border-[#e5dbcf] pt-6">
                <h3 className="text-lg font-semibold">Top opportunities</h3>
                <ul className="mt-3 space-y-2 text-sm text-[#4c3d2d]">
                  {result.gaps.map((g) => (
                    <li key={g} className="rounded-md border border-[#e6ddd2] bg-[#fcf9f4] px-3 py-2">{g}</li>
                  ))}
                </ul>
              </div>
            )}
          </article>
        </div>
      </section>
    </main>
  );
}
