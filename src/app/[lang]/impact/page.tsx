import type { Metadata } from "next";
import { resolvePage } from "@/i18n/page";
import { Container, CtaBand, ImageSlot, PageHero } from "@/components/ui";

export async function generateMetadata({ params }: PageProps<"/[lang]/impact">): Promise<Metadata> {
  const { lang, dict } = await resolvePage(params);
  return { title: dict.nav.impact, description: dict.impact.hero.body, alternates: { canonical: `/${lang}/impact` } };
}

export default async function ImpactPage({ params }: PageProps<"/[lang]/impact">) {
  const { lang, dict } = await resolvePage(params);
  const t = dict.impact;

  return (
    <>
      <PageHero {...t.hero} />

      <section className="py-24 sm:py-32">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2">
            {t.pillars.map((p, i) => (
              <article key={p.title} className="rounded-3xl border border-line p-8 sm:p-10">
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold text-paper ${i % 2 ? "bg-lagoon" : "bg-coral"}`}
                  aria-hidden
                >
                  0{i + 1}
                </span>
                <h2 className="font-display mt-6 text-3xl">{p.title}</h2>
                <p className="mt-3 text-lg leading-relaxed text-muted">{p.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-deep py-24 text-paper sm:py-32">
        <Container className="grid items-center gap-14 lg:grid-cols-2">
          <blockquote>
            <p className="font-display text-3xl leading-tight sm:text-4xl">
              <span className="text-coral-light">“</span>
              {t.quote.text}
              <span className="text-coral-light">”</span>
            </p>
            <footer className="mt-6 text-sm text-paper/60">— {t.quote.author}</footer>
          </blockquote>
          <ImageSlot label={dict.common.imageSlot} hint="ocean / reef" className="aspect-[4/3]" />
        </Container>
      </section>

      <section className="py-24 sm:py-32">
        <Container>
          <h2 className="font-display max-w-2xl text-3xl leading-tight sm:text-4xl">{t.sdg.title}</h2>
          <ul className="mt-12 grid gap-5 sm:grid-cols-3">
            {t.sdg.items.map((s) => (
              <li key={s.n} className="flex items-center gap-5 rounded-3xl bg-sand p-6">
                <span className="font-display flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-lagoon text-3xl text-paper">
                  {s.n}
                </span>
                <span className="font-semibold">{s.title}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand {...dict.home.finalCta} href={`/${lang}/contact`} />
    </>
  );
}
