import type { Metadata } from "next";
import { ContentPage } from "../_components/content-page";
import { SiteFooter } from "../_components/site-footer";
import { SiteHeader } from "../_components/site-header";
import { getCorePageByRoute, getSiteContent } from "../_lib/content";
const route = "/why-us/";
const page = getCorePageByRoute(route)!;
export function generateMetadata(): Metadata { const site = getSiteContent(); return { title: page.metadata.title, description: page.metadata.description, alternates: { canonical: new URL(page.metadata.canonical, site.canonicalHost) } }; }
export default function WhyUsPage() { return <><SiteHeader currentPath={route} /><ContentPage page={page} /><SiteFooter /></>; }
