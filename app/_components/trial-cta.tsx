import Link from "next/link";
import { getSiteContent } from "../_lib/content";

export function TrialCta({ cta }: { cta?: { label: string; href: string } }) {
  const site = getSiteContent();
  const action = cta ?? site.navigation.headerCta;
  return <aside className="trial-cta"><p>{site.organization.name}</p><Link className="button primary" href={action.href}>{action.label}</Link></aside>;
}
