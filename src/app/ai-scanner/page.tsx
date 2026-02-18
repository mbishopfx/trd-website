'use client';

import { useMemo, useState } from 'react';

type ScanResponse = {
  score: number;
  summary: string;
  projectedLift: string;
  gaps: string[];
  bookingUrl: string;
};

type Candidate = { placeId: string; name: string; address: string };

const steps = ['Business', 'Map Ranking Phrase', 'Website', 'Contact', 'Scan'];

export default function AIScannerPage() {
  const [step, setStep] = useState(1);
  const [businessName, setBusinessName] = useState('');
  const [state, setState] = useState('');
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [selectedBusiness, setSelectedBusiness] = useState<Candidate | null>(null);
  const [lookupLoading, setLookupLoading] = useState(false);

  const [mapKeyword, setMapKeyword] = useState('');
  const [site, setSite] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [data, setData] = useState<ScanResponse | null>(null);

  const business = useMemo(() => {
    if (selectedBusiness) return `${selectedBusiness.name} (${state})`;
    if (!businessName.trim()) return '';
    if (!state.trim()) return businessName.trim();
    return `${businessName.trim()} (${state.trim()})`;
  }, [businessName, state, selectedBusiness]);

  const lookupBusinesses = async () => {
    setError('');
    setLookupLoading(true);
    setSelectedBusiness(null);
    try {
      const r = await fetch('/api/ai-business-lookup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ businessName, state }),
      });
      const j = await r.json();
      if (!r.ok) throw new Error(j?.error || 'Business lookup failed');
      setCandidates(j.candidates || []);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : 'Business lookup failed');
    } finally {
      setLookupLoading(false);
    }
  };

  const onScan = async () => {
    setError('');
    setLoading(true);
    setData(null);
    try {
      const r = await fetch('/api/ai-scan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, business, website: site, phone, mapKeyword, email, variant: 'ai-scanner' }),
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
        </div>

        <div className="grid gap-8 md:grid-cols-[1.1fr,0.9fr]">
          <div className="rounded-3xl border border-white/10 bg-black/30 p-6 md:p-8">
            <div className="mb-6 flex flex-wrap gap-2 text-xs">
              {steps.map((label, i) => {
                const idx = i + 1;
                return <span key={label} className={`rounded-full px-3 py-1 ${idx === step ? 'bg-cyan-300 text-zinc-950' : 'bg-white/10 text-white/70'}`}>{idx}. {label}</span>;
              })}
            </div>

            {step === 1 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Step 1: Find and select your business</h2>
                <input value={businessName} onChange={(e) => setBusinessName(e.target.value)} placeholder="Business name" className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 placeholder:text-white/50" />
                <input value={state} onChange={(e) => setState(e.target.value)} placeholder="State" className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 placeholder:text-white/50" />
                <button disabled={!businessName || !state || lookupLoading} onClick={lookupBusinesses} className="w-full rounded-xl bg-white px-4 py-3 font-semibold text-zinc-950 disabled:opacity-60">{lookupLoading ? 'Searching…' : 'Find Business'}</button>
                {candidates.length > 0 && (
                  <div className="space-y-2">
                    {candidates.map((c) => (
                      <button key={c.placeId} onClick={() => setSelectedBusiness(c)} className={`w-full rounded-xl border px-4 py-3 text-left ${selectedBusiness?.placeId === c.placeId ? 'border-cyan-300 bg-cyan-300/20' : 'border-white/20 bg-white/5'}`}>
                        <div className="font-semibold">{c.name}</div>
                        <div className="text-xs text-white/70">{c.address}</div>
                      </button>
                    ))}
                  </div>
                )}
                <button disabled={!selectedBusiness} onClick={() => setStep(2)} className="w-full rounded-xl bg-cyan-400 px-4 py-3 font-semibold text-zinc-950 disabled:opacity-60">Next</button>
              </div>
            )}

            {step === 2 && <div className="space-y-4"><h2 className="text-xl font-semibold">Step 2: Target phrase for map ranking</h2><input value={mapKeyword} onChange={(e) => setMapKeyword(e.target.value)} placeholder="digital marketing agency near me" className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 placeholder:text-white/50" /><div className="flex gap-3"><button onClick={() => setStep(1)} className="w-1/2 rounded-xl border border-white/20 px-4 py-3">Back</button><button disabled={!mapKeyword} onClick={() => setStep(3)} className="w-1/2 rounded-xl bg-white px-4 py-3 font-semibold text-zinc-950 disabled:opacity-60">Next</button></div></div>}
            {step === 3 && <div className="space-y-4"><h2 className="text-xl font-semibold">Step 3: Website URL</h2><input value={site} onChange={(e) => setSite(e.target.value)} placeholder="https://yourdomain.com" className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 placeholder:text-white/50" /><div className="flex gap-3"><button onClick={() => setStep(2)} className="w-1/2 rounded-xl border border-white/20 px-4 py-3">Back</button><button disabled={!site} onClick={() => setStep(4)} className="w-1/2 rounded-xl bg-white px-4 py-3 font-semibold text-zinc-950 disabled:opacity-60">Next</button></div></div>}
            {step === 4 && <div className="space-y-4"><h2 className="text-xl font-semibold">Step 4: Contact info</h2><input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 placeholder:text-white/50" /><input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 placeholder:text-white/50" /><input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Work email" className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 placeholder:text-white/50" /><div className="flex gap-3"><button onClick={() => setStep(3)} className="w-1/2 rounded-xl border border-white/20 px-4 py-3">Back</button><button disabled={loading || !name || !phone || !email} onClick={onScan} className="w-1/2 rounded-xl bg-gradient-to-r from-cyan-400 to-fuchsia-400 px-4 py-3 font-semibold text-zinc-950 disabled:opacity-60">{loading ? 'Scanning…' : 'Run Scan'}</button></div></div>}

            {error && <p className="mt-4 text-sm text-rose-200">{error}</p>}
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
            {data ? (
              <div>
                <p className="text-sm uppercase tracking-widest text-cyan-200">AI Visibility Score</p>
                <p className="mt-2 text-6xl font-black">{data.score}</p>
                <p className="mt-3 text-sm text-amber-200">{data.summary}</p>
                <h3 className="mt-6 text-lg font-semibold">Top 3 Pain Points</h3>
                <ul className="mt-3 space-y-2 text-sm text-white/90">{data.gaps.map((op) => <li key={op} className="rounded-xl border border-white/15 bg-black/30 px-3 py-2">{op}</li>)}</ul>
                <a href={data.bookingUrl} className="mt-6 inline-block w-full rounded-xl bg-white px-4 py-3 text-center font-semibold text-zinc-950">Book a Strategy Call</a>
              </div>
            ) : (
              <div className="flex h-full min-h-[280px] items-center justify-center text-center text-sm text-white/70">Find and select your business in step 1 to continue.</div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
