# SKSU Hebrew Content Records QA & Claim-Safety Report

## Metadata
- Task ID: 2026-09-10_001
- Reviewer: waohebrewqa (Noa — Hebrew QA & Voice Director)
- Date: 2026-09-10
- Reviewed Directory: `content/` (20 JSON content records)
- Source Integrity SHA-256: `727f4e720c62f5460d41e1b53cce61eba2c4990ba2379715af351cdd8b0acd00`
- Accepted Evidence Documents:
  - `handoff/completed/02-hebrew-content-records.md` (`bca737acbbc86160e1701046462e976c348bc38b26482acf67deadcbd0e929d0`)
  - `handoff/reports/01-legacy-source-and-seo-map.md` (`5719bac3d9c9d5125669cf523ca31d656245cbb6b68b9f1f4958741a4eb97487`)
  - `.hermes/plans/2026-09-10_103835-sksu-custom-redesign-and-legacy-url-restoration.md` (`c2b838e8323db75cb75f7eb81462da20e7fbaa20ae4d1e484f29ccd7ff6c8f41`)

---

## 1. Disposition Legend

Every finding in this review is classified under exactly one of the four contract dispositions:

1. **COPY REVISION**: Editable prose (newly authored metadata descriptions, body copy, list items, headings, labels, CTA text) that exhibits linguistic flaws, grammar/spelling errors, direct address inconsistency, awkward phrasing, ungrounded causal claims, or unneeded superlatives. May include a minimal corrected candidate grounded strictly in existing meaning without inventing new facts.
2. **OWNER FACT REQUIRED**: Current operational facts, programme offerings, age limits, syllabus specifics, schedule details, instructor certifications, or timelines that cannot be verified from the accepted evidence base and must be explicitly provided or confirmed by the business owner (Arie Nikar / Eitan).
3. **SEO/OWNER REVIEW REQUIRED**: Immutable historical anchors (`titleAnchor`, verified historical `h1`, preserved legacy URL slugs) that exhibit syntax anomalies, dangling punctuation, conflicting legacy claims, or unconfirmed target audiences. These must never be rewritten unilaterally by copywriters or engineers; they require deliberate SEO and owner triage.
4. **REMOVE CLAIM**: Unsafe, categorical, or inappropriate assertions (e.g. street-gang pathology claims, absolute guarantees of success, artificial practice-hour calculations) that must be excised from public-facing copy.

---

## 2. Per-Record Summary Table

The 20 JSON content records under `content/` were evaluated independently across **Naturalness** (contemporary Israeli Hebrew, Sabra cadence, singular-male consistency, grammar, punctuation, readability) and **Claim Safety** (fidelity to confirmed facts, absence of ungrounded health/outcome/age/schedule/credential guarantees).

| Record Path | Naturalness | Claim Safety | Verdict | Finding IDs |
| :--- | :--- | :--- | :--- | :--- |
| `content/site.json` | PASS | REVISE | REVISE | `QA-SIT-01`, `QA-SIT-02`, `QA-SIT-03` |
| `content/pages/why-us.json` | REVISE | REVISE | REVISE | `QA-WHY-01`, `QA-WHY-02`, `QA-WHY-03` |
| `content/pages/locations/rishon-le-zion.json` | REVISE | REVISE | REVISE | `QA-RLZ-01`, `QA-RLZ-02`, `QA-RLZ-03`, `QA-RLZ-04` |
| `content/pages/training/kihon.json` | REVISE | REVISE | REVISE | `QA-KIH-01`, `QA-KIH-02` |
| `content/pages/training/kata.json` | PASS | REVISE | REVISE | `QA-KAT-01`, `QA-KAT-02` |
| `content/pages/training/komita.json` | PASS | REVISE | REVISE | `QA-KOM-01`, `QA-KOM-02` |
| `content/pages/training/self-defense-exercise.json` | REVISE | REVISE | REVISE | `QA-SDE-01`, `QA-SDE-02`, `QA-SDE-03` |
| `content/learn/10-reasons-to-learn-karate.json` | PASS | REVISE | REVISE | `QA-LRN1-01`, `QA-LRN1-02`, `QA-LRN1-03` |
| `content/learn/10-tips-to-get-a-black-belt.json` | PASS | REVISE | REVISE | `QA-LRN2-01`, `QA-LRN2-02`, `QA-LRN2-03`, `QA-LRN2-04` |
| `content/learn/8-elements-in-karate-lessons.json` | PASS | REVISE | REVISE | `QA-LRN3-01`, `QA-LRN3-02` |
| `content/learn/choosing-the-wrong-martial-art.json` | REVISE | REVISE | REVISE | `QA-LRN4-01`, `QA-LRN4-02`, `QA-LRN4-03` |
| `content/learn/develop-discipline.json` | REVISE | REVISE | REVISE | `QA-LRN5-01`, `QA-LRN5-02`, `QA-LRN5-03`, `QA-LRN5-04`, `QA-LRN5-05`, `QA-LRN5-06` |
| `content/learn/does-karate-suite-your-family.json` | REVISE | REVISE | REVISE | `QA-LRN6-01`, `QA-LRN6-02`, `QA-LRN6-03`, `QA-LRN6-04` |
| `content/learn/how-long-a-black-belt-takes.json` | REVISE | REVISE | REVISE | `QA-LRN7-01`, `QA-LRN7-02`, `QA-LRN7-03`, `QA-LRN7-04`, `QA-LRN7-05` |
| `content/learn/how-to-choose-karate-studio.json` | REVISE | REVISE | REVISE | `QA-LRN8-01`, `QA-LRN8-02`, `QA-LRN8-03` |
| `content/learn/make-your-kid-practice-karate-at-home.json` | REVISE | REVISE | REVISE | `QA-LRN9-01`, `QA-LRN9-02`, `QA-LRN9-03`, `QA-LRN9-04`, `QA-LRN9-05` |
| `content/learn/what-is-karate.json` | REVISE | REVISE | REVISE | `QA-LRN10-01`, `QA-LRN10-02`, `QA-LRN10-03` |
| `content/learn/what-to-notice-in-karate-lessons.json` | REVISE | REVISE | REVISE | `QA-LRN11-01`, `QA-LRN11-02`, `QA-LRN11-03`, `QA-LRN11-04`, `QA-LRN11-05` |
| `content/learn/why-learn-the-basics.json` | REVISE | REVISE | REVISE | `QA-LRN12-01`, `QA-LRN12-02`, `QA-LRN12-03`, `QA-LRN12-04` |
| `content/learn/להתאמן-בקראטה-בבית.json` | REVISE | REVISE | REVISE | `QA-LRN13-01`, `QA-LRN13-02`, `QA-LRN13-03` |

---

## 3. Detailed Findings by Record

### 1. `content/site.json`

- **Finding ID:** `QA-SIT-01`
  - **Severity:** `BLOCKER`
  - **Exact Path:** `content/site.json`
  - **JSON Pointer:** `/phone/telHref`
  - **Short Source Quotation:** `"tel:+972****1212"`
  - **Category:** Defective Contact URI / Operational Data
  - **Why it fails:** The tel URI contains literal masking asterisks (`****`) instead of the confirmed operational phone number `+972504731212`. Clicking this link on a mobile device fails to dial the studio.
  - **Evidence:** `handoff/completed/02-hebrew-content-records.md:14`, `handoff/reports/01-legacy-source-and-seo-map.md:243`
  - **Disposition:** `COPY REVISION`
  - **Minimal Correction:** `"tel:+972504731212"`

- **Finding ID:** `QA-SIT-02`
  - **Severity:** `BLOCKER`
  - **Exact Path:** `content/site.json`
  - **JSON Pointer:** `/contactChannels/1/href`
  - **Short Source Quotation:** `"tel:+972****1212"`
  - **Category:** Defective Contact URI / Operational Data
  - **Why it fails:** Repeats the masked telephone URI in the shared contact channel manifest.
  - **Evidence:** `handoff/completed/02-hebrew-content-records.md:14`, `handoff/reports/01-legacy-source-and-seo-map.md:243`
  - **Disposition:** `COPY REVISION`
  - **Minimal Correction:** `"tel:+972504731212"`

- **Finding ID:** `QA-SIT-03`
  - **Severity:** `LOW`
  - **Exact Path:** `content/site.json`
  - **JSON Pointer:** `/organization/tagline`
  - **Short Source Quotation:** `"קראטה והגנה עצמית בשיטת S.K.S.U"`
  - **Category:** Brand Naming Inconsistency
  - **Why it fails:** Uses dotted acronym `S.K.S.U` while `/organization/name` and page titles standardize on undotted `SKSU`.
  - **Evidence:** `handoff/completed/02-hebrew-content-records.md:14`
  - **Disposition:** `COPY REVISION`
  - **Minimal Correction:** `"קראטה והגנה עצמית בשיטת SKSU"`

---

### 2. `content/pages/why-us.json`

- **Finding ID:** `QA-WHY-01`
  - **Severity:** `MEDIUM`
  - **Exact Path:** `content/pages/why-us.json`
  - **JSON Pointer:** `/titleAnchor`
  - **Short Source Quotation:** `"מאמינים בך ועוזרים לך לממש את הפוטנציאל שבך, ברמה הגבוהה ביותר -"`
  - **Category:** SEO / Historical Anchor Risk
  - **Why it fails:** Preserved historical title anchor terminates with a dangling hyphen and empty separator (`-`), and contains a superlative promise ("ברמה הגבוהה ביותר"). Cannot be edited unilaterally.
  - **Evidence:** `handoff/completed/02-hebrew-content-records.md:18`, `handoff/reports/01-legacy-source-and-seo-map.md:120-125`
  - **Disposition:** `SEO/OWNER REVIEW REQUIRED`

- **Finding ID:** `QA-WHY-02`
  - **Severity:** `MEDIUM`
  - **Exact Path:** `content/pages/why-us.json`
  - **JSON Pointer:** `/intro`
  - **Short Source Quotation:** `"דגש מיוחד על בניית אישיות והקניית ערכים טובים... עוזרים לך לממש את הפוטנציאל שבך, ברמה הגבוהה ביותר."`
  - **Category:** Superlative / Outcome Claim
  - **Why it fails:** Asserts superlative life and character outcomes as definitive results.
  - **Evidence:** `handoff/completed/02-hebrew-content-records.md:15`, `handoff/reports/01-legacy-source-and-seo-map.md:231-240`
  - **Disposition:** `COPY REVISION`
  - **Minimal Correction:** `"בארגון SKSU שמנו לעצמנו למטרה לקדם את המתאמן דרך הקראטה, בדגש על הקניית ערכים ומשמעת עצמית. אנחנו כאן כדי לעזור לך להתקדם ולהפיק מעצמך את המיטב."`

- **Finding ID:** `QA-WHY-03`
  - **Severity:** `LOW`
  - **Exact Path:** `content/pages/why-us.json`
  - **JSON Pointer:** `/sections/0/body/0`
  - **Short Source Quotation:** `"לימוד אסטרטגיות הגנה עצמית אפקטיביות ופיתוח האנרגיה הפנימית בשליטה עצמית"`
  - **Category:** Esoteric Phrasing & Sentence Length
  - **Why it fails:** Sentence is 33 words long and includes esoteric pseudo-scientific phrasing ("פיתוח האנרגיה הפנימית").
  - **Evidence:** `AGENTS.md:48`, `handoff/completed/02-hebrew-content-records.md:15`
  - **Disposition:** `COPY REVISION`
  - **Minimal Correction:** Split into two sentences under 15 words and replace "פיתוח האנרגיה הפנימית" with focus and self-discipline.

---

### 3. `content/pages/locations/rishon-le-zion.json`

- **Finding ID:** `QA-RLZ-01`
  - **Severity:** `HIGH`
  - **Exact Path:** `content/pages/locations/rishon-le-zion.json`
  - **JSON Pointer:** `/titleAnchor`
  - **Short Source Quotation:** `"חוג קראטה בראשון לציון | הגנה עצמית לילדים - בשיטה ייחודית"`
  - **Category:** SEO / Historical Anchor Risk & Target Audience Anchor
  - **Why it fails:** The historical title anchor explicitly promises "הגנה עצמית לילדים" (self defense for kids), whereas current child programs, age brackets, and program availability are unconfirmed owner facts (report §6). Must be preserved as anchor but reviewed by owner and SEO.
  - **Evidence:** `handoff/completed/02-hebrew-content-records.md:15, 18`, `handoff/reports/01-legacy-source-and-seo-map.md:234`
  - **Disposition:** `SEO/OWNER REVIEW REQUIRED`

- **Finding ID:** `QA-RLZ-02`
  - **Severity:** `HIGH`
  - **Exact Path:** `content/pages/locations/rishon-le-zion.json`
  - **JSON Pointer:** `/h1`
  - **Short Source Quotation:** `"כשמדובר במשמעת, בטחון עצמי וכבוד- סט הכלים להצלחה בחיים"`
  - **Category:** SEO / Historical Anchor Risk & Life Outcome Claim
  - **Why it fails:** Preserved historical H1 contains defective spelling (`בטחון` lacking yod), missing space before hyphen (`וכבוד- סט`), and claims karate is a "toolkit for success in life".
  - **Evidence:** `handoff/completed/02-hebrew-content-records.md:15, 18`, `handoff/reports/01-legacy-source-and-seo-map.md:231-240`
  - **Disposition:** `SEO/OWNER REVIEW REQUIRED`

- **Finding ID:** `QA-RLZ-03`
  - **Severity:** `MEDIUM`
  - **Exact Path:** `content/pages/locations/rishon-le-zion.json`
  - **JSON Pointer:** `/sections/0/heading`
  - **Short Source Quotation:** `"סט הכלים להצלחה בחיים"`
  - **Category:** Outcome / Life Success Claim
  - **Why it fails:** Newly authored section heading echoes the ungrounded life-success claim from the historical H1 into editable editorial copy.
  - **Evidence:** `handoff/completed/02-hebrew-content-records.md:15`
  - **Disposition:** `COPY REVISION`
  - **Minimal Correction:** `"כלים למשמעת, ביטחון והתמדה"`

- **Finding ID:** `QA-RLZ-04`
  - **Severity:** `LOW`
  - **Exact Path:** `content/pages/locations/rishon-le-zion.json`
  - **JSON Pointer:** `/sections/1/body/0`
  - **Short Source Quotation:** `"שיטות הגנה עצמית למצבי חירום אמיתיים"`
  - **Category:** Self-Defense Efficacy Claim
  - **Why it fails:** Unqualified claim of efficacy in "real emergency situations" without emphasizing the controlled training context.
  - **Evidence:** `handoff/completed/02-hebrew-content-records.md:15, 19`
  - **Disposition:** `COPY REVISION`
  - **Minimal Correction:** Qualify as practicing defensive responses in a controlled and safe setting.

---

### 4. `content/pages/training/kihon.json`

- **Finding ID:** `QA-KIH-01`
  - **Severity:** `LOW`
  - **Exact Path:** `content/pages/training/kihon.json`
  - **JSON Pointer:** `/titleAnchor`
  - **Short Source Quotation:** `"קיהון -"`
  - **Category:** SEO / Historical Anchor Risk
  - **Why it fails:** Preserved historical anchor contains dangling empty separator `-`.
  - **Evidence:** `handoff/completed/02-hebrew-content-records.md:18`
  - **Disposition:** `SEO/OWNER REVIEW REQUIRED`

- **Finding ID:** `QA-KIH-02`
  - **Severity:** `LOW`
  - **Exact Path:** `content/pages/training/kihon.json`
  - **JSON Pointer:** `/sections/1/body/0`
  - **Short Source Quotation:** `"קראטה בלי בסיס איתן לא מחזיקה מעמד לאורך זמן."`
  - **Category:** Grammatical Gender Inconsistency
  - **Why it fails:** Treats "קראטה" as feminine ("לא מחזיקה מעמד"), whereas across other content records and standard martial arts convention in Hebrew, קראטה is masculine.
  - **Evidence:** `handoff/completed/02-hebrew-content-records.md:57`, `content/learn/what-is-karate.json`
  - **Disposition:** `COPY REVISION`
  - **Minimal Correction:** `"קראטה בלי בסיס איתן לא מחזיק מעמד לאורך זמן."`

---

### 5. `content/pages/training/kata.json`

- **Finding ID:** `QA-KAT-01`
  - **Severity:** `LOW`
  - **Exact Path:** `content/pages/training/kata.json`
  - **JSON Pointer:** `/titleAnchor`
  - **Short Source Quotation:** `"קאטות -"`
  - **Category:** SEO / Historical Anchor Risk
  - **Why it fails:** Preserved historical anchor contains dangling hyphen `-`.
  - **Evidence:** `handoff/completed/02-hebrew-content-records.md:18`
  - **Disposition:** `SEO/OWNER REVIEW REQUIRED`

- **Finding ID:** `QA-KAT-02`
  - **Severity:** `LOW`
  - **Exact Path:** `content/pages/training/kata.json`
  - **JSON Pointer:** `/sections/1/body/0`
  - **Short Source Quotation:** `"וקאטת ג'ין שנלמדה בסמינר ארגון ב-2014."`
  - **Category:** Historical Event Reference / Current Relevance
  - **Why it fails:** References a specific 2014 seminar event. While historically accurate to the archived video caption, owner verification is required to confirm this historical reference remains desired on the restored training page.
  - **Evidence:** `handoff/reports/01-legacy-source-and-seo-map.md:235`
  - **Disposition:** `OWNER FACT REQUIRED`

---

### 6. `content/pages/training/komita.json`

- **Finding ID:** `QA-KOM-01`
  - **Severity:** `LOW`
  - **Exact Path:** `content/pages/training/komita.json`
  - **JSON Pointer:** `/route`
  - **Short Source Quotation:** `"/komita/"`
  - **Category:** Historical Route Slug Typo
  - **Why it fails:** Route slug contains legacy phonetic misspelling `komita` (instead of standard `kumite` / `קומיטה`). Retained strictly for legacy URL authority preservation per plan §2.
  - **Evidence:** `handoff/reports/01-legacy-source-and-seo-map.md:50`, `.hermes/plans/2026-09-10_103835-sksu-custom-redesign-and-legacy-url-restoration.md:61`
  - **Disposition:** `SEO/OWNER REVIEW REQUIRED`

- **Finding ID:** `QA-KOM-02`
  - **Severity:** `LOW`
  - **Exact Path:** `content/pages/training/komita.json`
  - **JSON Pointer:** `/titleAnchor`
  - **Short Source Quotation:** `"קומיטה -"`
  - **Category:** SEO / Historical Anchor Risk
  - **Why it fails:** Preserved historical anchor contains dangling hyphen `-`.
  - **Evidence:** `handoff/completed/02-hebrew-content-records.md:18`
  - **Disposition:** `SEO/OWNER REVIEW REQUIRED`

---

### 7. `content/pages/training/self-defense-exercise.json`

- **Finding ID:** `QA-SDE-01`
  - **Severity:** `LOW`
  - **Exact Path:** `content/pages/training/self-defense-exercise.json`
  - **JSON Pointer:** `/titleAnchor`
  - **Short Source Quotation:** `"תרגילי הגנה עצמית -"`
  - **Category:** SEO / Historical Anchor Risk
  - **Why it fails:** Preserved historical anchor contains dangling hyphen `-`.
  - **Evidence:** `handoff/completed/02-hebrew-content-records.md:18`
  - **Disposition:** `SEO/OWNER REVIEW REQUIRED`

- **Finding ID:** `QA-SDE-02`
  - **Severity:** `MEDIUM`
  - **Exact Path:** `content/pages/training/self-defense-exercise.json`
  - **JSON Pointer:** `/intro`
  - **Short Source Quotation:** `"אנחנו מלמדים אסטרטגיות הגנה עצמית אפקטיביות למצבי חירום אמיתיים — ומתרגלים אותן בבטחה"`
  - **Category:** Self-Defense Efficacy Claim
  - **Why it fails:** Categorically claims to teach "effective self-defense strategies for real emergency situations", which borders on an ungrounded safety guarantee.
  - **Evidence:** `handoff/completed/02-hebrew-content-records.md:15, 19`
  - **Disposition:** `COPY REVISION`
  - **Minimal Correction:** `"לצד יסודות השוטוקאן, אנו מתרגלים עקרונות הגנה עצמית מעשיים — בצורה מבוקרת, בטוחה ומדורגת."`

- **Finding ID:** `QA-SDE-03`
  - **Severity:** `LOW`
  - **Exact Path:** `content/pages/training/self-defense-exercise.json`
  - **JSON Pointer:** `/sections/1/body/0`
  - **Short Source Quotation:** `"פיתוח האנרגיה הפנימית בשליטה עצמית, על פי עקרונות הקראטה המסורתי, הוא בדיוק מה שמאפשר להישאר רגוע וחד גם תחת לחץ."`
  - **Category:** Esoteric / Absolute Psychological Claim
  - **Why it fails:** Unprovable causal claim regarding "developing internal energy" enabling staying calm under pressure.
  - **Evidence:** `handoff/completed/02-hebrew-content-records.md:15`
  - **Disposition:** `COPY REVISION`
  - **Minimal Correction:** `"תרגול עקרונות הקראטה והשליטה העצמית מסייע לשמור על קור רוח וריכוז במצבי לחץ."`

---

### 8. `content/learn/10-reasons-to-learn-karate.json`

- **Finding ID:** `QA-LRN1-01`
  - **Severity:** `LOW`
  - **Exact Path:** `content/learn/10-reasons-to-learn-karate.json`
  - **JSON Pointer:** `/titleAnchor`
  - **Short Source Quotation:** `"10 סיבות להתחיל ללמוד קראטה -"`
  - **Category:** SEO / Historical Anchor Risk
  - **Why it fails:** Preserved historical anchor contains dangling hyphen `-`.
  - **Evidence:** `handoff/completed/02-hebrew-content-records.md:18`
  - **Disposition:** `SEO/OWNER REVIEW REQUIRED`

- **Finding ID:** `QA-LRN1-02`
  - **Severity:** `MEDIUM`
  - **Exact Path:** `content/learn/10-reasons-to-learn-karate.json`
  - **JSON Pointer:** `/sections/0/list/0`
  - **Short Source Quotation:** `"אלפי מתאמנים טוענים שהצורך לדעת להגן על עצמם ועל המשפחה במצב סכנה הוא הסיבה העיקרית"`
  - **Category:** Unverified Statistic / Scale Claim
  - **Why it fails:** "אלפי מתאמנים טוענים" asserts an unverified quantitative metric without evidence.
  - **Evidence:** `handoff/completed/02-hebrew-content-records.md:15`, `handoff/reports/01-legacy-source-and-seo-map.md:231-240`
  - **Disposition:** `COPY REVISION`
  - **Minimal Correction:** `"מתאמנים רבים מציינים שהרצון לדעת להגן על עצמם ועל משפחתם הוא שיקול מרכזי בהצטרפות לאימונים."`

- **Finding ID:** `QA-LRN1-03`
  - **Severity:** `MEDIUM`
  - **Exact Path:** `content/learn/10-reasons-to-learn-karate.json`
  - **JSON Pointer:** `/sections/0/list/1`
  - **Short Source Quotation:** `"עם השפעות מיטיבות גם על הגוף וגם על הנפש."`
  - **Category:** Health / Wellbeing Outcome Claim
  - **Why it fails:** Generalized health claim promising dual physical and mental health improvements.
  - **Evidence:** `handoff/completed/02-hebrew-content-records.md:15, 62`
  - **Disposition:** `COPY REVISION`
  - **Minimal Correction:** `"כפעילות גופנית התורמת לכושר, לתנועה ולהרגשה הכללית."`

---

### 9. `content/learn/10-tips-to-get-a-black-belt.json`

- **Finding ID:** `QA-LRN2-01`
  - **Severity:** `LOW`
  - **Exact Path:** `content/learn/10-tips-to-get-a-black-belt.json`
  - **JSON Pointer:** `/titleAnchor`
  - **Short Source Quotation:** `"המסע שלך לחגורה שחורה בקראטה: 10 טיפים שיעזרו לך להשיג את המטרה שלך -"`
  - **Category:** SEO / Historical Anchor Risk
  - **Why it fails:** Dangling hyphen `-` in historical anchor.
  - **Evidence:** `handoff/completed/02-hebrew-content-records.md:18`
  - **Disposition:** `SEO/OWNER REVIEW REQUIRED`

- **Finding ID:** `QA-LRN2-02`
  - **Severity:** `HIGH`
  - **Exact Path:** `content/learn/10-tips-to-get-a-black-belt.json`
  - **JSON Pointer:** `/sections/0/list/1`
  - **Short Source Quotation:** `"בדרך כלל לוקח בין שלוש לארבע שנים של תרגול עקבי להגיע לחגורה שחורה דאן 1."`
  - **Category:** Conflicting Timeframe & Belt Timeline Claim
  - **Why it fails:** States 3-4 years to 1st Dan, directly conflicting with `how-long-a-black-belt-takes.json` which states 3-5 years (or 3-6 years). SKSU belt timelines are unconfirmed owner facts.
  - **Evidence:** `handoff/completed/02-hebrew-content-records.md:15`, `handoff/reports/01-legacy-source-and-seo-map.md:235`, `content/learn/how-long-a-black-belt-takes.json`
  - **Disposition:** `OWNER FACT REQUIRED`

- **Finding ID:** `QA-LRN2-03`
  - **Severity:** `MEDIUM`
  - **Exact Path:** `content/learn/10-tips-to-get-a-black-belt.json`
  - **JSON Pointer:** `/sections/0/list/5`
  - **Short Source Quotation:** `"תשעים אחוז מההצלחה זה פשוט להגיע."`
  - **Category:** Unverified Statistic / Percentage
  - **Why it fails:** States a colloquial 90% statistic as a factual claim.
  - **Evidence:** `handoff/completed/02-hebrew-content-records.md:15, 62`
  - **Disposition:** `COPY REVISION`
  - **Minimal Correction:** `"חלק משמעותי מההצלחה הוא עצם ההתמדה וההגעה לכל שיעור."`

- **Finding ID:** `QA-LRN2-04`
  - **Severity:** `HIGH`
  - **Exact Path:** `content/learn/10-tips-to-get-a-black-belt.json`
  - **JSON Pointer:** `/sections/0/list/9`
  - **Short Source Quotation:** `"ויתור על המטרות פירושו כישלון מובטח — והתמדה מבטיחה הגעה ליעד."`
  - **Category:** Guaranteed Outcome / Absolute Claim
  - **Why it fails:** "והתמדה מבטיחה הגעה ליעד" constitutes an absolute contractual guarantee of success.
  - **Evidence:** `handoff/completed/02-hebrew-content-records.md:15, 62`
  - **Disposition:** `COPY REVISION`
  - **Minimal Correction:** `"ויתור על המטרה עוצר את ההתקדמות — בעוד שהתמדה מקרבת אותך ליעד צעד אחר צעד."`

---

### 10. `content/learn/8-elements-in-karate-lessons.json`

- **Finding ID:** `QA-LRN3-01`
  - **Severity:** `LOW`
  - **Exact Path:** `content/learn/8-elements-in-karate-lessons.json`
  - **JSON Pointer:** `/titleAnchor`
  - **Short Source Quotation:** `"8 היסודות העיקריים עליהם נבנה שיעור קראטה טיפוסי -"`
  - **Category:** SEO / Historical Anchor Risk
  - **Why it fails:** Dangling hyphen `-` and missing relative pronoun `ש-` (`עליהם נבנה` rather than standard contemporary `שעליהם נבנה`). Immutable anchor.
  - **Evidence:** `handoff/completed/02-hebrew-content-records.md:18`
  - **Disposition:** `SEO/OWNER REVIEW REQUIRED`

- **Finding ID:** `QA-LRN3-02`
  - **Severity:** `MEDIUM`
  - **Exact Path:** `content/learn/8-elements-in-karate-lessons.json`
  - **JSON Pointer:** `/sections/0/body/0`
  - **Short Source Quotation:** `"יש שיעורים באורכים שונים — ממפגשים קצרים לילדים צעירים ועד שיעורים בני שעה ויותר. הרשימה הבאה מבוססת על שיעור של שעה"`
  - **Category:** Unconfirmed Schedule / Duration Implication
  - **Why it fails:** Mentions short sessions for young children and 1-hour lessons; SKSU's actual class schedule, lesson durations, and age offerings are unconfirmed owner facts.
  - **Evidence:** `handoff/completed/02-hebrew-content-records.md:15`, `handoff/reports/01-legacy-source-and-seo-map.md:233-234`
  - **Disposition:** `COPY REVISION`
  - **Minimal Correction:** Qualify explicitly that martial arts classes generally vary in duration, without implying SKSU's specific schedule.

---

### 11. `content/learn/choosing-the-wrong-martial-art.json`

- **Finding ID:** `QA-LRN4-01`
  - **Severity:** `HIGH`
  - **Exact Path:** `content/learn/choosing-the-wrong-martial-art.json`
  - **JSON Pointer:** `/titleAnchor`
  - **Short Source Quotation:** `"מחיר הבחירה באמנות הלחימה שאינה מתאימה לילד -"`
  - **Category:** SEO / Historical Anchor Risk & Target Audience Anchor
  - **Why it fails:** Historical title anchor targets children (`לילד`), whereas current SKSU child programs and age ranges are unconfirmed owner facts (report §6). Must be preserved as anchor but reviewed.
  - **Evidence:** `handoff/completed/02-hebrew-content-records.md:15, 18`, `handoff/reports/01-legacy-source-and-seo-map.md:234`
  - **Disposition:** `SEO/OWNER REVIEW REQUIRED`

- **Finding ID:** `QA-LRN4-02`
  - **Severity:** `HIGH`
  - **Exact Path:** `content/learn/choosing-the-wrong-martial-art.json`
  - **JSON Pointer:** `/sections/2/body/1`
  - **Short Source Quotation:** `"לא שהוא מתאים לך. התקשרו, בקרו בכמה בתי ספר לפני שבוחרים... וחבל להשקיע שנים במשהו שלא מתאים לך. אם כבר בחרתם בשיטה, בחרו בשיטה מבוססת"`
  - **Category:** Direct Address Inconsistency (Plural vs Singular Male)
  - **Why it fails:** Frequent erratic switching between 2nd-person plural (`אתם`, `לכם`, `התקשרו`, `בקרו`, `בחרתם`, `בחרו`) and singular male (`לך`, `אותך`, `שלך`). Violates the universal singular-male direct address requirement.
  - **Evidence:** `AGENTS.md:48`, handoff requirement 4
  - **Disposition:** `COPY REVISION`
  - **Minimal Correction:** Standardize entirely to singular male (`התקשר, בקר בכמה בתי ספר לפני שאתה בוחר... אם כבר בחרת בשיטה, בחר בשיטה מבוססת`).

- **Finding ID:** `QA-LRN4-03`
  - **Severity:** `MEDIUM`
  - **Exact Path:** `content/learn/choosing-the-wrong-martial-art.json`
  - **JSON Pointer:** `/sections/2/body/2`
  - **Short Source Quotation:** `"אם כבר בחרתם בשיטה, בחרו בשיטה מבוססת, עם ארגון מוכר ומדריכים מוסמכים."`
  - **Category:** Implied Credential / Organization Recognition Claim
  - **Why it fails:** Implies formal state or organizational recognition and instructor licensing, which are unconfirmed facts for SKSU.
  - **Evidence:** `handoff/completed/02-hebrew-content-records.md:15`, `handoff/reports/01-legacy-source-and-seo-map.md:235`
  - **Disposition:** `COPY REVISION`
  - **Minimal Correction:** `"אם בחרת בשיטה, כדאי לבחור במועדון ותיק עם מדריכים בעלי ניסיון מוכח."`

---

### 12. `content/learn/develop-discipline.json`

- **Finding ID:** `QA-LRN5-01`
  - **Severity:** `LOW`
  - **Exact Path:** `content/learn/develop-discipline.json`
  - **JSON Pointer:** `/titleAnchor`
  - **Short Source Quotation:** `"קראטה - שיעור ראשון פיתוח משמעת ושליטה עצמית -"`
  - **Category:** SEO / Historical Anchor Risk
  - **Why it fails:** Dangling hyphen `-` in title anchor; discrepancy between hyphen in titleAnchor and en-dash in H1 preserved from legacy HTML.
  - **Evidence:** `handoff/completed/02-hebrew-content-records.md:18`
  - **Disposition:** `SEO/OWNER REVIEW REQUIRED`

- **Finding ID:** `QA-LRN5-02`
  - **Severity:** `MEDIUM`
  - **Exact Path:** `content/learn/develop-discipline.json`
  - **JSON Pointer:** `/intro`
  - **Short Source Quotation:** `"המורים שהשפיעו עליי הכי הרבה תמיד אמרו"`
  - **Category:** Unattributed First-Person Voice
  - **Why it fails:** Uses first-person singular pronoun "עליי" (on me) without an identified author/speaker, since legacy author bio was removed.
  - **Evidence:** `handoff/completed/02-hebrew-content-records.md:14, 57`
  - **Disposition:** `COPY REVISION`
  - **Minimal Correction:** `"מורים ותיקים לאורך השנים תמיד הדגישו ששיעור מפתח בקראטה הוא טיפוח משמעת עצמית ושליטה עצמית."`

- **Finding ID:** `QA-LRN5-03`
  - **Severity:** `BLOCKER`
  - **Exact Path:** `content/learn/develop-discipline.json`
  - **JSON Pointer:** `/sections/1/body/2`
  - **Short Source Quotation:** `"לצערים רבים, יש צעירים שפונים לכנופיות כדי למצוא קרבה ואחווה"`
  - **Category:** Spelling / Severe Malapropism Typo
  - **Why it fails:** "לצערים רבים" is ungrammatical gibberish in Hebrew, erroneously conflating "למרבה הצער" / "לדאבוננו" with the word "צעירים".
  - **Evidence:** Standard Hebrew grammar and dictionary
  - **Disposition:** `COPY REVISION`
  - **Minimal Correction:** `"למרבה הצער"`

- **Finding ID:** `QA-LRN5-04`
  - **Severity:** `HIGH`
  - **Exact Path:** `content/learn/develop-discipline.json`
  - **JSON Pointer:** `/sections/1/body/2`
  - **Short Source Quotation:** `"יש צעירים שפונים לכנופיות כדי למצוא קרבה ואחווה — ובית ספר לאמנויות לחימה יכול להוות אלטרנטיבה בריאה עם תוצאות מעודדות הרבה יותר."`
  - **Category:** Extreme Social Pathology / Sociological Claim
  - **Why it fails:** Sensational claim contrasting karate with youth joining criminal street gangs ("פונים לכנופיות"). Completely inappropriate and unevidenced for a local community dojo.
  - **Evidence:** `handoff/completed/02-hebrew-content-records.md:15, 62`
  - **Disposition:** `REMOVE CLAIM`

- **Finding ID:** `QA-LRN5-05`
  - **Severity:** `MEDIUM`
  - **Exact Path:** `content/learn/develop-discipline.json`
  - **JSON Pointer:** `/sections/2/body/0`
  - **Short Source Quotation:** `"יש אינספור דוגמאות של מתאמנים ומדריכים ששינו את חייהם מקצה לקצה דרך המעורבות באמנויות לחימה."`
  - **Category:** Unsubstantiated Life Transformation Claim
  - **Why it fails:** Asserts countless cases of trainees whose lives were completely transformed.
  - **Evidence:** `handoff/completed/02-hebrew-content-records.md:15`
  - **Disposition:** `COPY REVISION`
  - **Minimal Correction:** `"מתאמנים רבים מעידים שהתרגול הקבוע תרם לסדר היום ולביטחון העצמי שלהם."`

- **Finding ID:** `QA-LRN5-06`
  - **Severity:** `MEDIUM`
  - **Exact Path:** `content/learn/develop-discipline.json`
  - **JSON Pointer:** `/sections/2/body/2`
  - **Short Source Quotation:** `"משמעת עצמית גבוהה ושליטה עצמית הן תוצאות טבעיות של סביבה חיובית ומאתגרת."`
  - **Category:** Guaranteed Outcome / Deterministic Phrasing
  - **Why it fails:** Declares self-discipline and self-control to be automatic "natural results".
  - **Evidence:** `handoff/completed/02-hebrew-content-records.md:15, 62`
  - **Disposition:** `COPY REVISION`
  - **Minimal Correction:** `"סביבת אימונים חיובית ומאתגרת מהווה קרקע פורייה לפיתוח משמעת עצמית ושליטה עצמית."`

---

### 13. `content/learn/does-karate-suite-your-family.json`

- **Finding ID:** `QA-LRN6-01`
  - **Severity:** `LOW`
  - **Exact Path:** `content/learn/does-karate-suite-your-family.json`
  - **JSON Pointer:** `/titleAnchor`
  - **Short Source Quotation:** `"האם קראטה הוא הבחירה הנכונה עבור המשפחה שלך? -"`
  - **Category:** SEO / Historical Anchor Risk
  - **Why it fails:** Historical title anchor ends in dangling hyphen `-`. Legacy slug contains typo `suite` instead of `suit`.
  - **Evidence:** `handoff/completed/02-hebrew-content-records.md:18`
  - **Disposition:** `SEO/OWNER REVIEW REQUIRED`

- **Finding ID:** `QA-LRN6-02`
  - **Severity:** `MEDIUM`
  - **Exact Path:** `content/learn/does-karate-suite-your-family.json`
  - **JSON Pointer:** `/sections/0/body/0`
  - **Short Source Quotation:** `"האימון מגביר את קצב פעימות הלב ותורם לכושר האירובי. קראטה מאתגרת בכל גיל"`
  - **Category:** Health / Aerobic Fitness & Age Claim
  - **Why it fails:** Asserts specific cardiovascular physiological health claims ("מגביר את קצב פעימות הלב ותורם לכושר האירובי") and claims suitability "בכל גיל" when SKSU current age limits are unconfirmed.
  - **Evidence:** `handoff/completed/02-hebrew-content-records.md:15`, `handoff/reports/01-legacy-source-and-seo-map.md:234`
  - **Disposition:** `COPY REVISION`
  - **Minimal Correction:** `"האימון משלב תנועה מגוונת התורמת לכושר הגופני, ומתאים למתאמנים בהתאם ליכולתם האישית."`

- **Finding ID:** `QA-LRN6-03`
  - **Severity:** `HIGH`
  - **Exact Path:** `content/learn/does-karate-suite-your-family.json`
  - **JSON Pointer:** `/sections/3/body/1`
  - **Short Source Quotation:** `"יכולים לצאת מזה רק דברים טובים"`
  - **Category:** Categorical / Guarantee Claim
  - **Why it fails:** "יכולים לצאת מזה רק דברים טובים" (only good things can come of this) is an absolute categorical guarantee.
  - **Evidence:** `handoff/completed/02-hebrew-content-records.md:15, 62`
  - **Disposition:** `COPY REVISION`
  - **Minimal Correction:** `"אימון כזה יכול לתרום רבות לכושר ולזמן איכות משותף."`

- **Finding ID:** `QA-LRN6-04`
  - **Severity:** `MEDIUM`
  - **Exact Path:** `content/learn/does-karate-suite-your-family.json`
  - **JSON Pointer:** `/sections/3/body/1`
  - **Short Source Quotation:** `"אם תגיעו לבית הספר המקומי... רוצים לבדוק אם זה מתאים למשפחה שלכם? קראו איך בוחרים... ובואו לשיעור ניסיון"`
  - **Category:** Direct Address Inconsistency
  - **Why it fails:** Switches from singular male (`אתה נהנה`, `להגן על עצמך`, `גילך`) to plural (`תגיעו`, `שלכם`, `קראו`, `בואו`).
  - **Evidence:** `AGENTS.md:48`, handoff requirement 4
  - **Disposition:** `COPY REVISION`
  - **Minimal Correction:** `"אם תגיע לדוג'ו... רוצה לבדוק אם זה מתאים למשפחה שלך? קרא... ובוא לשיעור ניסיון ללא עלות בראשון לציון."`

---

### 14. `content/learn/how-long-a-black-belt-takes.json`

- **Finding ID:** `QA-LRN7-01`
  - **Severity:** `LOW`
  - **Exact Path:** `content/learn/how-long-a-black-belt-takes.json`
  - **JSON Pointer:** `/titleAnchor`
  - **Short Source Quotation:** `"למה לוקח כל כך הרבה זמן להגיע לחגורה שחורה בקראטה? -"`
  - **Category:** SEO / Historical Anchor Risk
  - **Why it fails:** Dangling hyphen `-` in historical anchor.
  - **Evidence:** `handoff/completed/02-hebrew-content-records.md:18`
  - **Disposition:** `SEO/OWNER REVIEW REQUIRED`

- **Finding ID:** `QA-LRN7-02`
  - **Severity:** `HIGH`
  - **Exact Path:** `content/learn/how-long-a-black-belt-takes.json`
  - **JSON Pointer:** `/sections/0/body/0`
  - **Short Source Quotation:** `"באופן כללי, לוקח בין שלוש לחמש שנים להגיע לחגורה שחורה ברוב אמנויות הלחימה המקובלות."`
  - **Category:** Cross-Record Conflicting Belt Timeline
  - **Why it fails:** Asserts 3-5 years (and later in section 2 mentions "שלוש או שש שנים"), directly conflicting with `10-tips-to-get-a-black-belt.json` which states 3-4 years.
  - **Evidence:** `content/learn/10-tips-to-get-a-black-belt.json:sections[0].list[1]`, `handoff/reports/01-legacy-source-and-seo-map.md:235`
  - **Disposition:** `OWNER FACT REQUIRED`

- **Finding ID:** `QA-LRN7-03`
  - **Severity:** `HIGH`
  - **Exact Path:** `content/learn/how-long-a-black-belt-takes.json`
  - **JSON Pointer:** `/sections/0/body/1`
  - **Short Source Quotation:** `"אימון פעמיים בשבוע, שעה בכל פעם, במשך שלוש שנים — אלה בערך 312 שעות אימון. לעומת זאת, שלוש פעמים בשבוע במשך ארבע שנים — אלה כבר 624 שעות"`
  - **Category:** Precise Practice-Hour Math & Schedule Assumption
  - **Why it fails:** Specific practice-hour math (312 hours vs 624 hours) and explicit class frequency assumptions ("פעמיים בשבוע, שעה בכל פעם") when SKSU's schedule is unconfirmed.
  - **Evidence:** `handoff/completed/02-hebrew-content-records.md:15`, `handoff/reports/01-legacy-source-and-seo-map.md:233`
  - **Disposition:** `REMOVE CLAIM`

- **Finding ID:** `QA-LRN7-04`
  - **Severity:** `MEDIUM`
  - **Exact Path:** `content/learn/how-long-a-black-belt-takes.json`
  - **JSON Pointer:** `/sections/1/body/0`
  - **Short Source Quotation:** `"יהיה לך ידע מעמיק בכ-20–25 טכניקות הכוללות את המכות, הבעיטות והחסימות הבסיסיות, כעשר קאטות, וכמה סוגים של תרגולי קרב"`
  - **Category:** Unconfirmed Syllabus Scope & Run-on Sentence
  - **Why it fails:** 40-word run-on sentence stating precise syllabus numbers (20-25 techniques, ~10 katas) when SKSU's current curriculum is unconfirmed.
  - **Evidence:** `handoff/completed/02-hebrew-content-records.md:15`, `handoff/reports/01-legacy-source-and-seo-map.md:235`, `AGENTS.md:48`
  - **Disposition:** `OWNER FACT REQUIRED`

- **Finding ID:** `QA-LRN7-05`
  - **Severity:** `HIGH`
  - **Exact Path:** `content/learn/how-long-a-black-belt-takes.json`
  - **JSON Pointer:** `/sections/2/body/1`
  - **Short Source Quotation:** `"ואין ספק שתגיע לחגורה השחורה, ולא משנה אם זה ייקח שלוש או שש שנים."`
  - **Category:** Guaranteed Outcome / Absolute Claim
  - **Why it fails:** "ואין ספק שתגיע לחגורה השחורה" (there is no doubt you will reach a black belt) is an explicit outcome guarantee.
  - **Evidence:** `handoff/completed/02-hebrew-content-records.md:15, 62`
  - **Disposition:** `COPY REVISION`
  - **Minimal Correction:** `"ובהתמדה עקבית באימונים תוכל להתקדם צעד אחר צעד לעבר היעד שהצבת לעצמך."`

---

### 15. `content/learn/how-to-choose-karate-studio.json`

- **Finding ID:** `QA-LRN8-01`
  - **Severity:** `LOW`
  - **Exact Path:** `content/learn/how-to-choose-karate-studio.json`
  - **JSON Pointer:** `/titleAnchor`
  - **Short Source Quotation:** `"כך תבחר דוג'ו לקראטה בשלושה צעדים פשוטים -"`
  - **Category:** SEO / Historical Anchor Typographic Discrepancy
  - **Why it fails:** Title anchor has straight apostrophe and dangling hyphen, while H1 has curly right apostrophe `דוג’ו`. Preserved from historical capture.
  - **Evidence:** `handoff/completed/02-hebrew-content-records.md:18`
  - **Disposition:** `SEO/OWNER REVIEW REQUIRED`

- **Finding ID:** `QA-LRN8-02`
  - **Severity:** `MEDIUM`
  - **Exact Path:** `content/learn/how-to-choose-karate-studio.json`
  - **JSON Pointer:** `/intro`
  - **Short Source Quotation:** `"אם אתה כמוני, אתה רוצה להיכנס לכושר... (סטודיו לקראטה = דוג'ו)"`
  - **Category:** Clumsy Phrasing & Residual First-Person Voice
  - **Why it fails:** "אם אתה כמוני" uses first-person biographical voice when author persona was removed; "(סטודיו לקראטה = דוג'ו)" is awkward and unnatural in Hebrew prose.
  - **Evidence:** `AGENTS.md:48`, Hebrew stylistic standards
  - **Disposition:** `COPY REVISION`
  - **Minimal Correction:** `"אם אתה מעוניין לשפר את הכושר דרך אמנות לחימה, דוג'ו (מועדון קראטה) הוא מקום מצוין להתחיל בו."`

- **Finding ID:** `QA-LRN8-03`
  - **Severity:** `LOW`
  - **Exact Path:** `content/learn/how-to-choose-karate-studio.json`
  - **JSON Pointer:** `/sections/0/body/0`
  - **Short Source Quotation:** `"אם הוא פועל כבר כמה שנים — כנראה שהוא לא הולך להיסגר בזמן הקרוב"`
  - **Category:** Commercial Longevity Claim
  - **Why it fails:** Speculative business longevity assertion.
  - **Evidence:** `handoff/completed/02-hebrew-content-records.md:15`
  - **Disposition:** `COPY REVISION`
  - **Minimal Correction:** `"מועדון שפועל בהצלחה לאורך זמן מעיד על יציבות ועל שביעות רצון של המתאמנים."`

---

### 16. `content/learn/make-your-kid-practice-karate-at-home.json`

- **Finding ID:** `QA-LRN9-01`
  - **Severity:** `LOW`
  - **Exact Path:** `content/learn/make-your-kid-practice-karate-at-home.json`
  - **JSON Pointer:** `/titleAnchor`
  - **Short Source Quotation:** `"איך לגרום לילד לתרגל קראטה בבית- 3 טיפים מנצחים -"`
  - **Category:** SEO / Historical Anchor Risk
  - **Why it fails:** Missing space before hyphen (`בבית- 3`) and dangling hyphen in title anchor. Preserved historical anchor.
  - **Evidence:** `handoff/completed/02-hebrew-content-records.md:18`
  - **Disposition:** `SEO/OWNER REVIEW REQUIRED`

- **Finding ID:** `QA-LRN9-02`
  - **Severity:** `MEDIUM`
  - **Exact Path:** `content/learn/make-your-kid-practice-karate-at-home.json`
  - **JSON Pointer:** `/sections/0/body/0`
  - **Short Source Quotation:** `"בין אם אתם גרים בבית גדול או בדירה צנועה, השתדל ליצור אזור ייעודי... שלושה מטר על שלושה"`
  - **Category:** Direct Address Shift & Grammar & Absolute Assertion
  - **Why it fails:** Switches from plural `אתם גרים` to singular male `השתדל`; colloquial count `שלושה מטר על שלושה` should be `שלושה על שלושה מטרים`.
  - **Evidence:** Hebrew grammar, `AGENTS.md:48`
  - **Disposition:** `COPY REVISION`
  - **Minimal Correction:** `"בין אם אתה גר בבית מרווח או בדירה, השתדל לייעד פינה שבה הילד יוכל לנוע בחופשיות. שטח של כשלושה על שלושה מטרים יספיק בהחלט."`

- **Finding ID:** `QA-LRN9-03`
  - **Severity:** `HIGH`
  - **Exact Path:** `content/learn/make-your-kid-practice-karate-at-home.json`
  - **JSON Pointer:** `/sections/1/body/1`
  - **Short Source Quotation:** `"ואם תבנו תכנית מסודרת — הילד יתקדם ויצליח."`
  - **Category:** Child Outcome Guarantee & Address Inconsistency
  - **Why it fails:** Promises guaranteed child success ("הילד יתקדם ויצליח") and uses plural address `תבנו` instead of singular male `תבנה`.
  - **Evidence:** `handoff/completed/02-hebrew-content-records.md:15`, `AGENTS.md:48`
  - **Disposition:** `COPY REVISION`
  - **Minimal Correction:** `"תכנית קבועה תסייע לילד לבנות הרגלי אימון טובים."`

- **Finding ID:** `QA-LRN9-04`
  - **Severity:** `MEDIUM`
  - **Exact Path:** `content/learn/make-your-kid-practice-karate-at-home.json`
  - **JSON Pointer:** `/sections/2/body/0`
  - **Short Source Quotation:** `"הילד שלך מאוד רוצה לרצות אותך"`
  - **Category:** Unsubstantiated Child Psychology Assertion
  - **Why it fails:** Broad unverified assertion about child psychological motivation.
  - **Evidence:** `handoff/completed/02-hebrew-content-records.md:15`
  - **Disposition:** `COPY REVISION`
  - **Minimal Correction:** `"עידוד ומילה טובה מההורים מעניקים לילד מוטיבציה רבה להמשיך."`

- **Finding ID:** `QA-LRN9-05`
  - **Severity:** `MEDIUM`
  - **Exact Path:** `content/learn/make-your-kid-practice-karate-at-home.json`
  - **JSON Pointer:** `/sections/2/body/1`
  - **Short Source Quotation:** `"הסיכוי שיתמיד ויצליח יעלה בצורה משמעותית."`
  - **Category:** Psychological / Outcome Assertion
  - **Why it fails:** Asserts a categorical increase in success and perseverance probability without evidence.
  - **Evidence:** `handoff/completed/02-hebrew-content-records.md:15`
  - **Disposition:** `COPY REVISION`
  - **Minimal Correction:** `"מסגרת ברורה ומוגדרת מראש מקלה על הילד להתמיד לאורך זמן."`

---

### 17. `content/learn/what-is-karate.json`

- **Finding ID:** `QA-LRN10-01`
  - **Severity:** `LOW`
  - **Exact Path:** `content/learn/what-is-karate.json`
  - **JSON Pointer:** `/titleAnchor`
  - **Short Source Quotation:** `"אז מה זה בעצם קראטה? -"`
  - **Category:** SEO / Historical Anchor Risk
  - **Why it fails:** Dangling hyphen `-` in historical anchor.
  - **Evidence:** `handoff/completed/02-hebrew-content-records.md:18`
  - **Disposition:** `SEO/OWNER REVIEW REQUIRED`

- **Finding ID:** `QA-LRN10-02`
  - **Severity:** `HIGH`
  - **Exact Path:** `content/learn/what-is-karate.json`
  - **JSON Pointer:** `/sections/0/body/1`
  - **Short Source Quotation:** `"מי שמדבר על משמעת וריכוז אבל מתנהג בבהמיות ומאבד ריכוז בקלות"`
  - **Category:** Inappropriate Register / Coarse Diction
  - **Why it fails:** "מתנהג בבהמיות" (acts beastly) is coarse, aggressive, and discordant with natural Sabra educational tone.
  - **Evidence:** `AGENTS.md:48, 56`, Sabra naturalness standards
  - **Disposition:** `COPY REVISION`
  - **Minimal Correction:** `"מי שמדבר על משמעת וריכוז אך פועל בחוסר כבוד ובאימפולסיביות"`

- **Finding ID:** `QA-LRN10-03`
  - **Severity:** `MEDIUM`
  - **Exact Path:** `content/learn/what-is-karate.json`
  - **JSON Pointer:** `/sections/1/body/1`
  - **Short Source Quotation:** `"נוכל לשנות את מאזן חיינו לטובה... ולמצוא את מקומך בעולם."`
  - **Category:** Grand Life Outcome Claim
  - **Why it fails:** Exaggerated philosophical promises about changing life balance and finding one's place in the world.
  - **Evidence:** `handoff/completed/02-hebrew-content-records.md:15`
  - **Disposition:** `COPY REVISION`
  - **Minimal Correction:** Focus on training providing practical personal confidence and focus in daily life.

---

### 18. `content/learn/what-to-notice-in-karate-lessons.json`

- **Finding ID:** `QA-LRN11-01`
  - **Severity:** `LOW`
  - **Exact Path:** `content/learn/what-to-notice-in-karate-lessons.json`
  - **JSON Pointer:** `/titleAnchor`
  - **Short Source Quotation:** `"למה לשים לב במדריך או מועדון קראטה? -"`
  - **Category:** SEO / Historical Anchor Risk
  - **Why it fails:** Dangling hyphen `-` in historical anchor.
  - **Evidence:** `handoff/completed/02-hebrew-content-records.md:18`
  - **Disposition:** `SEO/OWNER REVIEW REQUIRED`

- **Finding ID:** `QA-LRN11-02`
  - **Severity:** `BLOCKER`
  - **Exact Path:** `content/learn/what-to-notice-in-karate-lessons.json`
  - **JSON Pointer:** `/intro`
  - **Short Source Quotation:** `"דינמיות, כוח והרשמה."`
  - **Category:** Severe Malapropism / Translation Artifact
  - **Why it fails:** "והרשמה" is a bizarre translation-ese artifact for "impressiveness" (confusing "הרשמה" meaning registration/enrollment with "רושם" or "יכולת להרשים"). A teacher's traits cannot be "dynamics, power and enrollment".
  - **Evidence:** Hebrew dictionary, natural Sabra usage
  - **Disposition:** `COPY REVISION`
  - **Minimal Correction:** `"דינמיות, עוצמה ויכולת להרשים."`

- **Finding ID:** `QA-LRN11-03`
  - **Severity:** `MEDIUM`
  - **Exact Path:** `content/learn/what-to-notice-in-karate-lessons.json`
  - **JSON Pointer:** `/sections/0/body/0`
  - **Short Source Quotation:** `"ויוביל אותך להצלחה."`
  - **Category:** Guaranteed Outcome Claim
  - **Why it fails:** Absolute claim that the instructor "will lead you to success".
  - **Evidence:** `handoff/completed/02-hebrew-content-records.md:15, 62`
  - **Disposition:** `COPY REVISION`
  - **Minimal Correction:** `"ויסייע לך להתקדם בצורה הטובה ביותר."`

- **Finding ID:** `QA-LRN11-04`
  - **Severity:** `HIGH`
  - **Exact Path:** `content/learn/what-to-notice-in-karate-lessons.json`
  - **JSON Pointer:** `/sections/1/body/1`
  - **Short Source Quotation:** `"והאם המועדון עושה בדיקות רקע לצוות המדריכים? האם הם מוסמכים להכשיר גם מעבר לרמת חגורה שחורה?"`
  - **Category:** Unconfirmed Credential & Regulatory Expectation
  - **Why it fails:** Demands institutional criteria ("criminal background checks", licensing beyond black belt) imported from foreign dojos, while SKSU's own instructor certifications and vetting processes remain unconfirmed owner facts.
  - **Evidence:** `handoff/completed/02-hebrew-content-records.md:15`, `handoff/reports/01-legacy-source-and-seo-map.md:235`
  - **Disposition:** `OWNER FACT REQUIRED`

- **Finding ID:** `QA-LRN11-05`
  - **Severity:** `LOW`
  - **Exact Path:** `content/learn/what-to-notice-in-karate-lessons.json`
  - **JSON Pointer:** `/sections/2/body/0`
  - **Short Source Quotation:** `"האם יש זרימה אורגנית מפעילות אחת לאחרת"`
  - **Category:** Anglicism / Loan Translation
  - **Why it fails:** "זרימה אורגנית" is an awkward literal translation of English "organic flow".
  - **Evidence:** Natural Sabra idiom
  - **Disposition:** `COPY REVISION`
  - **Minimal Correction:** `"האם יש מעבר טבעי ורציף מפעילות אחת לאחרת"`

---

### 19. `content/learn/why-learn-the-basics.json`

- **Finding ID:** `QA-LRN12-01`
  - **Severity:** `LOW`
  - **Exact Path:** `content/learn/why-learn-the-basics.json`
  - **JSON Pointer:** `/titleAnchor`
  - **Short Source Quotation:** `"למה כל כך חשוב ללמוד את הבסיס בקראטה? -"`
  - **Category:** SEO / Historical Anchor Risk
  - **Why it fails:** Dangling hyphen `-` in historical anchor.
  - **Evidence:** `handoff/completed/02-hebrew-content-records.md:18`
  - **Disposition:** `SEO/OWNER REVIEW REQUIRED`

- **Finding ID:** `QA-LRN12-02`
  - **Severity:** `LOW`
  - **Exact Path:** `content/learn/why-learn-the-basics.json`
  - **JSON Pointer:** `/intro`
  - **Short Source Quotation:** `"ולסנסאי יש סיבות טובות לחזור עליה שוב ושוב."`
  - **Category:** Pronoun Agreement Ambiguity
  - **Why it fails:** "לחזור עליה" refers back grammatically to "השאלה", but the intended semantic meaning is repeating the basics (masculine `הבסיס`, therefore `לחזור עליו`).
  - **Evidence:** Hebrew syntax and readability
  - **Disposition:** `COPY REVISION`
  - **Minimal Correction:** `"ולסנסאי יש סיבות מצוינות לחזור עליו שוב ושוב."`

- **Finding ID:** `QA-LRN12-03`
  - **Severity:** `BLOCKER`
  - **Exact Path:** `content/learn/why-learn-the-basics.json`
  - **JSON Pointer:** `/sections/0/body/0`
  - **Short Source Quotation:** `"לנגב ולמצח מכוניות במשך שעות"`
  - **Category:** Spelling / Non-Existent Word Typo
  - **Why it fails:** "ולמצח" is not a word in Hebrew. In the context of the famous Karate Kid wax on, wax off scene, the author intended "ולצחצח" or "ולמרק".
  - **Evidence:** Hebrew dictionary
  - **Disposition:** `COPY REVISION`
  - **Minimal Correction:** `"לנגב ולצחצח מכוניות במשך שעות"`

- **Finding ID:** `QA-LRN12-04`
  - **Severity:** `LOW`
  - **Exact Path:** `content/learn/why-learn-the-basics.json`
  - **JSON Pointer:** `/sections/1/body/1`
  - **Short Source Quotation:** `"ועוברים לגור בבית: נהנים מהידע שצברנו ומיישמים אותו בחיים."`
  - **Category:** Metaphorical Life Application Claim
  - **Why it fails:** Overextends the building metaphor into broad life-outcome application.
  - **Evidence:** `handoff/completed/02-hebrew-content-records.md:15`
  - **Disposition:** `COPY REVISION`
  - **Minimal Correction:** Keep focus on applying the fundamentals to advanced training on the mat.

---

### 20. `content/learn/להתאמן-בקראטה-בבית.json`

- **Finding ID:** `QA-LRN13-01`
  - **Severity:** `LOW`
  - **Exact Path:** `content/learn/להתאמן-בקראטה-בבית.json`
  - **JSON Pointer:** `/titleAnchor`
  - **Short Source Quotation:** `"להתאמן בקראטה בבית -"`
  - **Category:** SEO / Historical Anchor Risk
  - **Why it fails:** Dangling hyphen `-` in historical anchor.
  - **Evidence:** `handoff/completed/02-hebrew-content-records.md:18`
  - **Disposition:** `SEO/OWNER REVIEW REQUIRED`

- **Finding ID:** `QA-LRN13-02`
  - **Severity:** `HIGH`
  - **Exact Path:** `content/learn/להתאמן-בקראטה-בבית.json`
  - **JSON Pointer:** `/sections`
  - **Short Source Quotation:** `"[Whole Article Body]"`
  - **Category:** Synthetic Unanchored Content / Owner Review Required
  - **Why it fails:** The historical archived body was entirely missing (covered by an injected third-party player iframe in the archive capture). The entire body prose was synthetically constructed by borrowing snippets from other articles. Must be explicitly reviewed and approved by the owner before any publication.
  - **Evidence:** `content/learn/להתאמן-בקראטה-בבית.json:_sourceNotes`, `handoff/completed/02-hebrew-content-records.md:68`
  - **Disposition:** `SEO/OWNER REVIEW REQUIRED`

- **Finding ID:** `QA-LRN13-03`
  - **Severity:** `BLOCKER`
  - **Exact Path:** `content/learn/להתאמן-בקראטה-בבית.json`
  - **JSON Pointer:** `/sections/0/list/1`
  - **Short Source Quotation:** `"עדיפות קצרה ותכופה על אימון ארוך ומדי פעם."`
  - **Category:** Broken Syntax / Ungrammatical Construction
  - **Why it fails:** "עדיפות קצרה ותכופה על אימון..." is ungrammatical Hebrew syntax; the adjective modifies the noun "עדיפות" (priority) rather than the practice session.
  - **Evidence:** Hebrew syntax and grammar rules
  - **Disposition:** `COPY REVISION`
  - **Minimal Correction:** `"עדיף אימון קצר ותדיר על פני אימון ארוך אחת לכמה זמן."`

---

## 4. Cross-Record Terminology and Fact Consistency

1. **Brand & Style Naming:**
   - Acronym inconsistency: `site.json` defines `/organization/name` as `"SKSU"` but uses `"S.K.S.U"` in `/organization/tagline`. Similarly, `why-us.json`, `self-defense-exercise.json`, and `rishon-le-zion.json` use `"S.K.S.U"` in body prose, while metadata titles and other articles use `"SKSU"`. A single convention should be approved (recommendation: undotted `SKSU` in contemporary copy and titles; retain dotted only where historical anchors require it).
   - Style designation: Style is consistently referred to as `שוטוקאן קראטה-דו` or `שוטוקאן`.
2. **Instructor Naming:**
   - Fully consistent across records: `אריה ניקר` is the sole instructor named (`site.json`, `rishon-le-zion.json`, `kata.json`). Legacy mentions of `איתן יריב`, unconfirmed honorifics (`שיהן`), and unconfirmed ranks (`דאן 9`) were properly omitted from all 20 records.
3. **Location & Address:**
   - Fully consistent: `התזמורת 17, ראשון לציון` is used across `site.json` and `rishon-le-zion.json`. The Holon dojo is strictly excluded from active copy across all 20 records as mandated.
4. **Phone & Contact Channels:**
   - Display number: `050-473-1212` is consistent across all records.
   - Tel URI defect: `content/site.json` contains `tel:+972****1212` in both `/phone/telHref` and `/contactChannels/1/href`, masking the digits with asterisks and breaking telephony dialing, while the WhatsApp href uses the full unmasked number (`https://wa.me/972504731212`).
5. **Free-Trial Wording:**
   - Consistently phrased as `שיעור ניסיון ללא עלות` across CTAs and body text, avoiding confusing commercial or pricing commitments.
6. **Training Terminology:**
   - Technical terms (`קיהון`, `קאטה`, `קומיטה`) are consistent in Hebrew text. The historical slug typo `/komita/` is maintained strictly as an immutable canonical route. In `kihon.json:sections[1].body[0]`, "קראטה" is mistakenly treated as feminine (`לא מחזיקה מעמד`), conflicting with standard masculine agreement elsewhere (`שקראטה הוא כל הדברים האלה` in `what-is-karate.json`).
7. **Direct-Address Consistency:**
   - Severe direct-address switching occurs in `choosing-the-wrong-martial-art.json`, `does-karate-suite-your-family.json`, and `make-your-kid-practice-karate-at-home.json`, where copy abruptly pivots between singular male (`אתה/לך/שלך`) and plural (`אתם/לכם/שלכם`, and plural imperatives `התקשרו/בקרו/בחרו/בואו/תבנו`). Standardizing to singular male across all editable prose is required.
8. **Duplicated & Conflicting Claims:**
   - Black belt progression timeline: `10-tips-to-get-a-black-belt.json` asserts 3 to 4 years to reach 1st Dan, whereas `how-long-a-black-belt-takes.json` asserts 3 to 5 years (and mentions 3 or 6 years). SKSU's actual curriculum and progression standards must be clarified by the owner.

---

## 5. Mandatory Human Gate and Authorization Boundaries

1. **Mandatory Human Gate:** Eitan’s human spot-check of all Hebrew copy remains mandatory following this QA review before any source modification is accepted.
2. **Authorization Boundaries:** This QA report is strictly an editorial and claim-safety gate. **Neither this report nor any outcome does not authorize the SKSU implementation rebuild, production wiring, publication, or deployment.** Any subsequent copy editing belongs to a separately approved task (`waocopy`), and any changes to anchors or operational facts require prior owner and SEO clearance.

---

## 6. Decision Escalation & Overall Verdict

### Blockers and Required Decision Owners:
1. **Defective Tel Links (`QA-SIT-01`, `QA-SIT-02`):** Blocked in `content/site.json` due to masked asterisks `tel:+972****1212`. Owner: `waocopy` / `waoengineer`.
2. **Severe Linguistic Typos & Broken Syntax (`QA-LRN5-03`, `QA-LRN11-02`, `QA-LRN12-03`, `QA-LRN13-03`):**
   - `content/learn/develop-discipline.json`: `"לצערים רבים"` -> `"למרבה הצער"`.
   - `content/learn/what-to-notice-in-karate-lessons.json`: `"והרשמה"` -> `"יכולת להרשים"` / `"רושם"`.
   - `content/learn/why-learn-the-basics.json`: `"ולמצח מכוניות"` -> `"ולצחצח מכוניות"`.
   - `content/learn/להתאמן-בקראטה-בבית.json`: `"עדיפות קצרה ותכופה על אימון"` -> `"עדיף אימון קצר ותדיר"`.
   - Owner: `waocopy`.
3. **Severe Direct Address Inconsistency (`QA-LRN4-02`, `QA-LRN6-04`, `QA-LRN9-02`):** Unify all plural shifts to singular male. Owner: `waocopy`.
4. **Conflicting Black Belt Progression Timelines (`QA-LRN2-02`, `QA-LRN7-02`):** 3-4 years vs 3-5 years. Owner: `Arie Nikar` / `waostrategy`.
5. **Historical Anchors Targeting Unconfirmed Age Groups & Life Outcomes (`QA-RLZ-01`, `QA-RLZ-02`, `QA-LRN4-01`):** Title and H1 anchors targeting kids self-defense and life success. Owner: `Eitan` / `SEO`.
6. **Unrecoverable Archive Body (`QA-LRN13-02`):** Synthesized content in `content/learn/להתאמן-בקראטה-בבית.json`. Owner: `Eitan` / `Arie Nikar`.

### Final Verdict:
OVERALL: REVISE
