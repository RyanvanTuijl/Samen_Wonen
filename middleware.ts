import { NextRequest, NextResponse } from 'next/server';
import acceptLanguage from 'accept-language';
// Removed import of settings
// import { fallbackLng, locales } from './app/i18n/settings';

// Define locales and fallback directly in middleware
const locales = ['nl', 'en'];
const fallbackLng = 'nl';

acceptLanguage.languages([...locales]);

export const config = {
  // matcher: '/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)' // Original matcher
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - assets (static assets)
     * - favicon.ico (favicon file)
     * - sw.js (service worker)
     */
    '/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)'
  ]
};

const cookieName = 'i18next';

export function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  // Check if the pathname likely refers to a file (contains a dot in the last segment)
  // If so, bypass the i18n logic
  if (pathname.includes('.') || pathname.startsWith('/api')) {
    return NextResponse.next();
  }

  let lng: string | null = null;
  
  // 1. Check cookie
  if (req.cookies.has(cookieName)) {
    lng = acceptLanguage.get(req.cookies.get(cookieName)?.value);
  }
  // 2. Check Accept-Language header
  if (!lng) {
    lng = acceptLanguage.get(req.headers.get('Accept-Language'));
  }
  // 3. Use fallback
  if (!lng) {
    lng = fallbackLng;
  }

  // Redirect if locale in path is not supported or missing
  const pathnameIsMissingLocale = locales.every(
    (loc) => !pathname.startsWith(`/${loc}/`) && pathname !== `/${loc}`
  );

  if (pathnameIsMissingLocale) {
    // e.g. incoming request is /products
    // The new URL is now /en/products
    return NextResponse.redirect(
      new URL(`/${lng}${pathname.startsWith('/') ? '' : '/'}${pathname}`, req.url)
    );
  }

  // Set language preference cookie on response if referer exists
  let response = NextResponse.next();
  if (req.headers.has('referer')) {
    const refererUrl = new URL(req.headers.get('referer') as string);
    const lngInReferer = locales.find(l => refererUrl.pathname.startsWith(`/${l}`));
    if (lngInReferer) {
      response.cookies.set(cookieName, lngInReferer);
    }
  }

  return response;
} 