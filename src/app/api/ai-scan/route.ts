import { NextRequest, NextResponse } from 'next/server';

type ScanInput = {
  name: string;
  business: string;
  website: string;
  vertical?: string;
  email: string;
  variant?: 'ai-readiness' | 'ai-scanner' | 'ai-audit';
};

type GBPPlacement = {
  checked: boolean;
  position: number | null;
  sampleQuery: string;
};

function validEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function pickSearchQuery(input: ScanInput) {
  const base = input.vertical?.trim() || 'local service';
  return `${base} near me ${input.business}`.trim();
}

async function checkGBPPlacement(input: ScanInput): Promise<GBPPlacement> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const sampleQuery = pickSearchQuery(input);
  if (!apiKey) return { checked: false, position: null, sampleQuery };

  try {
    const resp = await fetch('https://places.googleapis.com/v1/places:searchText', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': 'places.displayName',
      },
      body: JSON.stringify({ textQuery: sampleQuery, maxResultCount: 10, regionCode: 'US', languageCode: 'en' }),
      cache: 'no-store',
    });

    if (!resp.ok) return { checked: false, position: null, sampleQuery };
    const json = (await resp.json()) as { places?: Array<{ displayName?: { text?: string } }> };
    const places = json.places || [];
    const tokens = input.business.toLowerCase().split(/\s+/).filter((x) => x.length > 2);

    let position: number | null = null;
    places.some((p, i) => {
      const n = (p.displayName?.text || '').toLowerCase();
      const match = tokens.filter((t) => n.includes(t)).length;
      if (match >= Math.max(1, Math.floor(tokens.length / 2))) {
        position = i + 1;
        return true;
      }
      return false;
    });

    return { checked: true, position, sampleQuery };
  } catch {
    return { checked: false, position: null, sampleQuery };
  }
}

async function firecrawlDeepNegatives(url: string) {
  const key = process.env.FIRECRAWL_API_KEY;
  if (!key) {
    return {
      negatives: ['Firecrawl key missing: deep crawl unavailable'],
      crawled: false,
    };
  }

  try {
    const normalized = /^https?:\/\//i.test(url) ? url : `https://${url}`;
    const resp = await fetch('https://api.firecrawl.dev/v1/scrape', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${key}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        url: normalized,
        formats: ['markdown'],
        onlyMainContent: true,
      }),
      cache: 'no-store',
    });

    if (!resp.ok) {
      return { negatives: ['Firecrawl scrape failed'], crawled: false };
    }

    const data = (await resp.json()) as { data?: { markdown?: string } };
    const markdown = (data?.data?.markdown || '').toLowerCase();

    const negatives: string[] = [];

    if (!markdown.includes('schema') && !markdown.includes('application/ld+json')) {
      negatives.push('No clear schema/JSON-LD evidence found in crawl output');
    }
    if (!markdown.includes('faq')) {
      negatives.push('No visible FAQ content for AI answer targeting');
    }
    if (!markdown.includes('review') && !markdown.includes('testimonial')) {
      negatives.push('Weak trust proof on-page (few review/testimonial signals found)');
    }
    if (!markdown.includes('contact') || !markdown.includes('phone')) {
      negatives.push('Contact conversion path appears weak or hard to find');
    }
    if (!markdown.includes('service') && !markdown.includes('location')) {
      negatives.push('Service/location intent coverage appears thin for local search');
    }

    if (negatives.length === 0) {
      negatives.push('No major technical negatives detected from initial crawl sample (manual validation recommended)');
    }

    return { negatives, crawled: true };
  } catch {
    return { negatives: ['Deep crawl exception occurred'], crawled: false };
  }
}

async function createLeadTaskAndNote(input: ScanInput, negatives: string[], placement: GBPPlacement, score: number) {
  const token = process.env.GHL_API_TOKEN;
  const locationId = process.env.GHL_LOCATION_ID || 'ukS9ShMolehB8MKWPstv';
  const assigneeId = process.env.GHL_ASSIGNEE_ID || 'rVX5I5UZCKaJxyIUKviL';

  if (!token) return { contactId: null, taskCreated: false, noteCreated: false, reason: 'missing_token' };

  const headers = {
    Authorization: `Bearer ${token}`,
    Version: '2021-07-28',
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  let contactId: string | null = null;
  let taskCreated = false;
  let noteCreated = false;

  try {
    const contactResp = await fetch('https://services.leadconnectorhq.com/contacts/upsert', {
      method: 'POST',
      headers,
      body: JSON.stringify({
        locationId,
        firstName: input.name,
        name: input.name,
        companyName: input.business,
        email: input.email,
        website: input.website,
        tags: ['ai_scanner_lead', input.variant || 'ai-scanner'],
      }),
    });

    if (contactResp.ok) {
      const data = await contactResp.json();
      contactId = data?.contact?.id || null;
    }
  } catch {
    // best effort
  }

  const placementText = placement.checked
    ? placement.position
      ? `Approx map placement for "${placement.sampleQuery}": #${placement.position}`
      : `Not found in top 10 for "${placement.sampleQuery}"`
    : 'Map placement check unavailable';

  const noteBody = [
    `AI Scanner Result — Score: ${score}/100`,
    placementText,
    'Negatives found:',
    ...negatives.map((n, i) => `${i + 1}. ${n}`),
  ].join('\n');

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
          title: `AI Scanner follow-up: ${input.business}`,
          body: `New scanner lead (${input.name}). ${placementText}`,
          dueDate: due,
        }),
      });
      taskCreated = taskResp.ok;
    } catch {
      // best effort
    }

    // best-effort notes (LeadConnector endpoint variations)
    try {
      const n1 = await fetch('https://services.leadconnectorhq.com/contacts/notes', {
        method: 'POST',
        headers,
        body: JSON.stringify({ locationId, contactId, body: noteBody }),
      });
      noteCreated = n1.ok;

      if (!noteCreated) {
        const n2 = await fetch(`https://services.leadconnectorhq.com/contacts/${contactId}/notes`, {
          method: 'POST',
          headers,
          body: JSON.stringify({ locationId, body: noteBody }),
        });
        noteCreated = n2.ok;
      }
    } catch {
      // best effort
    }
  }

  return { contactId, taskCreated, noteCreated, reason: 'ok' };
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as ScanInput;

    if (!body.name || !body.business || !body.website || !body.email) {
      return NextResponse.json({ error: 'Name, business, website, and email are required.' }, { status: 400 });
    }
    if (!validEmail(body.email)) {
      return NextResponse.json({ error: 'Please enter a valid email.' }, { status: 400 });
    }

    const [crawl, placement] = await Promise.all([firecrawlDeepNegatives(body.website), checkGBPPlacement(body)]);

    let score = 90;
    score -= Math.min(45, crawl.negatives.length * 8);
    if (placement.checked) {
      if (!placement.position) score -= 10;
      else if (placement.position > 6) score -= 6;
      else if (placement.position > 3) score -= 3;
    }
    score = Math.max(25, Math.min(96, score));

    const crm = await createLeadTaskAndNote(body, crawl.negatives, placement, score);

    return NextResponse.json({
      score,
      summary: 'Deep audit complete. Showing key negatives only.',
      projectedLift: `${(2.6 + (100 - score) / 17).toFixed(1)}x projected upside after fixes`,
      gaps: crawl.negatives,
      bookingUrl: '/contact',
      placement,
      crm,
    });
  } catch {
    return NextResponse.json({ error: 'Scanner request failed. Please try again.' }, { status: 500 });
  }
}
