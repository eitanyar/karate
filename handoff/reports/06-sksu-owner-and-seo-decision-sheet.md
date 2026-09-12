# SKSU Owner and SEO Decision Sheet

Date: 2026-09-10
Status: read-only closure sheet; conservative defaults adopted where owner evidence is absent

## Purpose and authority

This sheet converts the remaining SKSU content uncertainties into explicit publication decisions without changing any content record. It is grounded in `handoff/reports/01-legacy-source-and-seo-map.md`, `handoff/reports/03-sksu-hebrew-content-qa.md`, and the independent PASS in `handoff/reports/05-sksu-post-correction-hebrew-qa.md`.

The defaults below close the planning gate by failing closed: an unresolved claim is omitted from publication rather than inferred. Arie or Eitan may later replace a default with documented first-party confirmation. This sheet does not authorize a rebuild, application edits, publication, deployment, commit, or push.

## Decision rule

- `APPROVED` means the fact or historical treatment may be used exactly within the stated boundary.
- `WITHHOLD` means do not render the cited claim until owner evidence exists.
- `PRESERVE AS PROVENANCE` means keep the recovered value in `titleAnchor`, historical `h1`, route, or `_sourceNotes`, but do not automatically render it as current public copy.
- `EXCLUDE` means omit the record from routes, navigation, internal links, sitemap, schema, and publication inputs.

## A. Unresolved Arie / SKSU facts — closure defaults

| ID | Source seam | Decision now | Publication rule | Evidence that would reopen it |
|---|---|---|---|---|
| `QA-KAT-02` | `content/pages/training/kata.json:27` | `APPROVED` as an attributed historical anchor only | The 2014 seminar reference may appear only as past SKSU activity. It must not imply a current seminar, current syllabus requirement, current credential, or current media approval. | No further owner evidence is required for the historical wording; separate media rights approval is still required before showing the related video. |
| `QA-LRN2-02` | `content/learn/10-tips-to-get-a-black-belt.json:23` | `WITHHOLD` | Do not publish the 3–4-year first-Dan timeline. Preserve it only in provenance until Arie confirms the applicable SKSU range and conditions. | Arie supplies the current typical range, training-frequency assumptions, grading dependencies, and confirmation that it is not a promise. |
| `QA-LRN7-02` | `content/learn/how-long-a-black-belt-takes.json:21` | `WITHHOLD` | Do not publish the 3–5-year general timeline while it conflicts with the 3–4-year claim. The page intent may remain, but no numeric duration may be presented as SKSU guidance. | Same single owner answer used for `QA-LRN2-02`; both records must use one approved framing. |
| `QA-LRN7-04` | `content/learn/how-long-a-black-belt-takes.json:28` | `WITHHOLD` | Do not publish the approximate counts of 20–25 techniques, about 10 kata, or unspecified combat sets as the current SKSU syllabus. | Arie supplies or approves a current syllabus source and clarifies whether the numbers are SKSU-specific or general Shotokan context. |
| `QA-LRN11-04` | `content/learn/what-to-notice-in-karate-lessons.json:29` | `WITHHOLD` | Do not render the background-check, beyond-black-belt certification, or organizational-support questions in a way that suggests SKSU currently satisfies them. The surrounding instructor-selection article may proceed without this sentence. | Arie documents the actual instructor-vetting, qualification, continuing-education, and organizational-affiliation facts that may be stated publicly. |
| `QA-LRN3-02` boundary | `content/learn/8-elements-in-karate-lessons.json:21` | `APPROVED` only as general educational context | The current generalized statement about varying lesson lengths may remain. Do not add SKSU duration, frequency, age brackets, or schedule details. | Arie supplies the current programme-by-programme schedule and duration table. |

### Single owner response format if these defaults are later reopened

Arie should provide one dated response containing: the normal first-Dan range and its conditions; the current syllabus source; instructor qualifications and vetting facts approved for public use; and current class durations/frequency by programme. Silence leaves every `WITHHOLD` decision in force.

## B. Historical SEO anchors — one governing decision

### Decision

`PRESERVE AS PROVENANCE` for all 21 values enumerated at `handoff/reports/05-sksu-post-correction-hebrew-qa.md:82-104`.

- Keep every historical route byte-identical, including `/komita/`.
- Keep recovered `titleAnchor` values byte-identical as archive evidence.
- Do not feed `titleAnchor` directly into rendered `<title>`, H1, Open Graph, schema, navigation labels, or visible page copy.
- Use the separate current `metadata.title`, `metadata.description`, and safe editorial H1 only after claim review.
- A dangling historical separator remains in provenance; it is not a modern SEO title suffix.
- Route, canonical, redirect, and retirement behavior remains governed by `handoff/reports/01-legacy-source-and-seo-map.md`.

### Exceptions requiring explicit treatment

| Finding | Source seam | Decision now |
|---|---|---|
| `QA-WHY-01` | `content/pages/why-us.json` `/titleAnchor` | Preserve internally; do not render the dangling separator or superlative as the current title. |
| `QA-RLZ-01` | `content/pages/locations/rishon-le-zion.json:5,9` | Preserve the recovered child/self-defense title internally. Do not render it as current metadata until Arie confirms that children’s self-defense is currently offered and supplies the applicable age range. |
| `QA-RLZ-02` | `content/pages/locations/rishon-le-zion.json:10` | Preserve the recovered H1 internally. Do not render it publicly because it contains defective historical typography and an unsupported life-success claim. A separate waocopy task must supply a safe current H1 before this page is implemented. |
| `QA-LRN4-01` | `content/learn/choosing-the-wrong-martial-art.json` `/titleAnchor` | Preserve internally. Any public title must avoid implying guaranteed harm or a verified causal “price” of choosing another martial art. |
| Remaining dangling-separator findings | The other values listed at `handoff/reports/05-sksu-post-correction-hebrew-qa.md:87-104` | Preserve internally; use cleaned current metadata already separated from the recovered anchor, subject to page-level claim review. |

### SEO closure result

Historical authority is protected by retaining canonical paths, intent, and provenance. Historical defects and unsupported claims are not promoted into current metadata merely because they were archived. No anchor rewrite is authorized by this sheet.

## C. Excluded synthetic home-practice article

Record: `content/learn/להתאמן-בקראטה-בבית.json`

Decision: `EXCLUDE` from the first rebuild and from publication.

Required behavior for any later implementation:

- Do not generate the route from this record.
- Do not include it in `/learn/`, navigation, related links, XML sitemap, structured data, search index, or featured-article selections.
- Do not reuse its synthetic body, metadata description, CTA, or related-link text as source material.
- Reserve the historical path and intent; do not repurpose the URL.
- Do not redirect the historical URL to a loosely related article without separate SEO evidence.
- Reopen only if an original owner backup/WordPress export recovers the body, or if Arie and SEO explicitly authorize a new replacement article at the same intent followed by waocopy drafting, Hebrew QA, and human spot-check.

The known title/H1 may remain only as historical provenance. The syntax defect noted as `QA-LRN13-03` is deliberately not corrected because the entire synthetic record remains excluded.

## D. Other launch facts remain fail-closed

The broader unresolved operational and media facts at `handoff/reports/01-legacy-source-and-seo-map.md` section 6 are not converted into facts here. Until first-party evidence exists, omit current schedules, age ranges, programme splits, pricing conditions, detailed credentials, venue logistics, image rights, minor releases, and unapproved videos. Confirmed facts remain limited to the accepted evidence base already recorded there.

## E. Gate status

- Hebrew correction pass: `PASS`, independently reported at `handoff/reports/05-sksu-post-correction-hebrew-qa.md:132-137`.
- Owner-fact uncertainty: closed for planning through the `WITHHOLD` defaults above; not converted into owner confirmation.
- Historical-anchor treatment: closed by the provenance-not-rendering rule above.
- Synthetic article: closed as `EXCLUDE`.
- Website rebuild: not started and not authorized by this sheet.
- Deployment / commit / push: not authorized.

## F. Future execution boundary

A future rebuild specification may rely on this sheet only if it excludes every `WITHHOLD` claim, applies the historical-anchor rendering rules, and excludes the synthetic record. Any request to publish a withheld fact or the excluded article requires a new narrow owner/SEO/content decision before implementation.