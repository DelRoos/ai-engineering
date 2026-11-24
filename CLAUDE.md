@AGENTS.md

# Consignes propres à Claude Code

- **Plan d'abord.** Avant de produire ou de refondre un module, propose un plan (fichiers, objectifs, découpage) et attends la validation du mainteneur. Pour une petite correction, agis directement.
- **Une étape du circuit à la fois.** Ne saute jamais une étape du § 9 d'AGENTS.md, même si on te demande « tout le module ». Enchaîne les étapes dans l'ordre et coche-les dans `fiche.md` au fur et à mesure.
- **Exécute, ne suppose pas.** Lance les tests sur `solution/` et sur `starter/` avant d'écrire le cours. Exécute chaque exemple de code du cours avant de le publier. Si un outil n'est pas installé, dis-le au lieu d'affirmer que le code fonctionne.
- **Relectures par sous-agents.** Fais les étapes 7 et 8 avec deux sous-agents distincts, qui partent sans ton contexte :
  - *relecteur élève* : joue la persona Awa (AGENTS.md § 3), lit le cours dans l'ordre, fait les exercices sans ouvrir `solution/`, et rend la liste de ses blocages, avec la ligne concernée ;
  - *relecteur expert* : vérifie l'exactitude technique, les versions et prix datés, la sécurité, les licences et le format MDX, puis rend une liste de corrections classées par gravité.
  Applique ensuite les corrections toi-même, puis résume ce qui a changé.
- **Vérifie le MDX.** Après avoir écrit un `.mdx`, relis-le pour les pièges listés dans `docs/format-contenu.md` (`<` et `{` dans le texte, commentaires HTML, lignes vides autour des composants).
- **Faits datés et sourcés.** Pour un prix, une version de modèle ou un texte de loi, utilise la recherche web si elle est disponible et indique la date du relevé. Sinon, écris `TODO(vérifier)`.
- **Sobriété.** N'ajoute pas de fichiers, de dépendances ou de dossiers qui ne sont pas prévus par AGENTS.md ou demandés.
- **Plateforme.** Ne modifie le code de `plateforme/` que sur demande. Si un besoin de contenu exige un nouveau composant MDX, propose-le d'abord dans `docs/format-contenu.md`.
