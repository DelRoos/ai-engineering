/** Bandeau affiché sur le module de démonstration (plateforme/demo). */
export function DemoBanner() {
  return (
    <p className="mb-8 rounded-2xl border border-accent/40 bg-accent/[0.08] px-5 py-3.5 text-sm leading-relaxed text-accent-1">
      <strong className="font-semibold">Chapitre de démonstration.</strong> Il sert à tester l&apos;affichage des cours. Ce
      n&apos;est pas un vrai cours de la formation : les vrais modules suivront le circuit de production.
    </p>
  );
}
