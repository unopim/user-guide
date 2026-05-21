# Produit simple

Un **produit simple** est un SKU unique et autonome — un seul article physique avec un ensemble d'attributs et aucune variation. C'est le type de produit le plus courant dans UnoPim et le bon choix chaque fois qu'un produit *n'a pas* besoin de taille, de couleur ou d'autres variantes.

## Qu'est-ce qu'un produit simple ?

| | Produit simple |
|---|---|
| **Structure** | Un SKU, un ensemble de valeurs d'attribut, une ligne dans la grille de produits. |
| **Quand l'utiliser** | L'article n'a pas de variantes, ou chaque variante doit être gérée comme son propre enregistrement séparé. |
| **Exemples typiques** | Un livre, une couleur de peinture unique, une boîte de vis spécifique, un carnet à reliure annulaire. |
| **À comparer avec** | [Produit configurable](./configurable.md) — utilisez-le lorsqu'une entrée de catalogue doit regrouper plusieurs variantes taille/couleur/matériau sous un seul parent. |

## Comment ça fonctionne ?

Un produit simple est créé en deux phases :

1. **Créer** — vous définissez le type de produit sur `Simple`, choisissez une famille d'attributs et lui donnez un SKU. Cela crée un enregistrement minimal.
2. **Éditer** — UnoPim vous redirige vers la page d'édition du produit, où vous remplissez les attributs définis par la famille (nom, description, prix, catégories, images, associations, …) et enregistrez.

Comme la disponibilité des attributs est pilotée par la **famille d'attributs**, un produit simple dans la famille `default` a un ensemble de champs éditables différent de celui d'une famille `books`, par exemple. Gérer la forme d'un produit simple signifie gérer sa famille — voir [Famille d'attributs](../attribute/attribute-family.md).

## Comment créer un produit simple

### Étape 1 — Démarrer la création

1. Cliquez sur **Catalog → Products**.
2. Dans le coin supérieur droit, cliquez sur **Create Product**. Une boîte de dialogue intitulée **"Create New Product"** s'ouvre.
3. Remplissez les trois champs :
   - **Type** — `Simple`.
   - **Famille** — la famille d'attributs qui contrôle quels champs apparaîtront sur la page d'édition.
   - **SKU** — un identifiant unique pour le produit.
4. Cliquez sur **Save Product**.

<ImagePopup src="/assets/2.0/images/simple-product/simple.png" alt="Modale Créer un produit simple" />

UnoPim ferme la boîte de dialogue et vous redirige vers la page d'édition, où chaque champ restant peut être rempli.

<ImagePopup src="/assets/2.0/images/simple-product/editProduct.png" alt="Éditer un produit simple" />

### Étape 2 — Remplir les détails du produit

La page d'édition regroupe les attributs par **Groupe d'attributs** (General, Short Description, Description, Price, Technical, Categories, Associations, …). Les groupes qui apparaissent dépendent de la famille que vous avez choisie à la création.

La famille `default` nécessite au minimum :

| Champ | Signification |
|---|---|
| **SKU** | Identifiant unique du produit. Ne peut pas être dupliqué. |
| **Name** | Nom d'affichage présenté aux clients. |
| **URL Key** | Slug compatible URL pour les liens de vitrine. |

Sections intégrées supplémentaires pour la famille `default` :

| Section | But |
|---|---|
| **Short Description** | Résumé d'une ou deux lignes. Apparaît sur les cartes de liste et les aperçus SEO. |
| **Description** | Texte complet du produit — peut utiliser l'éditeur WYSIWYG. |
| **Price** | Prix de vente plus prix de revient par devise. |
| **Technical** | Bascule de statut — active/désactive le produit. |
| **Categories** | Affecte le produit à une ou plusieurs catégories (y compris une catégorie racine). |
| **Associations** | Liens de produits Related / Up-sell / Cross-sell (voir ci-dessous). |

Chaque section apparaît comme sa propre carte sur la page d'édition. Les cartes **Short Description** et **Description** incluent un éditeur WYSIWYG pour le texte enrichi. La carte **Price** affiche une ligne par devise configurée. La carte **Technical** contient le bascule vert **Status** — laissez-le sur *Enabled* pour que le produit soit considéré comme actif. La carte **Categories** ouvre un sélecteur d'arborescence ; cochez chaque nœud auquel appartient le produit. Toutes les cartes partagent le même bouton *Save Product* en haut à droite de la page.

### Étape 3 — Ajouter des associations

En bas de la page d'édition, vous pouvez lier ce produit à d'autres. Les trois sections fonctionnent de la même manière : cliquez sur **Add**, recherchez par SKU, puis cliquez sur **Add Selected Product**.

| Association | Quand l'utiliser |
|---|---|
| **Related Products** | Alternatives similaires — aide les clients à découvrir des substituts qu'ils peuvent également aimer. |
| **Up-Sell Products** | Versions haut de gamme — une meilleure télévision, un ordinateur portable plus rapide, une tablette plus durable. |
| **Cross-Sell Products** | Articles complémentaires — étui de protection + ordinateur portable, adaptateur + téléphone. |

Chacune des trois cartes d'association a la même disposition : un bouton **Add** ouvre un sélecteur de recherche par SKU, les produits cochés apparaissent sous forme de liste en dessous avec un bouton ✕ pour les supprimer, et il n'y a pas de limite sur le nombre que vous pouvez ajouter.

### Étape 4 — Enregistrer

Cliquez sur **Save Product** en haut à droite de la page d'édition. Vous êtes redirigé vers le **Data Grid des produits**, où le nouveau produit apparaît comme une ligne avec son SKU, sa vignette d'image, son nom, sa famille d'attributs, sa puce de statut, son type (*Simple*) et son pourcentage de complétude.

<ImagePopup src="/assets/2.0/images/simple-product/datagrid.png" alt="Datagrid des produits" />

::: tip
Les attributs qui prennent en charge les valeurs par canal affichent un **badge de canal**. Les attributs qui prennent en charge les valeurs par locale affichent un **badge de locale**. Les attributs qui prennent en charge les deux affichent les deux badges — ce sont les champs que vous reviendrez visiter lorsque vous changerez de canaux ou de locales sur la page d'édition.
:::

## Travailler avec un produit simple après la création

Une fois créé, un produit simple prend en charge l'ensemble complet des fonctionnalités produit d'UnoPim. Le reste de cette page les regroupe par ce que vous essayez de faire.

### Traduire les valeurs entre les locales

UnoPim prend en charge la **traduction des valeurs de produit** — valeurs par locale pour tout attribut marqué comme spécifique à la locale.

<ImagePopup src="/assets/2.0/images/simple-product/product-edit-locale.png" alt="Édition de produit avec sélecteur de locale" />

#### Traduction manuelle

1. Ouvrez le produit dans **Catalog → Products**.
2. En haut de la page d'édition, utilisez les deux sélecteurs :
   - **Sélecteur de canal** (par exemple, *Default*) — choisit les valeurs de canal que vous éditez.
   - **Sélecteur de locale** (par exemple, *English (United States)*) — choisit la locale.
3. Basculez vers la locale cible. Le formulaire se recharge avec les valeurs de cette locale. Les champs spécifiques à la locale affichent un badge de locale (par exemple, `EN_US`).
4. Saisissez les valeurs traduites (Name, Description, URL Key, …).
5. Cliquez sur **Save Product**.
6. Répétez par locale.

::: tip
Un badge **DEFAULT** signifie spécifique au canal. Un badge de locale (par exemple, `EN_US`) signifie spécifique à la locale. Les deux badges ensemble signifient que l'attribut prend en charge les valeurs par canal **et** par locale.
:::

#### Auto-traduction avec Magic AI

Activez **Magic AI → Settings → Translation** et chaque enregistrement de produit auto-traduit les champs spécifiques aux locales dans les locales cibles :

1. Activez **Enabled**.
2. Définissez le **Source Channel** et le **Source Locale** (la langue dans laquelle vous écrivez).
3. Définissez le **Target Channel** et les **Target Locales**.
4. Choisissez un **Translation Model** — vous pouvez utiliser un fournisseur moins cher/plus rapide pour cela.
5. Activez éventuellement **Replace Existing Value** pour écraser les traductions existantes à la ré-exécution.

Voir [Magic AI — Settings](../magic-ai/settings.md) pour la référence complète des champs.

### Vérifier la complétude

UnoPim calcule un score de **complétude du produit** par produit, par canal, par locale :

- Le score est affiché en pourcentage (par exemple, 89%).
- Les produits à faible complétude affichent *"Low completeness, add details to improve"*.
- Les produits presque complets affichent *"Almost complete, just a few details left"*.
- Le tableau de bord agrège la complétude par canal dans le widget **Completeness**.

::: tip
Associez la complétude à **Magic AI Auto-Enrichment** (Magic AI → Settings → Agentic PIM) pour remplir automatiquement les champs manquants et augmenter le score.
:::

### Examiner l'historique des changements

Cliquez sur l'onglet **History** sur la page d'édition du produit pour voir chaque changement. Chaque entrée enregistre :

- Date/heure du changement.
- L'utilisateur qui l'a effectué.
- Les champs exacts qui ont été modifiés, avec les valeurs avant/après.

Cliquez sur l'**icône œil** sur n'importe quelle entrée pour ouvrir une vue détaillée qui affiche les valeurs avant et après côte à côte. UnoPim suit l'historique pour les **produits, catégories, attributs, familles d'attributs et canaux** avec la même UI.

### Dupliquer un produit

Pour créer un nouveau produit amorcé à partir d'un existant :

1. Dans **Catalog → Products**, trouvez la ligne à copier.
2. Cliquez sur l'**icône Copy** (presse-papiers) dans la colonne Actions.
3. UnoPim crée un duplicata avec un nouveau SKU.
4. Modifiez la copie pour la personnaliser.

## Travailler avec la liste des produits

La liste à **Catalog → Products** est l'endroit où vous trouvez, filtrez, modifiez en masse et exportez les produits.

### Gérer les colonnes

Cliquez sur le bouton **Columns** pour ouvrir la modale **Manage columns**.

<ImagePopup src="/assets/2.0/images/simple-product/columns-selector.png" alt="Sélecteur de colonnes" />

| Panneau | Contenu |
|---|---|
| **Available Columns** (gauche) | Chaque attribut qui peut être affiché comme une colonne — ID, Parent, Created/Updated At, URL Key, Tax Category, Short Description, Description, Price, Cost, Meta Title, Meta Keywords, Meta Description, plus chaque attribut personnalisé. Recherche + pagination. |
| **Selected Columns** (droite) | Colonnes actuellement visibles. Par défaut : SKU, Image, Name, Famille d'attributs, Status, Type, Complete. |

Pour personnaliser :

1. Glissez depuis Available vers Selected pour ajouter une colonne.
2. Glissez dans Selected pour réorganiser.
3. Glissez en dehors de Selected (ou cliquez pour supprimer) pour masquer.
4. Cliquez sur **Apply**.

### Filtrer les produits

Cliquez sur **Filter** au-dessus du datagrid pour faire glisser le tiroir **Apply Filters** depuis le côté droit de l'écran. Le tiroir porte un ensemble fixe de champs de filtre intégrés plus un bouton **Add Filter** pour les attributs personnalisés.

**Filtres intégrés** (toujours affichés) :

- **SKU** — correspondance de texte.
- **Name** — correspondance de texte.
- **Famille d'attributs** — liste déroulante de toutes les familles configurées.
- **Status** — liste déroulante Enabled / Disabled.
- **Type** — liste déroulante Simple / Configurable.

**Add Filter (attributs personnalisés)**

Cliquez sur **Add Filter** en bas du tiroir pour ajouter un filtre pour tout attribut ayant **Is Filterable** coché sur sa carte Configuration (voir [Attribut produit → Configuration](../attribute/product-attribute.md#add-attributes)). C'est ainsi que vous filtrez la liste par `color`, `size`, `brand`, ou tout autre attribut pertinent pour votre catalogue :

1. Dans le tiroir, cliquez sur **Add Filter**.
2. Choisissez un attribut dans la liste déroulante — seuls les attributs avec **Is Filterable = on** sont listés.
3. Saisissez ou sélectionnez la(les) valeur(s) à filtrer. La forme de saisie dépend du type de données de l'attribut (saisie de texte, liste déroulante, plage de dates, case à cocher, etc.).
4. Répétez **Add Filter** pour empiler plus de filtres — ils se combinent avec une logique AND.

Cliquez sur **Save** en bas du tiroir pour appliquer l'ensemble de filtres. Le datagrid se recharge en affichant uniquement les lignes correspondantes. Pour effacer, ouvrez à nouveau le tiroir et supprimez les puces de filtre individuelles, ou rechargez la page pour réinitialiser.

::: tip
Si un attribut par lequel vous souhaitez filtrer n'est pas dans la liste déroulante Add Filter, allez à **Catalog → Attributes**, modifiez l'attribut, cochez **Is Filterable** dans la carte Configuration et enregistrez. Il apparaît dans la liste déroulante immédiatement.
:::

### Édition en masse

UnoPim prend en charge l'**édition en masse** sur tout attribut partagé par les produits sélectionnés :

1. Allez à **Catalog → Products**.
2. Cochez les lignes que vous souhaitez modifier.
3. Ouvrez la liste déroulante **Bulk Actions**.
4. Sélectionnez **Edit** et choisissez l'attribut.
5. Saisissez la nouvelle valeur et appliquez.

#### Activation/Désactivation en masse

1. Sélectionnez plusieurs produits.
2. Dans la barre d'action en masse, choisissez **Enable** ou **Disable**.

#### Suppression en masse

1. Sélectionnez les produits.
2. Cliquez sur **Delete**.
3. Confirmez — la suppression est permanente.

### Quick Export

Exportez les produits sélectionnés (ou tous) directement depuis la liste :

1. Sélectionnez les produits.
2. Cliquez sur **Quick Export** en haut à droite, à côté de **Create Product**.
3. Choisissez **CSV**, **XLS** ou **XLSX** dans le sélecteur de format.
4. UnoPim génère le fichier en arrière-plan et le télécharge dans votre navigateur une fois le traitement terminé. Vous pouvez suivre la progression du job sur la page **Suivi de tâches** pendant que vous attendez.

Pour les exports planifiés ou filtrés, utilisez le workflow **[Exporter](../data-transfer/export.md)** complet dans Transfert de données.

## Lectures associées

- **[Produit configurable](./configurable.md)** — quand utiliser des variantes au lieu d'un seul SKU simple.
- **[Famille d'attributs](../attribute/attribute-family.md)** — contrôle quels champs apparaissent sur un produit simple.
- **[Magic AI — Settings](../magic-ai/settings.md)** — configurez l'auto-traduction et l'auto-enrichissement pour les produits.
- **[AI Agent Chat](../ai-agent/ai-agent-chat.md)** — créez, mettez à jour et modifiez en masse les produits simples via le langage naturel.
