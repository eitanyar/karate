# Correct SKSU Media Fallback and Mobile Drawer

WARNING - HEBREW-SAFETY: waoengineer types ZERO Hebrew bytes in this task. Preserve every existing Hebrew-bearing file and string byte-for-byte; labels and media titles continue to flow only from existing runtime data.

WARNING - EXECUTION SCOPE: one outcome-owned local correction and named checks only. Safe local checks may repeat without weakening assertions. No deployment, `deploy.sh`, commit, push, provider access, external media or thumbnail download, media playback, form submission, new Hebrew copy, unrelated redesign, or historical handoff mutation is authorized.

## Metadata
- Task ID: 2026-09-11_003
- Target Agent: waoengineer
- Priority: P0-Critical
- Estimated Complexity: Moderate
- Created By: waostrategy (Strategist, GPT-5.6 Sol)
- Created At: 2026-09-11T08:01:22+07:00
- Status: pending
- Contract Version: 3
- Dispatch Approved: yes after planning card `t_9f769a85` is formally done; Adam must use that card as the implementation card's sole parent
- Observable Outcome: Approved video placements have a nonblank, usable, provider-inert initial presentation and full-width local fallback, while the 390px mobile menu opens as a viewport-wide drawer with its existing keyboard behavior intact.
- Required Capabilities / Preflight Evidence: `waoengineer` context_length is 1,000,000 at `/home/eitanya/wao/AGENTS.md:27-36`; the five small source/test seams, local command output, and narrow screenshots are well below capacity.
- Accepted Dependencies / Board Parent IDs: formal visual FAIL card `t_b9c5a168`; formally done planning card `t_9f769a85` before dispatch; approved media mapping and structural PASS from `t_b449a3df` remain accepted
- Supersedes: only the two visual failures recorded on `t_b9c5a168`; preserve `handoff/completed/2026-09-11_002_waoengineer_restore-approved-sksu-media.md` and all historical evidence unchanged
- Execution Class: outcome-owned-local
- Local Correction Budget: one goal-mode run, at most 45 minutes and 12 goal turns; repeat only the named local checks until PASS
- Automatic Redispatch: none for deterministic, dependency, capability, or protocol blocks

## Context
The structural media restoration passed, but independent visual QA found blank privacy iframe surfaces with only approximately 68x73px fallback thumbnails on desktop, and a 47.34px-wide open menu at 390x844. Correct these exact presentation seams without changing content, the approved 16-placement/15-ID mapping, routes, or unrelated design.

## Specification

### Requirements:
1. Before editing, read this handoff, formal cards `t_b9c5a168` and `t_b449a3df`, `handoff/completed/2026-09-11_002_waoengineer_restore-approved-sksu-media.md`, `app/_components/video-embed.tsx`, `app/_components/mobile-navigation.tsx`, `app/_components/site-header.tsx`, `app/globals.css`, `tests/media-restoration.test.mjs`, `tests/navigation.test.mjs`, `content/media-manifest.json`, `package.json`, and relevant installed Next 15 App Router guidance under `node_modules/next/dist/docs/`.
2. Capture `git status --porcelain=v1`. Treat the shared dirty worktree as immutable outside the allowlist. Pre-task SHA-256 values are: `video-embed.tsx` `14ccc9be473e65fd743b4f8d1bdc4224c2ca11edf4b965daf6bfde0d02635bff`; `mobile-navigation.tsx` `2c03757e5f337d7f4b2ce5cf3c9293f16777034f9f65f0c8d41f36a9ec60e23e`; `globals.css` `9ca1600e83a71d77328b51af294318f6f523acc1475f0c100768d6a2587e6de7`; media test `fc04d19cdbdfc36789343f3788a50418cb111cb53f0c243ef2495d59570b83c7`; navigation test `734f429ad2b47d9ecb898b1be650d2ace0e01dde4da3668edca1c7f1be5f1e3b`.
3. Correct `VideoEmbed` in `app/_components/video-embed.tsx` so its initial rendered state never depends on a cross-origin iframe becoming visibly useful. Initially render a full 16:9, keyboard-operable local load surface that uses the existing `title` runtime value, contains no remote thumbnail, makes no provider request, and creates the existing titled `youtube-nocookie.com` iframe only after explicit activation. Loading the iframe must not request autoplay or start playback. Keep the exact validated `videoId`, privacy host, canonical watch URL, title, and approved mapping contract.
4. Keep a local fallback visibly available before and after iframe creation. It must use only `/assets/sksu-brochure.jpg`, the existing runtime `title`, and the canonical watch URL; its anchor/card must span the component's usable inline width, have a minimum 44px keyboard target, visible focus, non-character-by-character title wrapping, and a materially larger layout than the current 72px thumbnail-only affordance at both 850px content width and 390px viewport. The brochure remains fallback/secondary rather than the homepage's primary media; do not use it as a CSS background, fake thumbnail, or replacement media claim.
5. Preserve the exact route-to-ID manifest, 16 placements/15 unique IDs, homepage `GPcCd06UeyY` ownership, and one shared `VideoEmbed` seam. Do not edit `content/media-manifest.json`, `app/_lib/media.ts`, `app/page.tsx`, `app/_components/content-page.tsx`, content records, or route modules.
6. Correct `MobileNavigation` and its styles so the open menu at 390x844 is a responsive viewport-wide drawer: bounding width equals the viewport within one CSS pixel, inline edges align to the viewport, vertical overflow scrolls inside the drawer, links occupy the available width with at least 44px block targets, and labels do not collapse into a narrow character-wrapping strip. Preserve `aria-expanded`, `aria-controls`, current-route indication, Enter/Space button activation, Tab traversal, Escape close, focus return to the trigger, link-click close, and the hidden closed state. Desktop navigation at widths above the existing breakpoint remains unchanged.
7. Update `tests/media-restoration.test.mjs` to prove the provider-inert initial state, explicit iframe creation path, no autoplay, persistent full-width local fallback, no remote thumbnail/provider outside the approved iframe/watch URL, and unchanged exact mapping assertions. Update `tests/navigation.test.mjs` to prove the viewport-wide fixed drawer contract, scroll containment, full-width 44px links, and retention of the existing keyboard/ARIA source paths. Do not weaken any existing assertion.
8. Preserve the 24-file Hebrew-bearing baseline and aggregate manifest hash `84289ee08d117a5f3837bdba7f2729aca1a8efcb7c802f15f881d52d8fbfe669`. Run the ordered checks below and report changed files, exact outcomes, initial-load provider request count, drawer geometry, screenshots, final hashes, and final `git status --porcelain=v1`.

### Constraints:
- Modify only `app/_components/video-embed.tsx`, `app/_components/mobile-navigation.tsx`, `app/globals.css`, `tests/media-restoration.test.mjs`, and `tests/navigation.test.mjs`; create no source, content, asset, or test file.
- Preserve existing Hebrew bytes, approved media mapping, routes, metadata, copy, forms, contact targets, desktop navigation, and visual system.
- No deployment, `deploy.sh`, commit, push, provider access, external media/thumbnail request or download, playback, form submission, new package, new Hebrew copy, unrelated redesign, process replacement, or historical handoff mutation.
- Do not move or edit any file under `handoff/in-progress/`, `handoff/completed/`, or `handoff/failed/`.

### Technical Details:
- Files to Modify: `app/_components/video-embed.tsx`; `app/_components/mobile-navigation.tsx`; `app/globals.css`; `tests/media-restoration.test.mjs`; `tests/navigation.test.mjs`
- Files to Create: none
- Files to Read: `handoff/completed/2026-09-11_002_waoengineer_restore-approved-sksu-media.md`; `app/_components/site-header.tsx`; `app/page.tsx`; `app/_components/content-page.tsx`; `app/_lib/media.ts`; `content/media-manifest.json`; `package.json`; relevant installed Next documentation; cards `t_b9c5a168` and `t_b449a3df`
- Dependencies: formally done planning card `t_9f769a85` as sole implementation parent; existing project-owned runtime on port 3000 for bounded read-only rendering checks

## Acceptance Criteria
- [ ] Initial page load shows no blank iframe shell and makes zero YouTube/provider/remote-thumbnail requests; each iframe exists only after an explicit keyboard-operable load action and has no autoplay behavior.
- [ ] Every media placement retains a full-width, focus-visible local fallback/card before and after iframe creation; it is usable at 850px and 390px without becoming homepage primary media.
- [ ] The exact 16 placements/15 unique IDs, privacy host, titles, canonical watch links, homepage mapping, and all Hebrew-bearing bytes remain unchanged.
- [ ] At 390x844 the open drawer is 390px wide within one CSS pixel, both inline edges align to the viewport, links fill available width with at least 44px targets, labels remain readable, and document horizontal overflow is zero.
- [ ] Enter/Space, Tab, Escape, focus return, link-click close, hidden state, current-route indication, and desktop navigation remain intact.
- [ ] Focused tests, TypeScript, canonical tests, isolated build, local runtime geometry/network checks, `git diff --check`, and Hebrew manifest comparison pass with zero task-owned failures.
- [ ] No excluded file, provider, external media, form, deployment, repository history, process ownership, or unrelated visual behavior changes.

## Implementation Notes
### Do:
- Use a deterministic poster-first/load-on-intent state; cross-origin iframe `load` or timeout is not evidence that pixels are usable.
- Use existing runtime `title` values and ASCII-only code; keep the fallback present if the user chooses to instantiate the iframe.
- Make the mobile drawer viewport-relative rather than sizing it against the narrow trigger container.
### Don't:
- Detect visual iframe success through `onLoad`, retry providers, fetch thumbnails, autoplay, hide the only fallback after activation, duplicate route mappings, or add visible Hebrew literals.
- Change header architecture, desktop navigation, content layout, media IDs, forms, routes, or unrelated breakpoints.

## Testing Requirements
- Test Command: `node --test tests/media-restoration.test.mjs tests/navigation.test.mjs`; expected both named suites to run with zero failures and retain all prior assertions; safe to repeat.
- Test Command: `npx tsc --noEmit`; expected zero TypeScript errors; safe to repeat.
- Test Command: `npm run test`; expected all discovered `tests/*.test.mjs` suites to run with zero failures; safe to repeat.
- Test Command: build one temporary `/tmp` mirror containing project source/config plus a symlink to existing `node_modules`, then run `npm run build`; expected successful static generation without mutating the live `.next` or listener; safe to repeat.
- Test Command: against the existing `http://100.102.160.114:3000` runtime, inspect `/karate-in-rishon-le-zion` and `/kata/` at 1280px without activating any media control; expected filled initial load surfaces, usable full-width fallback cards, zero initial provider/thumbnail requests, and zero horizontal overflow. Inspect `/` at 390x844; keyboard-open the menu and record drawer/link bounding boxes, Tab focus, Escape close/focus return, and zero horizontal overflow. Do not activate load/watch links, submit forms, contact external targets, restart the listener, or access providers; safe to repeat.
- Test Command: regenerate the 24-entry Hebrew SHA-256 manifest, run `git diff --check`, hash all five allowlisted files, and inspect final `git status --porcelain=v1`; expected exact Hebrew equality and no out-of-scope change; safe to repeat.

## Verification Checklist (waoengineer Final Gate)
- [ ] **npm run build** — Run in the temporary mirror and attach exit status plus generated-route summary.
- [ ] **npm run test** — Attach focused and canonical discovery with zero failed tests.
- [ ] **Dev server smoke test** — Attach desktop media surface/fallback dimensions, initial network request count, and 390x844 drawer/link geometry from the existing Tailscale runtime.
- [ ] **Evidence screenshots** — Attach narrow screenshots for Rishon desktop initial media, Kata desktop initial media, and homepage 390x844 with keyboard-open drawer; do not activate media, forms, or external targets.

**Report Outcome:** Record focused_acceptance and release_health separately. Implementation PASS requires every criterion above, preserved Hebrew bytes/mapping, and no excluded side effect. Release health remains false until the independent visual recheck below returns PASS; deployment is not authorized.

### Escalation Routing (waoengineer decision)
After local PASS, report readiness for this independent contract; do not author, create, or dispatch it.

**New Independent Visual Recheck Contract:** Adam creates one non-goal-mode `waouxtester` card only after the implementation card is formally done, using that concrete done implementation card as sole parent and this handoff as the full contract source. The verifier is read-only against `http://100.102.160.114:3000`: inspect `/karate-in-rishon-le-zion` and `/kata/` at 1280px without activating media and prove each initial surface is visibly filled, each persistent fallback is full-width/usable rather than an approximately 68x73px thumbnail, no alt leakage or horizontal overflow exists, and initial performance resources contain no YouTube/provider/remote-thumbnail request. At exact 390x844 on `/`, keyboard-open the menu and prove a 390px viewport-wide drawer within one CSS pixel, readable full-width links with at least 44px targets, zero horizontal overflow, visible Tab focus, Escape close, and focus return; also confirm desktop navigation remains unchanged. Capture one narrow screenshot per route/state. Do not edit, deploy, commit, push, access providers or credentials, activate load/watch links or playback, download media/thumbnails, submit forms, open contact targets, restart processes, or dispatch successors. PASS requires independent pixel, geometry, keyboard, network, and repository-integrity evidence; deterministic mismatch is FAIL with route/viewport/selector evidence; BLOCKED is reserved for inaccessible existing runtime/capability or missing formally done parent evidence.

If local correction requires new Hebrew, a changed media mapping, provider access, a new asset, form behavior, or a broader header/redesign decision, report the exact boundary to waostrategy. Ordinary task-owned test, type, build, CSS, or component defects remain inside this run.

## Handoff Instructions for Hermes
1. Read this file completely and confirm `t_9f769a85` is formally done and is the current card's sole parent.
2. Confirm every Files to Read path exists; capture the dirty baseline and verify the five pre-task hashes before edits.
3. Re-check HEBREW-SAFETY before each write; type no Hebrew and preserve the 24-file manifest exactly.
4. Modify only the five allowlisted files and implement only the two named visual outcomes.
5. Keep correcting task-owned local failures within the stated goal-mode budget without weakening acceptance.
6. Run every ordered check and collect actual runtime/network/geometry/screenshot evidence without provider access, playback, downloads, forms, external contacts, or process replacement.
7. Report changed files, stage outcomes, mapping/Hebrew preservation, hashes, final status, and independent-recheck readiness.
8. Call `kanban_complete` only after local PASS. Use `kanban_block` only for a defined external/safety/approval/capability/architecture boundary, not an ordinary implementation defect.
9. Do not create or dispatch the independent verifier; Adam/orchestrator owns the later manual dispatch.
10. Do not deploy, run `deploy.sh`, commit, push, mutate historical handoffs, or touch excluded files.
11. Only the executor reconciles this handoff's disposition; preserve every historical file, card, event, run, and comment unchanged.
