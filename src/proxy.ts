import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getSessionFromRequest } from '@/lib/auth';

/**
 * Next.js 16+ Proxy File Convention
 * Protects /admin routes using Edge/Node-safe jose JWT verification
 */
export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isLoginPage = pathname === '/admin/login';
  const session = await getSessionFromRequest(request);

  // If already authenticated and trying to access /admin/login, redirect to /admin
  if (isLoginPage) {
    if (session) {
      return NextResponse.redirect(new URL('/admin', request.url));
    }
    return NextResponse.next();
  }

  // If unauthenticated and trying to access protected /admin routes, redirect to /admin/login
  if (!session) {
    const loginUrl = new URL('/admin/login', request.url);
    if (pathname !== '/admin') {
      loginUrl.searchParams.set('from', pathname);
    }
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
