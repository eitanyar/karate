import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

const source = (file) => fs.readFileSync(file, "utf8");

test("homepage maps only to the owner-approved hero video", () => {
  const manifest = JSON.parse(source("content/media-manifest.json"));
  const ids = Object.values(manifest.videos).flat();
  assert.deepEqual(manifest.videos["/"], ["GPcCd06UeyY"]);
  assert.equal(ids.length, 16);
  assert.equal(new Set(ids).size, 15);
});

test("contact composes the shared shell, confirmed contact data, and existing form", () => {
  const contact = source("app/contact/page.tsx");
  assert.match(contact, /<SiteHeader currentPath="\/contact\/"/);
  assert.match(contact, /<SiteFooter/);
  assert.match(contact, /getSiteContent\(\)/);
  assert.match(contact, /const callHref = "tel:\+972504731212"/);
  assert.match(contact, /href=\{whatsapp\}/);
  assert.match(contact, /\{site\.phone\.display\}/);
  assert.match(contact, /\{site\.location\.address\}/);
  assert.match(contact, /<TrialForm/);
});

test("only the audited core routes receive an early existing-data CTA", () => {
  const renderer = source("app/_components/content-page.tsx");
  assert.match(renderer, /page\.route === "\/karate-in-rishon-le-zion"/);
  assert.match(renderer, /page\.route === "\/kata\/"/);
  assert.match(renderer, /hasEarlyCta && <TrialCta cta=\{page\.cta\}/);
  assert.match(renderer, /<TrialCta cta=\{page\.cta\} \/>/);
});

test("premium responsive hooks and supported dev indicator setting are explicit", () => {
  const css = source("app/globals.css");
  const config = source("next.config.mjs");
  assert.match(css, /\.hero-premium \{/);
  assert.match(css, /\.hero-premium \.hero-art \{/);
  assert.match(css, /\.contact-layout \{[^}]*grid-template-columns/s);
  assert.match(css, /\.contact-page \{[^}]*padding/s);
  assert.match(css, /\.contact-actions \.button \{[^}]*inline-size: 100%/s);
  assert.match(config, /devIndicators: false/);
});
