# Verify Recovered SKSU Runtime Structure

WARNING - HEBREW-SAFETY: Read existing Hebrew source and rendered output only. Do not edit, transcribe, or reproduce Hebrew into repository files or evidence summaries; identify Hebrew-bearing evidence by file path, line, selector, route, and hash.

WARNING - EXECUTION SCOPE: Independent read-only verification plus transient evidence and isolated generated output under `/tmp` only. No repository edits, process signals/restarts, cache mutation, installs, deployment, `deploy.sh`, commit, push, hosting changes, form submission, messaging, credentials, provider writes, media downloads, or successor creation/dispatch. Bounded anonymous GET requests to the exact YouTube privacy-enhanced embed URLs listed below are authorized only to verify availability; do not request media streams, thumbnails, accounts, APIs, or unrelated URLs.

## Metadata
- Task ID: 2026-09-11_001
- Target Agent: waoverifier
- Priority: P0-Critical
- Estimated Complexity: Moderate
- Created By: waostrategy (Strategist, GPT-5.6 Sol)
- Created At: 2026-09-11T00:01:00+07:00
- Status: pending
- Contract Version: 3
- Dispatch Approved: yes; use formally done cards `t_21159ec7` and `t_181ef89a` as the only board parents
- Observable Outcome: One bounded independent run records PASS or deterministic FAIL for the recovered two-host SKSU runtime, complete route/build contract, complete CSS/JavaScript asset contract, and objective homepage/original-video structure without changing repository bytes or processes.
- Required Capabilities / Preflight Evidence: `waoverifier` is model-family-independent from `waoengineer` and has context_length 1,000,000 at `/home/eitanya/wao/AGENTS.md:87-93`; expected payload is two parent records/logs, one isolated build/test log, one batched route/asset/media matrix, and one final report, well below capacity; local shell and HTTP access to both port-3000 hosts are required.
- Accepted Dependencies / Board Parent IDs: `t_21159ec7` (`done`, runtime/cache recovery and homepage asset self-check) and `t_181ef89a` (`done`, source/canonical correction and isolated test/type/build self-check); both statuses and runs were independently read from `/home/eitanya/.hermes/kanban/boards/sksu-redesign/kanban.db` on 2026-09-11
- Supersedes: execution of `handoff/pending/2026-09-10_007_waoverifier_verify-content-site-fail-fast.md` and `handoff/pending/2026-09-10_004_waoverifier_verify-content-driven-site.md`; preserve both files, blocked card `t_133106b4`, all parent cards, runs, events, logs, and evidence unchanged
- Execution Class: read-only-repeatable
- Local Correction Budget: No corrections, retries of deterministic failures, or forensic debugging; one non-goal-mode run, at most 25 minutes and eight grouped tool-result cycles
- Automatic Redispatch: none for deterministic, dependency, capability, or protocol blocks

## Context
The recovered runtime now self-reports healthy homepage CSS/JavaScript delivery, but that evidence was produced by the implementation owner and covered only the homepage. Current independent source/runtime inspection also finds no homepage iframe, uses `/assets/sksu-logo.png` as the homepage hero image, and exposes none of the archived page-specific YouTube embeds, so this fresh verifier must classify those objective product gaps rather than mistake styled HTML for redesign acceptance.

## Specification

### Requirements:
1. In one discovery batch, inspect this contract; both named parent tasks, task runs, events, and complete logs; their completed handoffs; task 007; reports 01 and 06; the SKSU redesign plan; current `app/`, `content/`, `public/`, `tests/`, package/config files; and the current port-3000 process identity. Treat worker summaries, screenshots, and prior matrices as self-report until reproduced.
2. Before any runtime or build check, capture `git status --porcelain=v1` and a SHA-256 manifest under `/tmp` for all regular files in `app/`, `content/`, `public/`, `tests/`, and `handoff/`, plus `.hermes/plans/2026-09-10_103835-sksu-custom-redesign-and-legacy-url-restoration.md`, `package.json`, `package-lock.json`, `next.config.mjs`, `tsconfig.json`, and `next-env.d.ts`. Record the listener PID, owner, command, cwd, bind, start time, process group, and parent chain. Continue only when one current-user Next dev tree from `/home/eitanya/karate` owns `0.0.0.0:3000`; never signal or alter it.
3. Request the complete approved route set named by `handoff/pending/2026-09-10_006_waoengineer_restore-port-3000-runtime.md:34-36` on both `127.0.0.1:3000` and `100.102.160.114:3000`, following only canonical application redirects. Record request route, final URL, status, media type, response size, elapsed time, title, description, canonical, H1 count, breadcrumbs, and applicable BreadcrumbList/Article schema. Every approved HTML route and `/sitemap.xml` must finish HTTP 200 without timeout; each HTML route must satisfy its route-specific metadata/schema contract.
4. Enforce the full CSS/JavaScript asset contract independently for every approved HTML response on both hosts, not only `/`. Parse every unique same-origin `href` or `src` beginning `/_next/static/`, preserve query strings, and require each HTML route to reference at least one stylesheet and one JavaScript asset. GET every deduplicated route-and-host reference with a 10-second timeout and no browser-cache reuse. Each asset must return directly with final HTTP 200, a non-empty body, no HTML fallback, and the same path/query identity requested; `.css` must use media type `text/css`, while `.js` must use `application/javascript` or `text/javascript`. Any redirect, 404, 5xx, timeout, empty body, stale reference, path/query mismatch, HTML body, or wrong media type is deterministic FAIL. Report per-route references plus one deduplicated per-host asset table; checking only known filenames or `webpack.js` is insufficient.
5. Create one `mktemp -d /tmp/sksu-verifier-011-001.XXXXXX` mirror containing copies of `app/`, `content/`, `public/`, `tests/`, `package.json`, `package-lock.json`, `next.config.mjs`, `tsconfig.json`, and `next-env.d.ts`, with the repository `node_modules` symlinked read-only. Run the ordered focused tests, canonical tests, type check, and build once inside that mirror only. Parse the temporary static output to verify the approved route set, unique metadata/canonicals, one H1, breadcrumbs, applicable schema, crawlable internal graph, truthful conversion paths, exclusions, and absence of provenance/withheld/unsupported output. Never run a build in `/home/eitanya/karate`.
6. Verify the objective homepage media structure on both hosts and in `app/page.tsx`. The SKSU logo may appear in shared brand chrome, but `/assets/sksu-logo.png` must not be the hero, primary editorial image, or only homepage visual. The primary hero must be a real DOM image/video/media element with an explicit intrinsic size or aspect-ratio contract and fallback; CSS background imagery cannot satisfy this criterion. The homepage must include a titled, lazy privacy-enhanced YouTube embed for `GPcCd06UeyY` as documentary proof. Missing hero media, logo-as-hero, an empty media shell, remote thumbnail hotlink, untitled iframe, eager third-party iframe, or missing fallback is deterministic FAIL.
7. Verify restoration of every archived page-specific video ID recorded at `.hermes/plans/2026-09-10_103835-sksu-custom-redesign-and-legacy-url-restoration.md:196-204`: `/karate-in-rishon-le-zion` has `4IeVUxLJ3FA`; `/kata/` has `X79rmar8Z2Y`, `xRF9cH4MTFE`, `IcrTGaQzYXs`, `m3VIpAFCe0g`, and `XBFLtIMEFhw`; `/kihon/` has `4VWvGOpNPLQ`, `Dnga2diqAxg`, `CgtQASkEMu0`, and `43lxEE5fId4`; `/komita/` has `-JjRNP9_Pys`, `43lxEE5fId4`, `ETHKkR94p_c`, and `Jb__TmK6IBg`; `/self-defense-exercise/` has `A82JNlU9JnU`. Each ID must occur on its mapped page only through a titled, lazy `https://www.youtube-nocookie.com/embed/<ID>` player or a local click-to-play component whose activated URL is that exact privacy-enhanced embed. Duplicate ID `43lxEE5fId4` is required in both mapped page contexts. Require a local poster/fallback contract, keyboard-operable play control when click-to-play is used, no autoplay audio, no Wayback/YouTube-thumbnail hotlink, and no Facebook material.
8. For the homepage ID and every page-specific ID in Requirements 6-7, issue at most one bounded anonymous GET to `https://www.youtube-nocookie.com/embed/<ID>` with a 10-second timeout, no cookies, and no redirects outside `youtube.com`/`youtube-nocookie.com`; record final host, status, media type, and whether an embeddable player document is returned. Do not download streams or thumbnails. Missing/misplaced runtime embeds are FAIL regardless of external availability. If and only if all local/runtime structural criteria pass but the bounded external endpoint is inaccessible, report the media-availability subcheck BLOCKED without converting it into structural PASS.
9. Preserve the user’s current owner directive and `.hermes/plans/2026-09-10_103835-sksu-custom-redesign-and-legacy-url-restoration.md:340-349` as the current decision source for restoring the archived SKSU-owned YouTube set. Record that this supersedes the earlier sole-video/no-media implementation exclusion in `handoff/reports/01-legacy-source-and-seo-map.md:175-183` and `handoff/failed/2026-09-10_003_waoengineer_build-content-driven-site.md:42-45`; do not edit historical files or infer approval for unrelated photos, claims, Facebook material, or new videos.
10. After one evidence matrix, recompute the manifest, `git status`, and listener/process identity. Repository bytes/status and the complete port-3000 tree must match the baseline exactly. Immediately record PASS only if every required structural, route/build, asset, homepage-media, and archived-video criterion passes; record deterministic FAIL with one concise defect table otherwise. Use BLOCKED only for a missing parent/evidence file, inaccessible required runtime, unavailable existing dependency, or the narrowly defined external availability boundary. Do not diagnose, fix, screenshot-grade, author a successor, or dispatch any work.

### Constraints:
- This is read-only structural/runtime verification. It must not edit application, content, media, tests, configuration, handoffs, board history, or runtime state.
- The homepage/video requirements are objective DOM/source/runtime checks, not permission to perform subjective visual/RTL grading; a later `waouxtester` owns art direction, hierarchy, responsiveness, and RTL acceptance after structural correction passes.
- Current evidence predicts deterministic FAIL for missing embeds and logo-as-hero; report that directly and stop after the complete bounded matrix rather than entering a diagnosis loop.
- Keep all transient mirrors, logs, manifests, and matrices under `/tmp`; do not create persistent repository artifacts.
- No deploy, `deploy.sh`, install, commit, push, process/cache mutation, credential use, provider write, form submission, external communication, media-stream download, or successor dispatch.

### Technical Details:
- Files to Modify: none
- Files to Create: none in the repository; one transient mirror and bounded logs/manifests/matrices under `/tmp` only
- Files to Read: `handoff/completed/2026-09-10_008_waoengineer_correct-runtime-canonical-failures.md`; `handoff/completed/2026-09-10_009_waoengineer_recover-stale-dev-assets.md`; `handoff/pending/2026-09-10_007_waoverifier_verify-content-site-fail-fast.md`; `handoff/pending/2026-09-10_006_waoengineer_restore-port-3000-runtime.md`; `handoff/reports/01-legacy-source-and-seo-map.md`; `handoff/reports/06-sksu-owner-and-seo-decision-sheet.md`; `.hermes/plans/2026-09-10_103835-sksu-custom-redesign-and-legacy-url-restoration.md`; `/home/eitanya/.hermes/kanban/boards/sksu-redesign/kanban.db`; `/home/eitanya/.hermes/kanban/boards/sksu-redesign/logs/t_181ef89a.log`; `/home/eitanya/.hermes/kanban/boards/sksu-redesign/logs/t_21159ec7.log`; `/tmp/sksu-corrective-008.final-evidence`; `/tmp/sksu-corrective-008.final-mirror.log`; `/tmp/sksu-runtime-recovery-009.post-1789059195.json`; `/tmp/sksu-runtime-recovery-009.1789059153.log`; current `app/`, `content/`, `public/`, `tests/`, package/config files, process state, runtime HTML, and referenced assets
- Dependencies: both named parents formally done; current project-owned port-3000 runtime reachable through loopback and Tailscale; existing `node_modules`; outbound anonymous HTTPS only for the exact allowlisted privacy-enhanced embed documents

## Acceptance Criteria
- [ ] Both named parent cards are formally done and their current runs/logs are inspected as self-report.
- [ ] Every approved route passes the complete two-host HTTP, metadata, canonical, H1, breadcrumb, schema, and sitemap matrix.
- [ ] Every approved HTML route on both hosts passes the full parsed CSS/JavaScript reference contract; no partial homepage-only or filename-only sampling is accepted.
- [ ] Isolated focused tests, canonical tests, type check, build, and static-output structural matrix pass with zero failures.
- [ ] The homepage has non-logo primary media and the approved documentary embed; shared logo use remains limited to brand chrome.
- [ ] Every archived YouTube ID appears on every required mapped page through the privacy-enhanced, titled, lazy, fallback-backed contract, with no disallowed hotlinks or Facebook material.
- [ ] The bounded embed-document availability matrix completes or is reported under the exact external BLOCKED rule.
- [ ] Repository manifest/status and port-3000 process identity remain byte-for-byte/state-identical.
- [ ] The verifier records one formal PASS, deterministic FAIL, or narrowly defined BLOCKED outcome and does not diagnose, fix, grade visual polish, or dispatch successors.

## Implementation Notes
### Do:
- Batch board/source discovery, run the route/asset/media checks as one bounded parser-driven matrix, and map each observation to one acceptance criterion.
- Preserve query strings when checking Next assets and preserve duplicate page placement for the shared archived video ID.
- Distinguish independently observed evidence from both parent workers’ self-reports.
### Don't:
- Accept homepage HTTP 200 or one working CSS/JavaScript file as asset health.
- Treat visible styling as proof of authentic media, or treat a logo inside the hero as editorial imagery.
- Retry deterministic failures, inspect framework internals, modify the dev server, download media, or broaden external access.

## Testing Requirements
- Test Command: in the temporary mirror only, `node --test tests/content-schema.test.mjs tests/publication-safety.test.mjs && node --test tests/legacy-routes.test.mjs tests/navigation.test.mjs && npx tsc --noEmit && npm run test && npm run build`; expected every named test discovered, zero failures, successful type check, and successful static export; execute once.
- Test Command: one standard-library HTTP/HTML parser matrix for the full approved route set on both required hosts, including Requirement 3 metadata/schema checks and Requirement 4 per-route parsed asset checks; expected all routes and assets to satisfy their exact contracts; execute once.
- Test Command: one source/runtime DOM parser matrix for Requirements 6-7 and at most one anonymous GET per allowlisted `youtube-nocookie.com/embed/<ID>` document for Requirement 8; expected exact page placement, privacy-enhanced embeds, titles/lazy/fallback/control rules, and embeddable player responses; execute once.
- Test Command: one standard-library parser pass over temporary `out/**/*.html` and sitemap for route, graph, metadata/schema, conversion, exclusion, media-placement, and no-hotlink assertions; expected zero mismatches; execute once.
- Test Command: compare pre/post SHA-256 manifests, `git status --porcelain=v1`, and listener/process identity; expected exact equality; safe to repeat only if needed to confirm read-only integrity.

## Verification Checklist (waoverifier Final Gate)
- [ ] **npm run build** — Run once in the `/tmp` mirror; attach exit status and generated-route summary.
- [ ] **npm run test** — Run once in the `/tmp` mirror; attach named test discovery and zero-failure output or exact failing tests.
- [ ] **Dev server smoke test** — Attach both-host route table, complete per-route CSS/JavaScript reference results, deduplicated asset table, homepage/media structure findings, archived-video placement table, and listener identity.
- [ ] **Evidence screenshots** — N/A: this task is structural/read-only and must not substitute screenshot opinion for DOM/runtime evidence; fresh serious visual/RTL screenshots belong to `waouxtester` only after structural correction passes.

**Report Outcome:** PASS requires every task-owned route/build/static/asset/homepage-media/archived-video criterion from independent evidence. A deterministic mismatch is FAIL, including the currently observed missing embeds or logo-as-hero; preserve passing subchecks separately. Release health remains false until a later corrected implementation receives fresh structural PASS, serious visual/RTL PASS, and media behavior PASS; no deployment is authorized here.

### Escalation Routing (waoverifier decision)
On deterministic FAIL, return one concise defect table to Adam/orchestrator with exact route, selector/URL/ID, expected result, observed result, and evidence path; request one outcome-owned `waoengineer` redesign/media-restoration correction, not multiple micro-cards, but do not author or dispatch it. On structural PASS, report readiness for a fresh `waouxtester` serious desktop/mobile visual/RTL gate and a `waoverifier-media` embed-behavior gate; do not dispatch either. On BLOCKED, identify only the missing dependency/capability/external boundary and preserve all passing subchecks.

## Handoff Instructions for Hermes
1. Read this file completely and confirm exactly `t_21159ec7` and `t_181ef89a` are the done board parents.
2. Run one non-goal-mode read-only attempt within the eight-cycle/25-minute limit.
3. Capture repository/process baselines before HTTP, external, or isolated-build checks.
4. Execute each bounded matrix once, preserving independent evidence under `/tmp`; do not diagnose or retry deterministic failures.
5. Keep generated build output outside the repository and leave the existing port-3000 tree untouched.
6. Classify every criterion and preserve passing subchecks even when the overall result is FAIL or BLOCKED.
7. Record `kanban_complete` for PASS or deterministic FAIL; use `kanban_block` only for the exact defined boundary. Read back and report the formal board outcome.
8. Include final manifest/status/process equality and distinguish independent evidence from parent self-report.
9. Do not edit, fix, screenshot-grade, deploy, run `deploy.sh`, install, commit, push, access credentials, submit forms, download media streams, or communicate externally.
10. Do not create or dispatch engineer, visual, media, corrective, or any other successor; Adam/orchestrator owns later manual dispatch.
11. Only the executor reconciles this handoff’s disposition; preserve all historical handoffs, cards, events, runs, logs, and evidence unchanged.
