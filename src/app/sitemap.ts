import type { MetadataRoute } from "next";
import { locales, SITE_URL } from "@/i18n/config";

const paths = ["", "/technology", "/impact", "/about", "/news", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.flatMap((p) =>
    locales.map((lang) => ({
      url: `${SITE_URL}/${lang}${p}`,
      changeFrequency: "monthly" as const,
      priority: p === "" ? 1 : 0.7,
      alternates: { languages: Object.fromEntries(locales.map((l) => [l, `${SITE_URL}/${l}${p}`])) },
    })),
  );
}
