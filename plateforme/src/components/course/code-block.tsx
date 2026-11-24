"use client";

import { Check, Copy } from "lucide-react";
import { useRef, useState, type ComponentProps } from "react";

/** Bloc de code avec bouton « Copier » (retour visuel « Copié » pendant 2 s). */
export function CodeBlock(props: ComponentProps<"pre">) {
  const ref = useRef<HTMLPreElement>(null);
  const [copied, setCopied] = useState(false);

  async function copy() {
    const text = ref.current?.innerText ?? "";
    try {
      await navigator.clipboard.writeText(text.replace(/\n$/, ""));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* Presse-papiers indisponible (page non sécurisée) : on ne fait rien. */
    }
  }

  // Les sorties de programme (bloc « text ») n'ont pas de bouton : on ne les copie pas.
  const isOutput = (props as Record<string, unknown>)["data-language"] === "text";
  if (isOutput) return <pre {...props} />;

  return (
    <div className="group/code relative">
      <pre ref={ref} {...props} />
      <button
        type="button"
        onClick={copy}
        aria-label={copied ? "Code copié" : "Copier le code"}
        className="absolute top-2.5 right-2.5 flex h-8 items-center gap-1.5 rounded-lg border border-line-strong bg-surface-2/90 px-2.5 text-xs font-medium text-fg-muted opacity-100 transition-[opacity,color,border-color] duration-200 hover:border-accent/60 hover:text-fg focus-visible:opacity-100 sm:opacity-60 sm:group-hover/code:opacity-100"
      >
        {copied ? <Check className="size-3.5 text-success" aria-hidden="true" /> : <Copy className="size-3.5" aria-hidden="true" />}
        <span aria-live="polite">{copied ? "Copié" : "Copier"}</span>
      </button>
    </div>
  );
}
