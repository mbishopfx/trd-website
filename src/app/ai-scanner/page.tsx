'use client';

import { useState } from 'react';

type Findings = {
  score: number;
  opportunities: string[];
  risk: string;
};

function buildFindings(query: string, site: string): Findings {
  const hash = (query + site).split('').reduce((a, c) => a + c.charCodeAt(0), 0);
  const score = 55 + (hash % 40);
  return {
    score,
    opportunities: [
      'Entity graph enrichment for services + locations (JSON-LD cluster)',
      'GBP Q&A + post cadence automation for AI freshness',
      'Review velocity workflow tied to closed jobs/sales',
      'AI-overview answer-targeted FAQ blocks with conversion CTAs',
    ],
    risk:
      score < 70
        ? 'High: competitors can outrank you in AI answers/local pack despite decent reviews.'
        : 'Moderate: strong position, but vulnerable on schema depth + citation consistency.',
  };
}

export default function AIScannerPage() {
  const [business, setBusiness] = useState('');
  const [site, setSite] = useState('');
  const [email, setEmail] = useState('');
  const [data, setData] = useState<Findings | null>(null);

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-950 via-zinc-950 to-fuchsia-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-14 md:py-20">
        <div className="mb-10 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <p className="text-xs uppercase tracking-[0.25em] text-fuchsia-200">True Rank Digital • Variant B</p>
          <h1 className="mt-2 text-4xl font-black leading-tight md:text-6xl">
            AI Scanner
            <span className="block bg-gradient-to-r from-cyan-300 to-fuchsia-300 bg-clip-text text-transparent">
              Visibility + Lead Capture
            </span>
          </h1>
          <p className="mt-4 max-w-3xl text-white/80">
            See how visible your business is in AI search, local maps, and intent-heavy discovery channels.
            Instant score, opportunity stack, and next-step blueprint.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-[1.1fr,0.9fr]">
          <div className="rounded-3xl border border-white/10 bg-black/30 p-6 md:p-8">
            <h2 className="mb-5 text-2xl font-bold">Run Free Scan</h2>
            <div className="space-y-4">
              <input
                value={business}
                onChange={(e) => setBusiness(e.target.value)}
                placeholder="Business name + city or GBP link"
                className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 placeholder:text-white/50"
              />
              <input
                value={site}
                onChange={(e) => setSite(e.target.value)}
                placeholder="Website URL"
                className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 placeholder:text-white/50"
              />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email for full report (optional)"
                className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 placeholder:text-white/50"
              />
              <button
                onClick={() => setData(buildFindings(business, site))}
                className="w-full rounded-xl bg-gradient-to-r from-cyan-400 to-fuchsia-400 px-4 py-3 font-semibold text-zinc-950 transition hover:opacity-90"
              >
                Scan Now
              </button>
              <p className="text-xs text-white/70">
                CRM integration hook placeholder: submit to lead endpoint with source tag <code>trd_ai_scanner</code>.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
            {data ? (
              <div>
                <p className="text-sm uppercase tracking-widest text-cyan-200">AI Visibility Score</p>
                <p className="mt-2 text-6xl font-black">{data.score}</p>
                <p className="mt-3 text-sm text-amber-200">{data.risk}</p>

                <h3 className="mt-6 text-lg font-semibold">Priority Opportunities</h3>
                <ul className="mt-3 space-y-2 text-sm text-white/90">
                  {data.opportunities.map((op) => (
                    <li key={op} className="rounded-xl border border-white/15 bg-black/30 px-3 py-2">
                      {op}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="flex h-full min-h-[280px] items-center justify-center text-center text-sm text-white/70">
                Submit a scan to unlock your score, risk snapshot, and optimization roadmap.
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
