import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import ROUTES from './shared/providers/routers';

export function middleware(request: NextRequest) {
  const url = request.nextUrl;

  console.log('Middleware triggered:', url.pathname);
  const validRoutes = [
    ROUTES.CREATE,
    ROUTES.HOME,
    '/',
    // add other public routes here
  ];

  // Redirect to home dashboard (/)
  if (url.pathname === '/') {

    return NextResponse.redirect(new URL('dasboard/home', request.url));
  }

  return NextResponse.next();
}
export const config = {
  matcher: ['/'],
};