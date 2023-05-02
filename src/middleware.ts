import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  const pathNameIsOnlyLocale = pathname.match(/^\/\w+$/)

  if (pathNameIsOnlyLocale) {
    return NextResponse.rewrite(new URL(`${pathname}/home`, request.url))
  }

  return null
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
