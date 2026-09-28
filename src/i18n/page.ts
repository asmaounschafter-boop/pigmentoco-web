import { notFound } from "next/navigation";
import { hasLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get";

export async function resolvePage(params: Promise<{ lang: string }>) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return { lang: lang as Locale, dict: getDictionary(lang) };
}
