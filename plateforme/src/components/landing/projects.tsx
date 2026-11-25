import Link from "next/link";
import { ArrowRight, FileSearch, Flag, Leaf, Rocket, ShieldCheck, TrendingUp, type LucideIcon } from "lucide-react";
import { projects } from "@/content/landing";
import { Section, SectionHeader, cn } from "@/components/ui";

const icons: Record<string, LucideIcon> = {
  "01": TrendingUp,
  "02": Leaf,
  "03": FileSearch,
  "04": Rocket,
  "05": ShieldCheck,
  "06": Flag,
};

/**
 * Aperçu du projet phare : une conversation avec l'assistant.
 * La réponse est figurée par des barres neutres : on n'invente aucun contenu juridique.
 */
function RagPreview() {
  return (
    <figure className="mt-8 flex-1 rounded-2xl border border-line bg-bg/70 p-5 sm:p-6" aria-label="Illustration d'une conversation avec l'assistant">
      <div className="space-y-4">
        <p className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-md bg-accent px-4 py-2.5 text-sm font-medium text-[#1a0d05]">
          Quelles démarches pour déclarer ma petite entreprise ?
        </p>
        <div className="max-w-[90%] rounded-2xl rounded-bl-md border border-line bg-surface p-4">
          <p className="text-xs font-semibold text-success">3 passages retrouvés dans les textes officiels</p>
          <div className="mt-3 space-y-2" aria-hidden="true">
            <div className="h-2 w-full rounded-full bg-fg/15" />
            <div className="h-2 w-11/12 rounded-full bg-fg/15" />
            <div className="h-2 w-2/3 rounded-full bg-fg/15" />
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-md border border-line px-2 py-1 text-xs text-fg-muted">Source 1, page 4</span>
            <span className="rounded-md border border-line px-2 py-1 text-xs text-fg-muted">Source 2, étape 2</span>
          </div>
        </div>
        <p className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-md bg-surface-2 px-4 py-2.5 text-sm text-fg">
          Et qui va gagner le prochain match ?
        </p>
        <p className="max-w-[90%] rounded-2xl rounded-bl-md border border-line bg-surface px-4 py-2.5 text-sm text-fg-muted">
          Je ne sais pas&nbsp;: ce n&apos;est pas dans les documents que je connais.
        </p>
      </div>
    </figure>
  );
}

function ProjectCard({
  item,
  className,
  featured = false,
}: {
  item: (typeof projects.items)[number];
  className?: string;
  featured?: boolean;
}) {
  const Icon = icons[item.number];
  return (
    <article
      className={cn(
        "relative flex flex-col overflow-hidden rounded-3xl border border-line bg-surface p-6 sm:p-8",
        featured && "ring-gradient border-transparent bg-surface-2",
        className,
      )}
    >
      {featured && (
        <div aria-hidden="true" className="absolute -top-32 -right-32 size-80 bg-[radial-gradient(closest-side,rgb(245_158_66/0.18),transparent)]" />
      )}
      <div className="relative flex items-start justify-between gap-4">
        <span className="flex size-12 items-center justify-center rounded-2xl bg-accent/12">
          <Icon className="size-6 text-accent" strokeWidth={1.75} aria-hidden="true" />
        </span>
        <span className="font-display text-sm font-semibold text-fg-subtle">Projet {item.number}</span>
      </div>
      <h3 className={cn("relative mt-6 font-bold tracking-tight text-fg", featured ? "text-3xl sm:text-4xl" : "text-xl")}>
        {item.title}
      </h3>
      <p className={cn("relative mt-3 leading-relaxed text-fg-muted", featured ? "max-w-xl text-lg" : "flex-1 text-sm")}>{item.text}</p>
      {featured && <RagPreview />}
      <ul className="relative mt-6 flex flex-wrap gap-2" aria-label="Technologies">
        {item.tags.map((tag) => (
          <li key={tag} className="rounded-full border border-line px-3 py-1 text-xs text-fg-muted">
            {tag}
          </li>
        ))}
      </ul>
    </article>
  );
}

/** Grille asymétrique : le projet 3 (cœur du métier) en vedette, le capstone en bandeau final. */
export function Projects() {
  const byNumber = Object.fromEntries(projects.items.map((p) => [p.number, p]));
  return (
    <Section id="projets">
      <SectionHeader size="xl" title={projects.title} intro={projects.intro} />

      <div className="mt-12 grid gap-4 sm:mt-16 lg:grid-cols-3">
        <ProjectCard item={byNumber["03"]} featured className="lg:col-span-2 lg:row-span-2" />

        {/* Mobile et tablette : les 5 autres projets en carrousel horizontal. Grand écran : la grille. */}
        <p className="mt-4 text-sm text-fg-subtle lg:hidden">Les 5 autres projets&nbsp;: fais glisser.</p>
        <div
          role="region"
          aria-label="Les autres projets"
          tabIndex={0}
          className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:-mx-6 sm:px-6 lg:contents"
        >
          {["01", "02", "04", "05", "06"].map((n) => (
            <ProjectCard key={n} item={byNumber[n]} className="w-[82%] shrink-0 snap-start sm:w-[45%] lg:w-auto" />
          ))}
        </div>
      </div>

      <Link
        href="/projets#grands-projets"
        className="group mt-4 flex flex-col gap-3 rounded-3xl border border-dashed border-line-strong p-6 transition-[border-color,background-color] duration-200 hover:border-accent/60 hover:bg-accent/[0.04] sm:flex-row sm:items-center sm:justify-between sm:p-8"
      >
        <span>
          <span className="block text-sm font-semibold text-fg-subtle">Et pour finir le parcours</span>
          <span className="mt-1 block text-xl font-bold text-fg group-hover:text-accent-1">
            Quatre grands projets, construits comme chez un vrai client
          </span>
          <span className="mt-1 block text-sm text-fg-muted">
            Assistant documentaire, assistant opérationnel, commercial virtuel, studio de contenu.
          </span>
        </span>
        <span className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-accent-1">
          Voir les projets
          <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
        </span>
      </Link>
    </Section>
  );
}
