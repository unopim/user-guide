# Magic AI — Platforms

> **Barre latérale :** Magic AI → **Platforms**
> **URL :** `/admin/magic-ai/platforms`

La page **Platforms** est l'endroit où vous enregistrez les fournisseurs IA avec lesquels UnoPim est autorisé à parler. Sans au moins une plateforme active, toutes les autres fonctionnalités Magic AI — icônes baguette, auto-traduction, auto-enrichissement et AI Agent Chat — restent désactivées.

## Qu'est-ce qu'une Platform ?

Une *Platform* est une connexion fournisseur configurée. Elle comporte trois parties :

1. **Provider** — l'entreprise dont vous souhaitez utiliser l'IA (OpenAI, Anthropic, Gemini, Ollama, Groq, **Custom**, etc.).
2. **Clé API** — le secret qui autorise UnoPim à appeler l'API de ce fournisseur.
3. **Modèles activés** — quels modèles du fournisseur doivent être disponibles à l'intérieur d'UnoPim.

Vous pouvez enregistrer **autant de Platforms que vous le souhaitez**. Une configuration courante est un fournisseur premium pour le contenu (par exemple, OpenAI `gpt-4o`) et un fournisseur moins cher ou plus rapide pour la traduction (par exemple, Gemini `gemini-1.5-flash`). La page Platforms les garde côte à côte ; la page **Paramètres** décide quelle Platform gère quelle capacité.

::: tip Custom Provider
Vous devez appeler un service compatible OpenAI qui n'est pas sur la liste préréglée — par exemple une passerelle auto-hébergée, un proxy d'entreprise ou un fournisseur d'inférence alternatif ? Choisissez le fournisseur **Custom** et fournissez votre propre **Base URL**. UnoPim acheminera les requêtes via le même pipeline `LaravelAiAdapter` utilisé pour les fournisseurs intégrés.
:::

## Que fait cette page ?

- Liste chaque Platform que vous avez enregistrée, ainsi que son statut et ses modèles.
- Vous permet d'**ajouter**, **éditer**, **activer/désactiver**, **supprimer** et **définir une Platform par défaut**.
- Chiffre chaque clé API à l'enregistrement — les clés ne sont jamais stockées en clair et sont masquées dans l'UI.

<ImagePopup src="/assets/2.1/images/magic-ai/ai-platforms.png" alt="Plateformes IA" />

## Datagrid des Platforms

| Colonne | Description |
|--------|-------------|
| **Label** | Le nom que vous avez attribué à la configuration de la plateforme. |
| **Provider** | Le fournisseur IA (OpenAI, Anthropic, Gemini, Ollama, Groq, etc.). |
| **Models** | Les modèles activés pour cette plateforme. |
| **Default** | Si cette plateforme est la valeur par défaut (Oui/Non). |
| **Status** | Activé ou désactivé. |
| **Created At** | Date à laquelle la plateforme a été ajoutée. |
| **Actions** | Étoile (définir par défaut), Éditer (icône crayon), Supprimer (icône corbeille). |

## Ajouter une Platform

Cliquez sur le bouton **Add Platform** dans le coin supérieur droit. Une modale s'ouvre avec les champs suivants :

1. **Provider** — Sélectionnez dans la liste déroulante (OpenAI, Anthropic, Gemini, Ollama, Groq, **Custom**, etc.).
2. **Label** — Un nom descriptif comme *"OpenAI Production"* ou *"Gemini Translation"*. C'est ce que vous verrez dans les listes déroulantes des Settings.
3. **Base URL** *(fournisseur Custom uniquement)* — Le endpoint compatible OpenAI à appeler (par exemple, `https://gateway.example.com/v1`). Affiché uniquement lorsque **Provider = Custom**.
4. **API Key** — Collez la clé depuis votre compte fournisseur. Elle est chiffrée avant d'arriver dans la base de données.
5. **Models** — Multi-sélectionnez les modèles que vous souhaitez exposer. Seuls les modèles que vous cochez ici apparaissent dans les listes déroulantes en aval Text / Image / Translation / Agentic PIM sur la page Settings.
6. **Status** — Bascule pour activer ou désactiver la plateforme.

<ImagePopup src="/assets/2.1/images/magic-ai/add-platform.png" alt="Ajouter une plateforme" />

::: tip
Les identifiants API sont stockés avec un stockage chiffré pour la sécurité. Vos clés API ne sont jamais stockées en clair.
:::

### Test de connexion

Après avoir enregistré, utilisez l'action **Test Connection** sur la ligne de la plateforme pour vérifier les identifiants avant de s'y fier. Le test est alimenté par le nouveau **ModelRecommender**, qui :

- Sélectionne un modèle compatible texte dans votre liste activée (les modèles image uniquement sont ignorés, pour qu'ils ne renvoient pas un faux négatif).
- Envoie une petite requête de sondage au fournisseur.
- Rapporte un succès/échec clair. En cas d'échec, le [PrismErrorResolver](../ai-agent/index.md) traduit l'erreur sous-jacente du fournisseur en un message convivial (clé invalide, limite de débit, modèle indisponible, etc.).

::: tip
Exécutez Test Connection chaque fois que vous faites tourner une clé API, changez la Base URL d'un fournisseur Custom, ou cochez un nouveau modèle — c'est le moyen le plus rapide de confirmer que la plateforme est saine sans ouvrir l'AI Agent Chat.
:::

## Actions sur la Platform

- **Icône étoile** — Définit la plateforme par **défaut**. Partout où la page Settings affiche *"Use Default Platform"*, cela se résout vers la plateforme étoilée. Une seule peut être la valeur par défaut à la fois.
- **Test Connection**  — Valide les identifiants, la Base URL (pour les fournisseurs Custom) et au moins un modèle de texte utilisable. Les modèles image uniquement sont ignorés automatiquement.
- **Icône crayon** — Ouvre la modale d'édition pour que vous puissiez mettre à jour le label, faire tourner la clé API, ajuster la liste des modèles ou basculer le statut.
- **Icône corbeille** — Supprime la configuration de la plateforme. Toute fonctionnalité qui pointe encore vers cette plateforme dans Settings retombe sur la valeur par défaut. Irréversible.

## Comment la sélection de Platform se propage vers les fonctionnalités

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

Chaque requête — d'une génération de champ unique à un plan complexe d'AI Agent — suit le **Pipeline Agentic PIM** :

<ImagePopup src="/assets/2.1/images/ai-agent/agentic-pim-pipeline.png" alt="Pipeline Agentic PIM — Workflow en 5 étapes" />


## Configuration minimum

Pour faire fonctionner n'importe quelle fonctionnalité Magic AI :

1. Enregistrez au moins **une** Platform.
2. Assurez-vous qu'elle a au moins **un** Model activé.
3. Définissez son statut sur **Enabled**.
4. **Étoilez** une Platform comme défaut.

Une fois cela fait, allez dans **Magic AI → Settings** pour acheminer chaque capacité (Text / Image / Translation / Agentic PIM) vers une Platform et un Model de votre choix.
