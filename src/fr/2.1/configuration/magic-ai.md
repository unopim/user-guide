# Configuration Magic AI

**Magic AI** est la couche intégrée d'UnoPim pour générer, enrichir et traduire le contenu de produit et de catégorie à l'aide de grands modèles de langage (LLM). Avant de pouvoir utiliser une fonctionnalité IA — les icônes baguette Magic AI sur les champs produit, l'AI Agent Chat, l'auto-traduction ou l'auto-enrichissement — vous devez d'abord configurer Magic AI depuis la barre latérale d'administration.

<ImagePopup src="/assets/2.1/images/configuration/AiConfiguration.png" alt="Vue d'ensemble de la configuration Magic AI" />

## Que fait Magic AI ?

Magic AI connecte votre instance UnoPim à un ou plusieurs fournisseurs IA externes (OpenAI, Anthropic, Gemini, Ollama, Groq, etc.) et expose cette puissance à l'intérieur du PIM de quatre manières :

| Capacité | Où elle apparaît dans l'UI | Ce qu'elle fait |
|---|---|---|
| **Génération de texte** | Icône baguette à côté des champs de texte produit/catégorie | Écrit des noms, descriptions, champs meta SEO, textes de catégorie |
| **Génération d'image** | Icône baguette à côté des attributs image/galerie | Crée des images de produit à partir d'une description textuelle |
| **Traduction** | Automatique à l'enregistrement du produit, plus une commande en masse | Traduit les valeurs spécifiques aux locales dans toutes les locales configurées |
| **Agentic PIM (AI Agent Chat)** | Bouton "Open Agenting PIM", en bas à droite | Assistant conversationnel qui appelle plus de 30 outils PIM en votre nom |

Les quatre partagent les mêmes connexions fournisseurs, la même bibliothèque de prompts et la même personnalité système — ainsi, lorsque vous modifiez les paramètres Magic AI, chaque fonctionnalité IA dans UnoPim récupère le changement.

## Comment fonctionne Magic AI ?

Le pipeline est le même pour chaque fonctionnalité IA — de la génération de champs à l'AI Agent :

<ImagePopup src="/assets/2.1/images/ai-agent/agentic-pim-pipeline.png" alt="Pipeline Agentic PIM — Workflow en 5 étapes" />

1. **Vous déclenchez une requête** — cliquez sur une icône baguette, enregistrez un produit avec l'auto-traduction activée, ou envoyez un message de chat à l'AI Agent.
2. **UnoPim assemble l'entrée** — il combine :
   - Les données de l'entité cible (par exemple, le nom du produit, les attributs, la catégorie)
   - Le **Prompt** correspondant de Magic AI → Prompts (avec les espaces réservés `@attribute` développés)
   - La personnalité **System Prompt** active (ton, température, max tokens)
3. **UnoPim transmet la requête** via le **LaravelAiAdapter** unifié à la plateforme/au modèle que vous avez sélectionné dans Magic AI → Settings.
4. **Le fournisseur répond** avec du texte généré, une image ou une traduction.
5. **UnoPim applique le résultat** — soit directement dans le champ, dans la base de données (après approbation optionnelle), soit en streaming dans le chat.


Tout ce qui se trouve entre l'étape 2 et l'étape 5 est configuré à partir des quatre sous-pages décrites ci-dessous : **Platforms**, **Paramètres**, **Prompts** et **Prompts système**.

::: tip
Les clés API n'apparaissent jamais en clair. Tous les identifiants fournisseurs sont stockés dans la base de données avec un **stockage chiffré des identifiants**, et la clé est masquée dans l'UI après que vous l'ayez enregistrée.
:::

## Le menu Magic AI

Développez **Magic AI** dans la barre latérale d'administration et vous verrez quatre éléments de sous-menu. Chacun possède une tranche spécifique de la configuration IA — ensemble, ils vous donnent un contrôle complet sur *quel fournisseur s'exécute, quels modèles il utilise, quelles instructions il suit et quelle personnalité il adopte*.

| Élément de menu | URL | Ce que vous configurez ici | Quand visiter |
|---|---|---|---|
| **Platforms** | `/admin/magic-ai/platforms` | Connexions des fournisseurs — ajoutez un compte OpenAI / Anthropic / Gemini / Ollama / Groq, collez sa clé API et choisissez les modèles à activer. | Configuration initiale, rotation des clés API, ajout d'un nouveau fournisseur, activation de nouveaux modèles. |
| **Paramètres** | `/admin/configuration/general/magic_ai` | Routage par capacité — choisissez quelle Platform + quel Model gère la génération de texte, la génération d'image, la traduction et Agentic PIM. C'est aussi ici que se trouvent le budget quotidien de tokens, le mode d'approbation et les interrupteurs d'auto-enrichissement. | Chaque fois que vous voulez changer quel fournisseur exécute une fonctionnalité donnée, ajuster les limites de sécurité ou activer/désactiver des fonctionnalités. |
| **Prompts** | `/admin/magic-ai/prompts` | Modèles de prompts — le texte d'instruction que Magic AI envoie avec chaque requête, en utilisant des espaces réservés `@attribute_code` qui sont remplacés par les valeurs réelles de l'entité. | Adapter la sortie IA à votre voix de marque, ajouter des prompts pour de nouveaux attributs ou catégories, ajuster les prompts par défaut. |
| **Prompts système** | `/admin/magic-ai/system-prompts` | Personnalité IA globale — ton, température, max tokens. Un seul est actif à la fois, ainsi tout votre catalogue conserve une voix cohérente. | Changer le ton général (formel vs décontracté, concis vs descriptif), ajuster la créativité, plafonner la longueur de la réponse. |

### Comment les quatre éléments de menu se connectent

<ImagePopup src="/assets/2.1/images/magic-ai/magic-ai-config-flow.png" alt="Hiérarchie de configuration Magic AI" />

**À lire de haut en bas, vous configurez une fois, puis utilisez partout.** Un clic sur la baguette sur une description de produit, un champ traduit automatiquement ou un message de chat à l'AI Agent suivent tous le même chemin à travers ces quatre éléments de menu.


### Ordre de configuration minimum

Si vous configurez Magic AI pour la première fois, visitez les éléments de menu dans cet ordre :

1. **Platforms** — ajoutez au moins un fournisseur, collez la clé API, activez les modèles que vous prévoyez d'utiliser, et **marquez-en un par défaut avec une étoile**.
2. **Paramètres** — activez les capacités dont vous avez besoin (Text / Image / Translation / Agentic PIM) et choisissez une Platform + un Model pour chacune. Définissez le Daily Token Budget et le Change Approval Mode pendant que vous êtes ici.
3. **Prompts** — passez en revue les prompts fournis ; ajustez ou ajoutez les vôtres afin que l'IA écrive dans la voix attendue par votre catalogue.
4. **Prompts système** — confirmez que la personnalité active correspond au ton que vous souhaitez sur l'ensemble du catalogue. Activez-en une différente si nécessaire.

Une fois ces quatre pages enregistrées, chaque fonctionnalité Magic AI dans l'administration — icônes baguette, auto-traduction, auto-enrichissement et AI Agent Chat — est prête à être utilisée.

## Platforms

Naviguez vers **Magic AI → Platforms** pour gérer les connexions des fournisseurs IA que chaque fonctionnalité Magic AI utilise.

<ImagePopup src="/assets/2.1/images/magic-ai/ai-platforms.png" alt="Plateformes IA" />

### Ce qu'est une "Platform"

Une *Platform* est une connexion fournisseur configurée : un fournisseur (OpenAI, Anthropic, Gemini, Ollama, Groq, …), une clé API et la liste des modèles que vous avez activés de ce fournisseur. Vous pouvez configurer autant de Platforms que vous le souhaitez — par exemple, une plateforme OpenAI pour l'écriture, une plateforme Gemini pour la traduction et une plateforme Ollama pour les charges de travail sur site — et UnoPim acheminera chaque fonctionnalité IA vers la plateforme que vous attribuez.

### Datagrid des Platforms

| Colonne | Description |
|--------|-------------|
| **Label** | Le nom que vous avez attribué à la configuration de la plateforme |
| **Provider** | Le fournisseur IA (OpenAI, Anthropic, Gemini, Ollama, Groq, etc.) |
| **Models** | Les modèles activés pour cette plateforme |
| **Default** | Si cette plateforme est la valeur par défaut (Oui/Non) |
| **Status** | Activé ou désactivé |
| **Created At** | Date à laquelle la plateforme a été ajoutée |
| **Actions** | Étoile (définir par défaut), Éditer (icône crayon), Supprimer (icône corbeille) |

### Ajouter une Platform

Cliquez sur **Add Platform** en haut à droite. Une modale en deux étapes intitulée **"Add AI Platform"** s'ouvre.

**Étape 1 — choisir le fournisseur.**

Le premier écran de la modale n'a qu'un seul champ :

- **Provider *** — liste déroulante listant chaque fournisseur pris en charge (OpenAI, Anthropic, Gemini, Ollama, Groq, etc.).

Sélectionnez un fournisseur et cliquez sur **Save**. La modale se développe pour afficher le reste des champs.

<ImagePopup src="/assets/2.1/images/magic-ai/add-platform.png" alt="Ajouter une plateforme IA — Étape 1" />

**Étape 2 — remplir les détails spécifiques au fournisseur.**

- **Label** — Saisissez un nom descriptif pour cette configuration de plateforme (par exemple, *"OpenAI Production"*, *"Gemini Translation"*). Ce nom apparaît dans les listes déroulantes en aval sur Magic AI → Settings.
- **API Key** — Collez la clé API depuis votre compte fournisseur. Elle est chiffrée à l'enregistrement et masquée dans l'UI par la suite.
- **Models** — Une multisélection listant les modèles disponibles du fournisseur sélectionné. Seuls les modèles que vous cochez ici apparaissent dans les listes déroulantes des Settings.
- **Status** — Bascule pour activer ou désactiver la plateforme.

Cliquez sur **Save** pour terminer. La plateforme apparaît dans le datagrid.

::: tip
Les identifiants API sont stockés avec un stockage chiffré pour la sécurité. Vos clés API ne sont jamais stockées en clair.
:::

### Actions sur la Platform

- **Icône étoile** — Définit la plateforme par **défaut**. La valeur par défaut est ce que le système utilise lorsqu'une fonctionnalité est définie sur *"Use Default Platform"*. Une seule plateforme peut être la valeur par défaut à la fois.
- **Icône crayon** — Ouvre la modale d'édition pour mettre à jour le label, la clé API, les modèles ou le statut de la plateforme.
- **Icône corbeille** — Supprime la configuration de la plateforme. Cette action ne peut pas être annulée.

### Comment la sélection de plateforme se propage vers les fonctionnalités

```
Platforms (provider + key + models)
        │
        ▼
Settings (pick platform + model per feature)
        │
        ├─► Text Generation ──► Wand icons on text fields
        ├─► Image Generation ──► Wand icons on image/gallery fields
        ├─► Translation ──────► Auto-translate on save + bulk command
        └─► Agentic PIM ──────► AI Agent Chat
```

## Settings

Naviguez vers **Magic AI → Settings** dans la barre latérale. Cela ouvre la page de configuration à `/admin/configuration/general/magic_ai` avec quatre sections — une par capacité. Pour chaque capacité, vous choisissez **quelle Platform** et **quel Model** doivent la gérer. Utiliser différentes Platforms pour différentes capacités vous permet d'optimiser le coût, la vitesse et la qualité de manière indépendante.

<ImagePopup src="/assets/2.1/images/magic-ai/magic-ai-settings.png" alt="Paramètres Magic AI" />

### 1. Agentic PIM

Cette section contrôle l'**AI Agent Chat** (l'assistant conversationnel) et les workflows autonomes qu'il alimente : auto-enrichissement à la création de produit, surveillance de la qualité du catalogue et file d'attente d'approbation qui se trouve devant les changements proposés par l'IA.

| Champ | Ce qu'il fait |
|-------|---|
| **Enable AI Agent Chat** | Interrupteur principal pour le bouton de chat "Open Agenting PIM". Lorsqu'il est désactivé, le bouton flottant est masqué et personne ne peut converser avec l'agent. |
| **Max Agent Steps Per Turn** | Combien d'appels d'outils l'agent peut enchaîner pour un seul message utilisateur (par défaut : 5). Plus élevé = plus d'autonomie par tour ; plus bas = contrôle plus strict et tokens moins chers. |
| **Daily Token Budget** | Plafond quotidien strict sur les tokens dépensés par l'agent (par exemple, 500 000). Lorsque le plafond est atteint, l'agent répond avec un avis de budget épuisé jusqu'au lendemain. |
| **Auto-Enrichment on Product Create** | Lorsqu'il est activé, chaque produit nouvellement créé est mis en file d'attente pour enrichissement IA — les descriptions manquantes, les champs SEO, etc. sont remplis automatiquement. |
| **Catalog Quality Monitor** | Exécute un balayage IA planifié qui rapporte les données manquantes, minces ou incohérentes dans le catalogue. |
| **Confidence Threshold** | Score de confiance minimum (par défaut : 0.7 — "Balanced") que l'IA doit atteindre avant qu'un changement proposé ne soit appliqué. En dessous du seuil, les changements sont retenus pour examen. |
| **Change Approval Mode** | Comment les changements proposés par l'IA arrivent dans vos données : *Auto-apply*, *Confirm & apply* (par défaut — l'IA propose des valeurs, vous demande, puis exécute), ou *Manual review* (tout va dans la file d'attente d'approbation). |

### 2. Text Generation

Cette section contrôle les icônes baguette à côté des champs de texte (nom du produit, descriptions, champs meta SEO, textes de catégorie). Lorsqu'un utilisateur clique sur une icône baguette, UnoPim envoie le prompt du champ à la Platform et au Model configurés ici.

| Champ | Ce qu'il fait |
|-------|---|
| **Enabled** | Bascule pour activer ou désactiver la génération de texte dans l'administration. |
| **Default Platform** | Choisissez quelle Platform sert les requêtes de texte. Choisissez *"Use Default Platform"* pour suivre la plateforme étoilée, ou remplacez par une spécifique. |
| **Default Model** | Le modèle utilisé pour la génération de texte, tiré des modèles activés sur la Platform choisie. |

### 3. Image Generation

Cette section contrôle les icônes baguette sur les attributs Image et Gallery. Seules les Platforms dont le fournisseur prend en charge la génération d'image (OpenAI / DALL-E, Gemini, xAI) sont listées.

| Champ | Ce qu'il fait |
|-------|---|
| **Enabled** | Bascule pour activer ou désactiver la génération d'image. |
| **Default Platform** | La Platform capable d'image à utiliser. |
| **Default Model** | Le modèle d'image spécifique (par exemple, `dall-e-3`). |

### 4. Translation

La traduction peut s'exécuter automatiquement chaque fois qu'un produit est enregistré, et peut également être déclenchée en masse via la commande de traduction. Comme la traduction tend à être à fort volume, Magic AI vous permet d'attribuer une **Platform différente** — généralement moins chère ou plus rapide — pour ce travail uniquement.

| Champ | Ce qu'il fait |
|-------|---|
| **Enabled** | Bascule pour activer ou désactiver la traduction alimentée par l'IA. |
| **Default Platform** | La Platform utilisée pour les requêtes de traduction. |
| **Translation Model** | Le modèle spécifique utilisé pour la traduction — indépendant du modèle de génération de texte. |
| **Replace Existing Value** | Activé : la re-traduction écrase les valeurs de locale existantes. Désactivé : seuls les champs de locale vides sont remplis, préservant les traductions manuelles. |
| **Source Channel** | Le canal dont les valeurs servent de source de vérité. |
| **Target Channel** | Le canal qui reçoit les valeurs traduites. |
| **Source Locale** | La locale à partir de laquelle traduire (par exemple, `en_US`). |
| **Target Locales** | Multi-sélection ; choisissez chaque locale que vous souhaitez auto-remplir. |

::: tip
Vous pouvez attribuer un fournisseur IA différent (potentiellement moins cher ou plus rapide) spécifiquement pour les traductions, en gardant votre fournisseur premium pour la génération de contenu.
:::

Cliquez sur **Save Configuration** en bas de la page pour appliquer tous les changements. Les paramètres prennent effet immédiatement — aucun redémarrage nécessaire.

## Prompts

Naviguez vers **Magic AI → Prompts** pour gérer les **modèles de prompts** qui indiquent à l'IA ce qu'elle doit produire. Un prompt est l'instruction envoyée avec chaque requête de génération ; c'est là que vous intégrez votre voix de marque, votre structure requise ou vos règles spécifiques au catalogue.

<ImagePopup src="/assets/2.1/images/magic-ai/prompts.png" alt="Prompts" />

### Comment fonctionnent les prompts

Chaque prompt est lié à un **Entity Type** (product ou category) et un **Purpose** (Text Generation ou Image Generation). Au moment de la génération, UnoPim :

1. Choisit le prompt qui correspond à l'entité et au but.
2. Remplace chaque espace réservé `@attribute_code` par la valeur réelle de l'entité.
3. Ajoute la personnalité System Prompt active par-dessus.
4. Envoie les instructions combinées à la Platform/au Model configuré pour cette capacité.

Ainsi, un prompt `Write a product description for @name in the @color variant` devient, au moment de la génération, quelque chose comme `Write a product description for Air Max 90 in the Blue variant`.

### Datagrid des Prompts

| Colonne | Description |
|--------|-------------|
| **Title** | Le nom du prompt |
| **Prompt** | Le texte du prompt avec les espaces réservés |
| **Entity Type** | L'entité à laquelle s'applique le prompt (product ou category) |
| **Purpose** | Si le prompt est pour la génération de texte ou la génération d'image |
| **Created At** | Date à laquelle le prompt a été créé |
| **Updated At** | Date à laquelle le prompt a été modifié pour la dernière fois |
| **Actions** | Éditer (icône crayon), Supprimer (icône corbeille) |

### Création d'un Prompt

Cliquez sur le bouton **Create Prompt** pour ajouter un nouveau prompt. Remplissez :

- **Title** — comment il apparaît dans la liste.
- **Prompt** — le texte d'instruction. Utilisez des espaces réservés `@attribute_code` pour toute valeur que vous souhaitez remplir depuis l'entité.
- **Entity Type** — product ou category.
- **Purpose** — Text Generation ou Image Generation.

### Prompts fournis

UnoPim est livré avec **18 prompts préconfigurés**. La plupart ciblent la génération d'image (styles de photographie de produit) et quelques-uns ciblent la génération de texte. Tous ciblent `product` comme Entity Type. Exemples que vous verrez dans la liste :

| Title | Purpose |
|---|---|
| Packaging Mockup | Image Generation |
| Hero Banner Image | Image Generation |
| Multi-Angle Product | Image Generation |
| Flat Lay Composition | Image Generation |
| Product with Size Reference | Image Generation |
| Close-Up Detail Shot | Image Generation |
| Lifestyle Product Image | Image Generation |
| White Background Product Shot | Image Generation |
| Product Elevator Pitch | Text Generation |
| Product Brief | Text Generation |

Ouvrez **Magic AI → Prompts** pour voir la liste complète, modifier n'importe quel préréglage ou en créer de nouveaux.

::: tip
Utilisez les codes d'attribut comme espaces réservés (préfixés par `@`) dans vos prompts. L'IA les remplacera par les valeurs réelles du produit ou de la catégorie en cours de traitement.
:::

## Prompts système

Naviguez vers **Magic AI → Prompts système** pour configurer la **personnalité** de l'IA — le ton, le style et les paramètres de génération qui se trouvent sous chaque prompt.

<ImagePopup src="/assets/2.1/images/magic-ai/system-prompts.png" alt="Prompts système" />

### Comment un System Prompt diffère d'un Prompt

- Un **Prompt** dit *quoi* écrire pour un champ spécifique ("écris une description de produit …").
- Un **System Prompt** dit *comment* écrire — voix, ton, créativité, longueur. Il est appliqué devant chaque prompt, globalement.

**Un seul System Prompt est actif à un instant donné**. L'activation d'un nouveau désactive automatiquement le précédent, ainsi tout le catalogue conserve une voix cohérente.

### Datagrid des Prompts système

| Colonne | Description |
|--------|-------------|
| **Title** | Le nom du system prompt |
| **Tone** | Le ton conversationnel (par exemple, Confident, Vivid, Brief) |
| **Max Tokens** | Le nombre maximum de tokens pour les réponses IA |
| **Temperature** | Le niveau de créativité (plus bas = plus ciblé, plus élevé = plus créatif) |
| **Status** | Activé ou désactivé |
| **Created At** | Date à laquelle le system prompt a été créé |
| **Updated At** | Date à laquelle le system prompt a été modifié pour la dernière fois |
| **Actions** | Éditer (icône crayon), Supprimer (icône corbeille) |

### Prompts système préréglés

UnoPim est livré avec 10 Prompts système préréglés. Tous sont livrés avec **Max Tokens = 1024** ; seule la Temperature diffère. Un seul System Prompt peut être activé à la fois.

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

### Création d'un System Prompt

Cliquez sur le bouton **Create System Prompt** pour définir une nouvelle personnalité IA. Configurez :

- **Title** — apparaît dans le datagrid.
- **Tone description** — description en langage simple de la voix (le modèle lit ceci).
- **Max Tokens** — plafonne la longueur de la réponse. Des valeurs plus basses = sortie plus courte et coût plus bas.
- **Temperature** — 0.0–1.0. Les valeurs basses gardent les réponses serrées et reproductibles ; les valeurs élevées ajoutent de la variété et du flair.
- **Status** — l'activation de celui-ci désactive le prompt actuellement actif.

::: tip
Un seul system prompt peut être actif à la fois. L'activation d'un nouveau system prompt désactive automatiquement celui qui était actif précédemment. Choisissez un system prompt qui correspond au ton que vous souhaitez sur tout le contenu généré par IA.
:::

## Liste de vérification de la configuration

Avant de commencer à utiliser les fonctionnalités Magic AI, assurez-vous d'avoir fait les quatre éléments suivants :

1. **Magic AI → Platforms** — Ajoutez au moins une plateforme, collez une clé API, activez les modèles que vous voulez, et **marquez-en une comme défaut avec une étoile**.
2. **Magic AI → Settings** — Activez les capacités dont vous avez besoin (Text / Image / Translation / Agentic PIM) et choisissez une Platform + un Model pour chacune.
3. **Magic AI → Prompts** — Passez en revue les prompts fournis ou créez les vôtres pour correspondre à votre voix de marque.
4. **Magic AI → Prompts système** — Confirmez que la personnalité active correspond au ton que vous souhaitez sur l'ensemble du catalogue.

Une fois ces quatre pages configurées, chaque fonctionnalité Magic AI — icônes baguette, AI Agent Chat, auto-traduction et auto-enrichissement — fonctionnera sans configuration supplémentaire.
