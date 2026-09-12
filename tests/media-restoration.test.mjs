import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";

const expected = {
  "/": ["GPcCd06UeyY"],
  "/karate-in-rishon-le-zion": ["4IeVUxLJ3FA"],
  "/kata/": ["X79rmar8Z2Y", "xRF9cH4MTFE", "IcrTGaQzYXs", "m3VIpAFCe0g", "XBFLtIMEFhw"],
  "/kihon/": ["4VWvGOpNPLQ", "Dnga2diqAxg", "CgtQASkEMu0", "43lxEE5fId4"],
  "/komita/": ["-JjRNP9_Pys", "43lxEE5fId4", "ETHKkR94p_c", "Jb__TmK6IBg"],
  "/self-defense-exercise/": ["A82JNlU9JnU"],
};
const source = (file) => fs.readFileSync(file, "utf8");
const flatten = Object.values(expected).flat();

test("approved route mappings contain exactly 16 placements and 15 unique IDs", () => {
  const manifest = JSON.parse(source("content/media-manifest.json"));
  assert.deepEqual(manifest.videos, expected);
  assert.equal(flatten.length, 16);
  assert.equal(new Set(flatten).size, 15);
  assert.equal(manifest.provenance, "owner-approved-plan-2026-09-10");
});

test("media loader validates the manifest and fails closed for unknown routes", () => {
  const loader = source("app/_lib/media.ts");
  assert.match(loader, /videoIdPattern/);
  assert.match(loader, /assertManifest\(manifest\)/);
  assert.match(loader, /return manifest\.videos\[route\] \?\? \[\]/);
  assert.equal(loader.includes("youtube.com"), false);
});

test("reusable player renders a titled lazy privacy-enhanced player without brochure-card behavior", () => {
  const component = source("app/_components/video-embed.tsx");
  const css = source("app/globals.css");
  assert.doesNotMatch(component, /"use client"/);
  assert.doesNotMatch(component, /useState|onClick|button/);
  assert.match(component, /https:\/\/www\.youtube-nocookie\.com\/embed\/\$\{videoId\}/);
  assert.match(component, /title=\{title\}/);
  assert.equal(component.includes("autoplay"), false);
  assert.match(component, /https:\/\/www\.youtube\.com\/watch\?v=\$\{videoId\}/);
  assert.match(component, /loading="lazy"/);
  assert.doesNotMatch(component, /sksu-brochure/);
  assert.match(css, /\.video-player \{[^}]*aspect-ratio: 16 \/ 9/s);
  assert.match(css, /\.video-embed iframe \{[^}]*inline-size: 100%/s);

});

test("approved media has no unapproved provider or remote thumbnail reference", () => {
  const files = ["content/media-manifest.json", "app/_lib/media.ts", "app/_components/video-embed.tsx", "app/page.tsx", "app/_components/content-page.tsx"].map(source).join("\n");
  for (const forbidden of ["i.ytimg.com", "img.youtube.com", "wayback", "facebook", "youtu.be"]) assert.equal(files.toLowerCase().includes(forbidden), false);
  const component = source("app/_components/video-embed.tsx");
  for (const id of flatten) assert.equal(component.includes(id), false);
});

test("homepage replaces its logo-only hero with the approved primary video", () => {
  const homepage = source("app/page.tsx");
  assert.match(homepage, /getVideosForRoute\("\/"\)/);
  assert.match(homepage, /<VideoEmbed videoId=\{heroVideo\}/);
  const hero = homepage.match(/<div className="hero-art">([\s\S]*?)<\/div>/)?.[1] ?? "";
  assert.equal(hero.includes("sksu-logo.png"), false);
  assert.equal(hero.includes("VideoEmbed"), true);
});

test("all five mapped content routes render media through the shared content seam", () => {
  const renderer = source("app/_components/content-page.tsx");
  assert.match(renderer, /getVideosForRoute\(page\.route\)/);
  assert.match(renderer, /<VideoEmbed/);
  for (const route of Object.keys(expected).filter((route) => route !== "/")) {
    const segment = route.split("/").filter(Boolean).at(-1);
    assert.ok(fs.existsSync(path.join("app", segment, "page.tsx")));
  }
});
