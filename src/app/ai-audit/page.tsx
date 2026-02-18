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

export default function AIAuditPage() {
  const [step, setStep] = useState(1);
  const [businessName, setBusinessName] = useState('');
  const [state, setState] = useState('');
  const [mapKeyword, setMapKeyword] = useState('');
  const [website, setWebsite] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState<ScanResponse | null>(null);

  const business = useMemo(() => (businessName && state ? `${businessName} (${state})` : businessName), [businessName, state]);

  const run = async () => {
    setError('');
    setLoading(true);
    setResult(null);
    try {
      const r = await fetch('/api/ai-scan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, business, website, phone, mapKeyword, email, variant: 'ai-audit' }),
      });
      const j = await r.json();
      if (!r.ok) throw new Error(j?.error || 'Scan failed');
      setResult(j);
      setStep(5);
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
            <p className="text-xs uppercase tracking-[0.3em] text-[#7a5d42]">True Rank Digital</p>
            <h1 className="mt-3 text-4xl font-semibold leading-tight md:text-5xl">AI Audit</h1>
            <p className="mt-4 text-sm text-[#4c3d2d]">Step-by-step local scan flow with GHL lead import.</p>

            <div className="mt-6 flex flex-wrap gap-2 text-xs">
              {steps.map((s, i) => (
                <span key={s} className={`rounded-full px-3 py-1 ${i + 1 === step ? 'bg-[#17120f] text-white' : 'bg-[#f1ece5] text-[#6f5e4d]'}`}>{i + 1}. {s}</span>
              ))}
            </div>

            <div className="mt-6 space-y-4">
              {step === 1 && (
                <>
                  <input value={businessName} onChange={(e) => setBusinessName(e.target.value)} placeholder="Business name" className="w-full rounded-xl border border-[#d7cfc3] bg-[#fdfbf8] px-4 py-3" />
                  <input value={state} onChange={(e) => setState(e.target.value)} placeholder="State" className="w-full rounded-xl border border-[#d7cfc3] bg-[#fdfbf8] px-4 py-3" />
                  <button onClick={() => setStep(2)} disabled={!businessName || !state} className="w-full rounded-xl bg-[#17120f] px-4 py-3 font-semibold text-white disabled:opacity-60">Next</button>
                </>
              )}
              {step === 2 && (
                <>
                  <input value={mapKeyword} onChange={(e) => setMapKeyword(e.target.value)} placeholder="Target phrase for map ranking" className="w-full rounded-xl border border-[#d7cfc3] bg-[#fdfbf8] px-4 py-3" />
                  <div className="flex gap-2"><button onClick={() => setStep(1)} className="w-1/2 rounded-xl border border-[#d7cfc3] px-4 py-3">Back</button><button onClick={() => setStep(3)} disabled={!mapKeyword} className="w-1/2 rounded-xl bg-[#17120f] px-4 py-3 font-semibold text-white disabled:opacity-60">Next</button></div>
                </>
              )}
              {step === 3 && (
                <>
                  <input value={website} onChange={(e) => setWebsite(e.target.value)} placeholder="Website URL" className="w-full rounded-xl border border-[#d7cfc3] bg-[#fdfbf8] px-4 py-3" />
                  <div className="flex gap-2"><button onClick={() => setStep(2)} className="w-1/2 rounded-xl border border-[#d7cfc3] px-4 py-3">Back</button><button onClick={() => setStep(4)} disabled={!website} className="w-1/2 rounded-xl bg-[#17120f] px-4 py-3 font-semibold text-white disabled:opacity-60">Next</button></div>
                </>
              )}
              {step === 4 && (
                <>
                  <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className="w-full rounded-xl border border-[#d7cfc3] bg-[#fdfbf8] px-4 py-3" />
                  <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" className="w-full rounded-xl border border-[#d7cfc3] bg-[#fdfbf8] px-4 py-3" />
                  <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Work email" className="w-full rounded-xl border border-[#d7cfc3] bg-[#fdfbf8] px-4 py-3" />
                  <div className="flex gap-2"><button onClick={() => setStep(3)} className="w-1/2 rounded-xl border border-[#d7cfc3] px-4 py-3">Back</button><button onClick={run} disabled={loading || !name || !phone || !email} className="w-1/2 rounded-xl bg-[#17120f] px-4 py-3 font-semibold text-white disabled:opacity-60">{loading ? 'Scanning…' : 'Run Scan'}</button></div>
                </>
              )}
              {error && <p className="text-sm text-red-700">{error}</p>}
            </div>
          </aside>

          <article className="rounded-2xl border border-[#d7cfc3] bg-white p-6 md:p-8">
            {result ? (
              <>
                <p className="text-xs uppercase tracking-widest text-[#7a5d42]">Readiness</p>
                <p className="text-4xl font-semibold">{result.score}/100</p>
                <p className="mt-2 text-sm text-[#4c3d2d]">{result.summary}</p>
                <ul className="mt-5 space-y-2 text-sm text-[#4c3d2d]">
                  {result.gaps.map((g) => (
                    <li key={g} className="rounded-md border border-[#e6ddd2] bg-[#fcf9f4] px-3 py-2">{g}</li>
                  ))}
                </ul>
                <a href={result.bookingUrl} className="mt-6 inline-block w-full rounded-xl bg-[#17120f] px-4 py-3 text-center text-sm font-semibold text-white">Book a Strategy Call</a>
              </>
            ) : (
              <div className="flex h-full min-h-[280px] items-center justify-center text-sm text-[#6a5a4b]">Complete the steps to run scan and import to CRM.</div>
            )}
          </article>
        </div>
      </section>
    </main>
  );
}
