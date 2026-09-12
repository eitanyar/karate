# Accept SKSU Union Mark Visuals

WARNING - HEBREW-SAFETY: This is read-only acceptance. Type zero Hebrew bytes and preserve every repository byte.

WARNING - EXECUTION SCOPE: read-only board, log, source, local-check, build-mirror, HTTP, browser, console, and screenshot verification only. Use only the existing live endpoint `http://100.102.160.114:3000/` for network access. No source, test, content, asset, configuration, or handoff edits; no form submission, link/button/media activation, provider access, credentials, process replacement, deployment, `deploy.sh`, commit, push, or historical-card mutation is authorized.

## Metadata
- Task ID: 2026-09-12_002
- Target Agent: waouxtester
- Priority: P0-Critical
- Estimated Complexity: Simple
- Created By: waostrategy (Strategist, GPT-5.6 Sol)
- Created At: 2026-09-12T21:28:57+07:00
- Status: pending
- Contract Version: 3
- Dispatch Approved: yes after planning card `t_b7ffd951` is formally done; Adam must create one non-goal-mode `waouxtester` card with `t_b7ffd951` as its sole parent
- Observable Outcome: Fresh desktop and mobile evidence independently accepts or rejects the preserved SKSU union mark as a separate uncropped trial-section panel while confirming local gates, clean browser state, and zero repository drift.
- Required Capabilities / Preflight Evidence: `waouxtester` must have terminal and browser/screenshot access that can set exact CSS viewports, inspect rendered geometry and console state, write screenshots only under `/tmp`, and call Kanban outcome tools. Its real `context_length: 1000000` is recorded at `/home/eitanya/wao/AGENTS.md:110-123`; this single route, two-view screenshot, and local-check payload is comfortably below capacity.
- Accepted Dependencies / Board Parent IDs: formally done planning card `t_b7ffd951` as the successor card's sole parent; blocked implementation card `t_a5d21025`, run 48, its comment, and its log are immutable evidence to inspect, not dependency parents
- Supersedes: only the missing screenshot acceptance gate from blocked card `t_a5d21025`; that card, run 48, comments, and log remain blocked and immutable
- Execution Class: read-only-repeatable
- Local Correction Budget: no correction is authorized; one evidence pass, at most 25 minutes and 8 turns
- Automatic Redispatch: none for deterministic, dependency, capability, or protocol blocks

## Context
Blocked card `t_a5d21025` completed its allowlisted implementation and reported PASS for the focused test, TypeScript, canonical tests, diff check, isolated build, live HTTP, and browser diagnostics, but its required headless screenshot command was denied. This successor must not accept or rerun that blocked task; it independently closes only the missing visual gate against the existing Tailscale runtime while preserving all implementation and lineage evidence.

## Specification

### Requirements:
1. Read this handoff, planning card `t_b7ffd951`, blocked card `t_a5d21025` in full, run 48, its complete comment thread, and `/home/eitanya/.hermes/kanban/boards/sksu-redesign/logs/t_a5d21025.log`. Confirm `t_a5d21025` is still formally `blocked`; do not retry, resume, unblock, complete, comment on, or otherwise mutate it.
2. Before browser work, capture `git status --porcelain=v1`, hash all files under `public/assets/`, and verify these pinned SHA-256 values: `app/page.tsx` `35a545705546637b2aec5d3b9c264c13a29abb1c9464f059b5b46fddee9fb026`; `app/globals.css` `d5511d284412d45fdb113f6ffb7f4f6ec61df001082e3bd56259515366b68e6d`; `public/assets/sksu-union-mark-original.jpg` `6dbe53adb2da206442ab532d1998a20cb0176284ec2329b4c9068ddbebba6f97`; `tests/trial-union-mark.test.mjs` `bc5534504d78857b9249a7c8be1dc1f3f2171c23623b301aaeb097ce33994012`; `package.json` `7e4f5e5ab801992b0b2f63e77a3e5edce6ed09dda2b8ac90a4507b1c94fdc7f0`; blocked log `7b26487837734d4f4be382679323e50a2a99c16fee5cbdef16f1dea8cdee2406`. Confirm `tests/trial-brochure.test.mjs` is absent. Any mismatch is deterministic `FAIL` for strict-scope drift; do not restore or edit files.
3. Corroborate the already-passed local evidence by running, in order, `node --test tests/trial-union-mark.test.mjs`, `npx tsc --noEmit`, `npm run test`, and `git diff --check`. The focused named test must be discovered and pass; canonical tests must report zero failures. Do not assert a stale total count.
4. Create one disposable mirror under `/tmp`, excluding `.git`, `.next`, `node_modules`, and `tsconfig.tsbuildinfo`; symlink the repository's existing `node_modules`; run `npm run build` in the mirror without package installation or network access; then remove the mirror. Never run the build in the repository and never replace the existing port-3000 process.
5. Create `/tmp/sksu-union-mark-acceptance-${HERMES_KANBAN_TASK}/`. Using browser tooling with exact CSS viewports, open only `http://100.102.160.114:3000/#trial`, first at 1440x900 and then in a fresh page/context at 390x844. Do not submit or focus the form, click any control, activate links/contact/media, or navigate to any other host. A normal GET for this page and its same-origin assets is authorized; every other network destination is prohibited.
6. Capture fresh PNG evidence for both viewports under that directory as `desktop-1440x900.png` and `mobile-390x844.png`. Position or use full-page capture so each artifact clearly shows the trial form and the complete union-mark panel; retain proof that the rendering viewport was exactly 1440x900 or 390x844 even if a full-page PNG is taller than its viewport. Do not reuse screenshots from run 48 or any historical task.
7. At 1440x900, inspect pixels, DOM ancestry, and bounding rectangles. PASS requires `aside.trial-union-mark` to be a distinct sibling of `.trial-content`, a separate square panel beside the trial content/form, with the complete source mark visible, contained, and not cropped; the panel and `.trial-form` rectangles must not overlap; the mark must not be a form ancestor/descendant, CSS background, watermark, pseudo-element, or overlay; and the solid form must remain readable and visually primary.
8. At 390x844, inspect pixels, DOM order, computed geometry, and horizontal overflow. PASS requires the complete square union-mark panel to appear below the form, with its top at or after the form's bottom in rendered flow, no overlap, no cropping, and no horizontal page overflow. The form must remain solid, readable, and unchanged in behavior; do not test behavior by interaction.
9. For each fresh page/context, collect console output from navigation through capture and inspect the rendered surface plus document/open-shadow-root state for a Next.js issue badge or development error indicator. PASS requires zero console errors, uncaught exceptions, unhandled rejections, failed same-origin resource loads, hydration errors/warnings, or visible/DOM issue badge. Record non-error informational messages separately; do not treat an empty console snapshot alone as badge proof.
10. After all checks, re-hash the pinned paths and all `public/assets/`, verify `tests/trial-brochure.test.mjs` remains absent, and compare `git status --porcelain=v1` byte-for-byte with the preflight capture. Repository drift is `FAIL`; do not repair it. Screenshots under `/tmp` and the removed build mirror are the only allowed filesystem side effects.
11. On full PASS, call `kanban_complete` on the new acceptance card with `visual_acceptance=PASS`, `local_evidence=PASS`, `strict_scope=PASS`, both viewport values, console/issue-badge results, both screenshot paths in `artifacts`, the immutable blocked lineage ID, and exact final `git status --porcelain=v1` output. State that `t_a5d21025` remains blocked historical evidence and that deployment remains unauthorized.
12. A deterministic product, geometry, visual, console, local-check, hash, or scope mismatch is `FAIL`: record the failed criterion and evidence through `kanban_complete` with `visual_acceptance=FAIL`, without editing or dispatching a correction. Use `kanban_block(kind="capability")` only when the required exact-viewport capture, screenshot inspection, console/issue-badge inspection, board/log access, or live endpoint is unavailable; report the missing capability and do not infer PASS or FAIL. A denied browser/screenshot command is capability-block evidence and must not be retried by another mechanism in the same run.

### Constraints:
- Files to modify or create in the repository: none. Temporary build and screenshot files under `/tmp` only.
- `t_a5d21025`, run 48, its comment, and its log are immutable blocked evidence; this successor cannot convert or relabel their formal outcome.
- Use no network host except `100.102.160.114:3000`; do not redownload the supplied image or install packages.
- Do not submit/focus forms, click controls, follow links, activate contacts/media, access providers or credentials, start/stop servers, deploy, run `deploy.sh`, commit, push, stage, restore, or edit.
- Preserve all Hebrew and mixed-script bytes without quoting or retyping page copy in reports.

### Technical Details:
- Files to Modify: none
- Files to Create: none in the repository; `/tmp/sksu-union-mark-acceptance-${HERMES_KANBAN_TASK}/desktop-1440x900.png` and `/tmp/sksu-union-mark-acceptance-${HERMES_KANBAN_TASK}/mobile-390x844.png` are required temporary evidence artifacts
- Files to Read: this handoff; `app/page.tsx`; `app/globals.css`; `tests/trial-union-mark.test.mjs`; `package.json`; `public/assets/sksu-union-mark-original.jpg`; card `t_b7ffd951`; blocked card `t_a5d21025`, run 48, comment thread, and `/home/eitanya/.hermes/kanban/boards/sksu-redesign/logs/t_a5d21025.log`
- Dependencies: new card has formally done `t_b7ffd951` as sole parent; existing runtime at `http://100.102.160.114:3000/` is reachable; exact-viewport browser capture and console inspection are available; repository dependencies already exist locally

## Acceptance Criteria
- [ ] `t_a5d21025` remains formally blocked and every named historical record is read-only.
- [ ] Pinned implementation/log hashes, full asset manifest, stale-test absence, and exact repository status match before and after verification.
- [ ] Focused test, TypeScript, canonical tests, `git diff --check`, and fresh isolated offline build pass with zero failures.
- [ ] Fresh 1440x900 evidence proves a separate, complete, uncropped, non-overlapping union-mark panel beside the solid readable form/content.
- [ ] Fresh 390x844 evidence proves the complete square panel is below the form in rendered flow, uncropped, non-overlapping, and free of horizontal overflow.
- [ ] Both page loads have zero console/resource/hydration errors and no visible or DOM/open-shadow-root Next.js issue badge.
- [ ] Exactly zero repository/source/process/provider/external-control/deployment mutations occur; both screenshots are attached from `/tmp` on PASS or deterministic FAIL.
- [ ] Outcome is formally recorded as PASS, FAIL, or capability BLOCKED using Requirement 12 without dispatching any successor.

## Implementation Notes
### Do:
- Distinguish current independent observations from run 48 worker self-report.
- Inspect both pixels and computed DOM geometry; neither source assertions nor screenshots alone prove the full outcome.
- Keep the two screenshot files available until `kanban_complete` uploads them as artifacts.
### Don't:
- Resume or rerun blocked card `t_a5d21025` or reuse its denied command/output as acceptance.
- Fix code, change viewport requirements, weaken checks, use another host, or claim deployment/release authorization.
- Treat a missing screenshot, inaccessible console, or denied capture command as product PASS or deterministic product FAIL.

## Testing Requirements
- Test Command: `node --test tests/trial-union-mark.test.mjs`; expected named focused test discovered with zero failures; safe to repeat read-only.
- Test Command: `npx tsc --noEmit`; expected zero TypeScript errors; safe to repeat read-only.
- Test Command: `npm run test`; expected every discovered `tests/*.test.mjs` test to run with zero failures; safe to repeat read-only.
- Test Command: `git diff --check`; expected exit zero; safe to repeat read-only.
- Test Command: create a fresh `/tmp` mirror excluding `.git`, `.next`, `node_modules`, and `tsconfig.tsbuildinfo`, symlink existing `node_modules`, and run `npm run build` there; expected successful build with no repository or network mutation; safe once in this run.
- Browser Check: exact 1440x900 and 390x844 fresh contexts at `http://100.102.160.114:3000/#trial`; capture the two named PNGs and evaluate Requirements 7-9 without interaction; one pass per viewport.
- Preservation Check: compare pinned hashes, full `public/assets/` hash manifest, stale-test absence, and `git status --porcelain=v1` before/after; expected exact preservation.

## Verification Checklist (waoengineer Final Gate)
- [ ] **npm run build** - Fresh temporary-mirror build succeeds without touching repository build state; attach exit status.
- [ ] **npm run test** - Focused and canonical checks pass with named discovery and zero failures; attach output.
- [ ] **Dev server smoke test** - Existing Tailscale endpoint only returns and renders the homepage at both exact viewports; do not start, stop, or replace a server.
- [ ] **Evidence screenshots** - Attach fresh desktop 1440x900 and mobile 390x844 trial-section evidence from the required `/tmp` paths.

**Report Outcome:** `visual_acceptance=PASS` requires every local, scope, browser, geometry, screenshot, console, and issue-badge criterion above. Any reproducible mismatch is `visual_acceptance=FAIL`, while `BLOCKED` is reserved only for the exact missing capability/access boundaries in Requirement 12. `t_a5d21025` remains blocked in every outcome; no outcome authorizes deployment.

### Escalation Routing (waoengineer decision)
On PASS, report independent acceptance to waostrategy through Adam; do not dispatch release or deployment. On FAIL, report the exact failed criterion, viewport, and non-sensitive evidence to waostrategy for a separately authorized decision; do not fix or author a successor. On capability BLOCKED, name the unavailable terminal/browser/board/endpoint capability and required operator resolution; no automatic retry or fallback capture is authorized.

## Handoff Instructions for Hermes
1. Read this file completely and confirm formally done `t_b7ffd951` is the new card's sole parent.
2. Read blocked card `t_a5d21025`, run 48, its complete comment/log evidence, and current named files without mutating history.
3. Capture baseline status/hashes, then run the ordered read-only local checks and isolated offline build.
4. Use only the existing Tailscale endpoint; capture and inspect both exact viewport states without any interaction or external navigation.
5. Recheck hashes/status and preserve the two screenshot artifacts until formal outcome recording.
6. Call `kanban_complete` for deterministic PASS or FAIL; call `kanban_block(kind="capability")` only for the stated capability/access boundary. Record the outcome before prose.
7. Read back the new card outcome and report independent evidence separately from run 48 self-report, immutable blocked lineage, exact status, artifacts, and deployment unauthorized.
8. Do not edit, deploy, run `deploy.sh`, commit, push, access providers, submit forms, activate controls, replace processes, dispatch work, or mutate historical cards/handoffs.
9. Only the executor records this handoff's acceptance outcome; all repository and historical bytes remain unchanged.
