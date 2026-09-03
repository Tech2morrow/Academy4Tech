# Course-interest form deployment

The learner form posts to the Cloudflare Pages Function at `functions/api/course-interest.js`. The function validates every field, rejects cross-site requests, uses a clock-skew-tolerant timing signal and honeypot for basic spam resistance, and stores valid records in D1. Each browser submission has a UUID confirmation reference. Retrying the same submission uses `INSERT OR IGNORE` plus a read-back check, so an uncertain network response does not create a duplicate or claim success without a confirmed record. The function does not store IP addresses.

## Create and bind the database

Use Wrangler from an authenticated Cloudflare environment or create the database in the dashboard.

```bash
pnpm dlx wrangler d1 create academy4tech-student-interest
pnpm dlx wrangler d1 execute academy4tech-student-interest --remote --file=migrations/0001_course_interest.sql
```

The production binding is versioned in `wrangler.toml`. If configuring a replacement project through the Cloudflare dashboard, open **Workers & Pages → Academy4Tech project → Settings → Bindings** and add a **D1 database binding**:

```text
Variable name: STUDENT_INTEREST_DB
Database: academy4tech-student-interest
```

Redeploy after adding the binding. The endpoint intentionally returns `503` until the binding exists, so a deployment cannot silently discard a learner's submission.

## Production verification

1. Submit one test record from `/courses/interest` and confirm the success message includes a UUID reference.
2. In D1, run `SELECT id, created_at, email, interests FROM course_interest ORDER BY created_at DESC LIMIT 5;`.
3. Confirm the record, then delete the test row.
4. Verify a learner marked **Under 16** cannot submit unless the role is **Parent or guardian**.
5. Run `pnpm test:functions` before deployment to verify confirmed writes, retry idempotency, binding failures and validation.
6. Add a Cloudflare rate-limiting rule for `POST /api/course-interest`. Consider Turnstile if spam becomes material; update the Content Security Policy and inline data-use notice before adding it.

## Operations and data care

- Restrict D1 access to the people who need to review learner demand.
- Do not export submissions into personal spreadsheets or messaging apps without an operational need and appropriate protection.
- Review and delete resolved or stale records within 12 months.
- A course-interest submission is not enrollment and must not be described as a confirmed place.
