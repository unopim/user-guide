# File d'approbation

L'**File d'approbation** est le filet de sécurité qui se trouve entre les changements proposés par l'AI Agent et votre catalogue en direct. Lorsque l'agent souhaite modifier les données produit — changer une description, mettre à jour un prix, attribuer une catégorie, etc. — le changement peut être retenu pour que vous l'examiniez avant qu'il ne prenne effet. Vous approuvez ce qui semble correct, rejetez ce qui ne l'est pas, et rien n'atteint le catalogue à moins que vous ne le disiez.

## Que fait l'File d'approbation ?

- **Intercepte** les écritures proposées par l'IA avant qu'elles ne soient validées dans la base de données.
- **Vous montre une comparaison côte à côte** de la valeur actuelle par rapport à ce que l'agent veut la changer.
- **Vous permet d'approuver ou de rejeter** les changements individuels, ou des lots de ceux-ci, un par un ou tous en même temps.
- **Enregistre** chaque décision à des fins d'audit.

L'File d'approbation s'applique uniquement aux **écritures provenant de l'AI Agent**. Les modifications effectuées directement par les administrateurs via l'UI normale ne sont pas acheminées par la file d'attente.

## Comment fonctionne l'File d'approbation ?

1. **L'AI Agent propose un changement** — généré à partir d'une instruction de chat, d'une exécution d'auto-enrichissement ou du Catalog Quality Monitor.
2. **UnoPim vérifie le Change Approval Mode** (configuré dans **Magic AI → Settings → Agentic PIM**) :
   - **Auto-apply** — les changements sûrs / à haute confiance vont directement à la base de données.
   - **Confirm & apply** (par défaut) — l'agent propose des valeurs, demande confirmation dans le chat, puis exécute.
   - **Manual review** — chaque changement est acheminé vers l'File d'approbation, sans exception.
3. **UnoPim vérifie le Confidence Threshold** — si la confiance de l'agent dans le changement proposé est inférieure au seuil (par défaut 0.7, "Balanced"), le changement est retenu pour examen, indépendamment du mode d'approbation.
4. **Les changements retenus atterrissent dans l'File d'approbation** avec une comparaison côte à côte, un horodatage et le tour de chat qui les a produits.
5. **Vous approuvez ou rejetez** chaque entrée. Les changements approuvés sont validés immédiatement ; les changements rejetés sont abandonnés.
6. **La décision est enregistrée** pour que vous puissiez auditer plus tard.

## Modes configurables

L'File d'approbation prend en charge deux grands modes de fonctionnement, sélectionnés sous **Magic AI → Settings → Agentic PIM** :

### Mode Auto-Approve

Les changements vont directement à la base de données sans examen manuel. Idéal pour les opérations routinières et de confiance — par exemple, un workflow d'auto-enrichissement bien réglé où vous avez déjà validé le prompt et la personnalité. Plus rapide, mais sans deuxième regard.

### Mode Manual Review

Chaque changement proposé est retenu pour approbation explicite. C'est le point de départ recommandé lors du déploiement de l'AI Agent, en particulier pour les opérations en masse ou la génération de contenu. Vous échangez un peu de vitesse contre une supervision complète.

::: tip
Commencez en revue manuelle pendant que vous apprenez comment l'agent se comporte sur votre catalogue. Une fois que vous faites confiance à un workflow spécifique (par exemple, remplir les meta descriptions pour une famille spécifique), vous pouvez basculer en auto-approbation pour cette classe d'opérations.
:::

## Examen des changements en attente

Lorsque des changements attendent votre examen, ils apparaissent dans l'File d'approbation. Chaque changement en attente affiche :

- **Le produit ou l'entité affecté** — quel produit, catégorie ou enregistrement le changement s'applique.
- **Le champ modifié** — l'attribut ou le champ spécifique qui sera mis à jour.
- **La valeur actuelle** — ce que le champ contient actuellement.
- **La valeur proposée** — ce que l'AI Agent veut la changer.
- **L'horodatage** — quand l'agent a généré la proposition.

Cette disposition côte à côte facilite la détection de la précision et de la conformité de la valeur proposée avant qu'elle n'atterrisse.

## Approbation des changements

Cliquez sur le bouton **Approve** sur une entrée en attente pour valider ce changement. Le changement frappe la base de données immédiatement et l'entrée est supprimée de la file d'attente.

Vous pouvez également sélectionner plusieurs entrées et les approuver en masse — utile lorsque vous avez examiné un lot de modifications similaires (par exemple, 20 meta descriptions suivant toutes le même modèle).

## Rejet des changements

Cliquez sur **Reject** pour rejeter une proposition. Le changement est abandonné et n'atteint jamais votre catalogue. Le rejet n'affecte pas le comportement de l'agent sur les demandes futures — vous pouvez rejeter librement sans vous soucier des effets secondaires d'entraînement.

## Quand une confirmation est requise

Certaines classes de changement déclenchent toujours une confirmation explicite, quel que soit le mode d'approbation que vous avez choisi :

- **Changements d'image entre les requêtes** — si l'agent propose des changements aux images de produit ou aux ressources média, on vous demandera de confirmer.
- **Modifications en masse** — les changements à grande échelle affectant de nombreux produits déclenchent une étape de confirmation pour éviter les mises à jour de masse accidentelles.
- **Opérations destructives** — tout ce qui supprime ou écrase une quantité significative de données demande une confirmation explicite.

Ces gardes s'exécutent même en mode Auto-Approve. Elles sont là pour empêcher "un prompt errant" de causer des dommages à l'échelle du catalogue.

::: tip
L'File d'approbation se marie particulièrement bien avec l'auto-enrichissement. Laissez l'agent générer des descriptions et du contenu SEO en arrière-plan, puis examinez tout depuis un seul endroit avant publication.
:::

## Comment la file d'attente interagit avec les autres contrôles de sécurité

L'File d'approbation est l'un des quatre garde-fous sur l'AI Agent. Ensemble, ils forment un modèle de défense en profondeur :

| Garde-fou | Configuré à | Ce qu'il protège |
|---|---|---|
| **Autorisations ACL** | Settings → Roles | Empêche l'agent de faire des choses que votre rôle ne peut pas faire. |
| **Daily Token Budget** | Magic AI → Settings → Agentic PIM | Plafonne les dépenses IA totales par jour. |
| **Max Agent Steps Per Turn** | Magic AI → Settings → Agentic PIM | Plafonne combien d'outils un seul message peut enchaîner. |
| **Change Approval Mode + Confidence Threshold + File d'approbation** | Magic AI → Settings → Agentic PIM | Retient les écritures risquées ou à faible confiance pour examen. |

La file d'attente concerne spécifiquement la **supervision au moment de l'écriture** — une fois qu'un changement a été approuvé et écrit, il se comporte comme toute autre modification de catalogue et suit la piste d'audit/historique normale.
