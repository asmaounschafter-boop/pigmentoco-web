"use client";

import { useState } from "react";
import type { Locale } from "@/i18n/config";
import type { Dict } from "@/i18n/en";
import { NEWS_CATEGORIES, news, type NewsCategory } from "@/i18n/news";
import { NewsCards } from "./NewsCards";
import { Container } from "./ui";

type Filter = "all" | NewsCategory;

export function NewsFilter({
  lang,
  labels,
  readLabel,
}: {
  lang: Locale;
  labels: Dict["news"]["filters"];
  readLabel: string;
}) {
  const [active, setActive] = useState<Filter>("all");
  const filters: Filter[] = ["all", ...NEWS_CATEGORIES];
  const items = active === "all" ? news : news.filter((n) => n.categories.includes(active));

  return (
    <>
      {/* Full-width filter bar right under the page hero */}
      <div className="border-b border-line bg-sand">
        <Container className="flex flex-wrap items-center gap-x-4 gap-y-3 py-5">
          <p id="news-filter-label" className="mr-1 text-xs font-bold uppercase tracking-[0.15em] text-ink">
            {labels.title}
          </p>
          <div role="group" aria-labelledby="news-filter-label" className="flex flex-wrap gap-3">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setActive(f)}
                aria-pressed={active === f}
                className={`rounded-[5px] border px-5 py-2 text-sm uppercase tracking-[0.08em] transition-colors ${
                  active === f
                    ? "border-ink bg-ink font-semibold text-paper"
                    : "border-line bg-paper text-muted hover:border-coral hover:text-coral"
                }`}
              >
                {labels[f]}
              </button>
            ))}
          </div>
        </Container>
      </div>

      <section className="py-20 sm:py-24">
        <Container>
          {items.length ? (
            <NewsCards lang={lang} readLabel={readLabel} items={items} />
          ) : (
            <p className="text-muted">{labels.empty}</p>
          )}
        </Container>
      </section>
    </>
  );
}
