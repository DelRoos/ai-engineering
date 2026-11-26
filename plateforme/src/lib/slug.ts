/** Transforme un titre en ancre d'URL : « Erreurs fréquentes » → « erreurs-frequentes ». */
export function slugify(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/** Ancre d'un exemple : même calcul dans le sommaire de la leçon et dans le composant <Exemple>. */
export function exempleId(titre?: string | null): string {
  return titre ? `exemple-${slugify(titre)}` : "exemple";
}
