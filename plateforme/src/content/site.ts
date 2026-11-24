/**
 * Configuration générale du site.
 * Le nom est provisoire : il suffit de le changer ici.
 */
export const site = {
  name: "Formation AI Engineer",
  shortName: "AI Engineer",
  description:
    "Une formation open source et gratuite pour devenir AI Engineer : 72 semaines, 6 projets publics, sur un PC de 8 Go de RAM sans carte graphique. En français, ancrée en Afrique francophone.",
  /**
   * URL du dépôt GitHub public. Tant qu'elle vaut null, les boutons « GitHub »
   * mènent à la section open source, qui annonce que le dépôt arrive bientôt.
   * TODO : renseigner l'URL quand le dépôt sera public.
   */
  githubUrl: null as string | null,
  licences: {
    content: "CC BY-SA 4.0",
    code: "MIT",
  },
};

export const repoHref = site.githubUrl ?? "#open-source";
export const repoIsExternal = site.githubUrl !== null;
