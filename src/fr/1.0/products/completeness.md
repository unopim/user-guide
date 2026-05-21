# Complétude du produit

La complétude du produit fournit un score visuel et une évaluation détaillée de la qualité des données produit en fonction de vos paramètres de complétude. Elle vous aide à identifier quels produits sont prêts pour la publication et lesquels ont besoin de plus d'informations.

## Comment ça fonctionne

UnoPim évalue la complétude du produit en fonction des attributs affectés à la famille d'un produit. Vous pouvez configurer quels attributs sont "requis" pour qu'un produit soit considéré comme complet.

### Score de complétude

Le score est calculé en pourcentage :
`(Nombre d'attributs requis remplis) / (Nombre total d'attributs requis) * 100`

## Paramètres de complétude

Vous pouvez définir les règles de complétude dans la section de gestion des attributs.

1. Naviguez vers **catalog >> Attributes families**. Sélectionnez une famille d'attributs.
2. Cliquez sur l'onglet **Completeness**.
3. Marquez les attributs comme **Required in Channels** pour l'évaluation de la complétude et enregistrez.

## File d'attente de calcul

Les jobs de calcul de complétude sont traités via la file d'attente système pour garantir des mises à jour en temps réel sans affecter les performances.

Pour démarrer le queue worker, utilisez :

```bash
php artisan queue:work --queue=system,default
```

## Afficher la complétude

Le score de complétude est visible dans :

- **Datagrid des produits** : sous forme de colonne en pourcentage.
- **Page d'édition de produit** : Ventilation détaillée des attributs manquants.

<!-- ![Product Completeness](/assets/1.0/images/products/completeness.png) -->
