'use client';

import { useState } from 'react';

const checklist = [
  'GBP completeness + category alignment',
  'Schema depth (LocalBusiness, Service, FAQ, Review)',
  'Citation consistency + map ecosystem trust',
  'AI-answer targeting (entity-rich service content)',
  'Conversion path clarity (call/form/scheduling)',
];

function scoreModel(name: string, location: string) {
  const v = (name + location).length;
  return Math.max(46, Math.min(95, 60 + (v % 33)));
}

export default function AIAuditPage() {
  const [business, setBusiness] = useState('');
  const [location, setLocation] = useState('Missouri');
  const [score, setScore] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-[#f7f4ef] text-[#17120f]">
      <section className="mx-auto max-w-5xl px-6 py-14 md:py-20">
        <div className="grid gap-10 md:grid-cols-[0.95fr,1.05fr]">
          <aside className="rounded-2xl border border-[#d7cfc3] bg-white p-6 md:p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-[#7a5d42]">True Rank Digital • Variant C</p>
            <h1 className="mt-3 text-4xl font-semibold leading-tight md:text-5xl">AI Audit</h1>
            <p className="mt-4 text-sm text-[#4c3d2d]">
              Editorial-style audit landing page designed for consultative buyers. Ideal for legal, medical,
              home services, and dealer groups.
            </p>

            <div className="mt-8 space-y-4">
              <input
                value={business}
                onChange={(e) => setBusiness(e.target.value)}
                placeholder="Business name"
                className="w-full rounded-xl border border-[#d7cfc3] bg-[#fdfbf8] px-4 py-3"
              />
              <input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Primary city/state"
                className="w-full rounded-xl border border-[#d7cfc3] bg-[#fdfbf8] px-4 py-3"
              />
              <button
                onClick={() => setScore(scoreModel(business, location))}
                className="w-full rounded-xl bg-[#17120f] px-4 py-3 font-semibold text-white transition hover:bg-[#2a221c]"
              >
                Start Audit
              </button>
            </div>

            {score !== null && (
              <div className="mt-6 rounded-xl border border-[#d7cfc3] bg-[#fffdf9] p-4">
                <p className="text-xs uppercase tracking-widest text-[#7a5d42]">Readiness</p>
                <p className="text-4xl font-semibold">{score}/100</p>
                <p className="mt-2 text-sm text-[#4c3d2d]">
                  {score > 82
                    ? 'Competitive position is strong. Focus on compounding AI citation visibility.'
                    : 'High upside opportunity. Structured improvements should materially increase lead flow.'}
                </p>
              </div>
            )}
          </aside>

          <article className="rounded-2xl border border-[#d7cfc3] bg-white p-6 md:p-8">
            <h2 className="text-2xl font-semibold">What this scanner checks</h2>
            <ul className="mt-5 space-y-3">
              {checklist.map((item) => (
                <li key={item} className="rounded-lg border border-[#e6ddd2] bg-[#fcf9f4] px-3 py-2 text-sm">
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t border-[#e5dbcf] pt-6">
              <h3 className="text-lg font-semibold">Lead Routing Notes</h3>
              <p className="mt-2 text-sm text-[#4c3d2d]">
                When connected, this form should post to CRM with source tag <code>trd_ai_audit</code>, then create
                follow-up task assignment for your sales owner (Jon) and trigger outbound nurture sequence.
              </p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
