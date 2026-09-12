import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContentPage } from "../../_components/content-page";
import { SiteFooter } from "../../_components/site-footer";
import { SiteHeader } from "../../_components/site-header";
import { getArticleBySlug, getPublishedArticles, getSiteContent } from "../../_lib/content";
export const dynamicParams = false;
export function generateStaticParams() { return getPublishedArticles().map((article) => ({ slug: article.route.split("/").filter(Boolean).at(-1)! })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const page = getArticleBySlug((await params).slug); if (!page) return {}; const site = getSiteContent(); return { title: page.metadata.title, description: page.metadata.description, alternates: { canonical: new URL(page.metadata.canonical, site.canonicalHost) } }; }
export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) { const page = getArticleBySlug((await params).slug); if (!page) notFound(); return <><SiteHeader currentPath="/learn/" /><ContentPage page={page} article /><SiteFooter /></>; }
