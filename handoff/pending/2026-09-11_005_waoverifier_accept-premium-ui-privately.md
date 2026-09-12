# Accept Premium UI Privately

WARNING - HEBREW-SAFETY: This is read-only acceptance. Type zero Hebrew bytes and preserve every repository byte.

WARNING - EXECUTION SCOPE: read-only source, board, test, build, and static-output verification only. No source/test/content/handoff edits, implementation correction, browser visual judgment, contact activation, form submission, external request, provider access, credentials, deployment, `deploy.sh`, process replacement, commit, push, or historical-card mutation is authorized. Never print, log, quote, screenshot, or include personal contact data in the task result.

## Metadata
- Task ID: 2026-09-11_005
- Target Agent: waoverifier
- Priority: P0-Critical
- Estimated Complexity: Simple
- Created By: waostrategy (Strategist, GPT-5.6 Sol)
- Created At: 2026-09-11T10:05:21+07:00
- Status: pending
- Contract Version: 3
- Dispatch Approved: yes; owner direction explicitly accepts display-layer phone redaction as non-product evidence and requests private built-href verification
- Observable Outcome: The existing premium UI implementation receives read-only structural acceptance when a fresh build proves its contact link is valid without disclosing personal contact data, thereby authorizing the pending independent visual review.
- Required Capabilities / Preflight Evidence: `waoverifier` is configured with an existing environment and Gemini 3.8 Flash; its real `context_length: 1000000` is recorded at `/home/eitanya/wao/AGENTS.md:87-93`, and this narrow source/build payload is comfortably below capacity.
- Accepted Dependencies / Board Parent IDs: formally done planning card `t_f5ca0452` as the acceptance card's sole parent; blocked implementation card `t_60574db6` and run 24 are evidence to inspect, not dependency parents
- Supersedes: only the contact-href blocker conclusion on `t_60574db6`; preserve that blocked card, run, comments, handoff 004, and implementation bytes unchanged
- Execution Class: read-only-repeatable
- Local Correction Budget: no correction is authorized; named read-only checks may repeat for at most 20 minutes and 6 turns
- Automatic Redispatch: none for deterministic, dependency, capability, or protocol blocks

## Context
The outcome-owned implementation completed its allowlisted UI work and passed focused tests, TypeScript, canonical tests, a fresh isolated build, and bounded runtime checks, but card `t_60574db6` blocked after contact digits appeared masked in agent-visible evidence. The owner now classifies display-layer redaction as non-product evidence and requires one private semantic check of the built contact `href`; no implementation change or personal-data disclosure is permitted.

## Specification

### Requirements:
1. Read this handoff, `handoff/pending/2026-09-11_004_waoengineer_remediate-premium-core-ui.md`, card `t_60574db6`, run 24 and its full worker log, current `app/contact/page.tsx`, `content/site.json`, `tests/premium-ui.test.mjs`, `package.json`, and current `git status --porcelain=v1`. Treat worker prose as self-report until corroborated.
2. Verify the pinned hashes below before any check. If any differs, return `BLOCKED` for implementation drift without printing changed contact-bearing lines or values. Do not edit or restore anything.
3. Treat masked or redacted phone-number text in tool displays, source-rendering output, command output, card prose, logs, or screenshots as privacy-layer evidence only. It is neither product PASS nor product FAIL. Do not compare, transcribe, or report displayed phone digits.
4. Run the focused suite, TypeScript check, canonical tests, and one fresh build in a new temporary `/tmp` mirror. The mirror may contain project files and a symlink to existing `node_modules`; exclude `.git`, `.next`, and prior `out`. Do not mutate the repository build directories or existing port-3000 runtime.
5. In the fresh mirror only, use a non-echoing Node assertion to read the generated `/contact` HTML, derive the expected callable target from the existing confirmed WhatsApp URI in `content/site.json`, locate the `a.contact-phone` anchor, and assert all of the following in memory: the source URI pathname contains digits only; the built `href` exactly equals `tel:+` followed by that pathname; the built value matches `^tel:\+\d+$`; and it contains no masking character. The checker must emit only `contact_href_private_check=PASS` or `contact_href_private_check=FAIL`, set a matching exit status, and never emit the actual URI, digits, source line, HTML fragment, regex match, exception payload, or file content.
6. Do not use `grep`, `git diff`, shell tracing, browser inspection, screenshots, accessibility snapshots, or generic assertion/error serialization on any contact-bearing source or generated HTML. Redirect the build output normally, but ensure the private checker catches errors and emits only the allowlisted PASS/FAIL token.
7. Re-hash every pinned path and inspect `git status --porcelain=v1` after checks. PASS requires byte-identical hashes, the same baseline status, named tests discovered with zero failures, TypeScript success, build success, and the private built-href token `PASS`.
8. On PASS, formally complete this acceptance card and report only check names, counts/statuses, hashes for non-contact artifacts, and the private token. Never report personal contact data or a contact-file hash next to extracted content. On deterministic mismatch return FAIL; use BLOCKED only for drift, missing evidence/capability, or a genuine safety boundary.
9. A formal PASS authorizes Adam to dispatch `handoff/pending/2026-09-10_005_waouxtester_verify-sksu-visual-rtl.md` as the pending independent visual review. Adam must create one non-goal-mode `waouxtester` card using this concrete formally-done acceptance card as its sole parent; this acceptance result satisfies that handoff's structural-parent condition. Do not create or dispatch that card yourself.

### Constraints:
- Files to modify or create in the repository: none. Temporary mirror/build files under `/tmp` only.
- Preserve the implementation from `t_60574db6` exactly; do not repair, refactor, reformat, revert, stage, or reconcile it.
- Personal contact data is compare-only in process memory and prohibited from stdout, stderr, reports, comments, screenshots, filenames, shell history additions, or artifacts.
- No visual acceptance, browser interaction, external contact activation, provider request, deployment, process replacement, or historical-card/handoff mutation.

### Technical Details:
- Files to Modify: none
- Files to Create: none in repository; one disposable `/tmp` mirror is permitted and must be removed after verification
- Files to Read: `handoff/pending/2026-09-11_004_waoengineer_remediate-premium-core-ui.md`; `app/contact/page.tsx`; `content/site.json`; `tests/premium-ui.test.mjs`; `package.json`; board card `t_60574db6`, run 24, and its worker log
- Dependencies: `t_f5ca0452` is formally done. Current pinned SHA-256 values: `app/page.tsx` `e25abe855e842c3f1116787998d41e3b700e989bb35a8516f8ec8c4959d448a1`; `app/contact/page.tsx` `45fc2ca48fa734f80f91c8922b7ac24d70f837009b75920c348feca127b7d655`; `app/_components/content-page.tsx` `41ee31f841f0628e8e31414eb7baad5b76326a9c1a51ad3bdb7e8a7cc5c4aa14`; `app/globals.css` `83435415881577a26722aee45ec35d33d1c14fa3525e8e3941c3090ccaf467fe`; `content/media-manifest.json` `58d323cfe41cb37bbc0bbf48995cf3153138c2c092a686f035eb76f821ae8c8b`; `next.config.mjs` `6e4ea2aa7230479c8bcebb2182c90011bc85949904abdb57d495447f66824837`; `tests/media-restoration.test.mjs` `78f05d4875e8239e7eedc4b2a583011845575fdeeb4739ebb0687ad2f3c329b8`; `tests/premium-ui.test.mjs` `19cabe6131a7124e27f19da9b2ec3e4b5bc5574c6ace2c1e46e0ca8c21ecc5e4`; handoff 004 `04170bf172388a552b2d52e75c8120f66a606360e034997500f574fc7d2234e1`; pending visual handoff `ec0148483cc091e5992dd12b571312023a925f70e1637cbdec4e2f7662539fbe`.

## Acceptance Criteria
- [ ] Current implementation and protected handoff hashes match the pinned baseline before and after verification.
- [ ] `node --test tests/premium-ui.test.mjs tests/media-restoration.test.mjs tests/navigation.test.mjs`, `npx tsc --noEmit`, and canonical `npm run test` pass with named suites discovered and zero failures.
- [ ] A fresh isolated temporary-mirror `npm run build` succeeds without touching repository build state or the existing runtime.
- [ ] The private static-output checker returns only `contact_href_private_check=PASS` and exit zero, proving the built click-to-call target is valid and equals the confirmed existing contact source without revealing it.
- [ ] No repository byte, card, history, process, provider, external contact, or personal-data disclosure changes or occurs.
- [ ] Formal PASS explicitly authorizes the pending independent visual review with this done acceptance card as its sole parent; FAIL or BLOCKED does not.

## Implementation Notes
### Do:
- Compare sensitive values only in process memory and reduce evidence to a boolean token.
- Distinguish independent rerun evidence from the implementation worker's self-report.
- Remove the temporary mirror after the checks and preserve the dirty repository baseline.
### Don't:
- Interpret redaction in any display channel as the built product value.
- Print contact-bearing source, HTML, matches, exceptions, diffs, or extracted attributes.
- Fix code, weaken checks, run visual QA, or dispatch the visual review.

## Testing Requirements
- Test Command: `node --test tests/premium-ui.test.mjs tests/media-restoration.test.mjs tests/navigation.test.mjs`; expected all three named suites discovered with zero failures; safe to repeat.
- Test Command: `npx tsc --noEmit`; expected zero TypeScript errors; safe to repeat.
- Test Command: `npm run test`; expected every discovered `tests/*.test.mjs` suite to run with zero failures; safe to repeat.
- Test Command: create a fresh `/tmp` mirror with `rsync` excluding `.git`, `.next`, `out`, and `node_modules`, symlink the repository's existing `node_modules`, and run `npm run build` inside it; expected successful generation; safe to repeat after deleting the prior mirror.
- Test Command: in that mirror run a Node process with shell tracing disabled and a top-level `try/catch` that checks `out/contact.html` or `out/contact/index.html`, reads `content/site.json`, applies the four in-memory assertions in Requirement 5, prints exactly `contact_href_private_check=PASS` on success or `contact_href_private_check=FAIL` on any error, and exits zero or one respectively; safe to repeat and prohibited from printing any exception or sensitive value.
- Test Command: hash the ten paths pinned above without printing their content, compare final `git status --porcelain=v1` to the captured baseline, then delete the temporary mirror; expected exact preservation; safe to repeat.

## Verification Checklist (waoengineer Final Gate)
- [ ] **npm run build** — Fresh temporary-mirror build succeeds; attach only exit status and generated-route count, never generated contact content.
- [ ] **npm run test** — Focused and canonical suites pass with discovered/pass/fail counts.
- [ ] **Dev server smoke test** — N/A: this acceptance isolates the static-output privacy question and must not touch the existing runtime; visual/runtime coverage belongs to the authorized successor.
- [ ] **Evidence screenshots** — N/A: screenshots cannot prove the sensitive `href` safely and the pending visual review owns pixel evidence.

**Report Outcome:** Record focused_acceptance and release_health separately. `focused_acceptance=PASS` requires every criterion above and formally accepts the preserved implementation despite privacy-layer display redaction. `release_health` remains false until the pending independent visual review returns PASS; deployment remains unauthorized.

### Escalation Routing (waoengineer decision)
On PASS, report that Adam is authorized to dispatch `handoff/pending/2026-09-10_005_waouxtester_verify-sksu-visual-rtl.md` with this concrete done acceptance card as sole parent. On FAIL, report only the failed stage and boolean token without sensitive values; return the deterministic defect to waostrategy. On BLOCKED, name the missing capability, drift, or safety boundary. Do not author or dispatch a successor.

## Handoff Instructions for Hermes
1. Read this file completely and confirm formally done parent `t_f5ca0452` is the current card's sole parent.
2. Read blocked card `t_60574db6`, run 24, and its worker log as evidence without modifying them.
3. Capture baseline status and verify every pinned hash; stop on drift.
4. Remain read-only, preserve all repository bytes, and keep personal contact data out of every output channel.
5. Run the ordered focused, type, canonical, temporary-build, and private static-output checks exactly as scoped.
6. Do not use display redaction as product evidence; use only the private in-memory equality and validity result.
7. Recheck hashes and status, remove the temporary mirror, and report focused acceptance separately from release health.
8. Call `kanban_complete` only on full PASS. Call `kanban_block` only for a genuine drift, capability, evidence, or safety boundary; deterministic check failure is FAIL evidence and must not be hidden.
9. On PASS, state the pending visual review authorization and exact handoff path, but do not create or dispatch its card.
10. Do not edit, deploy, run `deploy.sh`, commit, push, access providers, activate contact/media controls, replace processes, or mutate historical cards/handoffs.
11. Only the executor reconciles this handoff's disposition; preserve every historical file, card, event, run, and comment unchanged.
