# Review Completed SKSU Hebrew Content Records

⚠️ HEBREW-SAFETY: This is a read-only review of existing Hebrew content. Do not edit any file under `content/`. Create only the named QA report. You may quote existing strings byte-exactly and suggest a minimal correction only when documenting a language defect; do not draft new page copy.

⚠️ EXECUTION SCOPE: Inspect only the named local files and run only the inert local checks below. Do not start the SKSU implementation rebuild, run the app, access credentials or providers, browse external sources, publish, deploy, commit, or push.

## Metadata
- Task ID: 2026-09-10_001
- Target Agent: waohebrewqa
- Priority: P1-High
- Estimated Complexity: Moderate
- Created By: waostrategy (Strategist, GPT-5.6 Sol)
- Created At: 2026-09-10T16:06:04+07:00
- Status: pending
- Contract Version: 3
- Dispatch Approved: yes — the completed content-record dependency exists, all 20 JSON records parse, and the review is local/read-only except for its report
- Observable Outcome: One complete QA report classifies every SKSU content record for natural Israeli Hebrew and unsafe or unsupported claims without changing source content or beginning implementation.
- Required Capabilities / Preflight Evidence: Normal `waohebrewqa` text-review capability only; `AGENTS.md:52-61` records Gemini 3.8 Flash and a 1,000,000-token context length. The 20 source records total 102,602 bytes, so the expected source, evidence, and report payload is safely within capacity.
- Accepted Dependencies / Board Parent IDs: `handoff/completed/02-hebrew-content-records.md` exists and is the accepted artifact dependency; no Kanban parent ID is required for this independent read-only QA task
- Supersedes: none
- Execution Class: read-only-repeatable
- Local Correction Budget: Up to 30 minutes or 8 goal turns for report-only corrections and repeatable inert checks; never modify the reviewed JSON
- Automatic Redispatch: none for deterministic, dependency, capability, or protocol blocks

## Context
The completed SKSU records must receive a dedicated Hebrew-language and claim-safety gate before any rebuild consumes them. The review must distinguish preserved historical anchors from publishable prose and from current operational claims; source notes are provenance aids, not automatic support for publication.

## Specification

### Requirements:
1. Review all 20 JSON records listed under Files to Read. Review every user-facing string in `metadata`, `breadcrumbs`, `intro`, `sections`, `relatedLinks`, `cta`, and the shared site labels; inspect `_sourceNotes` as evidence and risk context, not as customer-facing prose.
2. Create `handoff/reports/03-sksu-hebrew-content-qa.md`. Do not edit, normalize, reformat, or rewrite any source JSON.
3. Give each record one verdict: `PASS` or `REVISE`. Include one summary table row per exact path with separate Naturalness and Claim Safety results plus finding IDs.
4. Assess natural contemporary Israeli Hebrew, non-translated Sabra cadence, grammar, agreement, punctuation, spelling, terminology consistency, singular-male direct address where direct address is used, mixed Hebrew/Latin readability, and overly long or crowded sentences. Treat 12–15 words as the preferred sentence range, not a reason to alter exact historical anchors or fragment meaning.
5. Check every factual, comparative, outcome, safety, health, child-development, psychological, educational, schedule, age, pricing, credential, programme, location, response-process, testimonial, statistic, percentage, timeframe, rank, and guarantee-like claim against only the accepted local evidence.
6. Apply these evidence rules: owner-confirmed current facts are limited by `handoff/completed/02-hebrew-content-records.md:11-19` and `handoff/reports/01-legacy-source-and-seo-map.md:231-243`; an archived statement may support a clearly historical statement but does not establish current SKSU operations, efficacy, safety, programme availability, or typical outcomes; a `_sourceNotes` assertion does not independently validate the claim it describes.
7. Flag categorical or guarantee-like phrasing even when inherited from an archived article. Pay special attention to precise belt timelines, practice-hour calculations, success percentages, guaranteed progression, health or mental-wellbeing benefits, self-defense effectiveness/safety, child motivation or discipline outcomes, programme assumptions, and claims that training produces life outcomes.
8. Preserve the distinction between immutable evidence anchors and editable prose. `titleAnchor` and historically verified `h1` values must not receive a rewrite recommendation; if an anchor is risky, stale, unnatural, or conflicts with unresolved current facts, classify it `SEO/OWNER REVIEW REQUIRED` and cite the accepted anchor source. Newly authored `metadata.description`, body, labels, and CTA text may receive `COPY REVISION` findings.
9. Include a disposition legend containing `COPY REVISION`, `OWNER FACT REQUIRED`, `SEO/OWNER REVIEW REQUIRED`, and `REMOVE CLAIM`. For every finding, record: unique ID, severity (`BLOCKER`, `HIGH`, `MEDIUM`, or `LOW`), exact file path, exact JSON Pointer, a short byte-exact source quotation, category, why it fails, evidence file and line range, and one legend disposition.
10. A language-only finding may include one minimal corrected candidate based solely on existing meaning. Do not invent facts, offers, programme details, credentials, outcomes, or replacement positioning. Claim findings must recommend removal/qualification or identify the missing owner evidence rather than manufacture safer-sounding facts.
11. Include a separate cross-record consistency section covering brand/style naming, instructor naming, location, phone/contact channels, free-trial wording, training terminology, direct-address consistency, and any duplicated or conflicting claim.
12. End with exactly one overall verdict: `OVERALL: PASS` only if every record passes both dimensions and no escalation remains; otherwise `OVERALL: REVISE`. Then list blockers and required decision owners concisely.
13. Preserve Eitan’s human Hebrew spot-check as mandatory after this QA. State explicitly that neither this report nor a PASS authorizes the SKSU implementation rebuild, production wiring, publication, or deployment.

### Constraints:
- Modify no existing file. Create only `handoff/reports/03-sksu-hebrew-content-qa.md`.
- Do not browse the web, inspect Facebook, call Wayback, or supplement the accepted evidence from memory.
- Do not evaluate route implementation, schema architecture, SEO strategy, internal-link completeness, rendering, media, or visual design except where mixed-script text itself creates a language-readability finding.
- Do not change or propose changes to canonical paths, `titleAnchor`, or verified `h1` values; route those cases to the named owner.
- Do not start the SKSU implementation rebuild or create an engineer, copywriter, or successor handoff.
- Do not run `npm run dev`, `npm run build`, `npm run test`, any generator, `deploy.sh`, commit, or push.

### Technical Details:
- Files to Modify: none
- Files to Create: `handoff/reports/03-sksu-hebrew-content-qa.md`
- Files to Read: `AGENTS.md` (use `/home/eitanya/wao/AGENTS.md`); `handoff/completed/02-hebrew-content-records.md`; `handoff/reports/01-legacy-source-and-seo-map.md`; `.hermes/plans/2026-09-10_103835-sksu-custom-redesign-and-legacy-url-restoration.md`; `content/site.json`; `content/pages/why-us.json`; `content/pages/locations/rishon-le-zion.json`; `content/pages/training/kihon.json`; `content/pages/training/kata.json`; `content/pages/training/komita.json`; `content/pages/training/self-defense-exercise.json`; `content/learn/10-reasons-to-learn-karate.json`; `content/learn/10-tips-to-get-a-black-belt.json`; `content/learn/8-elements-in-karate-lessons.json`; `content/learn/choosing-the-wrong-martial-art.json`; `content/learn/develop-discipline.json`; `content/learn/does-karate-suite-your-family.json`; `content/learn/how-long-a-black-belt-takes.json`; `content/learn/how-to-choose-karate-studio.json`; `content/learn/make-your-kid-practice-karate-at-home.json`; `content/learn/what-is-karate.json`; `content/learn/what-to-notice-in-karate-lessons.json`; `content/learn/why-learn-the-basics.json`; `content/learn/להתאמן-בקראטה-בבית.json`
- Dependencies: The completed brief and all 20 records must exist. Baseline deterministic SHA-256 over each sorted relative path, NUL, file bytes, NUL is `727f4e720c62f5460d41e1b53cce61eba2c4990ba2379715af351cdd8b0acd00`. Accepted evidence hashes are `bca737acbbc86160e1701046462e976c348bc38b26482acf67deadcbd0e929d0` for the completed brief, `5719bac3d9c9d5125669cf523ca31d656245cbb6b68b9f1f4958741a4eb97487` for the source/SEO map, and `c2b838e8323db75cb75f7eb81462da20e7fbaa20ae4d1e484f29ccd7ff6c8f41` for the plan.

## Acceptance Criteria
- [ ] The report contains exactly 20 per-record summary rows, one for every named JSON path, and each has Naturalness, Claim Safety, verdict, and finding IDs.
- [ ] Every finding has severity, exact path, JSON Pointer, short source quotation, category, reason, accepted evidence citation, and disposition.
- [ ] The review distinguishes verified current facts, clearly historical facts, unsupported current claims, general advice, and guarantees; `_sourceNotes` are not treated as independent proof.
- [ ] Historical `titleAnchor` and verified `h1` values remain untouched and risky anchors are routed to SEO/owner review rather than rewritten.
- [ ] Cross-record terminology and fact consistency are assessed, and Eitan’s human spot-check is preserved.
- [ ] The report contains exactly one valid overall verdict and explicitly denies rebuild, wiring, publication, and deployment authorization.
- [ ] All 20 source JSON files still parse and their deterministic aggregate hash remains the baseline value.
- [ ] No file other than the named QA report is created or modified by this task.

## Implementation Notes
### Do:
- Read the completed brief first, then the accepted evidence, then review each record field by field.
- Prefer precise findings over broad stylistic rewrites; group a repeated defect only when every affected path and JSON Pointer is listed.
- Treat unsafe absolutes and unsupported implied outcomes as claim defects even when the sentence is fluent.
### Don't:
- Do not approve a claim merely because it is old, familiar, plausible, or repeated across records.
- Do not turn this review into copy drafting, SEO revision, schema review, or implementation planning.
- Do not silently repair any reviewed source.

## Testing Requirements
- Test Command: Run these two safe, repeatable stages from `/home/eitanya/karate` after the report is complete.

  Stage 1 — source integrity and JSON parse:
  `python3 -c 'from pathlib import Path; import hashlib,json; fs=sorted(Path("content").rglob("*.json")); assert len(fs)==20,len(fs); h=hashlib.sha256(); [(json.loads(p.read_text(encoding="utf-8")),h.update(p.as_posix().encode()+b"\0"+p.read_bytes()+b"\0")) for p in fs]; assert h.hexdigest()=="727f4e720c62f5460d41e1b53cce61eba2c4990ba2379715af351cdd8b0acd00",h.hexdigest(); print("PASS: 20 SKSU JSON records parse and source hash is unchanged")'`

  Stage 2 — report contract:
  `python3 -c 'from pathlib import Path; import re; p=Path("handoff/reports/03-sksu-hebrew-content-qa.md"); s=p.read_text(encoding="utf-8"); fs=sorted(x.as_posix() for x in Path("content").rglob("*.json")); missing=[x for x in fs if x not in s]; assert not missing,missing; assert s.count("OVERALL: PASS")+s.count("OVERALL: REVISE")==1; required=["Naturalness","Claim Safety","JSON Pointer","COPY REVISION","OWNER FACT REQUIRED","SEO/OWNER REVIEW REQUIRED","REMOVE CLAIM","human spot-check","does not authorize"]; absent=[x for x in required if x not in s]; assert not absent,absent; print("PASS: SKSU Hebrew QA report contract")'`

## Verification Checklist (waoengineer Final Gate)
Report each applicable check separately; N/A requires a task-specific reason:

- [ ] **npm run build** — N/A; report-only language QA and the rebuild is explicitly prohibited.
- [ ] **npm run test** — N/A; the two focused Python stages fully cover source integrity and report structure.
- [ ] **Dev server smoke test** — N/A; no route or runtime change is authorized.
- [ ] **Evidence screenshots** — N/A; no UI or rendered-content review is in scope.

**Report Outcome:** Record source_integrity and report_contract separately. PASS requires both commands to pass, all acceptance criteria to be evidenced, and only the named report to differ. A `REVISE` editorial verdict is a successful QA task outcome when the report is complete; it does not mean the QA execution failed.

### Escalation Routing (waoengineer decision)
- Return language and claim findings to waostrategy and Eitan for triage. Eitan performs the mandatory human Hebrew spot-check.
- Any later source correction belongs to a separately approved `waocopy` task. Any anchor change requires SEO/owner approval first.
- Do not select or dispatch a correction task, and do not begin the SKSU implementation rebuild.

## Handoff Instructions for Hermes
1. Read this file completely before starting.
2. Confirm the completed brief, accepted evidence, and all 20 JSON files exist; a missing dependency is a `needs_input` hold, not permission to infer content.
3. Verify the three evidence hashes and aggregate content hash before review. If any differs, stop and report the mismatch.
4. Review exactly the named content records and create only the named report.
5. Do not edit source content, code, configuration, plans, or historical handoffs.
6. Run both Testing Requirements stages after completing the report; repeat only to correct the report itself.
7. Report each acceptance criterion, both command outputs, the overall editorial verdict, and the exact changed-file list.
8. Record formal completion when the review and checks pass, even if the editorial verdict is `OVERALL: REVISE`; record a block only for missing/mutated evidence, capability, or safety boundary.
9. Do not create or dispatch any follow-up, implementation, publication, or deployment task.
10. Only the executor reconciles this handoff’s disposition to its evidenced outcome. Historical files remain immutable.
