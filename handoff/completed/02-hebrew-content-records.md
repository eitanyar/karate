# SKSU Hebrew content records for restored historical routes

## Objective
Create the structured Hebrew content data needed to restore the approved SKSU historical pages and learning articles. This is a content-only task. Do not modify React/Next.js code, styles, package files, routes, redirects, or assets.

## Required dependencies
Read these accepted inputs first:
- `handoff/completed/01-legacy-source-and-seo-map.md`
- `.hermes/plans/2026-09-10_103835-sksu-custom-redesign-and-legacy-url-restoration.md`

## Binding facts and restrictions
- Active address: התזמורת 17, ראשון לציון.
- There is no active Holon dojo. Do not create a Holon page record or any copy that suggests classes in Holon.
- Confirmed current facts: SKSU Shotokan Karate-Do; instructor Arie Nikar; Rishon LeZion focus; phone `050-473-1212`; free trial offer.
- Do not state or imply a class schedule, age range, pricing, instructor rank/credential, accessibility detail, parking/transit detail, programme availability, health claim, child-development claim, testimonial, rating, or callback/CRM behavior unless this task has a verified source for it.
- The contact experience offers WhatsApp, click-to-call, and a genuine contact form. Describe only the factual contact choices, not an invented response time or process.
- Facebook is out of scope: do not access, mention, link, or use it as a source.
- Preserve every verified historical page’s primary intent, title anchor, and H1 exactly as captured in the accepted report. Do not modernize or change them without recording an unrecovered/owner-review exception.
- Preserve historical substance only where it remains safe and factual. Flag or omit stale/unsupported claims rather than inventing replacements.
- The two reserved learning routes remain absent: do not create records for `overcome-fear-and-attend-belt-test` or `is-your-kid-ready-to-become-karate-kid`.

## Required files
Create valid UTF-8 JSON only, using this common shape (add fields only where genuinely needed):

```json
{
  "schemaVersion": 1,
  "route": "/exact/historical/path/",
  "metadata": {
    "title": "verified historic title anchor",
    "description": "Hebrew meta description grounded in the page intent",
    "canonical": "/exact/historical/path/"
  },
  "titleAnchor": "verified historic title",
  "h1": "verified historic H1",
  "breadcrumbs": [{"label": "...", "href": "/..."}],
  "intro": "...",
  "sections": [{"heading": "...", "body": ["..."], "list": ["..."]}],
  "relatedLinks": [{"label": "...", "href": "/..."}],
  "cta": {"label": "...", "href": "/contact/"}
}
```

Create:
- `content/site.json` — confirmed shared factual details, navigation destinations, address, phone, and contact-channel labels only.
- `content/pages/why-us.json`
- `content/pages/locations/rishon-le-zion.json`
- `content/pages/training/kihon.json`
- `content/pages/training/kata.json`
- `content/pages/training/komita.json`
- `content/pages/training/self-defense-exercise.json`
- `content/learn/<exact legacy slug>.json` for every 13 publishable article routes listed in Section 2 of the accepted report, including the exact Unicode Hebrew slug for the home-practice article.

Do not create `content/pages/locations/holon.json`, a media manifest, media URLs, legal-page records, or records for redirect/reserved/410 routes.

## Content quality requirements
- Natural contemporary Israeli Hebrew; preserve the supplied historical anchors as required fields, not necessarily as the sole on-page language outside H1/title fields.
- Every article must link back to `/learn/`, include one relevant sibling article, one relevant training/location route, and `/contact/`.
- Every non-article page must include the appropriate breadcrumb and relevant internal links specified in the accepted internal-link graph.
- Each article needs a unique intent-grounded metadata description. Do not use generic duplicated descriptions.
- Keep the body concise enough for a documentary marketing site while retaining useful recovered authority substance.
- Use safe, non-medical, non-guaranteed language. No invented statistics or results.

## Validation and completion
- Run a JSON parse check across every created `.json` file using Node or Python.
- Run `git diff --check` and `git status --porcelain`.
- Call `kanban_complete` with a one-paragraph summary and the `git status --porcelain` output only after all required records and validation exist.
- If a required historical body cannot be recovered safely, create the record only when its recovered anchor and intent are known, keep claims minimal, list the exact limitation in a `_sourceNotes` field, and call `kanban_complete`. Do not block merely because an archive body is partial.
