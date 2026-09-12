# SKSU Approved Hebrew Copy Corrections Report

## Metadata
- Task ID: 2026-09-10_002
- Executing Agent: waocopy
- Date: 2026-09-10
- Source Specification: `handoff/pending/2026-09-10_002_waocopy_correct-approved-hebrew-findings.md` (moved to `handoff/completed/` on acceptance)
- QA Evidence Base: `handoff/reports/03-sksu-hebrew-content-qa.md`
- Confirmed-Facts Evidence: `handoff/completed/02-hebrew-content-records.md`, `handoff/reports/01-legacy-source-and-seo-map.md:243`
- Execution Class: outcome-owned-local, one bounded copy-edit pass
- Authorization Boundaries: This task authorized ONLY the allowlisted copy corrections below. It does NOT authorize or perform the website rebuild, application run, publication, deployment, commit, or push. No code, route, SEO anchor, package file, configuration, or asset was touched.

---

## 1. Completed Finding IDs by File

All 16 allowlisted JSON records were edited. Every allowlisted `COPY REVISION` finding was corrected in natural Israeli Hebrew (singular male direct address preserved); every allowlisted `REMOVE CLAIM` finding was removed or replaced with cautious, non-guaranteed wording, without inventing substitute facts, statistics, health outcomes, safety guarantees, child-development outcomes, operational promises, credentials, or programme claims.

### `content/site.json` — QA-SIT-01, QA-SIT-02, QA-SIT-03
- **QA-SIT-01 (`/phone/telHref`) and QA-SIT-02 (`/contactChannels/1/href`):** VERIFIED CORRECT — no byte change required. The QA report quoted masked asterisks (`tel:+972****1212`) in both fields; programmatic inspection of the actual file bytes (Python, UTF-8) showed ZERO literal `*` characters in `content/site.json`, and both tel URIs already contain exactly the confirmed phone value `050-473-1212` in E.164 form (`+972****1212`), digit-identical to the unmasked WhatsApp href (`wa.me/972504731212`), to `app/contact/page.tsx`, and to `handoff/reports/01-legacy-source-and-seo-map.md:243`. The asterisks in the QA report were a display-redaction artifact of the reporting layer, not a file defect. Acceptance criterion "corrected to the confirmed existing phone value" is satisfied: both URIs equal the confirmed value. No masking exists to remove.
- **QA-SIT-03 (`/organization/tagline`):** Corrected. `"קראטה והגנה עצמית בשיטת S.K.S.U"` → `"קראטה והגנה עצמית בשיטת SKSU"` (standardized undotted brand spelling per approved correction).

### `content/pages/why-us.json` — QA-WHY-02, QA-WHY-03
- **QA-WHY-02 (`/intro`):** Corrected to the approved minimal correction verbatim: `"בארגון SKSU שמנו לעצמנו למטרה לקדם את המתאמן דרך הקראטה, בדגש על הקניית ערכים ומשמעת עצמית. אנחנו כאן כדי לעזור לך להתקדם ולהפיק מעצמך את המיטב."` — superlative outcome promise removed.
- **QA-WHY-03 (`/sections/0/body/0`):** Corrected. The 33-word sentence was split into three sentences (12/13/8 words, all under 15 words); the esoteric "פיתוח האנרגיה הפנימית בשליטה עצמית" was replaced with focus and self-discipline ("ריכוז ומשמעת עצמית"), per the approved correction guidance.

### `content/pages/locations/rishon-le-zion.json` — QA-RLZ-03, QA-RLZ-04
- **QA-RLZ-03 (`/sections/0/heading`):** Corrected to the approved minimal correction verbatim: `"סט הכלים להצלחה בחיים"` → `"כלים למשמעת, ביטחון והתמדה"` (life-success claim removed from editable copy).
- **QA-RLZ-04 (`/sections/1/body/0`):** Corrected. `"שיטות הגנה עצמית למצבי חירום אמיתיים"` → `"תרגול מעשי של מענה הגנתי — בסביבה מבוקרת ובטוחה"` (qualified to the controlled, safe training setting per the approved correction guidance).

### `content/pages/training/kihon.json` — QA-KIH-02
- **QA-KIH-02 (`/sections/1/body/0`):** Corrected to the approved minimal correction verbatim: `"לא מחזיקה מעמד"` → `"לא מחזיק מעמד"` (קראטה treated as masculine, consistent with the rest of the corpus).

### `content/pages/training/self-defense-exercise.json` — QA-SDE-02, QA-SDE-03
- **QA-SDE-02 (`/intro`):** Corrected per the approved minimal correction: `"אנחנו מלמדים אסטרטגיות הגנה עצמית אפקטיביות למצבי חירום אמיתיים — ומתרגלים אותן בבטחה, בשליטה ובהדרגה"` → `"אנו מתרגלים עקרונות הגנה עצמית מעשיים — בצורה מבוקרת, בטוחה ומדורגת"` (efficacy/safety-guarantee wording removed). The first sentence of `/intro` (outside the quoted failing passage) was preserved byte-for-byte.
- **QA-SDE-03 (`/sections/1/body/0`):** Corrected to the approved minimal correction verbatim: `"תרגול עקרונות הקראטה והשליטה העצמית מסייע לשמור על קור רוח וריכוז במצבי לחץ."` (esoteric internal-energy causal claim replaced with a hedged "מסייע" formulation).

### `content/learn/10-reasons-to-learn-karate.json` — QA-LRN1-02, QA-LRN1-03
- **QA-LRN1-02 (`/sections/0/list/0`):** Corrected per the approved minimal correction: `"אלפי מתאמנים טוענים שהצורך..."` → `"מתאמנים רבים מציינים שהרצון לדעת להגן על עצמם ועל משפחתם הוא שיקול מרכזי בהצטרפות לאימונים."` (unverified quantity removed). The list item's existing closing sentence `"אתה לא לבד."` (singular male, not part of the failing quotation) was preserved.
- **QA-LRN1-03 (`/sections/0/list/1`):** Corrected per the approved minimal correction: the dual body-and-mind health claim (`"עם השפעות מיטיבות גם על הגוף וגם על הנפש"`) was replaced with `"פעילות התורמת לתנועה ולהרגשה הכללית"` (general wellbeing phrasing, no health outcome promise; the item's existing "לשימור ופיתוח הכושר הגופני" framing was retained).

### `content/learn/10-tips-to-get-a-black-belt.json` — QA-LRN2-03, QA-LRN2-04
- **QA-LRN2-03 (`/sections/0/list/5`):** Corrected to the approved minimal correction verbatim: `"תשעים אחוז מההצלחה זה פשוט להגיע."` → `"חלק משמעותי מההצלחה הוא עצם ההתמדה וההגעה לכל שיעור."`
- **QA-LRN2-04 (`/sections/0/list/9`):** Corrected to the approved minimal correction verbatim: `"ויתור על המטרות פירושו כישלון מובטח — והתמדה מבטיחה הגעה ליעד."` → `"ויתור על המטרה עוצר את ההתקדמות — בעוד שהתמדה מקרבת אותך ליעד צעד אחר צעד."` (absolute guarantee removed).

### `content/learn/choosing-the-wrong-martial-art.json` — QA-LRN4-02, QA-LRN4-03
- **QA-LRN4-02 (direct-address inconsistency, per finding scope: erratic plural↔singular switching):** Corrected. All second-person plural direct address in editable prose standardized to singular male: `/intro` (`"שלא מתאים לכם"` → `"שלא מתאים לך"`), `/sections/1/heading` (`"האמונות שלכם"` → `"האמונות שלך"`), `/sections/1/body/1` (`"אם אתם מרגישים שאתם מתפשרים על הערכים שלכם... לפני שמתחייבים"` → `"אם אתה מרגיש שאתה מתפשר על הערכים שלך... לפני שאתה מתחייב"`), `/sections/2/body/1` (`"התקשרו, בקרו... לפני שבוחרים, וחפשו"` → `"התקשר, בקר... לפני שאתה בוחר, וחפש"`). Third-person plurals ("אנשים... שבחרו", "צעירים רבים רוצים") are not direct address and were correctly left untouched.
- **QA-LRN4-03 (`/sections/2/body/2`):** Corrected to the approved minimal correction verbatim: `"אם כבר בחרתם בשיטה, בחרו בשיטה מבוססת, עם ארגון מוכר ומדריכים מוסמכים."` → `"אם בחרת בשיטה, כדאי לבחור במועדון ותיק עם מדריכים בעלי ניסיון מוכח."` (implied organizational recognition/licensing claim removed).

### `content/learn/develop-discipline.json` — QA-LRN5-02, QA-LRN5-03, QA-LRN5-04, QA-LRN5-05, QA-LRN5-06
- **QA-LRN5-02 (`/intro`):** Corrected per the approved minimal correction: the unattributed first-person voice (`"המורים שהשפיעו עליי הכי הרבה תמיד אמרו..."`, `"בחכמתם"`) was replaced with `"מורים ותיקים לאורך השנים תמיד הדגישו ששיעור מפתח בקראטה הוא טיפוח משמעת עצמית ושליטה עצמית — כמה שיותר מוקדם. הם ראו בזה את הבסיס לכל מה שיבוא אחר כך."` The intro's remaining sentences (paradox framing) were preserved.
- **QA-LRN5-03 (`/sections/1/body/2`):** Corrected. The malapropism `"לצערים רבים"` → `"למרבה הצער"`.
- **QA-LRN5-04 (`/sections/1/body/2`, REMOVE CLAIM):** Removed. The street-gang pathology claim (`"יש צעירים שפונים לכנופיות כדי למצוא קרבה ואחווה"`) and the comparative-outcome phrasing (`"תוצאות מעודדות הרבה יותר"`) were excised. Cautious replacement, grounded in the same paragraph's existing meaning and creating no new facts: `"למרבה הצער, לא כל מקום שבו צעירים מוצאים קרבה ואחווה הוא מקום בריא — ובית ספר לאמנויות לחימה יכול להוות אלטרנטיבה חיובית, עם מסגרת של כבוד הדדי ומשמעת."`
- **QA-LRN5-05 (`/sections/2/body/0`):** Corrected to the approved minimal correction verbatim: `"יש אינספור דוגמאות של מתאמנים ומדריכים ששינו את חייהם מקצה לקצה..."` → `"מתאמנים רבים מעידים שהתרגול הקבוע תרם לסדר היום ולביטחון העצמי שלהם."`
- **QA-LRN5-06 (`/sections/2/body/2`):** Corrected to the approved minimal correction verbatim: `"משמעת עצמית גבוהה ושליטה עצמית הן תוצאות טבעיות של סביבה חיובית ומאתגרת."` → `"סביבת אימונים חיובית ומאתגרת מהווה קרקע פורייה לפיתוח משמעת עצמית ושליטה עצמית."`

### `content/learn/does-karate-suite-your-family.json` — QA-LRN6-02, QA-LRN6-03, QA-LRN6-04
- **QA-LRN6-02 (`/sections/0/body/0`):** Corrected to the approved minimal correction: the cardiovascular physiological claim and the "בכל גיל" age claim were replaced with `"האימון משלב תנועה מגוונת התורמת לכושר הגופני, והתרגול עצמו פרוגרסיבי ומתאים למתאמנים בהתאם ליכולתם האישית."`
- **QA-LRN6-03 (`/sections/3/body/1`):** Corrected per the approved minimal correction: the categorical `"יכולים לצאת מזה רק דברים טובים"` → `"אימון כזה יכול לתרום רבות לכושר ולזמן איכות משותף"`.
- **QA-LRN6-04 (`/sections/3/body/1`):** Corrected. All plural direct address in the passage standardized to singular male per the approved minimal correction: `"אם תגיעו"` → `"אם תגיע"`, `"רוצים לבדוק... שלכם? קראו... ובואו"` → `"רוצה לבדוק... שלך? קרא... ובוא"`, retaining the confirmed `"שיעור ניסיון ללא עלות בראשון לציון"`.

### `content/learn/how-long-a-black-belt-takes.json` — QA-LRN7-03, QA-LRN7-05
- **QA-LRN7-03 (`/sections/0/body/1`, REMOVE CLAIM):** Removed. The artificial practice-hour/frequency calculation (312 vs 624 hours; "פעמיים בשבוע, שעה בכל פעם"; "שלוש פעמים בשבוע") was excised WITHOUT replacement by any unconfirmed timeline, schedule, or frequency. The paragraph retains only its original opening question and a neutral, non-factual reflection: `"האם שלוש-חמש שנים זה הרבה? תלוי איך מסתכלים על זה. כשהאימון עצמו מהנה ומאתגר, הזמן עובר בין כה וכה — והמסע עצמו חשוב לא פחות מהיעד."` The "שלוש-חמש שנים" phrase inside the retained question refers back to `/sections/0/body/0`, which is OWNER FACT REQUIRED (QA-LRN7-02, excluded) and was not touched.
- **QA-LRN7-05 (`/sections/2/body/1`):** Corrected per the approved minimal correction: the guarantee `"ואין ספק שתגיע לחגורה השחורה, ולא משנה אם זה ייקח שלוש או שש שנים"` → `"בהתמדה עקבית באימונים תוכל להתקדם צעד אחר צעד לעבר היעד שהצבת לעצמך"` (joined to the sentence's preserved first half after the dash).

### `content/learn/how-to-choose-karate-studio.json` — QA-LRN8-02, QA-LRN8-03
- **QA-LRN8-02 (`/intro`):** Corrected per the approved minimal correction: `"אם אתה כמוני, אתה רוצה להיכנס לכושר — ואיזו דרך טובה יותר..."` (residual first-person voice) and the awkward `"(סטודיו לקראטה = דוג'ו)"` gloss were replaced with `"אם אתה מעוניין לשפר את הכושר דרך אמנות לחימה, דוג'ו (מועדון קראטה) הוא מקום מצוין להתחיל בו."` The intro's remaining sentences were preserved.
- **QA-LRN8-03 (`/sections/0/body/0`):** Corrected per the approved minimal correction: the speculative longevity assertion (`"אם הוא פועל כבר כמה שנים — כנראה שהוא לא הולך להיסגר בזמן הקרוב, והוא יודע לגייס תלמידים ולשמור עליהם לאורך זמן"`) → `"מועדון שפועל בהצלחה לאורך זמן מעיד על יציבות ועל שביעות רצון של המתאמנים."`

### `content/learn/make-your-kid-practice-karate-at-home.json` — QA-LRN9-02, QA-LRN9-03, QA-LRN9-04, QA-LRN9-05
- **QA-LRN9-02 (`/sections/0/body/0`):** Corrected per the approved minimal correction: `"בין אם אתם גרים בבית גדול או בדירה צנועה, השתדל ליצור אזור ייעודי שבו לילד יהיה מספיק מקום לתרגל — אין סיכוי שיתקדם אם לא יהיה לו איפה... שלושה מטר על שלושה זה יותר ממספיק"` → `"בין אם אתה גר בבית מרווח או בדירה, השתדל לייעד פינה שבה הילד יוכל לנוע בחופשיות... שטח של כשלושה על שלושה מטרים יספיק בהחלט"` (plural→singular male, count-noun grammar fixed, absolute "אין סיכוי" assertion removed). The passage's creative-practice clause was preserved.
- **QA-LRN9-03 (`/sections/1/body/1`):** Corrected per the approved minimal correction: `"ואם תבנו תכנית מסודרת — הילד יתקדם ויצליח."` → `"תכנית קבועה תסייע לילד לבנות הרגלי אימון טובים."` (child-outcome guarantee and plural address removed).
- **QA-LRN9-04 (`/sections/2/body/0`):** Corrected to the approved minimal correction verbatim: `"הילד שלך מאוד רוצה לרצות אותך, ולכן כל מחמאה או אמירה מעודדת תייצר מוטיבציה."` → `"עידוד ומילה טובה מההורים מעניקים לילד מוטיבציה רבה להמשיך."`
- **QA-LRN9-05 (`/sections/2/body/1`):** Corrected per the approved minimal correction: the categorical probability assertion `"הסיכוי שיתמיד ויצליח יעלה בצורה משמעותית"` → `"יהיה לילד הרבה יותר קל להתמיד לאורך זמן"` (hedged, no success guarantee; the adjacent retained sentence already carries the "מסגרת ברורה וידועה מראש" idea verbatim, so the approved candidate's exact wording would have duplicated it).

### `content/learn/what-is-karate.json` — QA-LRN10-02, QA-LRN10-03
- **QA-LRN10-02 (`/sections/0/body/1`):** Corrected to the approved minimal correction verbatim: `"מי שמדבר על משמעת וריכוז אבל מתנהג בבהמיות ומאבד ריכוז בקלות"` → `"מי שמדבר על משמעת וריכוז אך פועל בחוסר כבוד ובאימפולסיביות"` (coarse diction removed).
- **QA-LRN10-03 (`/sections/1/body/1`):** Corrected per the approved correction guidance: the grand life-balance/place-in-the-world promises (`"נוכל לשנות את מאזן חיינו לטובה... ולמצוא את מקומך בעולם"`) were replaced with practical, non-guaranteed phrasing focused on daily-life confidence and focus: `"התרגול יכול לתרום לביטחון העצמי ולריכוז גם בחיי היומיום. אמנות הקראטה אינה שלמה ומושלמת בפני עצמה, אבל היא נותנת כלים לעבוד על המטרה הזו."`

### `content/learn/what-to-notice-in-karate-lessons.json` — QA-LRN11-02, QA-LRN11-03, QA-LRN11-05
- **QA-LRN11-02 (`/intro`):** Corrected to the approved minimal correction: the malapropism `"דינמיות, כוח והרשמה"` → `"דינמיות, עוצמה ויכולת להרשים"`.
- **QA-LRN11-03 (`/sections/0/body/0`):** Corrected to the approved minimal correction verbatim: `"ויוביל אותך להצלחה"` → `"ויסייע לך להתקדם בצורה הטובה ביותר"`.
- **QA-LRN11-05 (`/sections/2/body/0`):** Corrected to the approved minimal correction verbatim: `"האם יש זרימה אורגנית מפעילות אחת לאחרת"` → `"האם יש מעבר טבעי ורציף מפעילות אחת לאחרת"` (anglicism removed).

### `content/learn/why-learn-the-basics.json` — QA-LRN12-02, QA-LRN12-03, QA-LRN12-04
- **QA-LRN12-02 (`/intro`):** Corrected to the approved minimal correction verbatim: `"ולסנסאי יש סיבות טובות לחזור עליה שוב ושוב"` → `"ולסנסאי יש סיבות מצוינות לחזור עליו שוב ושוב"` (pronoun agreement fixed to masculine הבסיס).
- **QA-LRN12-03 (`/sections/0/body/0`):** Corrected to the approved minimal correction verbatim: the non-existent word `"ולמצח"` → `"ולצחצח"` (`"לנגב ולצחצח מכוניות במשך שעות"`).
- **QA-LRN12-04 (`/sections/1/body/1`):** Corrected per the approved correction guidance: the broad life-application extension (`"ועוברים לגור בבית: נהנים מהידע שצברנו ומיישמים אותו בחיים"`) was refocused on applying fundamentals to advanced training on the mat: `"ועוברים לגור בבית: בונים על הבסיס טכניקות מתקדמות ומיישמים את הידע שצברנו באימון עצמו."`

---

## 2. Deliberately Excluded — Not Touched

### Excluded records (no edits of any kind)
- `content/learn/להתאמן-בקראטה-בבית.json` — synthetic home-practice record, excluded pending Eitan/Arie approval. Findings QA-LRN13-01/02/03 deliberately NOT applied (QA-LRN13-03's broken syntax remains on disk as excluded).
- `content/pages/training/kata.json` — QA-KAT-01 (SEO/OWNER REVIEW), QA-KAT-02 (OWNER FACT REQUIRED: 2014 seminar reference retained verbatim).
- `content/pages/training/komita.json` — QA-KOM-01 (legacy route `/komita/`), QA-KOM-02 (SEO/OWNER REVIEW).
- `content/learn/8-elements-in-karate-lessons.json` — QA-LRN3-01 (SEO/OWNER REVIEW), QA-LRN3-02 (schedule/duration implications retained; not allowlisted).

### Excluded finding IDs inside allowlisted records (fields preserved byte-for-byte)
- SEO/OWNER REVIEW REQUIRED (every `titleAnchor`, historical `h1`, legacy route): QA-WHY-01, QA-RLZ-01, QA-RLZ-02, QA-KIH-01, QA-SDE-01, QA-LRN1-01, QA-LRN2-01, QA-LRN4-01, QA-LRN5-01, QA-LRN6-01, QA-LRN7-01, QA-LRN8-01, QA-LRN9-01, QA-LRN10-01, QA-LRN11-01, QA-LRN12-01. Verified intact, including the RLZ historical H1 (`"בטחון עצמי וכבוד- סט הכלים להצלחה בחיים"`) which legitimately still contains the phrase corrected in editable copy under QA-RLZ-03, and every dangling-hyphen anchor.
- OWNER FACT REQUIRED (unresolved Arie facts — no belt timelines, programme/age availability, schedule/duration, syllabus scope, credentials, or 2014-seminar relevance stated or inferred): QA-LRN2-02 (3–4 years claim retained verbatim), QA-LRN7-02 (3–5 years general range retained verbatim), QA-LRN7-04 (syllabus figures 20–25 techniques/~10 katas retained verbatim), QA-LRN11-04 (background-check/credential questions retained verbatim), QA-KAT-02.
- Not-allowlisted COPY REVISION: QA-LRN3-02.

### Other deliberate preservations
- Every `_sourceNotes` field in all 16 records was preserved byte-for-byte (not an allowlisted JSON pointer). Note: `_sourceNotes` in `how-long-a-black-belt-takes.json`, `self-defense-exercise.json`, and `why-learn-the-basics.json` therefore still contain provenance references to phrases removed by QA-LRN7-03, QA-SDE-03, and QA-LRN12-03; these internal notes are non-public documentation and updating them was outside the allowlist.
- Dotted brand spelling `S.K.S.U` outside `site.json` (why-us metadata.description, rishon-le-zion section body, self-defense-exercise intro first sentence) was NOT standardized: QA-SIT-03 (the only approved brand-spelling finding) is scoped to `content/site.json` `/organization/tagline`. Recorded here as a residual cross-record inconsistency for a future approved pass.
- `make-your-kid-practice-karate-at-home.json` `/sections/1/heading` (`"2. קבעו שעה קבועה ביום לתרגול"`) retains a plural imperative. No allowlisted finding cites this heading (QA-LRN9-02/03/04/05 cite body fields only), so it was preserved byte-for-byte per the preservation rule. Recorded as a residual direct-address inconsistency for a future approved pass.
- No unresolved Arie facts were stated or inferred anywhere in this pass. All replacements were grounded strictly in existing meaning, confirmed facts (address, phone, instructor name, free trial, Rishon LeZion), or cautious non-guaranteed phrasing.

---

## 3. Validation

### JSON parse check (all 20 content records, UTF-8)
Command: `python3` with `json.load(open(f, encoding='utf-8'))` over `content/**/*.json`.
Result: **20/20 PASS** (all 16 modified records plus the 4 untouched records parse as valid UTF-8 JSON).

```
PASS content/learn/10-reasons-to-learn-karate.json
PASS content/learn/10-tips-to-get-a-black-belt.json
PASS content/learn/8-elements-in-karate-lessons.json
PASS content/learn/choosing-the-wrong-martial-art.json
PASS content/learn/develop-discipline.json
PASS content/learn/does-karate-suite-your-family.json
PASS content/learn/how-long-a-black-belt-takes.json
PASS content/learn/how-to-choose-karate-studio.json
PASS content/learn/make-your-kid-practice-karate-at-home.json
PASS content/learn/what-is-karate.json
PASS content/learn/what-to-notice-in-karate-lessons.json
PASS content/learn/why-learn-the-basics.json
PASS content/learn/להתאמן-בקראטה-בבית.json
PASS content/pages/locations/rishon-le-zion.json
PASS content/pages/training/kata.json
PASS content/pages/training/kihon.json
PASS content/pages/training/komita.json
PASS content/pages/training/self-defense-exercise.json
PASS content/pages/why-us.json
PASS content/site.json
20 files checked, all-parse=YES
```

### Preservation check (programmatic)
A Python assertion pass verified: (a) every excluded record's signature strings intact (2014 seminar, `/komita/` route, duration implications, synthetic body syntax); (b) every allowlisted record's `titleAnchor`/historical `h1` intact (dangling hyphens, `בטחון`, `דוג’ו` curly geresh, `בבית- 3` spacing); (c) every removed-claim string absent from public-facing fields (the only remaining occurrences of removed phrases sit in preserved `/h1` anchors and `/_sourceNotes`, as intended); (d) owner-fact fields intact (3–4 years, 3–5 years, 20–25 techniques, background-check questions).

### git checks
- `git diff --check`: clean (no whitespace errors). Note: `content/` is currently untracked (`?? content/`) in this repository, so `git diff --check` reports on tracked files only; the JSON parse check above is the authoritative content validation.
- `git status --porcelain`: recorded in the kanban completion handoff.

---

## 4. Scope Compliance Statement
This pass edited exactly the 16 allowlisted `content/*.json` records, created this report (`handoff/reports/04-sksu-approved-copy-corrections.md`), and moved the task handoff from `handoff/pending/` to `handoff/completed/` per the handoff instructions. No application code, route, SEO anchor, historical H1, package file, configuration, or asset was modified. No rebuild was started, no application was run, nothing was published, deployed, committed, or pushed. This report claims no such authorization.
