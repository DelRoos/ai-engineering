import type { CSSProperties } from "react";
import Link from "next/link";
import { ArrowRight, Flag } from "lucide-react";
import { etapes } from "@/content/commencer";
import { etapesParcours, parcours, type EtapeParcours } from "@/content/landing";
import { ButtonLink, Section, SectionHeader, cn } from "@/components/ui";

const FILL_MS = 1600;
/** Largeur d'une pause de consolidation dans la barre (elle n'a pas de module). */
const PAUSE_WEIGHT = 0.6;

/** Numéro de l'étape (« Étape 3 » → 3) et nombre de modules, tirés de la liste des modules (/commencer). */
function etapeInfo(label: string) {
  const n = Number(label.replace(/\D/g, ""));
  const etape = etapes.find((e) => e.n === n);
  return { n, moduleCount: etape ? etape.modules.filter((m) => m.id !== "C").length : 0 };
}

/** Chaque segment pèse son nombre de modules : la barre montre où se trouve la matière, pas le temps. */
const rows = etapesParcours.map((p) => ({
  ...p,
  ...etapeInfo(p.label),
  weight: p.kind === "consolidation" ? PAUSE_WEIGHT : etapeInfo(p.label).moduleCount,
}));
const totalWeight = rows.reduce((sum, r) => sum + r.weight, 0);
const totalModules = rows.reduce((sum, r) => sum + (r.kind === "consolidation" ? 0 : r.moduleCount), 0);

function segmentColor(kind: EtapeParcours["kind"]) {
  if (kind === "fondations") return "bg-fg/35";
  if (kind === "consolidation") return "bg-fg/10";
  return "bg-gradient-accent";
}

/** Chaque segment se remplit à son tour, à vitesse constante sur toute la barre. */
function segmentTiming(index: number): CSSProperties {
  const before = rows.slice(0, index).reduce((sum, r) => sum + r.weight, 0);
  return {
    "--delay": `${Math.round((before / totalWeight) * FILL_MS)}ms`,
    "--dur": `${Math.round((rows[index].weight / totalWeight) * FILL_MS)}ms`,
    "--ease": "linear",
  } as CSSProperties;
}

/** Même grille pour les étapes et les consolidations : les colonnes restent alignées. */
const rowGrid = "grid gap-x-10 sm:grid-cols-[11rem_1fr] lg:grid-cols-[11rem_1.2fr_1fr]";

export function Parcours() {
  return (
    <Section id="parcours" tone="raised">
      <SectionHeader size="xl" title={parcours.title} intro={parcours.intro} />

      {/* Barre : la place de chaque étape, en nombre de modules */}
      <div data-reveal className="mt-12 sm:mt-16">
        <div className="flex items-end justify-between">
          <p className="text-sm text-fg-subtle">Premier code</p>
          <p className="font-display text-right text-sm text-fg-subtle">
            <span className="text-3xl font-bold text-fg">{totalModules}</span> modules
          </p>
        </div>
        <div
          className="mt-4 flex h-3 gap-1"
          role="img"
          aria-label={`Les ${totalModules} modules répartis entre les 7 étapes du parcours, avec deux pauses de consolidation`}
        >
          {rows.map((r, i) => (
            <div
              key={r.id}
              className={cn("reveal-draw rounded-full", segmentColor(r.kind))}
              style={{ flexGrow: r.weight, ...segmentTiming(i) }}
            />
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-fg-muted">
          <span className="flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-fg/40" /> Étape 0&nbsp;: fondations
          </span>
          <span className="flex items-center gap-2">
            <span className="bg-gradient-accent size-2.5 rounded-full" /> Étapes 1 à 6
          </span>
          <span className="flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-fg/15" /> Consolidation
          </span>
        </div>
      </div>

      {/* Frise */}
      <ol className="mt-10 border-t border-line sm:mt-12">
        {rows.map((r) =>
          r.kind === "consolidation" ? (
            <li key={r.id} className={cn(rowGrid, "border-b border-dashed border-line py-3 text-sm text-fg-subtle")}>
              <span className="font-medium text-fg-muted">Consolidation</span>
              <span>Rattrapage, révisions, projet libre</span>
            </li>
          ) : (
            <li key={r.id} className="border-b border-line">
              <Link
                href={`/commencer#etape-${r.n}`}
                aria-label={`${r.label} : ${r.title}. Voir ses modules`}
                className={cn(
                  rowGrid,
                  "group relative -mx-4 gap-y-2 rounded-2xl px-4 py-5 pr-12 transition-colors duration-200 hover:bg-white/[0.035] sm:gap-y-3 sm:py-7 sm:pr-14",
                )}
              >
                <div className="flex items-baseline gap-3 sm:block">
                  <p className={cn("text-sm font-semibold", r.kind === "fondations" ? "text-fg-muted" : "text-accent")}>{r.label}</p>
                  <p className="font-display text-fg sm:mt-1">
                    <span className="text-2xl font-bold sm:text-3xl">{r.moduleCount}</span>
                    <span className="ml-1.5 text-fg-muted">modules</span>
                  </p>
                </div>
                <h3 className="text-lg leading-snug font-semibold text-pretty text-fg transition-colors duration-200 group-hover:text-accent-1 sm:text-xl">
                  {r.title}
                </h3>
                {r.project && (
                  <p className="flex gap-2.5 text-sm leading-relaxed text-fg-muted sm:col-start-2 sm:text-base lg:col-start-auto">
                    <Flag className="mt-0.5 size-4 shrink-0 text-accent sm:mt-1" strokeWidth={2} aria-label="Projet" />
                    <span>{r.project}</span>
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
          <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
        </ButtonLink>
      </div>
    </Section>
  );
}
