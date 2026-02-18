import { NextRequest, NextResponse } from 'next/server';

type PlaceResult = {
  place_id?: string;
  name?: string;
  formatted_address?: string;
  geometry?: { location?: { lat?: number; lng?: number } };
  rating?: number;
  types?: string[];
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

async function runLookup(businessName: string, state: string) {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'Google Places API key not configured' }, { status: 500 });
  }

  const query = `${businessName} ${state}`.trim();
  const searchUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(query)}&key=${apiKey}`;

  const response = await fetch(searchUrl, { cache: 'no-store' });
  const data = (await response.json()) as {
    status?: string;
    error_message?: string;
    results?: PlaceResult[];
  };

  if (data.status !== 'OK' || !data.results || data.results.length === 0) {
    return NextResponse.json(
      {
        error: 'No businesses found matching that name',
        details: data.error_message || data.status || 'ZERO_RESULTS',
      },
      { status: 404 },
    );
  }

  const businesses = data.results
    .filter((r) => r.place_id && r.name)
    .map((r) => ({
      placeId: r.place_id as string,
      name: r.name as string,
      address: r.formatted_address || '',
      lat: r.geometry?.location?.lat,
      lng: r.geometry?.location?.lng,
      rating: r.rating,
      types: r.types,
      score: scoreNameMatch(r.name || '', businessName),
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 8)
    .map(({ score, ...rest }) => rest);

  return NextResponse.json({ success: true, businesses, query });
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const businessName = searchParams.get('name')?.trim() || '';
    const state = searchParams.get('state')?.trim() || '';

    if (!businessName || !state) {
      return NextResponse.json({ error: 'name and state are required' }, { status: 400 });
    }

    return await runLookup(businessName, state);
  } catch {
    return NextResponse.json({ error: 'Lookup failed' }, { status: 500 });
  }
}

// Keep POST for backwards compatibility with existing pages
export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as { businessName?: string; state?: string };
    const businessName = body.businessName?.trim() || '';
    const state = body.state?.trim() || '';

    if (!businessName || !state) {
      return NextResponse.json({ error: 'businessName and state are required' }, { status: 400 });
    }

    return await runLookup(businessName, state);
  } catch {
    return NextResponse.json({ error: 'Lookup failed' }, { status: 500 });
  }
}
