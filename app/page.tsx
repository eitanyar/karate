import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "./_components/site-footer";
import { SiteHeader } from "./_components/site-header";
import { VideoEmbed } from "./_components/video-embed";
import { getCorePageByRoute, getPublishedArticles, getSiteContent } from "./_lib/content";
import { getVideosForRoute } from "./_lib/media";
import { TrialForm } from "./trial-form";

export const metadata = { alternates: { canonical: "/" } };

const coreImages = ["/assets/sksu-02.jpg", "/assets/sksu-03.jpg", "/assets/sksu-05.jpg", "/assets/sksu-07.jpg", "/assets/sksu-06.jpg", "/assets/sksu-10.jpg"];

export default function Home() {
  const site = getSiteContent();
  const core = ["/why-us/", "/kihon/", "/kata/", "/komita/", "/self-defense-exercise/", "/karate-in-rishon-le-zion"].map((route) => getCorePageByRoute(route)!);
  const articles = getPublishedArticles().slice(0, 3);
  const heroVideo = getVideosForRoute("/")[0];
  if (!heroVideo) throw new Error("Missing homepage video");
  return <><SiteHeader currentPath="/" /><main id="content"><section className="hero hero-premium"><Image className="hero-image" src="/assets/sksu-05.jpg" width={1280} height={960} alt="" priority sizes="100vw" /><div className="hero-rail"><div className="hero-copy"><p className="eyebrow">{site.organization.fullName}</p><h1>{site.organization.tagline}</h1><p className="lead">{site.organization.instructor}</p><p className="hero-credentials">{site.organization.instructorCredentials}</p><p className="hero-location">{site.location.address}</p><div className="hero-actions"><Link className="button primary" href={site.navigation.headerCta.href}>{site.navigation.headerCta.label}</Link></div></div><div className="hero-art"><VideoEmbed videoId={heroVideo} title={site.organization.fullName} /></div></div></section><section className="homepage-grid">{core.map((page, index) => <article key={page.route}><Image src={coreImages[index]} width={1600} height={1200} alt={page.h1} sizes="(max-width: 800px) 100vw, (max-width: 1100px) 50vw, 33vw" /><div><h2><Link href={page.route}>{page.h1}</Link></h2><p>{page.intro}</p><Link className="text-link" href={page.route}>{page.cta.label}</Link></div></article>)}</section><section className="learn"><h2>{site.navigation.header.find((item) => item.href === "/learn/")?.label}</h2><div className="article-grid">{articles.map((article) => <article key={article.route}><h3><Link href={article.route}>{article.h1}</Link></h3><p>{article.metadata.description}</p></article>)}</div><Link className="text-link" href="/learn/">{site.navigation.header.find((item) => item.href === "/learn/")?.label}</Link></section><section className="trial" id="trial"><div className="trial-content"><div className="trial-copy"><h2>{site.trialOffer.label}</h2><p>{site.location.address}</p></div><TrialForm /></div><aside className="trial-union-mark"><Image src="/assets/sksu-union-mark-original.jpg" width={640} height={640} alt="" sizes="(max-width: 800px) min(72vw, 360px), 260px" /></aside></section></main><SiteFooter /></>;
}
