import Image from "next/image";
import Link from "next/link";
import { getSiteContent } from "../_lib/content";

export function SiteFooter() {
  const site = getSiteContent();
  return <footer className="site-footer"><div className="footer-brand"><Image src="/assets/sksu-logo.png" width={44} height={45} alt="" /><span>{site.organization.name}<small>{site.organization.city}</small></span></div><nav aria-label="Footer navigation">{site.navigation.footer.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav><p>Copyright {new Date().getFullYear()} {site.organization.name}</p></footer>;
}
