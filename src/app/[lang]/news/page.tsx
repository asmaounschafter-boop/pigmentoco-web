import type { Metadata } from "next";
import { resolvePage } from "@/i18n/page";
import { CtaBand, PageHero } from "@/components/ui";
import { NewsFilter } from "@/components/NewsFilter";

export async function generateMetadata({ params }: PageProps<"/[lang]/news">): Promise<Metadata> {
  const { lang, dict } = await resolvePage(params);
  return { title: dict.nav.news, description: dict.news.hero.body, alternates: { canonical: `/${lang}/news` } };
}

export default async function NewsPage({ params }: PageProps<"/[lang]/news">) {
  const { lang, dict } = await resolvePage(params);
  return (
    <>
      <PageHero {...dict.news.hero} />
      <NewsFilter lang={lang} labels={dict.news.filters} readLabel={dict.common.readArticle} />
      <CtaBand {...dict.home.finalCta} href={`/${lang}/contact`} />
    </>
  );
}
