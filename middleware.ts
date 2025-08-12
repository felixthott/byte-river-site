import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const ALLOWED = new Set(['US', 'GB', 'IE'])

export function middleware(req: NextRequest) {
  const country = req.headers.get('x-vercel-ip-country') || 'XX'
  const isStudio = req.nextUrl.pathname.startsWith('/studio')
  const isPreview = req.headers.get('x-vercel-deployment-url')?.includes('vercel.app') || false

  // Allow preview deploys and Studio from anywhere
  if (isPreview || isStudio) return NextResponse.next()

  if (!ALLOWED.has(country)) {
    const url = req.nextUrl.clone()
    url.pathname = '/unavailable'
    return NextResponse.rewrite(url)
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next|favicon.ico|robots.txt|sitemap.xml|api/.*).*)'],
}
