# Academy4Tech — complete handoff prompt for another coder or coding agent

Copy everything below the divider and give it to the next developer or AI coding agent together with the complete repository.

---

## Your role

You are taking over an existing Academy4Tech website rebuild. This is a working project, not an empty starter repository. Begin by inspecting the current files, documentation, Git status and production build. Preserve all correct work and improve it carefully; do not restart the project, replace the architecture without a compelling reason, or discard existing content.

The original public website is:

`https://www.academy4tech.com/`

Use it as a factual reference and verify any changeable external links against the current live site. Do not copy its old Google Sites layout. The new repository already contains a reorganized, modern implementation.

## Project purpose

Academy4Tech is a practical engineering-learning platform centered on:

- Robotics and autonomous systems
- Internet of Things
- Python and C/C++
- Arduino, Raspberry Pi and microcontrollers
- Artificial intelligence and machine learning
- Computer vision and OpenCV
- ROS
- Electronics, sensors and embedded systems
- PCB design
- Drones and unmanned ground vehicles
- Engineering projects and tutorials

The core message is:

**Learn. Build. Innovate.**

The experience should interest students and independent learners by showing a clear connection between code, electronics and real machines. It must feel like a credible modern engineering publication and learning platform—not a generic blog, children's website, corporate template, gaming interface or crypto landing page.

## Current implementation

The project currently uses:

- Astro 5
- TypeScript
- Semantic HTML5 and modern CSS
- Astro content collections with Markdown for projects, tutorials and blog posts
- Small page-specific browser scripts only where useful
- Static-first output for Cloudflare Pages
- Cloudflare Pages Functions for the course-interest endpoint
- Cloudflare D1 for course-interest storage
- GitHub for source control and the intended deployment workflow

Do not introduce React, Vue, a CMS, a large component library, an animation framework, a paid backend or a client-side application shell unless the owner explicitly requests it and there is a clear technical need.

Important locations:

```text
src/components/                  shared Astro components
src/content/projects/            project records
src/content/tutorials/           technical tutorials
src/content/blog/                engineering articles
src/data/site.ts                 identity, social links, topics and learning paths
src/layouts/BaseLayout.astro     global document, SEO and structured data
src/pages/                       site routes
src/styles/global.css            design system and responsive styling
public/images/ai/                optimized AI-created editorial artwork
public/_headers                  Cloudflare security and cache headers
public/_redirects                legacy URL redirects
functions/api/course-interest.js Cloudflare form endpoint
migrations/                      D1 database migrations
docs/                            audit, architecture and operational notes
```

Read these documents before making material changes:

- `README.md`
- `docs/ARCHITECTURE.md`
- `docs/CONTENT-AUDIT.md`
- `docs/MIGRATION.md`
- `docs/COURSE-INTEREST-FORM.md`

## Existing information architecture

The current site includes:

```text
/
├── learn/
│   └── [topic]
├── projects/
│   └── [project]
├── tutorials/
│   └── [tutorial]
├── blog/
│   ├── [article]
│   ├── category/[category]
│   └── tag/[tag]
├── courses/
│   └── interest
├── community
├── resources/
│   └── inspirations
├── about
├── contact
├── search
├── rss.xml
└── 404
```

The primary navigation includes Home, Learn, Projects, Tutorials, Blog, Community, Resources and About. Search and the “Find my course” action remain prominent.

The site already provides:

- A strong visual homepage
- Sixteen subject areas and four structured learning paths
- Real migrated projects, tutorials and blog articles
- Listing filters and static site-wide search
- Project/tutorial/article cards and detail layouts
- Breadcrumbs, related content, social sharing and code-copy controls
- A community page with verified public channels
- A course-interest form
- Responsive navigation and footer
- Canonical metadata, Open Graph metadata, structured data, sitemap, robots.txt and RSS
- Legacy redirects and Cloudflare security headers

## Content accuracy rules

These rules are non-negotiable:

1. Do not invent courses, schedules, prices, certifications, enrollments, instructors, partners, awards, reviews, testimonials, student counts, success rates, project results, publication dates or credentials.
2. Do not create fake GitHub repositories, social profiles, Discord invitations, email addresses or contact details.
3. Treat the course form as an **expression of interest**, not confirmed enrollment or a promise that a course exists.
4. Keep missing technical facts clearly marked rather than filling them with guesses.
5. Real repositories and original project records remain the technical source of truth.
6. Verify current external links before changing them.
7. Do not restore the removed Windows/Office activation material, archived binary downloads, empty pages, speculative partnership claims or copied third-party company descriptions.
8. Do not present AI-created imagery as photographic evidence of a real Academy4Tech class, facility, learner, event or completed project.

The verified public community destinations currently represented in the code are GitHub, YouTube, LinkedIn, Instagram and Facebook. The source website did not publish a valid Discord invite during the latest audit. Keep Discord visibly labelled as unavailable or “coming soon” until the owner provides a verified invitation URL. Never invent one.

## Design direction

Maintain and refine the established visual system:

- Near-black navy background: `#050b13`
- Navy surfaces: `#0a1522`, `#0d1c2c`, `#11263a`
- Electric cyan: `#56dcff`
- Blue: `#4586ff`
- Restrained purple: `#8588ff`
- Main text: `#f3f8fc`
- Muted text: `#9db0c2`
- Green status accent: `#62e6b0`

Use generous spacing, strong typography, precise technical borders, clean grids and subtle gradients. Motion should be limited to useful hover/focus feedback and must respect `prefers-reduced-motion`.

Avoid:

- Generic stock photos of people looking at laptops
- Cartoonish school graphics
- Excessive holograms or science-fiction interfaces
- Gaming/cyberpunk styling
- Large sliders and carousels
- Autoplay/background video
- Decorative clutter that competes with learning content
- Fake terminal output, unreadable decorative code or impossible wiring

## AI-generated graphics requirement

Graphics are important to this project. You are explicitly authorized and encouraged to generate original AI artwork when it materially improves the learner experience.

Before generating anything:

1. Inspect the existing assets in `public/images/ai/` and view them at desktop and mobile sizes.
2. Reuse a suitable existing image rather than generating a near-duplicate.
3. Identify the exact page, message, aspect ratio and responsive crop required.
4. Distinguish illustrative/editorial media from documentary project evidence.

Generate a new graphic when a page would otherwise feel visually weak or when a diagram/illustration would make a concept easier for students to understand. Strong candidates include:

- Topic and learning-path hero artwork
- Robotics, IoT, embedded systems and computer-vision scenes
- Project-library banners
- Community collaboration scenes
- Course-interest and learner-journey artwork
- Conceptual diagrams showing relationships among sensors, code, networks and machines
- Safe, accurate educational diagrams for tutorials when the technical information is verified

### Visual-generation standards

Every AI-image prompt should specify:

- The exact use case and asset type
- The engineering subject and learning message
- Scene, subjects and physically plausible components
- Composition and required aspect ratio
- Responsive safe area and expected crop
- Lighting, mood and the Academy4Tech palette
- Required realism or illustration style
- A prohibition on text, logos, trademarks and watermarks unless explicitly needed
- Elements to avoid, especially impossible electronics, unsafe workshop behavior and generic stock poses

Preferred direction:

- Premium editorial photography or polished cinematic 3D illustration
- University-age or adult learners actively building and testing
- Diverse, natural collaboration
- Plausible wiring, tools, sensors, boards and mechanisms
- Deep navy environments with restrained cyan/blue practical lighting
- Clear focal point and calm negative space

Do not use an AI image to fabricate a real product result, competition entry, classroom, instructor, student testimonial or Academy4Tech facility. If the image is illustrative, keep the surrounding copy honest and document that status internally.

### Asset-production requirements

For every new raster image:

1. Save the original generation outside or inside the project as appropriate, but deliver optimized copies in `public/images/`.
2. Produce AVIF and WebP versions.
3. Resize to the maximum resolution actually required; do not ship multi-megabyte originals.
4. Use a responsive `<picture>` implementation or the existing `ResponsiveImage.astro` component.
5. Provide intrinsic `width` and `height` to prevent layout shift.
6. Write concise, descriptive alt text based on the image's function.
7. Use eager loading and high fetch priority only for the primary above-the-fold image.
8. Lazy-load below-the-fold artwork.
9. Test the crop at 320, 375, 430, 768, 1024 and 1440 pixels.
10. Record the final generation prompt and asset purpose in the work summary or media documentation.

If image-generation capability is unavailable, do not insert a random remote stock image. Create a precise asset brief and a well-sized local placeholder that can be replaced without changing the layout.

Existing AI-art asset families include:

- `hero-engineering-lab`
- `community-workshop`
- `course-learning-path`
- `project-showcase`

These are editorial illustrations and not evidence of a specific real event.

For icons and simple diagrams, prefer the existing code-native SVG system over generating raster artwork.

## Homepage expectations

Keep the homepage focused on discovery and momentum. It should help a learner answer three questions quickly:

1. What can I learn here?
2. What can I build?
3. Where should I start?

The current structure includes:

- Sticky header and responsive mobile navigation
- “Learn. Build. Innovate.” hero with original engineering artwork
- Subject cards
- Structured learning paths
- Course-interest callout
- Featured verified projects
- Community invitation
- Latest tutorials
- YouTube learning section
- Engineering blog section
- Platform/about content
- Final calls to action

Improve this structure only when the change creates clearer learner progression, stronger accessibility or better performance. Do not add vanity statistics or fictional testimonials to make the page appear busier.

## Course-interest form

The page at `/courses/interest` gathers:

- Submitter name and email
- Submitter role
- Broad learner age group
- Optional country or region
- Experience level
- One or more learning interests
- Preferred learning format
- Optional project idea
- Guardian/age confirmation
- Data-use consent

The client progressively enhances a normal form POST. The Cloudflare Pages Function validates fields again, rejects cross-site submissions, limits payload size, uses a timing check and honeypot, enforces parent/guardian submission for learners under 16, and writes valid submissions to D1.

The required D1 binding is:

`STUDENT_INTEREST_DB`

The schema is in `migrations/0001_course_interest.sql`. The endpoint intentionally returns `503` when the binding is unavailable so submissions are never silently lost.

Do not weaken server-side validation. Do not expose secrets or store exact birth dates, identification documents, payment information or IP addresses. If adding Turnstile, analytics, email automation or another processor, update the Content Security Policy, deployment documentation and inline data-use notice before enabling it.

## Community page

The community page should encourage useful technical exchange while remaining truthful about available channels. Maintain:

- Verified external links only
- Clear external-link behavior
- The unpublished Discord state
- Respectful, beginner-friendly participation guidelines
- Advice to share technical context when asking questions
- Safety, attribution and privacy reminders
- A route back to learning topics, projects and the course-interest form

## Content workflow

Projects, tutorials and articles should remain data-driven. Add or edit Markdown within the relevant collection rather than duplicating page HTML.

Frontmatter controls fields such as:

```text
title
description
category
difficulty
technologies
tags
publishedDate
updatedDate
featured
draft
github
youtube
```

Validate all factual fields. Use `draft: true` for incomplete entries. Future publication dates must remain excluded until their build date. Add related content based on real category, technology or tag overlap.

## Performance requirements

Preserve the static-first architecture and excellent loading behavior:

- Minimal JavaScript
- No client framework hydration without a specific need
- Optimized AVIF/WebP images
- Responsive image sizing
- Lazy loading below the fold
- No unapproved third-party scripts
- No autoplay media
- Click-to-load external video if inline video is added
- Long-lived caching for fingerprint-safe/static media
- No unnecessary font requests
- No horizontal overflow

Run Lighthouse on a deployed preview when available. Treat regressions in Largest Contentful Paint, Cumulative Layout Shift and interaction performance as defects.

## Accessibility requirements

Aim for WCAG 2.2 AA best practices:

- Semantic landmarks and correct heading hierarchy
- Keyboard-accessible navigation and controls
- Visible focus states
- Sufficient color contrast
- Meaningful labels, legends, validation messages and status announcements
- Useful alt text; empty alt only for truly decorative images
- Touch-friendly targets
- Reduced-motion support
- Responsive tables and horizontally scrollable code blocks
- No information communicated by color alone

Do not hide real form fields or navigation from assistive technology. Honeypot fields are the exception and must remain non-interactive and hidden.

## SEO and migration requirements

Preserve:

- Unique titles and descriptions
- Canonical URLs
- Open Graph and social-sharing metadata
- Appropriate Organization, WebSite, BreadcrumbList and Article structured data
- XML sitemap
- robots.txt
- RSS
- Clean human-readable URLs
- Existing legacy redirect mappings

Do not use `Course`, `HowTo`, rating or review structured data unless the visible page genuinely qualifies. Do not break old indexed URLs. Update `docs/MIGRATION.md` and `public/_redirects` together when changing routes.

The preferred canonical origin is:

`https://academy4tech.com`

Redirect `www` to the non-`www` canonical while preserving paths and queries.

## Security and privacy

Preserve or strengthen:

- HTTPS-only deployment
- Content Security Policy
- `X-Content-Type-Options`
- Referrer Policy
- Permissions Policy
- Frame restrictions
- Safe external-link attributes
- Same-origin form submission checks
- Payload limits and server-side validation
- No secrets in source or client JavaScript
- Data minimization and documented retention

The public inline data-use wording must match the implementation. Course-interest records should be reviewed and deleted when no longer needed and within the stated retention period unless a continuing conversation or legal need applies.

## Deployment target

The intended flow is:

```text
edit locally → check and build → review → commit → push to GitHub
→ Cloudflare Pages builds → academy4tech.com updates
```

Cloudflare Pages settings:

```text
Framework preset: Astro
Build command: pnpm build
Build output: dist
Production branch: main, unless the repository uses another confirmed branch
```

Do not deploy, change DNS, modify production data or push to a remote unless the owner explicitly authorizes that action.

## Required working method

1. Inspect the repository and current Git status before editing.
2. Preserve unrelated owner changes.
3. Run the existing site before making a visual judgment.
4. Read the audit and migration documents before altering content or routes.
5. Make the smallest coherent set of changes needed for the requested outcome.
6. Use reusable components and data-driven content.
7. Generate new AI graphics only with a defined purpose and compliant asset pipeline.
8. Verify all new factual claims and external links.
9. Run checks, production build and proportionate browser testing.
10. Report exactly what changed, what was verified and what still requires owner or deployment configuration.

## Acceptance checklist

Before calling the work complete, confirm:

- `pnpm check` or the equivalent Astro check has no errors
- `pnpm build` succeeds
- New and modified routes appear in the production output
- No internal links are broken
- Browser console is clean on representative pages
- Images load in AVIF/WebP with appropriate fallbacks, dimensions and alt text
- The homepage works at desktop and mobile widths
- Navigation, forms, search and filters work by keyboard
- The interest form rejects incomplete and invalid data
- Under-16 guardian logic is enforced on the server
- The endpoint fails clearly if D1 is not configured
- No sensitive values or fabricated information were added
- Sitemap, metadata, redirects and data-use copy match the final implementation
- Documentation explains any new configuration

## Final delivery format

When finished, provide:

1. A concise summary of the learner-facing outcome
2. A list of important files changed
3. Tests and browser checks performed, with results
4. Every AI-generated asset added, its saved path, intended use and generation prompt
5. Any remaining owner decisions, such as a verified Discord invite, real project photography, course schedules or Cloudflare configuration
6. Exact deployment steps if deployment was requested—but do not claim deployment occurred unless it actually succeeded

The final result should be interesting to students, visually distinctive, technically credible, fast, accessible, maintainable and honest about what Academy4Tech currently offers.
