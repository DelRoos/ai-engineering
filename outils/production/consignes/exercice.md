# Tâche : un exercice

<<contexte>>

## L'exercice à produire

- **Identifiant** : <<exercice_id>>
- **Dossier** : `<<dossier_exercice>>`
- **Ligne de la fiche** : <<exercice_ligne>>
- **Leçons qu'il entraîne** (lis-les) : <<lecons>>

Modèle à copier : `templates/exercice/`. Règles : `docs/guide-pedagogique.md` § 5 et § 6,
`AGENTS.md` § 10.

## Ordre de travail (obligatoire)

1. **`solution/`** : la solution de référence, simple, lisible, commentée<<regle_commentaires>>.
2. **`tests/`** : `conftest.py` copié du modèle, puis `test_exercice.py`. Chaque `assert` a un
   message en français qui dit ce qui était attendu, ce qui a été obtenu et une piste. Utilise
   des valeurs **différentes** de celles de l'énoncé, et teste les cas limites. Un test qui
   vérifie seulement un type, ou une valeur codée en dur dans l'énoncé, est refusé.
3. **`starter/`** : la même signature que la solution, avec un corps qui lève
   `NotImplementedError("À toi de jouer : …")`. Il doit se charger sans erreur.
4. **`ENONCE.md`** : front matter (voir `docs/format-contenu.md` § 2.2), contexte local,
   ce qu'il faut faire, exemples, commande de vérification. Il suffit, avec le cours, pour réussir.
5. **`indices.md`** : 3 indices dépliables, du plus léger au plus précis, **jamais** le code
   complet ; plus un indice pour l'erreur la plus probable.
6. Données éventuelles : petites (moins de 5 Mo), dans le dossier, avec leur source et licence.

Les tests tournent sans réseau, en moins de 30 secondes et sous 1 Go de mémoire.

## Après toi

Tu ne peux pas lancer les tests : le pilote le fait (`python outils/check.py <<dossier_exercice>> --production`).
Il vérifie que la solution passe, que le starter échoue proprement, que les tests refusent
une réponse qui ne calcule rien et qu'ils attrapent des versions fausses de ta solution
(opérateurs inversés, constantes changées, réponses vides). S'il signale des versions
« survivantes », **renforce les tests**, ne change pas la solution pour les contourner.
Relis donc tes tests avec soin : pour chaque test, quelle erreur de l'apprenant attrape-t-il ?
Ajoute la partie « Exercice <<exercice_id>> » à `<<journal>>`.
