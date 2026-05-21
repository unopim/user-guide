# Produit configurable

Un **produit configurable** est une entrée de catalogue unique qui regroupe plusieurs variantes — chacune avec son propre SKU — sous un seul parent. C'est ce que vous utilisez lorsqu'un produit existe en plusieurs *options* (taille, couleur, matériau) et que vous voulez que toutes ces options soient gérées ensemble plutôt que comme des produits simples déconnectés.

## Qu'est-ce qu'un produit configurable ?

| | Produit configurable |
|---|---|
| **Structure** | Un SKU parent + N variantes enfants (chacune avec son propre SKU). |
| **Quand l'utiliser** | L'article a des variations — T-shirts en S/M/L × Rouge/Bleu/Vert, chaussures en différentes tailles, étuis de téléphone en différentes couleurs. |
| **Exemples typiques** | Un T-shirt vendu en 3 tailles × 4 couleurs, un canapé en 3 options de tissu, un ordinateur portable en plusieurs niveaux de stockage. |
| **À comparer avec** | [Produit simple](./simple.md) — utilisez-le lorsqu'il n'y a pas de variantes ou que chaque variante est réellement un produit séparé. |

Les attributs qui définissent les variantes sont appelés **super attributs** (ou *attributs configurables*) — ce sont les axes selon lesquels le produit varie (par exemple, `size`, `color`). Chaque autre attribut (description, catégorie, images, associations) est édité sur le parent et hérité par les variantes sauf si vous le remplacez.

## Comment ça fonctionne ?

Un produit configurable est créé en trois phases :

1. **Créer le parent** — définissez le type de produit sur `Configurable`, choisissez une famille, saisissez un SKU et choisissez les **super attributs** qui définiront les variantes.
2. **Remplir les attributs du parent** — description, catégories, images, tarification, associations. Tout ce qui doit être partagé entre les variantes va ici.
3. **Ajouter des variantes** — dans la section **Variations**, créez un enfant par combinaison (par exemple, `Size=M, Color=Red`). Chaque enfant a son propre SKU et peut remplacer les valeurs spécifiques à la variante.

À l'exécution, le parent agit comme l'enregistrement public et les variantes contiennent les données spécifiques à l'option (et souvent leur propre stock, prix, image).

## Comment créer un produit configurable

### Étape 1 — Démarrer la création

1. Cliquez sur **Catalog → Products**.
2. Cliquez sur **Create Product** dans le coin supérieur droit. La boîte de dialogue **"Create New Product"** s'ouvre.
3. Remplissez :
   - **Type** — `Configurable`.
   - **Famille** — la famille d'attributs qui contrôle quels champs apparaissent sur le parent.
   - **SKU** — le SKU parent (doit être unique).
4. Cliquez sur **Save Product**.

<ImagePopup src="/assets/2.0/images/configurable-product/configurable.png" alt="Modale Créer un produit configurable" />

UnoPim vous redirige vers la page d'édition et vous invite à sélectionner les super attributs.

### Étape 2 — Choisir les super attributs

Les super attributs sont les axes selon lesquels le produit varie — généralement ceux avec des types de données Select ou Multiselect (par exemple, `size`, `color`). Seuls les attributs marqués comme *utilisables pour les variantes* sur la famille apparaissent ici.

<ImagePopup src="/assets/2.0/images/configurable-product/configurableAttributes.png" alt="Super attributs configurables" />

La v2.0 prend également en charge :

- **Sélection flexible des super attributs** lors de la création du produit.
- **Format `variants_json`** pour la définition de variantes programmatique / en masse.
- **Seeder de variantes basé sur la taille** pour générer rapidement des grilles de tailles.

::: warning
Les super attributs sont **verrouillés après la création des variantes**. Planifiez les axes de variantes à l'avance — les modifier ultérieurement nécessite de supprimer et recréer les variantes.
:::

### Étape 3 — Remplir les attributs du parent

Comme un produit simple, la page d'édition parent regroupe les attributs par **Groupe d'attributs** (General, Descriptions, Categories, Associations, …). Les groupes qui apparaissent dépendent de la famille.

La famille `default` nécessite au minimum :

| Champ | Signification |
|---|---|
| **SKU** | SKU parent — l'identifiant pour l'enregistrement configurable. |
| **Name** | Nom d'affichage partagé par toutes les variantes. |
| **URL Key** | Slug compatible URL pour le lien de vitrine. |

Autres sections à remplir sur le parent :

| Section | But |
|---|---|
| **Short Description** | Résumé agnostique à la variante. |
| **Description** | Texte complet — généralement partagé entre les variantes. |
| **Technical** | Bascule de statut — active/désactive tout l'ensemble configurable. |
| **Categories** | Affectation de catégorie pour le configurable (s'applique à toutes les variantes). |
| **Associations** | Produits associés / Up-sell / Cross-sell (voir ci-dessous). |

Chaque section s'affiche comme sa propre carte sur la page d'édition. Les cartes **Description** portent un éditeur WYSIWYG. La carte **Technical** contient le bascule vert **Status** — le laisser désactivé met tout le configurable (parent **et** toutes les variantes) hors ligne. La carte **Categories** ouvre un sélecteur d'arborescence ; tout ce que vous sélectionnez ici s'applique à chaque variante.

<ImagePopup src="/assets/2.0/images/configurable-product/editProduct.png" alt="Page d'édition de produit configurable" />

### Étape 4 — Ajouter des variantes

Faites défiler jusqu'à la section **Variations** et cliquez sur **Add Product** pour créer une variante enfant. Une modale s'ouvre avec une saisie par super attribut plus un champ **SKU** pour la variante elle-même.

Pour chaque variante :

1. Saisissez les valeurs pour les super attributs (par exemple, `Size = M`, `Color = Red`).
2. Saisissez le SKU de la variante.
3. Remplacez éventuellement tous les champs spécifiques à la variante (prix, image, stock).
4. Cliquez sur **Add** pour enregistrer la variante. Elle apparaît dans une table sous la section Variations aux côtés des frères et sœurs déjà créés.

<ImagePopup src="/assets/2.0/images/configurable-product/addVariant.png" alt="Formulaire d'ajout de variante" />

Vous pouvez ajouter autant de variantes que le produit en a besoin. Un T-shirt avec Size × Color = 3 × 4 nécessite 12 variantes ; le seeder basé sur la taille peut accélérer cela.

### Étape 5 — Ajouter des associations

En bas de la page d'édition parent, liez ce configurable à d'autres produits :

| Association | Quand l'utiliser |
|---|---|
| **Related Products** | Alternatives similaires que les clients peuvent également aimer. |
| **Up-Sell Products** | Versions haut de gamme — une ligne de vestes premium, un ordinateur portable plus rapide. |
| **Cross-Sell Products** | Articles complémentaires — chaussettes avec chaussures, câbles avec électronique. |

Pour chaque section, cliquez sur **Add**, recherchez par SKU, sélectionnez et confirmez. Les trois cartes d'association acceptent autant de produits que nécessaire.

### Étape 6 — Enregistrer

Cliquez sur **Save Product** en haut à droite de la page d'édition. Vous êtes redirigé vers le **Data Grid des produits**, où le configurable apparaît avec *Configurable* dans la colonne **Type**. Les variantes ne s'affichent pas comme des lignes séparées — elles sont accessibles uniquement via la section **Variations** du parent.

<ImagePopup src="/assets/2.0/images/configurable-product/datagrid.png" alt="Produit configurable dans le Datagrid" />

::: tip
Les attributs avec un **badge de canal** contiennent des valeurs par canal ; avec un **badge de locale**, par locale ; avec les deux, par canal **et** par locale. Cela s'applique au parent et aux variantes.
:::

## Travailler avec un produit configurable après la création

Les produits configurables prennent en charge les mêmes fonctionnalités de cycle de vie que les produits simples — complétude, traduction, édition en masse, historique, export, copie. Quelques comportements sont spécifiques aux configurables :

### Complétude

Le moteur de complétude évalue **à la fois le parent et ses variantes**. Le score agrégé tient compte des attributs requis manquants à l'un ou l'autre niveau, donc même un parent bien rempli avec une variante vide peut faire baisser le score.

- La complétude est calculée par canal **et** par locale.
- Le widget **Completeness** du tableau de bord agrège tous les produits, y compris les configurables.
- Les variantes à faible complétude sont signalées pour attention aux côtés du parent.

::: tip
Remplissez d'abord les attributs du parent (description, images, catégories). Puis balayez les variantes pour définir les valeurs spécifiques aux variantes (SKU, prix, image par variante). Travailler de haut en bas est plus rapide que sauter entre les variantes.
:::

### Traduction

Les champs spécifiques aux locales sur le parent et sur chaque variante peuvent être traduits manuellement (sélecteur de locale en haut de la page d'édition) ou automatiquement via la traduction **[Magic AI — Settings](../magic-ai/settings.md)**. Le même workflow s'applique aux deux types de produits — voir [Produit simple → Traduire les valeurs entre les locales](./simple.md#translate-values-across-locales).

### Édition en masse

Utilisez **Édition en masse** sur la liste des produits pour mettre à jour les attributs sur plusieurs produits configurables à la fois. Sélectionnez les lignes, choisissez l'attribut, saisissez la valeur, appliquez. Voir [Produit simple → Édition en masse](./simple.md#bulk-edit).

### Historique

Cliquez sur l'onglet **History** sur la page d'édition parent pour une piste d'audit de chaque changement — modifications d'attributs, basculements de statut, changements de catégorie, changements d'association. Chaque entrée liste la date, l'utilisateur et les champs spécifiques qui ont changé avec les valeurs avant et après. Chaque variante a son propre historique accessible depuis sa vue d'édition individuelle.

### Quick Export

Sélectionnez le(s) configurable(s) dans **Catalog → Products** et utilisez **Quick Export** (en haut à droite, à côté de Create Product) pour télécharger en CSV, XLS ou XLSX. L'export regroupe l'enregistrement parent avec ses variantes dans un seul fichier, donc l'importation du résultat recrée la structure configurable complète. Pour les exports planifiés ou filtrés, utilisez le workflow **[Export](../data-transfer/export.md)** complet.

## Lectures associées

- **[Produit simple](./simple.md)** — pour les SKU autonomes sans variantes.
- **[Famille d'attributs](../attribute/attribute-family.md)** — contrôle quels attributs (y compris les candidats super attributs) un configurable peut utiliser.
- **[Attribut produit](../attribute/product-attribute.md)** — comment marquer un attribut comme utilisable pour les variantes.
- **[Magic AI — Settings](../magic-ai/settings.md)** — auto-traduire le contenu de variante entre les locales.
- **[AI Agent Chat](../ai-agent/ai-agent-chat.md)** — la v2.0-beta.1 a introduit la prise en charge de l'AI Agent pour créer et gérer des produits configurables via le chat.
