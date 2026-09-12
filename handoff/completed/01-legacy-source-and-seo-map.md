# SKSU legacy source and SEO map

## Objective
Produce the accepted evidence base required before rebuilding the SKSU site: a definitive historical-route map, page-intent/metadata anchors, redirect decisions, and an approved media-source inventory. This is read-only research. Do not change production application files, package files, or public assets.

## Read first
- `.hermes/plans/2026-09-10_103835-sksu-custom-redesign-and-legacy-url-restoration.md`
- Current public-site source under `app/`

## Owner decisions that are binding
- There is no active Holon dojo. Preserve `/karate-in-holon` as a legacy URL and direct it permanently to `/karate-in-rishon-le-zion`; never imply a Holon class.
- Active address: התזמורת 17, ראשון לציון.
- Confirmed current facts usable without further research: SKSU Shotokan Karate-Do; instructor Arie Nikar; Rishon LeZion focus; `050-473-1212`; free trial offer.
- Do not infer class schedule, ages, pricing, or credentials not established by the current site or a verified original source.
- Do not access, scrape, mirror, embed, or link to Facebook.
- The sole pre-approved video is YouTube `GPcCd06UeyY` (`https://www.youtube.com/watch?v=GPcCd06UeyY`). It must be independently checked for availability, title, duration, embed suitability, and caption availability. Do not download it or modify the site.
- Wayback is permitted only to identify candidate original image/video URLs and establish provenance. Never hotlink Wayback assets, copy entire pages, or approve media merely because it is archived.

## Required output
Create exactly one English research report at `handoff/reports/01-legacy-source-and-seo-map.md` containing:

1. Historical URL manifest: every route from the plan, exact spelling/trailing-slash policy, target behavior (`publish`, `permanent redirect`, `reserve`, or `410 decision pending`), and its evidence/source.
2. Per-publishable-route SEO anchors: verified historic title/H1/primary intent when recoverable; otherwise clearly label as unrecovered. Do not invent replacements.
3. Redirect matrix including WordPress query aliases, `/learn/page/2/`, Holon, embeds, author page, and junk/test URLs. Distinguish facts from decisions requiring future hosting-layer support.
4. Internal-link graph covering all publishable routes and proving no restored content would be orphaned.
5. Media inventory with only the approved YouTube item and any candidate Wayback original URLs. For every candidate: source URL, archive evidence, media type, apparent dimensions/quality if known, proposed page context, and approval status. State explicitly that no Facebook material was inspected or approved.
6. A short list of unresolved owner facts that block copy or page publication (for example schedule, ages, credentials), excluding anything already confirmed above.
7. Sources consulted, dates, retrieval failures, and confidence labels.

## Research standards
- Prefer primary/original captures over search snippets.
- Do not treat an unavailable Internet Archive response as proof that material never existed; record the exact query/response and try relevant historical host variants discovered in the site/archive evidence.
- Do not write Hebrew site copy, production code, JSON content records, redirects, or tests.
- No deployment, commit, or push.

## Completion evidence
- Run `git status --porcelain`.
- Call `kanban_complete` with a concise summary and that command’s output after the report exists.
- If sources cannot yield a defensible map, still write the report with the exact gap and call `kanban_block`; do not guess.
