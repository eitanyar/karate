import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";

const root = path.resolve("content");
const files = fs.readdirSync(path.join(root, "learn")).filter((name) => /^[a-z0-9-]+\.json$/.test(name));
const articles = files.map((name) => JSON.parse(fs.readFileSync(path.join(root, "learn", name), "utf8")));
const core = ["why-us", "kihon", "kata", "komita", "self-defense-exercise", "karate-in-rishon-le-zion"];

test("approved legacy routes have application modules", () => {
  for (const route of core) assert.ok(fs.existsSync(path.join("app", route, "page.tsx")));
  assert.ok(fs.existsSync("app/learn/page.tsx"));
  assert.ok(fs.existsSync("app/learn/[slug]/page.tsx"));
  assert.equal(articles.length, 12);
  for (const article of articles) assert.match(article.route, /^\/learn\/[a-z0-9-]+\/$/);
});

test("reserved and synthetic records have no route module or static parameter", () => {
  const source = fs.readFileSync("app/_lib/content.ts", "utf8");
  assert.equal(source.includes("overcome-fear-and-attend-belt-test"), false);
  assert.equal(source.includes("is-your-kid-ready-to-become-karate-kid"), false);
  assert.equal(source.includes("readdirSync"), false);
  assert.equal(fs.existsSync("app/learn/page/2/page.tsx"), false);
});
