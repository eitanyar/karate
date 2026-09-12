# Restore SKSU Port-3000 Runtime

⚠️ HEBREW-SAFETY: waoengineer types ZERO Hebrew bytes in this task. Source and content files are read-only; inspect Hebrew only through existing files or rendered output and never retype it.

⚠️ EXECUTION SCOPE: Local process correction and safe local verification only. No application, content, test, package, config, asset, report, or historical handoff edits. No deployment, `deploy.sh`, commit, push, hosting changes, provider calls, credential access, media downloads, form submission, external messaging, or live client data.

## Metadata
- Task ID: 2026-09-10_006
- Target Agent: waoengineer
- Priority: P1-High
- Estimated Complexity: Simple
- Created By: waostrategy (Strategist, GPT-5.6 Sol)
- Created At: 2026-09-10T20:20:08+07:00
- Status: pending
- Contract Version: 3
- Dispatch Approved: yes; implementation card `t_14c3da97` is formally done and is the sole required board parent
- Observable Outcome: The current SKSU app responds on both `127.0.0.1:3000` and `100.102.160.114:3000` across every approved route after safely replacing only the stale project-owned listener.
- Required Capabilities / Preflight Evidence: waoengineer context_length 1,000,000 confirmed at `/home/eitanya/wao/AGENTS.md:27-37`; expected payload is limited to process diagnostics, one local server log, and HTTP route results. Strategist independently observed a same-user Next.js 15.5.9 process rooted at `/home/eitanya/karate` listening on `0.0.0.0:3000`, while both required hosts timed out with zero response.
- Accepted Dependencies / Board Parent IDs: `t_14c3da97` (`done`), the completed implementation card for task 003; use it as the sole board parent
- Supersedes: only the unresolved port-3000 runtime gate at `handoff/failed/2026-09-10_003_waoengineer_build-content-driven-site.md:88,94`; it does not supersede or alter task 003’s approved site scope
- Execution Class: outcome-owned-local
- Local Correction Budget: Safe local process inspection, restart, readiness checks, and HTTP smoke checks may repeat for 20 minutes / 6 goal turns
- Automatic Redispatch: none for deterministic, dependency, capability, or protocol blocks

## Context
Task 003 is formally done on the board and its worker reported passing tests, type check, build, and complete HTTP checks on port 3001. Its required port 3000 remained occupied by a non-responsive dev-server tree from the same repository, so this correction resolves only that runtime condition and preserves every approved source and content boundary.

## Specification

### Requirements:
1. Before any process signal, capture `git status --porcelain=v1`, `ss -ltnp '( sport = :3000 )'`, the listener PID/tree, owner, command line, and `/proc/<pid>/cwd`. Create a pre-action SHA-256 manifest under `/tmp` for regular files in `app/`, `content/`, `tests/`, and `public/`, plus `package.json`, `package-lock.json`, `next.config.mjs`, and `tsconfig.json`.
2. Stop the existing port-3000 process tree only if all guards pass: every signalled process is owned by the current user, its Next/npm process tree resolves to `/home/eitanya/karate`, its command is the project’s `next dev`, and it is the listener observed during this run. Send `SIGTERM` to that verified project-owned tree, wait up to 10 seconds, and use `SIGKILL` only if the same verified tree remains. If any ownership, cwd, command, or PID-identity guard fails, do not signal anything; record a capability/ownership block.
3. Confirm port 3000 is unoccupied, then start exactly the current repository with `npm run dev -- --hostname 0.0.0.0 --port 3000`. Keep the server running for successor verification, capture its PID/process tree, and place transient logs/PID evidence only under `/tmp`; do not add service files or repository artifacts.
4. Require positive readiness, not merely a listening socket: within 60 seconds both `http://127.0.0.1:3000/` and `http://100.102.160.114:3000/` must return HTTP 200 without timeout and served HTML must reference `/assets/sksu-logo.png`. On failure, inspect the transient dev log and keep correcting only process/runtime ownership in this task; do not edit the site.
5. On both hosts, request `/`, `/why-us/`, `/kihon/`, `/kata/`, `/komita/`, `/self-defense-exercise/`, `/karate-in-rishon-le-zion`, `/learn/`, all twelve article paths allowlisted at `app/_lib/content.ts:39-44`, `/contact/`, `/privacy`, `/accessibility`, and `/sitemap.xml`. Follow local redirects and report the final HTTP status, elapsed time, and final URL for each request. Every approved path must finish with HTTP 200 and no timeout.
6. Confirm the responding PID is the newly started project-owned port-3000 tree and that both hosts serve the same current app, not the stale listener or a port-3001 fallback. Port 3001 evidence cannot satisfy any criterion in this contract.
7. After runtime checks, regenerate the SHA-256 manifest and compare it byte-for-byte with the pre-action manifest. Re-run `git status --porcelain=v1` and compare it to the captured baseline. Any repository source/content/config/test/asset change is FAIL and must be reverted only if it was created by this run; never alter pre-existing dirty worktree state.

### Constraints:
- Runtime/process correction only; zero repository file changes are authorized.
- Never terminate an unrelated process or any process whose owner, cwd, command, or identity is uncertain.
- Preserve the approved routes, content, metadata, exclusions, design, assets, form behavior, and external hosting/media/form release gates from task 003.
- Do not use port 3001 as acceptance evidence and do not change package scripts or application code to force port selection.
- No deployment, `deploy.sh`, commit, push, provider, credential, live-data, or remote-host action.

### Technical Details:
- Files to Modify: none
- Files to Create: none in the repository; transient process log, PID record, status baseline, and SHA-256 manifests under `/tmp` only
- Files to Read: `handoff/failed/2026-09-10_003_waoengineer_build-content-driven-site.md`; board card/run/log for `t_14c3da97`; `package.json`; `app/_lib/content.ts`; `next.config.mjs`; current `app/`, `content/`, `tests/`, and `public/` trees
- Dependencies: task 003 implementation card `t_14c3da97` formally done; sole-writer availability; same-user project-owned stale listener must satisfy every termination guard

## Acceptance Criteria
- [ ] The stale non-responsive port-3000 listener is replaced without signalling any unrelated process.
- [ ] The current SKSU dev server remains reachable on `0.0.0.0:3000` through both loopback and Tailscale addresses.
- [ ] Every approved route and `/sitemap.xml` returns final HTTP 200 on both required hosts without timeout.
- [ ] Homepage responses on both hosts reference `/assets/sksu-logo.png`, proving application readiness beyond socket ownership.
- [ ] No port-3001 substitution is used.
- [ ] Pre/post SHA-256 manifests and status snapshots prove zero repository file changes.
- [ ] Task 003’s site scope and documented external release gates remain unchanged.

## Implementation Notes
### Do:
- Treat PID identity, current user, command line, process ancestry, and repository cwd as mandatory termination guards.
- Use bounded readiness retries and preserve exact command/status/timing evidence.
- Leave the verified port-3000 server running for the independent verifier.
### Don't:
- Kill by port alone, use broad `pkill`, alter source/config/scripts, weaken route coverage, or claim a listening socket is a responsive app.
- Dispatch task 004 or any other successor.

## Testing Requirements
- Test Command: capture guarded process evidence with `ss -ltnp '( sport = :3000 )'`, `ps`, `/proc/<pid>/cmdline`, `/proc/<pid>/cwd`, and process ancestry before signalling; expected an attributable same-user `/home/eitanya/karate` Next dev tree; safe and read-only.
- Test Command: start `npm run dev -- --hostname 0.0.0.0 --port 3000`; expected a persistent project-owned listener and positive HTTP readiness within 60 seconds; safe local process side effect and repeatable only after the same ownership guards.
- Test Command: bounded `curl --location --max-time 10` checks for the complete Requirement 5 matrix on `127.0.0.1:3000` and `100.102.160.114:3000`; expected final HTTP 200, no timeout, and exact per-route evidence; safe and read-only.
- Test Command: compare pre/post `/tmp` SHA-256 manifests and `git status --porcelain=v1` snapshots; expected byte-identical manifests and identical status; safe and read-only.
- Test Command: `npm run test` and `npm run build`; expected the named Node tests to be discovered with zero failures and static export success; safe to repeat, with generated `.next/` and `out/` artifacts excluded from the source manifest.

## Verification Checklist (waoengineer Final Gate)
- [ ] **npm run build** — Build succeeds with static export; attach actual output and route generation evidence.
- [ ] **npm run test** — Registered Node tests run with zero failures; attach actual discovery and failure output.
- [ ] **Dev server smoke test** — Attach guarded old/new process evidence, readiness markers, and every route’s final status/timing for both required port-3000 hosts.
- [ ] **Evidence screenshots** — N/A: this correction changes no UI; visual/RTL evidence remains owned by the existing task 005 contract after structural verification.

**Report Outcome:** Record `focused_acceptance` and `release_health` separately. Focused PASS requires a safely replaced listener, complete responsive port-3000 route evidence on both hosts, a persistent current server, and byte-identical repository manifests/status. Preserve the existing hosting-redirect, authentic-media, genuine-form-endpoint, structural-verifier, and visual-verifier release gates without expanding this correction.

### Escalation Routing (waoengineer decision)
On PASS, report that existing independent contract `handoff/pending/2026-09-10_004_waoverifier_verify-content-driven-site.md` may be manually dispatched only after Adam links this concrete corrective card and the formally done implementation card as accepted lineage. Do not edit or dispatch task 004. On a guard mismatch or inability to establish a persistent responsive port-3000 runtime, report the exact PID/process/log evidence to waostrategy without selecting a new owner.

## Handoff Instructions for Hermes
1. Read this file completely before starting.
2. Confirm board parent `t_14c3da97` is formally done and sole-writer availability exists.
3. Capture the required status, hash, listener, ownership, cwd, command, and ancestry baselines before any signal.
4. Execute only the guarded local runtime correction; do not edit repository files or broaden task 003.
5. Keep correcting safe in-scope process/readiness failures in this same goal-mode run without weakening acceptance.
6. Run the complete ordered acceptance ladder and attach actual process, route, test, build, status, and hash evidence.
7. Leave the verified port-3000 server running for independent verification.
8. Report focused acceptance and preserved release gates separately.
9. Do not dispatch, deploy, run `deploy.sh`, commit, push, or access credentials/providers/live data.
10. On a Kanban run, call `kanban_complete` only after every criterion passes; otherwise use `kanban_block` only for the defined ownership/capability boundary, record the formal outcome before prose, and read it back.
11. Only the executor reconciles this handoff’s disposition to its evidenced outcome; historical files and cards remain immutable.
