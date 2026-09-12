import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";

const root = path.resolve("content");
const records = fs.readdirSync(path.join(root, "learn")).concat([
  "../pages/why-us.json", "../pages/training/kihon.json", "../pages/training/kata.json", "../pages/training/komita.json", "../pages/training/self-defense-exercise.json", "../pages/locations/rishon-le-zion.json",
]).map((name) => JSON.parse(fs.readFileSync(path.join(root, "learn", name), "utf8")));

test("all content records have the required public schema", () => {
  for (const record of records) {
    assert.equal(record.schemaVersion, 1);
    assert.match(record.route, /^\//);
    assert.ok(record.metadata?.title && record.metadata?.description && record.metadata?.canonical);
    assert.ok(record.h1 && record.intro && record.cta?.label && record.cta?.href);
    assert.ok(Array.isArray(record.breadcrumbs) && Array.isArray(record.sections) && Array.isArray(record.relatedLinks));
  }
});

test("content routes and canonicals are unique and valid", () => {
  const routes = records.map((record) => record.route);
  assert.equal(new Set(routes).size, routes.length);
  for (const record of records) assert.equal(record.metadata.canonical, record.route);
});
