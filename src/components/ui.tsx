import Link from "next/link";
import type { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1380px] px-5 sm:px-8 ${className}`}>{children}</div>;
}

export function Eyebrow({ children, tone = "coral" }: { children: ReactNode; tone?: "coral" | "light" }) {
  return (
    <p
      className={`mb-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] ${
        tone === "coral" ? "text-coral-deep" : "text-coral-soft"
      }`}
    >
      <span className="h-px w-6 bg-current" aria-hidden />
      {children}
    </p>
  );
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost-light" | "ghost-dark";
  external?: boolean;
};

export function Button({ href, children, variant = "primary", external }: ButtonProps) {
  const styles = {
    primary: "bg-coral text-paper hover:bg-coral-deep",
    "ghost-light": "border border-paper/30 text-paper hover:border-paper hover:bg-paper/10",
    "ghost-dark": "border border-ink/20 text-ink hover:border-ink hover:bg-ink/5",
  }[variant];
  const cls = `group inline-flex items-center gap-2 rounded-[5px] px-6 py-3 text-sm font-bold transition-colors ${styles}`;
  const inner = (
    <>
      {children}
    </>
  );
  if (external || href.startsWith("mailto:"))
    return (
      <a href={href} className={cls} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {inner}
      </a>
    );
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

/** Slow-moving blurred color fields: dye diffusing through a fluid. Pure CSS, no JS. */
export function Bloom({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div className="absolute -left-[10%] top-[5%] h-[70%] w-[55%] rounded-full bg-coral opacity-55 blur-[110px] animate-drift-a" />
      <div className="absolute right-[-5%] top-[25%] h-[65%] w-[50%] rounded-full bg-lagoon opacity-70 blur-[120px] animate-drift-b" />
      <div className="absolute bottom-[-25%] left-[30%] h-[60%] w-[45%] rounded-full bg-coral-light opacity-30 blur-[120px] animate-drift-c" />
      <div className="absolute inset-0 bg-[radial-gradient(transparent_0,var(--color-deep)_85%)] opacity-60" />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  body,
  singleLineTitle = false,
}: {
  eyebrow: string;
  title: string;
  body: string;
  /** Keep the title on one line on wide screens (it still wraps on smaller ones). */
  singleLineTitle?: boolean;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-deep pb-20 pt-36 text-paper sm:pb-28 sm:pt-44">
      <Bloom className="opacity-70" />
      <Container className="relative">
        <Eyebrow tone="light">{eyebrow}</Eyebrow>
        <h1
          className={`font-display max-w-4xl text-4xl leading-[1.05] sm:text-6xl ${
            singleLineTitle ? "xl:max-w-none xl:whitespace-nowrap" : ""
          }`}
        >
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper/75">{body}</p>
      </Container>
    </section>
  );
}

/**
 * Placeholder for brand photography. Pass `src` once the real image is in /public
 * and it renders the photo instead.
 */
export function ImageSlot({
  label,
  hint,
  src,
  alt = "",
  className = "",
}: {
  label: string;
  hint?: string;
  src?: string;
  alt?: string;
  className?: string;
}) {
  if (src)
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={src} alt={alt} className={`h-full w-full rounded-[5px] object-cover ${className}`} />
    );
  return (
    <div
      className={`relative flex items-end overflow-hidden rounded-[5px] bg-gradient-to-br from-coral-soft via-sand to-[#d5d9ff] p-5 ${className}`}
    >
      <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,transparent_0_14px,rgba(5,10,58,0.05)_14px_15px)]" />
      <div className="relative rounded-[5px] bg-paper/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted backdrop-blur">
        {label}
        {hint ? ` · ${hint}` : ""}
      </div>
    </div>
  );
}

export function CtaBand({ title, body, button, href }: { title: string; body: string; button: string; href: string }) {
  return (
    <section className="px-5 py-20 sm:px-8">
      <div className="relative isolate mx-auto max-w-[1380px] overflow-hidden rounded-[5px] bg-sea px-8 py-16 text-paper sm:px-16 sm:py-20">
        <Bloom className="opacity-60" />
        <div className="relative flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-display text-4xl sm:text-5xl">{title}</h2>
            <p className="mt-4 max-w-xl text-paper/75 xl:max-w-none xl:whitespace-nowrap">{body}</p>
          </div>
          <Button href={href}>{button}</Button>
        </div>
      </div>
    </section>
  );
}
