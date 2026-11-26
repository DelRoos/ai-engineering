import "server-only";
import { evaluate } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import rehypeKatex from "rehype-katex";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import { courseComponents, LessonNotion } from "@/components/course/mdx-components";

/**
 * Compile un chapitre MDX au build (composant serveur) :
 * tableaux GFM, formules KaTeX, code coloré par Shiki. Aucun JavaScript envoyé au navigateur
 * pour le rendu du cours. Les composants sont globaux (docs/format-contenu.md § 4).
 */
export async function renderChapter(body: string, { lesson = false }: { lesson?: boolean } = {}) {
  const { default: Content } = await evaluate(body, {
    ...runtime,
    remarkPlugins: [remarkGfm, remarkMath],
    remarkRehypeOptions: {
      footnoteLabel: "Sources",
      footnoteLabelTagName: "h2",
      footnoteBackLabel: (n: number) => `Revenir au renvoi ${n + 1} dans le texte`,
    },
    rehypePlugins: [
      rehypeKatex,
      [rehypePrettyCode, { theme: "github-dark-default", keepBackground: false, defaultLang: "text" }],
    ],
  });
  // Sur la page d'une leçon, le titre de la notion est déjà le titre de la page (h1).
  return <Content components={lesson ? { ...courseComponents, Notion: LessonNotion } : courseComponents} />;
}
