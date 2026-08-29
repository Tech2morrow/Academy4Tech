# Information architecture and design system

## New sitemap

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
├── privacy/
│   └── iot-stations
├── rss.xml
└── 404
```

Primary navigation is Home, Learn, Projects, Tutorials, Blog, Community, Resources and About. Search and Find My Course remain persistent actions.

## Content model

Projects, tutorials and blog posts are Astro content collections in `src/content/`. Frontmatter controls title, summary, classification, publication state, media, SEO and relationships. Listing and detail pages are generated from those files.

Learning topics live in `src/data/site.ts` because they are compact taxonomy records rather than long-form articles. Related content is selected from category, tag and technology overlap.

The global search index is generated at build time from content metadata and Markdown body text. Search and listing filters run locally in the browser; there is no search service or database.

## Design system

- **Background:** near-black navy `#050b13`
- **Surfaces:** `#0a1522`, `#0d1c2c`, `#11263a`
- **Primary accent:** electric cyan `#56dcff`
- **Secondary accents:** blue `#4586ff`, soft purple `#8588ff`
- **Text:** `#f3f8fc`; muted text `#9db0c2`
- **Success/signal:** `#62e6b0`

Typography uses the native UI sans-serif stack for zero font requests and a native monospace stack for code and technical labels. Spacing is fluid with CSS `clamp()`. The maximum content shell is 1180 px. Main breakpoints are 1040, 760 and 430 px, with the 320 px minimum supported through a fluid shell.

Cards use low-contrast navy surfaces, one-pixel technical borders, 14–22 px radii and small hover lifts. Gradients appear only as depth and signal, not decoration. Code-native SVG/CSS visuals support the interface, while four original AI-generated editorial scenes provide the homepage, community, course-interest and project-library artwork. They are optimized as AVIF/WebP and must not be presented as documentary images of real Academy4Tech events.

## Component architecture

- `BaseLayout` — metadata, canonical, Open Graph, organization/site schema, header/footer
- `Header` — sticky desktop and accessible mobile navigation
- `Footer` — topic, content and confirmed social links
- `Icon` — local SVG icon system
- `TechVisual` — lightweight engineering hero illustration
- `ResponsiveImage` — AVIF/WebP picture markup, intrinsic dimensions and loading behavior
- `ContentCard` — shared project/tutorial/blog card
- `Breadcrumbs` — visible navigation and schema
- `SocialShare` — LinkedIn, X, Facebook and copy-link controls
- `ArticleEnhancements` — code copy buttons
- `Newsletter` — intentionally non-transmitting integration placeholder

## Performance and accessibility choices

- Static HTML output and minimal page-specific JavaScript.
- No web-font, animation-framework, slider, analytics or video-embed request.
- Responsive AVIF/WebP editorial artwork with intrinsic dimensions and lazy loading below the fold.
- Reduced-motion support, visible focus states, skip link, semantic landmarks and touch-sized controls.
- Code blocks scroll horizontally on small screens and receive copy controls.
- Responsive tables and mobile-first navigation.
- Security headers are prepared for Cloudflare Pages in `public/_headers`.
