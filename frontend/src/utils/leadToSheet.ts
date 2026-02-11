/**
 * Submit a lead (contact form or Avasya order) to the configured endpoint.
 * The endpoint forwards to a Google Apps Script web app that appends to a Google Sheet.
 * Set REACT_APP_LEAD_SUBMIT_URL to your Cloudflare/Netlify function URL, e.g. /api/submitLead
 */
const LEAD_SUBMIT_URL =
  process.env.REACT_APP_LEAD_SUBMIT_URL || "/api/submitLead";

export interface ContactLeadPayload {
  type: "contact";
  name: string;
  email: string;
  phone: string;
  company?: string;
  country?: string;
  interests?: string;
  products?: string;
  quantity?: string;
  message?: string;
}

export interface AvasyaOrderPayload {
  type: "avasya_order";
  name: string;
  email: string;
  phone: string;
  address?: string;
  city?: string;
  state?: string;
  pincode?: string;
  notes?: string;
  cart_summary: string;
  total_items: number;
  total_price: number;
}

export type LeadPayload = ContactLeadPayload | AvasyaOrderPayload;

export async function submitLeadToSheet(payload: LeadPayload): Promise<{ ok: boolean; error?: string }> {
  try {
    const res = await fetch(LEAD_SUBMIT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      const text = await res.text();
      return { ok: false, error: text || `HTTP ${res.status}` };
    }
    return { ok: true };
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return { ok: false, error: message };
  }
}
