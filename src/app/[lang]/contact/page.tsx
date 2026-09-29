import type { Metadata } from "next";
import { CONTACT_EMAIL, INSTAGRAM_URL, LINKEDIN_URL } from "@/i18n/config";
import { resolvePage } from "@/i18n/page";
import { Container, PageHero } from "@/components/ui";

export async function generateMetadata({ params }: PageProps<"/[lang]/contact">): Promise<Metadata> {
  const { lang, dict } = await resolvePage(params);
  return { title: dict.nav.contact, description: dict.contact.hero.body, alternates: { canonical: `/${lang}/contact` } };
}

export default async function ContactPage({ params }: PageProps<"/[lang]/contact">) {
  const { dict } = await resolvePage(params);
  const t = dict.contact;

  return (
    <>
      <PageHero {...t.hero} />
      <section className="py-24 sm:py-28">
        <Container className="grid gap-14 lg:grid-cols-[1.6fr_1fr]">
          <ul className="grid gap-5 sm:grid-cols-2">
            {t.channels.map((c) => (
              <li key={c.title}>
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(c.subject)}`}
                  className="group flex h-full flex-col rounded-[5px] border border-line p-8 transition-all hover:-translate-y-1 hover:border-coral"
                >
                  <h2 className="font-display text-2xl">{c.title}</h2>
                  <p className="mt-2 flex-1 text-muted">{c.body}</p>
                  <span className="mt-6 text-sm font-bold text-coral group-hover:text-coral-deep">
                    {t.write}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <aside className="space-y-8 rounded-[5px] bg-sand p-8 sm:p-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted">Email</p>
              <a href={`mailto:${CONTACT_EMAIL}`} className="font-display mt-2 block break-all text-2xl text-coral hover:text-coral-deep">
                {CONTACT_EMAIL}
              </a>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted">{t.location.title}</p>
              <p className="font-display mt-2 text-2xl">{t.location.value}</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted">{t.follow}</p>
              <div className="mt-3 flex gap-3">
                {[
                  { href: LINKEDIN_URL, label: "LinkedIn" },
                  { href: INSTAGRAM_URL, label: "Instagram" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-[5px] border border-ink/15 bg-paper px-4 py-2 text-sm font-semibold hover:border-coral hover:text-coral"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
