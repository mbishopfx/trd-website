# EEAT Evidence & Verifiable Claims Tracker (True Rank Digital)

This file exists to keep the website **accuracy-first** and to prevent reintroducing claims that could be interpreted as “mock data.”

## How to use
- If a page needs a number (counts, timeframes, performance stats, rankings, ratings, pricing), add it **only** after you have a verifiable source from True Rank Digital’s real systems (contracts, invoices, dashboards, GSC/GA exports, platform logs, review platforms, written SLAs).
- When a claim is verified, record the evidence source and where it appears on the site.

## Claims removed or softened (needs evidence to reintroduce)
- Performance outcomes: ROAS/CPA improvements, traffic/lead lifts, “page 1 / top 3” ranking promises, conversion lift percentages.
- Time-to-results: “within hours/days/weeks,” “30–60 days,” “24 hours,” “2–4 weeks,” etc.
- Scale metrics: “hundreds/thousands/millions,” “X+ clients,” “X+ websites built,” “X states/countries served.”
- Ratings & review counts: star ratings, reviewCount/ratingCount, “Local Guide · 75 reviews,” “4 reviews,” etc.
- Uptime/monitoring guarantees: “99.9% uptime,” “24/7 monitoring,” etc (unless you have an SLA/log-backed source).
- Pricing ranges/anchors: “$$–$$$,” consulting price ranges, budget minimums, “$X managed,” etc.

## Claims currently still on-site (verify or convert to evidence-backed)
- Company founding year (`2020`) appears in branding/about content and structured data.
  - Evidence needed: formation docs or internal company record.
  - Where: `website/src/lib/seo/siteIdentity.ts`, `website/src/app/about/page.tsx`.
- Referral bonus amount (`$500`) is treated as a program term.
  - Evidence needed: written referral program policy/terms.
  - Where: `website/src/app/referral/page.tsx`, `website/src/app/api/referral/route.ts`.
- Any explicit “starting at” pricing (example: Starter Pack banner).
  - Evidence needed: current pricing sheet / checkout / contract template.
  - Where to check: `website/src/components/sections/StarterPackBanner.tsx`.

## Recommended evidence sources (first-party)
- Google Business Profile / Google Reviews (direct link + timestamped screenshots).
- GA4 + GSC exports (date range noted).
- Ads platform exports (Google Ads, Meta, Microsoft Ads) for spend/ROAS/CPA claims.
- Internal platform logs / uptime monitoring reports (if claiming uptime or monitoring cadence).
- Signed contracts / proposals for budgets, timelines, SLAs, and scope guarantees.

## Reintroduction rules (guardrails)
- Add **one** “proof” section per page type (case studies, testimonials, platform claims) and keep it tightly sourced.
- Prefer **screenshots of dashboards** only when they are real and approved for public use.
- When in doubt: use qualitative language (“we focus on…”, “we track…”, “we optimize…”) instead of numeric guarantees.

