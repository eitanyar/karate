# Build SKSU Content-Driven Site

⚠️ HEBREW-SAFETY: waoengineer types ZERO Hebrew bytes in this task. Hebrew is either pre-existing and preserved byte-identically or read at runtime from approved JSON records. Any surgical change to a Hebrew-bearing source file must use an ASCII-only deterministic script or byte-safe transformation; never retype a Hebrew string.

⚠️ EXECUTION SCOPE: Local implementation and safe local verification only. No deployment, `deploy.sh`, commit, push, hosting changes, provider calls, credential access, media downloads, or live client data. Do not fabricate redirects that the static-export hosting layer cannot provide.

## Metadata
- Task ID: 2026-09-10_003
- Target Agent: waoengineer
- Priority: P1-High
- Estimated Complexity: Complex
- Created By: waostrategy (Strategist, GPT-5.6 Sol)
- Created At: 2026-09-10T17:54:04+07:00
- Status: pending
- Contract Version: 3
- Dispatch Approved: no until task 2026-09-10_002 is formally done and linked as the sole board parent
- Observable Outcome: The dev server renders a responsive, navigable, content-driven SKSU multipage site at every approved route while excluding all withheld, synthetic, reserved, and unapproved material.
- Required Capabilities / Preflight Evidence: waoengineer context_length 1,000,000 confirmed at `/home/eitanya/wao/AGENTS.md:27-37`; Node/Next dependencies already installed; Tailscale runtime target is `100.102.160.114:3000`.
- Accepted Dependencies / Board Parent IDs: concrete formally-done card for `2026-09-10_002`; Adam must supply its ID as sole parent. Accepted planning evidence: reports 01, 05, and 06.
- Supersedes: none
- Execution Class: outcome-owned-local
- Local Correction Budget: Safe local implementation/checks may repeat in one goal-mode run for 45 minutes / 12 goal turns.
- Automatic Redispatch: none for deterministic, dependency, capability, or protocol blocks

## Context
The current app is a hardcoded one-page draft and does not consume the approved records. Build the multipage static-export implementation using only finalized public fields, while preserving the current visual strengths and failing closed on missing media, form infrastructure, and hosting-layer redirects.

## Specification

### Requirements:
1. Create `app/_lib/content.ts` with typed loaders for `content/site.json`, the five core/training/location records, and publishable learning records. Export exact functions `getSiteContent()`, `getCorePageByRoute(route)`, `getPublishedArticles()`, `getArticleBySlug(slug)`, and `getPublishedRoutes()`. At module initialization, reject schema versions other than 1, duplicate routes, invalid canonicals, or missing required public fields.
2. Hard-exclude `content/learn/להתאמן-בקראטה-בבית.json` by an ASCII filename/route denylist derived without retyping Hebrew bytes. It must never enter loaders, static params, cards, navigation, sitemap, metadata, schema, or output. Also exclude both reserved routes named at `handoff/reports/01-legacy-source-and-seo-map.md:54-55`.
3. Never expose, render, serialize into HTML, or use for metadata the fields `titleAnchor` or `_sourceNotes`. Treat them as provenance-only. Render `metadata`, `h1`, `breadcrumbs`, `intro`, `sections`, `relatedLinks`, and `cta` from finalized records.
4. Create reusable exact components: `app/_components/site-header.tsx`, `app/_components/mobile-navigation.tsx`, `app/_components/site-footer.tsx`, `app/_components/breadcrumbs.tsx`, `app/_components/content-page.tsx`, and `app/_components/trial-cta.tsx`. Components must obtain Hebrew labels from `content/site.json` or page records, not literals.
5. `MobileNavigation` must be a client component with a labelled 44x44 minimum menu control, visible focus, Escape close, focus return to the trigger, navigation links reachable by keyboard, and no permanently hidden mobile navigation. Use `aria-expanded`, `aria-controls`, and current-route indication.
6. Create route modules at `app/why-us/page.tsx`, `app/kihon/page.tsx`, `app/kata/page.tsx`, `app/komita/page.tsx`, `app/self-defense-exercise/page.tsx`, and `app/karate-in-rishon-le-zion/page.tsx`. Each uses the shared renderer and exports record-driven `generateMetadata()` with absolute canonical based on `content/site.json`.
7. Create `app/learn/page.tsx` as a crawlable learning hub listing every and only publishable article. Create `app/learn/[slug]/page.tsx` with `generateStaticParams()`, `generateMetadata()`, and `dynamicParams = false`, all sourced from the loader.
8. Refactor `app/page.tsx` without inventing Hebrew. Preserve existing approved homepage copy where retained, replace the dense non-linked topic list with links to publishable article records, ensure the excluded synthetic record is absent, and link homepage sections to the historical routes. The hero image/graphic must remain a real DOM element and not become a fragile CSS background; do not add fake/AI people or unapproved media.
9. Use `content/site.json` navigation in shared header/footer. Apply shared shell to new content routes and homepage. Keep existing contact/privacy/accessibility Hebrew byte-identical unless a separate approved record supplies the same text. The current WhatsApp-composer behavior must be labelled by its existing truthful text; do not claim a stored callback submission.
10. Add record-driven BreadcrumbList JSON-LD to non-home content pages and Article JSON-LD to learning articles. Do not add Review, AggregateRating, unsupported Person credentials, opening hours, age/program data, prices, or unconfirmed LocalBusiness properties.
11. Create `app/sitemap.ts` containing `/`, all approved content routes, `/contact/`, `/privacy`, and `/accessibility`; exclude synthetic, reserved, redirect-only, and pending-410 routes.
12. Replace `app/globals.css` with maintainable responsive styles while retaining the current strong hierarchy, dark/light rhythm, restrained palette, visible SKSU identity, and reliable asset rendering. Use logical properties for RTL except documented intentional physical positioning. Respect `prefers-reduced-motion`; prevent horizontal overflow at 390px.
13. Preserve `output: "export"`. Do not implement fake client redirects for Holon, slash normalization, WordPress aliases, embed routes, or pending-410 paths. Record them as a known hosting-layer release gate from report 01; this task is not blocked by their absence from local static export.
14. Do not add a media manifest or video because no approved local master/poster/release package exists. Do not hotlink Wayback, YouTube thumbnails, or remote image candidates. Existing local logo may render; existing brochure may remain only as secondary archival material, never the primary hero.
15. Create tests `tests/content-schema.test.mjs`, `tests/legacy-routes.test.mjs`, `tests/navigation.test.mjs`, and `tests/publication-safety.test.mjs` using Node’s built-in test runner. Update `package.json` `test` to execute them. Tests must prove schemas/routes, output generation, internal-link reachability, exclusions, and non-rendering of provenance/withheld strings.
16. Follow the installed Next.js 15 guidance under `node_modules/next/dist/docs/` before choosing App Router/static-export APIs. No dependency addition unless existing platform APIs cannot satisfy a named requirement.

### Constraints:
- Modify only the exact application/config/test paths listed below; content JSON is read-only in this task.
- No Hebrew byte may be authored by waoengineer.
- Do not weaken or delete existing approved copy to make tests pass, except byte-safe removal of the excluded homepage synthetic card.
- No schedule, age/program split, price, additional credential, Holon service, testimonial, rating, media-right, accessibility-location, or callback-storage claim.
- No deployment, hosting edit, commit, or push.

### Technical Details:
- Files to Modify: `app/layout.tsx`; `app/page.tsx`; `app/globals.css`; `package.json`; optionally `app/contact/page.tsx`, `app/privacy/page.tsx`, and `app/accessibility/page.tsx` only through byte-safe changes required for the shared shell
- Files to Create: `app/_lib/content.ts`; the six named `app/_components/*.tsx` files; six named core/training/location route modules; `app/learn/page.tsx`; `app/learn/[slug]/page.tsx`; `app/sitemap.ts`; four named `tests/*.test.mjs` files; optional ASCII-only test helpers under `tests/helpers/`
- Files to Read: all 20 `content/*.json` records; `app/*`; `next.config.mjs`; `package.json`; installed Next docs; `.hermes/plans/2026-09-10_103835-sksu-custom-redesign-and-legacy-url-restoration.md`; `handoff/reports/01-legacy-source-and-seo-map.md`; `handoff/reports/05-sksu-post-correction-hebrew-qa.md`; `handoff/reports/06-sksu-owner-and-seo-decision-sheet.md`; completion evidence for tasks 001-002
- Dependencies: independently accepted publication-safe copy; existing npm install

## Acceptance Criteria
- [ ] All approved core, training, location, hub, and article routes exist in the static build and return HTTP 200 in dev.
- [ ] The excluded synthetic and two reserved articles are absent from params, links, sitemap, schema, metadata, and built output.
- [ ] No `titleAnchor`, `_sourceNotes`, withheld string, or unsupported claim appears in rendered HTML.
- [ ] Header/footer navigation and article graph leave no approved page orphaned.
- [ ] Unique record-driven title, description, canonical, breadcrumbs, and applicable schema render per route.
- [ ] Desktop and 390x844 layouts show working RTL navigation, visible assets, no overflow, no alt-text leakage, and keyboard-visible focus.
- [ ] Existing conversion behavior is truthful and offers WhatsApp, click-to-call, and contact navigation without claiming server-side lead storage.
- [ ] Real tests replace the placeholder; focused tests, canonical tests, and build pass with zero failures.
- [ ] No content JSON, report, historical handoff, asset, deployment, hosting config, commit, or remote changes.

## Implementation Notes
### Do:
- Keep page renderers generic and ASCII-only; treat content records as the single source for Hebrew page copy.
- Use semantic landmarks, headings, lists, links, and progressive enhancement.
- Preserve current local assets with explicit dimensions and object-fit behavior.
### Don't:
- Import records into client components unnecessarily.
- Render provenance fields, infer facts, create fake redirects, or substitute unapproved imagery.
- Stop at compilation; exercise built routes and browser-visible behavior.

## Testing Requirements
- Test Command: `node --test tests/content-schema.test.mjs tests/publication-safety.test.mjs`; expected zero failures; safe to repeat.
- Test Command: `node --test tests/legacy-routes.test.mjs tests/navigation.test.mjs`; expected every approved route and graph assertion to run with zero failures; safe to repeat.
- Test Command: `npx tsc --noEmit`; expected zero errors; safe to repeat.
- Test Command: `npm run test`; expected all registered Node tests to run with zero failures; safe to repeat.
- Test Command: `npm run build`; expected static export success and all approved paths generated; safe to repeat.
- Test Command: run/reuse `npm run dev` bound for loopback and Tailscale, then curl every changed route on `127.0.0.1:3000` and `100.102.160.114:3000`; expected HTTP 200 and page-specific markers; safe local runtime only.
- Test Command: `git diff --check` plus scoped `git status --short`; expected no whitespace errors and no out-of-scope modifications.

## Verification Checklist (waoengineer Final Gate)
- [ ] **npm run build** — Attach successful output and generated-route evidence.
- [ ] **npm run test** — Attach test discovery/count and zero-failure output.
- [ ] **Dev server smoke test** — List every tested route and HTTP result for loopback and Tailscale.
- [ ] **Evidence screenshots** — Capture homepage, one core page, learning hub, one article, and mobile-menu state at desktop and 390x844 where relevant; prove assets and RTL layout render.

**Report Outcome:** Record `focused_acceptance` and `release_health` separately. Local task PASS may preserve explicit hosting-redirect, authentic-media, and genuine-form-endpoint release gates; it must not claim those external capabilities shipped.

### Escalation Routing (waoengineer decision)
Planned independent contracts are `handoff/pending/2026-09-10_004_waoverifier_verify-content-driven-site.md` followed by `handoff/pending/2026-09-10_005_waouxtester_verify-sksu-visual-rtl.md`. Do not dispatch them. Report external media/form/hosting limits without inventing workarounds.

## Handoff Instructions for Hermes
1. Read this file completely before starting.
2. Confirm the done QA parent and sole-writer availability before edits.
3. Check every Files to Read path and installed Next guidance.
4. Re-check Hebrew safety before each edit.
5. Implement only the named outcome and paths.
6. Keep correcting safe in-scope failures in this same run without weakening acceptance.
7. Run the entire ordered acceptance ladder and attach actual output.
8. Report local PASS and external release gates separately.
9. Do not dispatch, deploy, commit, or push.
10. Record formal board outcome before prose and read it back.
11. Only the executor reconciles this handoff’s disposition to its evidenced outcome.
