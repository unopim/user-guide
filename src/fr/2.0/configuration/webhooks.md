# Webhooks

Les webhooks dans [UnoPim](https://unopim.com/) vous permettent de pousser des notifications de mise à jour de produit en temps réel vers une URL externe chaque fois que les données produit changent. Au lieu d'interroger l'API, vos systèmes connectés (vitrines e-commerce, ERP, places de marché) reçoivent une requête HTTP au moment où un produit est créé, mis à jour ou supprimé.

La page des paramètres Webhook se trouve à **Configuration → Webhooks** dans la barre latérale d'administration.

## Onglet Général

L'onglet **General** est l'endroit où vous activez le webhook et configurez l'URL de destination. Il utilise une disposition à deux panneaux.

<ImagePopup src="/assets/2.0/images/settings/webhook-settings.png" alt="Paramètres Webhook" />

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

<ImagePopup src="/assets/2.0/images/settings/webhook-logs.png" alt="Logs Webhook" />

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

<ImagePopup src="/assets/2.0/images/settings/webhook-history.png" alt="Historique Webhook" />

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
