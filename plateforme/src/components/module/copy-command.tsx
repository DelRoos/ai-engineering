"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

/** Une commande à lancer dans le terminal, avec un bouton « Copier » (retour « Copié » pendant 2 s). */
export function CopyCommand({ command }: { command: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* Presse-papiers indisponible : la commande reste sélectionnable à la main. */
    }
  }

  return (
    <div className="flex items-start gap-2 rounded-xl border border-line bg-[#0c0c0f] py-1.5 pr-1.5 pl-4">
      <code className="min-w-0 flex-1 py-1 font-mono text-sm break-all text-fg">
        <span className="mr-2 text-accent select-none">$</span>
        {command}
      </code>
      <button
        type="button"
        onClick={copy}
        aria-label={copied ? "Commande copiée" : "Copier la commande"}
        className="flex h-8 shrink-0 items-center gap-1.5 rounded-lg border border-line-strong px-2.5 text-xs font-medium text-fg-muted transition-colors duration-200 hover:border-accent/60 hover:text-fg"
      >
        {copied ? <Check className="size-3.5 text-success" aria-hidden="true" /> : <Copy className="size-3.5" aria-hidden="true" />}
        <span aria-live="polite">{copied ? "Copié" : "Copier"}</span>
      </button>
    </div>
  );
}
