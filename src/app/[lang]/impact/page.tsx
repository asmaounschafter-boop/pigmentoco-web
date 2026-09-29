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
      <PageHero {...t.hero} singleLineTitle />

      <section className="py-24 sm:py-32">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2">
            {t.pillars.map((p, i) => (
              <article key={p.title} className="rounded-[5px] border border-line p-8 sm:p-10">
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

      <section className="mt-16 bg-sea py-24 text-paper sm:mt-24 sm:py-32">
        <Container>
          <h2 className="font-display mx-auto max-w-2xl text-center text-3xl leading-tight sm:text-4xl xl:max-w-none xl:whitespace-nowrap">
            {t.sdg.title}
          </h2>
          <ul className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {t.sdg.items.map((s) => (
              <li key={s.n} className="flex flex-col overflow-hidden rounded-[5px] bg-paper text-ink">
                <img
                  src={`/sdg/${lang}-${s.n.padStart(2, "0")}.webp`}
                  alt=""
                  width={400}
                  height={400}
                  className="aspect-square w-full"
                  loading="lazy"
                />
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h3 className="text-xl font-bold leading-snug">
                    SDG {s.n}: {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{s.body}</p>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto self-start pt-6 text-sm font-bold uppercase tracking-wide text-ink underline underline-offset-4 transition-colors hover:text-coral"
                  >
                    {t.sdg.learnMore}
                    <span className="sr-only"> – SDG {s.n}</span>
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand {...dict.home.finalCta} href={`/${lang}/contact`} />
    </>
  );
}
