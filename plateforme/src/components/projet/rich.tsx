import { Fragment } from "react";

/** Texte d'une fiche avec son code en ligne (`…`) rendu comme du code. Le reste reste du texte brut. */
export function Rich({ text }: { text: string }) {
  const parts = text.split(/`([^`]+)`/);
  return (
    <>
      {parts.map((p, i) =>
        i % 2 === 1 ? (
          <code key={i} className="rounded-md border border-line bg-bg/60 px-1.5 py-0.5 font-mono text-[0.85em] text-fg">
            {p}
          </code>
        ) : (
          <Fragment key={i}>{p}</Fragment>
        ),
      )}
    </>
  );
}
