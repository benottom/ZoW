import type { APIRoute } from 'astro';
import { isValidEmail, str, looksLikeSpam, logSubmission, jsonResponse } from '../../lib/forms';

export const prerender = false;

const REQUIRED_BY_TYPE: Record<string, string[]> = {
  demo: ['name', 'email', 'organization', 'useCase'],
  academic: ['name', 'email', 'institution', 'program'],
  'early-access': ['name', 'email'],
  contact: ['name', 'email', 'organization', 'useCase'],
};

export const POST: APIRoute = async ({ request }) => {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return jsonResponse({ ok: false, error: 'Invalid form submission.' }, 400);
  }

  const formType = str(form.get('formType'));
  const required = REQUIRED_BY_TYPE[formType];
  if (!required) {
    return jsonResponse({ ok: false, error: 'Unknown form type.' }, 400);
  }

  if (looksLikeSpam(form)) {
    // Respond as if successful so bots get no useful signal, but do not log.
    return jsonResponse({ ok: true });
  }

  const errors: Record<string, string> = {};
  for (const field of required) {
    if (!str(form.get(field))) errors[field] = 'This field is required.';
  }
  if (!isValidEmail(form.get('email'))) {
    errors.email = 'Enter a valid email address.';
  }
  if (formType === 'contact' && str(form.get('consent')) !== 'on') {
    errors.consent = 'Please accept to be contacted about your request.';
  }

  if (Object.keys(errors).length > 0) {
    return jsonResponse({ ok: false, errors }, 422);
  }

  const payload: Record<string, unknown> = {};
  for (const [key, value] of form.entries()) {
    if (key === 'website' || key === 'renderedAt') continue;
    payload[key] = value;
  }

  await logSubmission(`lead-${formType}`, payload);

  return jsonResponse({ ok: true });
};
