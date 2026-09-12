# Recover SKSU Stale Dev Assets

WARNING - HEBREW-SAFETY: waoengineer types ZERO Hebrew bytes. This task changes no repository source or content; preserve all existing Hebrew-bearing files byte-identical.

WARNING - EXECUTION SCOPE: Replace only the verified same-user, project-owned port-3000 Next.js development process and its `.next` cache. No source, content, test, package, configuration, asset, report, or historical-evidence edits. No deploy, `deploy.sh`, commit, push, install, credential/provider access, hosting change, form submission, messaging, external action, or successor dispatch.

## Metadata
- Task ID: 2026-09-10_009
- Target Agent: waoengineer
- Priority: P1-High
- Estimated Complexity: Simple
- Created By: waostrategy (Strategist, GPT-5.6 Sol)
- Created At: 2026-09-10T23:43:36+07:00
- Status: pending
- Contract Version: 3
- Dispatch Approved: yes; use completed card `t_181ef89a` as the sole board parent
- Observable Outcome: A newly started project-owned Next.js dev process on `0.0.0.0:3000` serves the Tailscale homepage visibly styled, with every homepage-referenced Next CSS and JavaScript asset returning HTTP 200 and its correct content type.
- Required Capabilities / Preflight Evidence: `waoengineer` context_length is 1,000,000 at `/home/eitanya/wao/AGENTS.md:27-36`; expected payload is one process tree, one bounded runtime log, one homepage/asset matrix, and one screenshot, well below capacity.
- Accepted Dependencies / Board Parent IDs: `t_181ef89a` (`done`, source correction and isolated test/type/build PASS); recheck sole-writer availability before process mutation
- Supersedes: only the stale live-runtime state after `t_181ef89a`; preserve `t_181ef89a`, its run/evidence, handoff 008, and all prior verification history unchanged
- Execution Class: one-shot-side-effecting
- Local Correction Budget: One verified stop, one `.next` removal, and one restart; readiness and read-only HTTP/browser checks may repeat for at most 15 minutes / 6 goal turns
- Automatic Redispatch: none for deterministic, dependency, capability, or protocol blocks

## Context
The current same-user SKSU process returns homepage HTML that references `/_next/static/css/app/layout.css` and five JavaScript bundles, but both loopback and `100.102.160.114:3000` return HTTP 404 for that CSS and four of those scripts; only `webpack.js` returns HTTP 200. `/tmp/sksu-port3000-next-dev-final.log:142-183,203-287` records stale React Client Manifest, webpack module, and missing `./195.js` errors, while later route HTML recovered; the remaining asset mismatch requires a bounded development-runtime/cache replacement, not repository changes.

## Specification

### Requirements:
1. Before mutation, record `git status --porcelain=v1`, the port-3000 socket, listener PID, UID/user, command, cwd, executable, start time, PPID chain, PGID/SID, and every member of that process group. Proceed only if exactly one listener is bound to `0.0.0.0:3000`, every launch-tree/process-group member is owned by the current non-root user, every member cwd resolves to `/home/eitanya/karate`, and the tree is exactly an `npm run dev` launcher followed by `next dev --hostname 0.0.0.0 --port 3000` and its Next server. If any unrelated member, different owner/cwd/command, multiple listener, or ownership ambiguity exists, do not signal or delete anything; block with the captured evidence.
2. Re-observe the stale-asset precondition on both `127.0.0.1:3000` and `100.102.160.114:3000`: homepage HTTP 200 with `text/html`, non-empty same-origin `/_next/static/` CSS and JavaScript references, and at least one referenced asset failing the live asset contract in Requirement 8. Specifically record the status/content type for `/_next/static/css/app/layout.css` with its current query string. If every referenced asset already passes, perform no mutation and report a no-op focused PASS; if the homepage itself is unavailable or evidence differs materially, stop and block rather than guessing.
3. Record SHA-256 values for the protected handoff/evidence files listed below and a pre-operation SHA-256 manifest of all regular files under `app/`, `content/`, `public/`, `tests/`, `handoff/`, plus `package.json`, `package-lock.json`, `next.config.mjs`, `tsconfig.json`, and `next-env.d.ts`. Exclude only `.next` and transient `/tmp` evidence from the project-file manifest.
4. Stop only the verified original process group: send one `SIGTERM` to that numeric PGID, wait at most 10 seconds, then send one `SIGKILL` only to any surviving PIDs from the already captured allowlist and wait at most 5 more seconds. Never use `pkill`, `killall`, `fuser -k`, name matching, wildcard PID discovery, or signal any PID not present in the verified pre-operation tree. Before cache handling, require the original PIDs to be gone and port 3000 unbound; if a new/foreign listener appears, stop without touching `.next`.
5. Handle only `/home/eitanya/karate/.next`: require its parent realpath to be `/home/eitanya/karate`, reject a symlink or mount point, and require same-user ownership. Remove that directory once with a path-literal, one-filesystem deletion. Do not remove or alter `node_modules`, `out`, `tsconfig.tsbuildinfo`, package-manager caches, logs, source, content, tests, configuration, assets, reports, handoffs, or `/tmp/sksu-corrective-008.*` evidence.
6. From `/home/eitanya/karate`, start exactly one tracked background process with `npm run dev -- --hostname 0.0.0.0 --port 3000`, writing its fresh stdout/stderr to a new `/tmp/sksu-runtime-recovery-009.*.log`. Do not use deploy, production start, a second port, a detached untracked daemon, or any package/install/build command. Wait at most 60 seconds for readiness; on timeout, stop the newly created task-owned tree and block with the log.
7. Confirm the replacement listener has a new PID and start time, is owned by the same non-root user, has cwd `/home/eitanya/karate`, binds exactly `0.0.0.0:3000`, and belongs only to the newly launched `npm run dev` tree. Reject and stop the new tree if it violates this contract.
8. Enforce the live asset contract on both hosts. GET `/` with a 10-second timeout and require final HTTP 200 plus media type `text/html`. Parse every unique same-origin `href`/`src` beginning `/_next/static/`, preserving query strings; require at least one CSS and one JavaScript asset. GET every parsed asset without browser-cache reuse: each must return final HTTP 200, a non-empty body, and no HTML fallback; `.css` must have media type `text/css`, while `.js` must have `application/javascript` or `text/javascript`. Any redirect, 404, 5xx, wrong media type, empty body, or stale reference is FAIL and must not be hidden by checking only `webpack.js`.
9. Open `http://100.102.160.114:3000/` in a browser at a desktop viewport after the asset matrix passes. Require visible layout, colors, typography, spacing, logo/image pixels, and controls rather than an unstyled document; require no broken-image icon, alt-text leakage, blank primary content, horizontal overflow, or browser console/network CSS/JavaScript load error. Capture one fresh screenshot and the browser/network evidence. Do not edit UI or perform the later independent RTL gate.
10. Recompute the protected hashes, project-file manifest, and `git status --porcelain=v1`. They must match the pre-operation values byte-for-byte except that this executor may reconcile only this handoff's normal pending-to-completed disposition; no other repository file may change. Preserve `t_181ef89a`, all its events/runs/metadata, and prior evidence without comments or mutation.
11. Report focused runtime recovery separately from release health. A local PASS authorizes only a fresh independent structural verifier against the replacement runtime. Release remains blocked until that verifier formally passes and, only afterward, a fresh independent visual/RTL verifier formally passes; do not reuse prior screenshots or claim release readiness from this engineer run.

### Constraints:
- This is runtime recovery, not implementation. Repository source, content, tests, package/configuration, assets, reports, and historical evidence are read-only.
- The stop/cache/restart sequence is authorized once only after all ownership and stale-asset preconditions pass. A failed replacement requires a block, not an automatic second destructive cycle.
- Immutable evidence SHA-256 baselines: handoff 008 `509160786caca776f3698fa1cd5d8f3c9b90e0f9e76adba22093f94ffabb7e9a`; `/tmp/sksu-corrective-008.pre` `b618baa7a8437405b000c9394896aeeef168babc14bbdcf29a61035e028235d3`; `/tmp/sksu-corrective-008.final-evidence` `a4214aa1e9000160fee34b208bd62913c91837eb622fe2a53ef67451cc03b99b`; `/tmp/sksu-corrective-008.final-mirror.log` `88efd04810b46411f139e4e1c57569cd10bd95cdd0cc8a71e99050979c4104c8`.
- No deploy, `deploy.sh`, build, tests, type check, install, commit, push, credential/provider access, hosting action, external communication, form submission, or successor creation/dispatch.

### Technical Details:
- Files to Modify: none in repository source/content/tests/package/config/assets/history; executor may only perform this handoff's normal status disposition
- Files to Create: fresh `/tmp/sksu-runtime-recovery-009.*.log`, manifests, HTTP matrix, and one screenshot outside the repository
- Files to Read: `package.json`; `/tmp/sksu-port3000-next-dev-final.log`; `handoff/completed/2026-09-10_008_waoengineer_correct-runtime-canonical-failures.md`; `/tmp/sksu-corrective-008.pre`; `/tmp/sksu-corrective-008.final-evidence`; `/tmp/sksu-corrective-008.final-mirror.log`; current process/socket/procfs state; current homepage and referenced assets
- Dependencies: completed `t_181ef89a`; same-user sole-writer window; verifiable project-owned stale port-3000 tree; existing dependencies already installed

## Acceptance Criteria
- [ ] Ownership, process-tree, stale-asset, cache-path, and immutable-evidence preconditions are captured and pass before mutation.
- [ ] Exactly the verified original process tree and `/home/eitanya/karate/.next` are replaced once; the new listener has a new PID/start time and correct owner/cwd/bind/command.
- [ ] Both hosts serve homepage HTTP 200 and every referenced Next CSS/JavaScript asset satisfies the exact status/body/content-type contract.
- [ ] The Tailscale homepage is freshly observed visibly styled with no asset-load, console, overflow, broken-image, or alt-leakage failure.
- [ ] Protected hashes, project-file manifest, and repository status remain unchanged apart from this handoff's permitted disposition.
- [ ] Completion reports structural verification as the next gate and visual/RTL verification only after structural PASS; no release or deployment claim is made.

## Implementation Notes
### Do:
- Use numeric PIDs/PGID captured from `ss`, `ps`, and `/proc`; compare UID, cwd, command, process-group membership, and start time before signaling.
- Parse the actual homepage on each host and test every referenced Next CSS/JavaScript URL, including query strings.
### Don't:
- Touch source or broaden cache deletion, use broad process matching, retry destructive recovery, accept homepage HTML alone as healthy, or dispatch verification.

## Testing Requirements
- Test Command: bounded read-only `ss`/`ps`/`/proc` ownership and process-tree capture before stop and after restart; expected one verified old tree before and one new same-user project tree after; safe to repeat only while read-only.
- Test Command: pre/post SHA-256 manifests and `git status --porcelain=v1`; expected protected evidence and all project files byte-identical, with only this handoff's permitted disposition; safe to repeat.
- Test Command: bounded standard-library or `curl` homepage/asset matrix for both hosts using Requirement 8; expected all parsed CSS/JavaScript assets HTTP 200 with correct media types and non-empty non-HTML bodies; safe to repeat after restart.
- Test Command: one fresh browser load and screenshot of `http://100.102.160.114:3000/`; expected visibly styled desktop rendering and no asset/console/network failure; safe to repeat read-only.

## Verification Checklist (waoengineer Final Gate)
- [ ] **npm run build** — N/A: source and build output are immutable; `t_181ef89a` already passed an isolated build, and this task authorizes runtime recovery only.
- [ ] **npm run test** — N/A: no source/test change is authorized; this task validates the live runtime/asset contract only.
- [ ] **Dev server smoke test** — Attach old/new process identity, fresh log path, both homepage results, and the complete per-asset status/content-type matrix.
- [ ] **Evidence screenshots** — Attach one fresh Tailscale desktop screenshot plus console/network evidence proving the homepage is styled and assets load.

**Report Outcome:** Focused PASS means only that the authorized stale development runtime/cache replacement and exact live asset contract passed without repository-byte drift. Release health requires a new independent structural PASS against this replacement runtime and then a new independent visual/RTL PASS; deployment and release claims remain prohibited here.

### Escalation Routing (waoengineer decision)
On focused PASS, report readiness for Adam to create a fresh read-only `waoverifier` card using this completed recovery card and `t_181ef89a` as parents, covering the full task-007 structural matrix plus the exact Requirement 8 asset contract. Only after that card is formally done with PASS may Adam create a fresh `waouxtester` card for the task-005 desktop/mobile visual and RTL scope against `100.102.160.114:3000`. On any ownership ambiguity, changed precondition, restart failure, asset-contract failure, or repository-byte drift, block with exact evidence and preserve the stopped/new process state safely; do not create or dispatch any successor.

## Handoff Instructions for Hermes
1. Read this file completely and confirm sole-writer availability and completed parent `t_181ef89a`.
2. Capture repository, evidence, process ownership/tree, and stale-asset preconditions before mutation.
3. If any precondition fails, do not signal or delete; record a safety/capability block.
4. Execute the one authorized numeric-PGID stop, exact `.next` removal, and tracked restart within the stated bounds.
5. Run the complete two-host asset matrix, then the fresh Tailscale browser check.
6. Recheck manifests, hashes, status, and replacement process identity.
7. Call `kanban_complete` only if every focused criterion passes; otherwise call `kanban_block` with exact evidence. Read back the formal board outcome.
8. Report independent structural verification as the immediate next gate and visual/RTL verification only after structural PASS.
9. Do not edit repository source/content/tests/package/config/assets/history, deploy, run `deploy.sh`, build, test, install, commit, push, access credentials/providers, or perform external actions.
10. Do not create or dispatch any verifier, visual QA, corrective, or other successor; Adam/orchestrator owns later manual dispatch.
11. Only the executor reconciles this handoff's disposition; preserve all historical handoffs and `t_181ef89a` unchanged.
