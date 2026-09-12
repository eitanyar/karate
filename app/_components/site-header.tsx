import Image from "next/image";
import Link from "next/link";
import { getSiteContent } from "../_lib/content";
import { MobileNavigation } from "./mobile-navigation";

export function SiteHeader({ currentPath }: { currentPath: string }) {
  const site = getSiteContent();
  const whatsapp = site.contactChannels.find((channel) => channel.id === "whatsapp");
  return <header className="site-header"><Link href="/" className="brand" aria-label={site.organization.name}><Image src="/assets/sksu-logo.png" width={60} height={61} alt="" priority /><span>{site.organization.name}<small>{site.organization.city}</small></span></Link><nav className="desktop-navigation" aria-label="Primary navigation">{site.navigation.header.flatMap((item) => item.children ?? (item.href ? [item] : [])).map((item) => <Link key={item.href} href={item.href!} aria-current={currentPath === item.href ? "page" : undefined}>{item.label}</Link>)}</nav><div className="header-actions">{whatsapp && <a className="nav-contact" href={whatsapp.href} target="_blank" rel="noreferrer">{whatsapp.label}</a>}<MobileNavigation items={site.navigation.header} currentPath={currentPath} /></div></header>;
}
