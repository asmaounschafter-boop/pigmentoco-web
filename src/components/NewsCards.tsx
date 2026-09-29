import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { formatNewsDate, news, type NewsItem } from "@/i18n/news";

export function NewsCards({
  lang,
  limit,
  readLabel,
  items: source = news,
}: {
  lang: Locale;
  limit?: number;
  readLabel: string;
  items?: NewsItem[];
}) {
  const items = limit ? source.slice(0, limit) : source;
  return (
    <ul className="grid gap-5 md:grid-cols-3">
      {items.map((n) => (
        <li key={n.url}>
          <Link
            href={n.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-full flex-col rounded-[5px] border border-line bg-paper p-7 transition-all hover:-translate-y-1 hover:border-coral hover:shadow-[0_20px_40px_-24px_rgba(12,27,35,0.35)]"
          >
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-coral-deep">
              {n.source}
              {n.date && <span className="text-muted"> · {formatNewsDate(n.date, lang)}</span>}
            </p>
            <h3 className="font-display mt-4 text-2xl leading-snug">{n.title[lang]}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{n.summary[lang]}</p>
            <span className="mt-6 text-sm font-bold text-ink group-hover:text-coral-deep">
              {readLabel} <span aria-hidden>↗</span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
