import type { Metadata } from "next";
import { resolvePage } from "@/i18n/page";
import { Container, CtaBand, PageHero } from "@/components/ui";
import { NewsCards } from "@/components/NewsCards";

export async function generateMetadata({ params }: PageProps<"/[lang]/news">): Promise<Metadata> {
  const { lang, dict } = await resolvePage(params);
  return { title: dict.nav.news, description: dict.news.hero.body, alternates: { canonical: `/${lang}/news` } };
}

export default async function NewsPage({ params }: PageProps<"/[lang]/news">) {
  const { lang, dict } = await resolvePage(params);
  return (
    <>
      <PageHero {...dict.news.hero} />
      <section className="py-24 sm:py-28">
        <Container>
          <NewsCards lang={lang} readLabel={dict.common.readArticle} />
        </Container>
      </section>
      <CtaBand {...dict.home.finalCta} href={`/${lang}/contact`} />
    </>
  );
}
