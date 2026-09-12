# Finish SKSU Compact Media Cards

WARNING - HEBREW-SAFETY: waoengineer types ZERO Hebrew bytes in this task. Preserve every existing Hebrew string byte-for-byte. Add no visible copy; reuse only existing runtime `title` values.

WARNING - EXECUTION SCOPE: one residual local media-card correction and the named checks only. No deployment, `deploy.sh`, commit, push, provider or thumbnail request, media playback, form/contact activation, new asset, historical handoff/card mutation, or broad UI retry is authorized.

## Metadata
- Task ID: 2026-09-11_009
- Target Agent: waoengineer
- Priority: P0-Critical
- Estimated Complexity: Simple
- Created By: waostrategy (Strategist, GPT-5.6 Sol)
- Created At: 2026-09-11T13:32:09+07:00
- Status: pending
- Contract Version: 3
- Dispatch Approved: yes for one future goal-mode `waoengineer` card after `t_17059ae6` is formally done and sole-writer availability is rechecked; use formally done implementation card `t_81419272` as sole parent
- Observable Outcome: The six provider-inert compact media placements on `/kata/` and `/karate-in-rishon-le-zion/` render as visibly intentional local-image media cards rather than blank-looking dark bars.
- Required Capabilities / Preflight Evidence: `waoengineer` is configured as `gpt-5.6-terra`, has a profile `.env`, and has `context_length: 1000000` at `/home/eitanya/wao/AGENTS.md:27-36`; this three-file scope and narrow screenshots fit comfortably.
- Accepted Dependencies / Board Parent IDs: `t_81419272` only; it is formally done and supplies the current compact-card implementation. Blocked `t_00a49d55` and done decision card `t_17059ae6` are immutable decision evidence, not dependency parents.
- Supersedes: no historical handoff or card; this subtracts the already-clean legal-page outcome and corrects only the residual compact-card visual failure
- Execution Class: outcome-owned-local
- Local Correction Budget: one goal-mode run, at most 30 minutes and 8 goal turns; repeat only named safe local checks until task-owned failures pass
- Automatic Redispatch: none for deterministic, dependency, capability, or protocol blocks

## Context
Current source and the six screenshots from `t_81419272` confirm that `/privacy` and `/accessibility` are clean, while the target media cards still read as dark placeholder bars with tiny duplicated fallback rows. The smallest safe release path is one three-file residual correction followed by one independent visual gate; blocked `t_00a49d55`, its unrelated contact-CSS history, and all broader accepted work remain untouched.

## Specification

### Requirements:
1. Before editing, read this handoff; cards `t_81419272`, `t_00a49d55`, and `t_17059ae6`; `app/_components/video-embed.tsx`; `app/_components/content-page.tsx`; the media selectors in `app/globals.css`; `tests/preserved-visual-defects.test.mjs`; `tests/media-restoration.test.mjs`; `tests/premium-ui.test.mjs`; and `tests/navigation.test.mjs`. Capture `git status --porcelain=v1` and verify the pinned hashes below. Hash drift is `BLOCKED`.
2. In `VideoEmbed` at `app/_components/video-embed.tsx`, change only the not-loaded `presentation === "compact"` rendering so the existing local brochure `Image`, existing runtime `title`, and existing load action form one clearly intentional visual media-card surface. Add no visible text. Keep the existing canonical watch fallback available before and after activation.
3. Preserve standard presentation byte-for-byte in behavior: homepage and non-target routes retain the existing initial 16:9 surface; explicit activation alone creates the privacy-host iframe; no autoplay, provider request, remote thumbnail, or media playback occurs initially.
4. In `app/globals.css`, change only selectors under `.video-embed--compact` and any new child class used exclusively by that compact surface. The local image must be visibly rendered as an `<img>`, not a CSS background; the title must remain readable without character-by-character wrapping; load and watch targets must each be at least 44px; and the initial card must not resemble an empty dark slab at 1280px or 390x844.
5. Keep each initial compact figure at or below 180 CSS pixels at 1280px and 160 CSS pixels at 390x844, with no horizontal overflow. After activation, the iframe may retain 16:9. Do not globally compress `.video-player`, loaded iframes, standard embeds, or the homepage hero.
6. Update only `tests/preserved-visual-defects.test.mjs` to assert that compact initial rendering includes the real local `Image` inside the load surface, remains route-limited to five Kata placements and one Rishon placement, stays provider-inert, and retains the canonical fallback and loaded 16:9 behavior. Preserve all existing assertions at equal or greater strength.
7. Preserve all non-media CSS bytes, including the current contact, legal, shell, hero, and responsive rules. Do not resolve or replay blocked `t_00a49d55`; its contact-CSS scope conflict remains immutable lineage rather than work for this residual card.
8. Run the ordered checks below. Report exact changed files, test/type/build/diff outcomes, figure and image geometry, initial provider-resource count, four media-route screenshots, pinned excluded-file hashes, final allowed-file hashes, and final `git status --porcelain=v1`.

### Constraints:
- Modify only `app/_components/video-embed.tsx`, `app/globals.css`, and `tests/preserved-visual-defects.test.mjs`.
- Do not modify `app/_components/content-page.tsx`, any route, legal/contact page, other test, manifest, content, asset, dependency, configuration, or staged work.
- Add no Hebrew, visible copy, asset, media mapping, external request, or provider behavior.
- Do not touch anything under `handoff/in-progress/`, `handoff/completed/`, or `handoff/failed/`; do not edit this pending handoff.
- No deployment, `deploy.sh`, commit, push, historical-card operation, existing-runtime replacement, media activation during screenshots, form submission, or contact action.

### Technical Details:
- Files to Modify: `app/_components/video-embed.tsx`; `app/globals.css`; `tests/preserved-visual-defects.test.mjs`
- Files to Create: none
- Files to Read: `app/_components/content-page.tsx`; `app/page.tsx`; `tests/media-restoration.test.mjs`; `tests/premium-ui.test.mjs`; `tests/navigation.test.mjs`; `package.json`; cards `t_81419272`, `t_00a49d55`, and `t_17059ae6`
- Dependencies: sole parent `t_81419272` formally done; decision card `t_17059ae6` formally done before dispatch; one shared-directory writer available. Pre-task SHA-256: `app/_components/video-embed.tsx` `3bfb962afacad5e9b8f60f005521f8ee38c4a6d72b3b4acb7f4d5bc73d2d3fab`; `app/globals.css` `1e60aa5df7403ac9a5da18784bbfc8372f83eaca6395898d09e551510d8bc5af`; `tests/preserved-visual-defects.test.mjs` `56b495230e1588605fd66c4250c458ba7c171e205c9cbcc571fbb04b5a166062`. Excluded-file SHA-256: `app/_components/content-page.tsx` `c01d4a5b0a91f3958634703b2d7771ec98eb7b2f8ed3f05c6ee2c7d709680b85`; `app/privacy/page.tsx` `eeace6c2b7d766457c0fad3dafcaecc06e363d33a7afff92a5650799c2efd485`; `app/accessibility/page.tsx` `0b9eaa6d31598021482853ae76360a95ea98858ae017057a9b6a9a891ae6478a`.

## Acceptance Criteria
- [ ] `/kata/` renders exactly five and `/karate-in-rishon-le-zion/` exactly one compact initial media card whose local `<img>`, title, and load affordance are visibly composed; no card reads as an empty dark placeholder.
- [ ] Six target cards remain within the viewport bounds, expose 44px load/watch targets, preserve readable titles and local fallback, and have zero horizontal overflow.
- [ ] Initial rendering makes zero provider or remote-thumbnail requests; explicit activation alone creates the existing privacy-host 16:9 iframe; autoplay remains absent.
- [ ] Homepage and non-target embeds, media mapping/order, legal pages, contact layout, shared shell, content, assets, configuration, and all excluded-file hashes remain unchanged.
- [ ] Focused tests, TypeScript, canonical tests, isolated build, temporary-runtime checks, `git diff --check`, scope diff, and independent visual verification all pass.
- [ ] No deployment, external control, form/contact action, historical mutation, broad retry, commit, or push occurs.

## Implementation Notes
### Do:
- Branch only inside `VideoEmbed`'s existing compact/not-loaded seam and use the already imported `Image` with `/assets/sksu-brochure.jpg`.
- Keep CSS changes selector-scoped to compact presentation and preserve the fallback anchor.
### Don't:
- Use a CSS background image, fetch YouTube thumbnails, add labels, hide the fallback, alter standard presentation, or clean unrelated CSS.
- Treat geometry, source assertions, or build success as visual PASS.

## Testing Requirements
- Test Command: `node --test tests/preserved-visual-defects.test.mjs tests/media-restoration.test.mjs tests/premium-ui.test.mjs tests/navigation.test.mjs`; expected all named suites discovered with zero failures; safe to repeat.
- Test Command: `npx tsc --noEmit`; expected zero TypeScript errors; safe to repeat.
- Test Command: `npm run test`; expected every discovered test to run with zero failures; safe to repeat.
- Test Command: create a temporary `/tmp` source/config mirror with a symlink to existing `node_modules`, then run `npm run build` there; expected successful static generation without changing shared `.next` or the existing listener; safe to repeat.
- Test Command: from the built mirror, start a temporary server on a verified unused port and inspect only `/kata/` and `/karate-in-rishon-le-zion/` through `http://100.102.160.114:<port>` at 1280px and exact 390x844. Without activation, capture four screenshots and record figure/image bounds, overflow, console errors, and provider/thumbnail request count; then stop the temporary server. Safe to repeat after task-owned changes.
- Test Command: run `git diff --check`; compare all excluded-file hashes above; verify `git diff -- app/globals.css` changes only compact-media selectors; inspect final `git status --porcelain=v1`. Expected no out-of-scope drift.

## Verification Checklist (waoengineer Final Gate)
- [ ] **npm run build** — Isolated temporary-mirror build succeeds; attach exit status and generated-route summary.
- [ ] **npm run test** — Focused and canonical suites report zero failures; attach actual discovery/output.
- [ ] **Dev server smoke test** — Both media routes return HTTP 200 at both viewports with the required figure/image geometry, zero overflow, and zero initial provider/thumbnail requests.
- [ ] **Evidence screenshots** — Attach four screenshots: both media routes at 1280px and exact 390x844, with media cards visible and no activation.

**Report Outcome:** Local implementation PASS requires every non-independent criterion above and exact scope preservation. `release_health` remains false until the independent visual gate below returns PASS; deployment is not authorized.

### Escalation Routing (waoengineer decision)
After local PASS, report readiness for one independent non-goal-mode `waouxtester` card; do not create or dispatch it. Adam uses the concrete formally done implementation card as sole parent. The verifier reads this handoff and implementation evidence, performs no edits or deployment, and inspects only `/kata/` and `/karate-in-rishon-le-zion/` at 1280px and exact 390x844 without activating media or controls. PASS requires direct screenshots and geometry/network evidence that all six initial cards visibly compose a real local image, title, and load affordance; none resembles a blank dark placeholder; titles do not wrap character-by-character; targets are at least 44px; figures stay within bounds with zero overflow; and no initial provider/thumbnail request, console error, or alt-text leakage occurs. It also confirms excluded-file hashes and the canonical test/build evidence. Deterministic visual mismatch is FAIL; BLOCKED is reserved for inaccessible runtime/evidence or missing capability. Report only; do not dispatch successors.

## Handoff Instructions for Hermes
1. Read this file completely and confirm `t_81419272` is the implementation card's sole parent and `t_17059ae6` is formally done.
2. Capture status and verify all pinned hashes before edits; hash drift is `BLOCKED`.
3. Modify only the three allowlisted files and only the compact/not-loaded visual seam; type zero Hebrew bytes.
4. Preserve all excluded files and non-media CSS bytes, including the contact rules associated with blocked `t_00a49d55`.
5. Keep correcting task-owned local failures inside the stated budget without weakening acceptance.
6. Run every ordered check and collect four non-activated media-route screenshots plus geometry/network evidence.
7. Call `kanban_complete` only after local PASS; use `kanban_block` only for a defined external, safety, approval, capability, architecture, or pre-task hash boundary.
8. Report independent-review readiness but do not create or dispatch the verifier.
9. Do not deploy, run `deploy.sh`, commit, push, access providers, activate media/forms/contact targets, replace the existing listener, or mutate historical files/cards.
10. Only the executor reconciles this handoff's disposition; preserve all prior lineage unchanged.
