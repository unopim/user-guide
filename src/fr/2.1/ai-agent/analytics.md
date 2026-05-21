# AI Agent Analytics

Le tableau de bord **AI Agent Analytics** vous montre comment l'agent est utilisé et ce qu'il vous coûte. Comme chaque requête IA consomme des tokens (et que les tokens coûtent de l'argent), ce tableau de bord est la façon de garder la facture prévisible, repérer les modèles d'utilisation inhabituels et ajuster le budget quotidien.

## Que fait le tableau de bord Analytics ?

Il met en avant trois éléments en un seul endroit :

1. **Ce qui se passe en ce moment** — la consommation de tokens d'aujourd'hui par rapport au budget quotidien, et combien de budget reste.
2. **Ce qui s'est passé historiquement** — comptes de conversations, appels d'outils et dépenses de tokens par jour, par utilisateur et par type d'opération.
3. **Ce que cela a coûté** — l'utilisation de tokens traduite en estimation de coût en dollars basée sur la tarification de votre fournisseur.

Utilisez-le pour répondre à des questions comme *"Qui utilise l'agent le plus intensément cette semaine ?"*, *"Quels types d'opérations sont les plus gros consommateurs de tokens ?"* et *"Suis-je sur le point d'atteindre mon plafond quotidien ?"*

## Comment ça fonctionne ?

Chaque fois qu'un utilisateur envoie un message à l'AI Agent Chat, UnoPim enregistre :

- **Qui** a envoyé le message (l'utilisateur administrateur).
- **Quels outils** l'agent a appelés pour répondre.
- **Combien de tokens** ont été consommés (prompt + complétion, pour chaque appel d'outil).
- **Quand** le tour a eu lieu.

Le tableau de bord agrège ces enregistrements pour produire les compteurs, les graphiques et les ventilations par utilisateur. Les enregistrements persistent aussi longtemps que votre politique de rétention de session/log le permet, donc l'analyse des tendances historiques est disponible nativement.

### D'où vient le budget quotidien

Le **Daily Token Budget** est un seul nombre global défini sous **Magic AI → Settings → Agentic PIM → Daily Token Budget** (par exemple, `500000`). Chaque appel d'outil que l'agent effectue décrémente le total courant pour la journée. Lorsque le total atteint zéro, l'agent répond avec un avis de budget épuisé à tout utilisateur qui essaie d'envoyer un message. À minuit (heure du serveur), le compteur se réinitialise.

Le tableau de bord affiche **trois chiffres dérivés** par-dessus ce compteur brut : l'utilisation d'aujourd'hui, le budget restant et le pourcentage d'utilisation.

## Vue d'ensemble du tableau de bord Analytics

Le tableau de bord vous donne une vue centralisée de toute l'activité de l'AI Agent. Depuis celui-ci, vous pouvez surveiller :

- **Total de tokens consommés** sur une période sélectionnée.
- **Nombre de conversations** initiées par chaque utilisateur administrateur.
- **Nombre d'appels d'outils** exécutés par l'agent.
- **Tendances d'utilisation quotidiennes et hebdomadaires** affichées dans des graphiques visuels.

<!-- TODO: Add screenshot -->

Le tableau de bord est accessible depuis le panneau d'administration et est disponible pour les utilisateurs disposant des autorisations appropriées.

## Suivi du budget de tokens

L'AI Agent fonctionne sur un **budget quotidien de tokens** — un plafond global unique partagé entre tous les utilisateurs administrateurs. Le tableau de bord affiche :

- **Utilisation quotidienne des tokens** — Combien de tokens ont été consommés aujourd'hui par tous les utilisateurs.
- **Budget restant** — Tokens encore disponibles pour la journée en cours.
- **Pourcentage d'utilisation du budget** — Indicateur visuel (par exemple, une barre de progression) de la quantité du budget quotidien utilisée.

Lorsque le budget quotidien de tokens est épuisé, l'AI Agent se met en pause pour le reste de la journée. Il notifie les utilisateurs que la limite a été atteinte et reprend son fonctionnement normal le lendemain lorsque le budget se réinitialise.

::: tip
Gardez un œil sur l'utilisation quotidienne si votre équipe s'appuie sur l'auto-enrichissement ou les opérations en masse. Ces tâches consomment plus de tokens par tour que les simples requêtes de recherche.
:::

## Surveillance de l'utilisation et des coûts IA

Le tableau de bord vous aide à comprendre les implications de coût de l'agent. Les métriques clés incluent :

- **Consommation de tokens par utilisateur** — Quels membres de l'équipe utilisent l'agent le plus intensément.
- **Consommation de tokens par type d'opération** — Quels types d'opérations (création de produit, auto-enrichissement, analyses de qualité des données, génération d'image, etc.) consomment le plus de tokens.
- **Estimation du coût** — Tokens traduits en estimation de dollars basée sur la tarification de votre fournisseur/modèle sélectionné.

<!-- TODO: Add screenshot -->

Ces informations sont utiles pour la budgétisation, pour repérer une utilisation hors de contrôle, et pour décider d'attribuer un modèle moins cher à une capacité particulière (par exemple, utiliser un modèle plus léger pour la traduction et conserver le modèle premium pour la génération de contenu).

## Configuration des budgets de tokens quotidiens

Pour définir ou ajuster le budget quotidien de tokens :

1. Naviguez vers **Magic AI → Settings** dans le panneau d'administration.
2. Ouvrez la section **Agentic PIM**.
3. Définissez le champ **Daily Token Budget** (par exemple, `500000`).
4. Cliquez sur **Save Configuration** pour appliquer.

<!-- TODO: Add screenshot -->

Le budget s'applique globalement à tous les utilisateurs administrateurs. Une fois que l'utilisation combinée atteint la limite quotidienne, l'agent se met en pause jusqu'à minuit.

::: tip
Commencez avec un budget quotidien conservateur et augmentez-le progressivement à mesure que vous apprenez les modèles d'utilisation de votre équipe. Cela empêche les pics surprenants pendant le déploiement.
:::

## Affichage de l'historique et des tendances d'utilisation

La section **Usage History** vous permet d'examiner l'activité passée sur des plages de dates personnalisables. Elle fournit :

- **Ventilation quotidienne de l'utilisation** — Vue jour par jour de la consommation de tokens et des comptes de conversations.
- **Résumés hebdomadaires et mensuels** — Vues agrégées pour l'analyse des tendances à plus long terme.
- **Identification des pics d'utilisation** — Met en évidence les jours ou périodes avec une utilisation inhabituellement élevée afin que vous puissiez enquêter avant qu'ils ne deviennent un problème.

<!-- TODO: Add screenshot -->

Utilisez ces données historiques pour informer l'allocation budgétaire, repérer les power users et identifier les opérations qui pourraient bénéficier d'un modèle moins cher.

## Comment Analytics se connecte aux autres contrôles de l'agent
Le tableau de bord Analytics est la couche d'observabilité qui se trouve au-dessus des contrôles que vous avez configurés sous **Magic AI → Settings → Agentic PIM**. Ensemble, ils forment une boucle de feedback continue :

<ImagePopup src="/assets/2.1/images/ai-agent/analytics-feedback-loop.png" alt="Boucle de feedback de la gestion AI Agent" />

Un déploiement typique consiste à : commencer avec un Daily Token Budget conservateur et une approbation Manual Review, surveiller l'analytics pendant une semaine, augmenter le budget là où c'est sûr, et déplacer les workflows de confiance vers Auto-Approve en fonction de ce que le tableau de bord vous indique.

