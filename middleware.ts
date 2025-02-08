import { NextResponse } from "next/server";

const RATE_LIMIT = 5;
const WINDOW_MS = 60 * 1000;
const ipRequests = new Map<string, { count: number; timestamp: number }>();

export function middleware(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for") ||
    req.headers.get("cf-connecting-ip") ||
    "unknown";
  const now = Date.now();

  if (ip) {
    const requestInfo = ipRequests.get(ip) || { count: 0, timestamp: now };

    if (now - requestInfo.timestamp < WINDOW_MS) {
      if (requestInfo.count >= RATE_LIMIT) {
        return NextResponse.json(
          { error: "Too many requests, please try again later" },
          { status: 429 }
        );
      }
      requestInfo.count++;
    } else {
      requestInfo.count = 1;
      requestInfo.timestamp = now;
    }

    ipRequests.set(ip, requestInfo);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/app/api/:path*",
};
