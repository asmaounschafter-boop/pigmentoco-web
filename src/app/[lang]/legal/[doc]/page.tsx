import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CONTACT_EMAIL } from "@/i18n/config";
import { resolvePage } from "@/i18n/page";
import { Container, PageHero } from "@/components/ui";

const LEGAL_DOCS = ["privacy", "terms", "cookies"] as const;
type LegalDoc = (typeof LEGAL_DOCS)[number];

const isLegalDoc = (value: string): value is LegalDoc => (LEGAL_DOCS as readonly string[]).includes(value);

export function generateStaticParams() {
  return LEGAL_DOCS.map((doc) => ({ doc }));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/legal/[doc]">): Promise<Metadata> {
  const { lang, dict } = await resolvePage(params);
  const { doc } = await params;
  if (!isLegalDoc(doc)) return {};
  const d = dict.legal.docs[doc];
  return { title: d.title, description: d.short, alternates: { canonical: `/${lang}/legal/${doc}` } };
}

export default async function LegalPage({ params }: PageProps<"/[lang]/legal/[doc]">) {
  const { dict } = await resolvePage(params);
  const { doc } = await params;
  if (!isLegalDoc(doc)) notFound();
  const d = dict.legal.docs[doc];

  return (
    <>
      <PageHero eyebrow={dict.footer.legal} title={d.title} body={d.short} />
      <section className="py-20 sm:py-24">
        <Container>
          {/* Placeholder until the legal text is written */}
          <p className="max-w-2xl text-lg leading-relaxed text-muted">
            {dict.legal.pending}{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-coral hover:underline">
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </Container>
      </section>
    </>
  );
}
