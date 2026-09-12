# Verify SKSU Publication-Safe Copy

⚠️ HEBREW-SAFETY: This is an independent Hebrew QA task. Read Hebrew in the named records but do not edit any file.

⚠️ EXECUTION SCOPE: Read-only local inspection only. No edits, publication, deployment, server, commit, push, media, providers, credentials, or live data.

## Metadata
- Task ID: 2026-09-10_002
- Target Agent: waohebrewqa
- Priority: P1-High
- Estimated Complexity: Simple
- Created By: waostrategy (Strategist, GPT-5.6 Sol)
- Created At: 2026-09-10T17:54:04+07:00
- Status: pending
- Contract Version: 3
- Dispatch Approved: no until task 2026-09-10_001 is formally done and linked as the sole board parent
- Observable Outcome: Independent evidence confirms the four finalized records are natural, claim-safe, publishable Hebrew and preserve all historical provenance.
- Required Capabilities / Preflight Evidence: waohebrewqa context_length 1,000,000 confirmed in `/home/eitanya/wao/AGENTS.md:52-60`.
- Accepted Dependencies / Board Parent IDs: concrete formally-done card for `2026-09-10_001`; Adam must supply its ID as this task’s sole parent before dispatch.
- Supersedes: none
- Execution Class: read-only-repeatable
- Local Correction Budget: Read-only checks may repeat for up to 20 minutes / 6 turns.
- Automatic Redispatch: none for deterministic, dependency, capability, or protocol blocks

## Context
waocopy is removing claims withheld by the owner/SEO closure decision. Independently verify language quality, factual restraint, and provenance preservation before implementation consumes the records.

## Specification

### Requirements:
1. Inspect the completion report and diff for `2026-09-10_001`.
2. Review every changed pointer in the four task-owned records for natural Israeli Hebrew, singular-male address, grammatical correctness, clarity, and continuity with surrounding copy.
3. Confirm no public field states numeric belt timelines, syllabus counts, background checks, unspecified qualifications, organizational-support claims, children’s programme availability, children’s self-defense availability, age ranges, schedules, prices, or guaranteed outcomes.
4. Confirm location metadata and H1 preserve local karate/Shotokan intent using only confirmed facts.
5. Confirm every route, `titleAnchor`, and `_sourceNotes` value is unchanged from the pre-task evidence.
6. Return PASS, FAIL, or BLOCKED with pointer-level findings. Do not fix failures.

### Constraints:
- Read-only; do not edit records or reports.
- Historical provenance is not public copy and must not be judged as if it were rendered.
- BLOCKED is only for missing task evidence or capability, not a deterministic copy defect.

### Technical Details:
- Files to Modify: none
- Files to Create: none
- Files to Read: `handoff/pending/2026-09-10_001_waocopy_finalize-publication-safe-copy.md` or its reconciled completed path; `handoff/reports/06-sksu-owner-and-seo-decision-sheet.md`; the four records named by task 001; its concrete board run/log
- Dependencies: formal done outcome and completion evidence for task 001

## Acceptance Criteria
- [ ] Every changed pointer is reviewed.
- [ ] No withheld claim remains in a public field.
- [ ] Copy is natural, coherent, and audience-appropriate.
- [ ] Provenance fields are independently confirmed unchanged.
- [ ] Outcome is supported by exact file/pointer evidence.

## Implementation Notes
### Do:
- Distinguish rendered public fields from non-rendered provenance.
- Cite file paths and JSON pointers.
### Don't:
- Rewrite copy, broaden scope, or infer owner facts.

## Testing Requirements
- Test Command: read-only JSON parsing and pointer inspection of the four records; safe to repeat.
- Test Command: read-only diff and provenance comparison against task 001 evidence; safe to repeat.

## Verification Checklist (waohebrewqa Final Gate)
- [ ] **npm run build** — N/A: read-only copy verification before application wiring.
- [ ] **npm run test** — N/A: repository test script is not this verifier’s evidence source.
- [ ] **Dev server smoke test** — N/A: records are not yet rendered.
- [ ] **Evidence screenshots** — N/A: no UI under verification.

**Report Outcome:** PASS requires independent evidence for all criteria. Deterministic language or claim failure is FAIL; missing dependency evidence is BLOCKED.

### Escalation Routing (waohebrewqa decision)
On PASS, report readiness for the named implementation handoff `handoff/pending/2026-09-10_003_waoengineer_build-content-driven-site.md`; do not dispatch it. On FAIL, return exact pointers to waocopy through the orchestrator.

## Handoff Instructions for Hermes
1. Read this file completely before starting.
2. Verify the concrete done parent and evidence before inspection.
3. Remain read-only.
4. Execute every requirement and acceptance criterion.
5. Report PASS, FAIL, or BLOCKED with exact evidence.
6. Do not dispatch or create another task.
7. Record the formal board outcome before prose and read it back.
8. Only the executor reconciles this handoff’s disposition to its evidenced outcome.
