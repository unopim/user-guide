# AI Agent Chat

L'**AI Agent Chat** est l'interface conversationnelle d'Agentic PIM. Depuis une seule fenêtre de chat, vous pouvez gérer produits, catégories, attributs, qualité des données et opérations en masse — simplement en décrivant ce dont vous avez besoin.

## Que fait l'AI Agent Chat ?

Le panneau de chat est un point d'entrée unique pour **plus de 30 outils PIM**. Lorsque vous tapez un message, l'agent :

- Interprète votre intention.
- Choisit un ou plusieurs outils à appeler (créer un produit, rechercher, édition en masse, générer du contenu, gérer les associations, etc.).
- Exécute les outils sur de vraies données UnoPim, dans le cadre de vos autorisations ACL.
- Renvoie les résultats en streaming dans le chat en temps réel.

Tout ce que vous pouvez faire depuis l'UI d'administration, vous pouvez le faire en le demandant dans le chat — et l'agent peut enchaîner plusieurs étapes en une seule requête, de sorte que des tâches qui prendraient de nombreux clics se réduisent à une seule instruction.

## Comment ça fonctionne ?

```
You type a message
        │
        ▼
Agent reads: message + session history + remembered facts + active System Prompt
        │
        ▼
Agent picks a tool (or plans a chain of tools)
        │
        ▼
Each tool runs against UnoPim data (gated by your ACL permissions)
        │
        ▼
Risky / low-confidence changes → Approval Queue
Safe changes → applied immediately
        │
        ▼
Response streams back into chat over SSE
```

La Platform et le Model utilisés pour cette boucle de raisonnement sont configurés sous **Magic AI → Settings → Agentic PIM**. La personnalité (ton, température, max tokens) provient du **System Prompt** actif.


## Ouvrir l'AI Agent Chat

Cliquez sur l'**icône étoile** flottante en bas à droite de n'importe quelle page d'administration. Le panneau de chat glisse depuis le bord droit avec l'en-tête **"Agenting PIM — AI-powered operations"**.

 <ImagePopup src="/assets/2.0/images/ai-agent/ai-agent-chat.png" alt="AI Agent Chat" />

Un engrenage de paramètres dans l'en-tête du panneau redirige vers `/admin/ai-agent/settings` (qui résout vers **Magic AI → Settings**), où vous pouvez configurer les plateformes, les modèles et les budgets.

Le panneau comporte trois onglets :
- **Capabilities** — Parcourez les 30+ outils que l'agent peut appeler.
- **Chat** — Interface conversationnelle. Lorsqu'elle est vide, elle affiche *"How can I help with your catalog?"* sous une icône étoile et l'en-tête **General Chat**.
- **Sessions** — Vos conversations passées. Un badge numérique sur l'onglet indique combien de sessions sont non lues.

 <ImagePopup src="/assets/2.0/images/ai-agent/ai-agent-chat-tab.png" alt="Onglet AI Agent Chat" />

Une fois ouvert, le panneau de chat glisse depuis le côté droit de l'écran. Vous pouvez commencer à taper votre demande immédiatement.

## Onglet Capabilities

L'onglet Capabilities liste chaque outil que l'agent peut invoquer. Chaque outil représente une opération PIM spécifique que vous pouvez déclencher via le langage naturel — vous n'appelez pas les outils par leur nom, vous décrivez ce que vous voulez et l'agent choisit le bon.

| # | Outil | Ce qu'il fait |
|---|------|-------------|
| 1 | **Create from Image** | Téléchargez des photos pour créer automatiquement des produits |
| 2 | **Update Products** | Mise à jour des attributs/statut par SKU |
| 3 | **Search Products** | Trouver des produits par SKU, nom ou statut |
| 4 | **Find Similar** | Trouver des produits similaires à l'aide de l'IA |
| 5 | **Generate Content** | Nom, description et SEO générés par IA |
| 6 | **Generate Image** | Créer des images de produit à partir de texte |
| 7 | **Edit Product Image** | Suppression d'arrière-plan, amélioration et retouche |
| 8 | **Assign Categories** | Affecter des chemins de catégorie aux produits |
| 9 | **List Attributes** | Afficher les attributs et options de famille |
| 10 | **Export Products** | Générer un export CSV/XLSX |
| 11 | **Bulk Import CSV** | Téléverser un CSV/XLSX pour mise à jour par lots |
| 12 | **Delete Products** | Supprimer les produits par liste de SKU |
| 13 | **Create Category** | Ajouter de nouvelles catégories au catalogue |
| 14 | **Category Tree** | Afficher la hiérarchie complète des catégories |
| 15 | **Create Attribute** | Ajouter de nouveaux attributs de produit |
| 16 | **Manage Options** | Ajouter ou lister les options d'attribut |
| 17 | **Attribute Families** | Lister, créer ou inspecter les familles |
| 18 | **Édition en masse** | Mise à jour de masse des produits par règles |
| 19 | **Catalog Summary** | Statistiques, comptages et activité récente |
| 20 | **Channels** | Afficher canaux, locales et devises |
| 21 | **Users** | Afficher les utilisateurs administrateurs et leurs détails |
| 22 | **Roles** | Afficher rôles et autorisations |
| 23 | **Ask Anything** | Assistant PIM en forme libre |
| 24 | **Manage Associations** | Ajouter, supprimer ou lister les produits liés/up-sell/cross-sell via le langage naturel *(v2.0.x)* |

::: tip
Chaque outil respecte vos autorisations ACL. Si votre rôle administrateur n'autorise pas une opération particulière, l'outil correspondant ne s'exécute pas silencieusement — l'agent ne peut jamais contourner votre rôle.
:::

## Disposition de l'interface de chat

L'interface de chat comprend les zones suivantes :

- **Zone de messages** — Affiche l'historique de conversation entre vous et l'AI Agent, y compris les réponses, les sorties d'outils et les mises à jour de statut.
- **Champ de saisie** — Une saisie de texte en bas où vous tapez vos commandes ou questions. Astuce clavier : **Entrée** pour envoyer, **Maj+Entrée** pour une nouvelle ligne.
- **Icône pièce jointe (trombone)** — Joindre un fichier (image, CSV) au message.
- **Liste déroulante Platform** — Choisir quelle Platform IA configurée gère ce message spécifique (voir ci-dessous).
- **Liste déroulante Model** — Choisir quel modèle sur cette plateforme gère ce message spécifique.
- **Bouton Envoyer** — Soumet votre message à l'AI Agent pour traitement.

### Choisir une Platform ou un Model pour un seul message

La barre de saisie du chat vous permet de remplacer la plateforme et le modèle par défaut **par message**, sans modifier les paramètres globaux par défaut sous **Magic AI → Settings**.

| Liste déroulante | Ce qu'elle affiche | Source |
|---|---|---|
| **Platform** | Toutes les plateformes activées (par exemple, *OpenAI (Openai)*). | **Magic AI → Platforms** |
| **Model** | Modèles activés sur la plateforme sélectionnée (par exemple, *gpt-5.4*). | Modèles cochés sur cette plateforme |

Le remplacement dure pour un message ; le message suivant revient à ce que les listes déroulantes affichent actuellement.

**Quand cela est utile :**

- **Contrôle des coûts** — diriger une simple recherche vers un modèle bon marché et rapide tout en gardant un modèle premium pour l'enrichissement.
- **Expériences de qualité** — envoyer le même prompt deux fois avec différents modèles et comparer.
- **Isolation du fournisseur** — diriger des prompts sensibles vers une plateforme Ollama auto-hébergée sans toucher au paramètre global.

Si vous souhaitez qu'un changement reste pour chaque utilisateur et chaque fonctionnalité, modifiez plutôt **Magic AI → Settings → Agentic PIM**.

## Types de commandes

Vous trouverez ci-dessous les principales catégories de choses que vous pouvez demander à l'agent. Comme l'agent choisit les outils à partir de votre intention, vous n'avez pas besoin de mémoriser les noms d'outils — décrivez simplement le résultat que vous souhaitez.

### Opérations sur les produits

Créez, mettez à jour, recherchez et modifiez en masse les produits.

**Exemples de prompts :**
- "Crée un produit simple avec le SKU TSHIRT-001 et le nom Blue T-Shirt"
- "Mets à jour le prix du produit SKU LAPTOP-PRO à 999.99"
- "Recherche tous les produits dans la catégorie Footwear"
- "Mise à jour groupée du statut en activé pour tous les produits dont le SKU commence par SHOE"

### Gestion des catégories

Gérez l'arborescence des catégories.

**Exemples de prompts :**
- "Montre-moi toutes les catégories racines"
- "Liste les produits affectés à la catégorie Electronics"

### Rapports de qualité des données

Analysez votre catalogue à la recherche de données manquantes ou incomplètes et recevez des rapports structurés sur lesquels vous pouvez agir.

**Exemples de prompts :**
- "Lance une analyse de qualité des données sur tous les produits dans la catégorie Clothing"
- "Quels produits n'ont pas de description ?"
- "Montre-moi les produits avec un score de complétude inférieur à 50%"

### Vérification des produits et score de qualité

Vérifiez les produits individuels par rapport aux critères de qualité.

**Exemples de prompts :**
- "Vérifie la complétude du produit SKU JACKET-100"
- "Vérifie la qualité des données pour tous les produits dans la famille Default"

### Auto-Enrichissement

Demandez à l'agent de remplir le contenu manquant — descriptions, champs SEO, etc. L'agent utilise ce que le produit possède déjà (nom, catégorie, attributs) pour produire un contenu adapté.

**Exemples de prompts :**
- "Génère une courte description pour le produit SKU SNEAKER-200"
- "Remplir automatiquement les meta descriptions manquantes pour tous les produits dans la catégorie Accessories"
- "Enrichir les champs SEO pour le produit SKU WATCH-050"

::: tip
L'auto-enrichissement fonctionne mieux lorsque le produit possède déjà des informations de base comme un nom et une catégorie. L'agent s'appuie sur ce contexte pour produire un contenu cohérent et conforme à la marque.
:::

### Planification de tâches

Pour les travaux en plusieurs étapes, l'agent construit un plan, vous le présente et l'exécute étape par étape.

**Exemples de prompts :**
- "Planifie et exécute : mets à jour tous les produits de la collection Summer pour avoir une remise de 20% et une nouvelle description promotionnelle"
- "Crée un plan de tâches pour examiner et enrichir tous les produits avec des images manquantes"

### Transformations en masse

Appliquez des transformations (append, prepend, replace) sur plusieurs SKU en une seule fois.

**Exemples de prompts :**
- "Mise à jour groupée de tous les produits désactivés en activés"
- "Change la catégorie de tous les produits avec préfixe SKU LEGACY vers la catégorie Archive"

### Manage Associations

Introduit dans la **v2.0.x**, l'outil **Manage Associations** vous permet d'ajouter, supprimer ou lister les produits associés, les up-sells et les cross-sells via la conversation — pas besoin d'ouvrir chaque produit individuellement.

**Exemples de prompts :**
- "Ajoute SKU BELT-100 comme cross-sell sur SKU JEANS-200"
- "Supprime tous les produits up-sell de SKU PHONE-CASE-BLACK"
- "Liste les produits cross-sell liés à SKU LAPTOP-PRO"
- "Reproduis les produits associés de SKU SHIRT-001 sur SKU SHIRT-002"

### Système de mémoire de l'agent

L'agent dispose d'une petite mémoire à long terme qui persiste entre les sessions. Il utilise deux outils internes :

- **RememberFact** — Stocke un fait ou une préférence que vous lui demandez de mémoriser.
- **RecallMemory** — Récupère les faits mémorisés lorsqu'ils sont pertinents pour la requête en cours.

**Exemples de prompts :**
- "Souviens-toi que notre format de description de produit standard commence par le nom de la marque"
- "Rappelle ce que je t'ai dit sur notre convention de nommage"

### Boucle de feedback de contenu

Lorsque l'agent génère du contenu, vous pouvez le pousser avec un feedback et il ajustera les sorties futures dans la même session — et, si suffisamment fort, mémorisera la préférence pour la prochaine fois.

**Exemples de prompts :**
- "Cette description est trop longue, rends-la plus courte et plus directe"
- "Je préfère un ton formel pour les descriptions de produit"
- "Réécris cela mais concentre-toi davantage sur le matériau et la durabilité"

## Réponses en streaming en temps réel

Les réponses sont diffusées dans le chat en temps réel à l'aide de **Server-Sent Events (SSE)**. Vous voyez le raisonnement de l'agent, les appels d'outils et les résultats apparaître progressivement au lieu d'attendre toute la réponse. Pour les opérations longues (une mise à jour groupée de 200 produits, par exemple), cela vous permet de suivre la progression en temps réel.

## Onglet Sessions

L'onglet Sessions liste chaque chat passé. Chaque entrée affiche le titre de la session, le nombre de messages et la date de dernière activité.

 <ImagePopup src="/assets/2.0/images/ai-agent/ai-agent-sessions.png" alt="Sessions AI Agent" />

### Gestion des sessions

- **+ New Session** — Démarrer une conversation propre sans contexte préalable. Utile lorsque vous passez à une tâche différente.
- **Delete session** — Le bouton corbeille supprime définitivement une session. Irréversible.
- **Resume a session** — Cliquez sur n'importe quelle entrée pour la rouvrir. L'historique complet et le contexte sont restaurés, afin que l'agent reprenne exactement là où vous l'avez laissé.

### Persistance des sessions

Les sessions sont stockées en base de données, ce qui signifie :

- Les **rafraîchissements de page** ne vident pas votre conversation.
- Les **sessions de navigateur** sont préservées — fermez l'onglet, revenez plus tard, reprenez.
- Le **contexte est préservé au sein d'une session**, l'agent se souvient donc de ce que vous avez discuté plus tôt dans le même fil ("applique le même changement à SKU B").
- Les sessions persistent **entre les connexions**, votre historique est donc toujours disponible lorsque vous vous reconnectez.

::: tip
Démarrez une nouvelle session lorsque vous passez à une tâche différente. Les sessions focalisées produisent de meilleurs choix d'outils car l'agent ne jongle pas avec un contexte sans rapport.
:::
