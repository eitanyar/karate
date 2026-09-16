import fs from "node:fs";
import path from "node:path";

type LinkItem = { label: string; href: string };
type Section = { heading: string; body: string[]; list?: string[] };
type MetadataFields = { title: string; description: string; canonical: string };

type RawPage = {
  schemaVersion: number;
  route: string;
  metadata: MetadataFields;
  titleAnchor: string;
  h1: string;
  breadcrumbs: LinkItem[];
  intro: string;
  sections: Section[];
  relatedLinks: LinkItem[];
  cta: LinkItem;
  _sourceNotes: string;
};

export type PublicPage = Omit<RawPage, "titleAnchor" | "_sourceNotes">;
export type SiteContent = {
  schemaVersion: number;
  canonicalHost: string;
  organization: { name: string; fullName: string; style: string; instructor: string; instructorCredentials: string; tagline: string; city: string };
  location: { address: string; city: string };
  phone: { display: string; telHref: string; whatsappHref: string };
  trialOffer: { label: string };
  contactChannels: Array<{ id: string; label: string; href: string; external?: boolean }>;
  navigation: {
    header: Array<LinkItem & { children?: LinkItem[] }>;
    headerCta: LinkItem;
    footer: LinkItem[];
  };
};

const root = path.join(process.cwd(), "content");
const articleSlugs = [
  "10-reasons-to-learn-karate", "10-tips-to-get-a-black-belt", "8-elements-in-karate-lessons",
  "choosing-the-wrong-martial-art", "develop-discipline", "does-karate-suite-your-family",
  "how-long-a-black-belt-takes", "how-to-choose-karate-studio", "make-your-kid-practice-karate-at-home",
  "what-is-karate", "what-to-notice-in-karate-lessons", "why-learn-the-basics",
] as const;
const coreFiles = ["pages/why-us.json", "pages/training/kihon.json", "pages/training/kata.json", "pages/training/komita.json", "pages/training/self-defense-exercise.json", "pages/locations/rishon-le-zion.json"];

function readJson<T>(relativePath: string): T {
  return JSON.parse(fs.readFileSync(path.join(root, relativePath), "utf8")) as T;
}

function validCanonical(value: string): boolean {
  return value.startsWith("/") && !value.includes("//") && !value.includes("?") && !value.includes("#");
}

function assertPage(record: RawPage, source: string): void {
  if (record.schemaVersion !== 1 || !validCanonical(record.route) || !validCanonical(record.metadata?.canonical)) throw new Error(`Invalid content record: ${source}`);
  if (!record.metadata.title || !record.metadata.description || !record.h1 || !record.intro || !record.cta?.label || !record.cta?.href || !Array.isArray(record.breadcrumbs) || !Array.isArray(record.sections) || !Array.isArray(record.relatedLinks)) throw new Error(`Missing public field: ${source}`);
  for (const section of record.sections) if (!section.heading || !Array.isArray(section.body)) throw new Error(`Invalid section: ${source}`);
}

function publicPage(record: RawPage): PublicPage {
  const { titleAnchor: _titleAnchor, _sourceNotes: _sourceNotes, ...page } = record;
  return page;
}

const siteRaw = readJson<SiteContent & { _sourceNotes: string }>("site.json");
if (siteRaw.schemaVersion !== 1 || !/^https:\/\/[^/]+$/.test(siteRaw.canonicalHost) || !siteRaw.organization?.name || !siteRaw.navigation?.header?.length || !siteRaw.navigation?.footer?.length) throw new Error("Invalid site content");
const { _sourceNotes: _siteNotes, ...site } = siteRaw;

const corePages = coreFiles.map((file) => {
  const record = readJson<RawPage>(file);
  assertPage(record, file);
  return publicPage(record);
});
const articles = articleSlugs.map((slug) => {
  const record = readJson<RawPage>(`learn/${slug}.json`);
  assertPage(record, slug);
  if (record.route !== `/learn/${slug}/`) throw new Error(`Invalid article route: ${slug}`);
  return publicPage(record);
});
const allRoutes = [...corePages, ...articles].map((page) => page.route);
if (new Set(allRoutes).size !== allRoutes.length) throw new Error("Duplicate content route");
const publishableRoutes = new Set(["/", "/contact/", "/privacy", "/accessibility", ...allRoutes]);
for (const page of [...corePages, ...articles]) page.relatedLinks = page.relatedLinks.filter((link) => publishableRoutes.has(link.href));

export function getSiteContent(): SiteContent { return site; }
export function getCorePageByRoute(route: string): PublicPage | undefined { return corePages.find((page) => page.route === route); }
export function getPublishedArticles(): PublicPage[] { return articles; }
export function getArticleBySlug(slug: string): PublicPage | undefined { return articles.find((page) => page.route === `/learn/${slug}/`); }
export function getPublishedRoutes(): string[] { return allRoutes; }
