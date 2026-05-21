# Magic AI — Paramètres

> **Barre latérale :** Magic AI → **Paramètres**
> **URL :** `/admin/configuration/general/magic_ai`

La page **Paramètres** est l'endroit où vous acheminez chaque capacité IA d'UnoPim vers une **Platform** et un **Model** spécifiques. C'est aussi le foyer des contrôles **Agentic PIM** — le budget de tokens, le mode d'approbation, le bascule d'auto-enrichissement et le Catalog Quality Monitor.

## Que fait cette page ?

Elle contient quatre sections indépendantes, une par capacité :

1. **Agentic PIM** — configure l'AI Agent Chat (Open Agenting PIM) et ses contrôles de sécurité.
2. **Text Generation** — alimente les icônes baguette sur les champs de texte produit/catégorie.
3. **Image Generation** — alimente les icônes baguette sur les attributs image et galerie.
4. **Translation** — configure l'auto-traduction à l'enregistrement du produit, ainsi que la commande de traduction en masse.

Comme chaque section a sa propre liste déroulante Platform et Model, vous pouvez utiliser **différents fournisseurs pour différentes capacités** — par exemple, OpenAI pour la génération de contenu et Gemini pour la traduction.

<ImagePopup src="/assets/2.1/images/magic-ai/magic-ai-settings.png" alt="Paramètres Magic AI" />

## 1. Agentic PIM

Contrôle l'AI Agent conversationnel et les workflows en arrière-plan qu'il pilote (auto-enrichissement à la création de produit, Catalog Quality Monitor, file d'attente d'approbation).

| Champ | Ce qu'il fait |
|-------|---|
| **Enable AI Agent Chat** | Interrupteur principal pour le bouton "Open Agenting PIM". Lorsqu'il est désactivé, le bouton de chat est masqué et personne ne peut converser avec l'agent. |
| **Max Agent Steps Per Turn** | Combien d'appels d'outils l'agent peut enchaîner pour un seul message utilisateur. La liste déroulante propose des préréglages étiquetés plutôt que des nombres bruts — par exemple, **`3 (Fast)`** pour des réponses serrées et bon marché, et des préréglages plus élevés pour plus d'autonomie. Plus élevé = plus d'autonomie par tour ; plus bas = contrôle plus strict et tokens moins chers. |
| **Daily Token Budget** | Plafond quotidien global sur les dépenses de tokens de l'AI Agent (par exemple, `500000`). Lorsque le plafond est atteint, l'agent répond avec un avis de budget épuisé jusqu'à minuit. |
| **Auto-Enrichment on Product Create** | Lorsqu'il est activé, chaque nouveau produit est mis en file d'attente pour enrichissement IA — les descriptions manquantes, les champs SEO, etc. sont remplis automatiquement. |
| **Catalog Quality Monitor** | Exécute un balayage IA planifié qui rapporte les données de catalogue manquantes, minces ou incohérentes. |
| **Confidence Threshold** | Confiance minimum (par défaut 0.7 — "Balanced") requise avant qu'un changement proposé ne soit appliqué. En dessous du seuil, le changement est retenu pour examen. |
| **Change Approval Mode** | Comment les changements proposés par l'IA arrivent : *Auto-apply*, *Confirm & apply* (par défaut), ou *Manual review* (tout est acheminé vers la file d'attente d'approbation). |

::: tip
Commencez avec **Manual review** pendant que vous apprenez comment l'agent se comporte sur votre catalogue. Déplacez les workflows de confiance vers Auto-apply une fois que le tableau de bord Analytics montre une sortie constante et à haute confiance.
:::

## 2. Text Generation

Contrôle les icônes baguette à côté des champs de texte produit et catégorie (Name, Short Description, Description, Meta Title, Meta Description, URL Key, etc.).

| Champ | Ce qu'il fait |
|-------|---|
| **Enabled** | Bascule pour activer ou désactiver la génération de texte dans l'administration. |
| **Default Platform** | Quelle Platform sert les requêtes de texte. Choisissez **`-- Use Default Platform --`** pour suivre le défaut étoilé, ou remplacez par une plateforme spécifique. Les plateformes marquées avec `*` dans la liste déroulante sont la valeur par défaut actuelle. |
| **Default Model** | Le modèle utilisé pour le texte, tiré des modèles activés sur la Platform choisie. |

## 3. Image Generation

Contrôle les icônes baguette sur les attributs Image et Gallery. Seules les Platforms dont le fournisseur prend en charge la génération d'image (OpenAI / DALL-E, Gemini, xAI) apparaissent ici.

| Champ | Ce qu'il fait |
|-------|---|
| **Enabled** | Bascule pour activer ou désactiver la génération d'image. |
| **Default Platform** | Une Platform capable d'image. Choisissez **`-- Use Default Platform --`** pour suivre le défaut étoilé ; `*` dans la liste déroulante marque la valeur par défaut actuelle. |
| **Default Model** | Le modèle d'image spécifique (par exemple, `dall-e-3`). |

## 4. Translation

Contrôle l'auto-traduction à l'enregistrement du produit et la commande de traduction en masse alimentée par l'IA. Comme la traduction tend à être à fort volume, vous pouvez lui attribuer une Platform différente (souvent moins chère/plus rapide).

| Champ | Ce qu'il fait |
|-------|---|
| **Enabled** | Activez ou désactivez la traduction alimentée par l'IA. |
| **Default Platform** | La Platform utilisée pour les requêtes de traduction. Choisissez **`-- Use Default Platform --`** pour suivre le défaut étoilé ; `*` dans la liste déroulante marque la valeur par défaut actuelle. |
| **Translation Model** | Le modèle spécifique utilisé pour la traduction — indépendant du modèle de génération de texte. |
| **Replace Existing Value** | Activé : la re-traduction écrase les valeurs de locale existantes. Désactivé : seuls les champs de locale vides sont remplis, préservant les traductions manuelles. |
| **Source Channel** | Le canal dont les valeurs servent de source de vérité. |
| **Target Channel** | Le canal qui reçoit les valeurs traduites. |
| **Source Locale** | La locale à partir de laquelle traduire (par exemple, `en_US`). |
| **Target Locales** | Multi-sélection — chaque locale à auto-remplir. |

::: tip
Vous pouvez attribuer un fournisseur IA différent (potentiellement moins cher ou plus rapide) spécifiquement pour les traductions, en gardant votre fournisseur premium pour la génération de contenu.
:::

Cliquez sur **Save Configuration** en bas de la page pour appliquer tous les changements. Les paramètres prennent effet immédiatement — aucun redémarrage nécessaire.

## D'où viennent les valeurs

Les listes déroulantes Platform / Model sur cette page sont entièrement peuplées depuis la page **[Platforms](./platforms.md)**. Si une Platform n'est pas listée, soit (a) elle est désactivée, (b) son fournisseur ne prend pas en charge la capacité (par exemple, Ollama n'apparaît pas dans Image Generation), ou (c) vous ne l'avez pas encore enregistrée.

De même, les listes déroulantes Source / Target Channel et Locale de la section **Translation** sont peuplées depuis votre configuration de canal et de locale (voir **Settings → Channels** et **Settings → Locales**).
