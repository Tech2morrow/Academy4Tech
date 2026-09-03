const allowedInterests = new Set(['robotics', 'iot', 'python', 'arduino', 'raspberry-pi', 'ai', 'computer-vision', 'opencv', 'ros', 'pcb-design', 'electronics', 'embedded-systems', 'drones', 'ground-robots', 'sensors', 'robodk']);
const allowedRoles = new Set(['learner', 'parent-guardian', 'educator', 'other']);
const allowedAges = new Set(['under-16', '16-18', '19-24', '25-plus', 'prefer-not']);
const allowedLevels = new Set(['new', 'beginner', 'intermediate', 'advanced']);
const allowedFormats = new Set(['online-live', 'self-paced', 'in-person-uae', 'hybrid', 'not-sure']);
const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

const respond = (body, status = 200, extraHeaders = {}) => new Response(JSON.stringify(body), {
  status,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
    'X-Content-Type-Options': 'nosniff',
    ...extraHeaders
  }
});
const clean = (value, limit) => typeof value === 'string' ? value.trim().slice(0, limit) : '';

async function readPayload(request) {
  const type = request.headers.get('content-type') || '';
  if (type.includes('application/json')) return request.json();
  const form = await request.formData();
  return { ...Object.fromEntries(form.entries()), interests: form.getAll('interests') };
}

export async function onRequestPost({ request, env }) {
  const contentLength = Number(request.headers.get('Content-Length') || 0);
  if (contentLength > 32768) return respond({ error: 'The submitted form is too large.' }, 413);

  const origin = request.headers.get('Origin');
  if (origin) {
    try {
      if (new URL(origin).host !== new URL(request.url).host) return respond({ error: 'Cross-site form submissions are not accepted.' }, 403);
    } catch {
      return respond({ error: 'Cross-site form submissions are not accepted.' }, 403);
    }
  }

  let input;
  try {
    input = await readPayload(request);
  } catch {
    return respond({ error: 'The submitted form could not be read.' }, 400);
  }

  if (clean(input.company, 200)) return respond({ ok: true }, 201);

  const startedAt = Number(input.startedAt);
  const elapsed = Date.now() - startedAt;
  if (Number.isFinite(startedAt) && elapsed >= 0 && elapsed < 800) {
    return respond({ error: 'Please refresh the page and complete the form again.' }, 400);
  }

  const requestedSubmissionId = clean(input.submissionId, 60);
  const submissionId = uuidPattern.test(requestedSubmissionId) ? requestedSubmissionId : crypto.randomUUID();
  const name = clean(input.name, 100);
  const email = clean(input.email, 160).toLowerCase();
  const role = clean(input.submitterRole, 30);
  const ageGroup = clean(input.ageGroup, 30);
  const country = clean(input.country, 80);
  const experienceLevel = clean(input.experienceLevel, 30);
  const preferredFormat = clean(input.preferredFormat, 30);
  const message = clean(input.message, 1000);
  const interests = Array.isArray(input.interests)
    ? [...new Set(input.interests.map((value) => clean(value, 40)).filter((value) => allowedInterests.has(value)))]
    : [];

  if (name.length < 2) return respond({ error: 'Please enter your name.' }, 400);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return respond({ error: 'Please enter a valid email address.' }, 400);
  if (!allowedRoles.has(role) || !allowedAges.has(ageGroup) || !allowedLevels.has(experienceLevel) || !allowedFormats.has(preferredFormat)) {
    return respond({ error: 'Please complete all required selections.' }, 400);
  }
  if (!interests.length) return respond({ error: 'Choose at least one learning interest.' }, 400);
  if (input.guardianConsent !== 'yes' || input.dataUseConsent !== 'yes') {
    return respond({ error: 'Both confirmation boxes are required.' }, 400);
  }
  if (ageGroup === 'under-16' && role !== 'parent-guardian') {
    return respond({ error: 'A parent or guardian must submit for a learner under 16.' }, 400);
  }
  if (!env.STUDENT_INTEREST_DB) {
    return respond({ error: 'The interest form is temporarily unavailable. Please email info@academy4tech.com.' }, 503);
  }

  const createdAt = new Date().toISOString();
  const database = env.STUDENT_INTEREST_DB;

  try {
    const result = await database.prepare(`INSERT OR IGNORE INTO course_interest (id, created_at, name, email, submitter_role, age_group, country, experience_level, interests, preferred_format, message, consent_version) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`).bind(
      submissionId,
      createdAt,
      name,
      email,
      role,
      ageGroup,
      country || null,
      experienceLevel,
      JSON.stringify(interests),
      preferredFormat,
      message || null,
      'inline-data-use-2026-09-03'
    ).run();

    if (result?.success !== true) throw new Error('D1 did not confirm the write.');

    if (Number(result.meta?.changes || 0) === 0) {
      const existing = await database.prepare('SELECT id, email, created_at FROM course_interest WHERE id = ? LIMIT 1').bind(submissionId).first();
      if (!existing) throw new Error('The saved record could not be verified.');
      if (existing.email !== email) return respond({ error: 'Please refresh the page before submitting again.' }, 409);
      return respond({ ok: true, submissionId, recordedAt: existing.created_at, replayed: true }, 200);
    }

    return respond({ ok: true, submissionId, recordedAt: createdAt }, 201);
  } catch (error) {
    console.error('Course interest insert failed', { submissionId, error });
    return respond({ error: 'The form could not be saved. Please try again later or email info@academy4tech.com.' }, 500);
  }
}

export function onRequestGet() {
  return respond({ error: 'Method not allowed.' }, 405, { Allow: 'POST' });
}
