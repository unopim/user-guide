# Webhooks

Mit Webhooks in [UnoPim](https://unopim.com/) können Sie Echtzeit-Benachrichtigungen über Produktaktualisierungen an eine externe URL senden, wann immer sich Produktdaten ändern. Anstatt die API abzufragen, erhalten Ihre verbundenen Systeme (E-Commerce-Storefronts, ERPs, Marketplaces) eine HTTP-Anfrage in dem Moment, in dem ein Produkt erstellt, aktualisiert oder gelöscht wird.

Die Webhook-Einstellungsseite befindet sich unter **Configuration → Webhooks** in der Admin-Seitenleiste.

## Allgemein-Tab

Im **Allgemein**-Tab aktivieren Sie den Webhook und konfigurieren die Ziel-URL. Er verwendet ein zweispaltiges Layout.

<ImagePopup src="/assets/2.0/images/settings/webhook-settings.png" alt="Webhook-Einstellungen" />

### Den Webhook aktivieren und die URL festlegen

**Schritt 1:** Navigieren Sie zu **Configuration → Webhooks** in der Admin-Seitenleiste. Der **Allgemein**-Tab ist standardmäßig ausgewählt.

**Schritt 2:** Schalten Sie im **Allgemein**-Panel links **Active Webhook** ein, um die Webhook-Lieferung zu aktivieren.

**Schritt 3:** Geben Sie im **Settings**-Panel rechts Ihre **Webhook-URL** ein (z. B. `https://example.com/webhook`). Dies ist der Endpunkt, der POST-Anfragen empfängt, wann immer sich Produktdaten ändern.

**Schritt 4:** Klicken Sie auf die Schaltfläche **Save** oben rechts auf der Seite, um Ihre Konfiguration zu übernehmen.

::: tip
Verwenden Sie während der Entwicklung einen Dienst wie [webhook.site](https://webhook.site), um die von UnoPim gesendeten Payloads zu inspizieren, bevor Sie Ihre Verarbeitungslogik aufbauen.
:::

## Logs-Tab

Der **Logs**-Tab zeigt eine Aufzeichnung jeder Webhook-Anfrage an, die UnoPim gesendet hat. Verwenden Sie ihn, um den Lieferstatus zu überwachen und Fehler zu beheben.

<ImagePopup src="/assets/2.0/images/settings/webhook-logs.png" alt="Webhook-Logs" />

Das Log-Datagrid enthält die folgenden Spalten:

| Spalte | Beschreibung |
|---|---|
| **Id** | Eindeutige Kennung für den Logeintrag |
| **Date/Time** | Wann die Webhook-Anfrage gesendet wurde |
| **SKU** | Die Produkt-SKU, die den Webhook ausgelöst hat |
| **User** | Der Admin-Benutzer, dessen Aktion die Änderung ausgelöst hat |
| **Status** | Der von Ihrem Endpunkt zurückgegebene HTTP-Statuscode |
| **Actions** | Details des einzelnen Logeintrags anzeigen |

Sie können die **Suchleiste** verwenden, um nach Code zu suchen, die Schaltfläche **Filter**, um die Ergebnisse einzugrenzen, und die **Paginierungs**-Steuerungen, um durch die Einträge zu blättern.

::: tip
Wenn Sie Statuscodes außerhalb von 200 in den Logs sehen, überprüfen Sie, dass Ihr Endpunkt erreichbar ist, eine 200 OK-Antwort zurückgibt und das eingehende JSON-Payload korrekt verarbeiten kann.
:::

## History-Tab

Der **History**-Tab verfolgt jede Änderung, die an der Webhook-Konfiguration selbst vorgenommen wurde. Verwenden Sie ihn, um zu prüfen, wann Einstellungen geändert wurden und von wem.

<ImagePopup src="/assets/2.0/images/settings/webhook-history.png" alt="Webhook-Verlauf" />

Das History-Datagrid enthält die folgenden Spalten:

| Spalte | Beschreibung |
|---|---|
| **Date/Time** | Wann die Konfigurationsänderung vorgenommen wurde |
| **Version** | Die Versionsnummer des Konfigurations-Snapshots |
| **User** | Der Admin-Benutzer, der die Änderung vorgenommen hat |
| **Actions** | Klicken Sie auf das Augen-Symbol, um die vollständigen Details der Änderung anzuzeigen |

Dies ist nützlich, um zu verfolgen, wann die Webhook-URL aktualisiert wurde, wann der Webhook aktiviert oder deaktiviert wurde und welcher Benutzer die Änderung vorgenommen hat.

## Schnellsetup-Zusammenfassung

1. Gehen Sie zu **Configuration → Webhooks**.
2. Schalten Sie im **Allgemein**-Tab **Active Webhook** ein.
3. Geben Sie Ihre **Webhook-URL** im Settings-Panel ein.
4. Klicken Sie auf **Save**.
5. Wechseln Sie zum **Logs**-Tab, um ausgehende Webhook-Lieferungen zu überwachen und erfolgreiche Antworten zu überprüfen.
6. Wechseln Sie zum **History**-Tab, um vergangene Konfigurationsänderungen zu überprüfen.

::: tip
Wenn Ihr empfangender Endpunkt vorübergehend nicht verfügbar ist, schalten Sie Active Webhook aus, um Lieferungen zu pausieren. Ihre Konfiguration bleibt erhalten und Sie können sie jederzeit erneut aktivieren, ohne die URL erneut eingeben zu müssen.
:::
