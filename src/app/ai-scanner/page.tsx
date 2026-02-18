'use client';

import { useState } from 'react';

type ScanResponse = {
  score: number;
  summary: string;
  projectedLift: string;
  gaps: string[];
  bookingUrl: string;
};

export default function AIScannerPage() {
  const [name, setName] = useState('');
  const [business, setBusiness] = useState('');
  const [site, setSite] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [data, setData] = useState<ScanResponse | null>(null);

  const onScan = async () => {
    setError('');
    setLoading(true);
    setData(null);
    try {
      const r = await fetch('/api/ai-scan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, business, website: site, phone, email, variant: 'ai-scanner' }),
      });
      const j = await r.json();
      if (!r.ok) throw new Error(j?.error || 'Scan failed');
      setData(j);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : 'Scan failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-950 via-zinc-950 to-fuchsia-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-14 md:py-20">
        <div className="mb-10 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <p className="text-xs uppercase tracking-[0.25em] text-fuchsia-200">True Rank Digital</p>
          <h1 className="mt-2 text-4xl font-black leading-tight md:text-6xl">AI Scanner</h1>
          <p className="mt-4 max-w-3xl text-white/80">Discover where your business is winning and where AI/local visibility leaks are costing leads.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-[1.1fr,0.9fr]">
          <div className="rounded-3xl border border-white/10 bg-black/30 p-6 md:p-8 space-y-4">
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 placeholder:text-white/50" />
            <input value={business} onChange={(e) => setBusiness(e.target.value)} placeholder="Business name + city or GBP link" className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 placeholder:text-white/50" />
            <input value={site} onChange={(e) => setSite(e.target.value)} placeholder="Website URL" className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 placeholder:text-white/50" />
            <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone (required)" className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 placeholder:text-white/50" />
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Work email (required)" className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 placeholder:text-white/50" />
            <button onClick={onScan} disabled={loading} className="w-full rounded-xl bg-gradient-to-r from-cyan-400 to-fuchsia-400 px-4 py-3 font-semibold text-zinc-950 disabled:opacity-60">
              {loading ? 'Scanning…' : 'Scan Now'}
            </button>
            {error && <p className="text-sm text-rose-200">{error}</p>}
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
            {data ? (
              <div>
                <p className="text-sm uppercase tracking-widest text-cyan-200">AI Visibility Score</p>
                <p className="mt-2 text-6xl font-black">{data.score}</p>
                <p className="mt-3 text-sm text-amber-200">{data.summary}</p>
                <p className="mt-2 text-xs text-cyan-200">{data.projectedLift}</p>
                <h3 className="mt-6 text-lg font-semibold">Priority Opportunities</h3>
                <ul className="mt-3 space-y-2 text-sm text-white/90">
                  {data.gaps.map((op) => (
                    <li key={op} className="rounded-xl border border-white/15 bg-black/30 px-3 py-2">{op}</li>
                  ))}
                </ul>
                <a href={data.bookingUrl} className="mt-6 inline-block w-full rounded-xl bg-white px-4 py-3 text-center font-semibold text-zinc-950">Book a Strategy Call</a>
              </div>
            ) : (
              <div className="flex h-full min-h-[280px] items-center justify-center text-center text-sm text-white/70">Submit a scan to unlock your score and optimization roadmap.</div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
