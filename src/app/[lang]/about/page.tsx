import type { Metadata } from "next";
import { CONTACT_EMAIL } from "@/i18n/config";
import { resolvePage } from "@/i18n/page";
import { Button, Container, Eyebrow, ImageSlot, PageHero } from "@/components/ui";

export async function generateMetadata({ params }: PageProps<"/[lang]/about">): Promise<Metadata> {
  const { lang, dict } = await resolvePage(params);
  return { title: dict.nav.about, description: dict.about.hero.body, alternates: { canonical: `/${lang}/about` } };
}

export default async function AboutPage({ params }: PageProps<"/[lang]/about">) {
  const { dict } = await resolvePage(params);
  const t = dict.about;

  return (
    <>
      <PageHero {...t.hero} />

      {/* STORY */}
      <section className="py-24 sm:py-32">
        <Container className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl sm:text-5xl">{t.story.title}</h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted">
              {t.story.body.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center rounded-[5px] bg-sand p-10">
            {/* The coral mark from the logo */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/coral.png" alt="" className="h-auto w-3/5 max-w-xs" width={512} height={512} />
          </div>
        </Container>
      </section>

      {/* TEAM */}
      <section className="bg-sand py-24 sm:py-32">
        <Container>
          <h2 className="font-display text-4xl sm:text-5xl">{t.team.title}</h2>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:max-w-4xl">
            {t.team.members.map((m) => (
              <li key={m.name}>
                <ImageSlot
                  label={dict.common.imageSlot}
                  hint={m.name}
                  src={"photo" in m ? m.photo : undefined}
                  alt={m.name}
                  className="aspect-[4/3] object-[center_30%]"
                />
                <p className="font-display mt-5 text-2xl">{m.name}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* VALUES */}
      <section className="py-24 sm:py-32">
        <Container>
          <h2 className="font-display text-4xl sm:text-5xl">{t.values.title}</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {t.values.items.map((v, i) => (
              <div key={v.title} className="border-t-2 border-coral pt-6">
                <span className="text-sm font-bold text-coral">0{i + 1}</span>
                <h3 className="font-display mt-2 text-2xl">{v.title}</h3>
                <p className="mt-2 text-muted">{v.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* RECOGNITION */}
      <section className="bg-deep py-24 text-paper sm:py-28">
        <Container>
          <Eyebrow tone="light">{t.recognition.title}</Eyebrow>
          <ul className="divide-y divide-paper/10">
            {t.recognition.items.map((r) => (
              <li key={r} className="flex items-baseline gap-4 py-5 text-lg sm:text-xl">
                <span className="text-coral-light" aria-hidden>
                  ✦
                </span>
                {r}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* CAREERS */}
      <section className="py-24 sm:py-32">
        <Container className="max-w-3xl text-center">
          <h2 className="font-display text-4xl sm:text-5xl">{t.careers.title}</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">{t.careers.body}</p>
          <div className="mt-10">
            <Button href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(dict.contact.channels[3].subject)}`}>
              {t.careers.cta}
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
