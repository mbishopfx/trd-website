import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  
  // List of tracking/UTM parameters to remove
  const trackingParams = [
    'trk',
    'utm_source',
    'utm_medium',
    'utm_campaign',
    'utm_term',
    'utm_content',
    'gclid',
    'fbclid',
    'msclkid',
    'ref',
    'source',
  ];
  
  // Check if URL has any tracking parameters
  let hasTrackingParams = false;
  trackingParams.forEach((param) => {
    if (url.searchParams.has(param)) {
      hasTrackingParams = true;
      url.searchParams.delete(param);
    }
  });
  
  // If tracking parameters were removed, redirect to clean URL
  // This ensures canonical URLs are always clean
  if (hasTrackingParams) {
    return NextResponse.redirect(url, 301); // Permanent redirect
  }
  
  return NextResponse.next();
}

// Only run middleware on specific paths
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (images, etc.)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif|ico|css|js)).*)',
  ],
};
