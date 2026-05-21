# Export 

L'exportation de données pour enregistrer les informations dans des fichiers est une pratique courante pour la gestion, l'analyse et le partage des données. Cela implique de transférer des données d'un système source vers un format de fichier adapté au stockage, à une utilisation future ou au partage avec d'autres. 

### Étapes pour ajouter un export en masse dans UnoPim

**Étape 1 :** Allez dans le panneau d'administration d'UnoPim et cliquez sur **Transfert de données → Exporter** dans la barre latérale, puis cliquez sur le bouton **Créer un export**.

 <ImagePopup src="/assets/2.1/images/data-transfer/export-listing.png" alt="Liste des exports" />

**Étape 2 :** Dans les configurations générales, ajoutez les champs ci-dessous.

1) **Code -** Saisissez le code de votre processus d'export.

2) **Type -** Sélectionnez le type, c'est-à-dire (Products, Categories) que vous souhaitez exporter.

3) **Filters -** Sélectionnez le format du fichier **(CSV, XLS, XLSX)** selon vos besoins dans la liste déroulante.

4) **With Media -** Activez ou désactivez selon que vous avez besoin des données d'export avec ou sans média. 

Maintenant, cliquez sur le bouton **Save Export**. Le profil est enregistré et vous revenez à la liste des exports.

 <ImagePopup src="/assets/2.1/images/data-transfer/create-export-form.png" alt="Formulaire de création d'export" />

Le formulaire de création d'export a une disposition à deux panneaux :
- **Panneau General (gauche)** — Code, Type (Products/Categories)
- **Panneau Filters (droite)** — File Format (liste déroulante CSV/XLS/XLSX), With Media (bascule)

**Étape 3 :** Depuis la liste des exports, cliquez sur l'icône d'action **Exporter** (icône play) sur la ligne que vous souhaitez exécuter. Cela ouvre la page d'exécution, qui affiche un résumé de la configuration d'export :

- **Export Profile** — Le code d'export
- **File Format** — CSV, XLS ou XLSX
- **With Media** — Oui ou Non

Cliquez sur le bouton **Exporter maintenant**. UnoPim met le job en file d'attente et vous redirige vers la vue détaillée du **Suivi de tâches** pour ce job.

## Suivi de l'export

**Étape 4 :** La page de détail du Suivi de tâches affiche le pipeline d'étapes en temps réel. Chaque étape s'allume avec une coche verte au fur et à mesure qu'elle se termine, et lorsque le job se termine, vous obtenez une bannière de succès ainsi que des comptes d'enregistrements et des liens de téléchargement :

 <ImagePopup src="/assets/2.1/images/data-transfer/export-progress.png" alt="Page de détail d'export — pipeline d'étapes" />

Le tracker affiche un **pipeline d'étapes** avec des indicateurs de progression visuels :

| Étape | Description |
|------|-------------|
| **Queued** | Le job est dans la file d'attente en attente de traitement |
| **Validating** | La configuration d'export est en cours de validation |
| **Exporting** | Les enregistrements sont écrits dans le fichier d'export |
| **Complete** | L'export s'est terminé avec succès |

Chaque étape affiche une coche verte lorsqu'elle est terminée. Sous le pipeline, vous pouvez voir :
- **Message de succès** — "Job completed successfully" avec la durée totale
- **Records Created / Updated / Deleted** — Comptages exacts des enregistrements exportés
- **Total Duration** — Combien de temps l'export a pris
- **Download log** — Téléchargez le fichier journal d'export complet
- **Bouton Download Exported Files** — Cliquez pour télécharger le fichier généré

### Contrôles Pause, Resume et Cancel

Pendant un export actif, des **boutons de contrôle de job** apparaissent dans le tracker :

- **Pause** — Arrêtez temporairement un export en cours. L'état du job est préservé.
- **Resume** — Continuez un export en pause depuis là où il s'est arrêté.
- **Cancel** — Arrêtez complètement un export. Les jobs annulés ne peuvent pas être repris.

::: tip
La fonctionnalité de pause et de reprise est particulièrement utile pour les grands exports. Vous pouvez mettre un job en pause pendant les heures de pointe et le reprendre pendant les heures creuses.
:::

## Export rapide de produits

UnoPim prend en charge la **gestion dynamique des jobs d'export rapide de produits**. Vous pouvez exporter rapidement les produits sélectionnés directement depuis la liste des produits :

1. Naviguez vers **Catalog → Products**
2. Sélectionnez les produits que vous souhaitez exporter (ou exportez tous)
3. Cliquez sur le bouton **Quick Export** en haut à droite
4. Choisissez le format (CSV, XLS, XLSX)
5. L'export sera traité et téléchargé

::: tip
Pour les grands exports, le système utilise un **pipeline d'export optimisé** avec eager loading et une taille de lot augmentée (jusqu'à 200) pour de meilleures performances. Les exports de catégories ont été optimisés pour éviter la surcharge de mémoire.
:::

En suivant les étapes ci-dessus, vous pouvez facilement créer des données d'export dans UnoPim.
