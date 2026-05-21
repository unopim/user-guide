# Webhooks

Mit Webhooks in [UnoPim](https://unopim.com/) können Sie Echtzeit-Benachrichtigungen über Produktaktualisierungen an eine externe URL senden, wann immer sich Produktdaten ändern. Anstatt die API abzufragen, erhalten Ihre verbundenen Systeme (E-Commerce-Storefronts, ERPs, Marketplaces) eine HTTP-Anfrage in dem Moment, in dem ein Produkt erstellt, aktualisiert oder gelöscht wird.

Die Webhook-Einstellungsseite befindet sich unter **Configuration → Webhooks** in der Admin-Seitenleiste.

::: tip Asynchroner Dispatch
Webhook-Lieferungen laufen nun im Hintergrund als in die Warteschlange eingereihter **`SendProductWebhook`**-Job. Beim Erstellen und Aktualisieren von Produkten versendet der `Product`-Listener den Job an die **`webhooks`**-Warteschlange (`->onQueue('webhooks')`). Admin-Speicheraktionen kehren sofort zurück — ein langsamer empfangender Endpunkt kann die Benutzeroberfläche nicht mehr blockieren. Webhook-Logeinträge werden weiterhin aufgezeichnet, sobald der Job abgeschlossen ist; die Spalte `webhook_logs.user_id` ist jetzt nullable, um vom System ausgelöste Lieferungen zu unterstützen.
:::

## Den Queue-Worker ausführen

Da Webhook-Lieferungen in die **`webhooks`**-Warteschlange eingereiht werden, leert ein einfaches `php artisan queue:work` sie **nicht** — Sie müssen `webhooks` in die `--queue`-Liste aufnehmen. Die meisten UnoPim-Installationen führen einen einzelnen Worker aus, der aus jeder von der Plattform verwendeten Warteschlange zieht:

```sh
php artisan queue:work --queue=webhooks,system,default,completeness
```

| Queue | Verwendet von |
|---|---|
| **`webhooks`** | `SendProductWebhook`-Job — Benachrichtigungen über das Erstellen/Aktualisieren von Produkten. |
| **`system`** | Systemebene-Jobs wie Übersetzungs-Warteschlangen und Indexierung. |
| **`default`** | Laravels Standard-Warteschlange — alles, was ohne explizite Warteschlange versendet wird. |
| **`completeness`** | `BulkProductCompletenessJob` und Neuberechnung der Vollständigkeit pro Produkt. |

::: warning
Wenn Sie `php artisan queue:work` ohne `--queue=webhooks,...` ausführen, bleiben Webhook-Lieferungen für immer in der Warteschlange und der **Logs**-Tab erscheint leer, obwohl Admin-Speicherungen erfolgreich aussehen. Nehmen Sie immer `webhooks` in die Warteschlangenliste auf (oder führen Sie einen dedizierten Worker nur für `webhooks` aus).
:::

::: tip Supervisor / systemd
Überwachen Sie diesen Befehl in der Produktion mit Supervisor oder systemd, damit der Worker bei einem Fehler automatisch neu startet. Führen Sie nach jedem Deploy `php artisan queue:restart` aus, damit die Worker Ihren neuesten Code übernehmen.
:::

## Wiederholungs-Richtlinie

Wenn Ihr empfangender Endpunkt nicht verfügbar ist oder einen Fehler zurückgibt, gibt UnoPim nach dem ersten Versuch **nicht** auf. Der `SendProductWebhook`-Job hat eine eingebaute Wiederholungs-Richtlinie:

| Einstellung | Wert | Was es bedeutet |
|---|---|---|
| **Tries** | `3` | UnoPim versucht jeden Webhook bis zu **dreimal**, bevor er als fehlgeschlagen markiert wird. |
| **Backoff** | `30 Sekunden` | Nach einem fehlgeschlagenen Versuch wartet UnoPim **30 Sekunden** vor dem erneuten Versuch. |

Im schlimmsten Fall kann eine einzelne Produktspeicherung also bis zu **drei** Lieferversuche über etwa eine Minute hinweg erzeugen. Jeder Versuch zeichnet eine Zeile im **Logs**-Tab auf, damit Sie genau sehen können, was passiert ist — Erfolg beim ersten Versuch ist eine Logzeile, zwei Fehler plus ein Erfolg beim dritten Versuch sind drei Logzeilen.

::: tip Machen Sie Ihren Endpunkt idempotent
Da derselbe Payload mehrmals ankommen kann (z. B. Versuch Nr. 1 hatte einen Timeout, war aber serverseitig tatsächlich erfolgreich), bauen Sie Ihren empfangenden Endpunkt so, dass die Verarbeitung **desselben Ereignisses zweimal das gleiche Ergebnis erzeugt**. Ein gängiges Muster ist das Deduplizieren über das Feld `event_id` des eingehenden JSON.
:::

::: warning Worker muss für Wiederholungen laufen
Die Wiederholungslogik wird nur ausgelöst, wenn ein Queue-Worker aktiv aus der `webhooks`-Warteschlange zieht. Wenn Sie den Worker stoppen, pausieren die Wiederholungen, bis Sie ihn neu starten — sie laufen nicht ab.
:::

## Allgemein-Tab

Im **Allgemein**-Tab aktivieren Sie den Webhook und konfigurieren die Ziel-URL. Er verwendet ein zweispaltiges Layout.

<ImagePopup src="/assets/2.1/images/settings/webhook-settings.png" alt="Webhook-Einstellungen" />

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

<ImagePopup src="/assets/2.1/images/settings/webhook-logs.png" alt="Webhook-Logs" />

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

<ImagePopup src="/assets/2.1/images/settings/webhook-history.png" alt="Webhook-Verlauf" />

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
