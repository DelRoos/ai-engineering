import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { site } from "@/content/site";
import { Logo } from "@/components/ui";

/**
 * En-tête des pages de cours : retour à l'accueil, fil d'Ariane, avancement.
 * Une barre fine en haut montre la progression de lecture (CSS seul, navigateurs récents).
 */
export function CourseHeader({
  phaseLabel,
  moduleTitle,
  moduleHref,
  position,
}: {
  phaseLabel: string;
  moduleTitle: string;
  moduleHref: string;
  position?: string;
}) {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/95 backdrop-blur-md">
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-fg focus:px-4 focus:py-2 focus:text-sm focus:text-bg"
      >
        Aller au contenu
      </a>
      <div aria-hidden="true" className="reading-progress bg-gradient-accent absolute inset-x-0 bottom-0 h-0.5 origin-left" />
      <div className="mx-auto flex h-16 max-w-[90rem] items-center gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-2.5 font-semibold tracking-tight text-fg" aria-label={`${site.name} : accueil`}>
          <Logo className="size-7" />
          <span className="hidden sm:inline">{site.name}</span>
        </Link>
        <ChevronRight className="hidden size-4 shrink-0 text-fg-subtle sm:block" aria-hidden="true" />
        <nav aria-label="Fil d'Ariane" className="flex min-w-0 items-center gap-2 text-sm">
          <span className="hidden shrink-0 text-fg-subtle md:inline">{phaseLabel}</span>
          <ChevronRight className="hidden size-4 shrink-0 text-fg-subtle md:block" aria-hidden="true" />
          <a href={moduleHref} className="truncate font-medium text-fg-muted transition-colors duration-200 hover:text-fg">
            {moduleTitle}
          </a>
        </nav>
        {position && <p className="ml-auto hidden shrink-0 text-sm text-fg-subtle sm:block">{position}</p>}
      </div>
    </header>
  );
}
