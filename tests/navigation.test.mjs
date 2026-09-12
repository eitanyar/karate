import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";

const site = JSON.parse(fs.readFileSync("content/site.json", "utf8"));
const articleFiles = fs.readdirSync("content/learn").filter((name) => /^[a-z0-9-]+\.json$/.test(name));
const articles = articleFiles.map((name) => JSON.parse(fs.readFileSync(path.join("content/learn", name), "utf8")));

test("header and footer link to the approved graph", () => {
  const header = site.navigation.header.flatMap((item) => item.children ?? (item.href ? [item] : [])).map((item) => item.href);
  const footer = site.navigation.footer.map((item) => item.href);
  for (const href of ["/", "/why-us/", "/kihon/", "/kata/", "/komita/", "/self-defense-exercise/", "/learn/", "/karate-in-rishon-le-zion", "/contact/"]) assert.ok(header.includes(href));
  for (const href of ["/", "/why-us/", "/learn/", "/karate-in-rishon-le-zion", "/contact/", "/privacy", "/accessibility"]) assert.ok(footer.includes(href));
});

test("every published article is reachable from the learning loader allowlist", () => {
  const loader = fs.readFileSync("app/_lib/content.ts", "utf8");
  for (const article of articles) assert.ok(loader.includes(article.route.split("/").filter(Boolean).at(-1)));
  assert.equal(articles.length, 12);
});

test("mobile navigation retains keyboard paths and uses a viewport-wide scrollable drawer", () => {
  const component = fs.readFileSync("app/_components/mobile-navigation.tsx", "utf8");
  const css = fs.readFileSync("app/globals.css", "utf8");
  assert.match(component, /aria-expanded=\{open\}/);
  assert.match(component, /aria-controls="mobile-menu"/);
  assert.match(component, /event\.key === "Escape"/);
  assert.match(component, /trigger\.current\?\.focus\(\)/);
  assert.match(component, /onClick=\{\(\) => setOpen\(false\)\}/);
  assert.match(css, /\.mobile-navigation nav \{[^}]*position: fixed/s);
  assert.match(css, /\.mobile-navigation nav \{[^}]*left: 0/s);
  assert.match(css, /\.mobile-navigation nav \{[^}]*width: 100vw/s);
  assert.match(css, /\.mobile-navigation nav \{[^}]*overflow-y: auto/s);
  assert.match(css, /\.mobile-navigation nav a \{[^}]*display: flex/s);
  assert.match(css, /\.mobile-navigation nav a \{[^}]*inline-size: 100%/s);
  assert.match(css, /\.mobile-navigation nav a \{[^}]*min-block-size: 44px/s);
});
