# Magic AI

**Magic AI** est la couche de contenu IA d'UnoPim. Elle génère du contenu produit et catégorie (texte + images), traduit les valeurs entre locales et alimente l'assistant Agentic PIM — le tout en utilisant l'un des 10+ fournisseurs IA pris en charge en arrière-plan.

## Que fait Magic AI ?

Une fois Magic AI configuré (voir [Configuration Magic AI](../configuration/magic-ai.md)), il apparaît dans l'UI d'administration à cinq endroits :

| Surface | Ce qu'elle produit | Comment vous la déclenchez |
|---|---|---|
| **Icône baguette sur les champs de texte** | Noms, descriptions, champs meta SEO, textes de catégorie | Cliquez sur la baguette à côté d'un champ pris en charge |
| **Icône baguette sur les champs image/galerie** | Images de produit générées à partir d'une description textuelle | Cliquez sur la baguette à côté d'un attribut image |
| **Auto-traduction à l'enregistrement du produit** | Valeurs traduites pour chaque locale cible | Automatique lorsque activée ; aussi via une commande en masse |
| **AI-Powered Search** | Résultats de recherche sémantique classés par sens, pas seulement par mots-clés | Boîte de recherche ordinaire |
| **AI Agent Chat (Agentic PIM)** | Résultats des 30+ appels d'outils | Bouton de chat en bas à droite |

Les cinq partagent les mêmes connexions fournisseurs, la même bibliothèque de prompts et la même personnalité système — vous configurez donc Magic AI une fois et chaque fonctionnalité le récupère.

## Comment fonctionne Magic AI ?

Chaque action Magic AI suit le même pipeline :

1. **Trigger** — cliquez sur une icône baguette, enregistrez un produit, exécutez une commande de traduction ou envoyez un message de chat.
2. **Context assembly** — UnoPim combine les données actuelles de l'entité cible, le modèle **Prompt** pertinent (avec les espaces réservés `@attribute` développés) et la personnalité **System Prompt** active.
3. **Dispatch** — la requête assemblée passe par le `LaravelAiAdapter` unifié à la Platform et au Model que vous avez sélectionnés pour cette capacité sous **Magic AI → Settings**.
4. **Response** — le fournisseur renvoie du texte, une image ou une traduction.
5. **Apply** — le résultat est inséré dans le champ (texte/image), écrit dans les colonnes de locale (traduction) ou diffusé dans le chat (agent).

L'adaptateur unifié signifie que vous pouvez **changer de fournisseur sans toucher à votre workflow** — changez la Platform par défaut sous Magic AI → Settings et chaque fonctionnalité utilise la nouvelle à la prochaine requête.

## Génération de contenu

Avec Magic AI, vous pouvez générer sans effort du contenu **produit et catégorie** attrayant — noms, descriptions, métadonnées SEO et plus encore.

<ImagePopup src="/assets/2.1/images/magic-ai/content.png" alt="Génération de contenu Magic AI" />

Au lieu d'écrire chaque description à la main, Magic AI les compose pour vous à partir des données que le produit possède déjà (nom, catégorie, attributs clés), du modèle de prompt que vous avez configuré et de la personnalité système active.

### Fournisseurs IA pris en charge

UnoPim fournit un support natif pour plusieurs fournisseurs IA via son système **Multi-Platform MagicAI**. Vous pouvez configurer un ou plusieurs fournisseurs avec un stockage chiffré des identifiants pour une gestion sécurisée des clés API.

**A) Pour le contenu — UnoPim prend en charge ces fournisseurs IA :**

* **OpenAI** – gpt-4o, gpt-4o-mini, gpt-3.5-turbo, dall-e-2, dall-e-3
* **Anthropic** – Famille de modèles Claude (Opus, Sonnet, Haiku) pour la génération de texte et le raisonnement
* **Ollama** – llama2, llama3, mistral, qwen, deepseek-coder, phi, llava
* **Gemini** – gemini-2.5-pro, gemini-2.5-flash, gemini-2.0-flash, gemini-1.5-flash-latest, gemini-1.5-pro
* **Groq (xAI)** – deepseek-r1-distill-llama-70b, llama-3.1-8b-instant, openai/gpt-oss-120b, openai/gpt-oss-20b, groq/compound, qwen/qwen3-32b, moonshotai/kimi-k2-instruct-0905

::: tip
Tous les fournisseurs sont gérés via une implémentation **LaravelAiAdapter** unifiée. Vous pouvez changer de fournisseur sans changer votre workflow.
:::

## Comment générer du contenu textuel avec l'IA

Suivez ces étapes pour générer du contenu textuel pour vos produits à l'aide de Magic AI :

1. Naviguez vers **Catalog → Products** et cliquez sur **Edit** sur un produit.
2. Trouvez un champ de texte qui prend en charge la génération IA (Name, Short Description, Description, Meta Title, Meta Description, etc.).
3. Cliquez sur l'**icône Magic AI** (icône étincelle/baguette) à côté du champ.
4. L'IA génère du contenu basé sur :
   - Le **Prompt** configuré pour ce type de champ (depuis **Magic AI → Prompts**).
   - Les données existantes du produit (nom, catégorie, attributs) — qui sont substituées là où le prompt utilise des espaces réservés `@attribute_code`.
   - La personnalité **System Prompt** active (ton, température, max tokens).
5. Le contenu généré apparaît dans le champ.
6. Examinez et modifiez le contenu généré selon les besoins.
7. Cliquez sur **Save Product** pour conserver les modifications.

Vous pouvez également générer du contenu pour les catégories en ouvrant une page d'édition de catégorie et en utilisant l'icône baguette sur les champs pris en charge.

::: tip
Configurez votre fournisseur IA et votre modèle préférés dans **Magic AI → Settings → Text Generation** avant d'utiliser cette fonctionnalité. Choisissez un modèle qui équilibre qualité et coût pour vos besoins.
:::

## Comment générer des images avec l'IA

Suivez ces étapes pour générer des images de produit à l'aide de Magic AI :

1. Naviguez vers **Catalog → Products** et cliquez sur **Edit** sur un produit.
2. Trouvez un attribut **Image** ou **Gallery**.
3. Cliquez sur l'**icône Magic AI** à côté du champ d'image.
4. Saisissez une description de l'image que vous souhaitez (ou acceptez le prompt Image par défaut depuis **Magic AI → Prompts**).
5. L'IA génère une image de produit correspondant à la description.
6. Examinez l'image générée.
7. Acceptez-la pour l'attacher au produit.
8. Cliquez sur **Save Product**.

::: tip
La génération d'image nécessite une Platform dont le fournisseur prend en charge les images (OpenAI avec DALL-E, Gemini ou xAI). Configurez-la sous **Magic AI → Settings → Image Generation**.
:::

## Prompts personnalisés

Magic AI prend en charge les **prompts personnalisés** pour la génération de contenu. Un prompt est un modèle d'instruction qui indique au modèle *quoi* produire — par exemple, `Write a detailed product description for @name highlighting its features, benefits, and @color variant.` Chaque espace réservé (`@name`, `@color`, …) est remplacé par la valeur réelle de l'entité au moment de la génération.

Vous pouvez créer des prompts pour des cas d'utilisation spécifiques tels que :
- "Generate a professional product description for an electronics store"
- "Write SEO-optimized content with keywords for fashion products"
- "Create a brief 50-word summary suitable for mobile displays"

Gérez les prompts depuis **Magic AI → Prompts**. Chaque prompt appartient à un **type d'entité** (product / category) et à un **but** (text / image).

<!-- TODO: Add screenshot of custom prompts configuration -->

## Gestion des Prompts système

Les **Prompts système** configurent la **personnalité** globale de l'IA — voix, ton et paramètres de génération (température, max tokens) — et s'appliquent à chaque fonctionnalité Magic AI. **Un seul** system prompt est actif à un moment donné, ainsi tout votre catalogue conserve une voix cohérente.

Gérez-les depuis **Magic AI → Prompts système**. Voir la [section Prompts système de Configuration Magic AI](../configuration/magic-ai.md#system-prompts) pour la liste complète des 10 personnalités préréglées livrées avec UnoPim.

<!-- TODO: Add screenshot of system prompt management -->

## Magic Image

Magic AI inclut une fonctionnalité de **génération d'image** alimentée par DALL-E (OpenAI) et d'autres fournisseurs capables d'image. Vous pouvez créer des images de produit directement à partir d'une description textuelle :

1. Naviguez vers une page d'édition de produit.
2. Cliquez sur l'icône **Magic AI** près du champ image / galerie.
3. Saisissez une description de l'image que vous souhaitez générer.
4. Sélectionnez le modèle (par exemple, `dall-e-2` ou `dall-e-3`).
5. Cliquez sur **Generate**.

<!-- TODO: Add screenshot of Magic Image generation -->

## Auto-traduction

Magic AI fournit une **traduction automatique** des données produit. Lorsqu'elle est activée, l'enregistrement d'un produit déclenche la traduction de tous les champs spécifiques aux locales (nom, descriptions, champs meta, …) dans chaque locale cible configurée. Votre catalogue reste multilingue sans copier-coller manuel.

### UI des paramètres de traduction

La section Translation se trouve sur la page Magic AI Settings à **Magic AI → Settings**. Les champs :

| Champ | Ce qu'il fait |
|---|---|
| **Enabled** | Interrupteur principal pour la traduction alimentée par l'IA. |
| **Default Platform** | La plateforme IA utilisée pour les traductions. Vous pouvez choisir un fournisseur différent de votre plateforme de génération de contenu — utile pour optimiser le coût ou la vitesse. |
| **Translation Model** | Le modèle spécifique utilisé pour les tâches de traduction. Indépendant du modèle de génération de texte. |
| **Replace Existing Value** | Activé : écrase les valeurs de locale existantes. Désactivé : remplit uniquement les locales vides, préservant les traductions manuelles. |
| **Source Channel** | Le canal dont les valeurs sont la source de vérité de la traduction. |
| **Target Channel** | Le canal qui reçoit les valeurs traduites. |
| **Source Locale** | La locale à partir de laquelle traduire (par exemple, `en_US`). |
| **Target Locales** | Multi-sélection — chaque locale à auto-remplir. |

::: tip
Utilisez **Replace Existing Value** avec précaution. Désactivé, il préserve toutes les traductions manuelles que vous avez déjà faites ; activé, il regénère tout depuis zéro.
:::

### Comment fonctionne l'auto-traduction

Lorsque l'auto-traduction est activée et qu'un produit est créé ou mis à jour :

1. UnoPim lit les valeurs de locale source pour chaque champ spécifique à la locale.
2. Pour chaque locale cible, il appelle la Platform/Model de traduction avec la valeur source et la langue cible.
3. Il écrit les valeurs traduites dans les colonnes de locale cibles, en respectant les affectations canal/locale afin que seules les locales liées au canal cible soient peuplées.

Si **Replace Existing Value** est désactivé, l'étape de traduction ignore les champs qui ont déjà une valeur de locale — préservant vos modifications manuelles.

### Traduction manuelle via le sélecteur de locale

Vous pouvez aussi traduire manuellement : ouvrez un produit, basculez vers une locale cible dans le **sélecteur de locale** en haut du formulaire d'édition, et tapez les traductions ou invoquez l'icône baguette sur chaque champ. Les attributs qui prennent en charge les valeurs par locale affichent un badge de locale (par exemple, `EN_US`) afin que vous sachiez quelle locale vous éditez.

### Commande de traduction alimentée par l'IA

Pour la traduction en masse des données existantes, UnoPim v2.0 livre une **commande de traduction alimentée par l'IA** qui utilise Magic AI pour remplir les clés de locale manquantes dans les 32 locales non anglaises. Elle a auto-traduit environ **18 000 clés précédemment non traduites** sur 7 packages durant la sortie de la v2.0 elle-même — la même commande est disponible pour votre catalogue.

::: tip
Pour les charges de travail de traduction à fort volume, attribuez un fournisseur plus rapide/moins cher à la traduction et conservez un fournisseur premium pour la génération de contenu. Magic AI vous permet de les séparer par capacité.
:::

## AI-Powered Search

UnoPim v2.0 introduit **AI-Powered Search** qui utilise la similarité d'embedding et le classement sémantique pour fournir des résultats plus intelligents. Au lieu de faire correspondre les mots-clés caractère par caractère, il comprend le sens derrière la requête.

En arrière-plan :
- **Embedding Similarity Service** — convertit les données produit en embeddings vectoriels pour que les requêtes et les produits puissent être comparés sémantiquement.
- **Semantic Ranking Service** — réorganise les résultats selon leur correspondance avec l'intention de la requête, pas seulement ses mots.

<!-- TODO: Add screenshot of AI-powered search results -->

## Auto-enrichissement

L'**Auto-enrichissement** remplit automatiquement les informations produit manquantes — descriptions, meta titres, meta descriptions et autres champs de texte marqués comme incomplets. Lorsqu'il est activé sous **Magic AI → Settings → Agentic PIM**, Magic AI analyse chaque produit et génère des valeurs pour les champs vides.

C'est particulièrement utile pour :
- Les produits importés en masse qui manquent de descriptions.
- Les produits sans métadonnées SEO.
- Les enregistrements incomplets marqués par le système de complétude.

<!-- TODO: Add screenshot of auto-enrichment in action -->

Les valeurs enrichies peuvent être acheminées via la [file d'attente d'approbation](../ai-agent/approval-queue.md) si vous souhaitez les examiner avant leur mise en ligne.

## IA dans Agentic PIM Chat

L'AI Agent Chat réutilise les capacités **Generate Content** et **Generate Image** de Magic AI en tant qu'outils. Vous pouvez demander une génération de contenu en langage clair sans quitter le chat — et l'agent utilise les mêmes Platforms, Prompts et System Prompt que vous avez configurés, afin que les résultats correspondent au reste du catalogue.

Exemples de prompts de chat :

- "Generate a product description for SKU SHOE-100"
- "Create an image for product Nike Air Max"

Voir la page [AI Agent Chat](../ai-agent/ai-agent-chat.md) pour la liste complète des outils et les modèles d'interaction.

## Magic AI vs AI Agent — en un coup d'œil

| | Icônes baguette Magic AI | AI Agent (Agentic PIM) |
|---|---|---|
| **Trigger** | Cliquez sur une baguette à côté d'un champ | Bouton chat ; conversationnel |
| **Portée** | Un champ sur une entité à la fois | Tout dans le catalogue |
| **Sortie** | Texte / image pour le champ | Résultats d'outils diffusés dans le chat |
| **Multi-étapes** | Non — une requête, une réponse | Oui — peut planifier et enchaîner des appels d'outils |
| **Utilise Platforms/Prompts/Prompts système ?** | Oui | Oui |
| **A sa propre couche de sécurité ?** | Aperçu au niveau du champ avant enregistrement | File d'approbation, Confidence Threshold, Token Budget, Max Steps |

Ce sont deux interfaces sur le **même cœur Magic AI** — configurez Magic AI une fois sous **Magic AI → Platforms / Settings / Prompts / Prompts système**, et les deux ensembles de fonctionnalités s'allument.
