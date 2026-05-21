# Productvolledigheid

Productvolledigheid biedt een visuele score en gedetailleerde evaluatie van de kwaliteit van productgegevens op basis van uw volledigheidsinstellingen. Het helpt u te identificeren welke producten klaar zijn om gepubliceerd te worden en welke meer informatie nodig hebben.

## Hoe het werkt

UnoPim evalueert productvolledigheid op basis van de attributen die zijn toegewezen aan de family van een product. U kunt configureren welke attributen "required" zijn voordat een product als compleet wordt beschouwd.

### Volledigheidsscore

De score wordt berekend als een percentage:
`(Aantal ingevulde required-attributen) / (Totaal aantal required-attributen) * 100`

## Volledigheidsinstellingen

U kunt volledigheidsregels definiëren in de sectie attribuutbeheer.

1. Navigeer naar **catalog >> Attributes families** en selecteer een attribute family.
2. Klik op het tabblad **Completeness**.
3. Markeer attributen als **Required in Channels** voor de volledigheidsevaluatie en sla op.

## Berekeningswachtrij

Volledigheidsberekening-jobs worden verwerkt via de systeemwachtrij om realtime updates te garanderen zonder de prestaties te beïnvloeden.

Om de queue worker te starten, gebruikt u:

```bash
php artisan queue:work --queue=system,default
```

## Volledigheid bekijken

De volledigheidsscore is zichtbaar in:

- **Product Datagrid**: Als een percentage-kolom.
- **Product Edit Page**: Gedetailleerde uitsplitsing van ontbrekende attributen.

<!-- ![Product Completeness](/assets/1.0/images/products/completeness.png) -->
