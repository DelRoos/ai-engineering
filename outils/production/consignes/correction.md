# Correction demandée

Ta production précédente pour cette tâche a été refusée par les contrôles. Voici le rapport.
Chaque ligne « bloquant » doit disparaître. Les « alertes » doivent être corrigées si elles sont
justes ; sinon, explique dans le journal pourquoi tu les laisses.

```yaml
<<rapport>>
```

## Comment corriger

- Corrige **la cause**, pas le symptôme. Une citation introuvable se corrige en relisant la
  page et en recopiant la vraie phrase, ou en retirant le fait — jamais en changeant
  l'affirmation pour qu'elle colle sans preuve.
- Ne touche pas à ce qui est juste.
- **La source prime sur l'exemple du relecteur.** Si une correction proposée par un relecteur
  contredit une nuance de la source (une version de Windows, un « en général »), suis la source
  et écris l'écart au journal.
- **Aucune régression** : relis les corrections des relectures précédentes (dossier `audits/`,
  fichiers `relecture-*`) et vérifie que ta nouvelle version ne revient sur aucune d'elles.
- **Page traduite automatiquement** : si une page d'aide en français porte des défauts de
  traduction visibles, elle ne prouve pas un libellé d'interface. Garde le libellé avec
  `TODO(vérifier): libellé exact de l'interface`.
- Ne modifie jamais un test, un outil de contrôle ou une règle pour faire disparaître une erreur.
- Ajoute à `journal.md` une partie « Correction <<essai>> » : chaque défaut, sa cause, ce que
  tu as changé, et ce que tu as choisi de ne pas changer (avec la raison).

Ensuite, refais la tâche ci-dessous en partant de tes fichiers actuels.
