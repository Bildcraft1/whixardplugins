// middleware.ts

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/flamecord')) {
    return NextResponse.rewrite(new URL('/api/download?plugin=flamecord', request.url))
  }

  if (request.nextUrl.pathname.startsWith('/telegram')) {
    return NextResponse.rewrite(new URL('https://t.me/WhiXard', request.url))
  }
}
