



import { NextRequest, NextResponse } from 'next/server';

export default function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const session = !!req.cookies.get("next-auth.session-token")

  console.log(req);
  

 
  if (!session) {
    return NextResponse.redirect(new URL(`/api/auth/signin?callbackUrl=${path}`, req.url));
  }

  
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/newtools']
}

