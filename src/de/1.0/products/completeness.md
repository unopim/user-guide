# Produktvollständigkeit

Die Produktvollständigkeit liefert eine visuelle Bewertung und detaillierte Auswertung der Produktdatenqualität basierend auf Ihren Vollständigkeitseinstellungen. Sie hilft Ihnen zu identifizieren, welche Produkte zur Veröffentlichung bereit sind und welche weitere Informationen benötigen.

## Wie es funktioniert

UnoPim bewertet die Produktvollständigkeit anhand der Attribute, die der Familie eines Produkts zugewiesen sind. Sie können konfigurieren, welche Attribute „erforderlich" sind, damit ein Produkt als vollständig gilt.

### Vollständigkeitsbewertung

Der Score wird als Prozentsatz berechnet:
`(Anzahl der ausgefüllten erforderlichen Attribute) / (Gesamtzahl der erforderlichen Attribute) * 100`

## Vollständigkeitseinstellungen

Sie können Vollständigkeitsregeln im Attributverwaltungsabschnitt definieren.

1. Navigieren Sie zu **catalog >> Attributes families** und wählen Sie eine Attributfamilie aus.
2. Klicken Sie auf den Tab **Completeness**.
3. Markieren Sie Attribute als **Required in Channels** für die Vollständigkeitsbewertung und speichern Sie.

## Berechnungs-Warteschlange

Vollständigkeitsberechnungs-Jobs werden über die System-Warteschlange verarbeitet, um Echtzeit-Updates ohne Leistungsbeeinträchtigung zu gewährleisten.

Um den Queue-Worker zu starten, verwenden Sie:

```bash
php artisan queue:work --queue=system,default
```

## Vollständigkeit anzeigen

Die Vollständigkeitsbewertung ist sichtbar in:

- **Produkt-Datagrid**: Als Prozentspalte.
- **Produkt-Bearbeitungsseite**: Detaillierte Aufschlüsselung der fehlenden Attribute.

<!-- ![Product Completeness](/assets/1.0/images/products/completeness.png) -->
