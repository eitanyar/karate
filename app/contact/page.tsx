import Link from "next/link";
import { SiteFooter } from "../_components/site-footer";
import { SiteHeader } from "../_components/site-header";
import { getSiteContent } from "../_lib/content";
import { TrialForm } from "../trial-form";

const whatsapp = "https://wa.me/972504731212?text=%D7%94%D7%99%20%D7%90%D7%A8%D7%99%D7%94%2C%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A7%D7%91%D7%9C%20%D7%A4%D7%A8%D7%98%D7%99%D7%9D%20%D7%A2%D7%9C%20%D7%A9%D7%99%D7%A2%D7%95%D7%A8%20%D7%A0%D7%99%D7%A1%D7%99%D7%95%D7%9F.";
export const metadata = { alternates: { canonical: "/contact" }, title: "צרו קשר | SKSU קראטה ראשון לציון", robots: { index: false, follow: true } };
export default function Contact() {
  const site = getSiteContent();
  const callHref = "tel:+972504731212";
  return <><SiteHeader currentPath="/contact/" /><main id="content" className="contact-page"><div className="contact-layout"><div className="contact-copy"><Link className="back" href="/">← חזרה לדף הבית</Link><p className="eyebrow">SKSU • ראשון לציון</p><h1>בואו נדבר</h1><p className="legal-lead">לפרטים ולתיאום שיעור ניסיון בקראטה והגנה עצמית בראשון לציון, פנו אלינו ב-WhatsApp.</p><div className="contact-actions"><a className="button primary contact-whatsapp" href={whatsapp} target="_blank" rel="noreferrer">פתיחת שיחה ב-WhatsApp <span>←</span></a><a className="contact-phone" href={callHref}>{site.phone.display}</a></div><p className="contact-note">המספר: 050-473-1212</p><p className="contact-address">{site.location.address}</p><hr/><p>אפשר גם לחזור לדף הבית ולהשאיר פרטים לתיאום שיעור ניסיון.</p></div><aside className="contact-form"><TrialForm /></aside></div></main><SiteFooter /></>; }
