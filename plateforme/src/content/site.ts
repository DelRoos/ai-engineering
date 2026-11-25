/**
 * Configuration générale du site.
 * Le nom est provisoire : il suffit de le changer ici.
 */
export const site = {
  name: "Formation AI Engineer",
  shortName: "AI Engineer",
  description:
    "Une formation open source et gratuite pour devenir AI Engineer : 7 étapes, 43 modules, 6 projets publics, sur un PC de 8 Go de RAM sans carte graphique. En français, ancrée en Afrique francophone.",
  /**
   * URL du dépôt GitHub public. Si elle vaut null, les boutons « GitHub »
   * mènent à la section open source, qui annonce que le dépôt arrive bientôt.
   */
  githubUrl: "https://github.com/DelRoos/ai-engineering" as string | null,
  licences: {
    content: "CC BY-SA 4.0",
    code: "MIT",
  },
};

export const repoHref = site.githubUrl ?? "#open-source";
export const repoIsExternal = site.githubUrl !== null;
