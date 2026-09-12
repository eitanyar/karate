import assert from "node:assert/strict";
import crypto from "node:crypto";
import fs from "node:fs";
import test from "node:test";

const source = (file) => fs.readFileSync(file, "utf8");
const literalInventory = (file) => [...source(file).matchAll(/(?:"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/g)].map((match) => match[0]).filter((literal) => /[^\x00-\x7F]/.test(literal)).join("\n");
const inventoryHash = (file) => crypto.createHash("sha256").update(literalInventory(file)).digest("hex");

test("all route galleries use the real shared player and no compact brochure presentation", () => {
  const manifest = JSON.parse(source("content/media-manifest.json"));
  const renderer = source("app/_components/content-page.tsx");
  assert.deepEqual(manifest.videos["/kata/"].length, 5);
  assert.deepEqual(manifest.videos["/karate-in-rishon-le-zion"].length, 1);
  assert.match(renderer, /<div className="video-gallery">/);
  assert.doesNotMatch(renderer, /compact|presentation=/);
});

test("all media is a real titled lazy iframe with no brochure asset or synthetic activation", () => {
  const component = source("app/_components/video-embed.tsx");
  const css = source("app/globals.css");
  assert.match(component, /<iframe/);
  assert.match(component, /loading="lazy"/);
  assert.match(component, /youtube-nocookie\.com\/embed/);
  assert.equal(component.includes("autoplay"), false);
  assert.match(component, /youtube\.com\/watch\?v=/);
  assert.doesNotMatch(component, /sksu-brochure|presentation|useState|onClick/);
  assert.match(css, /\.video-player \{[^}]*aspect-ratio: 16 \/ 9/s);
});

test("legal pages use the shared shell and retain their exact Hebrew literal inventories", () => {
  const css = source("app/globals.css");
  for (const [file, currentPath, expectedHash] of [
    ["app/privacy/page.tsx", "/privacy", "950842e2407af320b009dc9df4ec0856de681e54840750c76cca4cccf553f891"],
    ["app/accessibility/page.tsx", "/accessibility", "679f958c11a3db2fde2b2c79ef7077de792048a077b56f5d814bf6b43ad7d162"],
  ]) {
    const page = source(file);
    assert.match(page, /import \{ SiteHeader \} from "\.\.\/_components\/site-header"/);
    assert.match(page, /import \{ SiteFooter \} from "\.\.\/_components\/site-footer"/);
    assert.match(page, new RegExp(`<SiteHeader currentPath="${currentPath}"`));
    assert.match(page, /<main id="content" className="legal-page">/);
    assert.match(page, /<div className="legal-content">/);
    assert.match(page, /<SiteFooter/);
    assert.equal(inventoryHash(file), expectedHash);
  }
  assert.match(css, /\.legal-page \{[^}]*padding-inline: clamp\(20px, 10vw, 160px\)/s);
  assert.match(css, /\.legal-content \{[^}]*max-inline-size: 850px/s);
});
