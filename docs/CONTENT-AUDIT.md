# Academy4Tech content audit

Audit date: 11 August 2026  
Source reviewed: `https://www.academy4tech.com/`

## Method and scope

The public site was crawled from the homepage link graph, page by page. The crawl found 24 substantive public paths, the root URL, and one Cloudflare email-protection utility path. `robots.txt` was present; `sitemap.xml` returned the Google Sites 404 page.

The audit recorded each page title, visible headings and text, internal and external links, image count, image alt text, meta description and canonical tag. No page in the crawl exposed a meta description or canonical tag. The old Google Sites markup duplicates navigation links and carries Google Sites/report-abuse chrome.

## Page inventory and disposition

| Old path | Content found | Decision | New destination |
| --- | --- | --- | --- |
| `/` | Mission, subject list, author and LinkedIn link | Rewrite and reuse | `/` |
| `/home` | Duplicate homepage | Consolidate | `/` |
| `/projects-blogs` | Cards/summaries for five project or blog items | Split by content type | `/projects` |
| `/projects-blogs/ros-cheat-code` | Long ROS 1 command reference | Rewrite, correct structure, keep ROS 1 context | `/tutorials/ros-command-line-cheat-sheet` |
| `/projects-blogs/esp-32-schematic` | ESP32 overview and CH340 auto-reset schematic note | Reuse verified intent; omit unverified manufacturing package | `/projects/esp32-development-board` |
| `/projects-blogs/joystick-gui` | ROS, Python and KivyMD Logitech F710 GUI, source link and code | Rewrite and retain source repository | `/projects/ros-joystick-gui` |
| `/projects-blogs/cat-feeder` | Arduino timed feeder concept, components, function list and source link | Rewrite and retain documented version limits | `/projects/automatic-pet-feeder` |
| `/projects-blogs/ms-activation-found-online` | Third-party Windows/Office activation command | Remove; not appropriate educational content and risks license/security harm | `/resources` |
| `/inspirations` | Names and copied/outdated descriptions of technology organizations | Keep only the inspiration index; remove third-party prose and media | `/resources/inspirations` |
| `/vision-2030` | Dubai autonomous transportation strategy note and WAM source | Rewrite as sourced legacy context | `/blog/dubai-autonomous-transportation-strategy` |
| `/vision-2030/wildebeest-pro` | Open-source UGV purpose, hardware list and GitHub link | Reuse and structure as a project | `/projects/wildebeest-pro` |
| `/mbzirc-2023` | Competition summary and afforestation-payload summary | Consolidate with project page | `/projects/mbzirc-afforestation` |
| `/mbzirc-2023/mbzirc-project-afforestation` | Method, frame, seed container, pneumatic mechanism and open design items | Reuse verified design record; remove speculative partnership/patent claims | `/projects/mbzirc-afforestation` |
| `/gallery` | STEP 2020, GITEX 2019 and Young Professionals in Space labels | Preserve labels; do not reuse unattributed images | `/about#gallery` |
| `/online-free-courses` | Topic tiles for 14 subjects | Rebuild as learning-topic system | `/learn` |
| `/online-free-courses/python` | Python overview, tool links and archived downloads | Rewrite with official/current-safe links; keep YouTube playlist | `/learn/python` and `/tutorials/python-engineering-setup` |
| `/online-free-courses/robodk` | Short RoboDK description | Reuse as a learning topic | `/learn/robodk` |
| `/unmanned-ground-vehicle-uav` | Title says UGV but body duplicates UAV taxonomy | Correct taxonomy; do not preserve incorrect body | `/learn/ground-robots` |
| `/unmanned-aerial-vehicle-uav` | General UAV taxonomy | Rewrite as a concise learning-topic overview | `/learn/drones` |
| `/conductivity-temperature-and-depthctd` | Heading only | Remove empty page; retain topic intent | `/learn/sensors` |
| `/parcel-tracking-global` | Heading only | Remove empty utility page | `/resources` |
| `/website-builder` | Author profile, experience, teaching approach, phone and protected email | Rewrite factual profile; use the confirmed Academy4Tech email addresses and public profiles without publishing the personal phone number | `/about` and `/contact` |

## Confirmed external links reused

- Python 3.x YouTube playlist: `https://www.youtube.com/playlist?list=PLfDK_vJhZlEztnzWSK2oxScFUz_TVEWcN`
- Academy4Tech YouTube channel: `https://www.youtube.com/channel/UC4RUM4bbg45ck1Jfxznji5w`
- Tech2morrow GitHub account and repositories for WildeBeest Pro, Pet Feeder and Logitech F710
- Muhammed Nabeel LinkedIn profile
- Academy4Tech LinkedIn, Instagram and Facebook pages
- Official Python, VS Code, Jupyter, PyCharm, Spyder and Thonny sites where relevant

The legacy `remote.it` dashboard link, Mega download links and Atom editor link were not promoted. They are either contextless, archived, or less trustworthy than official current sources.

## Content quality observations

### Worth preserving

- The practical, cross-disciplinary learning mission.
- The author's mechatronics, prototyping and autonomous-systems focus.
- Real project summaries and three confirmed GitHub repositories.
- The ROS 1 reference, after restructuring and legacy labelling.
- The Python playlist and official tool links.

### Rewritten

- Grammar, spelling, headings and duplicated text.
- Project descriptions and equipment lists.
- Python setup instructions, replacing archived downloads with official sources.
- UAV/UGV taxonomy.
- Course-interest data-use wording so it matches the form implementation.

### Removed

- Windows and Office activation instructions.
- Empty parcel-tracking and CTD pages.
- Speculative partnership, patent and market claims.
- Contextless external dashboards and archived binary downloads.
- Repeated Google Sites navigation/footer text.
- Third-party company descriptions and unattributed imagery.

### Missing information that still needs owner input

- A confirmed public email address.
- Final logo/brand assets, if a logo other than the new code-native mark is desired.
- Licensed, high-resolution photographs of the documented projects and diagrams with useful alt text. The rebuild now includes clearly labelled original AI-generated editorial artwork, but it is not evidence of a specific Academy4Tech class or build.
- Verified schematics, wiring diagrams, bills of materials, build times and safety notes for several projects.
- Original publication dates for migrated work.
- Course syllabi, learning outcomes and current availability.
- Any author biography details that should be independently sourced rather than self-described.

## SEO, accessibility and UX observations

- The old pages have titles but no detected meta descriptions or canonical links.
- The old site has no working `sitemap.xml` at the standard location.
- Most observed images had empty alt text.
- Navigation is broad and mixes projects, privacy, tools, courses and event content at the same level.
- Several pages have no meaningful content, while long pages lack reliable headings and reading structure.
- URLs contain inconsistent labels, including a UGV path labelled `(UAV)`.
- The rebuilt site supplies canonical metadata, descriptions, structured data, sitemap, RSS, semantic headings, keyboard focus states and responsive navigation.

## Media recommendation

Do not automatically migrate the Google-hosted page images. They lack consistent alt text, provenance and sizing. The rebuild combines a lightweight SVG visual system with four original AI-generated editorial scenes under `public/images/ai/`. They are delivered as AVIF/WebP with explicit dimensions and descriptive alt text, and are used as illustrative—not documentary—media. Replace them with approved real project photography when suitable licensed originals become available.
