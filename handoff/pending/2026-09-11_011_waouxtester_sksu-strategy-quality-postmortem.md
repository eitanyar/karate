# SKSU Strategy Quality Postmortem

WARNING - HEBREW-SAFETY: This accountable record contains no Hebrew copy. Existing Hebrew content is referenced only by file and line. No production file or historical handoff is modified.

WARNING - EXECUTION SCOPE: read-only audit and postmortem only. No implementation, deployment, `deploy.sh`, process change, provider interaction, form submission, contact activation, commit, push, or historical handoff/card mutation is authorized.

## Metadata
- Task ID: 2026-09-11_011
- Target Agent: waouxtester
- Priority: P0-Critical
- Estimated Complexity: Moderate
- Created By: waostrategy (Strategist, GPT-5.6 Sol)
- Created At: 2026-09-11T17:17:50+07:00
- Status: pending
- Contract Version: 3
- Dispatch Approved: no; this file is the completed accountable postmortem requested by card `t_f304438c`, not an execution task
- Observable Outcome: The strategy failure is explained from current source, prior handoffs, passing tests, and direct remote evidence, with a replacement design and live-behavior acceptance contract that cannot pass the same result.
- Required Capabilities / Preflight Evidence: `waouxtester` has `context_length: 1000000` at `/home/eitanya/wao/AGENTS.md:110-123`; no future dispatch is required.
- Accepted Dependencies / Board Parent IDs: planning card `t_c8340ba5` is formally done; current source and `http://100.102.160.114:3000/kata` were independently inspected for this postmortem
- Supersedes: no historical handoff; its conclusions invalidate the permissive visual acceptance logic used by `2026-09-10_003` and the defect-only contracts `2026-09-11_002` through `2026-09-11_009`
- Execution Class: read-only-repeatable
- Local Correction Budget: no correction; one evidence pass only
- Automatic Redispatch: none for deterministic, dependency, capability, or protocol blocks

## Context
Eitan supplied approved text, navigation, local brand assets, and YouTube mappings, yet the process produced a technically enumerable site rather than an inviting registration-focused marketing experience. Responsibility sits with strategy: the implementation contracts converted a strong art-direction plan into narrow structural instructions, then accepted successive local defect fixes without reasserting the whole-site visual, conversion, and live-runtime outcome.

## Specification

### Requirements:
1. Record the exact strategic contradiction. The source plan required a documentary "Living Dojo" identity, asymmetrical editorial compositions, an authentic hero, practical trust proof, and a homepage conversion sequence at `.hermes/plans/2026-09-10_103835-sksu-custom-redesign-and-legacy-url-restoration.md:134-164`. It also required approved UX/art direction and authentic assets before final visual acceptance at lines 272-306. The implementation handoff weakened this to a responsive content-driven multipage shell, generic retention of existing visual strengths, and explicit omission of media at `handoff/failed/2026-09-10_003_waoengineer_build-content-driven-site.md:17,38,42,44`. Strategy allowed package E to proceed without enforcing packages A-D as release-blocking parents.
2. Record the missing design specification. No implementation contract supplied approved desktop/mobile wireframes, section-by-section compositions, a page-template matrix, grid and content-width rules, image crop/focal-point rules, type-scale targets, spacing rhythm, CTA hierarchy, hover/focus states, or a visual reference set with reject examples. Words such as "premium", "balanced", "intentional", and "coherent" in `2026-09-11_004:17,33` were subjective labels, not executable art direction.
3. Record the missing conversion specification. The contracts did not require each route to answer audience, trust, location, first-visit, and next-step questions in a defined order; did not define a dominant primary CTA versus secondary actions; did not set trust-proof placement, practical-detail prominence, or route-specific registration journeys; and did not require a full-page persuasion review. An early CTA within 844 pixels at `2026-09-11_004:35` measured location, not whether the page earned or clarified the action.
4. Record the media-composition failure authored by strategy. `2026-09-11_002:34-37` authorized the 389x960 brochure as every video's fallback and placed all videos consecutively after all page sections. `app/_components/content-page.tsx:13` implements that exact undifferentiated sequence and generates generic ordinal titles. `2026-09-11_009:32-36` then explicitly required the same brochure image inside each compact load surface while retaining a second brochure fallback. `app/_components/video-embed.tsx:15` therefore repeats the brochure twice per figure; this is not model improvisation but compliance with a bad contract.
5. Record the preservation trap. After each defect, strategy narrowed scope and froze the rest of the visual system: `2026-09-11_002:37,44-45`, `2026-09-11_003:35,42-43`, `2026-09-11_008:42-45`, and `2026-09-11_009:37,41-45`. This protected accumulated mediocrity from holistic correction. The model was repeatedly told not to redesign, not to add assets, not to change composition outside one selector seam, and not to improve beyond the named requirement.
6. Record direct remote evidence. At 1280px, `/kata` renders five full-viewport-width repeated figures. Each figure is 1280x172 CSS pixels; its load surface is 1280x104; its primary brochure crop is 300x86; and a duplicate fallback crop is 30x44. The page is a long text column followed by five visually identical brochure bars and duplicate fallback rows, with no contextual captions or editorial grouping. The live homepage hero shows a large empty dark media rectangle plus a small brochure fallback, not an authentic or inviting karate scene. These observations match current selectors at `app/globals.css:22-36` and current component markup at `app/_components/video-embed.tsx:14-15`.
7. Record the false acceptance gates. `npm run test` currently passes 22/22, but the visual tests mostly regex-match source strings: `tests/media-restoration.test.mjs:33-51`, `tests/premium-ui.test.mjs:35-44`, and `tests/preserved-visual-defects.test.mjs:20-40`. They prove that classes and numeric declarations exist, not that the page is attractive, persuasive, hydrated, or operational. Numeric checks such as 44px targets, 160/180px card ceilings, no overflow, and exact media counts permitted an ugly repeated layout because visual quality was not encoded.
8. Record the live-runtime gate failure. The remote HTML for `/kata` and `/` returns HTTP 200 and CSS loads, but four emitted JavaScript assets on each route return HTTP 404: `main-app.js`, `app-pages-internals.js`, the route `page.js`, and `polyfills.js`. Only `webpack.js` returned 200 in the direct check. Consequently the server-rendered buttons appear while client hydration and click-to-load behavior cannot work. Earlier gates separated isolated build success from the actual port-3000 runtime, sometimes prohibited runtime replacement, and accepted HTML/status/source evidence without requiring every emitted asset plus a real interaction on the user-visible URL.
9. Record why model capability did not compensate. `waoengineer` is mandated to implement specifications exactly and avoid freelancing at `/home/eitanya/wao/AGENTS.md:27-36`. The concrete instructions, immutable-file rules, exact hashes, source-regex tests, compact-height targets, brochure reuse, and no-redesign constraints had far more execution weight than vague adjectives. A capable model cannot safely infer missing brand, conversion, photography, and composition decisions when the contract explicitly prohibits broad improvements and rewards literal test compliance.
10. Adopt the replacement design contract below for every remaining SKSU UI task. Passing a narrow defect check never grants whole-site visual acceptance; accepted visual/conversion criteria remain cumulative and may not be frozen out of later work.

### Constraints:
- This postmortem does not edit production files and does not blame Eitan, the supplied content, or model capacity.
- Historical handoffs remain immutable evidence. Their completion status does not convert a failed visual outcome into an accepted design.
- `2026-09-11_010` may repair the immediate iframe/runtime defects, but its completion alone cannot establish the holistic marketing acceptance defined here.
- New photography, claims, schedules, pricing, and deployment remain separate owner-controlled inputs; absence of a required authentic asset must produce an explicit visual release hold, not a brochure or blank substitute presented as finished design.

### Technical Details:
- Files to Modify: none
- Files to Create: `handoff/pending/2026-09-11_011_waouxtester_sksu-strategy-quality-postmortem.md`
- Files to Read: `.hermes/plans/2026-09-10_103835-sksu-custom-redesign-and-legacy-url-restoration.md`; handoffs `2026-09-10_003` and `2026-09-11_002` through `2026-09-11_010`; `app/page.tsx`; `app/_components/content-page.tsx`; `app/_components/video-embed.tsx`; `app/globals.css`; `content/pages/training/kata.json`; current tests
- Dependencies: direct access to current source and `http://100.102.160.114:3000`; both were available

## Acceptance Criteria
- [ ] The omission analysis identifies the lost art direction, missing page/composition system, missing conversion journey, and media-placement mistakes with exact file/line evidence.
- [ ] The false-gate analysis explains how 22 passing source-level tests, geometry checks, isolated builds, and HTTP 200 pages permitted visual and hydration failure.
- [ ] The accountability analysis states that exact model compliance amplified weak strategy and does not use model capability or owner inputs as an excuse.
- [ ] The replacement contract below requires cumulative visual quality, conversion quality, authentic media, exact live-runtime integrity, interaction success, and independent full-page review.
- [ ] No production or historical file is modified.

## Implementation Notes
### Do:
- Treat design as an observable product contract, not an adjective.
- Keep structural correctness, live behavior, conversion effectiveness, and visual quality as four separately passing gates.
- Fail closed when required authentic media is unavailable rather than substituting a repeated brochure or empty shell.
### Don't:
- Accept source regex, build output, route existence, media counts, or overflow absence as proof of a polished marketing site.
- Narrow a corrective task so aggressively that it preserves a known weak whole-page composition.
- Ask an executor to infer unrecorded art direction while simultaneously prohibiting redesign.

## Testing Requirements
- Test Command: `npm run test`; independently observed result is 22/22 PASS, demonstrating structural/source assertions but not live or visual acceptance; safe and completed.
- Test Command: GET `/kata` and `/` plus every emitted same-origin framework asset from `http://100.102.160.114:3000`; independently observed HTML 200, CSS 200, `webpack.js` 200, and four required JavaScript asset 404s per route; read-only and completed.
- Test Command: browser inspect `/kata` at 1280px; independently observed five 1280x172 repeated figures, duplicated brochure imagery, and no initial iframes; read-only and completed.
- Test Command: browser inspect `/` at 1280px; independently observed a large empty-looking hero media surface with a small brochure fallback; read-only and completed.

## Verification Checklist (waoengineer Final Gate)
- [ ] **npm run build** — N/A: this task audits strategy and modifies no application byte; the prior independent isolated build PASS is not treated as live or visual proof.
- [x] **npm run test** — 22/22 tests passed and were audited for what they do not prove.
- [x] **Dev server smoke test** — Remote HTML, emitted asset URLs, hydration preconditions, figure geometry, and current source were checked directly.
- [x] **Evidence screenshots** — Full-page desktop views of `/kata` and `/` were inspected against the registration-focused marketing objective.

**Report Outcome:** `postmortem=PASS` means the process failure is owned, evidenced, and replaced by a non-negotiable cumulative contract. It does not mean the site, current runtime, visual design, or release is accepted. `release_health=false`; no deployment is authorized.

### Escalation Routing (waoengineer decision)
The following contract is mandatory for any future final acceptance, including work performed from `2026-09-11_010`:

1. **Approved design baseline:** Before implementation, provide desktop and 390x844 wireframes or reference frames for homepage, content/training, learning, contact, and legal templates. Specify section order, max widths, grid behavior, type scale, spacing rhythm, CTA hierarchy, media aspect/crop/focal rules, component states, and explicit reject examples: empty hero, repeated brochure, undifferentiated full-width media bars, generic equal-card grids, and text-only expanses without intentional hierarchy.
2. **Authentic media contract:** Every prominent image/video has an approved source, route, role, title/caption, aspect ratio, and mobile crop. Essential visuals render as real DOM media with intrinsic dimensions. No CSS-background dependency, blank shell, alt-text leakage, repeated brochure proxy, duplicate fallback, fake thumbnail, or media card without content-specific context may pass.
3. **Conversion contract:** Every commercial route must visibly establish audience fit, SKSU identity, instructor/location trust, next-step expectation, and one dominant registration action in a defined narrative order. Desktop and mobile review must grade CTA prominence, competing actions, practical information, form clarity, and the complete route-to-registration journey, not merely CTA pixel position.
4. **Live-behavior contract:** Acceptance runs against the exact user-visible Tailscale URL and current port-3000 process. Every emitted same-origin script, stylesheet, font, and local image must return 200, non-empty, non-HTML bytes with correct content type. A fresh browser must show zero same-origin request failures and zero console errors; mobile menu state, video behavior, links, and form client state must demonstrably hydrate. HTML 200 without working JavaScript is FAIL.
5. **Visual quality contract:** Independent `waouxtester` review uses full-page desktop and exact 390x844 screenshots for every template and key route. It returns FAIL for template-like repetition, blank/dominant empty regions, unreadable line length, weak hierarchy, inconsistent spacing, unusable crops, hidden media, visual monotony, or a registration path that does not feel intentional, even when geometry and tests pass.
6. **Cumulative release gate:** Source tests, typecheck, canonical tests, isolated build, live asset matrix, real interactions, media mapping, responsive screenshots, RTL/accessibility, visual polish, and conversion journey must all pass on the same bytes. A narrow correction cannot waive or freeze another gate. Any changed runtime bytes invalidate earlier screenshot acceptance until rechecked.
7. **Owner-input boundary:** If required authentic photography or factual trust content is missing, mark the affected visual/conversion gate `BLOCKED` or explicitly incomplete. Do not label a placeholder-based result polished, premium, inviting, or release-ready.

No successor is dispatched from this postmortem. Strategy must use this contract as the acceptance policy, while Adam/orchestrator controls any manual execution sequence.

## Handoff Instructions for Hermes
1. Read this file completely as an accountable record, not a runnable implementation task.
2. Preserve every production and historical file.
3. Do not infer site acceptance from the 22 passing tests or HTTP 200 HTML.
4. Apply the replacement contract cumulatively to future SKSU implementation and verification handoffs.
5. Require direct evidence from the exact user-visible runtime and independent full-page visual judgment.
6. Do not deploy, run `deploy.sh`, commit, push, submit forms, activate contacts, or mutate historical cards/handoffs.
7. Adam/orchestrator owns any later dispatch; this postmortem authorizes none.
