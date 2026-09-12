# Finish SKSU Live Development Site

WARNING - HEBREW-SAFETY: waoengineer types ZERO Hebrew bytes in this task. Preserve existing visible strings byte-for-byte and reference Hebrew-bearing values only through their existing file/runtime seams.

WARNING - EXECUTION SCOPE: one outcome-owned source-and-development-runtime recovery. Safe local checks and the explicitly authorized project-owned port-3000 restart may repeat inside the correction budget. No deployment, `deploy.sh`, commit, push, new copy, new media ID, external media download, form submission, contact activation, provider write, credential access, or historical handoff/card mutation is authorized.

## Metadata
- Task ID: 2026-09-11_010
- Target Agent: waoengineer
- Priority: P0-Critical
- Estimated Complexity: Moderate
- Created By: waostrategy (Strategist, GPT-5.6 Sol)
- Created At: 2026-09-11T17:08:53+07:00
- Status: pending
- Contract Version: 3
- Dispatch Approved: yes for one future goal-mode `waoengineer` card after sole-writer recheck; use planning card `t_c8340ba5` as sole parent
- Observable Outcome: `http://100.102.160.114:3000` serves the complete approved SKSU site with working JavaScript and real visible YouTube players for every approved placement, not repeated brochure cards.
- Required Capabilities / Preflight Evidence: `waoengineer` uses `gpt-5.6-terra` with `context_length: 1000000` at `/home/eitanya/wao/AGENTS.md:27-36`; the five-file source/test scope, one controlled dev-runtime restart, generated-route asset matrix, and narrow browser evidence fit comfortably.
- Accepted Dependencies / Board Parent IDs: planning card `t_c8340ba5` formally done before dispatch; approved media manifest and accepted source lineage through done cards `t_d1586bee`, `t_dcb571ea`, and `t_73c8d967`; current owner direction supersedes their brochure-card presentation decision
- Supersedes: only the product presentation and non-activated review contract in `handoff/completed/2026-09-11_009_waoengineer_finish-compact-media-cards.md`; preserve that handoff and all cards as immutable history
- Execution Class: outcome-owned-local
- Local Correction Budget: one goal-mode run, at most 45 minutes and 12 goal turns; keep task-owned source, test, build, cache, and authorized dev-runtime corrections in this run
- Automatic Redispatch: none for deterministic, dependency, capability, or protocol blocks

## Context
Current source contains the owner-approved 16 placements/15 YouTube IDs, navigation, content, legal pages, contact surface, and responsive shell. Fresh independent evidence shows two current failures: `VideoEmbed` intentionally repeats `/assets/sksu-brochure.jpg` twice per compact placement until activation, and the active port-3000 development server returns HTTP 404 for its requested `main-app.js`, `app-pages-internals.js`, `app/kata/page.js`, and `polyfills.js`, so clicking a load surface creates no iframe. Finish the approved site rather than retrying the obsolete brochure-card contract.

## Specification

### Requirements:
1. Before editing, read this handoff; cards `t_d1586bee`, `t_dcb571ea`, `t_73c8d967`, and `t_c8340ba5`; `app/_components/video-embed.tsx`; `app/_components/content-page.tsx`; media selectors in `app/globals.css`; `app/page.tsx`; `app/trial-form.tsx`; `app/_components/mobile-navigation.tsx`; `app/_lib/media.ts`; `content/media-manifest.json`; all seven tests; `package.json`; `next.config.mjs`; and relevant installed Next 15 App Router documentation. Capture `git status --porcelain=v1`, the port-3000 listener PID tree/user/cwd/cmdline, and current allowlisted hashes.
2. In `VideoEmbed` at `app/_components/video-embed.tsx`, replace the activation-dependent brochure surface with a real, immediately rendered, titled `https://www.youtube-nocookie.com/embed/${videoId}` iframe for every approved placement. Use `loading="lazy"`, preserve ID validation and `allowFullScreen`, add no autoplay query or permission, and retain one canonical watch-link fallback using the existing runtime `title` only.
3. Remove all brochure rendering from `VideoEmbed`. A video figure must contain no `/assets/sksu-brochure.jpg`, `video-compact-image`, duplicated image, poster imitation, or click-to-instantiate state. Do not delete the brochure asset because it is historical staged input outside this task; simply stop using it as video UI.
4. Preserve the exact `content/media-manifest.json` mapping: 16 placements, 15 unique IDs, existing order, and existing homepage ID. Preserve `getVideosForRoute` validation and fail-closed behavior. Do not add, remove, replace, probe, or download media.
5. In `ContentPage` at `app/_components/content-page.tsx`, keep the approved route seam but compose all returned videos inside one explicit `video-gallery` container. `/kata/`, `/kihon/`, and `/komita/` must use a balanced two-column desktop gallery and one-column mobile gallery; single-video routes remain full-width. Preserve content order, early/final CTAs, related links, and all existing visible strings.
6. In `app/globals.css`, remove obsolete load-surface, compact-brochure, and duplicate fallback-image presentation rules only where no longer used. Style `.video-gallery` and `.video-embed` so every iframe is visibly 16:9, each card has a readable title fallback and focus treatment, multi-video pages are compact but not cropped, desktop/mobile layout is intentional, and no route gains horizontal overflow. Preserve homepage hero, shared shell, contact, legal, navigation, and unrelated CSS behavior.
7. Update `tests/media-restoration.test.mjs` and `tests/preserved-visual-defects.test.mjs` to assert real initial privacy-host iframes, `loading="lazy"`, exact mappings/order, no autoplay, no brochure or load-state UI inside `VideoEmbed`, one canonical fallback per placement, and the route-aware responsive gallery. Remove assertions that require provider-inert initial rendering or the superseded compact brochure card; preserve every unrelated assertion at equal strength.
8. After focused checks, build in an isolated `/tmp` mirror linked to existing `node_modules`. Do not build into the shared `.next` while port 3000 is active.
9. Repair the active development runtime only after confirming the listener tree is owned by the current user, every process cwd is `/home/eitanya/karate`, its command is the project `next dev --hostname 0.0.0.0 --port 3000`, no other writer/runtime task is active, and the source checks/build pass. Stop only that verified process tree, remove only the generated `/home/eitanya/karate/.next` cache, and start the same project command on port 3000. Never use `deploy.sh`, kill unrelated Next processes, or alter source during process cleanup.
10. Enumerate every generated public HTML route from the successful current build rather than asserting a stale fixed count, then verify each on both `http://127.0.0.1:3000` and `http://100.102.160.114:3000`. Parse every same-origin `/_next/` script and stylesheet URL including query strings; each unique requested URL must return HTTP 200, a non-empty non-HTML body, and the expected JavaScript/CSS content type. Any 404 or HTML fallback is task-local runtime failure, not PASS.
11. In a fresh browser context against the Tailscale URL, verify `/kata/` shows exactly five real YouTube iframes with the exact mapped privacy-host URLs before interaction and zero brochure images; `/karate-in-rishon-le-zion` shows exactly one; `/`, `/kihon/`, `/komita/`, and `/self-defense-exercise/` match manifest counts; the mobile menu opens/closes; and client-side form state can hydrate without submitting or opening WhatsApp. Record console errors, failed same-origin requests, iframe/load/title geometry, and horizontal overflow at 1280px and exact 390x844.
12. Capture final screenshots for `/`, `/kata/`, `/kihon/`, `/komita/`, `/self-defense-exercise/`, `/karate-in-rishon-le-zion`, and `/contact` at 1280px and 390x844, with `/kata/` media visible. Report changed files, all check outputs, process replacement evidence, two-host route/asset matrix, iframe counts/URLs as non-sensitive IDs, browser evidence, final hashes, and final `git status --porcelain=v1`.

### Constraints:
- Modify only `app/_components/video-embed.tsx`, `app/_components/content-page.tsx`, `app/globals.css`, `tests/media-restoration.test.mjs`, and `tests/preserved-visual-defects.test.mjs`.
- Do not modify content, media IDs, route modules, page copy, legal/contact modules, assets, dependencies, Next configuration, other tests, staged input, or historical handoffs/cards.
- Preserve every existing Hebrew byte. Add no visible copy, claim, image, external download, provider write, autoplay, form/contact action, credential access, deployment, commit, or push.
- The only process mutation authorized is replacement of the positively identified project-owned port-3000 Next dev tree after source/build PASS. Leave the separate port-3101 process and every unrelated process untouched.
- Do not touch anything under `handoff/in-progress/`, `handoff/completed/`, or `handoff/failed/`; only the executor reconciles this pending file.

### Technical Details:
- Files to Modify: `app/_components/video-embed.tsx`; `app/_components/content-page.tsx`; `app/globals.css`; `tests/media-restoration.test.mjs`; `tests/preserved-visual-defects.test.mjs`
- Files to Create: none
- Files to Read: `app/page.tsx`; `app/trial-form.tsx`; `app/_components/mobile-navigation.tsx`; `app/_lib/media.ts`; `content/media-manifest.json`; all tests; `package.json`; `next.config.mjs`; installed Next 15 docs; cards `t_d1586bee`, `t_dcb571ea`, `t_73c8d967`, and `t_c8340ba5`
- Dependencies: one sole writer; planning parent `t_c8340ba5` formally done; current SHA-256 pins: `video-embed.tsx` `b91cb525a101824d1f8f679f34c33f2abc7a0c990492174e8dfbf23b9aa8e031`; `content-page.tsx` `c01d4a5b0a91f3958634703b2d7771ec98eb7b2f8ed3f05c6ee2c7d709680b85`; `globals.css` `96d226a8f5391ec4d91ea54877ffd79eaa751354a6d204db2d2c86c144a2817a`; `media-restoration.test.mjs` `78f05d4875e8239e7eedc4b2a583011845575fdeeb4739ebb0687ad2f3c329b8`; `preserved-visual-defects.test.mjs` `94a5221ada34dbeccd9afce3b94567737457cd7125721b5d95bf50374faf3ad3`; manifest `58d323cfe41cb37bbc0bbf48995cf3153138c2c092a686f035eb76f821ae8c8b`

## Acceptance Criteria
- [ ] All 16 approved placements render as visible, titled, lazy privacy-enhanced YouTube iframes without activation; no video card renders or repeats the brochure.
- [ ] Exact route/ID order and the 15-unique-ID contract remain unchanged; no autoplay, remote thumbnail, new provider, media download, or unapproved ID appears.
- [ ] Multi-video routes use a polished two-column desktop/one-column mobile gallery; single videos and the homepage remain proportionate, readable, focus-visible, and overflow-free.
- [ ] Every generated public HTML route returns HTTP 200 on loopback and Tailscale, and every emitted same-origin framework script/stylesheet request returns valid HTTP 200 bytes with no 404 or HTML fallback.
- [ ] Browser hydration works on the Tailscale runtime: mobile navigation changes state, the form client bundle is live without submission, and browser console/same-origin network errors are zero.
- [ ] Focused tests, TypeScript, canonical tests, isolated build, `git diff --check`, scope/hash checks, runtime restart, two-host asset matrix, and browser screenshots pass.
- [ ] No owner input is required for this approved-data finish. Unapproved photography, new claims, schedules, pricing, and deployment remain outside scope and do not justify placeholders.

## Implementation Notes
### Do:
- Prefer a server-renderable iframe component with no client state when the accepted behavior does not require activation.
- Keep route mapping centralized and use a gallery wrapper at the shared content seam.
- Treat the current chunk 404s as a runtime integrity defect and verify the exact URLs emitted by current HTML after restart.
### Don't:
- Reuse the brochure as a thumbnail, preserve obsolete click-to-load behavior, fetch YouTube thumbnails, change IDs, hide a failed player behind a decorative card, or stop after static tests.
- Restart port 3000 before ownership checks and source/build PASS, touch port 3101, deploy, or treat a screenshot as proof that JavaScript assets load.

## Testing Requirements
- Test Command: `node --test tests/media-restoration.test.mjs tests/preserved-visual-defects.test.mjs`; expected named suites discovered with zero failures and the new real-player/gallery contract asserted; safe to repeat.
- Test Command: `npx tsc --noEmit`; expected zero errors; safe to repeat.
- Test Command: `npm run test`; expected every `tests/*.test.mjs` suite discovered with zero failures; safe to repeat.
- Test Command: isolated `/tmp` mirror `npm run build` with existing `node_modules`; expected every currently generated route to complete with zero build/type failure without touching shared `.next`; record actual discovery rather than a fixed total; safe to repeat.
- Test Command: `git diff --check` plus allowlist/hash review; expected no out-of-scope source drift; safe to repeat.
- Test Command: after the bounded port-3000 recovery, run the two-host generated-route HTTP and full emitted-framework-asset matrix; expected zero non-200, empty, HTML-fallback, or content-type mismatches; safe to repeat while the verified runtime remains owned by this task.
- Test Command: fresh-browser Tailscale verification at 1280px and exact 390x844 for the seven named visual routes and client hydration behaviors; expected exact iframe counts, no brochure in video figures, working mobile menu/form hydration without external action, zero overflow, zero same-origin request failure, and zero console error; safe to repeat without playback/submission.

## Verification Checklist (waoengineer Final Gate)
- [ ] **npm run build** — Isolated build succeeds for every discovered generated route; attach actual output.
- [ ] **npm run test** — Focused and canonical suites discover all named tests and report zero failures; attach output.
- [ ] **Dev server smoke test** — Recovered port 3000 passes both-host generated-route and complete same-origin framework-asset checks, exact iframe mapping, mobile-menu hydration, and non-submitting form hydration.
- [ ] **Evidence screenshots** — Attach 14 screenshots covering the seven named routes at both viewports, including visible real players on `/kata/`.

**Report Outcome:** `focused_acceptance=PASS` requires the source, test, build, runtime, asset, hydration, and screenshot criteria above. `release_health` remains false until the independent verification below returns PASS. Deployment is not authorized.

### Escalation Routing (waoengineer decision)
After local PASS, report readiness for one independent acceptance turn; do not create or dispatch it. Adam creates one non-goal-mode `waouxtester` card with the concrete done implementation card as sole parent. It reads this handoff and implementation evidence, edits nothing, and independently inspects `http://100.102.160.114:3000` in fresh desktop/mobile browser contexts. PASS requires all seven visual routes to be coherent and overflow-free; exact real iframe counts/IDs and no brochure within any video figure; all same-origin page assets 200/non-empty/non-HTML; zero console/request errors; working mobile-menu hydration; non-submitting form hydration; and screenshots showing the supplied content, navigation, images, and YouTube players. A deterministic mismatch is FAIL with one finite route/selector/request defect list. BLOCKED is reserved for inaccessible runtime or missing capability.

If that independent turn returns PASS, the third orchestrator turn records final local release acceptance and preserves deployment for Eitan. If it returns FAIL, the third orchestrator turn creates one goal-mode `waoengineer` correction from the finite defect list and one dependency-linked read-only recheck; no new strategy card, broad redesign, stale handoff replay, or owner input is needed unless the verifier identifies a genuinely new content/right/architecture decision.

## Handoff Instructions for Hermes
1. Read this file completely and confirm `t_c8340ba5` is formally done and is the card's sole parent.
2. Recheck sole-writer availability, source hashes, status, and port-3000 ownership before edits or process action.
3. Modify only the five allowlisted files, type zero Hebrew bytes, and implement the real-player/gallery outcome.
4. Keep task-owned corrections inside this goal-mode run; do not weaken acceptance.
5. Run source tests, typecheck, canonical tests, isolated build, and scope checks before the authorized runtime recovery.
6. Replace only the verified project-owned port-3000 dev tree/cache, then run the complete two-host route/asset and fresh-browser matrices.
7. Call `kanban_complete` only after every local criterion passes. Use `kanban_block` only for an external, safety, ownership, capability, or architecture boundary.
8. Report exact evidence and independent-review readiness; do not create or dispatch the verifier.
9. Do not deploy, run `deploy.sh`, commit, push, download media, access credentials, submit forms, open contacts, mutate historical files/cards, or touch port 3101.
10. Only the executor reconciles this pending handoff's disposition.
