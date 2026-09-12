# Remediate Premium Core UI

WARNING - HEBREW-SAFETY: waoengineer types ZERO Hebrew bytes in this task. Preserve every existing Hebrew string byte-for-byte. Reuse only exact literals already present in source or runtime data; perform edits to Hebrew-bearing files through asserted ASCII placeholders or byte-preserving transformations.

WARNING - EXECUTION SCOPE: one outcome-owned local UI correction and named checks only. No deployment, `deploy.sh`, commit, push, provider access, external media or thumbnail download, media playback, form submission, contact activation, credentials, new content/claims/assets, existing-runtime process replacement, or historical handoff/card mutation is authorized.

## Metadata
- Task ID: 2026-09-11_004
- Target Agent: waoengineer
- Priority: P0-Critical
- Estimated Complexity: Moderate
- Created By: waostrategy (Strategist, GPT-5.6 Sol)
- Created At: 2026-09-11T09:36:55+07:00
- Status: pending
- Contract Version: 3
- Dispatch Approved: yes after planning card `t_f5ca0452` is formally done; Adam must use that card as the implementation card's sole parent
- Observable Outcome: The homepage, contact page, and two audited core-page mobile journeys present a coherent premium conversion surface, with homepage video `uK-RbSzj-Fo`, complete existing-data contact choices, early mobile CTAs, and no visible Next development badge.
- Required Capabilities / Preflight Evidence: `waoengineer` has `context_length: 1000000` at `/home/eitanya/wao/AGENTS.md:27-36`; this narrow allowlist and its checks fit comfortably.
- Accepted Dependencies / Board Parent IDs: completed audit `t_b2d7d16b`; owner approval for homepage YouTube ID `uK-RbSzj-Fo`; formally done planning card `t_f5ca0452` before dispatch
- Supersedes: none; `handoff/pending/2026-09-11_003_waoengineer_correct-media-menu-visuals.md` and blocked card `t_3e101054` remain immutable historical lineage
- Execution Class: outcome-owned-local
- Local Correction Budget: one goal-mode run, at most 45 minutes and 12 goal turns; repeat only named safe local checks
- Automatic Redispatch: none for deterministic, dependency, capability, or protocol blocks

## Context
The independent 1280px and 390x844 audit found a weak homepage hero, an edge-flush contact page without the shared shell, and first conversion actions far below the mobile fold on `/karate-in-rishon-le-zion` and `/kata/`. Current bytes already provide a provider-inert load-on-intent `VideoEmbed`, persistent local brochure fallback, shared shell/form/CTA components, and confirmed contact data; this task composes and styles those existing seams without new copy or assets.

## Specification

### Requirements:
1. Before editing, read this handoff; cards `t_b2d7d16b`, `t_3e101054`, and `t_f5ca0452`; the protected 003 handoff; every allowlisted file; `app/_components/site-header.tsx`, `app/_components/site-footer.tsx`, `app/_components/video-embed.tsx`, `app/trial-form.tsx`, `content/site.json`, `package.json`; and installed Next 15 config schema at `node_modules/next/dist/server/config-schema.js:257-273` plus indicator define behavior at `node_modules/next/dist/build/define-env.js:122-124`. Capture `git status --porcelain=v1` and verify the pre-task hashes below.
2. Change only the homepage mapping in `content/media-manifest.json` from its current ID to owner-approved `uK-RbSzj-Fo`; preserve every other route, placement, ID, schema field, and provenance byte. Update exact mapping assertions accordingly; the resulting contract remains 16 placements and 15 unique IDs.
3. Make the existing homepage hero visually intentional at 1280px and 390x844 using the current `Home`, `VideoEmbed`, existing content, and CSS seams: clear copy/action hierarchy, balanced media prominence, deliberate spacing/surface treatment, no blank-looking primary region, no brochure promoted as hero artwork, and no horizontal overflow. Retain provider-inert initial rendering, explicit load-on-intent, no autoplay, the privacy host, and the always-visible full-width local fallback before and after iframe creation.
4. Recompose `Contact` into the shared `SiteHeader` / `SiteFooter` system and a centered, padded conversion layout. Reuse only byte-exact strings and confirmed data already in `app/contact/page.tsx`, `content/site.json`, and `app/trial-form.tsx`; expose WhatsApp, a valid click-to-call action derived deterministically from the confirmed numeric WhatsApp contact rather than the masked `telHref`, the existing displayed phone/address, and the existing `TrialForm`. Preserve current metadata, canonical behavior, external-link safety, and all existing contact-page literals byte-for-byte. Do not add response times, schedules, ages, credentials, reviews, maps, photos, or claims.
5. Add an early `TrialCta` immediately after the intro only for `/karate-in-rishon-le-zion` and `/kata/`, using each page's existing `page.cta`; retain the current final CTA. At 390x844 an actionable CTA must start within the first 844 CSS pixels on both routes, be at least 44px high, remain readable, and introduce no sticky overlay or obstruction.
6. Set the supported Next 15 `devIndicators: false` option in `next.config.mjs`; do not hide framework UI with CSS or DOM manipulation. Preserve HMR, compiler output, error overlay, source maps, and every other Next setting. If actual evidence shows this option weakens diagnostics beyond removing the corner badge, leave `next.config.mjs` unchanged and report that criterion as a release-health boundary rather than using another technique.
7. Add focused source-level assertions in `tests/premium-ui.test.mjs` for the approved homepage ID, shared contact shell and existing-data channels/form, route-limited early CTAs plus retained final CTA, premium responsive CSS hooks, and canonical `devIndicators: false`. Update `tests/media-restoration.test.mjs` only for the exact homepage mapping. Do not weaken existing assertions.
8. Preserve all existing Hebrew strings byte-for-byte and compare a pre/post SHA-256 inventory of every Hebrew-bearing string/file. Report changed files, focused/type/canonical/build results, route/viewport evidence, provider request count before activation, final hashes, and final `git status --porcelain=v1`.

### Constraints:
- Modify only `app/page.tsx`, `app/contact/page.tsx`, `app/_components/content-page.tsx`, `app/globals.css`, `content/media-manifest.json`, `next.config.mjs`, and `tests/media-restoration.test.mjs`; create only `tests/premium-ui.test.mjs`.
- Do not modify `app/_components/site-header.tsx`, `app/_components/site-footer.tsx`, `app/_components/video-embed.tsx`, `app/trial-form.tsx`, `content/site.json`, assets, other routes/tests/content, or dependencies.
- Preserve every existing Hebrew string byte-for-byte. New visible copy, credentials, testimonials, schedules, photography, claims, provider resources, Facebook embeds, remote thumbnails, and fake contact behavior are prohibited.
- Preserve the current local load-on-intent media and graceful full-width local fallback. Do not activate media/watch/contact controls or submit forms during checks.
- Do not edit, move, reconcile, or comment on the protected 003 handoff, blocked card `t_3e101054`, or anything under `handoff/in-progress/`, `handoff/completed/`, or `handoff/failed/`.

### Technical Details:
- Files to Modify: `app/page.tsx`; `app/contact/page.tsx`; `app/_components/content-page.tsx`; `app/globals.css`; `content/media-manifest.json`; `next.config.mjs`; `tests/media-restoration.test.mjs`
- Files to Create: `tests/premium-ui.test.mjs`
- Files to Read: `app/_components/site-header.tsx`; `app/_components/site-footer.tsx`; `app/_components/video-embed.tsx`; `app/trial-form.tsx`; `content/site.json`; `package.json`; installed Next config sources named above; cards and protected handoff named above
- Dependencies: current repository bytes include the unreviewed local media/menu correction from blocked card `t_3e101054`; preserve those bytes and do not claim that historical card accepted. Pre-task SHA-256: `app/page.tsx` `3db8690632e5799623886de39d954e8de7aeba80af57776912e22fa2d59338bf`; `app/contact/page.tsx` `5f8f47acfc040303820ab58e07d885b415a798a942a2724f26304edbb533dcd8`; `app/_components/content-page.tsx` `97fa04a0d60536e7088ce78bede4774d16a91872f21270458b33e9b373c4ceb2`; `app/globals.css` `6a8c94432b273c99ff0a2e47017cb6959ee3710a1b12369efd4f2d4b599089f9`; manifest `a88262be309b9bc4743e5db81783451ab1d52299c6daa3f924d389d6a1d788bc`; config `97a66300ac88019d6dd231100e3a23f274cad5b1a1954720d8c170481e8d5441`; media test `750b79789189eba34fc5a465816d05e4c986e1b6921779423675d305cd461588`; protected 003 handoff `e514acf36d1d60ffea92f1f040b3bf23ac66c07c7e1bf57fca1a519d6343af3b`.

## Acceptance Criteria
- [ ] `/` resolves its sole hero video to exactly `uK-RbSzj-Fo`; all other mappings remain exact and totals remain 16 placements/15 unique IDs.
- [ ] At 1280px and 390x844 the homepage hero is balanced and intentional, its local initial media surface is visibly filled, its fallback uses full usable width, and initial load creates zero provider/thumbnail requests.
- [ ] `/contact` uses the shared header/footer, safe responsive gutters, WhatsApp, valid click-to-call, displayed phone/address, and the existing trial form without any new copy, facts, or claims.
- [ ] At 390x844 `/contact` has no edge-flush text, clipped control, bidi break, or horizontal overflow; primary contact actions are visible within the first viewport.
- [ ] `/karate-in-rishon-le-zion` and `/kata/` each show an existing-data CTA within the first 844px and retain the final CTA; no other content route gains the early duplicate.
- [ ] The Next badge is disabled only through supported `devIndicators: false`; diagnostics remain otherwise intact and no CSS/DOM suppression exists.
- [ ] Focused tests, TypeScript, canonical tests, temporary-mirror build, `git diff --check`, Hebrew equality, and independent visual review pass with no out-of-scope change.

## Implementation Notes
### Do:
- Preserve Hebrew by extracting/restoring exact existing byte sequences with asserted counts; build composition from existing components/data.
- Keep media activation and fallback behavior unchanged except for hero presentation CSS and the approved manifest ID.
- Prefer route predicates around the existing `TrialCta` seam over duplicated CTA markup.
### Don't:
- Write or retype Hebrew, use the masked `telHref` as a callable link, invent data, add assets/dependencies, use a Facebook iframe, fetch thumbnails, autoplay, hide the local fallback, or globally duplicate early CTAs.
- Treat build success or a self-review as independent visual acceptance.

## Testing Requirements
- Test Command: `node --test tests/premium-ui.test.mjs tests/media-restoration.test.mjs tests/navigation.test.mjs`; all three named suites must be discovered with zero failures; safe to repeat.
- Test Command: `npx tsc --noEmit`; expected zero TypeScript errors; safe to repeat.
- Test Command: `npm run test`; expected all `tests/*.test.mjs` suites discovered with zero failures; safe to repeat.
- Test Command: create a temporary `/tmp` mirror containing project source/config and a symlink to existing `node_modules`, then run `npm run build` there; expected successful static generation without changing live `.next` or the port-3000 process; safe to repeat.
- Test Command: use a temporary review runtime from the mirror, not deployment or replacement of the existing listener, to inspect `/`, `/contact`, `/karate-in-rishon-le-zion`, and `/kata/` at 1280px and exact 390x844. Record CTA/media/contact geometry, horizontal overflow, console errors, and initial provider requests without activating controls or submitting forms; stop the temporary runtime afterward; safe to repeat.
- Test Command: compare pre/post Hebrew-string/file hashes, run `git diff --check`, hash every allowlisted file plus protected 003, and inspect `git status --porcelain=v1`; expected byte equality for existing Hebrew, unchanged protected hash, and no out-of-scope change; safe to repeat.

## Verification Checklist (waoengineer Final Gate)
- [ ] **npm run build** — Run in the temporary mirror and attach exit status plus generated-route summary.
- [ ] **npm run test** — Attach focused and canonical discovery with zero failed tests.
- [ ] **Dev server smoke test** — Attach temporary-runtime HTTP 200, geometry, console/network, CTA, contact, and badge evidence for all four routes at both required viewports; do not touch the existing listener.
- [ ] **Evidence screenshots** — Attach one 1280px and one 390x844 screenshot for `/` and `/contact`, plus narrow 390x844 opening-view screenshots for both named core routes.

**Report Outcome:** Record focused_acceptance and release_health separately. Local implementation PASS requires every non-independent criterion above. Release health remains false until the independent visual review below returns PASS; deployment is not authorized.

### Escalation Routing (waoengineer decision)
After local PASS, report readiness for this independent contract; do not author, create, or dispatch it.

**Independent Visual Review Contract:** Adam creates one non-goal-mode `waouxtester` card only after the implementation card is formally done, using that concrete done implementation card as sole parent. Against a review URL serving the resulting bytes, inspect `/`, `/contact`, `/karate-in-rishon-le-zion`, and `/kata/` at 1280px and exact 390x844 without editing, deploying, activating media/contact controls, or submitting forms. Independently verify the acceptance criteria for hero composition, filled provider-inert initial media and full-width local fallback, contact shell/gutters/actions/form, above-fold core-page CTAs, no visible development badge, zero horizontal overflow, no alt-text leakage, and zero console errors/initial provider requests. Capture one narrow screenshot per route/viewport. PASS requires direct pixel/geometry/network evidence; deterministic mismatch is FAIL; BLOCKED is reserved for an inaccessible review runtime or missing formally done implementation parent.

If the task requires new Hebrew, assets, facts, provider access, form behavior, deployment, existing-listener replacement, or broader design-system work, report the exact boundary to waostrategy. Ordinary allowlisted code/test/style defects remain inside this run.

## Handoff Instructions for Hermes
1. Read this file completely and confirm `t_f5ca0452` is formally done and is the current card's sole parent.
2. Confirm every Files to Read path exists; capture status and verify all pre-task hashes before edits.
3. Re-check HEBREW-SAFETY before every write; type zero Hebrew and preserve existing strings byte-for-byte.
4. Modify/create only the exact allowlist and implement only the one observable outcome.
5. Keep correcting allowlisted local failures within the stated goal-mode budget without weakening acceptance.
6. Run every ordered check and collect actual temporary-runtime evidence within the prohibited-interaction boundaries.
7. Report changed files, stage outcomes, mapping/Hebrew/protected-history preservation, hashes, final status, and independent-review readiness.
8. Call `kanban_complete` only after local PASS. Use `kanban_block` only for a defined external/safety/approval/capability/architecture boundary, not an ordinary implementation defect.
9. Do not create or dispatch the independent verifier; Adam/orchestrator owns the later manual dispatch.
10. Do not deploy, run `deploy.sh`, commit, push, access providers, replace the existing listener, mutate historical handoffs/cards, or touch excluded files.
11. Only the executor reconciles this handoff's disposition; preserve all historical files, cards, events, runs, and comments unchanged.
