# SKSU Legacy Source and SEO Map

Research date: 2026-09-10 (+07:00)

Status: Evidence base complete for route architecture and preserved SEO anchors. Media candidates remain unapproved until original masters and required rights/people checks are recorded. Backlink evidence is unavailable, so author/junk retirement remains a documented 410 decision pending rather than a guessed redirect.

## Evidence keys and confidence

- `WB:<timestamp>:<path>` — successful HTTP 200 raw-source retrieval from `https://web.archive.org/web/<timestamp>id_/https://karate.11il.co<path>` on 2026-09-10. High confidence for the captured URL, title, H1, links, and source references present in that capture; not evidence that old operational claims remain current.
- `CDX` — HTTP 200 query of `https://web.archive.org/cdx/search/cdx?url=karate.11il.co/*&output=json&fl=timestamp,original,statuscode,mimetype,digest&filter=statuscode:200&filter=mimetype:text/html&collapse=urlkey` on 2026-09-10. It returned 36 collapsed successful HTML URL keys. High confidence for archive existence, not current validity.
- `PLAN` — `.hermes/plans/2026-09-10_103835-sksu-custom-redesign-and-legacy-url-restoration.md`, especially recorded owner decisions at lines 340–349. High confidence for binding owner decisions.
- `CURRENT` — current repository source: `app/layout.tsx`, `app/page.tsx`, `app/contact/page.tsx`, `app/privacy/page.tsx`, and `app/accessibility/page.tsx`, read 2026-09-10. High confidence for current draft behavior only.
- `YT` — YouTube oEmbed, watch-page player data, and privacy-enhanced embed endpoint retrieved 2026-09-10. High confidence for availability at retrieval time.

## Canonical and trailing-slash policy

The canonical host is `https://karate.11il.co`. Preserve the historically evidenced pathname form exactly:

- `/` remains `/`.
- WordPress-derived pages, the learning hub, and articles use a terminal slash: for example `/why-us/`, `/kihon/`, and `/learn/what-is-karate/`.
- The two historical location landing pages have no terminal slash: `/karate-in-rishon-le-zion` and `/karate-in-holon`.
- Current-only legal routes retain their existing no-terminal-slash form: `/privacy` and `/accessibility`.
- A request for the alternate slash form must permanently redirect once to its canonical form, preserving neither duplicate indexability nor redirect chains.

This is an architecture decision, not an existing app capability. `next.config.mjs` uses `output: "export"`, and no hosting or redirect configuration exists in the repository. All status redirects, query-string matching, 410 responses, and slash normalization therefore require future hosting-layer support.

## 1. Historical URL manifest

| Canonical route or input | Behavior | Evidence/source | Confidence and constraint |
|---|---|---|---|
| `/` | publish | `WB:20191128144038:/`; `CURRENT` | High |
| `/why-us/` | publish | `WB:20191128144447:/why-us/` | High |
| `/contact/` | publish | `WB:20191128144500:/contact/`; current route is `/contact` | High; canonical migration must normalize current no-slash route |
| `/karate-in-rishon-le-zion` | publish | `WB:20191114084043:/karate-in-rishon-le-zion`; `PLAN` owner decision | High; current address is the binding owner-confirmed address, not archived address data |
| `/karate-in-holon` | permanent redirect to `/karate-in-rishon-le-zion` | `WB:20190821094123:/karate-in-holon`; `PLAN` | High; there is no active Holon dojo and destination copy must not imply one |
| `/kihon/` | publish | `WB:20191128144629:/kihon/` | High |
| `/kata/` | publish | `WB:20191128144533:/kata/` | High |
| `/komita/` | publish | `WB:20191128144510:/komita/` | High; preserve historical typo exactly |
| `/self-defense-exercise/` | publish | `WB:20191128144404:/self-defense-exercise/` | High |
| `/learn/` | publish | `WB:20200813093007:/learn/` | High; historical hub had no recoverable H1 |
| `/learn/להתאמן-בקראטה-בבית/` | publish | `WB:20200813082800:<percent-encoded Hebrew path>` | High; Unicode and percent-encoded requests identify the same canonical URL |
| `/learn/10-reasons-to-learn-karate/` | publish | `WB:20200923051028:/learn/10-reasons-to-learn-karate/` | High |
| `/learn/10-tips-to-get-a-black-belt/` | publish | `WB:20200923074906:/learn/10-tips-to-get-a-black-belt/` | High |
| `/learn/8-elements-in-karate-lessons/` | publish | `WB:20200813081551:/learn/8-elements-in-karate-lessons/` | High |
| `/learn/choosing-the-wrong-martial-art/` | publish | `WB:20200813091257:/learn/choosing-the-wrong-martial-art/` | High |
| `/learn/develop-discipline/` | publish | `WB:20200813075437:/learn/develop-discipline/` | High |
| `/learn/does-karate-suite-your-family/` | publish | `WB:20200813084520:/learn/does-karate-suite-your-family/` | High |
| `/learn/how-long-a-black-belt-takes/` | publish | `WB:20200813082643:/learn/how-long-a-black-belt-takes/` | High |
| `/learn/how-to-choose-karate-studio/` | publish | `WB:20200813081422:/learn/how-to-choose-karate-studio/` | High |
| `/learn/make-your-kid-practice-karate-at-home/` | publish | `WB:20200813081025:/learn/make-your-kid-practice-karate-at-home/` | High |
| `/learn/what-is-karate/` | publish | `WB:20200813073852:/learn/what-is-karate/` | High |
| `/learn/what-to-notice-in-karate-lessons/` | publish | `WB:20200813075243:/learn/what-to-notice-in-karate-lessons/` | High |
| `/learn/why-learn-the-basics/` | publish | `WB:20200813091959:/learn/why-learn-the-basics/` | High |
| `/learn/overcome-fear-and-attend-belt-test/` | reserve | linked from `WB:20200813081702:/learn/page/2/`; no direct CDX body capture | High for existence; title, H1, body, and media unrecovered |
| `/learn/is-your-kid-ready-to-become-karate-kid/` | reserve | linked from `WB:20200813081702:/learn/page/2/`; no direct CDX body capture | High for existence; title, H1, body, and media unrecovered |
| `/learn/page/2/` | permanent redirect to `/learn/` | `WB:20200813081702:/learn/page/2/`; `PLAN` | High once the restored hub contains all publishable articles |
| `/author/eitan/` | 410 decision pending | `WB:20211023180420:/author/eitan/`; `PLAN` | Backlink data unavailable; if meaningful inbound links exist, redirect to `/learn/`, otherwise return 410 |
| `/contact/embed/` | permanent redirect to `/contact/` | `WB:20211103094604:/contact/embed/` | High equivalence; hosting-layer rule required |
| `/kata/embed/` | permanent redirect to `/kata/` | `WB:20211103090251:/kata/embed/` | High equivalence; hosting-layer rule required |
| `/kihon/embed/` | permanent redirect to `/kihon/` | `WB:20211103085549:/kihon/embed/` | High equivalence; hosting-layer rule required |
| `/komita/embed/` | permanent redirect to `/komita/` | `WB:20211103091416:/komita/embed/` | High equivalence; hosting-layer rule required |
| `/self-defense-exercise/embed/` | permanent redirect to `/self-defense-exercise/` | `WB:20211103092910:/self-defense-exercise/embed/` | High equivalence; hosting-layer rule required |
| `/why-us/embed/` | permanent redirect to `/why-us/` | `WB:20211023180757:/why-us/embed/` | High equivalence; hosting-layer rule required |
| `/784-2/` | 410 decision pending | `WB:20200813081307:/784-2/` had blank H1/title stem | High that it is non-content; backlink data unavailable |
| `/טסט-שאלות-3/` | 410 decision pending | `WB:20200813082905:<percent-encoded Hebrew test path>` | High that it is a test page; backlink data unavailable |
| `/test-post/` | 410 decision pending | `WB:20211023175735:/test-post/` | High that it is a test page; backlink data unavailable |
| `/human-a-clutch-issue-resources/` | 410 decision pending | `WB:20230208010734:/human-a-clutch-issue-resources/` returned only an English verification interstitial | Medium; likely injected/spam URL, but backlink data unavailable |
| `/?s={search_term_string}` | 410 decision pending | `WB:20211023174746:/?s={search_term_string}` | High that it is a WordPress search-template artifact; hosting query rule required |
| malformed `data:text/javascript;base64...` capture | no HTTP route; do not publish | `PLAN`; absent as a valid HTTP path from collapsed CDX manifest | High; crawler/plugin artifact, not a redirectable pathname |
| `/privacy` | publish as current-only legal support route | `CURRENT:app/privacy/page.tsx` | High; not a recovered historical SEO route |
| `/accessibility` | publish as current-only legal support route | `CURRENT:app/accessibility/page.tsx` | High; not a recovered historical SEO route |

## 2. SEO anchors for publishable routes

Historic strings below are evidence quotations, not newly written copy. A trailing ` -` is preserved because it is what the archived `<title>` exposed; future copy must not silently treat that empty site-name suffix as a researched replacement.

| Route | Verified title | Verified H1 | Preserved primary intent | Source |
|---|---|---|---|---|
| `/` | `קראטה והגנה עצמית בשיטת S.K.S.U -` | `קראטה והגנה עצמית בשיטת S.K.S.U` | SKSU karate and self-defense overview/conversion gateway | `WB:20191128144038:/` |
| `/why-us/` | `מאמינים בך ועוזרים לך לממש את הפוטנציאל שבך, ברמה הגבוהה ביותר -` | `מאמינים בך ועוזרים לך לממש את הפוטנציאל שבך, ברמה הגבוהה ביותר` | SKSU differentiation, teaching approach, and trust | `WB:20191128144447:/why-us/` |
| `/contact/` | `צרו קשר -` | `צרו קשר` | Contact and trial enquiry | `WB:20191128144500:/contact/` |
| `/karate-in-rishon-le-zion` | `חוג קראטה בראשון לציון \| הגנה עצמית לילדים - בשיטה ייחודית` | `כשמדובר במשמעת, בטחון עצמי וכבוד- סט הכלים להצלחה בחיים` | Rishon LeZion karate/self-defense location landing page | `WB:20191114084043:/karate-in-rishon-le-zion` |
| `/kihon/` | `קיהון -` | `קיהון` | Kihon fundamentals and training reference | `WB:20191128144629:/kihon/` |
| `/kata/` | `קאטות -` | `קאטות` | Kata reference and demonstrations | `WB:20191128144533:/kata/` |
| `/komita/` | `קומיטה -` | `קומיטה` | Kumite reference and demonstrations | `WB:20191128144510:/komita/` |
| `/self-defense-exercise/` | `תרגילי הגנה עצמית -` | `תרגילי הגנה עצמית` | Self-defense exercise reference and demonstration | `WB:20191128144404:/self-defense-exercise/` |
| `/learn/` | `ארכיון learn -` | unrecovered: no H1 in successful capture | Learning-center/article hub | `WB:20200813093007:/learn/` |
| `/learn/להתאמן-בקראטה-בבית/` | `להתאמן בקראטה בבית -` | `להתאמן בקראטה בבית` | Home karate practice guidance | `WB:20200813082800` |
| `/learn/10-reasons-to-learn-karate/` | `10 סיבות להתחיל ללמוד קראטה -` | `10 סיבות להתחיל ללמוד קראטה` | Reasons/benefits considered before starting karate | `WB:20200923051028` |
| `/learn/10-tips-to-get-a-black-belt/` | `המסע שלך לחגורה שחורה בקראטה: 10 טיפים שיעזרו לך להשיג את המטרה שלך -` | `המסע שלך לחגורה שחורה בקראטה: 10 טיפים שיעזרו לך להשיג את המטרה שלך` | Black-belt progression guidance | `WB:20200923074906` |
| `/learn/8-elements-in-karate-lessons/` | `8 היסודות העיקריים עליהם נבנה שיעור קראטה טיפוסי -` | `8 היסודות העיקריים עליהם נבנה שיעור קראטה טיפוסי` | Components of a typical karate lesson | `WB:20200813081551` |
| `/learn/choosing-the-wrong-martial-art/` | `מחיר הבחירה באמנות הלחימה שאינה מתאימה לילד -` | `מחיר הבחירה באמנות הלחימה שאינה מתאימה לילד` | Parent guidance on martial-art fit for a child | `WB:20200813091257` |
| `/learn/develop-discipline/` | `קראטה - שיעור ראשון פיתוח משמעת ושליטה עצמית -` | `קראטה – שיעור ראשון פיתוח משמעת ושליטה עצמית` | First lesson, discipline, and self-control | `WB:20200813075437` |
| `/learn/does-karate-suite-your-family/` | `האם קראטה הוא הבחירה הנכונה עבור המשפחה שלך? -` | `האם קראטה הוא הבחירה הנכונה עבור המשפחה שלך?` | Family suitability evaluation | `WB:20200813084520` |
| `/learn/how-long-a-black-belt-takes/` | `למה לוקח כל כך הרבה זמן להגיע לחגורה שחורה בקראטה? -` | `למה לוקח כל כך הרבה זמן להגיע לחגורה שחורה בקראטה?` | Time and process required for a black belt | `WB:20200813082643` |
| `/learn/how-to-choose-karate-studio/` | `כך תבחר דוג'ו לקראטה בשלושה צעדים פשוטים -` | `כך תבחר דוג’ו לקראטה בשלושה צעדים פשוטים` | How to choose a karate dojo | `WB:20200813081422` |
| `/learn/make-your-kid-practice-karate-at-home/` | `איך לגרום לילד לתרגל קראטה בבית- 3 טיפים מנצחים -` | `איך לגרום לילד לתרגל קראטה בבית- 3 טיפים מנצחים` | Parent guidance for encouraging home practice | `WB:20200813081025` |
| `/learn/what-is-karate/` | `אז מה זה בעצם קראטה? -` | `אז מה זה בעצם קראטה?` | Introductory definition of karate | `WB:20200813073852` |
| `/learn/what-to-notice-in-karate-lessons/` | `למה לשים לב במדריך או מועדון קראטה? -` | `למה לשים לב במדריך או מועדון קראטה?` | Evaluation criteria for an instructor or karate club | `WB:20200813075243` |
| `/learn/why-learn-the-basics/` | `למה כל כך חשוב ללמוד את הבסיס בקראטה? -` | `למה כל כך חשוב ללמוד את הבסיס בקראטה?` | Importance of karate fundamentals | `WB:20200813091959` |
| `/privacy` | current title `מדיניות פרטיות \| SKSU`; no historic title | current H1 `מדיניות פרטיות`; no historic H1 | Privacy/legal disclosure | `CURRENT:app/privacy/page.tsx` |
| `/accessibility` | current title `הצהרת נגישות \| SKSU`; no historic title | current H1 `הצהרת נגישות`; no historic H1 | Accessibility statement | `CURRENT:app/accessibility/page.tsx` |

Reserved routes have no approved SEO anchors: `/learn/overcome-fear-and-attend-belt-test/` and `/learn/is-your-kid-ready-to-become-karate-kid/` are unrecovered beyond their linked slugs. Do not infer titles, H1s, or replacement intent from slug wording alone.

## 3. Redirect and retirement matrix

All entries in this section require hosting-layer implementation; none can be proven by the current static-export app.

### Definitive permanent redirects

| Input | Destination | Evidence/decision |
|---|---|---|
| `/karate-in-holon` and `/karate-in-holon/` | `/karate-in-rishon-le-zion` | Binding owner decision; no active Holon dojo |
| `/learn/page/2/` and `/learn/page/2` | `/learn/` | Historical pagination becomes unnecessary when hub lists all publishable articles |
| each `/contact/embed[/]` variant | `/contact/` | Embedded representation is duplicate utility output |
| each `/kata/embed[/]` variant | `/kata/` | Embedded representation is duplicate utility output |
| each `/kihon/embed[/]` variant | `/kihon/` | Embedded representation is duplicate utility output |
| each `/komita/embed[/]` variant | `/komita/` | Embedded representation is duplicate utility output |
| each `/self-defense-exercise/embed[/]` variant | `/self-defense-exercise/` | Embedded representation is duplicate utility output |
| each `/why-us/embed[/]` variant | `/why-us/` | Embedded representation is duplicate utility output |
| any noncanonical slash variant of a publishable route | exact canonical pathname in Sections 1–2 | One-hop canonical normalization |

### WordPress query aliases

Apply the same permanent redirect to both `?p=<id>` and `?page_id=<id>`. The `?p=` aliases marked `capture` were recovered as WordPress shortlinks from the corresponding raw page source. The `?page_id=` forms are a required migration decision from `PLAN`, not separately captured URLs.

| IDs | Destination | Evidence |
|---|---|---|
| `360` | `/why-us/` | capture |
| `373` | `/kata/` | capture |
| `383` | `/kihon/` | capture |
| `387` | `/komita/` | capture |
| `391` | `/self-defense-exercise/` | capture |
| `395` | `/contact/` | capture |
| `586` | `/karate-in-rishon-le-zion` | `PLAN`; Holon’s former alias must follow the binding Holon redirect directly, without a chain |
| `609` | `/learn/8-elements-in-karate-lessons/` | capture |
| `610` | `/learn/choosing-the-wrong-martial-art/` | capture |
| `615` | `/learn/make-your-kid-practice-karate-at-home/` | capture |
| `616` | `/learn/how-to-choose-karate-studio/` | capture |
| `659` | `/learn/how-long-a-black-belt-takes/` | capture |
| `672` | `/learn/why-learn-the-basics/` | capture |
| `674` | `/learn/what-to-notice-in-karate-lessons/` | capture |
| `675` | `/learn/10-reasons-to-learn-karate/` | capture |
| `676` | `/learn/develop-discipline/` | capture |
| `677` | `/learn/what-is-karate/` | capture |
| `678` | `/learn/10-tips-to-get-a-black-belt/` | capture |
| `920` | `/learn/להתאמן-בקראטה-בבית/` | capture |

### Backlink-dependent 410 decisions

Backlink/Search Console data was not available in the repository or permitted sources. Keep these routes out of navigation and indexing. Before launch, inspect Search Console/exported backlink evidence:

- `/author/eitan/`: redirect to `/learn/` only if meaningful inbound links exist; otherwise return 410.
- `/784-2/`, `/טסט-שאלות-3/`, `/test-post/`, `/human-a-clutch-issue-resources/`: redirect only if evidence identifies a single relevant replacement; otherwise return 410.
- Their captured WordPress aliases `?p=784`, `?p=840`, and `?p=833` inherit the same pending disposition.
- `/?s={search_term_string}`: return 410 (or hosting-equivalent non-indexable retirement response) unless a future site-search product is deliberately implemented; never redirect arbitrary searches to the homepage.

## 4. Internal-link graph and orphan proof

The required graph is an implementation contract. Every arrow is a rendered crawlable link, not JavaScript-only navigation.

- Universal header: `/` → `/why-us/`, `/kihon/`, `/kata/`, `/komita/`, `/self-defense-exercise/`, `/learn/`, `/karate-in-rishon-le-zion`, `/contact/`.
- Universal footer: every publishable route → `/`, `/why-us/`, `/learn/`, `/karate-in-rishon-le-zion`, `/contact/`, `/privacy`, `/accessibility`.
- Homepage: `/` → all four training routes; `/why-us/`; `/learn/`; at least three article routes; `/karate-in-rishon-le-zion`; `/contact/`.
- Training cluster: each of `/kihon/`, `/kata/`, `/komita/`, and `/self-defense-exercise/` → the other three training routes, `/karate-in-rishon-le-zion`, one relevant learning article, and `/contact/`.
- Trust page: `/why-us/` → all four training routes, `/karate-in-rishon-le-zion`, `/learn/`, and `/contact/`.
- Location page: `/karate-in-rishon-le-zion` → `/why-us/`, all four training routes, `/learn/`, and `/contact/`.
- Learning hub: `/learn/` → every one of the 13 publishable article routes listed in Section 2. Reserved routes remain absent until their bodies and anchors are recovered.
- Every learning article → `/learn/` via breadcrumb, one sibling article, one contextually relevant training route or `/karate-in-rishon-le-zion`, and `/contact/`.
- Contact/legal support: `/contact/`, `/privacy`, and `/accessibility` → `/`; footer supplies their inbound links from every page.

Orphan proof: every publishable route has at least one inbound path from `/` through the universal header/footer or the `/learn/` hub. Each authority article has a direct hub inbound link plus a sibling inbound link. The reserved routes, redirect-only routes, and pending-410 routes are intentionally excluded from the publishable graph.

## 5. Media inventory

### Approved YouTube item

| Source | Verification on 2026-09-10 | Proposed context | Approval |
|---|---|---|---|
| `https://www.youtube.com/watch?v=GPcCd06UeyY` | oEmbed HTTP 200; title `קנקושו מופע שנתי SKSU 2017`; author/channel `שלומי שטיין`; player status `OK`; `playableInEmbed: true`; duration `111` seconds (1:51); `isLiveContent: false`; `https://www.youtube-nocookie.com/embed/GPcCd06UeyY` HTTP 200; no `captionTracks` object was present, so captions are unavailable in the retrieved player data | Documentary proof on homepage and/or a contextually matched kata/heritage section, subject to stale-claim and people/minors review | Pre-approved by owner for reuse; availability/embed verified. Publication still requires a descriptive embed title, local poster/fallback, and people/minors review. Do not download the video. |

No other archived YouTube IDs are approved by this task and none are included as reusable media.

### Wayback-discovered original image candidates

These are source references found inside successful raw HTML captures. They are provenance candidates only: do not hotlink them, treat an archive copy as an approved master, or publish before original-master retrieval plus rights, relevance, quality, and people/minors review. Dimensions are only stated when explicit in a URL/source transform; `_640` is treated as an apparent 640-pixel variant marker, not a verified full resolution.

| Candidate original URL | Archive evidence / proposed page context | Apparent dimensions or quality | Approval status |
|---|---|---|---|
| `http://karate.11il.co/wp-content/uploads/2019/08/kancho-new-brochour.jpg` | `WB:20191128144038:/`; instructor/heritage provenance | ShortPixel source requested as 389×960; portrait brochure composite, unsuitable as premium hero | Not approved; original master and rights/people review required |
| `https://karate.11il.co/wp-content/uploads/igloo/335/images/user/shdqnt3dz47dwcthce3h.jpg` | `WB:20190821094123:/karate-in-holon`; legacy location provenance only | Unknown | Not approved; Holon context is stale |
| `https://karate.11il.co/wp-content/uploads/igloo/335/images/user/zjis1bleystwkq7pfxvc.jpg` | same | Unknown | Not approved; Holon context is stale |
| `https://karate.11il.co/wp-content/uploads/igloo/335/images/user/fxco5xnwyuabjikqb5xc.jpg` | same | Unknown | Not approved; Holon context is stale |
| `https://karate.11il.co/wp-content/uploads/igloo/335/images/user/nlx3xgi3nzklmotamosz.jpg` | same | Unknown | Not approved; Holon context is stale |
| `https://karate.11il.co/wp-content/uploads/igloo/335/images/user/k7iz7zb1nne4nabq9w6y.jpg` | same | Unknown | Not approved; Holon context is stale |
| `https://karate.11il.co/wp-content/uploads/igloo/335/images/user/nokxxuqhtzfbin3ktana.jpg` | same | Unknown | Not approved; Holon context is stale |
| `https://karate.11il.co/wp-content/uploads/igloo/335/images/user/hpuixtr7rdrmd1bd3xh4.jpg` | same | Unknown | Not approved; Holon context is stale |
| `https://karate.11il.co/wp-content/uploads/igloo/335/images/user/kqdeqiovqweqnndvnjpy.jpg` | same | Unknown | Not approved; Holon context is stale |
| `https://karate.11il.co/wp-content/uploads/igloo/335/images/score.png` | same; decorative/score provenance | Unknown | Not approved |
| `https://karate.11il.co/wp-content/uploads/igloo/508/images/user/shdqnt3dz47dwcthce3h.jpg` | `WB:20191114084043:/karate-in-rishon-le-zion`; Rishon location candidate | Unknown | Not approved; original master and current-context review required |
| `https://karate.11il.co/wp-content/uploads/igloo/508/images/user/zjis1bleystwkq7pfxvc.jpg` | same | Unknown | Not approved |
| `https://karate.11il.co/wp-content/uploads/igloo/508/images/user/fxco5xnwyuabjikqb5xc.jpg` | same | Unknown | Not approved |
| `https://karate.11il.co/wp-content/uploads/igloo/508/images/user/nlx3xgi3nzklmotamosz.jpg` | same | Unknown | Not approved |
| `https://karate.11il.co/wp-content/uploads/igloo/508/images/user/k7iz7zb1nne4nabq9w6y.jpg` | same | Unknown | Not approved |
| `https://karate.11il.co/wp-content/uploads/igloo/508/images/user/nokxxuqhtzfbin3ktana.jpg` | same | Unknown | Not approved |
| `https://karate.11il.co/wp-content/uploads/igloo/508/images/user/kqdeqiovqweqnndvnjpy.jpg` | same | Unknown | Not approved |
| `https://karate.11il.co/wp-content/uploads/igloo/508/images/score.png` | same; decorative/score provenance | Unknown | Not approved |
| `https://karate.11il.co/wp-content/uploads/2019/11/banner_karate.jpg` | all 13 recovered article captures; shared learning-article banner | Unknown | Not approved; likely generic/shared creative, original license required |
| `https://karate.11il.co/wp-content/uploads/2019/11/snow-3183568_640.jpg` | `WB:20200923051028`; `/learn/10-reasons-to-learn-karate/` | apparent 640 variant | Not approved; likely stock, license required |
| `https://karate.11il.co/wp-content/uploads/2019/11/boy-1262810_640.jpg` | `WB:20200923051028`; same article | apparent 640 variant | Not approved; minor/stock rights review required |
| `https://karate.11il.co/wp-content/uploads/2019/11/karate-583559_640.jpg` | `WB:20200923074906`; black-belt article | apparent 640 variant | Not approved; license required |
| `https://karate.11il.co/wp-content/uploads/2019/11/black-belt-894190_640.jpg` | `WB:20200923074906`, `WB:20200813075437`, `WB:20200813081422`; black-belt/discipline/dojo-selection articles | apparent 640 variant | Not approved; license required |
| `https://karate.11il.co/wp-content/uploads/2019/11/martial-arts-4255007_640.jpg` | `WB:20200813081551`; lesson-elements article | apparent 640 variant | Not approved; license required |
| `https://karate.11il.co/wp-content/uploads/2019/11/karate-2634848_640.jpg` | `WB:20200813091257`; martial-art choice article | apparent 640 variant | Not approved; license required |
| `https://karate.11il.co/wp-content/uploads/2019/11/fist-1561157_640.jpg` | same | apparent 640 variant | Not approved; license required |
| `https://karate.11il.co/wp-content/uploads/2019/11/aikido-4018645_640.jpg` | same | apparent 640 variant; depicts/labels another martial art | Not approved; license and relevance review required |
| `https://karate.11il.co/wp-content/uploads/2019/11/thao-le-hoang-Xl-ilWBKJNk-unsplash-1024x644.jpg` | `WB:20200813075437`; discipline article | 1024×644 variant | Not approved; Unsplash-origin license record required |
| `https://karate.11il.co/wp-content/uploads/2019/11/karate-436924_640.jpg` | `WB:20200813084520`; family-suitability article | apparent 640 variant | Not approved; license/people review required |
| `https://karate.11il.co/wp-content/uploads/2019/11/karate-312471_640.png` | same | apparent 640 variant | Not approved; license/people review required |
| `https://karate.11il.co/wp-content/uploads/2019/11/karate-1964183_640-e1574934685252.jpg` | `WB:20200813082643`; black-belt timing article | apparent 640 variant; edited derivative | Not approved; license required |
| `https://karate.11il.co/wp-content/uploads/2019/11/thao-le-hoang-uGlJHMEifB4-unsplash-1024x696.jpg` | `WB:20200813082643` and `WB:20200813073852`; black-belt timing/what-is-karate articles | 1024×696 variant | Not approved; Unsplash-origin license record required |
| `https://karate.11il.co/wp-content/uploads/2019/11/karate-1665747_640.jpg` | `WB:20200813081025`; child home-practice article | apparent 640 variant | Not approved; minor/stock rights review required |
| `https://karate.11il.co/wp-content/uploads/2019/11/martial-arts-116542_640.jpg` | `WB:20200813073852` and `WB:20200813075243`; what-is-karate/instructor-selection articles | apparent 640 variant | Not approved; license required |
| `https://karate.11il.co/wp-content/uploads/2019/11/nlx3xgi3nzklmotamosz.jpg` | `WB:20200813075243`; instructor/club-selection article | Unknown | Not approved; original master and rights/people review required |
| `https://karate.11il.co/wp-content/uploads/2019/11/karate-2022334_640.jpg` | `WB:20200813091959`; basics article | apparent 640 variant | Not approved; license required |
| `https://karate.11il.co/wp-content/uploads/2019/11/house-2492054_640.png` | same | apparent 640 variant; contextual relevance uncertain | Not approved; license/relevance review required |

The repeated site logo variants and YouTube thumbnails were excluded because they do not add candidate editorial media. No Facebook page, asset, API, embed, link target, or material was opened, inspected, copied, or approved. Facebook tracking references visible as inert strings inside two archived HTML captures were ignored and not accessed.

## 6. Unresolved owner facts blocking copy or publication

- Current class schedule and holiday/closure handling.
- Actual age ranges and which child, teen, adult, family, kumite, self-defense, or other programs are currently offered.
- Instructor credentials, ranks, affiliations, and claims beyond the confirmed instructor name Arie Nikar and SKSU Shotokan Karate-Do identity.
- Current pricing and whether the free trial has any eligibility, booking, or expiry conditions.
- Operational details for the confirmed address `התזמורת 17, ראשון לציון`: venue name, floor/unit, accessibility, parking/transit, arrival instructions, and map-pin accuracy.
- Final contact-form delivery endpoint, response process, retention period, and consent wording; the current draft only opens WhatsApp.
- Rights records, original-resolution masters, current relevance, and adult/minor release status for each image candidate and for people appearing in the approved video.
- Recoverable source bodies and SEO anchors for the two reserved learning routes.
- Search Console/backlink evidence needed to close the author and junk/test 410 decisions.

Already confirmed and therefore excluded from unresolved facts: no active Holon dojo; Rishon LeZion address; SKSU Shotokan Karate-Do; instructor Arie Nikar; phone `050-473-1212`; Rishon LeZion focus; free trial offer; the sole pre-approved YouTube ID.

## 7. Sources consulted, failures, and limitations

1. `CDX` domain inventory, retrieved 2026-09-10, HTTP 200, 36 collapsed successful HTML records. A `www.karate.11il.co/*` probe also returned the same non-`www` originals rather than separate `www` captures; no alternate first-party historical host was established. High confidence.
2. All 36 timestamp-specific raw HTML captures in the CDX result, retrieved 2026-09-10. The first batch succeeded for 20 and then 16 requests failed with `ConnectionRefusedError(111, 'Connection refused')`; all 16 succeeded on paced retry. The transient refusal is not evidence that the pages or material did not exist. High confidence after successful retry.
3. Current repository files under `app/`, plus `next.config.mjs` and `package.json`, read 2026-09-10. High confidence for current draft and static-export constraints.
4. Project plan and recorded owner decisions, read 2026-09-10. High confidence for binding business and scope decisions.
5. YouTube oEmbed for `GPcCd06UeyY`, watch-page player data, and `youtube-nocookie.com` embed endpoint, retrieved 2026-09-10, all HTTP 200. Captions were not exposed (`captionTracks` absent). Availability is time-sensitive and must be rechecked at release. High confidence at retrieval time.
6. No Facebook source was consulted. No backlink provider, Search Console export, owner backup, WordPress export, image binary, or media master was available. Therefore backlink-dependent retirements, the two reserved article bodies, actual image dimensions, and final media approvals remain unresolved rather than inferred.
