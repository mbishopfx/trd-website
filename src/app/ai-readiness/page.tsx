'use client';

import { useMemo, useState } from 'react';

type ScanResult = {
  score: number;
  summary: string;
  gaps: string[];
  projectedLift: string;
};

function runMockScan(input: string, website: string, vertical: string): ScanResult {
  const seed = `${input}${website}${vertical}`.length;
  const base = 58 + (seed % 26);
  const score = Math.max(42, Math.min(96, base));

  const gaps = [
    'Missing or weak LocalBusiness + Service schema on core pages',
    'Low GBP posting cadence for AI-overview freshness signals',
    'Inconsistent entity mentions across site, GBP, and citations',
    'Thin service-area coverage pages for Missouri/local intent',
    'No clear conversion path from maps/AI queries to lead form action',
  ];

  const summary =
    score > 84
      ? 'Strong foundation. Tighten structured data + entity consistency to dominate AI answers.'
      : score > 70
      ? 'Good baseline. A focused 30-day optimization sprint can unlock major visibility gains.'
      : 'High upside. Technical + GBP + content alignment is needed to compete in AI/local search.';

  return {
    score,
    summary,
    gaps,
    projectedLift: `${2 + ((100 - score) / 18).toFixed(1)}x more qualified local lead flow (modeled)`,
  };
}

export default function AIReadinessPage() {
  const [business, setBusiness] = useState('');
  const [website, setWebsite] = useState('');
  const [vertical, setVertical] = useState('Auto Dealer');
  const [result, setResult] = useState<ScanResult | null>(null);

  const ring = useMemo(() => {
    if (!result) return 0;
    return Math.round((result.score / 100) * 360);
  }, [result]);

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">True Rank Digital</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-6xl">AI Readiness Scanner</h1>
          <p className="mt-4 max-w-3xl text-zinc-300 md:text-lg">
            Instant readiness check for AI search, Google Business Profile performance, and local lead capture health.
            This is Variant A (minimal dark).
          </p>
        </div>

        <div className="grid gap-8 rounded-3xl border border-zinc-800 bg-zinc-900/70 p-6 md:grid-cols-2 md:p-8">
          <div className="space-y-5">
            <div>
              <label className="mb-2 block text-sm text-zinc-300">Business / GBP URL</label>
              <input
                value={business}
                onChange={(e) => setBusiness(e.target.value)}
                placeholder="Business name + city or Google Maps URL"
                className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm outline-none ring-cyan-400 transition focus:ring"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm text-zinc-300">Website URL</label>
              <input
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                placeholder="https://example.com"
                className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm outline-none ring-cyan-400 transition focus:ring"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm text-zinc-300">Vertical</label>
              <select
                value={vertical}
                onChange={(e) => setVertical(e.target.value)}
                className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm outline-none ring-cyan-400 transition focus:ring"
              >
                {['Auto Dealer', 'Home Services', 'Food Truck', 'Legal', 'Medical'].map((v) => (
                  <option key={v}>{v}</option>
                ))}
              </select>
            </div>
            <button
              onClick={() => setResult(runMockScan(business, website, vertical))}
              className="w-full rounded-xl bg-cyan-400 px-4 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-300"
            >
              Run Free AI Readiness Scan
            </button>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
            {result ? (
              <div>
                <div className="mx-auto mb-6 flex w-44 items-center justify-center rounded-full p-2" style={{ background: `conic-gradient(#22d3ee ${ring}deg, #27272a ${ring}deg)` }}>
                  <div className="flex h-36 w-36 flex-col items-center justify-center rounded-full bg-zinc-950">
                    <span className="text-4xl font-bold">{result.score}</span>
                    <span className="text-xs uppercase tracking-widest text-zinc-400">Score</span>
                  </div>
                </div>
                <p className="text-sm text-zinc-200">{result.summary}</p>
                <p className="mt-2 text-xs text-cyan-300">Projected lift: {result.projectedLift}</p>
                <ul className="mt-5 space-y-2 text-sm text-zinc-300">
                  {result.gaps.map((gap) => (
                    <li key={gap} className="rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2">
                      {gap}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="flex h-full items-center justify-center text-sm text-zinc-400">
                Run the scan to view your readiness score and optimization gaps.
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
