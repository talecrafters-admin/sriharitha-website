/**
 * Cloudflare Pages Function: forwards lead payload to Google Apps Script web app.
 * Set env var GOOGLE_SHEET_WEB_APP_URL in Cloudflare Pages → Settings → Environment variables.
 */
export async function onRequestPost(context) {
  const { request, env } = context;
  const sheetUrl = env.GOOGLE_SHEET_WEB_APP_URL;

  if (!sheetUrl) {
    return new Response(
      JSON.stringify({ error: "GOOGLE_SHEET_WEB_APP_URL not configured" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  try {
    const body = await request.json();
    const res = await fetch(sheetUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const text = await res.text();
    return new Response(text, {
      status: res.status,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err instanceof Error ? err.message : String(err) }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
