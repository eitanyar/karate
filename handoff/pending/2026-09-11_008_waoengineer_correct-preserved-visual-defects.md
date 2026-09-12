# Correct Preserved SKSU Visual Defects

WARNING - HEBREW-SAFETY: waoengineer types ZERO Hebrew bytes in this task. Preserve every existing Hebrew string byte-for-byte. Legal-page edits must use asserted ASCII-only byte transformations around existing content; do not retype, reserialize, translate, or invent visible text.

WARNING - EXECUTION SCOPE: one outcome-owned local correction and the named checks only. Safe local checks may repeat without weakening assertions. No deployment, `deploy.sh`, commit, push, provider access, external media or thumbnail request, media activation/playback, form submission, contact activation, new copy/claims/assets, existing-runtime replacement, or historical handoff/card mutation is authorized.

## Metadata
- Task ID: 2026-09-11_008
- Target Agent: waoengineer
- Priority: P0-Critical
- Estimated Complexity: Moderate
- Created By: waostrategy (Strategist, GPT-5.6 Sol)
- Created At: 2026-09-11T11:52:57+07:00
- Status: pending
- Contract Version: 3
- Dispatch Approved: yes for one future goal-mode `waoengineer` card; create it only after rechecking sole-writer availability and use formally done `t_bd683618` as its sole parent
- Observable Outcome: The three visual defect classes preserved by `t_bd683618` are corrected: compact intentional initial media states on `/kata/` and `/karate-in-rishon-le-zion/`, plus readable shared-shell legal pages on `/privacy` and `/accessibility`.
- Required Capabilities / Preflight Evidence: `waoengineer` is configured as `gpt-5.6-terra`, its profile `.env` exists, and its real `context_length: 1000000` is recorded at `/home/eitanya/wao/AGENTS.md:27-36`; this six-file source/test scope, local command output, and six narrow screenshots fit comfortably.
- Accepted Dependencies / Board Parent IDs: `t_bd683618` only; it is formally done and terminalizes `evidence_recovery=PASS`, `visual_review=FAIL`, the four affected routes, and the three preserved defect classes
- Supersedes: none; cards `t_bd683618`, `t_8107fbe2`, `t_89e9c168`, their runs/logs, and all earlier handoffs remain immutable evidence
- Execution Class: outcome-owned-local
- Local Correction Budget: one goal-mode run, at most 45 minutes and 12 goal turns; repeat only the named safe local checks until task-owned failures pass
- Automatic Redispatch: none for deterministic, dependency, capability, or protocol blocks

## Context
Formal parent `t_bd683618` preserved three deterministic visual defects from the completed visual evidence: five dominant blank-looking media frames on `/kata/`, one equivalent frame on `/karate-in-rishon-le-zion/`, and missing shared shell/readable gutters on both legal routes. Current source confirms one reusable `VideoEmbed` seam and two standalone legal page modules, so one bounded correction can resolve the full preserved defect set without changing content, media mappings, or external behavior.

## Specification

### Requirements:
1. Before editing, read this handoff; formal parent `t_bd683618`; `handoff/completed/2026-09-11_007_waoverifier_terminalize-visual-verdict.md`; `/home/eitanya/.hermes/kanban/boards/sksu-redesign/logs/t_89e9c168.log:393-420`; every allowlisted source/test file; `app/page.tsx`; `app/_components/site-header.tsx`; `app/_components/site-footer.tsx`; `app/_lib/media.ts`; `content/media-manifest.json`; `package.json`; and relevant installed Next 15 App Router guidance under `node_modules/next/dist/docs/`. Confirm `t_bd683618` remains formally done and is the implementation card's sole parent.
2. Capture `git status --porcelain=v1` and verify the pre-task SHA-256 values in Technical Details. Treat the dirty shared worktree as immutable outside the allowlist. Hash drift before editing is `BLOCKED`; do not restore or overwrite another worker's bytes.
3. Extend `VideoEmbed` in `app/_components/video-embed.tsx` with an ASCII-only presentation contract that supports the existing standard presentation and a compact initial presentation. Before activation, compact presentation must be an intentional content card rather than a 16:9 dark/blank frame: use only the existing runtime `title`, existing local brochure asset, existing load action, and existing canonical watch fallback; keep the full component within 180 CSS pixels at 1280px and 160 CSS pixels at 390x844. After explicit activation, the existing privacy-host iframe may use 16:9 while the local fallback remains available. Standard presentation, including the homepage hero, must remain unchanged.
4. In `ContentPage` at `app/_components/content-page.tsx`, select compact presentation only when `page.route` is `/kata/` or `/karate-in-rishon-le-zion`. All five Kata placements and the one Rishon placement must use it; `/`, `/kihon/`, `/komita/`, and `/self-defense-exercise/` retain standard presentation. Preserve exact route-to-ID order, 16 placements/15 unique IDs, titles, provider-inert initial rendering, explicit keyboard-operable activation, no autoplay, privacy host, canonical watch URLs, and the full-width local fallback.
5. Update only the relevant media selectors in `app/globals.css`. Compact initial cards must have no dominant empty/dark 16:9 slab, no hidden or thumbnail-only fallback, no character-by-character title wrapping, at least 44px interactive targets, visible focus, and zero horizontal overflow at 1280px and exact 390x844. Do not globally compress loaded iframes or the standard/homepage presentation.
6. Compose `Privacy` in `app/privacy/page.tsx` and `Accessibility` in `app/accessibility/page.tsx` with the existing `SiteHeader` and `SiteFooter`, each using its exact current route for `currentPath`, and retain one `<main id="content">`. Add a shared ASCII class seam for an inner legal-content container; at 1280px its readable content width must not exceed 850 CSS pixels, and at exact 390x844 content must have at least 20 CSS pixels of inline gutter on each side with zero clipping or horizontal overflow.
7. Preserve both legal pages' metadata, element order, headings, paragraphs, list content, back link, and every visible string byte-for-byte. Apply imports and wrappers through asserted ASCII-only byte substitutions around existing bytes; compare the ordered Hebrew-bearing literal inventory before and after. Remove only the non-rendering ASCII cache-bust comment at `app/accessibility/page.tsx:2` if it becomes incidental to the safe transformation; otherwise preserve it.
8. Create `tests/preserved-visual-defects.test.mjs` with focused source-level assertions for: route-limited compact presentation; six affected placements via the unchanged manifest; standard homepage/default behavior; compact-before-activation versus 16:9-after-activation semantics; persistent local fallback and provider safety; shared header/footer/main/inner-container composition on both legal pages; legal max width/mobile gutters; and unchanged legal text inventories. Do not weaken existing tests or encode brittle whole-file formatting.
9. Run the ordered checks below. Report changed files, focused/type/canonical/build outcomes, media-card and legal-layout geometry at both viewports, initial provider request count, screenshots, Hebrew inventory equality, final hashes, protected handoff hash, and final `git status --porcelain=v1`.

### Constraints:
- Modify only `app/_components/video-embed.tsx`, `app/_components/content-page.tsx`, `app/privacy/page.tsx`, `app/accessibility/page.tsx`, and `app/globals.css`; create only `tests/preserved-visual-defects.test.mjs`.
- Do not modify `app/page.tsx`, other route/component modules, `content/media-manifest.json`, `app/_lib/media.ts`, existing tests, content records, assets, dependencies, or Next configuration.
- Preserve every existing Hebrew byte and all accepted mapping, navigation, metadata, CTA, focus, reduced-motion, provider-inert, and fallback behavior outside the named correction.
- No deployment, `deploy.sh`, commit, push, provider/external-control access, media activation/playback, remote thumbnail/media request, form/contact action, new visible text, process replacement, or historical handoff/card mutation.
- Do not touch anything under `handoff/in-progress/`, `handoff/completed/`, or `handoff/failed/`; this pending contract is executor-reconciled only after its own future run.

### Technical Details:
- Files to Modify: `app/_components/video-embed.tsx`; `app/_components/content-page.tsx`; `app/privacy/page.tsx`; `app/accessibility/page.tsx`; `app/globals.css`
- Files to Create: `tests/preserved-visual-defects.test.mjs`
- Files to Read: `handoff/completed/2026-09-11_007_waoverifier_terminalize-visual-verdict.md`; `/home/eitanya/.hermes/kanban/boards/sksu-redesign/logs/t_89e9c168.log:393-420`; `app/page.tsx`; `app/_components/site-header.tsx`; `app/_components/site-footer.tsx`; `app/_lib/media.ts`; `content/media-manifest.json`; `tests/media-restoration.test.mjs`; `tests/premium-ui.test.mjs`; `tests/navigation.test.mjs`; `package.json`; relevant installed Next documentation; board card `t_bd683618`
- Dependencies: sole parent `t_bd683618` formally done; one shared-directory writer available. Pre-task SHA-256: `app/_components/video-embed.tsx` `82927e079faf4614fb4640052f732bfcd9d4385bc7bdf345c9e850a7afde54b4`; `app/_components/content-page.tsx` `41ee31f841f0628e8e31414eb7baad5b76326a9c1a51ad3bdb7e8a7cc5c4aa14`; `app/privacy/page.tsx` `fdd0fa6afad5fb6dc8ef29c56234456658473b7c15bda906452a95e12442c386`; `app/accessibility/page.tsx` `3b1290d90163e3908dcc4ab484f2f487b496afda3d31ec85e56c142da6890a58`; `app/globals.css` `83435415881577a26722aee45ec35d33d1c14fa3525e8e3941c3090ccaf467fe`; protected completed handoff `4a679165acd62be2a92805f97c0fc062e9678caaff47c9b5aa190eae8a273fe3`.

## Acceptance Criteria
- [ ] `/kata/` renders exactly five compact intentional initial media cards and `/karate-in-rishon-le-zion/` exactly one; each stays within the stated viewport-specific block-size bound without a dominant blank 16:9 frame.
- [ ] The homepage and all non-target media routes retain standard presentation; exact media mapping/order, 16 placements/15 IDs, zero initial provider requests, explicit activation, no autoplay, privacy host, canonical watch fallback, titles, and persistent local fallback remain intact.
- [ ] `/privacy` and `/accessibility` each render the shared header/footer and one main/content container, with readable desktop line length, at least 20px mobile inline gutters, and zero clipping or horizontal overflow.
- [ ] Both legal pages preserve metadata, structure/content order, and all existing visible/Hebrew strings byte-for-byte; no new copy, fact, claim, link target, or asset is introduced.
- [ ] Focused tests, TypeScript, canonical tests, isolated build, temporary-runtime HTTP/geometry/network checks, `git diff --check`, Hebrew inventory comparison, and scope/hash checks pass with zero task-owned failures.
- [ ] No excluded file, historical artifact, provider, external control, form/contact target, deployment, repository history, or existing runtime is changed or activated.

## Implementation Notes
### Do:
- Keep presentation selection explicit at the existing `ContentPage` to `VideoEmbed` call seam and keep standard behavior the default.
- Make compactness state-aware: compact before activation, normal 16:9 only after the user explicitly instantiates the iframe.
- Wrap legal content using ASCII-only import/tag/class substitutions with asserted match counts; verify the preserved literal inventory before any final write.
### Don't:
- Remove approved placements, claim that a video is unavailable, fetch thumbnails, infer iframe pixel health, autoplay, hide the persistent fallback, or compact every video globally.
- Retype Hebrew, regenerate either legal module, introduce a generic page refactor, alter legal meaning/order, or treat source assertions/build success as independent visual acceptance.

## Testing Requirements
- Test Command: `node --test tests/preserved-visual-defects.test.mjs tests/media-restoration.test.mjs tests/premium-ui.test.mjs tests/navigation.test.mjs`; all four named suites must be discovered with zero failures and all existing assertions retained; safe to repeat.
- Test Command: `npx tsc --noEmit`; expected zero TypeScript errors; safe to repeat.
- Test Command: `npm run test`; expected every discovered `tests/*.test.mjs` suite to run with zero failures; safe to repeat.
- Test Command: create a temporary `/tmp` mirror containing project source/config and a symlink to existing `node_modules`, then run `npm run build` there; expected successful static generation without changing the shared `.next` directory or existing listener; safe to repeat.
- Test Command: from the built mirror, verify an unused port, start a temporary server bound to `0.0.0.0`, and inspect it through `http://100.102.160.114:<port>` at 1280px and exact 390x844. Without activating media or external controls, inspect `/kata/`, `/karate-in-rishon-le-zion/`, `/privacy`, and `/accessibility`; capture one screenshot per affected media route at each viewport and one screenshot per legal route at 390x844, record figure/content bounding boxes, document scroll width, console errors, and initial provider/thumbnail request count, then stop the temporary server. Safe to repeat after task-owned changes.
- Test Command: compare the pre/post ordered Hebrew-bearing literal inventory for both legal modules, run `git diff --check`, hash all five modified files plus the new test and protected completed handoff, and inspect `git status --porcelain=v1`; expected literal equality, protected hash equality, and no out-of-scope change; safe to repeat.

## Verification Checklist (waoengineer Final Gate)
- [ ] **npm run build** — Run in the temporary mirror and attach exit status plus generated-route summary.
- [ ] **npm run test** — Attach focused and canonical discovery with zero failed tests.
- [ ] **Dev server smoke test** — Attach temporary-runtime HTTP 200, media-card/legal-container geometry, zero-overflow, console, and initial-network evidence for all four affected routes at the required viewports.
- [ ] **Evidence screenshots** — Attach six narrow screenshots: `/kata/` and `/karate-in-rishon-le-zion/` at 1280px and 390x844, plus `/privacy` and `/accessibility` at 390x844; do not activate media, forms, or external targets.

**Report Outcome:** Record `focused_acceptance` and `release_health` separately. Local implementation PASS requires every non-independent criterion above, exact Hebrew/mapping/history preservation, and no excluded side effect. Release health remains false until the independent visual review below returns PASS; deployment is not authorized.

### Escalation Routing (waoengineer decision)
After local PASS, report readiness for the following independent contract; do not author, create, or dispatch it.

**Independent Visual Review Contract:** Adam creates one non-goal-mode `waouxtester` card only after this correction's implementation card is formally done, using that concrete done implementation card as sole parent. Against a review URL serving the resulting bytes, inspect `/kata/`, `/karate-in-rishon-le-zion/`, `/privacy`, and `/accessibility` at 1280px and exact 390x844 without editing, deploying, activating media/contact controls, submitting forms, or accessing providers. Prove that all six target media placements have compact intentional initial cards within the specified block-size bounds and no dominant blank frame; standard homepage/media behavior remains visually unchanged; both legal pages have the shared shell, readable maximum width, at least 20px mobile gutters, and no clipping/overflow; and no alt-text leakage, console error, or initial provider/thumbnail request appears. Capture one narrow screenshot per named route/viewport. PASS requires direct pixel/geometry/network evidence; deterministic mismatch is FAIL; BLOCKED is reserved for an inaccessible review runtime, missing concrete done parent, or unavailable required capability. Report only; do not dispatch successors.

If correction requires new Hebrew, assets, claims, changed media mappings, provider access, legal-content restructuring, or broader design-system work, report the exact boundary to waostrategy. Ordinary allowlisted code, test, type, build, CSS, or temporary-runtime defects remain inside this run.

## Handoff Instructions for Hermes
1. Read this file completely and confirm `t_bd683618` is formally done and is the current implementation card's sole parent.
2. Confirm every Files to Read path exists; capture status and verify all pinned hashes before edits.
3. Re-check HEBREW-SAFETY before every write; use asserted ASCII-only transformations around existing legal-page bytes and preserve every Hebrew literal exactly.
4. Modify/create only the exact allowlist and correct only the three preserved defect classes.
5. Keep correcting task-owned local failures within the stated goal-mode budget without weakening acceptance.
6. Run every ordered check and collect actual temporary-runtime evidence within the prohibited interaction and provider boundaries.
7. Report changed files, stage outcomes, geometry/network/screenshots, Hebrew/mapping/protected-history preservation, hashes, final status, and independent-review readiness.
8. Call `kanban_complete` only after local PASS. Use `kanban_block` only for a defined external/safety/approval/capability/architecture boundary, not an ordinary implementation defect.
9. Do not create or dispatch the independent verifier; Adam/orchestrator owns the later manual dispatch.
10. Do not deploy, run `deploy.sh`, commit, push, access providers, activate media/forms/contact targets, replace the existing listener, mutate historical handoffs/cards, or touch excluded files.
11. Only the executor reconciles this handoff's disposition; preserve every historical file, card, event, run, and comment unchanged.
