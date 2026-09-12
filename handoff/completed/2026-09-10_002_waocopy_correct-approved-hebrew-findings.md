# Correct approved SKSU Hebrew QA findings

⚠️ EXECUTION SCOPE: Edit only the listed JSON content records and create the one listed correction report. Do not edit application code, routes, SEO anchors, historical H1 values, package files, configuration, assets, or any handoff other than this task's own disposition. Do not start the website rebuild, run the application, publish, deploy, commit, or push.

## Metadata
- Task ID: 2026-09-10_002
- Target Agent: waocopy
- Priority: P1-High
- Estimated Complexity: Moderate
- Status: pending
- Dispatch Approved: yes — Eitan approved the safe default and completed the mandatory representative Hebrew spot-check with PASS.
- Observable Outcome: Correct only Eitan-approved editable Hebrew and claim-safety findings, leaving all unresolved owner facts, historical SEO anchors, and the synthetic home-practice record unchanged.
- Execution Class: outcome-owned-local
- Local Correction Budget: one bounded copy-edit pass; local JSON validation may be repeated.

## Approved decisions
- Apply only the `COPY REVISION` and `REMOVE CLAIM` finding IDs explicitly allowlisted below.
- Preserve every `titleAnchor`, every historical `h1`, every legacy route, and every unallowlisted field byte-for-byte.
- Do not state or infer unresolved Arie facts: belt timelines, programme or age availability, class schedule or duration, syllabus scope, instructor credentials, or the 2014 seminar's current relevance.
- Do not edit `content/learn/להתאמן-בקראטה-בבית.json`; its synthetic body remains excluded pending Eitan/Arie approval.
- Eitan's human Hebrew spot-check: PASS for the representative passages cited in `handoff/reports/03-sksu-hebrew-content-qa.md` lines 95–128, 429–493, 729–782, and 833–865.

## Specification
Read `handoff/reports/03-sksu-hebrew-content-qa.md` and make natural Israeli Hebrew corrections only for these approved finding IDs:

- `content/site.json`: `QA-SIT-01`, `QA-SIT-02`, `QA-SIT-03`. Correct both telephone URIs to the confirmed existing phone value shown in `handoff/completed/02-hebrew-content-records.md`; standardize the editable brand spelling.
- `content/pages/why-us.json`: `QA-WHY-02`, `QA-WHY-03`.
- `content/pages/locations/rishon-le-zion.json`: `QA-RLZ-03`, `QA-RLZ-04`.
- `content/pages/training/kihon.json`: `QA-KIH-02`.
- `content/pages/training/self-defense-exercise.json`: `QA-SDE-02`, `QA-SDE-03`.
- `content/learn/10-reasons-to-learn-karate.json`: `QA-LRN1-02`, `QA-LRN1-03`.
- `content/learn/10-tips-to-get-a-black-belt.json`: `QA-LRN2-03`, `QA-LRN2-04`.
- `content/learn/choosing-the-wrong-martial-art.json`: `QA-LRN4-02`, `QA-LRN4-03`.
- `content/learn/develop-discipline.json`: `QA-LRN5-02`, `QA-LRN5-03`, `QA-LRN5-04`, `QA-LRN5-05`, `QA-LRN5-06`.
- `content/learn/does-karate-suite-your-family.json`: `QA-LRN6-02`, `QA-LRN6-03`, `QA-LRN6-04`.
- `content/learn/how-long-a-black-belt-takes.json`: `QA-LRN7-03`, `QA-LRN7-05`. Remove the artificial practice-hour/frequency calculation without replacing it with an unconfirmed timeline or schedule.
- `content/learn/how-to-choose-karate-studio.json`: `QA-LRN8-02`, `QA-LRN8-03`.
- `content/learn/make-your-kid-practice-karate-at-home.json`: `QA-LRN9-02`, `QA-LRN9-03`, `QA-LRN9-04`, `QA-LRN9-05`.
- `content/learn/what-is-karate.json`: `QA-LRN10-02`, `QA-LRN10-03`.
- `content/learn/what-to-notice-in-karate-lessons.json`: `QA-LRN11-02`, `QA-LRN11-03`, `QA-LRN11-05`.
- `content/learn/why-learn-the-basics.json`: `QA-LRN12-02`, `QA-LRN12-03`, `QA-LRN12-04`.

For each allowlisted claim-safety correction, prefer removal or cautious, non-guaranteed wording. Do not create substitute facts, statistics, health outcomes, safety guarantees, child-development outcomes, operational promises, credentials, or programme claims. Use singular male where direct address remains.

## Files
- Files to modify: exactly the 16 allowlisted `content/*.json` paths named above.
- Files to create: `handoff/reports/04-sksu-approved-copy-corrections.md`.
- Files to read: `handoff/reports/03-sksu-hebrew-content-qa.md`, `handoff/completed/02-hebrew-content-records.md`, and the 16 allowlisted JSON records.

## Acceptance criteria
- Every allowlisted finding is corrected or, for a `REMOVE CLAIM`, removed without an unconfirmed replacement.
- All excluded findings and records remain unchanged, especially all title anchors, historical H1s, legacy routes, owner-fact findings, SEO/owner-review findings, and the synthetic home-practice record.
- Each modified JSON file parses as UTF-8 JSON.
- The correction report lists every edited file and completed finding ID, names all deliberately excluded findings/categories, and records the JSON parse command/result. It must not claim rebuild, publication, deployment, commit, or push authorization.
- No files outside the 16 JSON records, this handoff's queue disposition, and the correction report are changed.

## Handoff instructions
1. Read this specification and the QA report in full before editing.
2. Do not change anything not explicitly allowed above.
3. Run only a local JSON parse check, `git diff --check`, and `git status --porcelain`.
4. Move this handoff to `handoff/completed/` only after the acceptance criteria pass; otherwise move it to `handoff/failed/` with the reason.
5. When done, call `kanban_complete` with one English paragraph and the exact `git status --porcelain` output. If you cannot proceed, call `kanban_block` with the reason. Exiting without one of these calls is a protocol failure.
