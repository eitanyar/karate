# Restore Approved SKSU Media

WARNING - HEBREW-SAFETY: waoengineer types ZERO Hebrew bytes in this task. Every existing Hebrew-bearing file and string remains byte-identical. Reuse existing runtime values such as `page.h1` and `site.organization.fullName` for accessible labels; do not type, retype, reformat, translate, or invent Hebrew or visible copy.

WARNING - EXECUTION SCOPE: one outcome-owned local correction and named checks only. Safe local checks may repeat within the correction budget without weakening assertions. No deployment, `deploy.sh`, commit, push, form submission, messaging, credential access, provider writes, external media or thumbnail download, new copy, unrelated redesign, or historical handoff mutation is authorized.

## Metadata
- Task ID: 2026-09-11_002
- Target Agent: waoengineer
- Priority: P0-Critical
- Estimated Complexity: Moderate
- Created By: waostrategy (Strategist, GPT-5.6 Sol)
- Created At: 2026-09-11T07:23:43+07:00
- Status: pending
- Contract Version: 3
- Dispatch Approved: yes after planning card `t_82cfb3e1` is formally done; Adam must use that card as the implementation card's sole parent
- Observable Outcome: The homepage and five mapped historical pages render only the owner-approved SKSU YouTube set through one reusable privacy-enhanced lazy/fallback-backed component, while the homepage no longer uses the logo as its sole or primary hero media.
- Required Capabilities / Preflight Evidence: `waoengineer` context_length is 1,000,000 at `/home/eitanya/wao/AGENTS.md:27-36`; expected payload is seven small render seams, one ASCII media manifest/loader, one focused test file, test/type/build output, and bounded runtime evidence, well below capacity. Existing Node/Next dependencies and the project-owned port-3000 runtime are available.
- Accepted Dependencies / Board Parent IDs: `t_e7674670` is formally `done` with independent deterministic FAIL evidence and 15/15 privacy-enhanced embed documents available; `t_82cfb3e1` must be formally `done` before dispatch
- Supersedes: only the media omissions identified by `t_e7674670` and the media exclusion at `handoff/failed/2026-09-10_003_waoengineer_build-content-driven-site.md:42-45`; preserve both records and all other historical files unchanged
- Execution Class: outcome-owned-local
- Local Correction Budget: one goal-mode run, at most 45 minutes and 12 goal turns; repeat safe task-owned tests, type checks, isolated build, and local runtime checks until PASS
- Automatic Redispatch: none for deterministic, dependency, capability, or protocol blocks

## Context
Independent verification `t_e7674670` passed routes, framework assets, typecheck, tests, static build, runtime integrity, and all 15 external embed-document checks, but found the logo as the homepage's sole hero visual and zero approved video placements. This corrective restores only that bounded media contract; existing content, routes, metadata, conversion behavior, and unrelated design remain unchanged.

## Specification

### Requirements:
1. Before editing, read this handoff, `.hermes/plans/2026-09-10_103835-sksu-custom-redesign-and-legacy-url-restoration.md:136-175,196-204,340-349`, `handoff/failed/2026-09-11_001_waoverifier_verify-recovered-runtime-structure.md:25-47,55-64`, formal card `t_e7674670`, `app/page.tsx`, `app/_components/content-page.tsx`, `app/_lib/content.ts`, the five mapped route modules, `app/globals.css`, all four current tests, `package.json`, `content/`, and `public/assets/`. Read the relevant installed Next 15 App Router guidance under `node_modules/next/dist/docs/` before selecting client/server and image APIs.
2. Capture `git status --porcelain=v1`. Produce a sorted SHA-256 manifest of every current UTF-8 file under `app/`, `content/`, `tests/`, and `public/` containing Hebrew code points; it currently contains 24 files and the SHA-256 of the newline-terminated `sha256sum`-style manifest is `84289ee08d117a5f3837bdba7f2729aca1a8efcb7c802f15f881d52d8fbfe669`. At completion, every baseline entry must remain hash-identical; new ASCII-only files do not alter this baseline.
3. Create `content/media-manifest.json` as ASCII-only structured data and `app/_lib/media.ts` with an asserted loader such as `getVideosForRoute(route)`. Encode exactly these placements and no other remote media: `/` -> `GPcCd06UeyY`; `/karate-in-rishon-le-zion` -> `4IeVUxLJ3FA`; `/kata/` -> `X79rmar8Z2Y`, `xRF9cH4MTFE`, `IcrTGaQzYXs`, `m3VIpAFCe0g`, `XBFLtIMEFhw`; `/kihon/` -> `4VWvGOpNPLQ`, `Dnga2diqAxg`, `CgtQASkEMu0`, `43lxEE5fId4`; `/komita/` -> `-JjRNP9_Pys`, `43lxEE5fId4`, `ETHKkR94p_c`, `Jb__TmK6IBg`; `/self-defense-exercise/` -> `A82JNlU9JnU`. Preserve the duplicate `43lxEE5fId4` placement on both required pages. Record owner-owned/approved provenance from the plan without adding claims or visible copy.
4. Create `app/_components/video-embed.tsx` exporting `VideoEmbed`. It must accept validated IDs and an existing runtime title, use only `https://www.youtube-nocookie.com/embed/<ID>`, provide an explicit 16:9 intrinsic/aspect-ratio contract, a non-empty `title`, native `loading="lazy"` or a keyboard-operable click-to-load control, no autoplay audio, and a usable local fallback based only on `/assets/sksu-brochure.jpg` plus the canonical YouTube watch link. The 389x960 brochure may be a fallback/secondary archival asset only; it must not become the homepage's primary visual. Do not use remote thumbnails, CSS background imagery as media, Wayback, Facebook, additional providers, new packages, or downloaded files.
5. Replace `app/page.tsx`'s `.hero-art` logo-only `<Image>` with the `GPcCd06UeyY` `VideoEmbed` as the primary real DOM hero media. Keep the SKSU logo in `app/_components/site-header.tsx` and `app/_components/site-footer.tsx` as brand chrome. Preserve all homepage Hebrew and existing navigation, metadata, trial CTA, and form behavior byte-for-byte.
6. Extend `app/_components/content-page.tsx` so it obtains the route's approved media from `getVideosForRoute(page.route)` and renders each item once through `VideoEmbed` after the existing sections and before related links. Derive titles from existing `page.h1` plus an ASCII ordinal when needed; do not expose `_sourceNotes`, provenance, IDs as visible copy, or any new heading/paragraph. Leave the five thin route modules unchanged.
7. Add only the responsive media styles required in `app/globals.css`: stable 16:9 layout, contained iframe/fallback, visible keyboard focus, no horizontal overflow at 390px, and `prefers-reduced-motion` compliance. Preserve the existing visual system; do not restyle unrelated sections.
8. Create `tests/media-restoration.test.mjs`. It must prove exact route-to-ID equality including 16 placements/15 unique IDs, no unapproved ID/provider/remote thumbnail/Wayback/Facebook reference, local fallback existence, reusable component use, homepage logo removal from `.hero-art`, privacy-enhanced host, title, lazy/click-to-load, intrinsic aspect ratio, and all five mapped page render seams. Keep the four existing tests and their assertions at equal strength.
9. Recompute the Hebrew-file manifest and require exact baseline equality. Run the ordered focused test, type check, canonical suite, isolated production build, and bounded runtime checks below. Keep correcting task-owned source/tests/styles inside this run; do not edit content copy, weaken assertions, restart/replace the port-3000 process, or touch historical handoffs.
10. Report changed files, exact test/type/build outcomes, both-host route/media placement results, Hebrew manifest equality, final `git status --porcelain=v1`, and independent-verification readiness. Do not deploy or dispatch.

### Constraints:
- Modify only `app/page.tsx`, `app/_components/content-page.tsx`, and `app/globals.css`; create only `app/_components/video-embed.tsx`, `app/_lib/media.ts`, `content/media-manifest.json`, and `tests/media-restoration.test.mjs`.
- Existing Hebrew-bearing bytes, content records, route intent, metadata/canonicals, navigation, CTA/form behavior, and brand-chrome logo use are immutable.
- No new copy, external media/thumbnail download, Facebook/Wayback access, new dependency, autoplay audio, form submission, deployment, `deploy.sh`, commit, push, or unrelated redesign.
- Do not move or edit any file under `handoff/failed/`, `handoff/completed/`, or `handoff/in-progress/`.

### Technical Details:
- Files to Modify: `app/page.tsx`; `app/_components/content-page.tsx`; `app/globals.css`
- Files to Create: `app/_components/video-embed.tsx`; `app/_lib/media.ts`; `content/media-manifest.json`; `tests/media-restoration.test.mjs`
- Files to Read: `.hermes/plans/2026-09-10_103835-sksu-custom-redesign-and-legacy-url-restoration.md`; `handoff/failed/2026-09-11_001_waoverifier_verify-recovered-runtime-structure.md`; `app/_lib/content.ts`; `app/karate-in-rishon-le-zion/page.tsx`; `app/kata/page.tsx`; `app/kihon/page.tsx`; `app/komita/page.tsx`; `app/self-defense-exercise/page.tsx`; `tests/content-schema.test.mjs`; `tests/legacy-routes.test.mjs`; `tests/navigation.test.mjs`; `tests/publication-safety.test.mjs`; `package.json`; current `content/`, `public/assets/`, and relevant installed Next documentation
- Dependencies: formally done planning card `t_82cfb3e1`; accepted independent defect evidence `t_e7674670`; existing dependencies and project-owned port-3000 runtime

## Acceptance Criteria
- [ ] Exactly 16 approved placements representing 15 unique IDs render on their exact mapped routes; no other remote media exists.
- [ ] Every player uses the reusable titled privacy-enhanced lazy/click-to-load component with a 16:9 contract, no autoplay audio, and the approved local fallback contract.
- [ ] Homepage primary hero media is `GPcCd06UeyY`; `/assets/sksu-logo.png` is absent from `.hero-art` and remains only in brand chrome.
- [ ] The brochure remains fallback/secondary only; there are no remote thumbnails, Wayback/Facebook references, downloads, blank media shells, or alt-text leakage.
- [ ] All 24 baseline Hebrew-bearing files remain byte-identical at aggregate manifest hash `84289ee08d117a5f3837bdba7f2729aca1a8efcb7c802f15f881d52d8fbfe669`.
- [ ] The focused test, TypeScript check, all canonical tests, static build, and two-host structural smoke checks pass with zero task-owned failures.
- [ ] No route, metadata, navigation, conversion behavior, content copy, historical handoff, dependency, deployment, commit, or process ownership is changed.

## Implementation Notes
### Do:
- Keep the route/ID allowlist in one ASCII data source and fail closed on malformed IDs, unknown routes, hosts, or fallback paths.
- Reuse existing `page.h1` and `site.organization.fullName` values for titles; use ordinals for repeated page videos without authoring copy.
- Preserve the current server/content architecture and make the smallest media-only diff.
### Don't:
- Put route-specific ID arrays in six page components, expose provenance fields, duplicate the embed implementation, or treat the logo/brochure as authentic primary hero photography.
- Download posters, hotlink YouTube thumbnails, add Facebook/Wayback media, activate playback, submit the form, or expand into visual redesign.

## Testing Requirements
- Test Command: `node --test tests/media-restoration.test.mjs`; expected the named focused tests to discover and pass every exact mapping, component, safety, fallback, and homepage-hero assertion; safe to repeat.
- Test Command: `npx tsc --noEmit`; expected zero TypeScript errors; safe to repeat.
- Test Command: `npm run test`; expected all five `tests/*.test.mjs` files to be discovered and zero failed tests; safe to repeat.
- Test Command: in one temporary mirror under `/tmp` containing `app/`, `content/`, `public/`, `tests/`, package/config files and a symlink to the existing `node_modules`, run `npm run build`; expected successful static export without mutating the live dev server's `.next`; safe to repeat after corrections.
- Test Command: on both `http://127.0.0.1:3000` and `http://100.102.160.114:3000`, GET only `/`, `/karate-in-rishon-le-zion`, `/kata/`, `/kihon/`, `/komita/`, and `/self-defense-exercise/`; expected HTTP 200 and exact source/DOM placement through `youtube-nocookie.com`, with no unapproved IDs or logo hero. Do not activate playback or request media streams/thumbnails; safe to repeat.
- Test Command: regenerate and compare the 24-entry Hebrew SHA-256 manifest, run `git diff --check`, and inspect final `git status --porcelain=v1`; expected exact Hebrew equality, clean diff check, and only allowlisted task changes beyond the pre-existing dirty baseline; safe to repeat.

## Verification Checklist (waoengineer Final Gate)
- [ ] **npm run build** — Run in the temporary mirror; attach exit status and generated-route summary.
- [ ] **npm run test** — Attach focused and canonical test discovery with zero failures.
- [ ] **Dev server smoke test** — Attach both-host six-route status and exact placement table without restarting the project-owned listener or activating media.
- [ ] **Evidence screenshots** — Capture the rendered homepage hero and one multi-video page at desktop plus the homepage at 390px; prove non-logo media structure, no blank shell, no overflow, and no alt-text leakage. This is implementation self-evidence, not independent visual acceptance.

**Report Outcome:** Record focused_acceptance and release_health separately. Implementation PASS requires every criterion above and preserved Hebrew bytes. Release health remains false until the later independent structural verifier returns PASS; visual/RTL and playback quality remain separate later gates. No deployment is authorized.

### Escalation Routing (waoengineer decision)
After local PASS, report readiness for the following embedded independent contract; do not author another handoff, create a card, or dispatch it.

**Later Independent Structural Verifier Contract:** Adam creates one non-goal-mode `waoverifier` card only after the implementation card is formally done, using that concrete done implementation card as the sole parent and this handoff as the full contract source. The verifier is read-only: inspect the implementation diff/run/evidence and `t_e7674670`; independently rerun the focused test, TypeScript check, canonical tests, isolated build, Hebrew manifest comparison, both-host six-route source/DOM matrix, exact 16-placement/15-ID allowlist, homepage non-logo primary media, privacy-enhanced title/lazy/aspect/fallback semantics, and exclusions. It must not edit source, tests, content, handoffs, process/cache state, submit forms, activate playback, download external media/thumbnails, deploy, commit, push, grade visual polish, or dispatch successors. PASS requires independent evidence for every criterion; deterministic mismatch is FAIL with route/selector/ID evidence; BLOCKED is reserved for missing done-parent evidence, inaccessible existing runtime/dependency, or a genuine safety/capability boundary. The verifier records formal board outcome and final repository/process integrity.

If local correction cannot proceed because of an external/safety/approval/capability/architecture boundary, report that exact boundary and preserved passing checks to waostrategy. Do not turn ordinary red tests, type errors, build failures, or task-owned render defects into a strategy escalation.

## Handoff Instructions for Hermes
1. Read this file completely before starting.
2. Confirm all Files to Read exist, `t_82cfb3e1` is formally done, and the current task has it as sole parent.
3. Capture the dirty baseline and Hebrew manifest before edits; preserve all pre-existing unrelated changes.
4. Re-check HEBREW-SAFETY before every write. If an edit requires any new Hebrew byte or visible copy, stop before it and record the language-ownership boundary.
5. Execute only the media restoration outcome and allowlisted files; do not add helpful redesign or content changes.
6. Keep correcting task-owned local failures within the stated goal-mode budget without weakening acceptance.
7. Run every ordered test and verification check; no inferred PASS.
8. Record changed files, stage-level evidence, Hebrew equality, runtime placement matrix, final status, and independent-verification readiness.
9. Call `kanban_complete` only after local PASS. Use `kanban_block` only for the defined external/safety/approval/capability/architecture boundary, not an ordinary implementation defect.
10. Do not create or dispatch the verifier or any successor; Adam/orchestrator owns the later manual dispatch.
11. Do not deploy, run `deploy.sh`, commit, push, submit forms, activate playback, download media, access credentials/providers, or mutate historical handoffs.
12. Only the executor reconciles this handoff's disposition; preserve all historical files, cards, events, runs, logs, and evidence unchanged.
