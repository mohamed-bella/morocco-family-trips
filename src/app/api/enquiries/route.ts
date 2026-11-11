import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const isIsoDate = (value: string) => {
  if (value === "") return true;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const [year, month, day] = value.split("-").map(Number);
  const parsed = new Date(Date.UTC(year, month - 1, day));
  return parsed.getUTCFullYear() === year && parsed.getUTCMonth() === month - 1 && parsed.getUTCDate() === day;
};
const enquirySchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.email().max(254),
  startDate: z.string().max(10).refine(isIsoDate),
  endDate: z.string().max(10).refine(isIsoDate),
  adults: z.coerce.number().int().min(1).max(20),
  duration: z.coerce.number().int().min(1).max(30),
  childrenAges: z.string().trim().max(60),
  destinations: z.string().trim().max(300),
  budget: z.string().trim().max(200),
  preferences: z.string().trim().max(3000),
  website: z.string().max(200),
  consent: z.literal("true"),
});

type RateEntry = { count: number; resetAt: number };
const rateStore = globalThis as typeof globalThis & { __familyTripRateStore?: Map<string, RateEntry> };
const requests = rateStore.__familyTripRateStore ?? new Map<string, RateEntry>();
rateStore.__familyTripRateStore = requests;
const WINDOW_MS = 60 * 60 * 1000;
const MAX_PER_WINDOW = 3;

function getClientKey(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for")?.split(",").map((value) => value.trim()).filter(Boolean);
  return forwarded?.at(-1) ?? "unknown";
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  try {
    if (!origin || new URL(origin).origin !== new URL(request.url).origin) {
      return NextResponse.json({ message: "This request could not be accepted." }, { status: 403 });
    }
  } catch {
    return NextResponse.json({ message: "This request could not be accepted." }, { status: 403 });
  }

  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > 16_384) return NextResponse.json({ message: "Please shorten your request and try again." }, { status: 413 });

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Please check the form and try again." }, { status: 400 });
  }
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return NextResponse.json({ message: "Please check the form and try again." }, { status: 400 });
  }

  const parsed = enquirySchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ message: "Please check the required details and try again." }, { status: 400 });
  const enquiry = parsed.data;

  // Quietly acknowledge automated submissions without sending an email.
  if (enquiry.website.trim()) return NextResponse.json({ message: "Thanks. Your trip request has been received." }, { status: 202 });
  if (enquiry.startDate && enquiry.endDate && enquiry.endDate < enquiry.startDate) {
    return NextResponse.json({ message: "The end date must be after the start date." }, { status: 400 });
  }

  const now = Date.now();
  const clientKey = getClientKey(request);
  const existing = requests.get(clientKey);
  if (existing && existing.resetAt > now && existing.count >= MAX_PER_WINDOW) {
    return NextResponse.json({ message: "Please wait before sending another request." }, { status: 429, headers: { "Retry-After": String(Math.ceil((existing.resetAt - now) / 1000)) } });
  }
  requests.set(clientKey, existing && existing.resetAt > now ? { count: existing.count + 1, resetAt: existing.resetAt } : { count: 1, resetAt: now + WINDOW_MS });
  if (requests.size > 5000) {
    for (const [key, value] of requests) if (value.resetAt <= now) requests.delete(key);
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.TRIP_ENQUIRY_FROM;
  const to = process.env.TRIP_ENQUIRY_TO;
  if (!apiKey || !from || !to) {
    return NextResponse.json({ message: "The enquiry inbox is not configured yet. Please contact the local team on WhatsApp." }, { status: 503 });
  }

  const lines = [
    "New Morocco Family Trips enquiry",
    "",
    `Name: ${enquiry.name}`,
    `Email: ${enquiry.email}`,
    `Travel dates: ${enquiry.startDate || "Not provided"} to ${enquiry.endDate || "Not provided"}`,
    `Adults: ${enquiry.adults}`,
    `Trip length: ${enquiry.duration} days`,
    `Children’s ages: ${enquiry.childrenAges || "Not provided"}`,
    `Places: ${enquiry.destinations || "Not provided"}`,
    `Budget or comfort level: ${enquiry.budget || "Not provided"}`,
    "",
    "Family preferences:",
    enquiry.preferences || "Not provided",
  ];

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: enquiry.email,
      subject: `Family trip enquiry from ${enquiry.name}`,
      text: lines.join("\n"),
    });
    if (error) return NextResponse.json({ message: "We could not send your request. Please use WhatsApp instead." }, { status: 502 });
    return NextResponse.json({ message: "Thanks. Your trip request has been sent to the local planning team." }, { status: 200 });
  } catch {
    return NextResponse.json({ message: "We could not send your request. Please use WhatsApp instead." }, { status: 502 });
  }
}
