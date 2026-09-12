import Image from "next/image";
import Link from "next/link";
import { PublicPage } from "../_lib/content";
import { getVideosForRoute } from "../_lib/media";
import { Breadcrumbs } from "./breadcrumbs";
import { TrialCta } from "./trial-cta";
import { VideoEmbed } from "./video-embed";

const routeImages: Record<string, string> = {
  "/karate-in-rishon-le-zion": "/assets/sksu-06.jpg",
  "/kata/": "/assets/sksu-05.jpg",
  "/kihon/": "/assets/sksu-03.jpg",
  "/komita/": "/assets/sksu-07.jpg",
  "/self-defense-exercise/": "/assets/sksu-02.jpg",
};

export function ContentPage({ page, article = false }: { page: PublicPage; article?: boolean }) {
  const articleSchema = article ? { "@context": "https://schema.org", "@type": "Article", headline: page.h1, description: page.metadata.description, mainEntityOfPage: page.metadata.canonical } : null;
  const videos = getVideosForRoute(page.route);
  const hasEarlyCta = page.route === "/karate-in-rishon-le-zion" || page.route === "/kata/";
  const image = routeImages[page.route];
  return <main id="content" className="content-page"><Breadcrumbs items={page.breadcrumbs} />{articleSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />}<article><header className="page-intro"><div><h1>{page.h1}</h1><p>{page.intro}</p></div>{image && <div className="page-intro-image"><Image src={image} width={1600} height={1200} alt={page.h1} sizes="(max-width: 800px) 100vw, 42vw" priority /></div>}</header>{hasEarlyCta && <TrialCta cta={page.cta} />}<div className="page-sections">{page.sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2>{section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.list && <ul>{section.list.map((item) => <li key={item}>{item}</li>)}</ul>}</section>)}</div>{videos.length > 0 && <div className="video-gallery">{videos.map((videoId, index) => <VideoEmbed key={videoId} videoId={videoId} title={`${page.h1} ${index + 1}`} />)}</div>}<nav className="related-links" aria-label="Related content"><ul>{page.relatedLinks.map((link) => <li key={link.href}><Link href={link.href}>{link.label}</Link></li>)}</ul></nav><TrialCta cta={page.cta} /></article></main>;
}
