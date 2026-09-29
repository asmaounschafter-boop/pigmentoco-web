import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { CONTACT_EMAIL, INSTAGRAM_URL, LINKEDIN_URL } from "@/i18n/config";
import type { Dict } from "@/i18n/get";
import { Container } from "./ui";
import { Logo } from "./Header";

export function Footer({ lang, dict }: { lang: Locale; dict: Dict }) {
  const year = new Date().getFullYear();
  const nav = [
    { href: `/${lang}/technology`, label: dict.nav.technology },
    { href: `/${lang}/impact`, label: dict.nav.impact },
    { href: `/${lang}/about`, label: dict.nav.about },
    { href: `/${lang}/news`, label: dict.nav.news },
    { href: `/${lang}/contact`, label: dict.nav.contact },
  ];
  const legal = (["privacy", "terms", "cookies"] as const).map((doc) => ({
    href: `/${lang}/legal/${doc}`,
    label: dict.legal.docs[doc].title,
  }));
  return (
    <footer className="bg-linear-to-b from-[#0a1494] via-[#2c0f4c] to-[#5a0a24] pt-16 text-paper">
      <Container>
        <div className="grid gap-12 border-b border-paper/20 pb-12 sm:grid-cols-3 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div className="sm:col-span-3 md:col-span-1">
            <Logo lang={lang} reverse className="h-10" />
            <p className="mt-4 max-w-xs text-sm text-paper/80">{dict.footer.tagline}</p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="mt-6 inline-block text-sm font-semibold text-paper transition-colors hover:text-coral-light active:text-coral-light">
              {CONTACT_EMAIL}
            </a>
          </div>
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-paper/60">{dict.footer.explore}</p>
            <ul className="space-y-2 text-sm">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="text-paper/85 transition-colors hover:text-coral-light active:text-coral-light">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-paper/60">{dict.footer.connect}</p>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-paper/85 transition-colors hover:text-coral-light active:text-coral-light">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-paper/85 transition-colors hover:text-coral-light active:text-coral-light">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-paper/60">{dict.footer.legal}</p>
            <ul className="space-y-2 text-sm">
              {legal.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="text-paper/85 transition-colors hover:text-coral-light active:text-coral-light">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="py-6 text-xs text-paper/60">
          © {year} PigmentOCO. {dict.footer.rights}
        </p>
      </Container>
    </footer>
  );
}
