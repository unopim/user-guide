# Magic AI — Prompts système

> **Barre latérale :** Magic AI → **Prompts système**
> **URL :** `/admin/magic-ai/system-prompts`

La page **Prompts système** contrôle la **personnalité** de l'IA — la voix, le ton et les paramètres de génération qui se trouvent sous chaque requête de contenu dans UnoPim. Un seul System Prompt est actif à la fois, donc tout votre catalogue conserve une voix cohérente.

## Qu'est-ce qu'un System Prompt ?

Un *System Prompt* est un préambule que Magic AI ajoute en préfixe à chaque prompt orienté utilisateur avant d'envoyer la requête au modèle. Il définit :

- **Tone** — amical vs formel, concis vs vivide, autoritaire vs décontracté.
- **Temperature** — à quel point la sortie est créative ou déterministe (0.0 = serré et reproductible, 1.0 = varié et inventif).
- **Max Tokens** — combien de temps la réponse peut être.

Si un [**Prompt**](./prompts.md) dit *quoi* écrire pour un champ spécifique (*"écris une description de produit mentionnant `@name` et `@color`"*), un **System Prompt** dit *comment* il devrait sonner — et ce "comment" s'applique à chaque morceau de contenu que le système produit.

## Que fait cette page ?

- Liste les 10 Prompts système préréglés livrés avec UnoPim plus tous ceux personnalisés que vous créez.
- Vous permet de **créer**, **éditer**, **activer/désactiver** et **supprimer** des Prompts système.
- Impose qu'un seul System Prompt est actif à la fois — l'activation d'un nouveau désactive automatiquement le précédent.

<ImagePopup src="/assets/2.1/images/magic-ai/system-prompts.png" alt="Prompts système" />

## Où le System Prompt actif est appliqué
Chaque requête IA dans UnoPim passe par un pipeline unifié où le System Prompt actif est ajouté en préfixe comme couche de personnalité.

Comme le System Prompt actif s'applique à **chaque** fonctionnalité IA — icônes baguette, auto-traduction, auto-enrichissement et l'AI Agent — en changer un change instantanément la voix de chaque sortie IA dans le catalogue.

## Datagrid des Prompts système

| Colonne | Description |
|--------|-------------|
| **Title** | Le nom du system prompt. |
| **Tone** | Le ton conversationnel (par exemple, Confident, Vivid, Brief). |
| **Max Tokens** | Le nombre maximum de tokens pour les réponses IA. |
| **Temperature** | Le niveau de créativité (plus bas = plus ciblé, plus élevé = plus créatif). |
| **Status** | Activé ou désactivé. |
| **Created At** | Date à laquelle le system prompt a été créé. |
| **Updated At** | Date à laquelle le system prompt a été modifié pour la dernière fois. |
| **Actions** | Éditer (icône crayon), Supprimer (icône corbeille). |

## Prompts système préréglés

UnoPim est livré avec 10 Prompts système préréglés. Un seul peut être activé à la fois.

| Title | Tone | Temperature | Notes |
|-------|------|-------------|-------|
| Authoritative Guide | Confident, assertive, instructional | 0.65 | |
| Descriptive Storyteller | Vivid, rich, engaging | 0.9 | |
| Concise Responder | Brief, to-the-point | 0.5 | |
| Technical Expert | Precise, analytical | 0.6 | |
| Casual Conversationalist | Informal, relaxed | 0.75 | |
| Motivational Coach | Energetic, encouraging | 0.85 | |
| Empathetic Listener | Warm, understanding | 0.6 | |
| Witty Commentator | Clever, humorous | 0.9 | |
| Professional Advisor | Formal, respectful | 0.65 | |
| Friendly Assistant | Friendly, helpful, casual | 0.7 | Activé par défaut |

## Création d'un System Prompt

Cliquez sur le bouton **Create System Prompt**. Configurez :

- **Title** — Le nom qui apparaît dans le datagrid (par exemple, *"Luxury Brand Voice"*).
- **Tone description** — Une description en langage simple de la voix. Le modèle lit ceci au moment de la requête, soyez donc spécifique : *"Écris dans un ton sobre et élégant. Utilise des phrases concises. Évite l'hyperbole marketing."*
- **Max Tokens** — Plafonne la longueur de la réponse. Des valeurs plus basses produisent une sortie plus courte et moins chère ; des valeurs plus élevées donnent au modèle plus d'espace.
- **Temperature** — 0.0 à 1.0. Les valeurs basses (0.3–0.5) sont les meilleures pour une sortie fiable et reproductible ; les valeurs élevées (0.8–1.0) ajoutent de la variété et du flair.
- **Status** — L'activation de celui-ci désactive automatiquement le System Prompt actuellement actif.

## Choisir une température

| Température | Mieux pour |
|---|---|
| **0.0 – 0.4** | Spécifications techniques, champs meta SEO, contenu de référence — là où la reproductibilité compte. |
| **0.5 – 0.7** | Descriptions de produit générales, textes de catégorie, contenu marketing quotidien. |
| **0.8 – 1.0** | Contenu lifestyle, storytelling, textes de style blog — là où la variété et la créativité brillent. |

::: tip
Un seul System Prompt peut être actif à la fois. L'activation d'un nouveau System Prompt désactive automatiquement celui qui était actif précédemment. Choisissez une personnalité qui correspond au ton que vous souhaitez sur l'ensemble du catalogue — changer en cours de route rendra le contenu ancien et nouveau incohérent.
:::

## Prompts vs Prompts système

| | Prompt | System Prompt |
|---|---|---|
| **Portée** | Par champ / par but | Global sur tout le système |
| **Dit** | *Quoi* écrire | *Comment* écrire |
| **Combien d'actifs** | Autant que vous en avez créés | Exactement un |
| **Espaces réservés** | Oui (`@attribute_code`) | Non — écrit comme des instructions simples |
| **Cadence de changement typique** | Souvent — ajusté par attribut, par cas d'utilisation | Rarement — lié à la voix de marque |

Voir **[Prompts](./prompts.md)** pour la couche d'instruction par champ qui se combine avec le System Prompt actif au moment de la génération.
