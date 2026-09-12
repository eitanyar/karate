"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type Item = { label: string; href?: string; children?: Array<{ label: string; href: string }> };
export function MobileNavigation({ items, currentPath }: { items: Item[]; currentPath: string }) {
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const links = items.flatMap((item) => item.children ?? (item.href ? [{ label: item.label, href: item.href }] : []));
  useEffect(() => { const close = (event: KeyboardEvent) => { if (event.key === "Escape") { setOpen(false); trigger.current?.focus(); } }; window.addEventListener("keydown", close); return () => window.removeEventListener("keydown", close); }, []);
  return <div className="mobile-navigation"><button ref={trigger} className="menu-button" type="button" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen((value) => !value)}><span aria-hidden="true">Menu</span><span className="sr-only">Menu</span></button><nav id="mobile-menu" hidden={!open} aria-label="Primary navigation">{links.map((item) => <Link key={item.href} href={item.href} aria-current={currentPath === item.href ? "page" : undefined} onClick={() => setOpen(false)}>{item.label}</Link>)}</nav></div>;
}
