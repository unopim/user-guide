# Attribut produit

Un attribut est une spécification ou une caractéristique d'un produit — Color, Size et Pattern sont tous des attributs d'un T-shirt. Vous pouvez créer autant d'attributs par produit que nécessaire ; l'ensemble complet des attributs est ce qui donne à chaque produit sa forme et sa recherche.

### Comment créer un attribut produit dans UnoPim

Ouvrez le panneau d'administration et suivez les étapes ci-dessous.

### Ajouter des attributs

**Étape 1** — Cliquez sur **Catalog → Attributes → Create Attributes**.

<ImagePopup src="/assets/2.1/images/attributes/createAttribute.png" alt="Créer un attribut" />

**Étape 2** — Saisissez le **Code** et le **Data Type** dans la section générale.

<ImagePopup src="/assets/2.1/images/attributes/general.png" alt="Section générale" />

**Note** — La validation **Is Unique** n'est disponible que pour les types **Text, Datetime et Date**.

**Étape 3** — Saisissez le **Label** de votre attribut.

<ImagePopup src="/assets/2.1/images/attributes/label.png" alt="Section Label" />

**Étape 4** — Sélectionnez **Validation** si vous voulez que l'attribut soit requis ou unique.

**Note** — La validation **Is Unique** n'est disponible que pour les types **Text, Datetime et Date**.

<ImagePopup src="/assets/2.1/images/attributes/validation.png" alt="Section Validation" />

**Étape 5** — Ouvrez la carte **Configuration** à droite du formulaire et cochez les options qui s'appliquent :

| Option | Ce qu'elle fait |
|---|---|
| **Value Per Locale** | L'attribut stocke une valeur distincte par locale. Basculez la locale sur la page d'édition du produit pour saisir chaque traduction. |
| **Value Per Channel** | L'attribut stocke une valeur distincte par canal. Utile lorsque le même champ diffère selon les vitrines (par exemple, prix ou description par canal). |
| **Is Filterable** | Rend l'attribut disponible dans le tiroir **Apply Filters** de la liste des produits (voir [Filtrer les produits](../products/simple.md#filter-products)). Cochez ceci pour tout attribut que vous souhaitez utiliser comme filtre — `size`, `color`, `brand`, etc. |

<ImagePopup src="/assets/2.1/images/attributes/configuration.png" alt="Section Configuration" />

::: tip
Le basculement de **Is Filterable** sur un attribut existant active immédiatement l'option **Add Filter** pour celui-ci sur la liste des produits — pas d'étape de réindexation nécessaire.
:::

Cliquez sur **Save Attribute**. Le nouvel attribut apparaît dans le Datagrid.

<ImagePopup src="/assets/2.1/images/attributes/output.png" alt="Datagrid des attributs" />

Ensuite, allez dans **Catalog → Attribute Families**, ouvrez la famille où vous voulez l'attribut, et glissez l'attribut depuis la liste non affectée dans le groupe souhaité.

<ImagePopup src="/assets/2.1/images/attributes/family.png" alt="Affectation à une famille d'attributs" />

Enregistrez la famille, puis ouvrez n'importe quel produit dans cette famille — l'attribut apparaît désormais sur le formulaire d'édition.

<ImagePopup src="/assets/2.1/images/attributes/product.png" alt="Attribut affiché sur la page d'édition du produit" />

### Une analyse visuelle des types de données produit d'UnoPim

**1) Text** — Un champ pour une seule ligne de texte. Typique pour les saisies courtes comme les noms ou les clés URL.

<ImagePopup src="/assets/2.1/images/attributes/text.png" alt="Attribut Text" />

**2) Textarea** — Un champ de texte multilignes. Utilisé pour du contenu plus long comme les descriptions de produit ou les commentaires. Vous pouvez activer/désactiver l'éditeur WYSIWYG.

<ImagePopup src="/assets/2.1/images/attributes/textarea.png" alt="Attribut Textarea" />

**3) Boolean** — Bascule vrai / faux. Utilisé pour les sélections oui/non ou marche/arrêt.

<ImagePopup src="/assets/2.1/images/attributes/boolean.png" alt="Attribut Boolean" />

**4) Select** — Une liste déroulante permettant un choix parmi une liste prédéfinie.

<ImagePopup src="/assets/2.1/images/attributes/select.png" alt="Attribut Select" />

**5) Multiselect** — Comme Select mais permet plusieurs choix parmi la liste.

<ImagePopup src="/assets/2.1/images/attributes/multiselect.png" alt="Attribut Multiselect" />

**6) Datetime** — Choisissez une date et une heure spécifiques. Utilisé pour la planification et les horodatages.

<ImagePopup src="/assets/2.1/images/attributes/datetime.png" alt="Attribut Datetime" />

**7) Date** — Choisissez uniquement une date (sans composant horaire).

<ImagePopup src="/assets/2.1/images/attributes/date.png" alt="Attribut Date" />

**8) Gallery** — Gère plusieurs images **et vidéos** par produit. En v1.0.0, UnoPim a ajouté la prise en charge vidéo aux galeries :

1) Modifier les images de la galerie sans changer leur position.
2) Glisser-déposer pour réorganiser les images.
3) **Prise en charge vidéo** — téléverser et gérer des fichiers vidéo aux côtés des images.

<ImagePopup src="/assets/2.1/images/attributes/gallery.png" alt="Attribut Gallery avec vidéo" />

::: tip
La prise en charge vidéo dans l'attribut Gallery a été introduite en v1.0.0. Vous pouvez téléverser les formats vidéo courants directement dans la galerie du produit.
:::

**9) Image** — Téléverser ou afficher une seule image.

<ImagePopup src="/assets/2.1/images/attributes/image.png" alt="Attribut Image" />

**10) File** — Téléverser des fichiers arbitraires (documents, images, etc.).

<ImagePopup src="/assets/2.1/images/attributes/file.png" alt="Attribut File" />

**11) Checkbox** — Une case à cocher basculable pour les sélections binaires (accords, préférences).

<ImagePopup src="/assets/2.1/images/attributes/checkbox.png" alt="Attribut Checkbox" />

**12) Price** — Un champ de prix en plus de l'attribut prédéfini **Prices**.

<ImagePopup src="/assets/2.1/images/attributes/price.png" alt="Attribut Price" />

## Swatch Types

UnoPim v2.0 introduit les **Swatch Types** pour les attributs **Select** et **Multiselect**. Les pastilles donnent aux options une représentation visuelle, ce qui les rend plus faciles à identifier et à sélectionner.

### Types de pastilles

| Type de pastille | Description |
|-------------|-------------|
| **Dropdown** | Sélection par liste déroulante standard (par défaut) |
| **Color** | Affiche des pastilles de couleur pour chaque option |
| **Image** | Affiche des miniatures d'image pour chaque option |
| **Text** | Affiche des étiquettes de texte sous forme de pastilles visuelles |

### Comment activer les types de pastilles

1. Créez ou modifiez un attribut **Select** ou **Multiselect**.
2. Dans la configuration de l'attribut, sélectionnez le **Swatch Type** dans la liste déroulante.
3. Pour chaque option d'attribut, configurez la valeur de la pastille :
   - **Pastille Color** — saisissez un code couleur hex (par exemple, `#FF0000` pour le rouge).
   - **Pastille Image** — téléversez une petite image pour chaque option.
   - **Pastille Text** — saisissez le texte à afficher pour chaque option.
4. Cliquez sur **Save Attribute**.

::: tip
Les types de pastilles sont particulièrement utiles pour les attributs comme Color, Material ou Pattern où une représentation visuelle aide les utilisateurs à choisir rapidement les options.
:::

En suivant les étapes ci-dessus, vous pouvez facilement créer un **Attribut produit** dans UnoPim.
