# Import

L'import en masse est une fonctionnalité qui permet aux utilisateurs d'importer rapidement et efficacement de grandes quantités de données dans un système. Il simplifie le processus et fait gagner du temps en évitant d'avoir à ajouter chaque élément d'information un par un.

La fonctionnalité fonctionne différemment pour chaque système et a une grande variété de cas d'utilisation dans de nombreuses industries ainsi que dans [UnoPim](https://unopim.com/).

### Étapes pour ajouter un import en masse dans UnoPim

**Étape 1 :** Allez dans le panneau d'administration d'UnoPim et cliquez sur **Transfert de données → Importer** dans la barre latérale puis cliquez sur le bouton **Créer un import**.

 <ImagePopup src="/assets/2.0/images/data-transfer/import-listing.png" alt="Liste des imports" />

**Étape 2 :** Dans les configurations générales, ajoutez les champs ci-dessous :

1) **Code -** Saisissez le code de votre processus d'import.

2) **Type -** Sélectionnez le type, c'est-à-dire (Products, Categories) que vous souhaitez importer.

3) **File / Images –** un panneau combiné couvrant à la fois le fichier de données et toutes les images de produit que le fichier référence :
   - **File \*** – glissez un fichier **CSV / XLSX / XLS** sur la zone de téléversement (*"Click to upload or drag and drop"*) ou cliquez pour parcourir. Les types de fichiers autorisés sont indiqués sous l'étiquette.
   - **Download {Type} Sample CSV** – lien qui télécharge l'exemple de fichier pour le type que vous avez sélectionné (par exemple, *"Download Categories Sample CSV"* lorsque le type est Categories). Utilisez-le pour confirmer la disposition de colonne attendue avant de téléverser votre propre fichier.
   - **Images → Path** – le chemin en deux parties qu'UnoPim utilise pour localiser les images de produit :
     - Le préfixe est verrouillé sur `storage/app/public/`.
     - Le suffixe modifiable est par défaut quelque chose comme `import-images/my-products`.
     - Cliquez sur **Upload Images to set Path** pour téléverser un dossier d'images ; UnoPim l'enregistre sous le préfixe et remplit automatiquement le suffixe pour vous.
   - Texte d'aide sous le champ : *"Placez les images dans `storage/app/public/`. Pour les images dans `storage/app/public/import-images`, incluez `import-images/` dans le chemin et utilisez uniquement le nom de fichier dans le fichier d'import."*

4) **Action –** Sélectionnez Create/Update ou Delete dans le panneau Settings pour contrôler si les lignes correspondantes sont upsertées ou supprimées.

5) **Validation Strategy –** Choisissez **Skip Errors** ou **Stop on Errors** pour décider comment l'importeur réagit lorsqu'une ligne échoue à la validation.

6) **Allowed Errors –** Nombre maximum d'erreurs au niveau ligne que l'import tolère avant de s'arrêter. Par défaut : **`10`**.

7) **Field Separator –** Le caractère qui sépare les colonnes dans le fichier CSV. Par défaut : **`;`** (point-virgule). Utilisé uniquement pour les fichiers CSV.

Maintenant, cliquez sur le bouton **Save Import**.  

 <ImagePopup src="/assets/2.0/images/data-transfer/create-import-form.png" alt="Formulaire de création d'import" />

Le formulaire de création d'import a une disposition à deux panneaux :
- **Panneau General (gauche)** — Code, Type (Products/Categories), plus un bloc combiné **File / Images** avec la zone de téléversement de fichier, le lien *Download {Type} Sample CSV* et le champ **Images → Path** avec son bouton *Upload Images to set Path*.
- **Panneau Settings (droite)** — Action (Create/Update), Validation Strategy (Stop on Errors / Skip Errors), Allowed Errors (par défaut `10`), Field Separator (par défaut `;`).

### Téléversement de fichier par glisser-déposer

UnoPim v2.0 prend en charge le **téléversement de fichier par glisser-déposer** pour les fichiers d'import. La zone de téléversement affiche **"Click to upload or drag and drop"** avec les types de fichiers pris en charge (CSV, XLSX, XLS). Vous pouvez glisser un fichier directement depuis votre gestionnaire de fichiers sur la zone de téléversement en pointillés.

### Filtres dynamiques de job d'import

Les jobs d'import prennent en charge des **filtres dynamiques** qui vous permettent de configurer des conditions de filtrage avancées pour vos données d'import. Cela vous aide à contrôler exactement quels enregistrements sont importés en fonction de critères spécifiques.

**Étape 3 :** Depuis la liste des imports, cliquez sur l'icône d'action **Importer** (icône play) sur la ligne de l'import que vous souhaitez exécuter. Cela ouvre la page d'exécution, qui affiche un résumé de la configuration d'import :

- **Import Profile** — Le code d'import
- **File Path** — L'emplacement du fichier téléversé
- **Action Mode** — Create/Update ou Delete

Cliquez sur le bouton **Importer maintenant** pour démarrer le traitement. UnoPim met le job en file d'attente et vous redirige vers la vue détaillée du **Suivi de tâches** pour ce job.

## Suivi Import/Export

**Étape 4 :** La page de détail du Suivi de tâches affiche le pipeline d'étapes en temps réel. Si la validation détecte des erreurs, la page les fait apparaître avec les numéros de ligne et le champ exact qui a échoué, ainsi qu'un bouton **Download Full Report** :

 <ImagePopup src="/assets/2.0/images/data-transfer/import-progress.png" alt="Page de détail d'import — erreurs de validation" />

Le tracker affiche un **pipeline d'étapes** avec des indicateurs de progression visuels :

| Étape | Description |
|------|-------------|
| **Queued** | Le job est dans la file d'attente en attente de traitement |
| **Validating** | Le fichier est en cours de validation par rapport aux règles d'import |
| **Importing** | Les enregistrements sont créés/mis à jour dans la base de données |
| **Indexing** | Les index Elasticsearch sont mis à jour |
| **Complete** | L'import s'est terminé avec succès |

Chaque étape affiche une coche verte lorsqu'elle est terminée. Sous le pipeline, vous pouvez voir :
- **Message de succès/erreur** — Si le job s'est terminé ou a échoué, avec des détails
- **Records Created / Updated / Deleted** — Comptages exacts de ce qui a changé
- **Total Duration** — Combien de temps l'import a pris
- **Download log** — Téléchargez le fichier journal d'import complet
- **Détails des erreurs** — Si la validation échoue, vous voyez les erreurs spécifiques (par exemple, "Required columns not found: code")

### Contrôles Pause, Resume et Cancel

Pendant un import actif, des **boutons de contrôle de job** apparaissent dans le tracker :

- **Pause** — Arrêtez temporairement un import en cours. L'état du job est préservé et peut être repris plus tard.
- **Resume** — Continuez un import en pause depuis là où il s'est arrêté.
- **Cancel** — Arrêtez complètement un import. Les jobs annulés ne peuvent pas être repris.

::: tip
La fonctionnalité de pause et de reprise est particulièrement utile pour les grands imports. Vous pouvez mettre un job en pause pendant les heures de pointe et le reprendre pendant les heures creuses.
:::

Vous pouvez également exécuter la commande ci-dessous à la racine de votre UnoPim pour traiter la file d'attente d'import :

```bash
php artisan queue:listen
```

En suivant les étapes ci-dessus, vous pouvez facilement créer des données d'import dans UnoPim.
