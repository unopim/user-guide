# Tableau de bord

Le **Tableau de bord** est la page d'accueil que vous voyez immédiatement après vous être connecté à [UnoPim](https://unopim.com/). Il est conçu comme un centre de commande à un seul écran : en moins d'une seconde, vous devriez pouvoir dire *quelle est la taille de votre catalogue*, *à quel point il est sain*, *ce que votre équipe a fait* et *ce qui doit être traité ensuite* — sans cliquer sur aucune autre page.

<ImagePopup src="/assets/2.0/images/dashboard/dashboard-overview.png" alt="Vue d'ensemble du tableau de bord" />

## À quoi sert le tableau de bord ?

Le tableau de bord existe pour répondre à quatre questions au moment où vous vous connectez :

| Question | Où se trouve la réponse |
|---|---|
| **Quelle est la taille de mon catalogue ?** | Cartes Aperçu du catalogue + Structure du catalogue |
| **Quelle est la santé de mes données ?** | Nécessite votre attention, Completeness, Préparation du canal |
| **Que fait l'équipe ?** | Statistiques de produit, graphique Activité produit, Activité récente |
| **Que dois-je faire ensuite ?** | Actions rapides de la bannière de bienvenue, alertes Nécessite votre attention, panneau Transfert de données |

Il est délibérément lourd en lecture — le tableau de bord rapporte l'état, puis vous indique la bonne page pour agir. Chaque carte et panneau est soit cliquable (pour accéder à la liste pertinente), soit associé à un bouton d'action rapide.

## Comment fonctionne le tableau de bord

La page est composée de **widgets** indépendants, chacun provenant d'une partie différente d'UnoPim :

```
┌───────────────────────────────────────────────────┐
│ Welcome Banner   (user greeting + quick actions)  │
├───────────────────────────────────────────────────┤
│ Catalog Overview   ← products + categories tables │
│ Catalog Structure  ← attributes, locales, channels│
├───────────────────────────────────────────────────┤
│ Needs Attention    ← completeness engine          │
├───────────────────────────────────────────────────┤
│ Analytics          ← product stats + 7-day chart  │
│ Completeness       ← per-channel completeness     │
│ Channel Readiness  ← per-channel ready counts     │
├───────────────────────────────────────────────────┤
│ Operations         ← activity log + Job Tracker   │
├───────────────────────────────────────────────────┤
│ AI Agent button (floating, bottom-right)          │
│ Theme toggle (top-right, next to bell)            │
└───────────────────────────────────────────────────┘
```

Les comptages et graphiques sont calculés au chargement de la page (pas de jobs planifiés), de sorte que le tableau de bord reflète toujours l'état actuel de la base de données.

## Widgets

### Bannière de bienvenue

Un message d'accueil personnalisé — **« Bonjour [Votre nom] »** — épinglé en haut de la page. Il sert également de rampe de lancement pour les trois actions les plus courantes :

- **Créer un produit** — va directement à la page de création de produit.
- **Importer des données** — ouvre le workflow d'import.
- **Exporter des données** — ouvre le workflow d'export.

::: tip
Utilisez ces boutons d'action rapide au lieu de naviguer dans la barre latérale — le tableau de bord est optimisé pour vous mettre au travail en un clic.
:::

### Aperçu du catalogue

Deux **cartes récapitulatives cliquables** montrant la taille de votre catalogue :

| Carte | Affiche | Cliquer vous emmène à |
|---|---|---|
| **Total Products** | Comptage des produits dans tous les statuts et types. | Page de liste des produits. |
| **Total Categories** | Comptage des catégories à travers tout l'arbre. | Page de liste des catégories. |

### Structure du catalogue

Une rangée de petites cartes donnant un instantané structurel de la configuration du catalogue. Utile pour repérer les lacunes de configuration — par exemple, un nouveau canal sans locale affectée.

| Carte | Ce qu'elle compte |
|---|---|
| **Total Attributes** | Attributs produit définis dans le système. |
| **Total Groups** | Groupes d'attributs. |
| **Total Families** | Familles d'attributs. |
| **Total Locales** | Locales configurées dans les canaux. |
| **Total Currencies** | Devises configurées pour être utilisées dans les canaux. |
| **Total Channels** | Canaux de vente configurés. |

### Nécessite votre attention

Met en évidence les éléments nécessitant une action administrateur **dès maintenant**. L'alerte la plus courante est **produits non enrichis** — produits manquant des données requises pour être prêts pour les canaux. Lorsque le catalogue est sain, cette section se réduit et reste silencieuse.

::: warning
Les produits non enrichis peuvent ne pas être prêts pour la distribution vers vos canaux de vente. Examinez régulièrement cette section pour garder le catalogue publiable.
:::

### Analytics

#### Statistiques de produit

Une ventilation numérique du catalogue — le moyen le plus rapide de juger de la santé dans le temps.

| Métrique | Signification |
|---|---|
| **Total Products** | Comptage total des produits. |
| **Active / Inactive** | Combien de produits sont actuellement activés vs désactivés. |
| **Product Type Distribution** | Répartition en pourcentage entre produits simples et configurables. |
| **New This Week** | Produits créés dans la semaine en cours. |
| **With Variants** | Produits qui ont des configurations de variantes. |
| **Avg Completeness** | Score de complétude moyen sur tous les produits. |
| **Enriched** | Nombre de produits marqués comme entièrement enrichis. |

#### Activité produit (7 derniers jours)

Un graphique à deux lignes traçant les produits **Created** vs **Updated** par jour pour les sept derniers jours. Des lignes plates à zéro indiquent que le catalogue est devenu silencieux ; les pics signifient généralement qu'un import en masse ou une exécution d'enrichissement vient de se terminer.

### Completeness

Montre dans quelle mesure vos données produit répondent aux exigences de chaque **canal**, avec des **ventilations par locale visibles côte à côte**. Pour chaque canal configuré (par exemple, *Default*, *Amazon*, *Flipkart*), la carte affiche :

- Un **pourcentage global du canal** sous forme de jauge circulaire.
- **Lignes par locale** — une ligne par locale affectée à ce canal (par exemple, allemand, anglais, français), chacune avec sa propre jauge.
- Un **verdict court** sous la jauge principale :

| Message | Signification |
|---|---|
| **Almost complete** | Presque prêt — seules des ajouts mineurs sont nécessaires. |
| **Low completeness, add details to improve** | Des informations produit importantes manquent encore. |

Cette disposition facilite la détection de la combinaison exacte canal + locale qui bloque un produit d'être publiable.

::: tip
Travaillez d'abord sur la paire canal-locale au score le plus bas. Un produit peut être prêt pour *Default* mais toujours bloqué sur *Amazon → French* si un attribut requis manque dans cette combinaison spécifique.
:::

### Préparation du canal

Une **barre de progression horizontale par canal** indiquant *« X sur Y produits prêts »* avec un pourcentage (par exemple, *« 2 of 3 products ready — 67% »*). Là où le widget Completeness montre la *qualité moyenne*, Préparation du canal montre le *nombre publiable* — le nombre de produits qui franchissent la barre des champs requis de ce canal.

### Opérations

#### Activité récente

Un flux chronologique de modifications dans le système. Chaque entrée capture :

| Champ | Signification |
|---|---|
| **Action type** | Created, updated ou deleted. |
| **Entity type** | Family, Attribute, Product, Category, Channel, etc. |
| **User name** | Qui a effectué l'action. |
| **Timestamp** | Quand cela s'est produit. |

C'est le moyen le plus rapide de répondre à *"quelqu'un a-t-il modifié X récemment ?"* sans ouvrir l'onglet historique sur chaque entité.

#### Transfert de données

Panneau de statut pour vos jobs d'import et d'export les plus récents. Chaque job affiche l'un des cinq états :

| Statut | Signification |
|---|---|
| **Completed** | Le job s'est terminé avec succès. |
| **Processing** | Le job est en cours d'exécution. |
| **Pending** | Le job est en file d'attente et attend de démarrer. |
| **Failed** | Le job a rencontré des erreurs. |
| **Cancelled** | Le job a été annulé manuellement. |

Cliquez sur **« View All Jobs »** pour ouvrir le **Suivi de tâches** complet avec des barres de progression par étape et des contrôles pause/reprise/annulation.

### AI Agent

Un bouton flottant **"Open Agenting PIM"** se trouve dans le coin inférieur droit du tableau de bord (et de chaque autre page d'administration). Cliquer dessus ouvre l'AI Agent conversationnel — tapez ce dont vous avez besoin en anglais simple et il appelle le bon outil PIM en votre nom.

::: tip
L'AI Agent peut créer des produits, enrichir le contenu, exécuter des analyses de qualité des données et répondre à des questions sur votre catalogue sans que vous ayez à naviguer dans la barre latérale. Voir **[AI Agent Chat](../ai-agent/ai-agent-chat.md)** pour la liste complète des 30+ outils.
:::

### Thème sombre / clair

UnoPim prend en charge un bascule **Dark / Light Theme**. Cliquez sur l'icône soleil/lune dans le coin supérieur droit de la barre d'en-tête (à côté de la cloche de notification) pour basculer entre le mode clair et sombre. Votre préférence persiste entre les sessions, donc chaque page — le tableau de bord, la liste des produits, les éditeurs et l'AI Agent Chat — conserve le thème que vous avez choisi.

<ImagePopup src="/assets/2.0/images/settings/dark-theme.png" alt="Thème sombre" />

::: tip
Le bascule de thème est global. Quel que soit le mode choisi, il s'applique partout dans l'administration, pas seulement au tableau de bord.
:::

## Workflow typique du tableau de bord

Une façon courante dont les administrateurs utilisent le tableau de bord au début d'une journée :

1. **Vérifier Nécessite votre attention** — éliminez toute alerte urgente (par exemple, produits non enrichis).
2. **Scanner Completeness et Préparation du canal** — choisissez le canal/locale le plus faible et planifiez un nettoyage.
3. **Parcourir Activité récente** — confirmez que les jobs nocturnes se sont terminés et que les modifications des coéquipiers ont du sens.
4. **Ouvrir Transfert de données** — surveillez les imports/exports en cours, ou cliquez pour ouvrir le Suivi de tâches pour plus de détails.
5. **Lancer le travail** — utilisez une action rapide de la bannière de bienvenue ou le bouton AI Agent pour démarrer les tâches du jour.

Suivre ce flux transforme le tableau de bord en un écran de triage quotidien plutôt qu'en simple page d'accueil.
