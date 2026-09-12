# Verify SKSU Visual RTL Experience

⚠️ HEBREW-SAFETY: This is read-only visual QA. Do not edit source or transcribe new Hebrew into files.

⚠️ EXECUTION SCOPE: Browser/runtime observation and screenshots only. No edits, deployment, commit, push, form submission, external messaging, credentials, providers, media downloads, or live data.

## Metadata
- Task ID: 2026-09-10_005
- Target Agent: waouxtester
- Priority: P1-High
- Estimated Complexity: Moderate
- Created By: waostrategy (Strategist, GPT-5.6 Sol)
- Created At: 2026-09-10T17:54:04+07:00
- Status: pending
- Contract Version: 3
- Dispatch Approved: no until task 2026-09-10_004 is formally done and linked as the sole board parent
- Observable Outcome: Independent desktop and mobile evidence confirms the rebuilt SKSU site is visibly changed, coherent, responsive, RTL-correct, keyboard-usable, and free of asset/overflow failures.
- Required Capabilities / Preflight Evidence: waouxtester context_length 1,000,000 confirmed at `/home/eitanya/wao/AGENTS.md:110-123`; screenshot-capable browser access to `http://100.102.160.114:3000`.
- Accepted Dependencies / Board Parent IDs: concrete formally-done card for `2026-09-10_004`; Adam must supply its ID as sole parent.
- Supersedes: none
- Execution Class: read-only-repeatable
- Local Correction Budget: Browser checks may repeat for 30 minutes / 8 turns.
- Automatic Redispatch: none for deterministic, dependency, capability, or protocol blocks

## Context
Structural PASS does not prove that the redesign renders correctly. Inspect representative routes and responsive states from the Tailscale host, with special attention to RTL navigation, actual visible changes, images, clipping, and truthful conversion affordances.

## Specification

### Requirements:
1. Open `http://100.102.160.114:3000` at desktop and 390x844 mobile viewports. Confirm it is visibly the rebuilt multipage experience rather than the original unchanged one-page draft.
2. Inspect homepage, `/why-us/`, `/karate-in-rishon-le-zion`, `/learn/`, one training page, one long learning article, `/contact/`, `/privacy`, and `/accessibility`.
3. At both viewports verify logo/image pixels render, no broken-image icon or alt-text leakage appears, no approved content is blank, and the brochure is not the primary hero.
4. Verify RTL reading order, mixed-script phone/SKSU/WhatsApp handling, heading hierarchy, line lengths, link affordances, focus visibility, contrast, and absence of horizontal overflow or clipped controls.
5. On mobile, operate the menu by keyboard: open, traverse links, close with Escape, confirm focus returns to trigger, and confirm touch targets appear at least 44x44.
6. Navigate homepage cards, breadcrumbs, header/footer links, article related links, and trial CTA without submitting a form or opening external WhatsApp/call targets.
7. Confirm missing authentic media is handled intentionally without blank frames, fake people, AI imagery, or misleading placeholders. Do not fail solely because the external media package remains unavailable.
8. Confirm reduced-motion behavior does not hide content or delay CTA access.
9. Capture narrow screenshots: homepage desktop; homepage mobile with menu open; learning hub mobile; Rishon page desktop; long article mobile. One screenshot per evidence item.
10. Return PASS, FAIL, or BLOCKED with route, viewport, screenshot reference, and reproduction steps. Do not fix defects.

### Constraints:
- Read-only browser operation; do not submit forms or activate external communication.
- Runtime target is Tailscale, not verifier localhost.
- Deterministic visual/interaction defect is FAIL; unavailable runtime/capability is BLOCKED.

### Technical Details:
- Files to Modify: none
- Files to Create: none in repository; transient verifier screenshots only
- Files to Read: completed task 003/004 reports and `handoff/reports/06-sksu-owner-and-seo-decision-sheet.md`
- Dependencies: formal structural verifier PASS and reachable Tailscale dev server

## Acceptance Criteria
- [ ] Rebuilt visual experience is clearly present on the dev server.
- [ ] Representative routes render at desktop and mobile without overflow, clipping, blank media, or alt leakage.
- [ ] Mobile navigation and keyboard flow behave correctly.
- [ ] RTL/BiDi presentation and responsive hierarchy are coherent.
- [ ] Every finding has route/viewport/evidence and the final outcome is explicit.

## Implementation Notes
### Do:
- Inspect pixels and interactions, not only accessibility-tree text.
- Keep each screenshot and finding narrow.
### Don't:
- Edit, submit, message, call, download, or judge unavailable external media as implemented.

## Testing Requirements
- Test Command: browser walkthrough at the named desktop and 390x844 viewports on Tailscale; safe to repeat.
- Test Command: keyboard-only mobile-menu and navigation pass; safe to repeat without external activation.
- Test Command: screenshot evidence for the five named states; safe to repeat.

## Verification Checklist (waouxtester Final Gate)
- [ ] **npm run build** — N/A: independently passed by structural verifier task 004.
- [ ] **npm run test** — N/A: independently passed by structural verifier task 004.
- [ ] **Dev server smoke test** — Browser-load every named route on Tailscale and record results.
- [ ] **Evidence screenshots** — Attach all five required narrow screenshots with route and viewport.

**Report Outcome:** PASS requires all visual and interaction criteria. Preserve authentic-media/form/hosting limitations as explicit release gates rather than claiming full production launch readiness.

### Escalation Routing (waouxtester decision)
On FAIL, return the exact visual defect to the existing implementation owner through the orchestrator; do not create or dispatch another task. On PASS, report that the local rebuild is ready for Eitan’s inspection, with external release gates listed.

## Handoff Instructions for Hermes
1. Read this file completely.
2. Confirm the structural verifier parent is formally done with PASS evidence.
3. Remain read-only and use the Tailscale runtime.
4. Execute every named route, viewport, interaction, and screenshot check.
5. Report PASS, FAIL, or BLOCKED with reproducible evidence.
6. Do not dispatch, edit, deploy, commit, or push.
7. Record formal board outcome before prose and read it back.
8. Only the executor reconciles this handoff’s disposition to its evidenced outcome.
