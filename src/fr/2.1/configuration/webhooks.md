# Webhooks

Les webhooks dans [UnoPim](https://unopim.com/) vous permettent de pousser des notifications de mise à jour de produit en temps réel vers une URL externe chaque fois que les données produit changent. Au lieu d'interroger l'API, vos systèmes connectés (vitrines e-commerce, ERP, places de marché) reçoivent une requête HTTP au moment où un produit est créé, mis à jour ou supprimé.

La page des paramètres Webhook se trouve à **Configuration → Webhooks** dans la barre latérale d'administration.

::: tip Distribution asynchrone
Les livraisons de webhooks s'exécutent désormais en arrière-plan en tant que job mis en file d'attente **`SendProductWebhook`**. À la création et à la mise à jour d'un produit, le listener `Product` distribue le job à la file d'attente **`webhooks`** (`->onQueue('webhooks')`). Les actions d'enregistrement administrateur reviennent immédiatement — un endpoint de réception lent ne peut plus bloquer l'UI. Les entrées de log webhook sont toujours enregistrées une fois le job terminé ; la colonne `webhook_logs.user_id` est désormais nullable pour prendre en charge les livraisons distribuées par le système.
:::

## Exécution du queue worker

Comme les livraisons de webhooks sont mises en file d'attente sur la file **`webhooks`**, un simple `php artisan queue:work` **ne** les drainera **pas** — vous devez inclure `webhooks` dans la liste `--queue`. La plupart des installations UnoPim exécutent un seul worker qui tire de chaque file d'attente utilisée par la plateforme :

```sh
php artisan queue:work --queue=webhooks,system,default,completeness
```

| File | Utilisé par |
|---|---|
| **`webhooks`** | Job `SendProductWebhook` — notifications de création/mise à jour de produit. |
| **`system`** | Jobs au niveau système tels que les files d'attente de traduction et l'indexation. |
| **`default`** | File d'attente par défaut de Laravel — tout ce qui est distribué sans file explicite. |
| **`completeness`** | `BulkProductCompletenessJob` et recalcul de complétude par produit. |

::: warning
Si vous exécutez `php artisan queue:work` sans `--queue=webhooks,...`, les livraisons de webhooks resteront pour toujours dans la file et l'onglet **Logs** apparaîtra vide même si les enregistrements administrateurs semblent réussis. Incluez toujours `webhooks` dans la liste des files (ou exécutez un worker dédié uniquement pour `webhooks`).
:::

::: tip Supervisor / systemd
En production, supervisez cette commande avec Supervisor ou systemd afin que le worker redémarre automatiquement en cas d'échec. Exécutez `php artisan queue:restart` après chaque déploiement pour que les workers récupèrent votre dernier code.
:::

## Politique de réessai

Si votre endpoint de réception est en panne ou renvoie une erreur, UnoPim n'abandonne **pas** après la première tentative. Le job `SendProductWebhook` dispose d'une politique de réessai intégrée :

| Paramètre | Valeur | Ce que cela signifie |
|---|---|---|
| **Tries** | `3` | UnoPim tente chaque webhook jusqu'à **trois fois** avant de le marquer comme échoué. |
| **Backoff** | `30 secondes` | Après une tentative échouée, UnoPim attend **30 secondes** avant de réessayer. |

Donc dans le pire des cas, un seul enregistrement de produit peut produire jusqu'à **trois** tentatives de livraison réparties sur environ une minute. Chaque tentative enregistre une ligne dans l'onglet **Logs** afin que vous puissiez voir exactement ce qui s'est passé — succès à la tentative 1 correspond à une ligne de log, deux échecs plus un succès à la tentative 3 correspond à trois lignes de log.

::: tip Rendez votre endpoint idempotent
Comme le même payload peut arriver plus d'une fois (par exemple, la tentative n°1 a expiré mais a en fait réussi côté serveur), construisez votre endpoint de réception de sorte que le traitement du **même événement deux fois produise le même résultat**. Un modèle courant consiste à dédupliquer sur le champ `event_id` du JSON entrant.
:::

::: warning Le worker doit être en cours d'exécution pour les réessais
La logique de réessai ne se déclenche que lorsqu'un queue worker tire activement de la file `webhooks`. Si vous arrêtez le worker, les réessais sont mis en pause jusqu'à ce que vous le redémarriez — ils n'expirent pas.
:::

## Onglet Général

L'onglet **General** est l'endroit où vous activez le webhook et configurez l'URL de destination. Il utilise une disposition à deux panneaux.

<ImagePopup src="/assets/2.1/images/settings/webhook-settings.png" alt="Paramètres Webhook" />

### Activer le webhook et définir l'URL

**Étape 1 :** Naviguez vers **Configuration → Webhooks** dans la barre latérale d'administration. L'onglet **General** est sélectionné par défaut.

**Étape 2 :** Dans le panneau **General** à gauche, basculez **Active Webhook** pour activer la livraison de webhook.

**Étape 3 :** Dans le panneau **Paramètres** à droite, saisissez votre **Webhook URL** (par exemple, `https://example.com/webhook`). Il s'agit du endpoint qui recevra les requêtes POST chaque fois que les données produit changent.

**Étape 4 :** Cliquez sur le bouton **Save** en haut à droite de la page pour appliquer votre configuration.

::: tip
Utilisez un service comme [webhook.site](https://webhook.site) pendant le développement pour inspecter les payloads qu'UnoPim envoie avant de construire votre logique de traitement.
:::

## Onglet Logs

L'onglet **Logs** affiche un enregistrement de chaque requête webhook qu'UnoPim a envoyée. Utilisez-le pour surveiller l'état de livraison et résoudre les problèmes.

<ImagePopup src="/assets/2.1/images/settings/webhook-logs.png" alt="Logs Webhook" />

Le datagrid des logs inclut les colonnes suivantes :

| Colonne | Description |
|---|---|
| **Id** | Identifiant unique pour l'entrée de log |
| **Date/Time** | Quand la requête webhook a été envoyée |
| **SKU** | Le SKU du produit qui a déclenché le webhook |
| **User** | L'utilisateur administrateur dont l'action a déclenché le changement |
| **Status** | Le code d'état de la réponse HTTP renvoyé par votre endpoint |
| **Actions** | Voir les détails de l'entrée de log individuelle |

Vous pouvez utiliser la **barre de recherche** pour rechercher par code, le bouton **Filter** pour affiner les résultats, et les contrôles de **pagination** pour parcourir les entrées.

::: tip
Si vous voyez des codes d'état non-200 dans les logs, vérifiez que votre endpoint est accessible, renvoie une réponse 200 OK et peut gérer correctement le payload JSON entrant.
:::

## Onglet History

L'onglet **History** suit chaque changement apporté à la configuration du webhook elle-même. Utilisez-le pour auditer quand les paramètres ont été modifiés et par qui.

<ImagePopup src="/assets/2.1/images/settings/webhook-history.png" alt="Historique Webhook" />

Le datagrid d'historique inclut les colonnes suivantes :

| Colonne | Description |
|---|---|
| **Date/Time** | Quand le changement de configuration a été effectué |
| **Version** | Le numéro de version de l'instantané de configuration |
| **User** | L'utilisateur administrateur qui a effectué le changement |
| **Actions** | Cliquez sur l'icône œil pour voir les détails complets de ce qui a changé |

Ceci est utile pour suivre quand l'URL du webhook a été mise à jour, quand le webhook a été activé ou désactivé, et quel utilisateur a effectué le changement.

## Résumé rapide de la configuration

1. Allez dans **Configuration → Webhooks**.
2. Dans l'onglet **General**, activez **Active Webhook**.
3. Saisissez votre **Webhook URL** dans le panneau Settings.
4. Cliquez sur **Save**.
5. Passez à l'onglet **Logs** pour surveiller les livraisons de webhooks sortantes et vérifier les réponses réussies.
6. Passez à l'onglet **History** pour examiner tout changement de configuration passé.

::: tip
Si votre endpoint de réception est temporairement en panne, désactivez Active Webhook pour mettre en pause les livraisons. Votre configuration est préservée et vous pouvez la réactiver à tout moment sans re-saisir l'URL.
:::
