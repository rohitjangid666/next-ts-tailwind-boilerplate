import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // return NextResponse.redirect(new URL('/home', request.url));
  return NextResponse.redirect(new URL(request.nextUrl, request.url));
}

export const config = {
  matcher: ['/about/:path*', '/dashboard/:path*']
  // matcher: [
  //   /*
  //    * Match all request paths except for the ones starting with:
  //    * - api (API routes)
  //    * - _next/static (static files)
  //    * - _next/image (image optimization files)
  //    * - favicon.ico, sitemap.xml, robots.txt (metadata files)
  //    */
  //   '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)'
  // ]
  // matcher: [
  //   /*
  //    * Match all request paths except for the ones starting with:
  //    * - api (API routes)
  //    * - _next/static (static files)
  //    * - _next/image (image optimization files)
  //    * - favicon.ico, sitemap.xml, robots.txt (metadata files)
  //    */
  //   {
  //     source: '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  //     missing: [
  //       { type: 'header', key: 'next-router-prefetch' },
  //       { type: 'header', key: 'purpose', value: 'prefetch' }
  //     ]
  //   },
  //   {
  //     source: '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  //     has: [
  //       { type: 'header', key: 'next-router-prefetch' },
  //       { type: 'header', key: 'purpose', value: 'prefetch' }
  //     ]
  //   },
  //   {
  //     source: '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  //     has: [{ type: 'header', key: 'x-present' }],
  //     missing: [{ type: 'header', key: 'x-missing', value: 'prefetch' }]
  //   }
  // ]
};
