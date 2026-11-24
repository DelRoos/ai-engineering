import type { CSSProperties } from "react";
import Link from "next/link";
import { ArrowRight, Flag } from "lucide-react";
import { etapes } from "@/content/commencer";
import {
  etapesParcours,
  parcours,
  type EtapeParcours,
} from "@/content/landing";
import { ButtonLink, Section, SectionHeader, cn } from "@/components/ui";

const totalWeeks = etapesParcours.reduce((sum, p) => sum + p.weeks, 0);
const FILL_MS = 1600;

/** Ajoute à chaque étape sa semaine de début et de fin (S1 → S72). */
const withRanges = etapesParcours.map((p, i) => {
  const before = etapesParcours
    .slice(0, i)
    .reduce((sum, q) => sum + q.weeks, 0);
  return { ...p, from: before + 1, to: before + p.weeks };
});

function segmentColor(kind: EtapeParcours["kind"]) {
  if (kind === "fondations") return "bg-fg/35";
  if (kind === "consolidation") return "bg-fg/10";
  return "bg-gradient-accent";
}

/** Chaque segment se remplit à son tour : même vitesse pour toute la barre, de la semaine 1 à 72. */
function segmentTiming(fromWeek: number, weeks: number): CSSProperties {
  return {
    "--delay": `${Math.round(((fromWeek - 1) / totalWeeks) * FILL_MS)}ms`,
    "--dur": `${Math.round((weeks / totalWeeks) * FILL_MS)}ms`,
    "--ease": "linear",
  } as CSSProperties;
}

/** Numéro de l'étape (« Étape 3 » → 3) et nombre de modules, tirés de la liste des modules (/commencer). */
function etapeInfo(label: string) {
  const n = Number(label.replace(/\D/g, ""));
  const etape = etapes.find((e) => e.n === n);
  return {
    n,
    moduleCount: etape
      ? etape.modules.filter((m) => m.id !== "C").length
      : null,
  };
}

/** Même grille pour les etapesParcours et les consolidations : les colonnes restent alignées. */
const rowGrid =
  "grid gap-x-10 sm:grid-cols-[11rem_1fr] lg:grid-cols-[11rem_1.2fr_1fr]";

export function Parcours() {
  return (
    <Section id="parcours" tone="raised">
      <SectionHeader size="xl" title={parcours.title} intro={parcours.intro} />

      {/* Barre proportionnelle des 72 semaines */}
      <div data-reveal className="mt-12 sm:mt-16">
        <div className="flex items-end justify-between">
          <p className="text-sm text-fg-subtle">Semaine 1</p>
          <p className="font-display text-right text-sm text-fg-subtle">
            <span className="text-3xl font-bold text-fg">{totalWeeks}</span>{" "}
            semaines
          </p>
        </div>
        <div
          className="mt-4 flex h-3 gap-1"
          role="img"
          aria-label={`Répartition des ${totalWeeks} semaines entre les 7 étapes du parcours et 2 semaines de consolidation`}
        >
          {withRanges.map((p) => (
            <div
              key={p.id}
              className={cn("reveal-draw rounded-full", segmentColor(p.kind))}
              style={{ flexGrow: p.weeks, ...segmentTiming(p.from, p.weeks) }}
            />
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-fg-muted">
          <span className="flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-fg/40" /> Étape 0 :
            fondations
          </span>
          <span className="flex items-center gap-2">
            <span className="bg-gradient-accent size-2.5 rounded-full" /> Étapes
            1 à 6
          </span>
          <span className="flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-fg/15" /> Consolidation
          </span>
        </div>
      </div>

      {/* Frise */}
      <ol className="mt-10 border-t border-line sm:mt-12">
        {withRanges.map((p) =>
          p.kind === "consolidation" ? (
            <li
              key={p.id}
              className={cn(
                rowGrid,
                "border-b border-dashed border-line py-3 text-sm text-fg-subtle",
              )}
            >
              <span>Semaine {p.from}</span>
              <span>
                <span className="font-medium text-fg-muted">Consolidation</span>{" "}
                : rattrapage, révisions, projet libre
              </span>
            </li>
          ) : (
            <li key={p.id} className="border-b border-line">
              <Link
                href={`/commencer#etape-${etapeInfo(p.label).n}`}
                aria-label={`${p.label} : ${p.title}. Voir ses modules`}
                className={cn(
                  rowGrid,
                  "group relative -mx-4 gap-y-2 rounded-2xl px-4 py-5 pr-12 transition-colors duration-200 hover:bg-white/[0.035] sm:gap-y-3 sm:py-7 sm:pr-14",
                )}
              >
                <div className="flex items-baseline gap-3 sm:block">
                  <p
                    className={cn(
                      "text-sm font-semibold",
                      p.kind === "fondations" ? "text-fg-muted" : "text-accent",
                    )}
                  >
                    {p.label}
                  </p>
                  <p className="font-display text-fg sm:mt-1">
                    <span className="text-2xl font-bold sm:text-3xl">
                      {p.weeks}
                    </span>
                    <span className="ml-1.5 text-fg-muted">semaines</span>
                  </p>
                  <p className="hidden text-xs text-fg-subtle sm:mt-1 sm:block">
                    Semaines {p.from} à {p.to}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg leading-snug font-semibold text-pretty text-fg transition-colors duration-200 group-hover:text-accent-1 sm:text-xl">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-sm text-fg-subtle">
                    {etapeInfo(p.label).moduleCount} modules
                  </p>
                </div>
                {p.project && (
                  <p className="flex gap-2.5 text-sm leading-relaxed text-fg-muted sm:col-start-2 sm:text-base lg:col-start-auto">
                    <Flag
                      className="mt-0.5 size-4 shrink-0 text-accent sm:mt-1"
                      strokeWidth={2}
                      aria-label="Projet"
                    />
                    <span>{p.project}</span>
                  </p>
                )}
                <span
                  aria-hidden="true"
                  className="absolute top-6 right-3 flex size-8 items-center justify-center rounded-full border border-line-strong text-fg-subtle transition-[transform,color,border-color,background-color] duration-200 group-hover:translate-x-0.5 group-hover:border-accent/60 group-hover:bg-accent/10 group-hover:text-accent sm:top-8 sm:right-4"
                >
                  <ArrowRight className="size-4" />
                </span>
              </Link>
            </li>
          ),
        )}
      </ol>

      <div className="mt-10">
        <ButtonLink href="/commencer" variant="secondary" className="h-12 px-6">
          Voir tous les modules
          <ArrowRight
            className="size-4 transition-transform duration-200 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </ButtonLink>
      </div>
    </Section>
  );
}
