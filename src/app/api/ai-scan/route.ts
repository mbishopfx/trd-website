import { NextRequest, NextResponse } from 'next/server';

type ScanInput = {
  business: string;
  website: string;
  vertical?: string;
  email: string;
  variant?: 'ai-readiness' | 'ai-scanner' | 'ai-audit';
};

type SiteSignals = {
  ok: boolean;
  schema: boolean;
  faq: boolean;
  local: boolean;
};

type GBPPlacement = {
  checked: boolean;
  position: number | null;
  sampleQuery: string;
  confidence: 'high' | 'medium' | 'low';
};

function validEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function extractBusinessTokens(text: string) {
  return text
    .toLowerCase()
    .replace(/https?:\/\/[^\s]+/g, ' ')
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter((t) => t.length > 2)
    .slice(0, 4);
}

function pickSearchQuery(input: ScanInput) {
  const base = input.vertical?.trim() || 'local service';
  const cityHint = input.business.match(/\b([A-Z][a-z]+(?:\s+[A-Z][a-z]+)?)\b/g)?.slice(-1)?.[0] || '';
  return `${base} near me ${cityHint}`.trim();
}

async function fetchSiteSignals(url: string): Promise<SiteSignals> {
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

async function checkGBPPlacement(input: ScanInput): Promise<GBPPlacement> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const sampleQuery = pickSearchQuery(input);
  if (!apiKey) {
    return { checked: false, position: null, sampleQuery, confidence: 'low' };
  }

  try {
    const resp = await fetch('https://places.googleapis.com/v1/places:searchText', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': 'places.displayName,places.formattedAddress',
      },
      body: JSON.stringify({ textQuery: sampleQuery, maxResultCount: 10, regionCode: 'US', languageCode: 'en' }),
      cache: 'no-store',
    });

    if (!resp.ok) {
      return { checked: false, position: null, sampleQuery, confidence: 'low' };
    }

    const json = (await resp.json()) as { places?: Array<{ displayName?: { text?: string } }> };
    const places = json.places || [];
    const tokens = extractBusinessTokens(input.business);

    let position: number | null = null;
    places.some((p, i) => {
      const n = (p.displayName?.text || '').toLowerCase();
      const matchCount = tokens.filter((t) => n.includes(t)).length;
      if (matchCount >= Math.max(1, Math.floor(tokens.length / 2))) {
        position = i + 1;
        return true;
      }
      return false;
    });

    return {
      checked: true,
      position,
      sampleQuery,
      confidence: position && position <= 3 ? 'high' : position ? 'medium' : 'low',
    };
  } catch {
    return { checked: false, position: null, sampleQuery, confidence: 'low' };
  }
}

async function upsertLeadAndTask(input: ScanInput, score: number, placement: GBPPlacement) {
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
      const placementText = placement.checked
        ? placement.position
          ? `Approx map placement for \"${placement.sampleQuery}\": #${placement.position}`
          : `Not found in top 10 for \"${placement.sampleQuery}\"`
        : 'Map placement check unavailable';

      const taskResp = await fetch('https://services.leadconnectorhq.com/tasks/', {
        method: 'POST',
        headers,
        body: JSON.stringify({
          locationId,
          contactId,
          assignedTo: assigneeId,
          title: `TRD AI Scanner Follow-up: ${input.business}`,
          body: `Lead completed scanner. Score: ${score}/100. ${placementText}. Email: ${input.email}. Website: ${input.website}`,
          dueDate: due,
        }),
      });
      taskCreated = taskResp.ok;
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

    const [site, placement] = await Promise.all([fetchSiteSignals(body.website), checkGBPPlacement(body)]);

    let score = 50;
    if (site.ok) score += 8;
    if (site.schema) score += 14;
    if (site.local) score += 10;
    if (site.faq) score += 6;

    if (placement.checked) {
      if (placement.position && placement.position <= 3) score += 14;
      else if (placement.position && placement.position <= 6) score += 8;
      else if (placement.position) score += 3;
      else score -= 4;
    }

    score = Math.max(35, Math.min(97, score));

    const gaps = [
      !site.schema && 'Schema markup is too thin for strong AI understanding and citation lift',
      !site.local && 'Local entity signals are weak (service area, geo, NAP context)',
      !site.faq && 'No high-intent FAQ blocks for AI answer targeting',
      placement.checked && !placement.position && `Not visible in top results for "${placement.sampleQuery}"`,
      placement.checked && placement.position && placement.position > 6 && `Low local visibility (currently around #${placement.position}) for "${placement.sampleQuery}"`,
      'GBP post/review cadence can be improved for freshness and trust',
      'Lead conversion journey can be tightened from discovery to booked call',
    ].filter(Boolean) as string[];

    const crm = await upsertLeadAndTask(body, score, placement);

    return NextResponse.json({
      score,
      summary:
        score >= 82
          ? 'Strong baseline. Focused optimization can push this into category-leading local AI visibility.'
          : score >= 68
          ? 'Good starting position with clear upside. Technical + local refinements should improve lead volume.'
          : 'High upside opportunity. Current technical/local signal gaps are likely suppressing discoverability.',
      projectedLift: `${(2.2 + (100 - score) / 18).toFixed(1)}x projected qualified lead opportunity`,
      gaps,
      bookingUrl: '/contact',
      placement,
      crm,
    });
  } catch {
    return NextResponse.json({ error: 'Scanner request failed. Please try again.' }, { status: 500 });
  }
}
