import { NextResponse } from "next/server";

// Lead intake endpoint for the contact form.
// -------------------------------------------------------------
// Right now this validates the submission and (optionally) forwards
// it to a webhook. To connect your CRM / leads system / email
// automation later, set LEAD_WEBHOOK_URL in the environment (e.g. a
// Zapier/Make/HubSpot/n8n inbound webhook), or replace the forward
// block with a direct API call. The shape below is what gets sent.
// -------------------------------------------------------------

export interface LeadPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  message: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(v: unknown, max = 2000): string {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const lead: LeadPayload = {
    firstName: clean(body.firstName, 100),
    lastName: clean(body.lastName, 100),
    email: clean(body.email, 200),
    phone: clean(body.phone, 40) || undefined,
    message: clean(body.message, 4000),
  };

  const errors: Record<string, string> = {};
  if (!lead.firstName) errors.firstName = "First name is required.";
  if (!lead.lastName) errors.lastName = "Last name is required.";
  if (!lead.email) errors.email = "Email is required.";
  else if (!EMAIL_RE.test(lead.email)) errors.email = "Enter a valid email.";
  if (!lead.message) errors.message = "Please tell us how we can help.";

  if (Object.keys(errors).length) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  const record = {
    ...lead,
    source: "contact-form",
    submittedAt: new Date().toISOString(),
  };

  // Optional forward to your CRM / automation webhook.
  const webhook = process.env.LEAD_WEBHOOK_URL;
  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(record),
      });
      if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
    } catch (err) {
      console.error("Lead webhook forward failed:", err);
      return NextResponse.json(
        { ok: false, error: "We couldn't send your message. Please email us directly." },
        { status: 502 }
      );
    }
  } else {
    // No webhook configured yet — log so the lead isn't silently lost in dev.
    console.log("New lead (no LEAD_WEBHOOK_URL configured):", record);
  }

  return NextResponse.json({ ok: true });
}
