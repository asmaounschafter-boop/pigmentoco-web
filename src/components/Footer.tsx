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
  return (
    <footer className="bg-linear-to-b from-[#0a1494] via-[#2c0f4c] to-[#5a0a24] pt-16 text-paper">
      <Container>
        <div className="grid gap-12 border-b border-paper/20 pb-12 md:grid-cols-[2fr_1fr_1fr]">
          <div>
            <Logo lang={lang} reverse className="h-10" />
            <p className="mt-4 max-w-xs text-sm text-paper/80">{dict.footer.tagline}</p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="mt-6 inline-block text-sm font-semibold text-coral-soft hover:text-paper">
              {CONTACT_EMAIL}
            </a>
          </div>
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-paper/60">{dict.footer.explore}</p>
            <ul className="space-y-2 text-sm">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="text-paper/85 hover:text-paper hover:underline">
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
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-paper/85 hover:text-paper hover:underline">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-paper/85 hover:text-paper hover:underline">
                  Instagram
                </a>
              </li>
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
