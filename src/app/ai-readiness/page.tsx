'use client';

import { useMemo, useState } from 'react';

type ScanResponse = { score: number; summary: string; projectedLift: string; gaps: string[]; bookingUrl: string };
type Candidate = { placeId: string; name: string; address: string };
const steps = ['Business', 'Map Ranking Phrase', 'Website', 'Contact', 'Scan'];

export default function AIReadinessPage() {
  const [step, setStep] = useState(1);
  const [businessName, setBusinessName] = useState('');
  const [state, setState] = useState('');
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [selectedBusiness, setSelectedBusiness] = useState<Candidate | null>(null);
  const [lookupLoading, setLookupLoading] = useState(false);

  const [mapKeyword, setMapKeyword] = useState('');
  const [website, setWebsite] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState<ScanResponse | null>(null);

  const business = useMemo(() => (selectedBusiness ? `${selectedBusiness.name} (${state})` : `${businessName} (${state})`), [selectedBusiness, businessName, state]);

  const lookupBusinesses = async () => {
    setError('');
    setLookupLoading(true);
    setSelectedBusiness(null);
    try {
      const r = await fetch('/api/ai-business-lookup', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ businessName, state }) });
      const j = await r.json();
      if (!r.ok) throw new Error(j?.error || 'Business lookup failed');
      setCandidates(j.candidates || []);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : 'Business lookup failed');
    } finally {
      setLookupLoading(false);
    }
  };

  const runScan = async () => {
    setError('');
    setLoading(true);
    setResult(null);
    try {
      const resp = await fetch('/api/ai-scan', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, business, website, mapKeyword, phone, email, variant: 'ai-readiness' }),
      });
      const data = await resp.json();
      if (!resp.ok) throw new Error(data?.error || 'Scan failed');
      setResult(data); setStep(5);
    } catch (e: unknown) { setError(e instanceof Error ? e.message : 'Scan failed.'); }
    finally { setLoading(false); }
  };

  const ring = result ? Math.round((result.score / 100) * 360) : 0;

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100"><section className="mx-auto max-w-5xl px-6 py-16 md:py-24"><div className="mb-10"><p className="text-xs uppercase tracking-[0.3em] text-cyan-300">True Rank Digital</p><h1 className="mt-3 text-4xl font-bold tracking-tight md:text-6xl">AI Readiness Scanner</h1></div>
      <div className="grid gap-8 rounded-3xl border border-zinc-800 bg-zinc-900/70 p-6 md:grid-cols-2 md:p-8"><div className="space-y-4"><div className="mb-3 flex flex-wrap gap-2 text-xs">{steps.map((s, i) => <span key={s} className={`rounded-full px-3 py-1 ${i + 1 === step ? 'bg-cyan-300 text-zinc-950' : 'bg-zinc-800 text-zinc-300'}`}>{i + 1}. {s}</span>)}</div>
        {step === 1 && <><input value={businessName} onChange={(e) => setBusinessName(e.target.value)} placeholder="Business name" className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm" /><input value={state} onChange={(e) => setState(e.target.value)} placeholder="State" className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm" /><button onClick={lookupBusinesses} disabled={!businessName || !state || lookupLoading} className="w-full rounded-xl bg-white px-4 py-3 text-sm font-semibold text-zinc-950 disabled:opacity-60">{lookupLoading ? 'Searching…' : 'Find Business'}</button>{candidates.map((c) => <button key={c.placeId} onClick={() => setSelectedBusiness(c)} className={`w-full rounded-xl border px-4 py-3 text-left ${selectedBusiness?.placeId === c.placeId ? 'border-cyan-300 bg-cyan-300/20' : 'border-zinc-700 bg-zinc-950'}`}><div className="font-semibold">{c.name}</div><div className="text-xs text-zinc-400">{c.address}</div></button>)}<button onClick={() => setStep(2)} disabled={!selectedBusiness} className="w-full rounded-xl bg-cyan-400 px-4 py-3 text-sm font-semibold text-zinc-950 disabled:opacity-60">Next</button></>}
        {step === 2 && <><input value={mapKeyword} onChange={(e) => setMapKeyword(e.target.value)} placeholder="Target map ranking phrase" className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm" /><div className="flex gap-2"><button onClick={() => setStep(1)} className="w-1/2 rounded-xl border border-zinc-700 px-4 py-3 text-sm">Back</button><button onClick={() => setStep(3)} disabled={!mapKeyword} className="w-1/2 rounded-xl bg-cyan-400 px-4 py-3 text-sm font-semibold text-zinc-950 disabled:opacity-60">Next</button></div></>}
        {step === 3 && <><input value={website} onChange={(e) => setWebsite(e.target.value)} placeholder="Website URL" className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm" /><div className="flex gap-2"><button onClick={() => setStep(2)} className="w-1/2 rounded-xl border border-zinc-700 px-4 py-3 text-sm">Back</button><button onClick={() => setStep(4)} disabled={!website} className="w-1/2 rounded-xl bg-cyan-400 px-4 py-3 text-sm font-semibold text-zinc-950 disabled:opacity-60">Next</button></div></>}
        {step === 4 && <><input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm" /><input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm" /><input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Work email" className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm" /><div className="flex gap-2"><button onClick={() => setStep(3)} className="w-1/2 rounded-xl border border-zinc-700 px-4 py-3 text-sm">Back</button><button onClick={runScan} disabled={loading || !name || !phone || !email} className="w-1/2 rounded-xl bg-cyan-400 px-4 py-3 text-sm font-semibold text-zinc-950 disabled:opacity-60">{loading ? 'Scanning…' : 'Run Scan'}</button></div></>}
        {error && <p className="text-sm text-red-300">{error}</p>}</div>
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">{result ? <div><div className="mx-auto mb-6 flex w-44 items-center justify-center rounded-full p-2" style={{ background: `conic-gradient(#22d3ee ${ring}deg, #27272a ${ring}deg)` }}><div className="flex h-36 w-36 flex-col items-center justify-center rounded-full bg-zinc-950"><span className="text-4xl font-bold">{result.score}</span><span className="text-xs uppercase tracking-widest text-zinc-400">Score</span></div></div><p className="text-sm text-zinc-200">{result.summary}</p><ul className="mt-5 space-y-2 text-sm text-zinc-300">{result.gaps.map((gap) => <li key={gap} className="rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2">{gap}</li>)}</ul><a href={result.bookingUrl} className="mt-6 inline-block w-full rounded-xl bg-white px-4 py-3 text-center text-sm font-semibold text-zinc-950">Book a Strategy Call</a></div> : <div className="flex h-full items-center justify-center text-sm text-zinc-400">Find and select a business in step 1.</div>}</div>
      </div></section></main>
  );
}
