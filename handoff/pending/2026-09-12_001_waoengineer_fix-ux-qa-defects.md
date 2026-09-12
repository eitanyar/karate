# Fix UX QA Defects

⚠️ HEBREW-SAFETY: waoengineer types ZERO Hebrew bytes in this task. Preserve all existing Hebrew strings byte-for-byte. This task changes ASCII-only JSX structure, CSS, and tests; do not add, rewrite, or reserialize visible copy.

⚠️ EXECUTION SCOPE: run only the named checks within their declared side-effect boundaries. Read-only source/log inspection and repeatable local checks are permitted. No deployment, `deploy.sh`, commit, push, provider access, form submission, contact activation, new copy, new assets, or historical handoff mutation is authorized.

## Metadata
- Task ID: 2026-09-12_001
- Target Agent: waoengineer
- Priority: P0-Critical
- Estimated Complexity: Simple
- Created By: waostrategy (Strategist, GPT-5.6 Sol)
- Created At: 2026-09-12T20:10:39+07:00
- Status: completed
- Contract Version: 3
- Dispatch Approved: yes; one future goal-mode `waoengineer` run after rechecking sole-writer availability
- Observable Outcome: The audited `/learn/`, homepage, and media-route defects are removed without changing any other design, content, route, media mapping, or behavior.
- Required Capabilities / Preflight Evidence: `waoengineer` has `context_length: 1000000` at `/home/eitanya/wao/AGENTS.md:27-36`; this four-source-file, one-test-file scope fits comfortably.
- Accepted Dependencies / Board Parent IDs: none; owner directly authorized this narrow correction from `.hermes/audits/karate-visual-qa-2026-09-12/ux-verdict.md`
- Supersedes: none; existing pending and historical handoffs remain untouched and are not part of this task
- Execution Class: outcome-owned-local
- Local Correction Budget: one goal-mode run, at most 45 minutes and 12 goal turns; repeat only named safe local checks until task-owned failures pass
- Automatic Redispatch: none for deterministic, dependency, capability, or protocol blocks

## Context
The 2026-09-12 visual audit failed three concrete defects: unreadable `/learn/` card headings/CTA lines, a hydration exception that exposes the red Next.js issue badge, and Next Image aspect-ratio warnings for `sksu-02.jpg`, `sksu-03.jpg`, and `sksu-05.jpg`. Current source and live runtime reproduce all three at the existing CSS, `VideoEmbed`, and homepage image seams.

## Specification

### Requirements:
1. Before editing, read `.hermes/audits/karate-visual-qa-2026-09-12/ux-verdict.md`, `app/globals.css`, `app/learn/page.tsx`, `app/page.tsx`, `app/_components/content-page.tsx`, `app/_components/video-embed.tsx`, `tests/premium-ui.test.mjs`, `tests/media-restoration.test.mjs`, `tests/preserved-visual-defects.test.mjs`, `next.config.mjs`, and `package.json`. Capture `git status --porcelain=v1`; do not overwrite unrelated dirty-worktree changes.
2. In `app/globals.css`, add the narrowest `.content-page .article-grid` descendant color rules needed so `/learn/` card headings/heading links use `var(--cream)` and direct card CTA links use `var(--gold)`. Preserve paragraph color and every other layout/style rule. Required contrast against `var(--soft)` is at least 4.5:1 at desktop and mobile.
3. In `VideoEmbed` at `app/_components/video-embed.tsx`, eliminate the hydration mismatch caused by placing the canonical fallback `<a>` inside `<iframe>`. Keep the same iframe URL, title, lazy loading, fullscreen permission, referrer policy, 16:9 player, and canonical YouTube watch fallback, but render the fallback as valid sibling markup outside the iframe. Add no visible string.
4. In `Home` at `app/page.tsx`, preserve the exact `coreImages` order and existing `Image` sources/alts/sizes. Correct only the `Image` width/height metadata and/or the narrow `.homepage-grid img` sizing rule needed to match each source's intrinsic ratio while preserving the existing 4:3 card crop and eliminating the three audited Next Image warnings. Intrinsic source dimensions are: `sksu-02.jpg` 1440×810, `sksu-03.jpg` 1080×720, and `sksu-05.jpg` 1280×960. Do not alter image files, crops, card geometry, route mapping, or other homepage content.
5. Create `tests/ux-qa-defects.test.mjs` with focused source assertions for: scoped readable `/learn/` heading and CTA colors; no anchor or React child inside the iframe; canonical watch fallback retained outside the iframe; all existing embed attributes retained; exact six-item `coreImages` order retained; and the explicit image-sizing correction that prevents one-axis Next Image warnings without removing the 4:3 card crop.
6. Run the ordered checks and live browser verification below. Correct only failures caused by this task. Report exact changed files, check outputs, browser console result, screenshot paths, and final `git status --porcelain=v1`.

### Constraints:
- Modify only `app/globals.css`, `app/page.tsx`, and `app/_components/video-embed.tsx`; create only `tests/ux-qa-defects.test.mjs`. `app/page.tsx` need not change if CSS alone safely resolves all three image warnings.
- Do not modify `app/learn/page.tsx`, `app/_components/content-page.tsx`, other routes/components, content records, assets, media mappings, configuration, dependencies, or existing tests.
- Preserve all existing Hebrew bytes, copy, links, metadata, routes, media IDs, visual hierarchy, responsive layout, and interaction behavior outside the three audited defects.
- Do not hide the development badge through CSS or configuration. Remove the underlying hydration exception and warnings.
- Do not deploy, run `deploy.sh`, commit, push, access credentials/providers, play media, submit forms, activate contact targets, or touch `handoff/in-progress/`, `handoff/completed/`, or `handoff/failed/`.

### Technical Details:
- Files to Modify: `app/globals.css`; `app/_components/video-embed.tsx`; conditionally `app/page.tsx`
- Files to Create: `tests/ux-qa-defects.test.mjs`
- Files to Read: `.hermes/audits/karate-visual-qa-2026-09-12/ux-verdict.md`; `app/learn/page.tsx`; `app/_components/content-page.tsx`; `tests/premium-ui.test.mjs`; `tests/media-restoration.test.mjs`; `tests/preserved-visual-defects.test.mjs`; `next.config.mjs`; `package.json`; relevant installed Next Image guidance/code under `node_modules/next/dist/`
- Dependencies: one shared-directory writer available. Planning baseline SHA-256: `app/globals.css` `d7265ec746efb9d7afd0bfe1f290eda61b22d986652171c789540606d34e030d`; `app/page.tsx` `8e286947d87142a1866a32b7077b446e74b4f8fc7192d34d1c9b2fc9d157580c`; `app/_components/content-page.tsx` `2408f136fc243071ade9e652ea4f4aa015676d2ac56ce5d923a57eec0ee4315e`; `next.config.mjs` `492785edabdd1e777f53474b93644ee793180de96e370025e5474c9367e9dce3`; audit verdict `7e2436d7b5a19fb191926ebf2babec11787be1d7e621f11218b630922a303e34`. Re-read current bytes at execution; hash drift is not automatically failure unless it conflicts with this scope.

## Acceptance Criteria
- [ ] `/learn/` card headings and CTA links are readable at 1440×900 and 390×844, with computed contrast at least 4.5:1 against each card background; card paragraphs and all layout remain unchanged.
- [ ] Fresh loads of `/`, `/kata/`, `/kihon/`, `/komita/`, and `/self-defense-exercise/` show no hydration exception, no red Next.js issue badge, and no Next Image one-axis aspect-ratio warning.
- [ ] `VideoEmbed` retains the exact approved provider URL semantics, lazy iframe, title, fullscreen/referrer behavior, 16:9 layout, media mappings, and canonical watch fallback without invalid iframe children.
- [ ] The homepage retains all six images in exact order, the existing 4:3 visual crop, and existing card geometry while the audited `sksu-02.jpg`, `sksu-03.jpg`, and `sksu-05.jpg` warnings are absent.
- [ ] Focused tests, TypeScript, canonical tests, isolated build, HTTP/browser checks, `git diff --check`, Hebrew-byte preservation, and scope inspection pass with zero task-owned failures.
- [ ] No excluded file, content, asset, route, historical handoff, provider, deployment target, repository history, or external control is changed.

## Implementation Notes
### Do:
- Scope learning-card colors beneath `.content-page .article-grid` so homepage learning cards are not restyled.
- Keep the canonical fallback link adjacent to the player inside the existing `<figure>`.
- Use Next-compatible two-axis image sizing; preserve the intended 4:3 rendered crop.
### Don't:
- Suppress the issue badge, warnings, or console output instead of fixing root causes.
- Remove the fallback link, iframe attributes, media IDs, images, or crop behavior.
- Reformat Hebrew-bearing JSX or make unrelated visual cleanup.

## Testing Requirements
- Test Command: `node --test tests/ux-qa-defects.test.mjs tests/premium-ui.test.mjs tests/media-restoration.test.mjs tests/preserved-visual-defects.test.mjs`; all named suites must be discovered with zero failures; safe to repeat.
- Test Command: `npx tsc --noEmit`; expected zero TypeScript errors; safe to repeat.
- Test Command: `npm run test`; expected every discovered `tests/*.test.mjs` suite to run with zero failures; safe to repeat.
- Test Command: run `npm run build` in a temporary `/tmp` mirror with project source/config and a symlink to existing `node_modules`; expected successful static generation without changing the shared `.next`; safe to repeat.
- Test Command: against the confirmed project-owned development server at `http://100.102.160.114:3000`, fresh-load `/learn/` at 1440×900 and 390×844, then `/`, `/kata/`, `/kihon/`, `/komita/`, and `/self-defense-exercise/`. Record HTTP 200, screenshot `/learn/` at both viewports, computed card colors/contrast, issue-badge presence, browser exceptions, and every console warning. Do not play media or use controls. Hot reload is preferred; restart only if the listener is proven to be this repository's current-user Next process.
- Test Command: run `git diff --check`; compare existing Hebrew-bearing literal inventories in modified files before/after; inspect the final diff and `git status --porcelain=v1`; expected no Hebrew change and no out-of-scope executor-created change.

## Verification Checklist (waoengineer Final Gate)
- [ ] **npm run build** — Isolated mirror build succeeds; attach exit status and generated-route summary.
- [ ] **npm run test** — Attach focused and canonical test discovery with zero failures.
- [ ] **Dev server smoke test** — All named routes return HTTP 200; attach console evidence proving zero hydration exceptions, issue badge, and audited image warnings.
- [ ] **Evidence screenshots** — Attach fresh `/learn/` screenshots at 1440×900 and 390×844 proving readable cards without layout regression.

**Report Outcome:** Record `focused_acceptance` and `release_health` separately. Local implementation PASS requires every criterion above. Release health remains false until waostrategy independently reruns the browser checks; deployment is not authorized.

### Escalation Routing (waoengineer decision)
After local PASS, report readiness for waostrategy's independent verification; do not author or dispatch another task. If the live listener cannot safely reflect the changed bytes, report the exact process/ownership evidence and preserve all source changes and local checks; do not kill an unverified process.

- **waoverifier** (runtime smoke checks) — Route here only if HTTP or runtime structure remains unclear after the named local checks.
- **waouxtester** (Hermes-native screenshot inspection) — Route here only if direct desktop/mobile contrast or layout evidence cannot be captured.
- **waoverifier-media** (video/audio QA) — N/A unless approved media embedding behavior changed beyond the named DOM-validity correction.

**If escalation needed:** Report the failing or unverified criterion, exact evidence path, preserved working boundaries, and required capability. waostrategy scopes any follow-up.

**If NO escalation needed:** Append to completion report: "**Escalation:** None — all checks self-sufficient."

## Handoff Instructions for Hermes
1. Read this file completely before starting.
2. Check that every Files to Read path exists and re-check sole-writer availability.
3. If a dependency is missing, stop before edits and record a dependency hold; do not manufacture a parent edge.
4. Execute only the three named corrections and exact allowlist; note unrelated opportunities without changing them.
5. Re-check HEBREW-SAFETY before every write; type no Hebrew bytes and preserve all existing Hebrew literals.
6. Keep correcting task-owned local failures within the stated budget without weakening acceptance.
7. Run every ordered check and collect actual live browser evidence.
8. Report focused acceptance, release health, changed files, checks, screenshots, console output, Hebrew preservation, and final status.
9. Only the executor reconciles this handoff's disposition to its evidenced outcome.
10. Do not deploy, run `deploy.sh`, commit, push, use providers/external controls, or mutate historical handoffs/cards.
