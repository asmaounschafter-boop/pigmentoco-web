import type { Metadata } from "next";
import { resolvePage } from "@/i18n/page";
import { Button, Container, CtaBand, Eyebrow, ImageSlot, PageHero } from "@/components/ui";

export async function generateMetadata({ params }: PageProps<"/[lang]/technology">): Promise<Metadata> {
  const { lang, dict } = await resolvePage(params);
  return { title: dict.nav.technology, description: dict.technology.hero.body, alternates: { canonical: `/${lang}/technology` } };
}

export default async function TechnologyPage({ params }: PageProps<"/[lang]/technology">) {
  const { lang, dict } = await resolvePage(params);
  const t = dict.technology;

  return (
    <>
      <PageHero {...t.hero} />

      {/* WHAT IS scCO2 */}
      <section className="py-24 sm:py-32">
        <Container className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl leading-tight sm:text-5xl">{t.what.title}</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">{t.what.body}</p>
            <dl className="mt-10 grid grid-cols-3 gap-4">
              {t.what.facts.map((f) => (
                <div key={f.label} className="rounded-[5px] border border-line p-5">
                  <dd className="font-display text-2xl text-coral sm:text-3xl">{f.value}</dd>
                  <dt className="mt-2 text-xs leading-snug text-muted">{f.label}</dt>
                </div>
              ))}
            </dl>
          </div>
          <PhaseDiagram labels={t.diagram} />
        </Container>
      </section>

      {/* PROCESS */}
      <section className="bg-deep py-24 text-paper sm:py-32">
        <Container>
          <h2 className="font-display text-4xl sm:text-5xl">{t.steps.title}</h2>
          <ol className="mt-14 grid gap-px overflow-hidden rounded-[5px] bg-paper/10 md:grid-cols-4">
            {t.steps.items.map((s, i) => (
              <li key={s.title} className="bg-deep p-8">
                <span className="font-display text-5xl text-coral-light">{i + 1}</span>
                <h3 className="mt-6 text-xl font-bold">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-paper/65">{s.body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-8 flex items-center gap-3 text-sm text-paper/60">
            <span className="inline-block h-2 w-2 rounded-full bg-lagoon-light" aria-hidden />
            {t.what.facts[2].value} — {t.what.facts[2].label}
          </p>
        </Container>
      </section>

      {/* COTTON */}
      <section className="py-24 sm:py-32">
        <Container className="grid items-center gap-14 lg:grid-cols-[1fr_1.1fr]">
          <ImageSlot label={dict.common.imageSlot} hint="lab / cotton samples" className="aspect-[4/5]" />
          <div>
            <Eyebrow>{dict.home.cotton.eyebrow}</Eyebrow>
            <h2 className="font-display text-4xl leading-tight sm:text-5xl">{t.cotton.title}</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">{t.cotton.body}</p>
          </div>
        </Container>
      </section>

      {/* BENEFITS */}
      <section className="bg-sand py-24 sm:py-32">
        <Container>
          <h2 className="font-display max-w-2xl text-4xl leading-tight sm:text-5xl">{t.benefits.title}</h2>
          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {t.benefits.items.map((b) => (
              <div key={b.title} className="rounded-[5px] bg-paper p-8">
                <h3 className="text-xl font-bold">{b.title}</h3>
                <p className="mt-2 text-muted">{b.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* STATUS */}
      <section className="py-24 sm:py-32">
        <Container>
          <div className="grid gap-10 md:grid-cols-2">
            <h2 className="font-display text-4xl sm:text-5xl">{t.status.title}</h2>
            <p className="self-end text-lg leading-relaxed text-muted">{t.status.body}</p>
          </div>
          <ol className="mt-14 grid gap-5 md:grid-cols-3">
            {t.status.stages.map((s, i) => (
              <li
                key={s.title}
                className={`relative rounded-[5px] border p-8 ${s.current ? "border-coral bg-coral text-paper" : "border-line"}`}
              >
                <p className={`text-xs font-bold uppercase tracking-[0.2em] ${s.current ? "text-paper/80" : "text-muted"}`}>
                  {s.current ? t.status.current : `0${i + 1}`}
                </p>
                <h3 className="font-display mt-4 text-2xl">{s.title}</h3>
                <p className={`mt-2 ${s.current ? "text-paper/85" : "text-muted"}`}>{s.body}</p>
              </li>
            ))}
          </ol>
          <div className="mt-12">
            <Button href={`/${lang}/contact`}>{t.status.cta}</Button>
          </div>
        </Container>
      </section>

      <CtaBand {...dict.home.finalCta} href={`/${lang}/contact`} />
    </>
  );
}

/** Simplified CO₂ phase diagram showing the supercritical region. */
function PhaseDiagram({ labels }: { labels: { solid: string; liquid: string; gas: string; supercritical: string; zone: string } }) {
  return (
    <figure className="rounded-[5px] bg-sand p-6 sm:p-8">
      <svg viewBox="0 0 400 300" className="h-auto w-full" role="img" aria-label="CO₂ phase diagram: solid, liquid, gas and supercritical regions">
        <defs>
          <linearGradient id="sc" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stopColor="#0314cf" stopOpacity="0.25" />
            <stop offset="1" stopColor="#ca0a0c" stopOpacity="0.35" />
          </linearGradient>
        </defs>
        <rect x="230" y="20" width="150" height="120" rx="10" fill="url(#sc)" />
        <path d="M40 270 C 90 220, 110 170, 130 150 L 230 140" fill="none" stroke="#0a0a12" strokeWidth="2.5" />
        <path d="M130 150 C 125 110, 120 60, 115 20" fill="none" stroke="#0a0a12" strokeWidth="2.5" />
        <circle cx="130" cy="150" r="5" fill="#0a0a12" />
        <circle cx="230" cy="140" r="7" fill="#ca0a0c" />
        <line x1="230" y1="140" x2="230" y2="270" stroke="#ca0a0c" strokeDasharray="4 4" />
        <line x1="30" y1="140" x2="230" y2="140" stroke="#ca0a0c" strokeDasharray="4 4" />
        <line x1="30" y1="270" x2="385" y2="270" stroke="#535769" />
        <line x1="30" y1="270" x2="30" y2="15" stroke="#535769" />
        <g fontFamily="inherit" fontSize="13" fill="#0a0a12">
          <text x="55" y="100">{labels.solid}</text>
          <text x="160" y="85">{labels.liquid}</text>
          <text x="140" y="230">{labels.gas}</text>
          <text x="245" y="70" fontWeight="700">{labels.supercritical}</text>
          <text x="245" y="88" fontSize="11" fill="#535769">
            {labels.zone}
          </text>
          <text x="236" y="288" fontSize="11" fill="#ca0a0c">31 °C</text>
          <text x="36" y="134" fontSize="11" fill="#ca0a0c">74 bar</text>
          <text x="330" y="290" fontSize="11" fill="#535769">T →</text>
          <text x="6" y="25" fontSize="11" fill="#535769">P</text>
        </g>
      </svg>
    </figure>
  );
}
