import Link from "next/link";
import { nav } from "@/content/landing";
import { site } from "@/content/site";
import { Container, Logo } from "@/components/ui";

/** Pied de page partagé. Hors de la landing, les liens ramènent aux sections de la landing (/#metier…). */
export function Footer({ onLanding = true }: { onLanding?: boolean }) {
  return (
    <footer className="border-t border-line py-12">
      <Container className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <Logo className="size-6" id="logo-g-footer" />
          <span className="font-semibold tracking-tight text-fg">{site.name}</span>
        </Link>
        <nav aria-label="Pied de page" className="flex flex-wrap gap-x-6 gap-y-2">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href.startsWith("/") || onLanding ? item.href : `/${item.href}`}
              className="text-sm text-fg-muted transition-colors duration-200 hover:text-fg"
            >
              {item.label}
            </a>
          ))}
          <Link href="/commencer" className="text-sm text-fg-muted transition-colors duration-200 hover:text-fg">
            Par où commencer
          </Link>
        </nav>
        <p className="text-xs text-fg-subtle">
          Contenus sous licence {site.licences.content}, code sous licence {site.licences.code}
        </p>
      </Container>
    </footer>
  );
}
