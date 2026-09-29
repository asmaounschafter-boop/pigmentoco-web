import Link from "next/link";
import { Container } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="py-40">
      <Container className="text-center">
        <p className="font-display text-7xl text-coral">404</p>
        <h1 className="font-display mt-4 text-3xl">This page has faded. · Cette page a déteint.</h1>
        <Link href="/" className="mt-8 inline-block rounded-[5px] bg-coral px-6 py-3 text-sm font-bold text-paper">
          Home · Accueil
        </Link>
      </Container>
    </section>
  );
}
