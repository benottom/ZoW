import type { APIRoute } from 'astro';
import { isValidEmail, str, looksLikeSpam, logSubmission, jsonResponse } from '../../lib/forms';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return jsonResponse({ ok: false, error: 'Invalid form submission.' }, 400);
  }

  if (looksLikeSpam(form)) {
    return jsonResponse({ ok: true });
  }

  if (!isValidEmail(form.get('email'))) {
    return jsonResponse({ ok: false, errors: { email: 'Enter a valid email address.' } }, 422);
  }
  if (str(form.get('consent')) !== 'on') {
    return jsonResponse({ ok: false, errors: { consent: 'Please confirm you want to receive the newsletter.' } }, 422);
  }

  await logSubmission('newsletter', { email: str(form.get('email')) });

  return jsonResponse({ ok: true });
};
