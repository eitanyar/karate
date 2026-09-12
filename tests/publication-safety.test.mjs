import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

const sourceFiles = ["app/_lib/content.ts", "app/_components/content-page.tsx", "app/_components/breadcrumbs.tsx", "app/sitemap.ts", "app/page.tsx"];

test("provenance fields are removed before rendering", () => {
  const loader = fs.readFileSync("app/_lib/content.ts", "utf8");
  const renderer = fs.readFileSync("app/_components/content-page.tsx", "utf8");
  assert.match(loader, /titleAnchor: _titleAnchor/);
  assert.match(loader, /_sourceNotes: _sourceNotes/);
  assert.equal(renderer.includes("titleAnchor"), false);
  assert.equal(renderer.includes("_sourceNotes"), false);
});

test("publication sources do not enumerate excluded records", () => {
  const joined = sourceFiles.map((file) => fs.readFileSync(file, "utf8")).join("\n");
  assert.equal(joined.includes("readdirSync"), false);
  assert.equal(joined.includes("titleAnchor"), true);
  assert.equal(joined.includes("_sourceNotes"), true);
  assert.equal(joined.includes("overcome-fear-and-attend-belt-test"), false);
  assert.equal(joined.includes("is-your-kid-ready-to-become-karate-kid"), false);
});
