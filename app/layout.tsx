import type { Metadata } from "next";
import "./globals.css";
import { getSiteContent } from "./_lib/content";

const site = getSiteContent();
export const metadata: Metadata = {
  metadataBase: new URL(site.canonicalHost),
  title: site.organization.tagline,
  description: site.trialOffer.label,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="he" dir="rtl"><body>{children}</body></html>;
}
