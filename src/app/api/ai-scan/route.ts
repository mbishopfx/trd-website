import { NextRequest, NextResponse } from 'next/server';

type ScanInput = {
  name: string;
  business: string;
  website: string;
  mapKeyword: string;
  vertical?: string;
  email: string;
  phone: string;
  variant?: 'ai-readiness' | 'ai-scanner' | 'ai-audit';
};

type GBPPlacement = {
  checked: boolean;
  position: number; // 1..10, 11 = not in top 10
  sampleQuery: string;
  note: string;
};

type AuditSignals = {
  negatives: string[];
  schemaVisible: boolean;
  socialPresent: boolean;
  seoIssues: string[];
  serviceLocationPagesVisible: boolean;
};

function validEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function ensureUrl(url: string) {
  return /^https?:\/\//i.test(url) ? url : `https://${url}`;
}

async function checkGBPPlacement(input: ScanInput): Promise<GBPPlacement> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const primaryQuery = input.mapKeyword.trim();
  const fallbackQuery = `${input.business} ${input.vertical || ''}`.trim();

  if (!apiKey) {
    return {
      checked: false,
      position: 11,
      sampleQuery: primaryQuery || fallbackQuery || input.business,
      note: 'API key missing; treated as not in top 10',
    };
  }

  const tryQuery = async (query: string) => {
    const resp = await fetch('https://places.googleapis.com/v1/places:searchText', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': 'places.displayName',
      },
      body: JSON.stringify({ textQuery: query, maxResultCount: 10, regionCode: 'US', languageCode: 'en' }),
      cache: 'no-store',
    });
    if (!resp.ok) return null;
    const json = (await resp.json()) as { places?: Array<{ displayName?: { text?: string } }> };
    return json.places || [];
  };

  try {
    const tokens = input.business.toLowerCase().split(/\s+/).filter((x) => x.length > 2);
    let usedQuery = primaryQuery || fallbackQuery || input.business;
    let places = await tryQuery(usedQuery);

    if (!places || places.length === 0) {
      usedQuery = fallbackQuery || input.business;
      places = await tryQuery(usedQuery);
    }

    if (!places || places.length === 0) {
      return { checked: false, position: 11, sampleQuery: usedQuery, note: 'No map results returned; treated as not in top 10' };
    }

    let position = 11;
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
      sampleQuery: usedQuery,
      note: position <= 10 ? 'Ranking found in top 10' : 'Not found in top 10',
    };
  } catch {
    return {
      checked: false,
      position: 11,
      sampleQuery: primaryQuery || fallbackQuery || input.business,
      note: 'Placement check exception; treated as not in top 10',
    };
  }
}

async function runDeepAudit(input: ScanInput): Promise<AuditSignals> {
  const url = ensureUrl(input.website);
  const key = process.env.FIRECRAWL_API_KEY;

  let html = '';
  try {
    const res = await fetch(url, { cache: 'no-store' });
    if (res.ok) html = await res.text();
  } catch {
    // best effort
  }

  let firecrawlMarkdown = '';
  if (key) {
    try {
      const fc = await fetch('https://api.firecrawl.dev/v1/scrape', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${key}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url, formats: ['markdown'], onlyMainContent: true }),
        cache: 'no-store',
      });
      if (fc.ok) {
        const json = (await fc.json()) as { data?: { markdown?: string } };
        firecrawlMarkdown = json?.data?.markdown || '';
      }
    } catch {
      // best effort
    }
  }

  const combined = `${html}\n${firecrawlMarkdown}`.toLowerCase();

  const schemaVisible = combined.includes('application/ld+json') || combined.includes('schema.org');
  const socialPresent =
    combined.includes('facebook.com') ||
    combined.includes('instagram.com') ||
    combined.includes('linkedin.com') ||
    combined.includes('tiktok.com') ||
    combined.includes('x.com') ||
    combined.includes('twitter.com');

  const serviceLocationPagesVisible =
    combined.includes('/services') ||
    combined.includes('/service-areas') ||
    combined.includes('/locations') ||
    combined.includes('service areas') ||
    combined.includes('areas we serve');

  const seoIssues: string[] = [];
  if (!/<title>[^<]{15,}<\/title>/i.test(html)) seoIssues.push('Weak or missing optimized <title> tag');
  if (!/meta\s+name=["']description["']\s+content=["'][^"']{60,}/i.test(html)) seoIssues.push('Missing/weak meta description');
  if (!/<h1[^>]*>[^<]{4,}<\/h1>/i.test(html)) seoIssues.push('Missing clear H1 headline');
  if ((html.match(/<h1/gi) || []).length > 1) seoIssues.push('Multiple H1 tags detected (possible structure issue)');

  const negatives: string[] = [];
  if (!schemaVisible) negatives.push('Schema visibility is weak or missing (no strong JSON-LD evidence found).');
  if (!socialPresent) negatives.push('Social presence signals are weak (no clear linked social profiles found).');
  if (seoIssues.length) negatives.push(`Website SEO issues: ${seoIssues.join(' | ')}`);
  if (!serviceLocationPagesVisible) negatives.push('Service/location pages are not clearly visible for local intent.');

  if (negatives.length === 0) negatives.push('No major negatives detected in initial deep crawl sample. Manual review recommended.');

  const defaults = [
    'Map pack ranking is outside top positions for your target keyword.',
    'Entity consistency across website, GBP, and citations needs tightening.',
    'Conversion journey from discovery to booked call can be improved.',
  ];
  for (const d of defaults) {
    if (negatives.length >= 3) break;
    negatives.push(d);
  }

  return { negatives, schemaVisible, socialPresent, seoIssues, serviceLocationPagesVisible };
}

async function createLeadTaskAndNote(input: ScanInput, placement: GBPPlacement, score: number, audit: AuditSignals) {
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
        phone: input.phone,
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

  const placementText = `GBP map pack placement for "${placement.sampleQuery}": ${placement.position <= 10 ? `#${placement.position}` : 'Not in top 10'} (${placement.note})`;

  const noteBody = [
    `AI Scanner Deep Audit — Score: ${score}/100`,
    '',
    `Name: ${input.name}`,
    `Business: ${input.business}`,
    `Website: ${input.website}`,
    `Email: ${input.email}`,
    `Phone: ${input.phone}`,
    '',
    `1) Schema visibility: ${audit.schemaVisible ? 'Detected (partial/strong)' : 'Weak or missing'}`,
    `2) ${placementText}`,
    `3) Social presence: ${audit.socialPresent ? 'Detected' : 'Weak or missing'}`,
    `4) Website SEO audit: ${audit.seoIssues.length ? audit.seoIssues.join(' | ') : 'No major issues detected in quick technical pass'}`,
    `5) Service/location pages visible: ${audit.serviceLocationPagesVisible ? 'Yes' : 'No'}`,
    '',
    'Negatives found:',
    ...audit.negatives.slice(0, 3).map((n, i) => `${i + 1}. ${n}`),
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

    try {
      const noteResp = await fetch(`https://services.leadconnectorhq.com/contacts/${contactId}/notes`, {
        method: 'POST',
        headers,
        body: JSON.stringify({ body: noteBody }),
      });
      noteCreated = noteResp.ok;
    } catch {
      // best effort
    }
  }

  return { contactId, taskCreated, noteCreated, reason: 'ok' };
}

async function sendScannerLeadEmail(input: ScanInput, score: number, audit: AuditSignals, placement: GBPPlacement) {
  const smtpHost = process.env.SMTP_HOST?.trim();
  const smtpPort = parseInt(process.env.SMTP_PORT?.trim() || '587', 10);
  const smtpSecure = process.env.SMTP_SECURE?.trim() === 'true';
  const smtpUser = process.env.SMTP_USER?.trim();
  const smtpPass = process.env.SMTP_PASS?.trim();

  if (!smtpHost || !smtpUser || !smtpPass) return { sent: false, reason: 'smtp_not_configured' };

  const nodemailer = await import('nodemailer');
  const transporter = nodemailer.default.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpSecure,
    auth: { user: smtpUser, pass: smtpPass },
  });

  const to = ['jon@truerankdigital.com', 'bishop@truerankdigital.com'].join(',');
  const placementText = `${placement.position <= 10 ? `#${placement.position}` : 'Not in top 10'} for "${placement.sampleQuery}" (${placement.note})`;
  const negativesHtml = audit.negatives.slice(0, 3).map((n) => `<li>${n}</li>`).join('');

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:720px;margin:0 auto;border:1px solid #eee;border-radius:10px;overflow:hidden">
      <div style="background:#111827;color:#fff;padding:18px 20px"><h2 style="margin:0">New AI Scanner Lead</h2></div>
      <div style="padding:18px 20px">
        <p><strong>Name:</strong> ${input.name}</p>
        <p><strong>Business:</strong> ${input.business}</p>
        <p><strong>Email:</strong> ${input.email}</p>
        <p><strong>Phone:</strong> ${input.phone}</p>
        <p><strong>Website:</strong> ${input.website}</p>
        <p><strong>Score:</strong> ${score}/100</p>
        <p><strong>Map pack placement:</strong> ${placementText}</p>
        <h3>Top 3 Negatives</h3><ul>${negativesHtml}</ul>
      </div>
    </div>`;

  try {
    await transporter.sendMail({
      from: `"TRD AI Scanner" <${smtpUser}>`,
      to,
      subject: `New AI Scanner Lead: ${input.business} (${score}/100)`,
      html,
    });
    return { sent: true };
  } catch {
    return { sent: false, reason: 'send_failed' };
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as ScanInput;

    if (!body.name || !body.business || !body.website || !body.email || !body.phone || !body.mapKeyword) {
      return NextResponse.json({ error: 'Name, business, website, map keyword, email, and phone are required.' }, { status: 400 });
    }
    if (!validEmail(body.email)) {
      return NextResponse.json({ error: 'Please enter a valid email.' }, { status: 400 });
    }

    const [audit, placement] = await Promise.all([runDeepAudit(body), checkGBPPlacement(body)]);

    let score = 90;
    score -= Math.min(45, audit.negatives.length * 8);
    if (placement.position > 10) score -= 10;
    else if (placement.position > 6) score -= 6;
    else if (placement.position > 3) score -= 3;
    score = Math.max(25, Math.min(96, score));

    const crm = await createLeadTaskAndNote(body, placement, score, audit);
    const emailNotify = await sendScannerLeadEmail(body, score, audit, placement);

    return NextResponse.json({
      score,
      summary: 'Deep audit complete. Showing key negatives only.',
      projectedLift: `${(2.6 + (100 - score) / 17).toFixed(1)}x projected upside after fixes`,
      gaps: audit.negatives.slice(0, 3),
      bookingUrl: '/contact',
      placement,
      crm,
      emailNotify,
    });
  } catch {
    return NextResponse.json({ error: 'Scanner request failed. Please try again.' }, { status: 500 });
  }
}
