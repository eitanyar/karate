# Finalize SKSU Publication-Safe Copy

⚠️ HEBREW-SAFETY: This task is owned by waocopy. Preserve every historical `titleAnchor`, route, and `_sourceNotes` value byte-identically. Write Hebrew only in the exact public fields named below.

⚠️ EXECUTION SCOPE: Local content edits and read-only validation only. No application edits, publication, deployment, server, commit, push, provider access, media access, or live data.

## Metadata
- Task ID: 2026-09-10_001
- Target Agent: waocopy
- Priority: P1-High
- Estimated Complexity: Moderate
- Created By: waostrategy (Strategist, GPT-5.6 Sol)
- Created At: 2026-09-10T17:54:04+07:00
- Status: pending
- Contract Version: 3
- Dispatch Approved: yes
- Observable Outcome: Every public field governed by a WITHHOLD decision has conservative publishable Hebrew that contains no withheld fact, while provenance fields remain byte-identical.
- Required Capabilities / Preflight Evidence: waocopy context_length 1,000,000 confirmed in `/home/eitanya/wao/AGENTS.md:39-48`; normal local file access.
- Accepted Dependencies / Board Parent IDs: none; accepted evidence is `handoff/reports/05-sksu-post-correction-hebrew-qa.md` PASS plus `handoff/reports/06-sksu-owner-and-seo-decision-sheet.md`.
- Supersedes: none
- Execution Class: outcome-owned-local
- Local Correction Budget: Safe local JSON parsing and scoped text checks may repeat for up to 30 minutes / 8 goal turns.
- Automatic Redispatch: none for deterministic, dependency, capability, or protocol blocks

## Context
The closure sheet withholds unsupported programme, timing, syllabus, and vetting claims but leaves those strings inside source records as provenance. Replace only the named public fields so the future renderer can consume records directly without publishing withheld facts.

## Specification

### Requirements:
1. In `content/pages/locations/rishon-le-zion.json`, replace `/metadata/title`, `/metadata/description`, and `/h1` with current, audience-neutral copy. Do not claim a children’s programme, children’s self-defense, age range, guaranteed outcome, schedule, price, credential, or accessibility detail.
2. In `content/learn/10-tips-to-get-a-black-belt.json`, revise `/sections/0/list/1` to retain the planning/realistic-expectations lesson without any numeric belt timeline or promise.
3. In `content/learn/how-long-a-black-belt-takes.json`, revise `/metadata/description`, `/intro`, `/sections/0/body/0`, `/sections/0/body/1`, `/sections/1/body/0`, and `/sections/1/body/1` so no numeric duration, technique count, kata count, combat-set count, or SKSU syllabus implication remains. Preserve the article’s process-over-speed intent.
4. In `content/learn/what-to-notice-in-karate-lessons.json`, revise `/metadata/description` and `/sections/1/body/1` to present neutral instructor-selection questions without implying that SKSU performs background checks, holds unspecified certifications, supports beyond-black-belt qualification, or satisfies an organizational-support standard.
5. Review dependent nearby sentences only for direct contradictions introduced by Requirements 1-4. Do not broaden the edit allowlist unless a contradiction is identified and listed in the completion report with its JSON pointer.
6. Keep singular-male address and natural Israeli Hebrew; keep sentences at 12-15 words where practical. Do not insert unverifiable claims to maintain sentence length.
7. Preserve approved entities: SKSU; Shotokan Karate-Do; Arie Nikar; Rishon LeZion; the confirmed address; phone; and free trial. Preserve the offer as a free trial lesson without inventing conditions.
8. Keyword targets: karate in Rishon LeZion, karate dojo, Shotokan karate, black-belt journey, choosing a karate instructor. Persona: a prospective adult student or parent evaluating a credible local dojo. Do not force keywords or change page intent.

### Constraints:
- `content/pages/locations/rishon-le-zion.json` `/titleAnchor`, `/route`, and `/_sourceNotes` are immutable.
- Every `titleAnchor`, `route`, and `/_sourceNotes` in all four records is immutable.
- Do not edit any other record, application file, handoff, report, asset, or configuration.
- Do not restore any fact withheld at `handoff/reports/06-sksu-owner-and-seo-decision-sheet.md:23-28,51-55`.
- Do not touch the excluded synthetic record.

### Technical Details:
- Files to Modify: `content/pages/locations/rishon-le-zion.json`; `content/learn/10-tips-to-get-a-black-belt.json`; `content/learn/how-long-a-black-belt-takes.json`; `content/learn/what-to-notice-in-karate-lessons.json`
- Files to Create: none
- Files to Read: `handoff/reports/06-sksu-owner-and-seo-decision-sheet.md`; `handoff/reports/05-sksu-post-correction-hebrew-qa.md`; the four files above
- Dependencies: accepted closure decisions and existing corrected records

## Acceptance Criteria
- [ ] All four files parse as JSON.
- [ ] Every named withheld numeric or qualification claim is absent from public fields.
- [ ] Location metadata and H1 are audience-neutral and contain only confirmed facts.
- [ ] All route, `titleAnchor`, and `_sourceNotes` values remain byte-identical.
- [ ] No file outside the four-file allowlist changes.

## Implementation Notes
### Do:
- Make direct, minimal JSON-string replacements at exact pointers.
- Report every changed JSON pointer.
### Don't:
- Rewrite whole articles, add sections, alter routes, or explain provenance in public copy.
- Modify historical anchors to make them look publishable.

## Testing Requirements
- Test Command: parse the four modified files with Python `json.load`; safe to repeat.
- Test Command: scoped search for the withheld numeric ranges/counts and qualification claims in public fields only; safe to repeat.
- Test Command: compare route, `titleAnchor`, and `_sourceNotes` values against pre-edit snapshots; safe to repeat.

## Verification Checklist (waocopy Final Gate)
- [ ] **npm run build** — N/A: content-only drafting precedes application wiring.
- [ ] **npm run test** — N/A: current repository test script is a known placeholder; scoped JSON checks are required instead.
- [ ] **Dev server smoke test** — N/A: application does not yet consume these records.
- [ ] **Evidence screenshots** — N/A: content-only task with no rendered seam.

**Report Outcome:** Record scoped content acceptance separately from future release health. PASS requires every named field and preservation check.

### Escalation Routing (waocopy decision)
The planned next gate is `handoff/pending/2026-09-10_002_waohebrewqa_verify-publication-safe-copy.md`. Do not dispatch it. Report any inability to remove a claim without changing page intent to waostrategy.

## Handoff Instructions for Hermes
1. Read this file completely before starting.
2. Check that all files listed in Files to Read exist.
3. If a dependency is missing, stop before edits and record a needs_input hold.
4. Execute only the named field edits.
5. Preserve all provenance values byte-identically.
6. Run all scoped checks and keep correcting in-scope failures without weakening acceptance.
7. Report every changed JSON pointer and preservation result.
8. Do not dispatch another task.
9. Record the formal board outcome before prose and read it back.
10. Only the executor reconciles this handoff’s disposition to its evidenced outcome.
