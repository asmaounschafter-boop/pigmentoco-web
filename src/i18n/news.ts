import type { Locale } from "./config";

export type NewsItem = {
  date: string; // ISO yyyy-mm, or "" if undated
  source: string;
  url: string;
  title: Record<Locale, string>;
  summary: Record<Locale, string>;
};

/** Add new press items at the top — the home page shows the first three. */
export const news: NewsItem[] = [
  {
    date: "2026-09",
    source: "FashionNetwork",
    url: "https://fr.fashionnetwork.com/news/Pigmentoco-et-iroony-recompenses-aux-avantex-fashion-pitch-awards,1863266.html",
    title: {
      en: "PigmentOCO wins the Avantex Trophy at Texworld Paris",
      fr: "PigmentOCO remporte le trophée Avantex à Texworld Paris",
    },
    summary: {
      en: "Our supercritical CO₂ dyeing technology won over the jury of the Avantex Fashion Pitch at Texworld Apparel Sourcing.",
      fr: "Notre technologie de teinture au CO₂ supercritique a convaincu le jury de l'Avantex Fashion Pitch au salon Texworld Apparel Sourcing.",
    },
  },
  {
    date: "2026-06",
    source: "HEC Paris",
    url: "https://www.hec.edu/fr/dare/innovation-entrepreneuriat/pigmentoco-pionnier-de-la-teinture-textile-sans-eau",
    title: {
      en: "PigmentOCO, pioneer of waterless textile dyeing",
      fr: "Pigmentoco : pionnier de la teinture textile sans eau",
    },
    summary: {
      en: "HEC Paris profiles the founders and the deep tech behind a closed-loop alternative for industrial dye houses.",
      fr: "HEC Paris dresse le portrait des fondateurs et de la deep tech derrière une alternative en circuit fermé pour les teintureries industrielles.",
    },
  },
  {
    date: "",
    source: "VC4A",
    url: "https://vc4a.com/ventures/pigmentoco/?lang=fr",
    title: {
      en: "Dyeing textiles with CO₂: no water, no waste, lower cost",
      fr: "Teindre le textile au CO₂ : sans eau, sans déchets, à moindre coût",
    },
    summary: {
      en: "Our venture profile: waterless dyeing for natural fibers, starting with cotton.",
      fr: "Notre profil de start-up : la teinture sans eau pour les fibres naturelles, à commencer par le coton.",
    },
  },
];

export function formatNewsDate(date: string, locale: Locale) {
  if (!date) return "";
  const [y, m] = date.split("-").map(Number);
  if (!m) return String(y);
  return new Intl.DateTimeFormat(locale === "fr" ? "fr-FR" : "en-GB", {
    month: "long",
    year: "numeric",
  }).format(new Date(Date.UTC(y, m - 1, 1)));
}
