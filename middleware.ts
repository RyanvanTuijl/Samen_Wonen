import { NextRequest, NextResponse } from 'next/server';
import acceptLanguage from 'accept-language';
// Removed import of settings
// import { fallbackLng, locales } from './app/i18n/settings';

// Define locales and fallback directly in middleware
const locales = ['nl', 'en'];
const fallbackLng = 'nl';

acceptLanguage.languages([...locales]);

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Handle public files and API routes
  if (
    PUBLIC_FILE.test(pathname) ||
    pathname.startsWith('/_next') ||
    pathname.includes('/api/')
  ) {
    return NextResponse.next();
  }

  // Check if the pathname already has a locale
  const pathnameHasLocale = pathname.startsWith('/nl/') || pathname.startsWith('/en/');

  if (!pathnameHasLocale) {
    // Get preferred locale from cookie or accept-language header
    const preferredLocale = request.cookies.get('NEXT_LOCALE')?.value || 'nl';

    // Redirect to the same pathname but with locale prefix
    request.nextUrl.pathname = `/${preferredLocale}${pathname}`;
    return NextResponse.redirect(request.nextUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|api|favicon.ico).*)',
  ],
}; 