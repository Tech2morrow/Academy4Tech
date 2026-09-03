# URL migration map

All rules below are implemented as Cloudflare Pages static redirects in `public/_redirects`.

| Old URL | New URL | Status |
| --- | --- | --- |
| `/home` | `/` | 301 |
| `/projects-blogs` | `/projects` | 301 |
| `/projects-blogs/ros-cheat-code` | `/tutorials/ros-command-line-cheat-sheet` | 301 |
| `/projects-blogs/esp-32-schematic` | `/projects/esp32-development-board` | 301 |
| `/projects-blogs/joystick-gui` | `/projects/ros-joystick-gui` | 301 |
| `/projects-blogs/cat-feeder` | `/projects/automatic-pet-feeder` | 301 |
| `/projects-blogs/ms-activation-found-online` | `/resources` | 301 |
| `/inspirations` | `/resources/inspirations` | 301 |
| `/vision-2030` | `/blog/dubai-autonomous-transportation-strategy` | 301 |
| `/vision-2030/wildebeest-pro` | `/projects/wildebeest-pro` | 301 |
| `/mbzirc-2023` | `/projects/mbzirc-afforestation` | 301 |
| `/mbzirc-2023/mbzirc-project-afforestation` | `/projects/mbzirc-afforestation` | 301 |
| `/gallery` | `/about#gallery` | 301 |
| `/online-free-courses` | `/learn` | 301 |
| `/online-free-courses/python` | `/learn/python` | 301 |
| `/online-free-courses/robodk` | `/learn/robodk` | 301 |
| `/unmanned-ground-vehicle-uav` | `/learn/ground-robots` | 301 |
| `/unmanned-aerial-vehicle-uav` | `/learn/drones` | 301 |
| `/conductivity-temperature-and-depthctd` | `/learn/sensors` | 301 |
| `/parcel-tracking-global` | `/resources` | 301 |
| `/website-builder` | `/about` | 301 |

The canonical origin is `https://academy4tech.com` (without `www`). Add a Cloudflare Redirect Rule for requests where the hostname equals `www.academy4tech.com`, preserving path and query, and redirect to the apex host with status 301.

Before launch, export indexed URLs from Google Search Console and compare them with this table. Add any URLs not discoverable from the live link graph before changing DNS.
