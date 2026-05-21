# Magic AI — Prompts

> **Barre latérale :** Magic AI → **Prompts**
> **URL :** `/admin/magic-ai/prompts`

La page **Prompts** est l'endroit où vous gérez les **modèles d'instructions** que Magic AI envoie au modèle avec chaque requête. Un prompt bien écrit est ce qui fait la différence entre un remplissage IA générique et un contenu qui correspond à votre marque et à votre catalogue.

## Qu'est-ce qu'un Prompt ?

Un *Prompt* est une instruction qui dit à l'IA *quoi* produire pour un champ spécifique. C'est un court morceau de texte avec des **espaces réservés** facultatifs — jetons tels que `@name`, `@color`, `@material` — que Magic AI remplace par les valeurs réelles de l'entité au moment de la génération.

Exemple de prompt :

> `Write a detailed product description for @name highlighting its features, benefits, and @color variant.`

Lorsque ce prompt s'exécute sur un produit nommé *Air Max 90* avec `color = Blue`, il devient :

> `Write a detailed product description for Air Max 90 highlighting its features, benefits, and Blue variant.`

Chaque prompt est lié à deux axes :

- **Entity Type** — à quel type d'enregistrement il s'applique : `product` ou `category`.
- **Purpose** — ce qu'il produit : `Text Generation` ou `Image Generation`.

Magic AI choisit automatiquement le prompt correspondant lorsque vous cliquez sur une icône baguette, exécutez un auto-enrichissement ou demandez à l'AI Agent de générer du contenu.

## Que fait cette page ?

- Liste chaque modèle de prompt disponible dans le système.
- Vous permet de **créer**, **éditer** et **supprimer** des prompts.
- Affiche quelle entité et quel but chaque prompt dessert, pour que vous puissiez voir la couverture en un coup d'œil.

<ImagePopup src="/assets/2.1/images/magic-ai/prompts.png" alt="Prompts" />

## Comment les prompts sont utilisés au moment de la génération

```
User clicks wand icon on a field
           │
           ▼
Magic AI picks the prompt that matches
   entity type (product/category) + purpose (text/image)
           │
           ▼
`@attribute_code` placeholders are replaced
   with the entity's real attribute values
           │
           ▼
Active System Prompt (tone + temperature) is prepended
           │
           ▼
Request sent to the Platform + Model
   configured on Magic AI → Settings
           │
           ▼
Generated content appears in the field
```

## Datagrid des Prompts

| Colonne | Description |
|--------|-------------|
| **Title** | Le nom du prompt. |
| **Prompt** | Le texte du prompt avec les espaces réservés. |
| **Entity Type** | L'entité à laquelle s'applique le prompt (`product` ou `category`). |
| **Purpose** | Si le prompt est pour `Text Generation` ou `Image Generation`. |
| **Created At** | Date à laquelle le prompt a été créé. |
| **Updated At** | Date à laquelle le prompt a été modifié pour la dernière fois. |
| **Actions** | Éditer (icône crayon), Supprimer (icône corbeille). |

## Création d'un Prompt

Cliquez sur le bouton **Create Prompt**. Remplissez :

- **Title** — Comment il apparaît dans la liste. Utilisez quelque chose de reconnaissable comme *"Product Description — Long Form"*.
- **Prompt** — Le texte d'instruction. Utilisez des espaces réservés `@attribute_code` pour toute valeur que vous souhaitez tirer de l'entité. Vous pouvez référencer n'importe quel code d'attribut défini sur la famille d'attributs de l'entité.
- **Entity Type** — `product` ou `category`.
- **Purpose** — `Text Generation` ou `Image Generation`.

### Règles des espaces réservés

- Les espaces réservés sont préfixés par `@` et utilisent le **code d'attribut**, pas le label. Par exemple, un attribut "Product Color" avec le code `color` est référencé comme `@color`.
- Si l'attribut n'a pas de valeur sur l'entité, l'espace réservé est remplacé par une chaîne vide — écrivez donc des prompts défensivement (par exemple, `highlighting its @color variant if specified`).
- Vous pouvez enchaîner plusieurs espaces réservés dans un seul prompt ; Magic AI les développe tous en une seule passe.

## Exemples de prompts

Voici des exemples de prompts livrés avec UnoPim :

| Titre | Prompt | Type d'entité | Objectif |
|-------|--------|-------------|---------|
| AI Product Description | Write a detailed product description for @name highlighting its features, benefits and @color variant. | product | Text Generation |
| AI Product Image | Generate a professional product photo of @name on a clean white background with studio lighting. | product | Image Generation |
| AI Category Description | Write a compelling category description for @name that helps customers browse products. | category | Text Generation |

::: tip
Utilisez les codes d'attribut comme espaces réservés (préfixés par `@`) dans vos prompts. Magic AI les remplace par les valeurs réelles du produit ou de la catégorie en cours de traitement.
:::

## Prompts vs Prompts système — quelle est la différence ?

- Un **Prompt** dit *quoi* écrire pour un champ spécifique ("écris une description de produit qui mentionne `@name` et `@color`").
- Un **System Prompt** dit *comment* écrire — voix, ton, créativité, longueur. Il s'applique globalement, devant chaque prompt.

Voir la page **[Prompts système](./system-prompts.md)** pour la couche de personnalité qui se trouve sous chaque prompt.
