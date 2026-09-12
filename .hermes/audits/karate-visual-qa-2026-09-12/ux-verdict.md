# Karate visual QA — 2026-09-12

## Verdict: FAIL

- Target: `http://100.102.160.114:3000`
- Capture time: 2026-09-12T20:05:39+07:00
- Evidence: 46 local Chrome screenshots: every public route at 1440×900 and 390×844.
- Runtime coverage: all 23 routes returned HTTP 200 after canonical redirects.

## Critical findings

1. **Learning-hub card headings are effectively black on charcoal backgrounds.**
   - Routes: `/learn/` at desktop and mobile.
   - Evidence: `desktop/learn.png`, `mobile/learn.png`.
   - Effect: card titles and small secondary lines are barely readable; this fails contrast and basic visual hierarchy.

2. **The live development screen displays a red “1 Issue” diagnostic badge on the homepage and Kata screenshots.**
   - Evidence: `desktop/home.png`, `mobile/home.png`, `desktop/kata.png`, `mobile/kata.png`.
   - Effect: the user-facing development surface is visibly not clean.

3. **Browser runtime diagnostics include an exception and three image aspect-ratio warnings.**
   - Affected assets: `sksu-02.jpg`, `sksu-03.jpg`, and `sksu-05.jpg`.
   - Effect: the warnings require resolution or explicit justification before visual acceptance; they are consistent with the reported concern about image treatment.

## Visual findings by page type

| Page type / routes | Desktop | Mobile | Evidence / result |
|---|---|---|---|
| Homepage `/` | FAIL | FAIL | `home.png`: supplied hero image and embedded video are present and generally readable, but the red development diagnostic badge is visible. |
| Learning hub `/learn/` | FAIL | FAIL | `learn.png`: dark-card headings and secondary text lack usable contrast. |
| Core / training / location pages: `/why-us/`, `/kihon/`, `/kata/`, `/komita/`, `/self-defense-exercise/`, `/karate-in-rishon-le-zion/` | FAIL as release surface | FAIL as release surface | All captured. Kata shows good primary-image layout at the top, but the diagnostic badge is visible. Other route screenshots are retained for comparison. |
| Learning articles (12 published routes) | Needs correction before acceptance | Needs correction before acceptance | All were captured under `desktop/` and `mobile/`; they share the same learning visual system, so the hub contrast failure blocks acceptance of the learning experience. |
| Contact `/contact/` | PASS for initial viewport | PASS for initial viewport | `desktop/contact.png`, `mobile/contact.png`: readable RTL layout, visible CTA and form; no clipping visible in initial viewport. |
| Privacy `/privacy` and accessibility `/accessibility` | PASS for initial viewport | PASS for initial viewport | Current screenshots show contained readable margins; the previously recorded edge-to-edge issue is not visible in this capture set. |

## Responsive and layout observations

- The homepage at 1440×900 and 390×844 has no visible horizontal clipping in its initial viewport. The mobile header and primary CTA are visible and touch-sized.
- Kata’s initial layout is responsive and its supplied martial-arts image is proportionate. This does not clear the page while a runtime diagnostic badge remains visible.
- Contact and legal initial viewports have readable RTL structure and adequate side margins.
- The learning-hub contrast defect is reproduced at both required viewport sizes and is sufficient for a whole-site visual FAIL.

## Coverage inventory

Each of the following has `desktop/<route>.png` and `mobile/<route>.png`: homepage; why-us; kihon; kata; komita; self-defense-exercise; karate-in-rishon-le-zion; learn hub; all 12 published learning articles; contact; privacy; accessibility.

## Scope

Read-only QA only. No source, configuration, content, server, deployment, or environment files were changed.
