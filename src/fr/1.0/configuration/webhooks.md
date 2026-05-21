# Webhooks

Les webhooks permettent à des systèmes externes de réagir aux mises à jour en temps réel au sein d'UnoPim. En configurant des webhooks, vous pouvez envoyer des données vers d'autres applications (par exemple, plateformes e-commerce, ERP) dès qu'un changement survient.

## Webhook de mise à jour produit

Le **webhook de mise à jour produit** est déclenché chaque fois qu'un produit est créé, mis à jour ou supprimé.

## Configuration des webhooks

1. Accédez à **Configurations >> Webhooks**.
2. Cliquez sur l'onglet **Général**, remplissez les détails et enregistrez.
3. Saisissez les informations suivantes :
    - Dans Général : **Webhook actif** Activez ou désactivez le webhook.

    - Dans Paramètres : **URL du webhook** Saisissez l'URL du point de terminaison vers lequel la charge utile du webhook sera envoyée.

![Configuration du webhook](/assets/1.0/images/configuration/webhooks.png)

4. Cliquez sur l'onglet **Logs** pour consulter les journaux de livraison du webhook.
   L'onglet Logs affiche l'historique des livraisons du webhook, incluant la date, le SKU, le destinataire et le statut, ce qui vous aide à surveiller les succès, à diagnostiquer les échecs et à vérifier que les événements ont été envoyés correctement, avec des enregistrements détaillés consultables.

![Configuration du webhook](/assets/1.0/images/configuration/webhooks-logs.png)

## Format des données

Le système envoie une requête POST avec une charge utile JSON contenant les données produit mises à jour. Exemple de charge utile :

```json
{
  "event": "product.updated",
  "timestamp": "2026-01-15 18:26:57",
  "user_timezone": "Asia/Kolkata",
  "data": [
    {
      "id": 1,
      "status": true,
      "sku": "sunglasses021",
      "type": "simple",
      "changes": {
        "added": [],
        "removed": [],
        "changed": {
          "common": {
            "name": {
              "old": "Sunglasses",
              "new": "Sunglasses Black"
            }
          },
          "locale_specific": {
            "en_US": {
              "colorlocalewise": {
                "old": "white",
                "new": "pink"
              }
            }
          }
        }
      }
    }
  ]
}
```
