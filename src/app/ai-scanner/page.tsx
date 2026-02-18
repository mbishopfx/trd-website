'use client';

import { useMemo, useState } from 'react';

type ScanResponse = {
  score: number;
  summary: string;
  projectedLift: string;
  gaps: string[];
  bookingUrl: string;
};

const steps = ['Business', 'Map Ranking Phrase', 'Website', 'Contact', 'Scan'];

export default function AIScannerPage() {
  const [step, setStep] = useState(1);

  const [businessName, setBusinessName] = useState('');
  const [state, setState] = useState('');
  const [mapKeyword, setMapKeyword] = useState('');
  const [site, setSite] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [data, setData] = useState<ScanResponse | null>(null);

  const business = useMemo(() => {
    if (!businessName.trim()) return '';
    if (!state.trim()) return businessName.trim();
    return `${businessName.trim()} (${state.trim()})`;
  }, [businessName, state]);

  const canNext = useMemo(() => {
    if (step === 1) return Boolean(businessName.trim() && state.trim());
    if (step === 2) return Boolean(mapKeyword.trim());
    if (step === 3) return Boolean(site.trim());
    if (step === 4) return Boolean(name.trim() && phone.trim() && email.trim());
    return true;
  }, [step, businessName, state, mapKeyword, site, name, phone, email]);

  const onScan = async () => {
    setError('');
    setLoading(true);
    setData(null);
    try {
      const r = await fetch('/api/ai-scan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          business,
          website: site,
          phone,
          mapKeyword,
          email,
          variant: 'ai-scanner',
        }),
      });
      const j = await r.json();
      if (!r.ok) throw new Error(j?.error || 'Scan failed');
      setData(j);
      setStep(5);
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
          <p className="mt-4 max-w-3xl text-white/80">Step-by-step setup: find the business context first, then run the deep scan and push to CRM.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-[1.1fr,0.9fr]">
          <div className="rounded-3xl border border-white/10 bg-black/30 p-6 md:p-8">
            <div className="mb-6 flex flex-wrap gap-2 text-xs">
              {steps.map((label, i) => {
                const idx = i + 1;
                return (
                  <span key={label} className={`rounded-full px-3 py-1 ${idx === step ? 'bg-cyan-300 text-zinc-950' : idx < step ? 'bg-white/20' : 'bg-white/10 text-white/70'}`}>
                    {idx}. {label}
                  </span>
                );
              })}
            </div>

            {step === 1 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Step 1: Business + State</h2>
                <input value={businessName} onChange={(e) => setBusinessName(e.target.value)} placeholder="Business name" className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 placeholder:text-white/50" />
                <input value={state} onChange={(e) => setState(e.target.value)} placeholder="State (e.g., Missouri)" className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 placeholder:text-white/50" />
                <button disabled={!canNext} onClick={() => setStep(2)} className="w-full rounded-xl bg-white px-4 py-3 font-semibold text-zinc-950 disabled:opacity-60">Next</button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Step 2: Target phrase for map ranking</h2>
                <input value={mapKeyword} onChange={(e) => setMapKeyword(e.target.value)} placeholder="Example: digital marketing agency near me" className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 placeholder:text-white/50" />
                <div className="flex gap-3">
                  <button onClick={() => setStep(1)} className="w-1/2 rounded-xl border border-white/20 px-4 py-3">Back</button>
                  <button disabled={!canNext} onClick={() => setStep(3)} className="w-1/2 rounded-xl bg-white px-4 py-3 font-semibold text-zinc-950 disabled:opacity-60">Next</button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Step 3: Website URL</h2>
                <input value={site} onChange={(e) => setSite(e.target.value)} placeholder="https://yourdomain.com" className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 placeholder:text-white/50" />
                <div className="flex gap-3">
                  <button onClick={() => setStep(2)} className="w-1/2 rounded-xl border border-white/20 px-4 py-3">Back</button>
                  <button disabled={!canNext} onClick={() => setStep(4)} className="w-1/2 rounded-xl bg-white px-4 py-3 font-semibold text-zinc-950 disabled:opacity-60">Next</button>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Step 4: Contact info</h2>
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 placeholder:text-white/50" />
                <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 placeholder:text-white/50" />
                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Work email" className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 placeholder:text-white/50" />
                <div className="flex gap-3">
                  <button onClick={() => setStep(3)} className="w-1/2 rounded-xl border border-white/20 px-4 py-3">Back</button>
                  <button disabled={!canNext || loading} onClick={onScan} className="w-1/2 rounded-xl bg-gradient-to-r from-cyan-400 to-fuchsia-400 px-4 py-3 font-semibold text-zinc-950 disabled:opacity-60">
                    {loading ? 'Scanning…' : 'Run Scan'}
                  </button>
                </div>
              </div>
            )}

            {error && <p className="mt-4 text-sm text-rose-200">{error}</p>}
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
            {data ? (
              <div>
                <p className="text-sm uppercase tracking-widest text-cyan-200">AI Visibility Score</p>
                <p className="mt-2 text-6xl font-black">{data.score}</p>
                <p className="mt-3 text-sm text-amber-200">{data.summary}</p>
                <p className="mt-2 text-xs text-cyan-200">{data.projectedLift}</p>
                <h3 className="mt-6 text-lg font-semibold">Top 3 Pain Points</h3>
                <ul className="mt-3 space-y-2 text-sm text-white/90">
                  {data.gaps.map((op) => (
                    <li key={op} className="rounded-xl border border-white/15 bg-black/30 px-3 py-2">{op}</li>
                  ))}
                </ul>
                <a href={data.bookingUrl} className="mt-6 inline-block w-full rounded-xl bg-white px-4 py-3 text-center font-semibold text-zinc-950">Book a Strategy Call</a>
              </div>
            ) : (
              <div className="flex h-full min-h-[280px] items-center justify-center text-center text-sm text-white/70">Complete steps 1–4 and run scan to view results and trigger GHL import.</div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
