import Link from "next/link";
import { nav } from "@/content/landing";
import { repoIsExternal, site } from "@/content/site";
import { ButtonLink, GithubIcon, Logo, RepoLink } from "@/components/ui";
import { MobileMenu } from "./mobile-menu";

/**
 * Barre de navigation flottante, partagée par la landing et les pages du parcours.
 * - Sur la landing, les liens pointent vers les sections (#metier…) et la section en cours est signalée.
 * - Sur une autre page (`page="autre"`), les mêmes liens ramènent aux sections de la landing (/#metier…).
 * Le bouton de droite est volontairement secondaire : le seul bouton plein d'un écran est son action principale.
 */
export function Header({ page = "landing" }: { page?: "landing" | "commencer" | "module" | "projet" | "projets" }) {
  const onLanding = page === "landing";
  const items = nav.map((item) => ({ ...item, href: item.href.startsWith("/") || onLanding ? item.href : `/${item.href}` }));

  return (
    <header className="sticky top-3 z-50 px-3 sm:top-4 sm:px-4">
      <div className="nav-shell relative mx-auto flex h-14 max-w-6xl items-center justify-between gap-6 rounded-full border border-line bg-surface/90 pr-2 pl-5 shadow-[0_10px_40px_-15px_rgb(0_0_0/0.8)] backdrop-blur-md">
        <Link href={onLanding ? "#top" : "/"} className="flex items-center gap-2.5 font-semibold tracking-tight text-fg">
          <Logo className="size-7" />
          <span>{site.name}</span>
        </Link>

        <nav aria-label="Navigation principale" className="hidden items-center gap-1 md:flex">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              {...(onLanding ? { "data-nav": "" } : {})}
              aria-current={item.href === "/projets" && (page === "projets" || page === "projet") ? "page" : undefined}
              className="rounded-full px-3.5 py-2 text-sm text-fg-muted transition-colors duration-200 hover:bg-white/[0.06] hover:text-fg aria-[current]:bg-accent/12 aria-[current]:text-accent-1"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {repoIsExternal ? (
            <RepoLink variant="secondary" className="h-10 px-4 text-xs">
              <GithubIcon className="size-4" />
              <span className="hidden sm:inline">GitHub</span>
            </RepoLink>
          ) : page === "commencer" ? (
            <span className="hidden sm:block">
              <ButtonLink href="/" variant="secondary" className="h-10 px-5 text-xs">
                Accueil
              </ButtonLink>
            </span>
          ) : page === "projet" ? (
            <span className="hidden sm:block">
              <ButtonLink href="/projets" variant="secondary" className="h-10 px-5 text-xs">
                Tous les projets
              </ButtonLink>
            </span>
          ) : page === "module" ? (
            <span className="hidden sm:block">
              <ButtonLink href="/commencer" variant="secondary" className="h-10 px-5 text-xs">
                Tous les modules
              </ButtonLink>
            </span>
          ) : (
            <span className="hidden sm:block">
              <ButtonLink href="/commencer" variant="secondary" className="h-10 px-5 text-xs">
                Par où commencer ?
              </ButtonLink>
            </span>
          )}
          <MobileMenu items={items} ctaHref={page === "landing" ? "/commencer" : null} />
        </div>
      </div>
    </header>
  );
}
