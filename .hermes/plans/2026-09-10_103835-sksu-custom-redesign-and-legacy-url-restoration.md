# SKSU Custom Redesign and Legacy URL Restoration Plan

**Goal:** Replace the attractive but generic one-page draft with a custom, documentary-style SKSU website that uses authentic dojo media, restores the archived authority content, and serves every valuable page at its historical path.

**Architecture:** Keep Next.js App Router and static export, but move shared chrome into reusable layout components and move Hebrew page content into structured content files owned by waocopy. Build a real multi-page information architecture around the historical SKSU URLs, with the homepage acting as a visual gateway rather than containing every topic in full.

**Tech Stack:** Next.js 15 App Router, React 19, TypeScript, static export, `next/image`, native video/YouTube privacy-enhanced embeds, JSON content records, CSS design tokens.

---

## 1. Grounded Current-State Findings

### Repository

- Current public routes: `/`, `/contact`, `/privacy`, `/accessibility`.
- `app/page.tsx:24` uses in-page anchors for the primary navigation. Only Contact is a separate page.
- `app/page.tsx:25` uses abstract CSS circles, arches, and a synthetic belt shape instead of real karate media.
- `app/page.tsx:28` renders 12 authority topics as non-linked cards. None has a live article route.
- `app/page.tsx:29` uses a 389×960 legacy brochure as the only instructor photo. It is a poster composite, not a suitable premium hero/editorial image.
- `public/assets/` contains only `sksu-logo.png` and `sksu-brochure.jpg`.
- `app/globals.css` is a single minified line and contains many physical `left`/`right` declarations, making RTL maintenance fragile.
- Mobile CSS hides the entire primary navigation and supplies no menu replacement.
- `package.json` has no real tests: `npm run test` intentionally exits with an error.
- Browser inspection found no JavaScript console errors in the initial live load, but the later remote session became unavailable; final implementation must be rechecked on `http://100.102.160.114:3000`, not verifier localhost.

### Visual audit

Strengths to retain:

- Strong Hebrew hierarchy and confident oversized type.
- Restrained palette and clear trial/WhatsApp conversion path.
- Useful dark/light section rhythm.
- Existing SKSU logo and traditional Shotokan identity.

Problems making the draft feel AI/template-made:

- Abstract geometric hero has no relationship to the actual instructor, dojo, students, or training.
- Repeated numbered-card/grid patterns look generated rather than art-directed.
- The black/gold luxury treatment is disconnected from the vivid red/blue/yellow SKSU identity.
- Large areas are visually empty while the real human proof is compressed into a low-resolution brochure.
- The 12-topic grid is dense, repetitive, and non-interactive.
- There is no visible class schedule, age/program split, dojo location proof, student/parent proof, or authentic training moment above the conversion form.
- Symbol characters are used as utility icons rather than a coherent icon set.

## 2. Historical URL Inventory

Restore content at these historical paths. Preserve each path segment exactly; normalize only trailing-slash variants through one canonical policy.

### Core and commercial pages

- `/`
- `/why-us/`
- `/contact/`
- `/karate-in-rishon-le-zion`
- `/karate-in-holon` — publish only if SKSU still serves Holon; otherwise use an approved permanent redirect to the closest truthful page.

### Training/syllabus pages

- `/kihon/`
- `/kata/`
- `/komita/` — retain the historical typo exactly; correcting the slug would discard the old path’s authority.
- `/self-defense-exercise/`

### Learning hub and authority articles

- `/learn/`
- `/learn/להתאמן-בקראטה-בבית/` (percent-encoded equivalent in archive)
- `/learn/10-reasons-to-learn-karate/`
- `/learn/10-tips-to-get-a-black-belt/`
- `/learn/8-elements-in-karate-lessons/`
- `/learn/choosing-the-wrong-martial-art/`
- `/learn/develop-discipline/`
- `/learn/does-karate-suite-your-family/`
- `/learn/how-long-a-black-belt-takes/`
- `/learn/how-to-choose-karate-studio/`
- `/learn/make-your-kid-practice-karate-at-home/`
- `/learn/what-is-karate/`
- `/learn/what-to-notice-in-karate-lessons/`
- `/learn/why-learn-the-basics/`

### Reserved learning paths with missing archive bodies

The archived `/learn/page/2/` index proves that these two pages existed, but CDX has no direct body capture:

- `/learn/overcome-fear-and-attend-belt-test/`
- `/learn/is-your-kid-ready-to-become-karate-kid/`

Reserve both paths. Restore them only if their original bodies can be recovered from an owner backup, WordPress export, Search Console cache/export, or another verified source. Do not invent replacement content or reuse the URLs for another intent.

### Legacy utility/junk decisions

- `/learn/page/2/` should permanently redirect to `/learn/` once all articles fit the restored hub.
- `/author/eitan/` should not become a navigation destination; redirect only if it has meaningful inbound links.
- `/contact/embed/`, `/kata/embed/`, `/kihon/embed/`, `/komita/embed/`, `/self-defense-exercise/embed/`, and `/why-us/embed/` should not be recreated as indexable pages.
- `/784-2/`, the archived test-question URL, `/test-post/`, and `/human-a-clutch-issue-resources/` require a redirect/410 decision after checking backlinks and relevance; do not silently recreate junk.
- Preserve the known WordPress aliases as redirects rather than indexable duplicates: `?p=360` → `/why-us/`, `?p=373` → `/kata/`, `?p=383` → `/kihon/`, `?p=387` → `/komita/`, `?p=391` → `/self-defense-exercise/`, `?p=395` → `/contact/`, and `?p=586` → `/karate-in-holon` or its approved replacement. Apply the same rule to equivalent `?page_id=` aliases.
- Treat `/?s={search_term_string}` and malformed `data:text/javascript;base64...` captures as crawler/plugin artifacts, not content routes.

## 3. Recommended Sitemap and Navigation

### Desktop header

1. Home → `/`
2. Why SKSU → `/why-us/`
3. Training → menu with `/kihon/`, `/kata/`, `/komita/`, `/self-defense-exercise/`
4. Learning center → `/learn/`
5. Rishon LeZion dojo → `/karate-in-rishon-le-zion`
6. Contact → `/contact/`
7. Persistent primary CTA → trial lesson section or `/contact/`

### Mobile header

- Logo, one compact trial/WhatsApp CTA, and a real menu button.
- Drawer contains all destinations, has focus trapping, closes on Escape, and exposes the current page.
- Minimum 44×44px touch targets and no permanently hidden navigation.

### Internal-link behavior

- Homepage authority cards link to the relevant historical article path.
- Training overview links to each syllabus page.
- Every article links back to `/learn/`, one related article, one relevant training/location page, and the trial CTA.
- Breadcrumbs appear on all non-home pages.
- No restored authority page may be orphaned.

### Candidate audience/conversion pages

The independent UX pass recommends dedicated Children, Adults, Schedule/Location, Instructor, and First Lesson destinations. Do not invent their slugs or publish them immediately. The SEO strategist must first check demand, cannibalization, factual depth, and whether each need belongs on a new page or an existing historical route. Preferred consolidation options are:

- Children and adults: distinct pathways and sections first; separate pages only with enough audience-specific facts and search intent.
- Instructor: consolidate into `/why-us/` unless a separate instructor entity page earns a distinct intent.
- Schedule/location: consolidate into `/karate-in-rishon-le-zion` unless operational UX requires a separate stable schedule route.
- First lesson: consolidate into `/contact/` or the most relevant learning article unless research supports a dedicated conversion page.

## 4. Custom Visual and UX Direction

### Art direction: “Living Dojo / Documentary Discipline”

- Use genuine SKSU people, spaces, uniforms, wear, movement, and teaching moments.
- Build the visual system around dojo geometry: mat/floor lines, belt progression, stance alignment, framed sequences, and archival details.
- Keep the dark confidence of the draft but connect it to SKSU: ink/navy base, warm off-white, restrained vermilion from the crest, and gold only as a small heritage accent.
- Avoid generic Japanese brush fonts, fake calligraphy, torii/samurai clichés, glowing gradients, floating glass cards, and AI-generated people.
- Use one recurring custom graphic motif derived from real SKSU material—for example, a cropped crest ring, belt stitch line, or contact-sheet frame—not arbitrary circles.
- Use asymmetrical editorial compositions rather than repeating equal card grids.

### Homepage section architecture

1. Full-bleed authentic hero still or muted short loop; headline and CTA remain readable without relying on CSS backgrounds.
2. Immediate proof strip: instructor name/credentials, location, audience/age range, and trial offer.
3. Program chooser for children, teens, adults, and self-defense only when these are factually offered.
4. “Inside an SKSU class” visual sequence linking to the four historical syllabus pages.
5. Instructor/legacy story using a high-resolution portrait and archival material, linking to `/why-us/`.
6. Authentic short video with a clear poster and captions.
7. Rishon LeZion location/schedule block with real venue photo, map, and practical arrival information.
8. Three selected pre-enrollment learning articles linking to `/learn/` and the original article URLs.
9. Real testimonials only when supplied and approved; no invented ratings or review schema.
10. Trial CTA/form and complete footer navigation.

### Motion

- Motion supports movement analysis: restrained image reveals, contact-sheet transitions, and short stance-sequence progression.
- Respect `prefers-reduced-motion`.
- Hero video is muted, inline, looped only if short, and has a static image fallback.
- On mobile, use one clear sticky conversion bar with labeled Trial and WhatsApp actions instead of stacked icon-only floating buttons.
- No autoplay audio, scroll-jacking, cursor effects, decorative parallax, or animation that delays the CTA.

## 5. Authentic Media Plan

### Source priority

1. New owner-approved SKSU photo/video shoot.
2. Original masters from the old website and existing SKSU YouTube channel, after rights confirmation.
3. Owner-provided competition, class, seminar, and historical photographs.
4. Licensed real stock only for temporary gaps; never AI-generated people or martial-arts scenes.

Do not hotlink Wayback assets. Recover or obtain original files, store them locally, and record source/rights in `content/media-manifest.json`.

### Minimum photo shot list

- Landscape hero: Arie teaching a real class, subject left/center with clean RTL text space on the right.
- Instructor portrait in the dojo, both environmental and tight crops.
- Children’s class wide shot with visible instructor supervision.
- Adult/teen class wide shot.
- Kihon line drill.
- Kata sequence, ideally burst/contact-sheet frames.
- Kumite partner drill with safe protective context.
- Self-defense demonstration showing instruction rather than staged aggression.
- Belt tying, stance correction, bow, and hand/foot detail shots.
- Exterior/entrance and interior dojo location proof.
- Group/heritage image and one archival instructor image.
- Parent observing or greeting the instructor, if this reflects actual class policy.
- Adult beginners across realistic age ranges and body types.
- Permission-backed parent, adult-student, and long-term-student testimonial portraits.

For minors, obtain explicit parental media releases and keep a do-not-publish roster. No child image or video enters the repository before that release is recorded.

### Video inventory already evidenced in the archive

- Rishon LeZion page: YouTube ID `4IeVUxLJ3FA`.
- Kata: `X79rmar8Z2Y`, `xRF9cH4MTFE`, `IcrTGaQzYXs`, `m3VIpAFCe0g`, `XBFLtIMEFhw`.
- Kihon: `4VWvGOpNPLQ`, `Dnga2diqAxg`, `CgtQASkEMu0`, `43lxEE5fId4`.
- Kumite: `-JjRNP9_Pys`, `43lxEE5fId4`, `ETHKkR94p_c`, `Jb__TmK6IBg`.
- Self-defense: `A82JNlU9JnU`.

Before reuse, verify that every video is still available, belongs to or is licensed by SKSU, contains no outdated contact/location claims, and is appropriate for the target page. Use `youtube-nocookie.com`, local poster images, descriptive titles, lazy click-to-play, and captions/transcripts where available.

## 6. Content and SEO Migration Rules

- The archive is the recovery source, not an instruction to reproduce obsolete design or stale claims.
- Preserve the historical page intent and URL while allowing waocopy to update clarity, structure, and current facts.
- Never change a historical page’s primary target, title formula, H1, or canonical strategy without SEO-strategist sign-off.
- Keep current contact number `050-473-1212`; do not restore archived alternate numbers without owner confirmation.
- Confirm current instructor credentials, class ages, schedules, address, pricing/trial terms, and Holon serviceability before final copy.
- Resolve the conversion contract explicitly: either label the existing form as opening a prepared WhatsApp message, or provide a genuine callback submission path. Do not promise a callback while only opening WhatsApp.
- Add page-specific metadata, canonical URL, Open Graph image, breadcrumbs, and factual LocalBusiness/Person/Article/Breadcrumb schema as applicable.
- Do not add self-serving `Review`/`AggregateRating` schema.
- Preserve archived article substance where accurate; flag unsupported health, safety, child-development, and performance claims for review.
- Store Hebrew content outside presentation components so waoengineer can implement ASCII-only renderers without retyping Hebrew.

## 7. Proposed File Architecture

### Shared presentation

- Create `app/_components/site-header.tsx`.
- Create `app/_components/mobile-navigation.tsx`.
- Create `app/_components/site-footer.tsx`.
- Create `app/_components/trial-cta.tsx`.
- Create `app/_components/media-frame.tsx`.
- Create `app/_components/video-embed.tsx`.
- Create `app/_components/breadcrumbs.tsx`.
- Refactor `app/page.tsx` to use these components.
- Replace the minified `app/globals.css` with maintainable token/layout/component styles, or split it into documented CSS modules if the engineer confirms that better matches the final component seams.

### Content/data

- Create `content/site.json` for factual shared details and navigation destinations.
- Create `content/media-manifest.json` for source, rights, alt/caption ownership, dimensions, and page placement.
- Create `content/pages/why-us.json`.
- Create `content/pages/locations/rishon-le-zion.json`.
- Create `content/pages/locations/holon.json` only if current service is confirmed.
- Create `content/pages/training/kihon.json`.
- Create `content/pages/training/kata.json`.
- Create `content/pages/training/komita.json`.
- Create `content/pages/training/self-defense-exercise.json`.
- Create one JSON record per historical article under `content/learn/`, keyed by the exact legacy slug.

### App Router pages

- Create `app/why-us/page.tsx`.
- Create `app/kihon/page.tsx`.
- Create `app/kata/page.tsx`.
- Create `app/komita/page.tsx`.
- Create `app/self-defense-exercise/page.tsx`.
- Create `app/karate-in-rishon-le-zion/page.tsx`.
- Create `app/karate-in-holon/page.tsx` only if serviceability is confirmed; otherwise implement the approved redirect at the actual hosting layer.
- Create `app/learn/page.tsx`.
- Create `app/learn/[slug]/page.tsx` with `generateStaticParams()` and `generateMetadata()` driven by the content records.
- Refactor `app/contact/page.tsx` to use the shared site shell.
- Keep `app/privacy/page.tsx` and `app/accessibility/page.tsx`, but bring them into the shared shell without changing their legal wording unless separately approved.

### Tests

- Create `tests/legacy-routes.test.mjs` to assert every required old path is generated.
- Create `tests/navigation.test.mjs` to assert header/footer destinations and no orphaned content records.
- Create `tests/content-schema.test.mjs` to validate required metadata, body sections, media references, and unique slugs.
- Create `tests/media-manifest.test.mjs` to verify local files, dimensions, rights fields, and no Wayback hotlinks.
- Replace the placeholder `package.json` test script with the real test runner chosen by waoengineer.

## 8. Execution Sequence and Ownership

The project is small and the target profiles each have a verified 1,000,000-token context. The work must still be split by ownership and observable outcome, not bundled into one oversized handoff.

### Work package A — Read-only UX/art-direction decision

Owner: `ux` (Maya) for RTL/mobile/a11y presentation audit, with `brand-designer` (Dana) for the visual token direction and `asset-director` (Niv) for the real-media manifest.

Outcome: approved desktop/mobile page wireframes, design tokens, component states, and an authentic media brief. No production edits during the decision pass.

### Work package B — Archive recovery and SEO map

Owner: SEO strategist plus waostrategy.

Outcome: definitive URL manifest, canonical/trailing-slash rules, redirect/410 decisions, preserved primary intent/title/H1 anchors, internal-link graph, and Holon decision.

### Work package C — Hebrew authority content records

Owner: `waocopy`, followed by `waohebrewqa`.

Outcome: shared factual content plus all restored page/article JSON records, preserving proven authority substance while removing stale or unsupported claims. This package must receive confirmed business facts and the URL/SEO manifest first.

### Work package D — Authentic asset acquisition

Owner: site owner plus asset director.

Outcome: local, rights-confirmed image/video masters and complete `content/media-manifest.json`. Implementation may begin with explicit placeholders, but visual acceptance cannot pass with AI imagery, blank media, or the brochure standing in for the primary photography.

### Work package E — Multi-page implementation

Owner: `waoengineer` in one outcome-owned local run after packages A–D are accepted.

Outcome: shared shell, separate historical routes, data-driven learning pages, responsive navigation, authentic media components, metadata/schema, and tests. No deployment.

### Work package F — Independent acceptance

Owners: `waouxtester` for desktop/mobile RTL visual QA, `waoverifier` for route/build/runtime checks, and `waoverifier-media` for video/media behavior.

Outcome: independent PASS evidence for every required route, navigation flow, image/video render, mobile viewport, keyboard flow, metadata/canonical rule, and static build.

## 9. Acceptance Ladder

1. Focused content/schema tests pass and enumerate every historical route.
2. Navigation/orphan tests pass.
3. `npm run test` executes real tests with zero failures.
4. `npm run build` succeeds and the static output contains every required historical path.
5. HTTP smoke checks return 200 for all restored paths and the approved redirect status for retired paths.
6. Desktop and 390×844 mobile screenshots show authentic media, working navigation, no clipping, no alt-text leakage, and no blank hero/section media.
7. Keyboard-only pass confirms skip link, menu, dropdown, video control, form, and visible focus.
8. RTL/bidi checks show no split mixed-script bracket pairs and CSS uses logical properties unless a physical direction is intentionally documented.
9. Media checks verify real local images, poster/fallback behavior, lazy video loading, captions/title, and reduced-motion behavior.
10. Metadata checks verify unique title/description/canonical/Open Graph values and applicable schema per route.
11. No Wayback hotlinks, AI-generated people, invented testimonials, unsupported ratings, unconfirmed business facts, or media featuring minors without recorded parental release.
12. No `deploy.sh`, commit, or push during implementation/verification unless Eitan separately authorizes it.

## 10. Required Owner Decisions Before Final Implementation

- Confirm whether SKSU currently operates or serves Holon.
- Confirm the current dojo address, class schedule, age/program split, instructor credentials, and trial terms.
- Confirm ownership/reuse rights for archived photos and all listed YouTube videos.
- Supply original-resolution media where available; archive thumbnails and the 389×960 brochure are insufficient as primary web imagery.
- Approve whether the main conversion remains WhatsApp-only or gains a real lead endpoint/CRM.
- Approve the preferred photo/video shoot date or nominate existing albums for curation.

## 11. Risks and Tradeoffs

- Rewriting too aggressively can erase historical authority; publishing archive text verbatim can preserve stale claims. Resolve with URL/intent preservation plus reviewed factual updates.
- A custom documentary design depends on real media. Without an asset package, code alone cannot meet the “not AI” requirement.
- Static export does not provide application-level redirects. Redirect/410 behavior must be implemented in the actual hosting layer after its configuration is inspected.
- Old YouTube embeds may be removed, low resolution, or contain obsolete details; each requires media verification.
- Restoring all articles at once increases content QA load. The route/content system can be implemented together, but copy acceptance should be tracked per content cluster.

## 12. Owner Decisions Recorded — 2026-09-10

The following decisions supersede the corresponding open items in Section 10:

- **Holon:** SKSU does not currently operate a Holon dojo. Keep `/karate-in-holon` as a legacy entry point and permanently redirect it to `/karate-in-rishon-le-zion`; the destination must plainly state the Rishon LeZion location rather than imply a Holon class.
- **Location:** the active dojo address is `התזמורת 17, ראשון לציון`.
- **Existing factual source:** retain the current site’s confirmed public details unless later owner-provided information supersedes them: SKSU Shotokan Karate-Do, instructor Arie Nikar, Rishon LeZion focus, phone `050-473-1212`, and a free trial offer. Do not infer class times, age ranges, pricing, or additional credentials from this decision.
- **Media rights:** the owner confirms full reuse rights for the videos previously embedded on YouTube and for SKSU-owned photos. Facebook is out of scope for this redesign.
- **Asset recovery scope:** do not access, scrape, mirror, embed, or link to Facebook. The approved YouTube item is `https://www.youtube.com/watch?v=GPcCd06UeyY` (`GPcCd06UeyY`, “קנקושו מופע שנתי SKSU 2017”, 1:51). Wayback may be queried only to extract candidate original image/video URLs and validate their provenance—not to hotlink, copy entire pages, or add unapproved archive media. Store each chosen asset locally and record its original URL, retrieval date, media type, rights confirmation, people/minors review status, and intended placement in `content/media-manifest.json`.
- **Conversion contract:** provide three explicit routes: (1) a WhatsApp Web/deep link with a prefilled enquiry, (2) a separate contact page containing a genuine contact form plus the address and other practical details, and (3) click-to-call using `tel:+972504731212`. The existing form that merely opens WhatsApp must be relabelled or replaced so it never promises a callback submission when no lead has been submitted.
