import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

const source = (file) => fs.readFileSync(file, "utf8");

test("learning hub card colors are scoped and readable", () => {
  const css = source("app/globals.css");
  assert.match(css, /\.content-page \.article-grid h2, \.content-page \.article-grid h2 a \{ color: var\(--cream\); \}/);
  assert.match(css, /\.content-page \.article-grid article > a \{ color: var\(--gold\); \}/);
  assert.doesNotMatch(css, /\.content-page \.article-grid p \{ color:/);
});

test("video fallback is valid sibling markup with approved embed attributes", () => {
  const component = source("app/_components/video-embed.tsx");
  assert.match(component, /<iframe src=\{`https:\/\/www\.youtube-nocookie\.com\/embed\/\$\{videoId\}`\} title=\{title\} loading="lazy" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" \/>/);
  assert.match(component, /<\/div><a href=\{watchUrl\}>\{title\}<\/a><\/figure>/);
  assert.match(component, /https:\/\/www\.youtube\.com\/watch\?v=\$\{videoId\}/);
  const iframe = component.match(/<iframe[\s\S]*?\/>/)?.[0] ?? "";
  assert.doesNotMatch(iframe, /<a|><[^/]/);
});

test("homepage image order and two-axis sizing correction are retained", () => {
  const page = source("app/page.tsx");
  const css = source("app/globals.css");
  assert.match(page, /const coreImages = \["\/assets\/sksu-02\.jpg", "\/assets\/sksu-03\.jpg", "\/assets\/sksu-05\.jpg", "\/assets\/sksu-07\.jpg", "\/assets\/sksu-06\.jpg", "\/assets\/sksu-10\.jpg"\];/);
  assert.match(css, /\.homepage-grid img \{ inline-size: 100%; block-size: auto; aspect-ratio: 4 \/ 3; object-fit: cover; \}/);
});
