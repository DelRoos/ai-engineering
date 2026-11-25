import { BookOpen, Briefcase, Check, Coins, FlaskConical, Lightbulb, Route, Send, ShieldCheck, TriangleAlert, Zap } from "lucide-react";
import { CopyCommand } from "@/components/module/copy-command";
import { LessonList } from "@/components/projet/lesson-links";
import type { Chapitre, Fiche } from "@/lib/fiches";

/** Les règles de validation, communes à tous les grands projets (docs/programme.md). */
const validation = [
  { check: "Les tests du projet", rule: "Tous les tests passent" },
  { check: "La grille de l'agent correcteur", rule: "Au moins 14/20" },
  { check: "L'examen oral avec l'IA", rule: "Au moins 70 % de réponses jugées correctes" },
];

/**
 * Le corps de la page d'un grand projet (un chapitre d'une famille) :
 * du client et de son problème jusqu'au résultat prouvé, dans l'ordre où un expert l'aborde.
 */
export function ProjetCorps({ famille, projet }: { famille: Fiche; projet: Chapitre }) {
  const p = projet.project!;
  return (
    <>
      {/* Le client et son problème */}
      <section aria-labelledby="titre-client" className="pt-14 sm:pt-20">
        <h2 id="titre-client" className="flex items-center gap-2.5 text-3xl font-bold tracking-tight text-fg sm:text-4xl">
          <Briefcase className="size-7 text-accent" aria-hidden="true" />
          Le client et son problème
        </h2>
        <dl className="mt-8 border-t border-line">
          {[
            { label: "Le client", text: p.client },
            { label: "Le problème", text: p.problem },
            { label: "Contraintes réelles", text: p.constraints },
          ].map((b) => (
            <div key={b.label} className="grid gap-1 border-b border-line py-5 sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-6">
              <dt className="font-semibold text-fg">{b.label}</dt>
              <dd className="leading-relaxed text-fg-muted">{b.text}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-6 flex gap-3 rounded-2xl border border-accent/30 bg-accent/[0.05] px-5 py-4 leading-relaxed text-fg">
          <Lightbulb className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
          <span>
            <span className="font-semibold">Pourquoi ce cas est différent&nbsp;: </span>
            {p.difference}
          </span>
        </p>
      </section>

      {/* L'approche de l'expert */}
      <section aria-labelledby="titre-approche" className="pt-16 sm:pt-20">
        <h2 id="titre-approche" className="flex items-center gap-2.5 text-2xl font-bold tracking-tight text-fg sm:text-3xl">
          <Route className="size-6 text-accent" aria-hidden="true" />
          Comment un expert l&apos;aborde
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-fg">{p.approach}</p>
        <p className="mt-4 leading-relaxed text-fg-muted">
          <span className="font-semibold text-fg">Ce qu&apos;il écarte, et pourquoi&nbsp;: </span>
          {p.rejected}
        </p>
      </section>

      {/* Les étapes */}
      <section aria-labelledby="titre-etapes" className="pt-16 sm:pt-20">
        <h2 id="titre-etapes" className="text-2xl font-bold tracking-tight text-fg sm:text-3xl">
          Les étapes, dans l&apos;ordre
        </h2>
        <p className="mt-3 text-fg-muted">Chaque étape produit quelque chose que tu peux vérifier avant de passer à la suivante.</p>
        <ol className="mt-6 border-t border-line">
          {projet.lessons.map((l, j) => (
            <li
              key={l.id}
              id={l.id}
              className="grid scroll-mt-24 grid-cols-[2.75rem_minmax(0,1fr)] items-baseline gap-x-3 border-b border-line py-5 sm:grid-cols-[3.5rem_minmax(0,1fr)] sm:gap-x-4"
            >
              <span className="font-display text-lg font-bold text-accent-1 tabular-nums">{j + 1}</span>
              <span className="text-lg leading-snug text-fg">{l.title}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* L'imprévu */}
      <section aria-labelledby="titre-imprevu" className="pt-16 sm:pt-20">
        <div className="rounded-3xl border border-dashed border-accent/50 p-6 sm:p-7">
          <h2 id="titre-imprevu" className="flex items-center gap-2.5 text-xl font-bold text-fg">
            <Zap className="size-5 text-accent" aria-hidden="true" />
            L&apos;imprévu
          </h2>
          <p className="mt-3 leading-relaxed text-fg-muted">{p.unexpected}</p>
          <p className="mt-3 text-sm leading-relaxed text-fg-subtle">
            Comme chez un vrai client. Les tests du projet le rejouent&nbsp;: prévois-le dès le départ.
          </p>
        </div>
      </section>

      {/* Critères */}
      <section aria-labelledby="titre-criteres" className="pt-16 sm:pt-20">
        <h2 id="titre-criteres" className="text-2xl font-bold tracking-tight text-fg sm:text-3xl">
          C&apos;est réussi quand
        </h2>
        <ul className="mt-6 space-y-4">
          {p.criteria.map((c) => (
            <li key={c} className="flex gap-3.5">
              <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-success/15">
                <Check className="size-3.5 text-success" strokeWidth={3} aria-hidden="true" />
              </span>
              <span className="leading-relaxed text-fg">{c}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Ce qui se vend */}
      <section aria-labelledby="titre-vente" className="pt-16 sm:pt-20">
        <article className="rounded-3xl border border-line bg-surface p-6 sm:p-7">
          <Coins className="size-7 text-accent" strokeWidth={1.75} aria-hidden="true" />
          <h2 id="titre-vente" className="mt-5 text-xl font-bold text-fg">
            Ce qui se vend
          </h2>
          <p className="mt-2 leading-relaxed text-fg-muted">{p.business}</p>
          <p className="mt-4 flex gap-2.5 text-sm leading-relaxed text-fg-subtle">
            <TriangleAlert className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
            Des ordres de grandeur pour raisonner. Vérifie les prix et les coûts du moment avant de proposer une offre.
          </p>
        </article>
      </section>

      {/* À revoir */}
      {p.review.length > 0 && (
        <section aria-labelledby="titre-revoir" className="pt-16 sm:pt-20">
          <h2 id="titre-revoir" className="flex items-center gap-2.5 text-2xl font-bold tracking-tight text-fg sm:text-3xl">
            <BookOpen className="size-6 text-accent" aria-hidden="true" />
            Pour réussir, revois
          </h2>
          <p className="mt-3 text-fg-muted">Les leçons du parcours qui servent ici. Chacune s&apos;ouvre dans un nouvel onglet.</p>
          <div className="mt-6">
            <LessonList lessons={p.review} />
          </div>
        </section>
      )}

      {/* Valider et montrer */}
      <section aria-labelledby="titre-valider" className="pt-16 sm:pt-20">
        <h2 id="titre-valider" className="text-2xl font-bold tracking-tight text-fg sm:text-3xl">
          Valider, puis le montrer
        </h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-3">
          {validation.map((v) => (
            <li key={v.check} className="rounded-2xl border border-line bg-surface p-5">
              <p className="font-semibold text-fg">{v.check}</p>
              <p className="mt-2 flex items-start gap-2 text-sm text-fg-muted">
                <ShieldCheck className="mt-0.5 size-4 shrink-0 text-success" aria-hidden="true" />
                {v.rule}
              </p>
            </li>
          ))}
        </ul>
        <article className="mt-4 rounded-3xl border border-line bg-surface p-6 sm:p-7">
          <FlaskConical className="size-7 text-accent" strokeWidth={1.75} aria-hidden="true" />
          <h3 className="mt-5 text-lg font-bold text-fg">Vérifier ton projet</h3>
          <p className="mt-2 leading-relaxed text-fg-muted">
            Le code, les données et les tests vivent dans ton dépôt. La plateforme ne connaît pas ton travail&nbsp;: tout se
            vérifie sur ton PC.
          </p>
          <p className="mt-5 mb-2 text-sm text-fg-subtle">Dans ton dépôt&nbsp;:</p>
          <CopyCommand command={`python outils/check.py ${famille.folder}/${String(projet.n).padStart(2, "0")}-${projet.slug}`} />
        </article>
        <p className="mt-6 flex gap-3.5 leading-relaxed text-fg">
          <Send className="mt-1 size-4 shrink-0 text-accent" aria-hidden="true" />
          <span>
            <span className="font-semibold">Pour ton portfolio&nbsp;: </span>
            {p.portfolio}
          </span>
        </p>
      </section>
    </>
  );
}
