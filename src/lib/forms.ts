import { mkdir, appendFile } from 'node:fs/promises';
import path from 'node:path';

const DATA_DIR = path.resolve('.data');
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(value: FormDataEntryValue | null): boolean {
  return typeof value === 'string' && EMAIL_RE.test(value.trim());
}

export function str(value: FormDataEntryValue | null): string {
  return typeof value === 'string' ? value.trim() : '';
}

/** Basic bot resistance: a hidden honeypot field plus a minimum fill time. */
export function looksLikeSpam(form: FormData): boolean {
  const honeypot = str(form.get('website'));
  if (honeypot.length > 0) return true;

  const renderedAt = Number(str(form.get('renderedAt')));
  if (!renderedAt || Number.isNaN(renderedAt)) return true;
  const elapsed = Date.now() - renderedAt;
  return elapsed < 1500; // submitted implausibly fast
}

export async function logSubmission(kind: string, payload: Record<string, unknown>) {
  const record = { kind, receivedAt: new Date().toISOString(), ...payload };

  // Always emit a structured log line. On Vercel this lands in the function's
  // logs (Dashboard > Logs, or `vercel logs`), so a submission is never lost
  // even if nothing else is wired up yet.
  console.log('[lead]', JSON.stringify(record));

  // Local-disk copy for convenience during `astro dev`. Serverless platforms
  // (Vercel included) ship a read-only filesystem outside /tmp, so this is
  // best-effort only — failures here must never fail the request.
  try {
    await mkdir(DATA_DIR, { recursive: true });
    await appendFile(path.join(DATA_DIR, `${kind}.ndjson`), JSON.stringify(record) + '\n', 'utf-8');
  } catch {
    // Expected in production; the console.log above is the source of truth there.
  }
}

export function jsonResponse(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}
