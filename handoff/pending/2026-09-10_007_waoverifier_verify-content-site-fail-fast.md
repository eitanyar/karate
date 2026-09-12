# Verify SKSU Content Site Fail-Fast

⚠️ HEBREW-SAFETY: Read existing Hebrew source and rendered output only. Do not edit or reproduce Hebrew into repository files.

⚠️ EXECUTION SCOPE: Independent read-only verification plus isolated test/build output under `/tmp` only. No repository source, content, test, package, config, asset, report, or historical-handoff edits; no process changes, deployment, `deploy.sh`, commit, push, hosting changes, providers, credentials, media downloads, form submission, messaging, or live data.

## Metadata
- Task ID: 2026-09-10_007
- Target Agent: waoverifier
- Priority: P1-High
- Estimated Complexity: Moderate
- Created By: waostrategy (Strategist, GPT-5.6 Sol)
- Created At: 2026-09-10T20:57:11+07:00
- Status: pending
- Contract Version: 3
- Dispatch Approved: yes; use formally done cards `t_14c3da97` and `t_a3dbbdea` as the only board parents
- Observable Outcome: One bounded independent run records PASS or deterministic FAIL for the complete task-004 structural/runtime scope without changing repository bytes or disrupting port 3000.
- Required Capabilities / Preflight Evidence: `waoverifier` context_length is 1,000,000 at `/home/eitanya/wao/AGENTS.md:87-93`; expected payload is well below capacity; local shell and HTTP access to both required port-3000 hosts.
- Accepted Dependencies / Board Parent IDs: `t_14c3da97` (`done`, implementation) and `t_a3dbbdea` (`done`, runtime correction)
- Supersedes: execution of `handoff/pending/2026-09-10_004_waoverifier_verify-content-driven-site.md` and blocked card `t_133106b4`; preserve both unchanged
- Execution Class: read-only-repeatable
- Local Correction Budget: No corrections or forensic debugging; one non-goal-mode run, at most 20 minutes and six grouped tool-result cycles
- Automatic Redispatch: none for deterministic, dependency, capability, or protocol blocks

## Context
Card `t_133106b4` exhausted 90 iterations after producing deterministic findings but before recording a board result. Its log shows a live-repository build preceded runtime checks and then expanded into framework diagnosis. This successor preserves task 004’s scope while isolating generated output, batching checks, and terminalizing immediately after one evidence matrix.

## Specification

### Requirements:
1. In one discovery batch, inspect this contract, original task 004, blocked card `t_133106b4` and its complete log, both done parent cards/runs, reports 01/05/06, task-003 completion handoff, task-006 handoff, and current task-owned source/tests. Treat all worker and prior-run prose as self-report.
2. Capture `git status --porcelain=v1` and a `/tmp` SHA-256 manifest for `app/`, `content/`, `tests/`, `public/`, `package.json`, `package-lock.json`, `next.config.mjs`, `tsconfig.json`, and handoffs 003-007.
3. Read-only confirm that port 3000 belongs to a `/home/eitanya/karate` Next dev tree. In one bounded batch, request all 24 approved paths from task 006 Requirement 5 on `127.0.0.1:3000` and `100.102.160.114:3000`; record final URL/status/time plus title, description, canonical, H1 count, breadcrumbs, and applicable BreadcrumbList/Article schema. Do not signal, restart, repair, or diagnose the server.
4. Create only `mktemp -d /tmp/sksu-verifier-007.XXXXXX`; copy `app/`, `content/`, `public/`, `tests/`, `package.json`, `package-lock.json`, `next.config.mjs`, `tsconfig.json`, and `next-env.d.ts`, then symlink repository `node_modules`. Run the ordered test/type/build ladder inside that mirror only. Never run it from `/home/eitanya/karate`.
5. In one standard-library parser pass over temporary `out/`, verify the approved route set, unique metadata/canonical, one H1, breadcrumbs, applicable schema, crawlable inbound links, truthful WhatsApp/contact/call paths, and no callback-storage claim. Confirm complete absence of the synthetic record, reserved routes, Holon route, redirect-only/pending-410 output, `titleAnchor`, `_sourceNotes`, withheld claims, Wayback/remote image hotlinks, AI people, review/rating schema, unsupported facts, and unapproved media.
6. Preserve missing hosting redirects/410s, authentic media, and genuine form endpoint as external release gates only when no local implementation falsely claims them. Repeat the manifest/status, classify every criterion once, and immediately call `kanban_complete` for PASS or deterministic FAIL with exact failing assertions and final status. Use `kanban_block` only for missing dependencies, inaccessible runtime, or missing capability. Do not dispatch a successor.

### Constraints:
- Maximum cycles: orientation, discovery batch, baseline, runtime matrix, isolated test/build/static matrix, final board write.
- No repository edits, installs, process mutation, screenshots, persistent harness, correction attempts, or framework diagnosis.
- Build output must never touch live-repository `.next/` or `out/`.
- Deterministic mismatch is FAIL, not BLOCKED.

### Technical Details:
- Files to Modify: none
- Files to Create: none in the repository; transient mirror, logs, matrices, and manifests under `/tmp` only
- Files to Read: `handoff/pending/2026-09-10_004_waoverifier_verify-content-driven-site.md`; `handoff/failed/2026-09-10_003_waoengineer_build-content-driven-site.md`; `handoff/pending/2026-09-10_006_waoengineer_restore-port-3000-runtime.md`; `handoff/reports/01-legacy-source-and-seo-map.md`; `handoff/reports/05-sksu-post-correction-hebrew-qa.md`; `handoff/reports/06-sksu-owner-and-seo-decision-sheet.md`; `/home/eitanya/.hermes/kanban/boards/sksu-redesign/logs/t_133106b4.log`; current `app/`, `content/`, `tests/`, `public/`, `package.json`, `package-lock.json`, `next.config.mjs`, and `tsconfig.json`
- Dependencies: both named parents formally done; current project-owned port-3000 runtime reachable; existing `node_modules`

## Acceptance Criteria
- [ ] Focused tests, type check, canonical tests, and build run once in isolation with named tests discovered and zero failures.
- [ ] All 48 runtime requests return HTTP 200; every HTML route satisfies applicable metadata, H1, breadcrumb, and schema rules.
- [ ] Temporary static output satisfies route, graph, exclusion, publication-safety, conversion, and media rules.
- [ ] External gates are accurately preserved.
- [ ] Protected hashes and repository status are unchanged.
- [ ] PASS or deterministic FAIL is formally recorded without a diagnosis loop.

## Implementation Notes
### Do:
- Batch independent reads and run each matrix as one bounded terminal invocation.
- Keep raw `/tmp` evidence until the board outcome is recorded.
### Don't:
- Re-run failures, inspect framework internals, mutate servers, fix defects, or infer PASS from prose.

## Testing Requirements
- Test Command: in the temporary mirror only, `node --test tests/content-schema.test.mjs tests/publication-safety.test.mjs && node --test tests/legacy-routes.test.mjs tests/navigation.test.mjs && npx tsc --noEmit && npm run test && npm run build`; expected named tests, zero failures, and successful export; execute once.
- Test Command: one bounded standard-library HTTP matrix for all 24 approved paths on both required hosts; expected 48 final HTTP 200 responses and route-level metadata/schema evidence; execute once.
- Test Command: one standard-library parser pass over temporary `out/**/*.html` and sitemap; expected all Requirement 5 assertions; execute once.
- Test Command: compare pre/post manifests and `git status --porcelain=v1`; expected byte-identical results.

## Verification Checklist (waoverifier Final Gate)
- [ ] **npm run build** — Run once in the temporary mirror; attach result and generated-route evidence.
- [ ] **npm run test** — Run once in the temporary mirror; attach test discovery and failures.
- [ ] **Dev server smoke test** — Attach the complete 48-request matrix without server mutation.
- [ ] **Evidence screenshots** — N/A: task 005 owns visual/RTL evidence.

**Report Outcome:** Verification completion is a formally recorded PASS or deterministic FAIL backed by the bounded matrix. Release readiness also requires preserved external gates and later visual/RTL verification.

### Escalation Routing (waoverifier decision)
On PASS, report readiness for `handoff/pending/2026-09-10_005_waouxtester_verify-sksu-visual-rtl.md`; do not dispatch it. On FAIL, return exact assertions to the orchestrator for the existing implementation owner; do not diagnose, edit, author, or dispatch a correction.

## Handoff Instructions for Hermes
1. Confirm both done parents and read this file completely.
2. Run one non-goal-mode attempt within the six-cycle limit.
3. Keep generated output under `/tmp`; leave repository bytes and processes unchanged.
4. Execute each matrix once; do not diagnose or retry deterministic failures.
5. Distinguish independent observations from self-report.
6. Call `kanban_complete` for PASS or deterministic FAIL; call `kanban_block` only for the defined boundary.
7. Include final repository status and read back the board outcome.
8. Do not dispatch, deploy, run `deploy.sh`, commit, push, install, or access credentials/providers/live data.
9. Only the executor reconciles this successor; historical files/cards remain immutable.
