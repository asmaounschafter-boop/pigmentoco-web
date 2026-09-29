import { resolvePage } from "@/i18n/page";
import { Button, Container, CtaBand, Eyebrow, ImageSlot } from "@/components/ui";
import { NewsCards } from "@/components/NewsCards";

const COLLABORATORS = [
  { name: "Fédération Tunisienne du Textile et de l'Habillement", src: "/partners/ftth.png", h: "h-16 sm:h-20" },
  { name: "Pôle de Compétitivité Monastir - El Fejja", src: "/partners/mfc-pole.gif", h: "h-12 sm:h-16" },
  { name: "sOAR", src: "/partners/soar.jpeg", h: "h-16 sm:h-20 rounded-full" },
  { name: "Positive Impact", src: "/partners/positive-impact.jpeg", h: "h-16 sm:h-20" },
  { name: "INAM – Innovation Network for Advanced Materials", src: "/partners/inam.avif", h: "h-14 sm:h-16" },
  { name: "Red Brick", src: "/partners/red-brick.png", h: "h-16 sm:h-24" },
];

const mark = {
  yes: { icon: "●", cls: "bg-coral text-paper" },
  no: { icon: "—", cls: "bg-sand text-muted" },
  partial: { icon: "◐", cls: "bg-coral-soft text-coral-deep" },
} as const;

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang, dict } = await resolvePage(params);
  const h = dict.home;

  return (
    <>
      {/* HERO */}
      <section className="relative isolate flex min-h-[92svh] flex-col justify-end overflow-hidden bg-deep pt-32 text-paper">
        <video
          className="absolute inset-0 -z-10 h-full w-full object-cover motion-reduce:hidden"
          src="/video/hero.mp4"
          poster="/video/hero-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden
        />
        {/* No overlay on the video: a text shadow keeps the headline readable instead */}
        <Container className="relative pb-16 [text-shadow:0_2px_18px_rgb(0_0_0/0.55)] sm:pb-24">
          <Eyebrow tone="light">{h.hero.eyebrow}</Eyebrow>
          <h1 className="font-display max-w-5xl text-[3.2rem] leading-[0.95] sm:text-[5.5rem] lg:text-[7rem]">
            {h.hero.titleA}
            <br />
            <span className="text-coral-light">{h.hero.titleB}</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-paper/80">{h.hero.body}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href={`/${lang}/contact`}>{h.hero.primary}</Button>
            <Button href={`/${lang}/technology`} variant="ghost-light">
              {h.hero.secondary}
            </Button>
          </div>
        </Container>
        <div className="relative border-t border-paper/10 bg-deep/40 backdrop-blur-sm">
          <Container className="grid gap-4 py-6 sm:grid-cols-3">
            {h.proof.map((p) => (
              <div key={p.label} className="flex items-baseline gap-3">
                <span className="text-coral-light" aria-hidden>
                  ✦
                </span>
                <div>
                  <p className="text-sm font-bold">{p.label}</p>
                  <p className="text-xs text-paper/55">{p.sub}</p>
                </div>
              </div>
            ))}
          </Container>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-24 sm:py-32">
        <Container>
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <Eyebrow>{h.problem.eyebrow}</Eyebrow>
              <h2 className="font-display text-4xl leading-tight sm:text-5xl">{h.problem.title}</h2>
            </div>
            <p className="self-end text-lg leading-relaxed text-muted">{h.problem.body}</p>
          </div>
          <dl className="mt-16 grid gap-px overflow-hidden rounded-[5px] border border-line bg-line sm:grid-cols-3">
            {h.problem.stats.map((s, i) => (
              <div key={s.value} className={`p-8 ${i === 1 ? "bg-coral text-paper" : "bg-paper"}`}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-3xl lg:text-4xl">{s.value}</dd>
                <dd className={`mt-3 text-sm ${i === 1 ? "text-paper/85" : "text-muted"}`}>{s.label}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-xs text-muted">{h.problem.source}</p>
        </Container>
      </section>

      {/* SOLUTION */}
      <section className="bg-sand py-24 sm:py-32">
        <Container className="grid items-center gap-14 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <Eyebrow>{h.solution.eyebrow}</Eyebrow>
            <h2 className="font-display text-4xl leading-tight sm:text-5xl">{h.solution.title}</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">{h.solution.body}</p>
            <ul className="mt-10 space-y-6">
              {h.solution.pillars.map((p, i) => (
                <li key={p.title} className="flex gap-5">
                  <span className="font-display mt-0.5 text-2xl text-coral">0{i + 1}</span>
                  <div>
                    <h3 className="text-lg font-bold">{p.title}</h3>
                    <p className="mt-1 text-muted">{p.body}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Button href={`/${lang}/technology`} variant="ghost-dark">
                {h.solution.cta}
              </Button>
            </div>
          </div>
          <ImageSlot label={dict.common.imageSlot} hint="cotton / dyed fabric" className="aspect-[4/5]" />
        </Container>
      </section>

      {/* COTTON EDGE */}
      <section className="py-24 sm:py-32">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>{h.cotton.eyebrow}</Eyebrow>
            <h2 className="font-display text-4xl leading-tight sm:text-5xl">{h.cotton.title}</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">{h.cotton.body}</p>
          </div>
          <div className="relative mt-14 -mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
            <table className="w-full min-w-[560px] border-separate border-spacing-0 text-left">
              <thead>
                <tr>
                  <th className="w-2/5 pb-4" />
                  {h.cotton.table.cols.map((c) => (
                    <th key={c} scope="col" className="pb-4 text-center text-xs font-bold uppercase tracking-[0.15em] text-muted">
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {h.cotton.table.rows.map((r, i) => {
                  const us = i === h.cotton.table.rows.length - 1;
                  return (
                    <tr key={r.name} className={us ? "bg-deep text-paper" : ""}>
                      <th
                        scope="row"
                        className={`border-t border-line py-5 pl-5 pr-4 font-semibold ${us ? "rounded-l-[5px] border-transparent font-display text-xl" : ""}`}
                      >
                        {r.name}
                      </th>
                      {r.values.map((v, j) => {
                        const m = mark[v as keyof typeof mark];
                        return (
                          <td
                            key={j}
                            className={`border-t border-line py-5 text-center ${us ? "border-transparent" : ""} ${
                              us && j === r.values.length - 1 ? "rounded-r-[5px]" : ""
                            }`}
                          >
                            <span
                              className={`inline-flex h-8 w-8 items-center justify-center rounded-full text-sm ${m.cls}`}
                              title={h.cotton.table.legend[v as keyof typeof mark]}
                            >
                              <span aria-hidden>{m.icon}</span>
                              <span className="sr-only">{h.cotton.table.legend[v as keyof typeof mark]}</span>
                            </span>
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="mt-4 flex flex-wrap gap-5 text-xs text-muted">
            {(Object.keys(mark) as (keyof typeof mark)[]).map((k) => (
              <span key={k} className="inline-flex items-center gap-2">
                <span className={`inline-flex h-4 w-4 items-center justify-center rounded-full text-[9px] ${mark[k].cls}`}>
                  {mark[k].icon}
                </span>
                {h.cotton.table.legend[k]}
              </span>
            ))}
          </p>
        </Container>
      </section>

      {/* PARTNERS */}
      <section className="bg-deep py-24 text-paper sm:py-32">
        <Container>
          <Eyebrow tone="light">{h.partners.eyebrow}</Eyebrow>
          <h2 className="font-display max-w-3xl text-4xl leading-tight sm:text-5xl">{h.partners.title}</h2>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {h.partners.items.map((p) => (
              <div key={p.title} className="rounded-[5px] border border-paper/10 bg-paper/[0.03] p-8">
                <div className="mb-8 h-10 w-10 rounded-full bg-gradient-to-br from-coral-light to-lagoon" aria-hidden />
                <h3 className="font-display text-2xl">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-paper/65">{p.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Button href={`/${lang}/contact`}>{h.partners.cta}</Button>
          </div>
        </Container>
      </section>

      {/* CORAL */}
      <section className="py-24 sm:py-32">
        <Container className="grid items-center gap-14 lg:grid-cols-2">
          <ImageSlot label={dict.common.imageSlot} hint="coral reef" className="aspect-square lg:order-last" />
          <div>
            <Eyebrow>{h.coral.eyebrow}</Eyebrow>
            <h2 className="font-display text-4xl leading-tight sm:text-5xl">{h.coral.title}</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">{h.coral.body}</p>
            <div className="mt-10">
              <Button href={`/${lang}/about`} variant="ghost-dark">
                {h.coral.cta}
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* NEWS */}
      <section className="bg-sand py-24 sm:py-28">
        <Container>
          <div className="mb-10 flex items-end justify-between gap-6">
            <h2 className="font-display text-4xl sm:text-5xl">{h.news.title}</h2>
            <Button href={`/${lang}/news`} variant="ghost-dark">
              {h.news.all}
            </Button>
          </div>
          <NewsCards lang={lang} limit={3} readLabel={dict.common.readArticle} />
        </Container>
      </section>

      {/* COLLABORATORS */}
      <section className="pb-4 pt-24 sm:pt-28">
        <Container>
          <h2 className="font-display text-center text-4xl sm:text-5xl">{h.collaborators.title}</h2>
          <ul className="mt-14 grid grid-cols-2 items-center gap-x-8 gap-y-12 sm:grid-cols-3">
            {COLLABORATORS.map((c) => (
              <li key={c.src} className="flex justify-center">
                <img src={c.src} alt={c.name} className={`w-auto object-contain ${c.h}`} loading="lazy" />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand
        title={h.finalCta.title}
        body={h.finalCta.body}
        button={h.finalCta.button}
        href={`/${lang}/contact`}
      />
    </>
  );
}
