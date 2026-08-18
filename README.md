# ZoneOfWar — Marketing Website

The public marketing site for **ZoneOfWar**, a drone and autonomous-systems cyber range built by Cyber Security Finland Oy. Built with [Astro](https://astro.build), Tailwind CSS v4 and a Markdown-based content model, following the AI Developer Build Specification and Website Content & UX Blueprint provided for this project.

## Stack

- **Astro** (TypeScript, strict) with `@astrojs/node` (standalone) for local SSR + form API routes
- **Tailwind CSS v4** — design tokens (colors, fonts) defined in `src/styles/global.css`
- **Content collections** (`src/content/`) for missions, threat-library topics, blog/research and FAQ
- **@astrojs/sitemap** for `sitemap-index.xml`

## Getting started

```sh
npm install
npm run dev
```

Site runs at `http://localhost:4321`.

```sh
npm run build     # production build to ./dist
npm run preview   # serve the production build locally
```

## Project structure

```
src/
├── components/       Reusable UI: Header, Footer, Hero, MissionCard, PricingCard,
│                      FaqAccordion, LeadCaptureForm, ConsentBanner, Analytics, ...
├── content/           Markdown content collections
│   ├── missions/        11 sample missions (Red/Blue/Red vs Blue)
│   ├── threat-topics/   Drone Threat Library articles
│   ├── blog/             Blog & research articles
│   └── faq/              FAQ entries
├── content.config.ts  Content collection schemas
├── data/              Structured data: nav, pricing plans, solution pages, team
├── lib/               analytics-events.ts, forms.ts (server-side validation)
├── layouts/           BaseLayout.astro (SEO meta, JSON-LD, header/footer, consent)
└── pages/              One file/folder per route — see the route map below
```

## Routes implemented

Home, Platform (+ Architecture, Scoring), Ranges (Attack / Defense / Red vs Blue),
Missions (library + detail pages), Training (+ Certification), Solutions (5 audience
pages), Pricing, Resources (Threat Library, Blog, Research), Docs, Company (About,
Responsible Use), Partners, Contact, FAQ, Privacy, Terms, Acceptable Use, Security,
Login, Signup, plus a branded 404.

## Forms & leads

`LeadCaptureForm` and `NewsletterForm` post to `/api/lead` and `/api/newsletter`
(Astro server endpoints — see `src/lib/forms.ts`). Submissions are:

- validated server-side (required fields, email format)
- protected by a honeypot field + a minimum-fill-time check
- appended as NDJSON to `.data/*.ndjson` (gitignored — **local-dev only**)

**Before a real deploy:** swap `logSubmission()` in `src/lib/forms.ts` for a real
destination — email (Resend), a CRM webhook (HubSpot/Pipedrive), or a database.
The Vercel Marketplace has managed integrations for most of these if you deploy
there.

## Analytics

`src/components/Analytics.astro` implements the event list from the build spec
(`hero_primary_cta`, `mission_card_open`, `signup_complete`, etc. — full list in
`src/lib/analytics-events.ts`) as a consent-gated `window.dataLayer` push. No
analytics vendor is wired up yet — cookie consent (`ConsentBanner.astro`) already
gates it, so dropping in GA4 (consent mode), Plausible or PostHog later is a
small change, not a rebuild.

## Known follow-ups before a public launch

- Replace the SVG OG image (`public/og-default.svg`) with a rasterized PNG — some
  platforms (notably Facebook/X) don't render SVG `og:image`.
- Legal pages (`/privacy`, `/terms`, `/acceptable-use`) are complete, reasonable
  drafts — have them reviewed by qualified counsel before launch.
- Wire up a real lead destination and analytics provider (see above).
- Add real customer/partner logos to `LogoStrip.astro` only once approved — it's
  intentionally unused until then, per the build spec.
- When ready to deploy (Vercel or elsewhere), swap `@astrojs/node` for the
  target platform's adapter (e.g. `@astrojs/vercel`).
