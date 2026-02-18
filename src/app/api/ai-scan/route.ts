import { NextRequest, NextResponse } from 'next/server';

type ScanInput = {
  business: string;
  website: string;
  vertical?: string;
  email: string;
  variant?: 'ai-readiness' | 'ai-scanner' | 'ai-audit';
};

function validEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function fetchSiteSignals(url: string) {
  try {
    const normalized = /^https?:\/\//i.test(url) ? url : `https://${url}`;
    const res = await fetch(normalized, { method: 'GET', cache: 'no-store' });
    if (!res.ok) return { ok: false, schema: false, faq: false, local: false };
    const html = (await res.text()).slice(0, 250_000).toLowerCase();
    return {
      ok: true,
      schema: html.includes('application/ld+json') || html.includes('schema.org'),
      faq: html.includes('faqpage') || html.includes('faq'),
      local:
        html.includes('localbusiness') ||
        html.includes('servicearea') ||
        html.includes('postalcode') ||
        html.includes('geo'),
    };
  } catch {
    return { ok: false, schema: false, faq: false, local: false };
  }
}

async function upsertLeadAndTask(input: ScanInput, score: number) {
  const token = process.env.GHL_API_TOKEN;
  const locationId = process.env.GHL_LOCATION_ID || 'ukS9ShMolehB8MKWPstv';
  const assigneeId = process.env.GHL_ASSIGNEE_ID || 'rVX5I5UZCKaJxyIUKviL';

  if (!token) return { contactId: null, taskCreated: false, reason: 'missing_token' };

  const headers = {
    Authorization: `Bearer ${token}`,
    Version: '2021-07-28',
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  let contactId: string | null = null;

  try {
    const contactResp = await fetch('https://services.leadconnectorhq.com/contacts/upsert', {
      method: 'POST',
      headers,
      body: JSON.stringify({
        locationId,
        name: input.business,
        companyName: input.business,
        email: input.email,
        website: input.website,
        tags: ['trd_ai_scanner', input.variant || 'ai-scanner'],
      }),
    });

    if (contactResp.ok) {
      const data = await contactResp.json();
      contactId = data?.contact?.id || null;
    }
  } catch {
    // best effort
  }

  let taskCreated = false;

  if (contactId) {
    try {
      const due = new Date(Date.now() + 60 * 60 * 1000).toISOString();
      const taskResp = await fetch('https://services.leadconnectorhq.com/tasks/', {
        method: 'POST',
        headers,
        body: JSON.stringify({
          locationId,
          contactId,
          assignedTo: assigneeId,
          title: `TRD AI Scanner Follow-up: ${input.business}`,
          body: `Lead completed scanner. Score: ${score}/100. Email: ${input.email}. Website: ${input.website}`,
          dueDate: due,
        }),
      });
      taskCreated = taskResp.ok;
    } catch {
      // best effort
    }
  }

  const webhook = process.env.SCANNER_WEBHOOK_URL;
  if (webhook) {
    try {
      await fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event: 'scanner_submission',
          ts: new Date().toISOString(),
          score,
          contactId,
          taskCreated,
          payload: input,
        }),
      });
    } catch {
      // best effort
    }
  }

  return { contactId, taskCreated, reason: 'ok' };
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as ScanInput;

    if (!body.business || !body.website || !body.email) {
      return NextResponse.json({ error: 'Business, website, and email are required.' }, { status: 400 });
    }

    if (!validEmail(body.email)) {
      return NextResponse.json({ error: 'Please enter a valid email.' }, { status: 400 });
    }

    const site = await fetchSiteSignals(body.website);
    let score = 62;
    if (site.ok) score += 10;
    if (site.schema) score += 12;
    if (site.local) score += 8;
    if (site.faq) score += 6;
    score = Math.max(40, Math.min(96, score));

    const gaps = [
      !site.schema && 'Missing/weak schema markup for AI and local understanding',
      !site.local && 'Insufficient local entity signals (services, geography, NAP consistency)',
      !site.faq && 'No AI-answer-focused FAQ coverage on high-intent pages',
      'GBP posting/review cadence can be improved for freshness and trust',
      'Lead capture journey can be tightened for higher conversion from local traffic',
    ].filter(Boolean);

    const crm = await upsertLeadAndTask(body, score);

    return NextResponse.json({
      score,
      summary:
        score >= 82
          ? 'Strong base. A focused optimization cycle can move you into dominant local AI visibility.'
          : 'Clear upside. Technical and local signal improvements should materially improve lead flow.',
      projectedLift: `${(2 + (100 - score) / 20).toFixed(1)}x projected qualified lead opportunity`,
      gaps,
      bookingUrl: '/contact',
      crm,
    });
  } catch {
    return NextResponse.json({ error: 'Scanner request failed. Please try again.' }, { status: 500 });
  }
}
