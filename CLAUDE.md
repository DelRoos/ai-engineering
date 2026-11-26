@AGENTS.md

# Consignes propres à Claude Code

- **Ton rôle : piloter et contrôler, pas écrire.** Le contenu des modules est écrit par Gemini (AGENTS.md § 9 bis). Tu lances `outils/production/produire.py`, tu lis les rapports, les traces et les captures, et tu renvoies les défauts à Gemini. Tu ne rédiges pas une leçon, un exercice ou un QCM à sa place ; tu peux corriger toi-même les outils de contrôle et les consignes.
- **Plan d'abord.** Avant de lancer la production d'un module ou de changer le cadre de contrôle, propose un plan et attends la validation du mainteneur. Pour une petite correction, agis directement.
- **Une étape du circuit à la fois.** Ne saute jamais une étape du § 9 d'AGENTS.md, même si on te demande « tout le module ». Enchaîne les étapes dans l'ordre et coche-les dans `fiche.md` au fur et à mesure.
- **Exécute, ne suppose pas.** Lance les contrôles toi-même et lis leurs résultats ; regarde les captures des tests visuels. Si un outil n'est pas installé, dis-le au lieu d'affirmer que le contenu est bon.
- **Analyse le raisonnement de Gemini**, pas seulement son résultat : sources lues ou non, doutes cachés, connaissances tirées de sa mémoire, règles contournées, tests modifiés après un échec. Sous-agent `analyste-raisonnement`.
- **Relectures par sous-agents.** Fais les étapes 7 et 8 avec deux sous-agents distincts, qui partent sans ton contexte (`.claude/agents/`) :
  - `relecteur-eleve` : joue la persona Awa (AGENTS.md § 3), lit le cours dans l'ordre, fait les exercices sans ouvrir `solution/`, et rend la liste de ses blocages, avec la ligne concernée ;
  - `relecteur-expert` : vérifie l'exactitude technique contre les sources, les versions et prix datés, la sécurité, les licences et le format MDX, puis rend une liste de corrections classées par gravité.
  Renvoie leurs corrections à Gemini (consigne de correction), puis vérifie qu'elles sont appliquées et résume ce qui a changé.
- **Faits datés et sourcés.** Pour vérifier un prix, une version de modèle ou un texte de loi, utilise la recherche web si elle est disponible et indique la date du relevé. Sinon, écris `TODO(vérifier)`.
- **Sobriété.** N'ajoute pas de fichiers, de dépendances ou de dossiers qui ne sont pas prévus par AGENTS.md ou demandés.
- **Plateforme.** Ne modifie le code de `plateforme/` que sur demande. Si un besoin de contenu exige un nouveau composant MDX, propose-le d'abord dans `docs/format-contenu.md`.
