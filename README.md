# Morocco Family Trips

A family travel website built with Next.js App Router, TypeScript, Tailwind CSS, local image assets, structured editorial content and a server-side trip enquiry endpoint.

## Run locally

Use Node.js 20.9 or later.

```bash
npm install
Copy-Item .env.example .env.local
npm run dev
```

Set `NEXT_PUBLIC_SITE_URL` to the confirmed public domain before building for deployment. The enquiry endpoint is disabled until its mail settings are complete.

## Enquiry delivery

Trip enquiries from the website now open the visitor’s email app, addressed to `contact@moroccofamilytrips.com`. The existing `/api/enquiries/` endpoint remains available to integrations that already use it. The route validates and limits submitted data, checks same-origin requests, uses a hidden honeypot, applies an in-process per-IP limit and sends email through Resend. No API key is exposed to the browser.

Set these server environment variables:

- `RESEND_API_KEY`: Resend API key for the sending account.
- `TRIP_ENQUIRY_FROM`: sender address on a domain verified with Resend.
- `TRIP_ENQUIRY_TO`: the operator’s confirmed enquiry inbox.
- `NEXT_PUBLIC_SITE_URL`: the confirmed canonical website origin.

For integrations using the endpoint, add a durable shared rate-limit service or hosting firewall rule before running the endpoint across multiple serverless instances; the included in-process limit is a useful local and single-process safeguard, not a distributed limit.

## Routes

- `/`: homepage and family trip overview
- `/morocco-family-tours/`: main family tour landing page
- `/tours/` and `/tours/[slug]/`: tour discovery and day-by-day route pages
- `/destinations/`: family destination overview
- `/family-guide/`: the full article directory, grouped by topic
- `/blog/[slug]/`: individual family travel guides
- `/authors/hamid-el-maimouni/`: the tour operator’s founder profile
- Editorial routes include family holidays, itineraries, Sahara planning, ages, cost, road trips, city guides, packing, travel tips, FAQ, contact, about, reviews and the trip planner.
- `/privacy-policy/`, `/terms-and-conditions/` and `/cancellation-policy/` are draft pages marked `noindex` until approved by the operator.

Published pages set their own canonical URL, title, description and social preview. The sitemap includes the canonical routes. Redirects in `next.config.ts` keep the old blog index, city, cost and planner URLs usable while pointing visitors and search engines to the fuller page. Tour, article and breadcrumb data describe what is visible on the page.

## Search targets

| What someone is looking for | Page |
| --- | --- |
| Morocco family trips and the local operator | `/` |
| Private Morocco family tours and a quote | `/morocco-family-tours/` |
| Compare routes by length, start, finish and long drives | `/tours/` |
| 4-day Sahara from Marrakech, 7-day Marrakech loop, 10-day Marrakech to Chefchaouen, or 14-day Casablanca loop | Each matching `/tours/[slug]/` page |
| First trip to Morocco with kids | `/morocco-with-kids/` |
| Where to go with kids | `/destinations/` |
| 7, 10 or 14 day sample itineraries | `/morocco-family-itineraries/` |
| How many days to allow before choosing a route | `/blog/how-many-days-in-morocco-with-kids/` |
| Seven days in Morocco with kids without the Sahara | `/blog/7-days-in-morocco-with-kids-without-sahara/` |
| Sahara family tours by route | `/morocco-family-desert-tours/` |
| Agafay or Merzouga with kids | `/blog/agafay-or-merzouga-with-kids/` |
| Desert camp with kids, including beds and transfers | `/blog/morocco-desert-camp-with-kids/` |
| Morocco family trip or holiday costs | `/blog/morocco-family-trip-budget/` |
| Morocco family holidays from the UK | `/morocco-family-holidays/` |
| Long haul Morocco family vacations | `/morocco-family-vacations/` |
| Car seats for children in Morocco | `/blog/child-car-seats-in-morocco/` |
| Things to do with children in Marrakech, Fes or Chefchaouen | Each matching city guide under `/blog/` |

Use a guide to answer a specific planning decision and link to the next useful guide or route in that section. A new tour or guide needs its own purpose and verified details. See [Google Search Essentials](https://developers.google.com/search/docs/essentials) and [Google’s spam policies](https://developers.google.com/search/docs/essentials/spam-policies).

After deployment, submit `/sitemap.xml` in Search Console. Inspect the main tour page, the two new guides and the redirected city and cost URLs. Track impressions, clicks and queries by canonical page. The search targets above describe page intent and do not include verified volume or difficulty estimates.

## Verify before launch

The site uses public information from Morocco Travel Experts. The operator should confirm current legal company details, licensing language, the live domain, the WhatsApp contact, review excerpts, route availability, private or group format, exact prices, hotel and room names, child-seat fit, inclusions, exclusions, booking terms, cancellation terms and privacy contact. Public tour listings can change; the site labels sample routes and details that need a date-specific proposal.

The operator must complete and approve the privacy and contract pages for the markets it serves. The site does not collect payment and the trip enquiry is not a booking.

## Images

Local image sources and license notes are listed in [public/IMAGE_CREDITS.md](public/IMAGE_CREDITS.md). Images are served with `next/image` and descriptive alternative text.
