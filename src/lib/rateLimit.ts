import { headers } from "next/headers";

/**
 * Lightweight In-Memory Sliding-Window Rate Limiter
 *
 * Designed for MVP-level form submission protection without requiring
 * external databases or Redis infrastructure.
 *
 * NOTE ON SERVERLESS ENVIRONMENTS:
 * In-memory storage is local to each process/container instance. While it provides
 * effective protection against rapid bot loops hitting the same container, it is not
 * globally distributed across serverless instances. This fulfills the MVP requirement
 * for zero-infrastructure abuse protection alongside Honeypot and Zod validation.
 */

interface RateLimitRecord {
  timestamps: number[];
}

const ipRequestMap = new Map<string, RateLimitRecord>();

// Cleanup stale records periodically (every 10 minutes)
const CLEANUP_INTERVAL_MS = 10 * 60 * 1000;
let lastCleanup = Date.now();

function cleanupStaleRecords(windowMs: number) {
  const now = Date.now();
  if (now - lastCleanup < CLEANUP_INTERVAL_MS) return;

  lastCleanup = now;
  for (const [ip, record] of ipRequestMap.entries()) {
    const validTimestamps = record.timestamps.filter((ts) => now - ts < windowMs);
    if (validTimestamps.length === 0) {
      ipRequestMap.delete(ip);
    } else {
      record.timestamps = validTimestamps;
    }
  }
}

export async function getClientIp(): Promise<string> {
  try {
    const headerList = await headers();
    const forwardedFor = headerList.get("x-forwarded-for");
    if (forwardedFor) {
      // Return the first IP in the comma-separated list
      return forwardedFor.split(",")[0].trim();
    }
    const realIp = headerList.get("x-real-ip");
    if (realIp) return realIp.trim();

    const cfConnectingIp = headerList.get("cf-connecting-ip");
    if (cfConnectingIp) return cfConnectingIp.trim();

    return "unknown-client";
  } catch {
    return "unknown-client";
  }
}

export interface RateLimitResult {
  success: boolean;
  remaining: number;
  resetMs: number;
}

/**
 * Checks and records a request for the given identifier.
 *
 * @param identifier - Key to rate limit (typically client IP)
 * @param limit - Maximum allowed requests in the time window (default: 5)
 * @param windowMs - Time window in milliseconds (default: 15 minutes)
 */
export function checkRateLimit(
  identifier: string,
  limit: number = 5,
  windowMs: number = 15 * 60 * 1000
): RateLimitResult {
  const now = Date.now();
  cleanupStaleRecords(windowMs);

  const record = ipRequestMap.get(identifier) ?? { timestamps: [] };

  // Filter timestamps within the current sliding window
  const validTimestamps = record.timestamps.filter((ts) => now - ts < windowMs);

  if (validTimestamps.length >= limit) {
    const oldestTimestamp = validTimestamps[0];
    const resetMs = Math.max(0, windowMs - (now - oldestTimestamp));
    return {
      success: false,
      remaining: 0,
      resetMs,
    };
  }

  // Record this request
  validTimestamps.push(now);
  ipRequestMap.set(identifier, { timestamps: validTimestamps });

  return {
    success: true,
    remaining: limit - validTimestamps.length,
    resetMs: windowMs,
  };
}
