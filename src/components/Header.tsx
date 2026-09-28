"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { Locale } from "@/i18n/config";
import { locales } from "@/i18n/config";

type NavLabels = {
  technology: string;
  impact: string;
  about: string;
  news: string;
  contact: string;
  cta: string;
  menu: string;
  close: string;
};

export function Logo({ lang, reverse = false, className = "h-9" }: { lang: Locale; reverse?: boolean; className?: string }) {
  return (
    <Link href={`/${lang}`} className="inline-flex shrink-0" aria-label="PigmentOCO — Ocean Conscious Textiles">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={reverse ? "/logo-reverse.webp" : "/logo.webp"}
        alt="PigmentOCO — Ocean Conscious Textiles"
        width={1600}
        height={359}
        className={`w-auto ${className}`}
      />
    </Link>
  );
}

function switchLocalePath(pathname: string, target: Locale) {
  const parts = pathname.split("/");
  parts[1] = target;
  return parts.join("/") || `/${target}`;
}

export function Header({ lang, labels }: { lang: Locale; labels: NavLabels }) {
  const pathname = usePathname() ?? `/${lang}`;
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu when the route changes (state adjusted during render, no effect needed)
  const [prevPath, setPrevPath] = useState(pathname);
  if (prevPath !== pathname) {
    setPrevPath(pathname);
    setOpen(false);
  }

  const links = [
    { href: `/${lang}/technology`, label: labels.technology },
    { href: `/${lang}/impact`, label: labels.impact },
    { href: `/${lang}/about`, label: labels.about },
    { href: `/${lang}/news`, label: labels.news },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "border-b border-line bg-paper/95 shadow-sm backdrop-blur-md" : "bg-paper"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-6xl gap-4 items-center justify-between px-5 py-4 sm:px-8">
        <Logo lang={lang} />

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm font-semibold transition-colors hover:text-coral ${
                pathname.startsWith(l.href) ? "text-coral" : "text-ink/80"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <LangSwitch lang={lang} pathname={pathname} />
          <Link
            href={`/${lang}/contact`}
            className="rounded-full bg-coral px-5 py-2.5 text-sm font-bold text-paper transition-colors hover:bg-coral-deep"
          >
            {labels.cta}
          </Link>
        </div>

        <button
          type="button"
          className="rounded-full border border-ink/20 px-4 py-2 text-sm font-semibold text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? labels.close : labels.menu}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" className="border-t border-line px-5 pb-8 pt-4 md:hidden" aria-label="Mobile">
          <ul className="flex flex-col gap-1">
            {[...links, { href: `/${lang}/contact`, label: labels.contact }].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="block py-3 font-display text-2xl text-ink">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex items-center justify-between">
            <LangSwitch lang={lang} pathname={pathname} />
            <Link href={`/${lang}/contact`} className="rounded-full bg-coral px-5 py-2.5 text-sm font-bold text-paper">
              {labels.cta}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

function LangSwitch({ lang, pathname }: { lang: Locale; pathname: string }) {
  return (
    <div className="flex rounded-full border border-ink/15 p-0.5 text-xs font-bold uppercase" aria-label="Language">
      {locales.map((l) => (
        <Link
          key={l}
          href={switchLocalePath(pathname, l)}
          hrefLang={l}
          aria-current={l === lang ? "true" : undefined}
          className={`rounded-full px-3 py-1.5 transition-colors ${
            l === lang ? "bg-ink text-paper" : "text-ink/60 hover:text-ink"
          }`}
        >
          {l}
        </Link>
      ))}
    </div>
  );
}
