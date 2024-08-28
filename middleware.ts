import { NextResponse, type NextRequest } from 'next/server'
import { refreshSession } from './server/session';

const isProtectedRoute = [
  '/profile(.*)'
];
 
export async function middleware(request: NextRequest) {
  const response =  await refreshSession(request);
  if (!response) {
    if (isProtectedRoute.some((route) => new RegExp(route).test(request.nextUrl.pathname))) {
      const loginUrl = new URL('/login', request.url);
      loginUrl.searchParams.set('redirect', request.nextUrl.pathname);
      return NextResponse.redirect(loginUrl);
    }
  }
  return response || NextResponse.next();
}
 
export const config = {
    matcher: [
      '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
    ],
}