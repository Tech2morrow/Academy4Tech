# Academy4Tech

A static-first engineering education website for robotics, IoT, Python, AI, electronics and embedded systems. This repository rebuilds the former Google Sites website with Astro and preserves useful public content in a maintainable structure.

## Stack

- Astro 5
- TypeScript
- Markdown content collections
- Modern CSS and small, page-specific browser scripts
- Cloudflare Pages-compatible static output

## Local development

Requirements: a current Node.js LTS release and pnpm.

```bash
pnpm install
pnpm dev
```

Open the local URL printed by Astro. Create a production build with:

```bash
pnpm build
pnpm preview
```

## Content workflow

Add Markdown files to:

```text
src/content/blog/
src/content/projects/
src/content/tutorials/
```

Copy a nearby file's frontmatter, update all factual fields, write the content, then run `pnpm build`. Set `draft: true` to exclude an entry from production. A future `publishedDate` also keeps an entry out of the generated site until that date is reached at build time.

Learning-topic taxonomy is maintained in `src/data/site.ts`.

The Android showcase is maintained in `src/data/apps.ts`. Add or update one app record there, place its icon and feature artwork in `public/images/apps/`, and run `pnpm build`. The homepage and `/apps` page both read from this single list.

## Project structure

```text
public/                  static assets, redirects and Cloudflare headers
src/components/         reusable UI components
src/content/            Markdown projects, tutorials and blog posts
src/data/               site identity, topics and learning paths
src/layouts/            shared document layout and SEO
src/pages/              generated routes and static pages
src/styles/             global design system
src/utils/              content helpers
docs/                   audit, architecture and migration records
```

## Deploy to Cloudflare Pages

1. Push this repository to GitHub.
2. In Cloudflare, open **Workers & Pages → Create → Pages → Connect to Git**.
3. Choose the repository and the production branch (normally `main`).
4. Use framework preset **Astro** or enter:
   - Build command: `pnpm build`
   - Build output directory: `dist`
   - Root directory: leave empty
5. If Cloudflare does not detect pnpm automatically, set `PNPM_VERSION` to `11.16.0`.
6. Deploy, confirm the generated `*.pages.dev` preview, then add `academy4tech.com` under **Custom domains**.
7. Add `www.academy4tech.com` as well and create a Cloudflare Redirect Rule that permanently redirects `www` to `https://academy4tech.com`, preserving path and query.
8. Keep SSL/TLS mode at **Full (strict)**, enable **Always Use HTTPS**, Brotli and HTTP/3.

The website itself is static, while `functions/api/course-interest.js` handles course-interest submissions on Cloudflare Pages. Before making the form public, create a D1 database, apply `migrations/0001_course_interest.sql`, and bind it to the Pages project as `STUDENT_INTEREST_DB`. See [course-interest form deployment](docs/COURSE-INTEREST-FORM.md) for the exact setup and test checklist.

`public/_headers` supplies browser security headers. `public/_redirects` preserves legacy paths. Review the Content Security Policy before adding analytics, forms, video embeds or another external service.

## Deployment flow

```text
edit locally → build and review → commit → push to GitHub
→ Cloudflare Pages builds → academy4tech.com updates
```

## Pre-launch checklist

- Run `pnpm build` with no errors.
- Test navigation at 320, 375, 430, 768, 1024 and 1440 px.
- Check keyboard navigation, focus visibility and reduced motion.
- Verify project repositories, social links and YouTube links.
- Confirm `/sitemap-index.xml`, `/robots.txt`, `/rss.xml` and the custom 404.
- Test every old URL in `docs/MIGRATION.md` on a Cloudflare preview deployment.
- Add only licensed images with explicit dimensions and useful alt text.
- Re-run Lighthouse after the production domain is active.

## Audit records

- [Content audit](docs/CONTENT-AUDIT.md)
- [Information architecture and design system](docs/ARCHITECTURE.md)
- [URL migration map](docs/MIGRATION.md)
- [Course-interest form deployment](docs/COURSE-INTEREST-FORM.md)
- [Complete handoff prompt for another coder or coding agent](docs/CODER-HANDOFF-PROMPT.md)
