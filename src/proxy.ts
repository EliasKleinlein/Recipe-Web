import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const dankeOnly = process.env.DANKE_ONLY === "true";

  if (!dankeOnly) {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;

  const allowed =
    pathname === "/danke-renke" ||
    pathname.startsWith("/danke-renke/") ||
    pathname.startsWith("/api/thanks") ||
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/images/") ||
    pathname === "/favicon.ico";

  if (allowed) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/danke-renke", request.url));
}

export const config = {
  matcher: "/:path*",
};
