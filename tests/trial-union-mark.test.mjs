import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

const source = (file) => fs.readFileSync(file, "utf8");

test("trial keeps the original local union mark separate from a wide form", () => {
  const page = source("app/page.tsx");
  const css = source("app/globals.css");

  assert.equal(fs.existsSync("public/assets/sksu-union-mark-original.jpg"), true);
  const trialSection = page.match(/<section className="trial" id="trial">([\s\S]*?)<\/section>/)?.[1];
  assert.ok(trialSection);
  assert.doesNotMatch(trialSection, /\/assets\/sksu-11\.jpg/);
  assert.match(trialSection, /<div className="trial-content"><div className="trial-copy">[\s\S]*?<\/div><TrialForm \/><\/div><aside className="trial-union-mark"><Image src="\/assets\/sksu-union-mark-original\.jpg" width=\{640\} height=\{640\} alt="" sizes="\(max-width: 800px\) min\(72vw, 360px\), 260px" \/><\/aside>/);
  assert.match(css, /\.trial \{ display: grid; grid-template-columns: minmax\(0, 1fr\) minmax\(180px, 260px\);/);
  assert.match(css, /\.trial-content \{ display: grid; min-inline-size: 0; grid-template-columns: minmax\(0, \.72fr\) minmax\(420px, 1\.28fr\);/);
  assert.match(css, /\.trial-union-mark \{[^}]*aspect-ratio: 1[^}]*overflow: hidden/s);
  assert.match(css, /\.trial-union-mark img \{ inline-size: 100%; block-size: 100%; object-fit: contain; \}/);
  assert.doesNotMatch(css, /\.trial-union-mark img \{[^}]*object-fit: cover/s);
  assert.match(css, /@media \(max-width: 800px\) \{[\s\S]*?\.trial \{ grid-template-columns: 1fr;[\s\S]*?\.trial-content \{ grid-template-columns: 1fr; \}[\s\S]*?\.trial-union-mark \{ order: 2; inline-size: min\(100%, 360px\);[^}]*\}/);
});