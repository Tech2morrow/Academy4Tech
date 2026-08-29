# Course-interest form deployment

The learner form posts to the Cloudflare Pages Function at `functions/api/course-interest.js`. The function validates every field, rejects cross-site requests, uses a timing field and honeypot for basic spam resistance, and stores valid records in D1. It does not store IP addresses.

## Create and bind the database

Use Wrangler from an authenticated Cloudflare environment or create the database in the dashboard.

```bash
pnpm dlx wrangler d1 create academy4tech-student-interest
pnpm dlx wrangler d1 execute academy4tech-student-interest --remote --file=migrations/0001_course_interest.sql
```

In **Workers & Pages → Academy4Tech project → Settings → Bindings**, add a **D1 database binding**:

```text
Variable name: STUDENT_INTEREST_DB
Database: academy4tech-student-interest
```

Redeploy after adding the binding. The endpoint intentionally returns `503` until the binding exists, so a deployment cannot silently discard a learner's submission.

## Production verification

1. Submit one test record from `/courses/interest` and confirm the success message.
2. In D1, run `SELECT id, created_at, email, interests FROM course_interest ORDER BY created_at DESC LIMIT 5;`.
3. Confirm the record, then delete the test row.
4. Verify a learner marked **Under 16** cannot submit unless the role is **Parent or guardian**.
5. Add a Cloudflare rate-limiting rule for `POST /api/course-interest`. Consider Turnstile if spam becomes material; update the Content Security Policy and privacy notice before adding it.

## Operations and privacy

- Restrict D1 access to the people who need to review learner demand.
- Do not export submissions into personal spreadsheets or messaging apps without an operational need and appropriate protection.
- Review and delete resolved or stale records within 12 months, matching the public privacy policy.
- A course-interest submission is not enrollment and must not be described as a confirmed place.
