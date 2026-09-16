import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import sharp from "sharp";

const source = (file) => fs.readFileSync(file, "utf8");
const flyerAsset = "public/assets/sksu-school-flyer-20260916.webp";

test("homepage presents the quality-80 school flyer between the hero and grid", async () => {
  const page = source("app/page.tsx");
  const css = source("app/globals.css");

  assert.equal(fs.existsSync(flyerAsset), true);
  const metadata = await sharp(flyerAsset).metadata();
  assert.equal(metadata.format, "webp");
  assert.equal(metadata.width, 1021);
  assert.equal(metadata.height, 1597);

  assert.match(page, /<section className="school-flyer" aria-label="School flyer"><Image className="school-flyer-image" src="\/assets\/sksu-school-flyer-20260916\.webp" width=\{1021\} height=\{1597\} alt="" sizes="\(max-width: 800px\) 100vw, 620px" \/><\/section>/);
  const heroIndex = page.indexOf('<section className="hero hero-premium">');
  const flyerIndex = page.indexOf('<section className="school-flyer" aria-label="School flyer">');
  const gridIndex = page.indexOf('<section className="homepage-grid">');
  assert.ok(heroIndex >= 0 && heroIndex < flyerIndex && flyerIndex < gridIndex);
  assert.match(page, /<VideoEmbed videoId=\{heroVideo\} title=\{site\.organization\.fullName\} \/>/);

  assert.match(css, /\.school-flyer \{[^}]*background: var\(--paper\)[^}]*\}/s);
  assert.match(css, /\.school-flyer-image \{[^}]*inline-size: 100%[^}]*block-size: auto[^}]*object-fit: contain[^}]*\}/s);
  assert.doesNotMatch(css, /\.school-flyer-image \{[^}]*object-fit: cover/s);
  assert.match(css, /@media \(max-width: 800px\) \{[\s\S]*?\.school-flyer \{ padding: 28px 16px; \}/);
});
