# Premium SKSU Site Outcome Rebuild

## Target Agent
`waoengineer`

## Owner outcome
Deliver one complete, inviting SKSU marketing site at `http://100.102.160.114:3000`. This is a UX and visual-design rebuild using the existing approved copy, not a component patch.

## Approved inputs
- Real local image set: `/home/eitanya/SKSU-image-set/` (11 JPEGs; provenance mapping: `SOURCE-MANIFEST.tsv`). Use these deliberately in the hero, trust, and training sections. Do not use empty media shells, generic placeholders, or repeated brochure cards.
- Archived SKSU video inventory, already recovered from `karate.11il.co`:
  - Homepage: `GPcCd06UeyY`
  - Rishon: `4IeVUxLJ3FA`
  - Kata: `X79rmar8Z2Y`, `xRF9cH4MTFE`, `IcrTGaQzYXs`, `m3VIpAFCe0g`, `XBFLtIMEFhw`
  - Kihon: `4VWvGOpNPLQ`, `Dnga2diqAxg`, `CgtQASkEMu0`, `43lxEE5fId4`
  - Kumite: `-JjRNP9_Pys`, `43lxEE5fId4`, `ETHKkR94p_c`, `Jb__TmK6IBg`
  - Self-defense: `A82JNlU9JnU`
  Use titled, lazy, real `https://www.youtube-nocookie.com/embed/<ID>` players in correct route galleries, with no autoplay.
- Existing visible copy is approved. Preserve it byte-for-byte; do not draft, revise, or add Hebrew copy.

## Required outcome
1. Rework the page hierarchy and responsive RTL design so desktop and mobile have readable line lengths, intentional margins, coherent grids, visual hierarchy, and a clear registration flow.
2. Use the real supplied images deliberately, rather than as decoration or repeated cards. Choose crops/placements appropriate to each section and retain accessible alt/fallback behavior without inventing Hebrew copy.
3. Render real YouTube players and correct route-specific galleries. No brochure card, empty media block, thumbnail imitation, click-to-create player, or placeholder-looking video UI is acceptable.
4. Repair and verify the project-owned development server at port 3000. The actual Tailscale URL must serve the same working site, assets, navigation, responsive layouts, and hydrated registration/contact UI as loopback.
5. Treat the task as outcome-owned: inspect the existing implementation, choose the required changes, and keep correcting task-owned failures until all local checks pass. Do not divide it into cosmetic micro-patches.

## Safety and scope
- Work only in `/home/eitanya/karate`; do not deploy, commit, push, run `deploy.sh`, access credentials, submit forms, activate contacts, or alter historical handoffs.
- Copy supplied images locally into the project only as required for the outcome. Do not add unapproved external media or new video IDs.
- Preserve SEO URL, title, H1, canonical, and existing visible Hebrew strings unless an existing project test proves a technical change is essential; report any such conflict instead of changing it.
- Before touching the runtime, prove the listener is the current-user project-owned Next process. Do not touch unrelated services.

## Acceptance evidence required before completion
- `npm run test`, `npx tsc --noEmit`, and an isolated build pass.
- On both `http://127.0.0.1:3000` and `http://100.102.160.114:3000`, all generated public routes and emitted same-origin JS/CSS assets return valid HTTP 200 responses.
- Fresh browser checks at 1280px desktop and 390x844 mobile confirm: no horizontal overflow; working mobile navigation; hydrated, non-submitting registration/contact interaction; real titled players at their mapped counts; no brochure/empty media blocks; and no console or same-origin request errors.
- Capture desktop and mobile screenshots of `/`, `/kata/`, `/kihon/`, `/komita/`, `/self-defense-exercise/`, `/karate-in-rishon-le-zion`, and `/contact`.
- Report changed files, test/build/runtime evidence, exact Tailscale result, screenshots, and final `git status --porcelain=v1`.

## Independent gate
This is not accepted as a release until a separate visual reviewer inspects the live Tailscale URL at desktop and mobile. The reviewer must fail it if it does not look like a complete, inviting RTL marketing site, regardless of tests passing.
