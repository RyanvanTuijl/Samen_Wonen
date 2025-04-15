import { NextRequest, NextResponse } from 'next/server';

const locales = ['nl', 'en'];
const fallbackLng = 'nl';

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
  const pathnameHasLocale = locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (!pathnameHasLocale) {
    // Get preferred locale from cookie or use fallback
    const locale = request.cookies.get('NEXT_LOCALE')?.value || fallbackLng;

    // Handle root path specially
    if (pathname === '/') {
      return NextResponse.redirect(new URL(`/${locale}`, request.url));
    }

    // Redirect to the same pathname but with locale prefix
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|api|favicon.ico).*)',
  ],
}; 