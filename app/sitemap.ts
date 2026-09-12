import type { MetadataRoute } from "next";
import { getPublishedRoutes, getSiteContent } from "./_lib/content";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap { const site = getSiteContent(); const routes = ["/", ...getPublishedRoutes(), "/contact/", "/privacy", "/accessibility"]; return routes.map((route) => ({ url: new URL(route, site.canonicalHost).toString() })); }
