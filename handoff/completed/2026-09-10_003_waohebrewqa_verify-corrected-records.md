# Verify corrected SKSU Hebrew content records

⚠️ EXECUTION SCOPE: This is an independent, read-only Hebrew QA review. Do not edit any JSON record. Create only the named QA report. Do not start the website rebuild, run the application, access external sources, publish, deploy, commit, or push.

## Metadata
- Task ID: 2026-09-10_003
- Target Agent: waohebrewqa
- Priority: P1-High
- Estimated Complexity: Moderate
- Status: pending
- Dispatch Approved: yes — `handoff/completed/2026-09-10_002_waocopy_correct-approved-hebrew-findings.md` and `handoff/reports/04-sksu-approved-copy-corrections.md` exist.
- Observable Outcome: Independently confirm whether the approved 39 correction/removal findings are now safe, natural Israeli Hebrew and whether the excluded owner/SEO/synthetic boundaries stayed intact.
- Execution Class: read-only-repeatable

## Inputs and decisions to preserve
- Original findings: `handoff/reports/03-sksu-hebrew-content-qa.md`.
- Correction record: `handoff/reports/04-sksu-approved-copy-corrections.md`.
- Eitan approved correction/removal only for the explicit allowlist in the correction handoff and completed the mandatory representative Hebrew spot-check with PASS.
- Do not ask for or infer unresolved Arie facts. Belt timelines, programme/age availability, class duration/schedule, syllabus scope, instructor credentials, and the 2014 seminar relevance remain unresolved.
- All `titleAnchor`, historical `h1`, and legacy route values remain preserved pending separate owner/SEO review.
- The synthetic home-practice record `content/learn/להתאמן-בקראטה-בבית.json` remains excluded and must not be treated as approved for publication.

## Review requirements
1. Read the two reports and the 16 corrected records named in `handoff/completed/2026-09-10_002_waocopy_correct-approved-hebrew-findings.md`.
2. Review every approved finding ID listed in that handoff. For each, state PASS or FAIL with the exact file and JSON Pointer; confirm that corrected prose is natural Israeli Hebrew, keeps singular-male address where applicable, and contains no new unsupported outcomes, health/safety claims, statistics, operational facts, credentials, programme availability, or timeline claims.
3. Independently check that the excluded boundaries remain intact: the 21 historical-anchor/route values cited in the original QA report; unresolved owner-fact passages; the four excluded records; and the synthetic home-practice record.
4. Create `handoff/reports/05-sksu-post-correction-hebrew-qa.md`. Include: an outcome table for all approved finding IDs, an explicit excluded-boundaries result, any remaining concern with exact path/pointer, and one overall result of `PASS` or `FAIL`.
5. Use `PASS` only if every approved finding is safe and natural, every excluded boundary is preserved, and no new material Hebrew or claim-safety defect was introduced in the edited fields. Otherwise use `FAIL` and specify only the failed IDs/paths; do not rewrite source copy.

## Constraints
- Modify no `content/` file and no application file.
- Do not alter or recommend a rewrite of title anchors, historical H1 values, legacy routes, unresolved owner facts, or the synthetic article.
- Do not browse the web or use external evidence.
- Run only UTF-8 JSON parsing and read-only git checks (`git diff --check`, `git status --porcelain`).

## Acceptance criteria
- The QA report independently covers all 39 approved corrections/removals and all preserved boundaries.
- Every conclusion contains enough exact file/pointer evidence for the orchestrator to verify the result.
- No files other than the QA report and this handoff's queue disposition are created or modified.
- The report explicitly states that it does not authorize a rebuild, publication, deployment, commit, or push.

## Handoff instructions
1. Read this handoff, both cited reports, and all listed source records before reviewing.
2. Do not edit source content, even to repair a detected defect.
3. Move this handoff to `handoff/completed/` only with an overall PASS; otherwise move it to `handoff/failed/` with the reason.
4. When done, call `kanban_complete` with a one-paragraph English summary and the exact `git status --porcelain` output. If blocked, call `kanban_block` with the reason. Exiting without one terminal Kanban call is a protocol failure.
