# Suivi de tâches

> **Barre latérale :** Transfert de données → **Suivi de tâches**
> **URL :** `/admin/data-transfer/job-tracker`

Le **Suivi de tâches** est la page de surveillance centrale pour chaque job d'import et d'export qu'UnoPim exécute. Lorsque vous cliquez sur *Importer maintenant* ou *Exporter maintenant* depuis un profil, ou que vous regardez un job en arrière-plan se déclencher, c'est l'écran qui vous montre ce qui se passe en ce moment, ce qui est terminé et ce qui — le cas échéant — s'est mal passé.

## Qu'est-ce que le Suivi de tâches ?

Une vue en temps réel unique de chaque job de transfert de données dans le système. Au lieu de chercher séparément à travers les listes d'imports et d'exports, vous ouvrez une seule page et voyez :

- **Le statut de chaque job** — queued, processing, complete, failed, cancelled, paused.
- **Progression en direct** — étape actuelle dans le pipeline, comptage des enregistrements créés / mis à jour / supprimés jusqu'à présent.
- **Contrôles** — mettre en pause, reprendre ou annuler un job en cours.
- **Logs et artefacts** — téléchargez le journal du job ou le fichier exporté une fois l'exécution terminée.

<ImagePopup src="/assets/2.0/images/data-transfer/tracker.png" alt="Suivi de tâches" />

## Comment ça fonctionne ?

Chaque import et export s'exécute en tant que job mis en file d'attente. Au moment où vous en lancez un, UnoPim :

1. Crée un **enregistrement de job** avec un ID unique, le statut `Queued` et la configuration qui a été soumise.
2. À mesure que le queue worker le prend, le job passe par un **pipeline d'étapes** fixe — chaque étape met à jour l'enregistrement.
3. La page Suivi de tâches s'abonne à ces mises à jour et repeint l'UI de progression en direct (pas de rafraîchissement nécessaire).
4. Lorsque le job atteint un état terminal (`Complete`, `Failed`, `Cancelled`), le fichier journal et tous les artefacts produits deviennent téléchargeables depuis le tracker.

Comme chaque étape écrit dans le même enregistrement, vous pouvez quitter le tracker en cours d'exécution et revenir plus tard — la page restaure l'état actuel depuis la base de données.

## Statuts de job

Chaque ligne du tracker affiche le statut actuel du job sous forme de chip coloré :

| Statut | Signification |
|---|---|
| **Queued** | Le job est dans la file d'attente, attendant un worker. |
| **Validating** / **Validated** | Le fichier est en cours de validation, ou la validation s'est terminée avec succès et l'import est prêt à s'exécuter. |
| **Processing** | Un worker l'a pris et le pipeline avance. |
| **Paused** | Vous l'avez arrêté en cours d'exécution ; l'état est préservé et il peut être repris. |
| **Completed** | Toutes les étapes se sont terminées avec succès. |
| **Failed** | Une étape a échoué ; voir le journal pour plus de détails. |
| **Cancelled** | Vous l'avez arrêté définitivement ; ne peut pas être repris. |

## Colonnes de la liste du tracker

Le tracker est un datagrid ; une ligne par job :

| Colonne | Description |
|---|---|
| **ID** | ID de job auto-incrémenté. Correspond au suffixe `#n` sur les notifications (par exemple, *Import #15*). |
| **Job** | Le code de profil (par exemple, `product_export`, `category_import`). |
| **Type** | Ce qui est transféré — `Products` ou `Categories`. |
| **Job Type** | Comment le job a été déclenché — `import`, `export` ou `system` (planifié, en masse ou initié par l'AI Agent). |
| **Status** | État actuel (voir tableau ci-dessus). |
| **User** | L'administrateur qui a démarré le job. |
| **Started at** / **Completed at** | Horodatages. |
| **Actions** | **Icône œil** — ouvre la page de détail du job où le pipeline d'étapes, la progression en direct et les contrôles Pause / Resume / Cancel sont affichés. |

<ImagePopup src="/assets/2.0/images/data-transfer/tracker.png" alt="Liste Suivi de tâches" />

## Jobs système et jobs déclenchés par l'AI Agent

Toutes les entrées du tracker ne proviennent pas d'un import / export manuel. Les jobs tombent dans trois catégories, affichées dans la colonne **Job Type** :

| Job Type | D'où il vient |
|---|---|
| `import` | Une exécution manuelle depuis **Transfert de données → Importer**. |
| `export` | Une exécution manuelle depuis **Transfert de données → Exporter**, ou un **Quick Export** depuis la liste des produits. |
| `system` | Un job en arrière-plan — mises à jour de produits en masse, analyses de qualité de catalogue planifiées, exécutions d'auto-enrichissement, ou exports que l'AI Agent a produits en votre nom. Les jobs initiés par l'AI Agent apparaissent avec des noms comme `ai-agent-export-…`. |

Les trois partagent le même cycle de vie, les mêmes chips de statut, journaux et contrôles Pause / Resume / Cancel — la seule différence est la façon dont ils ont été démarrés.

::: tip
Si vous voyez un job `system` que vous ne reconnaissez pas, cliquez sur l'icône œil pour ouvrir la page de détail. La vue détaillée montre l'utilisateur qui a déclenché la chaîne et, pour les jobs de l'AI Agent, le message de chat qui l'a produit.
:::

## Pipelines d'étapes (sur la page de détail du job)

Cliquez sur l'**icône œil** sur une ligne du tracker pour ouvrir la page de détail du job. La page de détail visualise le job sous forme de pipeline d'étapes horizontal. Les étapes exactes dépendent du type de job :

### Pipeline d'import

| Étape | Description |
|------|-------------|
| **Queued** | Le job attend un worker. |
| **Validating** | Le fichier est en cours de validation par rapport aux règles d'import. |
| **Importing** | Les enregistrements sont créés / mis à jour / supprimés dans la base de données. |
| **Indexing** | Les index Elasticsearch sont mis à jour pour que les produits soient recherchables. |
| **Complete** | L'import s'est terminé avec succès. |

<ImagePopup src="/assets/2.0/images/data-transfer/import-progress.png" alt="Progression de l'import" />

### Pipeline d'export

| Étape | Description |
|------|-------------|
| **Queued** | Le job attend un worker. |
| **Validating** | La configuration d'export est en cours de validation. |
| **Exporting** | Les enregistrements sont écrits dans le fichier de sortie. |
| **Complete** | L'export s'est terminé avec succès. |

<ImagePopup src="/assets/2.0/images/data-transfer/export-progress.png" alt="Progression de l'export" />

Chaque étape terminée s'affiche avec une coche verte. Une étape échouée s'affiche en rouge et le pipeline s'arrête là — les étapes suivantes sont ignorées.

## Détails affichés pour chaque job

Sous le pipeline, le tracker affiche :

- **Message de succès / d'erreur** — *"Job completed successfully"* plus la durée totale, ou l'erreur spécifique qui a arrêté l'exécution (par exemple, *"Required columns not found: code"*).
- **Records Created / Updated / Deleted** — comptages exacts de ce qui a changé.
- **Total Duration** — combien de temps le job a pris de la mise en file d'attente à l'état terminal.
- **Download log** — journal complet d'import/export pour examen hors ligne.
- **Download Exported Files** *(exports uniquement)* — le CSV/XLS/XLSX produit par l'exécution.

## Contrôles

### Pause

Pendant une exécution `Processing`, cliquez sur **Pause** pour arrêter temporairement le job. UnoPim fige l'état du job au lot actuel — aucun enregistrement n'est perdu, rien n'est annulé et le queue worker passe à d'autres tâches.

### Resume

Pour un job `Paused`, cliquez sur **Resume** pour continuer à partir du lot suivant. Le job reprend exactement là où il s'est arrêté — les enregistrements déjà traités ne sont pas retraités.

### Cancel

Cliquez sur **Cancel** pour arrêter un job de manière permanente. Le job passe à l'état `Cancelled` et ne peut pas être repris. Les enregistrements déjà écrits par les étapes précédentes ne sont **pas** annulés — si vous devez les annuler, exécutez un import de nettoyage.

::: tip
Pause est le bon choix pendant les heures de pointe sur un grand job. Cancel est pour les situations *"cet import avait le mauvais fichier"* — une fois que vous annulez, vous recommencez depuis la page de liste.
:::

## Ouvrir le Suivi de tâches

Trois points d'entrée courants :

1. **Depuis la barre latérale d'administration** — cliquez sur **Transfert de données → Suivi de tâches**.
2. **Après avoir lancé un job** — le bouton *Importer maintenant* / *Exporter maintenant* vous redirige directement vers le tracker pour le job que vous venez de démarrer.
3. **Depuis le tableau de bord** — le widget **Transfert de données** liste les jobs récents et un lien *« View All Jobs »* va vers le tracker.

## Comment le tracker se rapporte aux imports et exports

| Page | Rôle |
|---|---|
| **[Importer](./import.md)** | Définir un profil d'import (code, type, fichier, stratégie de validation, mode d'action). |
| **[Exporter](./export.md)** | Définir un profil d'export (code, type, format de fichier, média). |
| **Suivi de tâches** (cette page) | Surveiller les exécutions que ces profils produisent — statut, progression, journaux, artefacts. |

Les profils sont des *configurations réutilisables*. Chaque fois que vous appuyez sur *Importer maintenant* ou *Exporter maintenant* sur un profil, un nouveau job est créé et fait apparaître dans le Suivi de tâches.

## Traitement en arrière-plan

Les jobs s'exécutent sur le queue worker Laravel. Si vous ne voyez pas les jobs en file d'attente progresser, assurez-vous qu'un worker est en cours d'exécution :

```bash
php artisan queue:listen
```

Pour la production, exécutez le worker en tant que service géré (systemd, Supervisor, …) afin qu'il reste actif lors des redémarrages.
