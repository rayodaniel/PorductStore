import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl;



  // Redirect to home dashboard (/)
  if (url.pathname === '/') {

    return NextResponse.redirect(new URL('dasboard/home', request.url));
  }

  return NextResponse.next();
}
export const config = {
  matcher: ['/'],
};