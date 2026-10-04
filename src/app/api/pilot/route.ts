import { randomBytes } from "node:crypto";
import { NextResponse } from "next/server";
import {
  STORAGE_UNAVAILABLE_MESSAGE,
  SUCCESS_MESSAGE,
  validatePilot,
} from "@/lib/pilot-schema";
import { getDb, insertPilotInterest, storageEnabled } from "@/lib/db";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type RateBucket = { hits: number[] };

const globalForRate = globalThis as unknown as { pilotHits?: Map<string, RateBucket> };

function rateStore() {
  if (!globalForRate.pilotHits) globalForRate.pilotHits = new Map();
  return globalForRate.pilotHits;
}

function clientKey(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() || "unknown";
  return "local";
}

function limited(request: Request): boolean {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000;
  const key = clientKey(request);
  const store = rateStore();
  const bucket = store.get(key) ?? { hits: [] };
  bucket.hits = bucket.hits.filter((stamp) => now - stamp < windowMs);
  if (bucket.hits.length >= 5) {
    store.set(key, bucket);
    return true;
  }
  bucket.hits.push(now);
  store.set(key, bucket);
  return false;
}

function originAllowed(request: Request): boolean {
  const origin = request.headers.get("origin");
  if (!origin) return false;
  let originUrl: URL;
  try {
    originUrl = new URL(origin);
  } catch {
    return false;
  }

  const allowed = process.env.PILOT_ALLOWED_ORIGINS?.split(",")
    .map((value) => value.trim())
    .filter(Boolean);
  if (allowed && allowed.length > 0) {
    return allowed.includes(origin);
  }

  const host = request.headers.get("host");
  return Boolean(host) && host === originUrl.host;
}

function json(body: unknown, status: number) {
  return NextResponse.json(body, {
    status,
    headers: { "Cache-Control": "no-store" },
  });
}

async function readPayload(request: Request): Promise<unknown> {
  const type = request.headers.get("content-type") ?? "";
  if (type.includes("application/json")) {
    return request.json();
  }
  if (
    type.includes("application/x-www-form-urlencoded") ||
    type.includes("multipart/form-data")
  ) {
    const form = await request.formData();
    return {
      name: form.get("name"),
      contactMethod: form.get("contactMethod"),
      contactValue: form.get("contactValue"),
      stage: form.get("stage"),
      language: form.get("language"),
      consent: form.get("consent"),
    };
  }
  return null;
}

function wantsHtml(request: Request): boolean {
  const type = request.headers.get("content-type") ?? "";
  return !type.includes("application/json");
}

function redirectTo(request: Request, params: Record<string, string>) {
  const url = new URL("/", request.url);
  for (const [key, value] of Object.entries(params)) url.searchParams.set(key, value);
  url.hash = "pilot";
  return NextResponse.redirect(url, 303);
}

export async function POST(request: Request) {
  const html = wantsHtml(request);

  if (!originAllowed(request)) {
    const message = "Open this page in the browser and submit the form from there.";
    if (html) return redirectTo(request, { interest: "rejected" });
    return json({ ok: false, stored: false, error: "origin", message }, 403);
  }

  if (!storageEnabled()) {
    if (html) return redirectTo(request, { interest: "unavailable" });
    return json(
      { ok: false, stored: false, error: "storage", message: STORAGE_UNAVAILABLE_MESSAGE },
      503,
    );
  }

  if (limited(request)) {
    const message =
      "Please wait a little while before sending another note. Your details are still in the form.";
    if (html) return redirectTo(request, { interest: "wait" });
    return json({ ok: false, stored: false, error: "rate", message }, 429);
  }

  let payload: unknown;
  try {
    payload = await readPayload(request);
  } catch {
    payload = null;
  }

  if (payload === null) {
    const message = "We could not read that submission. Please try again.";
    if (html) return redirectTo(request, { interest: "invalid" });
    return json({ ok: false, stored: false, error: "validation", message, fields: {} }, 400);
  }

  const parsed = validatePilot(payload);
  if (!parsed.ok) {
    if (html) return redirectTo(request, { interest: "invalid" });
    return json(
      { ok: false, stored: false, error: "validation", fields: parsed.fields },
      400,
    );
  }

  try {
    const receipt = randomBytes(16).toString("hex");
    insertPilotInterest(getDb(), parsed.value, receipt);
    if (html) return redirectTo(request, { receipt });
    return json({ ok: true, stored: true, message: SUCCESS_MESSAGE }, 201);
  } catch (error) {
    const detail = error instanceof Error ? error.message : "unknown";
    console.error(`pilot storage failed: ${detail}`);
    if (html) return redirectTo(request, { interest: "unavailable" });
    return json(
      { ok: false, stored: false, error: "storage", message: STORAGE_UNAVAILABLE_MESSAGE },
      503,
    );
  }
}
