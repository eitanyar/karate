import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../_components/site-footer";
import { SiteHeader } from "../_components/site-header";
import { Breadcrumbs } from "../_components/breadcrumbs";
import { getPublishedArticles, getSiteContent } from "../_lib/content";
const route = "/learn/";
export function generateMetadata(): Metadata { const site = getSiteContent(); return { title: site.navigation.header.find((item) => item.href === route)?.label, alternates: { canonical: new URL(route, site.canonicalHost) } }; }
export default function LearnPage() { const articles = getPublishedArticles(); const site = getSiteContent(); const home = site.navigation.header.find((item) => item.href === "/")!; const learn = site.navigation.header.find((item) => item.href === route)!; return <><SiteHeader currentPath={route} /><main id="content" className="content-page"><Breadcrumbs items={[home, learn]} /><header className="page-intro"><h1>{learn.label}</h1></header><section className="article-grid">{articles.map((article) => <article key={article.route}><h2><Link href={article.route}>{article.h1}</Link></h2><p>{article.metadata.description}</p><Link href={article.route}>{article.cta.label}</Link></article>)}</section></main><SiteFooter /></>; }
