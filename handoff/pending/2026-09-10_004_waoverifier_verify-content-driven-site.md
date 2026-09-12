# Verify SKSU Content-Driven Site

⚠️ HEBREW-SAFETY: Read rendered Hebrew and source evidence only. Do not edit any file or reproduce Hebrew strings into source.

⚠️ EXECUTION SCOPE: Independent read-only verification and safe local test/runtime commands only. No edits, deployment, hosting changes, commit, push, provider calls, credentials, media downloads, or live data.

## Metadata
- Task ID: 2026-09-10_004
- Target Agent: waoverifier
- Priority: P1-High
- Estimated Complexity: Moderate
- Created By: waostrategy (Strategist, GPT-5.6 Sol)
- Created At: 2026-09-10T17:54:04+07:00
- Status: pending
- Contract Version: 3
- Dispatch Approved: no until task 2026-09-10_003 is formally done and linked as the sole board parent
- Observable Outcome: Independent runtime and source evidence confirms the approved multipage site, exclusions, metadata, link graph, tests, and static build behave exactly as contracted.
- Required Capabilities / Preflight Evidence: waoverifier context_length 1,000,000 confirmed at `/home/eitanya/wao/AGENTS.md:87-93`; local shell and HTTP access to `100.102.160.114:3000`.
- Accepted Dependencies / Board Parent IDs: concrete formally-done card for `2026-09-10_003`; Adam must supply its ID as sole parent.
- Supersedes: none
- Execution Class: read-only-repeatable
- Local Correction Budget: Read-only checks may repeat for 30 minutes / 8 turns.
- Automatic Redispatch: none for deterministic, dependency, capability, or protocol blocks

## Context
The engineer implementation must be graded independently, not from its completion prose. Verify current bytes, test/build output, built artifacts, and actual HTTP behavior while preserving the known hosting/media/form boundaries.

## Specification

### Requirements:
1. Inspect task 003, its concrete done card, run log, completion report, current diff, and all task-owned source/test files.
2. Run the same focused tests, type check, canonical tests, and build in the specified order. Confirm named tests were discovered and failures are zero.
3. Enumerate approved routes from records/report 01 and verify each is generated and returns HTTP 200 on loopback and `100.102.160.114:3000`.
4. Verify the synthetic record, both reserved routes, Holon source page, redirect-only paths, and pending-410 paths are absent from navigation, sitemap, static params, schema, metadata, and generated publishable output.
5. Inspect served HTML for unique title, description, canonical, one H1, breadcrumbs, and applicable BreadcrumbList/Article schema. Confirm `titleAnchor`, `_sourceNotes`, and withheld claims are absent.
6. Verify all approved routes have crawlable inbound links according to report 01’s graph and no link points to an excluded/reserved page.
7. Verify conversion behavior does not claim server-side callback storage and includes truthful WhatsApp/contact/call paths using existing approved values.
8. Verify no Wayback hotlinks, remote image candidates, AI-generated people, review/rating schema, unsupported facts, or unapproved media were added.
9. Treat missing hosting-layer redirects/410s, authentic media package, and form endpoint as preserved external release gates, not local FAIL, only if the engineer did not falsely implement or claim them.
10. Return PASS, FAIL, or BLOCKED with command output and route-level evidence. Do not fix defects.

### Constraints:
- Strictly read-only.
- Use current source/runtime as primary evidence; worker prose is self-report.
- Deterministic mismatch is FAIL. BLOCKED is reserved for missing evidence/capability or an actual external/safety boundary.

### Technical Details:
- Files to Modify: none
- Files to Create: none
- Files to Read: implementation handoff/completed copy; concrete board run/log; reports 01, 05, 06; all `content/*.json`; changed `app/`, `tests/`, `package.json`, `next.config.mjs`; static build output
- Dependencies: formal done implementation card and reachable local/Tailscale runtime

## Acceptance Criteria
- [ ] Every contracted local route, exclusion, metadata, schema, and graph rule is independently checked.
- [ ] Focused tests, type check, `npm run test`, and `npm run build` pass from actual output.
- [ ] Loopback and Tailscale route checks succeed.
- [ ] No provenance or withheld claim is rendered.
- [ ] External release gates are accurately reported and not disguised as completed features.

## Implementation Notes
### Do:
- Generate the expected route set from records and compare it to build/runtime output.
- Cite exact commands, paths, status codes, and failed assertions.
### Don't:
- Modify files, accept screenshots as structural proof, or infer PASS from the engineer report.

## Testing Requirements
- Test Command: exact ordered commands from task 003; safe to repeat and read-only with respect to source/client data.
- Test Command: curl every approved route on loopback and Tailscale; safe to repeat.
- Test Command: parse sitemap and served HTML for exclusions/provenance/metadata/schema; safe to repeat.
- Test Command: `git diff --check` and scoped status/diff inspection; safe to repeat.

## Verification Checklist (waoverifier Final Gate)
- [ ] **npm run build** — Independently rerun and attach output.
- [ ] **npm run test** — Independently rerun and attach test names/counts and zero failures.
- [ ] **Dev server smoke test** — Attach route-by-route loopback and Tailscale status evidence.
- [ ] **Evidence screenshots** — N/A for structural verifier; task 005 owns visual evidence.

**Report Outcome:** PASS requires all local criteria. Report hosting/media/form external gates under release health. FAIL deterministic implementation mismatches; BLOCKED only genuine missing capability/evidence.

### Escalation Routing (waoverifier decision)
On PASS, report readiness for `handoff/pending/2026-09-10_005_waouxtester_verify-sksu-visual-rtl.md`; do not dispatch it. On FAIL, return exact evidence to the existing implementation owner through the orchestrator—do not author a correction card.

## Handoff Instructions for Hermes
1. Read this file completely.
2. Confirm the concrete done parent and current source.
3. Remain read-only.
4. Execute all ordered checks and collect actual evidence.
5. Distinguish worker self-report from independent observations.
6. Report PASS, FAIL, or BLOCKED.
7. Do not dispatch, edit, deploy, commit, or push.
8. Record formal board outcome before prose and read it back.
9. Only the executor reconciles this handoff’s disposition to its evidenced outcome.
