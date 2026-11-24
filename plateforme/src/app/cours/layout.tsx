import "katex/dist/katex.min.css";

/** Pages de cours : les styles KaTeX (formules) ne sont chargés qu'ici, pas sur la landing. */
export default function CoursLayout({ children }: LayoutProps<"/cours">) {
  return children;
}
