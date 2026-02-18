import { NextRequest, NextResponse } from 'next/server';

type Place = {
  placeId: string;
  name: string;
  address: string;
};

function scoreNameMatch(candidate: string, query: string) {
  const a = candidate.toLowerCase();
  const tokens = query
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter((x) => x.length > 2);
  return tokens.reduce((acc, t) => acc + (a.includes(t) ? 1 : 0), 0);
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as { businessName?: string; state?: string };
    const businessName = body.businessName?.trim() || '';
    const state = body.state?.trim() || '';

    if (!businessName || !state) {
      return NextResponse.json({ error: 'businessName and state are required' }, { status: 400 });
    }

    const apiKey = process.env.GOOGLE_PLACES_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'Google Places API key not configured' }, { status: 500 });
    }

    const query = `${businessName} ${state}`;
    const url = new URL('https://maps.googleapis.com/maps/api/place/textsearch/json');
    url.searchParams.set('query', query);
    url.searchParams.set('key', apiKey);

    const resp = await fetch(url.toString(), { cache: 'no-store' });
    const json = (await resp.json()) as {
      results?: Array<{ place_id?: string; name?: string; formatted_address?: string }>;
    };

    const candidates = (json.results || [])
      .filter((r) => r.place_id && r.name)
      .map((r) => ({
        placeId: r.place_id as string,
        name: r.name as string,
        address: r.formatted_address || '',
        score: scoreNameMatch(r.name || '', businessName),
      }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 8)
      .map(({ placeId, name, address }) => ({ placeId, name, address })) as Place[];

    return NextResponse.json({ candidates, query });
  } catch {
    return NextResponse.json({ error: 'Lookup failed' }, { status: 500 });
  }
}
