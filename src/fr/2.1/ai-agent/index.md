# AI Agent (Agentic PIM)

L'**AI Agent** — également appelé **Agentic PIM** — est un assistant conversationnel intégré directement dans UnoPim. Au lieu de cliquer à travers des menus et des formulaires, vous dites à l'agent en langage clair ce que vous voulez ("crée un SKU de T-shirt avec ces attributs", "trouve chaque produit sans description", "reproduis les up-sells de SKU A sur SKU B"), et il effectue la tâche pour vous en appelant de vraies opérations PIM en arrière-plan.

## Qu'est-ce que l'AI Agent ?

L'AI Agent est **différent des icônes baguette de Magic AI**. Voici la distinction :

| | Magic AI (icônes baguette) | AI Agent (Agentic PIM) |
|---|---|---|
| **Où vous le déclenchez** | Cliquez sur la baguette sur un champ spécifique | Bouton chat en bas à droite de n'importe quelle page |
| **Interaction** | One-shot : cliquer, générer, accepter | Conversation : multi-tour, avec mémoire |
| **Portée** | Un champ sur une entité | Tout dans le catalogue — produits, catégories, attributs, utilisateurs, rôles, canaux |
| **Comment il agit** | Produit du contenu pour le champ | Appelle de vrais outils PIM (créer, mettre à jour, rechercher, importer, exporter, supprimer, édition en masse, …) |
| **Sortie** | Texte ou une image | Résultats des appels d'outils, renvoyés en streaming dans le chat |

En bref : **Magic AI écrit du contenu. L'AI Agent prend des actions.**

## Comment fonctionne l'AI Agent ?
Chaque message de chat passe par le **Pipeline Agentic PIM**, une boucle en 5 étapes qui garantit la sécurité, la précision et la transparence :

<ImagePopup src="/assets/2.1/images/ai-agent/agentic-pim-pipeline.png" alt="Pipeline Agentic PIM — Workflow en 5 étapes" />

Comme l'agent dispose de vrais outils et de vraies données, il est plus puissant qu'un simple chat LLM — mais aussi plus lourd de conséquences. L'File d'approbation, le budget de tokens, le seuil de confiance et les vérifications ACL existent pour maintenir cette puissance sous votre contrôle.


## Capacités clés

### Gestion des produits
Créez, mettez à jour, recherchez, copiez, supprimez et modifiez en masse les produits sans quitter le chat. L'agent gère aussi bien les ajustements de produits uniques que les balayages à l'échelle du catalogue.

### Qualité et complétude des données
Demandez à l'agent d'analyser le catalogue à la recherche de lacunes — descriptions manquantes, champs SEO minces, produits sous un seuil de complétude — et il produit un rapport structuré ainsi que des corrections suggérées.

### Auto-Enrichissement
Dites à l'agent de remplir les descriptions manquantes, les meta titres ou tout autre champ de texte, et il génère un contenu qui correspond à la voix de votre marque (via le System Prompt actif) et à vos modèles de prompt.

### Opérations en masse
Mise à jour groupée d'attributs, réaffectation de catégories, basculement de statut, ou application de transformations (append/prepend/replace) sur de nombreux SKU à la fois — tout cela à partir d'une seule instruction conversationnelle.

### Planification de tâches
Pour les travaux en plusieurs étapes ("nettoie la collection Summer : mets à jour les prix, ajoute une description promotionnelle et attribue la catégorie Sale"), l'agent construit un plan, vous montre les étapes et les exécute en séquence.

### Gestion des associations *(Nouveau en v2.1.0)*
Ajoutez, supprimez, listez ou reproduisez les produits associés, les up-sells et les cross-sells via la conversation — pas besoin d'ouvrir chaque page d'édition de produit. Les résultats de recherche de produit dans le chat sont désormais rendus sous forme de **liens cliquables** afin que vous puissiez sauter directement vers la page d'édition du produit.

### Insights catalogue
Demandez des comptages, des statistiques, l'activité récente ou l'état des canaux, utilisateurs et rôles. L'agent renvoie des résumés structurés sans que vous ayez à naviguer vers chaque page.

## Streaming en temps réel (SSE)

L'AI Agent diffuse les sorties à l'aide de **Server-Sent Events**. À mesure que l'agent décide quoi faire et appelle chaque outil, vous voyez le raisonnement et les résultats apparaître progressivement dans le chat — vous n'avez pas à attendre que toute la réponse soit terminée. Cela rend les opérations longues réactives.

## Persistance des conversations

Les sessions de chat sont **stockées en base de données**. Cela signifie :

- Rafraîchir la page ne vide pas la conversation.
- Fermer et rouvrir le navigateur la préserve.
- Au sein d'une seule session, l'agent se souvient de ce que vous avez déjà discuté, vous pouvez donc faire référence en arrière ("applique le même changement à SKU B aussi").
- Entre les sessions, les faits que vous demandez explicitement à l'agent de **retenir** (via l'outil interne `RememberFact`) sont reportés.

Voir l'onglet **Sessions** dans le panneau de chat pour reprendre, renommer ou supprimer les conversations passées.

## Autorisation ACL

Chacun des 30+ outils respecte vos **autorisations ACL**. Si votre rôle administrateur ne peut pas supprimer de produits, l'agent ne peut pas supprimer de produits en votre nom — l'outil correspondant ne s'exécute tout simplement pas. Cela signifie qu'accorder l'accès à l'AI Agent n'élargit pas ce que n'importe quel utilisateur peut faire ; cela change seulement *comment* il le fait.

## Limitation de débit

Pour maintenir le système stable et les coûts prévisibles, l'AI Agent impose **30 requêtes par minute par utilisateur**. Si vous dépassez la limite, l'agent répond avec un avis de nouvelle tentative et débloque automatiquement après le passage de la fenêtre.

## Contrôles de sécurité

Trois contrôles maintiennent l'autonomie de l'agent sous contrôle — tous configurés depuis **Magic AI → Settings → Agentic PIM** :

- **Daily Token Budget** — plafonne ce que l'agent peut dépenser dans une fenêtre de 24 heures.
- **Max Agent Steps Per Turn** — plafonne combien d'outils il peut enchaîner pour un message utilisateur.
- **Change Approval Mode** — achemine les changements risqués ou à faible confiance via l'[File d'approbation](./approval-queue.md) avant qu'ils n'atteignent vos données.

Et un autre signal à connaître : le **Confidence Threshold**. Si le score de confiance interne de l'agent pour un changement proposé tombe en dessous du seuil, le changement est retenu pour approbation manuelle indépendamment du mode d'approbation.

::: tip
L'AI Agent est plus efficace lorsque vous fournissez des instructions claires et spécifiques. Au lieu de "corrige mes produits", essayez "mets à jour tous les produits de la catégorie Electronics qui n'ont pas de meta description". Intention spécifique → appels d'outils spécifiques → résultats plus rapides, moins chers et plus précis.
:::

## Où aller ensuite

- **[AI Agent Chat](./ai-agent-chat.md)** — Comment ouvrir, interagir avec et gérer les sessions de chat ; liste complète des 30+ outils.
- **[File d'approbation](./approval-queue.md)** — Comment les changements proposés par l'IA sont examinés, approuvés ou rejetés.
- **[Analytics](./analytics.md)** — Tableaux de bord de l'utilisation, du coût et de l'activité des tokens pour l'agent.
- **[Magic AI Configuration](../configuration/magic-ai.md)** — Platforms, Settings, Prompts et Prompts système qui alimentent l'agent.
