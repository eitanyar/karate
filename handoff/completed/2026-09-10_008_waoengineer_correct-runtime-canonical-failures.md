# Correct SKSU Runtime and Canonical Failures

WARNING - HEBREW-SAFETY: waoengineer types ZERO Hebrew bytes. Preserve every existing Hebrew byte in the four allowlisted page modules; apply only ASCII-targeted surgical edits.

WARNING - EXECUTION SCOPE: Correct only the two HTTP 500 routes and two missing canonical tags named below. Keep the existing port-3000 process running and undisturbed. No deploy, deploy.sh, commit, push, credentials, providers, remote changes, external actions, form submissions, messaging, or successor dispatch.

## Metadata
- Task ID: 2026-09-10_008
- Target Agent: waoengineer
- Priority: P1-High
- Estimated Complexity: Simple
- Created By: waostrategy (Strategist, GPT-5.6 Sol)
- Created At: 2026-09-10T21:35:06+07:00
- Status: pending
- Contract Version: 3
- Dispatch Approved: yes; use completed FAIL card `t_c4fac64c` as the sole board parent
- Observable Outcome: The same port-3000 Next.js process returns HTTP 200 for `/` and `/accessibility`, while `/contact` and `/privacy` emit their correct absolute canonical tags on both required hosts.
- Required Capabilities / Preflight Evidence: `waoengineer` context_length is 1,000,000 at `/home/eitanya/wao/AGENTS.md:27-36`; expected payload is four small page modules, one runtime log excerpt, focused HTTP output, and isolated test/build output.
- Accepted Dependencies / Board Parent IDs: `t_c4fac64c` (`done`, formal independent acceptance FAIL) as sole parent
- Supersedes: only the four failing route assertions recorded by `t_c4fac64c`; preserve that card, run 8, metadata, events, artifacts, and handoff 007 unchanged as immutable failed verification evidence
- Execution Class: outcome-owned-local
- Local Correction Budget: ASCII-only edits and safe local checks may repeat for 30 minutes / 8 goal turns; no process or live-cache mutation
- Automatic Redispatch: none for deterministic, dependency, capability, or protocol blocks

## Context
Independent card `t_c4fac64c` recorded 42/48 runtime checks passing and six failures in `/tmp/sksu-runtime-matrix.json`: HTTP 500 for `/` and `/accessibility` on both hosts, plus absent canonical tags on `/contact` and `/privacy`. The live log `/tmp/sksu-port3000-next-dev-final.log:142-183,223-287` identifies a stale dev-bundle/client-manifest and missing `.next` chunk, while current source at `app/contact/page.tsx:4` and `app/privacy/page.tsx:2` omits `alternates.canonical`.

## Specification

### Requirements:
1. Capture the current listener PID, owner, command, cwd, start time, `git status --porcelain=v1`, and the four-route HTTP/canonical baseline before editing. Confirm the listener is the existing same-user `/home/eitanya/karate` Next.js process on `0.0.0.0:3000`; do not signal or replace it.
2. Inspect `app/page.tsx` function `Home`, `app/accessibility/page.tsx` function `Accessibility`, and the current runtime log. Make the minimum ASCII-only source correction within those two modules that causes Next dev to rebuild their broken route bundles without changing rendered copy, navigation, layout, assets, content records, or behavior.
3. In `app/contact/page.tsx` metadata and `app/privacy/page.tsx` metadata, add explicit `alternates.canonical` values resolving through the existing `metadataBase` in `app/layout.tsx:6-10`. Canonicals must resolve exactly to `https://karate.11il.co/contact` and `https://karate.11il.co/privacy`. Preserve existing titles, robots directives, and all rendered content byte-for-byte.
4. Use ASCII anchors or byte-preserving scripted insertion for every edit. Do not paste, retype, reformat, or regenerate any Hebrew-bearing line.
5. Keep the same port-3000 PID, process tree, bind, command, cwd, and start time throughout implementation and acceptance. Do not stop, restart, signal, rebind, replace, or launch a server; do not delete, rename, clean, copy over, or directly edit `.next` or any runtime cache. Normal HMR caused by the allowlisted source saves is the only permitted runtime effect.
6. Verify `/`, `/accessibility`, `/contact`, and `/privacy` on both `127.0.0.1:3000` and `100.102.160.114:3000`. All eight requests must return HTTP 200. Each response must contain one canonical tag with the route-correct absolute URL; `/` must still reference `/assets/sksu-logo.png`.
7. Run tests, type check, and build only in a fresh `/tmp/sksu-corrective-008.*` mirror containing the repository source and a symlink to the existing `node_modules`. Never run `next build`, `npm run build`, or any command that writes `.next`, `out`, or `tsconfig.tsbuildinfo` in `/home/eitanya/karate` while port 3000 is running.
8. Recheck the listener identity and repository status. Only the four allowlisted page modules may differ from the pre-task repository bytes; do not modify tests, configuration, content, assets, reports, or any existing handoff.

### Constraints:
- Files outside the four-page allowlist are read-only; no package, dependency, configuration, test, content, asset, report, or historical-handoff changes.
- Preserve `t_c4fac64c` and `/tmp/sksu-runtime-matrix.json` as immutable failure evidence; do not comment on, reopen, relabel, or otherwise mutate the card.
- If same-PID HMR cannot restore both 500 routes, stop and report the exact remaining runtime error as a capability/safety block; do not escalate into a restart or cache reset.
- No deploy, `deploy.sh`, commit, push, credential access, provider call, remote action, external side effect, or successor creation/dispatch.

### Technical Details:
- Files to Modify: `app/page.tsx`; `app/accessibility/page.tsx`; `app/contact/page.tsx`; `app/privacy/page.tsx`
- Files to Create: none in the repository; temporary mirror and logs under `/tmp` only
- Files to Read: `app/layout.tsx`; the four files above; `package.json`; `handoff/pending/2026-09-10_007_waoverifier_verify-content-site-fail-fast.md`; `/tmp/sksu-runtime-matrix.json`; `/tmp/sksu-port3000-next-dev-final.log`; board card `t_c4fac64c`
- Dependencies: sole-writer availability; completed parent `t_c4fac64c`; existing PID 1788598 or its independently re-observed unchanged port-3000 process identity

## Acceptance Criteria
- [ ] `/` and `/accessibility` return HTTP 200 on both required hosts from the unchanged port-3000 process.
- [ ] `/contact` emits exactly `https://karate.11il.co/contact` and `/privacy` emits exactly `https://karate.11il.co/privacy` as unique canonicals on both hosts.
- [ ] `/` still references `/assets/sksu-logo.png`; the four pages preserve existing content and behavior.
- [ ] The port-3000 PID, process tree, bind, cwd, command, and start time are unchanged; no runtime cache was directly mutated.
- [ ] Isolated focused tests, canonical `npm run test`, type check, and build pass with zero failures.
- [ ] Only the four allowlisted modules changed; all historical evidence and unrelated dirty-worktree bytes remain untouched.

## Implementation Notes
### Do:
- Follow the explicit metadata pattern in `app/why-us/page.tsx:1-9` and the root `metadataBase` in `app/layout.tsx:6-10`.
- Let ordinary HMR recompile only the saved route modules, then prove the same listener served the corrected responses.
### Don't:
- Diagnose or repair unrelated routes, broaden metadata changes, weaken checks, edit Hebrew, touch `.next`, or restart the server.
- Dispatch or create any verifier, visual QA, corrective, or other successor.

## Testing Requirements
- Test Command: read-only listener capture with `ss`, `ps`, `/proc/<pid>/cwd`, and `/proc/<pid>/cmdline` before and after; expected identical identity and start time; safe to repeat.
- Test Command: bounded `curl --location --max-time 10` requests for the four routes on both hosts, parsing status and canonical tags; expected eight HTTP 200 responses, unique route-correct canonicals, and homepage logo reference; safe to repeat.
- Test Command: in a fresh `/tmp` mirror only, `npm run test && npx tsc --noEmit && npm run build`; expected all named tests discovered, zero failures, zero type errors, and successful static generation; safe to repeat only in the mirror.
- Test Command: `git diff --check -- app/page.tsx app/accessibility/page.tsx app/contact/page.tsx app/privacy/page.tsx` plus final `git status --porcelain=v1`; expected clean diff formatting and no task-created change outside the allowlist; safe to repeat.

## Verification Checklist (waoengineer Final Gate)
- [ ] **npm run build** — Passes in the `/tmp` mirror only; attach actual output and generated route evidence.
- [ ] **npm run test** — Passes in the `/tmp` mirror with named tests and zero failures; attach output.
- [ ] **Dev server smoke test** — Attach pre/post same-process evidence and all eight route status/canonical observations.
- [ ] **Evidence screenshots** — N/A: no visual design or copy change is authorized; structural HTTP evidence owns this correction.

**Report Outcome:** Focused PASS requires every criterion above on the unchanged port-3000 process. Release health remains gated by fresh independent structural verification, existing visual/RTL verification, and the previously documented external hosting, authentic-media, and genuine-form boundaries.

### Escalation Routing (waoengineer decision)
On PASS, report exact changed paths and acceptance evidence to the orchestrator. On any same-PID recovery limit, unsafe runtime condition, or non-allowlisted requirement, report the boundary to waostrategy. Do not create or dispatch any successor in either case.

## Handoff Instructions for Hermes
1. Read this file completely and confirm sole-writer availability and parent `t_c4fac64c`.
2. Capture listener, status, and four-route baselines before any edit.
3. Modify only the four allowlisted page modules using ASCII-only, byte-preserving edits.
4. Keep the existing port-3000 process and cache undisturbed except for normal source-triggered HMR.
5. Run the HTTP matrix against both hosts and the test/type/build ladder only in `/tmp`.
6. Keep correcting safe in-scope source failures within this goal-mode run without weakening acceptance.
7. Record `kanban_complete` only after every criterion passes; use `kanban_block` only for the defined same-PID safety/capability boundary.
8. Include final `git status --porcelain=v1`, changed paths, listener identity, and exact route evidence.
9. Do not deploy, run `deploy.sh`, commit, push, access credentials/providers, perform external actions, mutate historical evidence, or dispatch/create a successor.
10. Only the executor reconciles this handoff's disposition; all historical handoffs and card `t_c4fac64c` remain immutable.
