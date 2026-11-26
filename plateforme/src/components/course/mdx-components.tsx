import type { ComponentProps, ReactNode } from "react";
import {
  AlertTriangle,
  BookOpenCheck,
  Bug,
  Compass,
  ExternalLink,
  Info,
  Languages,
  Lightbulb,
  ListChecks,
  PenLine,
  PlayCircle,
  Target,
} from "lucide-react";
import { exempleId, slugify } from "@/lib/slug";
import { cn } from "@/components/ui";
import { CodeBlock } from "./code-block";

/**
 * Composants MDX des cours. Contrat : docs/format-contenu.md § 4.
 * Le contenu de chaque composant est du Markdown placé entre ses balises.
 */

type WithChildren = { children?: ReactNode };

function textOf(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(textOf).join("");
  if (node && typeof node === "object" && "props" in node) return textOf((node.props as WithChildren).children);
  return "";
}

/* ---------- Blocs d'ouverture ---------- */

function Objectifs({ children }: WithChildren) {
  return (
    <section aria-labelledby="objectifs" className="not-prose my-10 rounded-3xl border border-line bg-surface p-6 sm:p-8">
      <h2 id="objectifs" className="m-0 flex items-center gap-2.5 border-0 p-0 text-lg font-bold text-fg">
        <Target className="size-5 text-accent" aria-hidden="true" />
        Objectifs
      </h2>
      <div className="cours-objectifs mt-4">{children}</div>
    </section>
  );
}

function Prerequis({ children }: WithChildren) {
  return (
    <aside className="not-prose my-8 flex gap-3.5 rounded-2xl border border-dashed border-line-strong px-5 py-4 text-fg-muted">
      <ListChecks className="mt-0.5 size-5 shrink-0 text-fg-subtle" aria-hidden="true" />
      <div className="cours-compact">
        <p className="font-semibold text-fg">Avant de commencer</p>
        {children}
      </div>
    </aside>
  );
}

function Pourquoi({ children }: WithChildren) {
  return (
    <section aria-label="Pourquoi ce chapitre" className="cours-pourquoi my-10 border-l-2 border-accent pl-6">
      <p className="mb-2 flex items-center gap-2 text-sm font-semibold text-accent">
        <Compass className="size-4" aria-hidden="true" />
        Pourquoi c&apos;est utile
      </p>
      {children}
    </section>
  );
}

/* ---------- Notions ---------- */

function Notion({ id, titre, children }: WithChildren & { id: string; titre: string }) {
  return (
    <section id={id} className="scroll-mt-28 pt-6" data-notion>
      <h2>{titre}</h2>
      {children}
    </section>
  );
}

/** Notion affichée seule sur la page d'une leçon : sans son titre, qui est le h1 de la page. */
export function LessonNotion({ id, children }: WithChildren & { id: string; titre: string }) {
  return (
    <section id={id} data-notion>
      {children}
    </section>
  );
}

function Exemple({ titre, children }: WithChildren & { titre?: string }) {
  return (
    <figure id={exempleId(titre)} className="cours-exemple my-8 scroll-mt-28 rounded-2xl border border-line bg-surface/60 p-5 sm:p-6">
      <figcaption className="mb-3 flex items-center gap-2 text-sm font-semibold text-fg">
        <BookOpenCheck className="size-4 text-accent" aria-hidden="true" />
        Exemple{titre ? ` : ${titre}` : ""}
      </figcaption>
      {children}
    </figure>
  );
}

function MiniExercice({ id, children }: WithChildren & { id?: string }) {
  return (
    <aside id={id ?? "a-toi-de-jouer"} className="cours-exercice ring-gradient my-8 scroll-mt-28 rounded-2xl bg-surface-2 p-5 sm:p-6">
      <p className="mb-3 flex items-center gap-2 text-sm font-semibold text-accent-1">
        <PenLine className="size-4 text-accent" aria-hidden="true" />À toi de jouer
      </p>
      {children}
    </aside>
  );
}

function Solution({ children }: WithChildren) {
  return (
    <details className="group/sol mt-5 rounded-xl border border-line bg-bg/60">
      <summary className="flex items-center justify-between gap-4 px-4 py-3 text-sm font-semibold text-fg transition-colors duration-200 hover:text-accent-1">
        <span className="group-open/sol:hidden">Voir la solution</span>
        <span className="hidden group-open/sol:inline">Masquer la solution</span>
        <span className="text-xs font-normal text-fg-subtle group-open/sol:hidden">Essaie d&apos;abord !</span>
      </summary>
      <div className="border-t border-line px-4 pb-1">{children}</div>
    </details>
  );
}

/* ---------- Encadrés ---------- */

function Callout({
  tone,
  label,
  icon: Icon,
  children,
}: WithChildren & { tone: string; label: string; icon: typeof Info }) {
  return (
    <aside className={cn("cours-compact my-7 flex gap-3.5 rounded-2xl border px-5 py-4", tone)}>
      <Icon className="mt-1 size-5 shrink-0" aria-hidden="true" />
      <div>
        <p className="font-semibold">{label}</p>
        <div className="text-fg-muted">{children}</div>
      </div>
    </aside>
  );
}

const Note = ({ children }: WithChildren) => (
  <Callout tone="border-line-strong bg-surface text-fg" label="À noter" icon={Info}>
    {children}
  </Callout>
);
const Astuce = ({ children }: WithChildren) => (
  <Callout tone="border-success/30 bg-success/[0.06] text-success" label="Astuce" icon={Lightbulb}>
    {children}
  </Callout>
);
const Attention = ({ children }: WithChildren) => (
  <Callout tone="border-accent-3/40 bg-accent-3/[0.08] text-accent-3" label="Attention" icon={AlertTriangle}>
    {children}
  </Callout>
);

/* ---------- Fin de chapitre ---------- */

function Erreur({ titre, children }: WithChildren & { titre: string }) {
  return (
    <article className="cours-compact my-5 rounded-2xl border border-line bg-surface p-5 sm:p-6">
      <h3 className="mt-0 flex items-start gap-2.5 text-base">
        <Bug className="mt-0.5 size-5 shrink-0 text-accent-3" aria-hidden="true" />
        <code className="text-[0.95em]">{titre}</code>
      </h3>
      <div className="mt-2">{children}</div>
    </article>
  );
}

function Resume({ children }: WithChildren) {
  return (
    <section id="resume" className="cours-resume ring-gradient my-12 scroll-mt-28 rounded-3xl bg-surface-2 p-6 sm:p-8">
      <h2 className="mt-0 border-0 pt-0">Résumé</h2>
      {children}
    </section>
  );
}

function Vocabulaire({ children }: WithChildren) {
  return (
    <section id="vocabulaire" className="my-12 scroll-mt-28">
      <h2 className="flex items-center gap-2.5">
        <Languages className="size-6 text-accent" aria-hidden="true" />
        Vocabulaire
      </h2>
      <p className="text-fg-muted">Les mots du métier vus dans ce chapitre. Ce sont ceux que tu entendras au travail et en entretien.</p>
      {children}
    </section>
  );
}

function Video({ url, titre, duree, poids }: { url?: string; titre: string; duree: string; poids: string }) {
  const available = Boolean(url && url !== "#");
  return (
    <aside className="my-8 flex items-center gap-4 rounded-2xl border border-line bg-surface p-5">
      <PlayCircle className="size-9 shrink-0 text-accent" strokeWidth={1.5} aria-hidden="true" />
      <div className="min-w-0 flex-1">
        <p className="font-semibold text-fg">{titre}</p>
        <p className="text-sm text-fg-subtle">
          Vidéo facultative, {duree}, {poids}. Le texte du cours suffit.
        </p>
      </div>
      {available ? (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex shrink-0 items-center gap-1.5 rounded-full border border-line-strong px-4 py-2 text-sm font-semibold text-fg transition-colors duration-200 hover:border-accent/60 hover:text-accent-1"
        >
          Regarder <ExternalLink className="size-3.5" aria-hidden="true" />
        </a>
      ) : (
        <span className="shrink-0 text-sm text-fg-subtle">Lien à venir</span>
      )}
    </aside>
  );
}

/* ---------- Éléments Markdown ---------- */

function H2(props: ComponentProps<"h2">) {
  const id = props.id ?? slugify(textOf(props.children));
  return <h2 {...props} id={id} className="scroll-mt-28" />;
}

function H3(props: ComponentProps<"h3">) {
  const id = props.id ?? slugify(textOf(props.children));
  return <h3 {...props} id={id} className="scroll-mt-28" />;
}

function A({ href = "", ...props }: ComponentProps<"a">) {
  const external = /^https?:\/\//.test(href);
  return <a href={href} {...props} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} />;
}

function Table(props: ComponentProps<"table">) {
  return (
    <div className="my-6 overflow-x-auto rounded-2xl border border-line">
      <table {...props} />
    </div>
  );
}

export const courseComponents = {
  Objectifs,
  Prerequis,
  Pourquoi,
  Notion,
  Exemple,
  MiniExercice,
  Solution,
  Note,
  Astuce,
  Attention,
  Erreur,
  Resume,
  Vocabulaire,
  Video,
  h2: H2,
  h3: H3,
  a: A,
  table: Table,
  pre: CodeBlock,
};
