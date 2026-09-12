import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

const source = (file) => fs.readFileSync(file, "utf8");

function jpegDimensions(file) {
  const data = fs.readFileSync(file);
  for (let index = 2; index < data.length - 9; index += 1) {
    if (data[index] !== 0xff || data[index + 1] < 0xc0 || data[index + 1] > 0xc3) continue;
    return { height: data.readUInt16BE(index + 5), width: data.readUInt16BE(index + 7) };
  }
  throw new Error("JPEG dimensions not found");
}

test("homepage uses the original kata kick image with its true dimensions", () => {
  const page = source("app/page.tsx");

  assert.deepEqual(jpegDimensions("public/assets/sksu-05.jpg"), { width: 1280, height: 960 });
  assert.match(page, /<Image className="hero-image" src="\/assets\/sksu-05\.jpg" width=\{1280\} height=\{960\} alt="" priority sizes="100vw" \/>/);
  assert.doesNotMatch(page, /<Image className="hero-image" src="\/assets\/sksu-04\.jpg"/);
});

test("homepage keeps the approved video embed inside the secondary left rail", () => {
  const page = source("app/page.tsx");
  const component = source("app/_components/video-embed.tsx");

  assert.match(page, /<div className="hero-rail"><div className="hero-copy">[\s\S]*?<\/div><div className="hero-art"><VideoEmbed videoId=\{heroVideo\} title=\{site\.organization\.fullName\} \/><\/div><\/div>/);
  assert.match(component, /https:\/\/www\.youtube-nocookie\.com\/embed\/\$\{videoId\}/);
  assert.match(component, /loading="lazy" allowFullScreen referrerPolicy="strict-origin-when-cross-origin"/);
});

test("homepage hero preserves desktop action clearance and mobile copy then video order", () => {
  const css = source("app/globals.css");

  assert.match(css, /\.hero \{[^}]*display: grid[^}]*grid-template-columns: minmax\(280px, 430px\) minmax\(0, 1fr\)[^}]*\}/s);
  assert.match(css, /\.hero-rail \{[^}]*grid-column: 1[^}]*background: rgb\(18 19 19 \/ 72%\)[^}]*\}/s);
  assert.match(css, /\.hero-art \{[^}]*max-inline-size: 320px[^}]*padding: 10px[^}]*\}/s);
  assert.match(css, /\.hero-image \{[^}]*object-position: 68% center[^}]*\}/s);
  assert.match(css, /@media \(max-width: 800px\) \{[\s\S]*?\.hero \{ grid-template-columns: 1fr;[\s\S]*?\.hero-rail \{ grid-column: 1;[\s\S]*?\.hero-art \{ order: 2;[^}]*\}/);
});
