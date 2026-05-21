# AI Agent Analytics

Das **AI Agent Analytics**-Dashboard zeigt Ihnen, wie der Agent verwendet wird und was er kostet. Da jede KI-Anfrage Token verbraucht (und Token kosten Geld), ist dieses Dashboard die Art, wie Sie die Rechnung vorhersehbar halten, ungewöhnliche Nutzungsmuster erkennen und das tägliche Budget abstimmen.

## Was macht das Analytics-Dashboard?

Es zeigt drei Dinge an einem Ort:

1. **Was gerade passiert** — heutiger Token-Verbrauch im Vergleich zum täglichen Budget und wie viel Budget noch übrig ist.
2. **Was historisch passiert ist** — Konversationszahlen, Tool-Aufrufe und Token-Ausgaben pro Tag, pro Benutzer und pro Operationstyp.
3. **Was es gekostet hat** — Token-Nutzung umgerechnet in einen geschätzten Dollarbetrag basierend auf den Preisen Ihres Anbieters.

Verwenden Sie es, um Fragen zu beantworten wie *"Wer nutzt den Agenten diese Woche am stärksten?"*, *"Welche Operationstypen sind die größten Token-Verbraucher?"* und *"Stehe ich kurz davor, meine tägliche Obergrenze zu erreichen?"*

## Wie funktioniert es?

Jedes Mal, wenn ein Benutzer eine Nachricht an den AI Agent Chat sendet, zeichnet UnoPim Folgendes auf:

- **Wer** die Nachricht gesendet hat (der Admin-Benutzer).
- **Welche Tools** der Agent zur Antwort aufgerufen hat.
- **Wie viele Token** verbraucht wurden (Prompt + Completion, für jeden Tool-Aufruf).
- **Wann** der Zug stattgefunden hat.

Das Dashboard aggregiert diese Datensätze, um die Zähler, Diagramme und Aufschlüsselungen auf Benutzerebene zu erzeugen. Datensätze bleiben so lange erhalten, wie es Ihre Aufbewahrungsrichtlinie für Sitzungen/Logs erlaubt, sodass eine historische Trendanalyse von Haus aus verfügbar ist.

### Woher das tägliche Budget kommt

Das **Daily Token Budget** ist eine einzelne globale Zahl, die unter **Magic AI → Settings → Agentic PIM → Daily Token Budget** festgelegt wird (z. B. `500000`). Jeder Tool-Aufruf des Agenten verringert den laufenden Gesamtwert für den Tag. Wenn der Gesamtwert null erreicht, antwortet der Agent mit einer „Budget erschöpft"-Nachricht an jeden Benutzer, der eine Nachricht zu senden versucht. Um Mitternacht (Serverzeit) wird der Zähler zurückgesetzt.

Das Dashboard zeigt **drei abgeleitete Zahlen** auf diesem Rohzähler an: heutige Nutzung, verbleibendes Budget und Auslastungsprozentsatz.

## Übersicht über das Analytics-Dashboard

Das Dashboard bietet Ihnen eine zentralisierte Sicht auf alle AI-Agent-Aktivitäten. Von hier aus können Sie überwachen:

- **Verbrauchte Token insgesamt** über einen ausgewählten Zeitraum.
- **Anzahl der Konversationen**, die von jedem Admin-Benutzer initiiert wurden.
- **Anzahl der Tool-Aufrufe**, die vom Agenten ausgeführt wurden.
- **Tägliche und wöchentliche Nutzungstrends**, dargestellt in visuellen Diagrammen.

<!-- TODO: Add screenshot -->

Das Dashboard ist über das Admin-Panel zugänglich und steht Benutzern mit den entsprechenden Berechtigungen zur Verfügung.

## Token-Budget-Tracking

Der AI Agent arbeitet mit einem **täglichen Token-Budget** — einer einzigen globalen Obergrenze, die über alle Admin-Benutzer hinweg geteilt wird. Das Dashboard zeigt an:

- **Tägliche Token-Nutzung** — Wie viele Token heute über alle Benutzer hinweg verbraucht wurden.
- **Verbleibendes Budget** — Tokens, die für den aktuellen Tag noch verfügbar sind.
- **Budget-Auslastungsprozentsatz** — Visueller Indikator (z. B. ein Fortschrittsbalken), wie viel des täglichen Budgets verbraucht wurde.

Wenn das tägliche Token-Budget erschöpft ist, pausiert der AI Agent für den Rest des Tages. Er benachrichtigt die Benutzer, dass das Limit erreicht wurde, und nimmt den normalen Betrieb am nächsten Tag wieder auf, wenn das Budget zurückgesetzt wird.

::: tip
Behalten Sie die tägliche Auslastung im Auge, wenn Ihr Team auf Auto-Enrichment oder Massenoperationen angewiesen ist. Diese Aufgaben verbrauchen mehr Token pro Zug als einfache Abfragen.
:::

## Überwachung von KI-Nutzung und -Kosten

Das Dashboard hilft Ihnen, die Kostenauswirkungen des Agenten zu verstehen. Wichtige Metriken sind:

- **Token-Verbrauch pro Benutzer** — Welche Teammitglieder den Agenten am stärksten nutzen.
- **Token-Verbrauch pro Operationstyp** — Welche Operationstypen (Produkterstellung, Auto-Enrichment, Datenqualitäts-Scans, Bilderzeugung usw.) die meisten Token verbrauchen.
- **Kostenschätzung** — Token, umgerechnet in eine Dollar-Schätzung basierend auf den Preisen Ihres ausgewählten Anbieters/Modells.

<!-- TODO: Add screenshot -->

Diese Informationen sind nützlich für die Budgetierung, zum Erkennen von ausufernder Nutzung und zur Entscheidung, ob einer bestimmten Fähigkeit ein günstigeres Modell zugewiesen werden soll (z. B. ein leichteres Modell für Übersetzungen verwenden und das Premium-Modell für die Inhaltsgenerierung beibehalten).

## Konfigurieren des täglichen Token-Budgets

So legen Sie das tägliche Token-Budget fest oder passen es an:

1. Navigieren Sie im Admin-Panel zu **Magic AI → Settings**.
2. Öffnen Sie den Abschnitt **Agentic PIM**.
3. Stellen Sie das Feld **Daily Token Budget** ein (z. B. `500000`).
4. Klicken Sie auf **Save Configuration**, um die Einstellungen anzuwenden.

<!-- TODO: Add screenshot -->

Das Budget gilt global für alle Admin-Benutzer. Sobald die kombinierte Nutzung das Tageslimit erreicht, pausiert der Agent bis Mitternacht.

::: tip
Beginnen Sie mit einem konservativen Tagesbudget und erhöhen Sie es schrittweise, wenn Sie die Nutzungsmuster Ihres Teams kennen. Dies verhindert Überraschungsspitzen während des Rollouts.
:::

## Anzeige des Nutzungsverlaufs und der Trends

Mit dem Abschnitt **Usage History** können Sie vergangene Aktivitäten über anpassbare Datumsbereiche überprüfen. Er bietet:

- **Tägliche Nutzungsaufschlüsselung** — Tag-für-Tag-Ansicht des Token-Verbrauchs und der Konversationszahlen.
- **Wöchentliche und monatliche Zusammenfassungen** — Aggregierte Ansichten für längerfristige Trendanalysen.
- **Identifizierung von Spitzennutzung** — Hebt Tage oder Zeiträume mit ungewöhnlich hoher Nutzung hervor, damit Sie sie untersuchen können, bevor sie zu einem Problem werden.

<!-- TODO: Add screenshot -->

Verwenden Sie diese historischen Daten, um die Budgetverteilung zu informieren, Power-User zu identifizieren und Operationen zu erkennen, die von einem günstigeren Modell profitieren könnten.

## Wie Analytics mit den anderen Agenten-Steuerungen verknüpft ist

Das Analytics-Dashboard ist die Observability-Schicht, die über den Steuerungen sitzt, die Sie unter **Magic AI → Settings → Agentic PIM** konfiguriert haben. Zusammen bilden sie eine Feedback-Schleife:

```
Budget + Genehmigungsmodus konfigurieren ←┐
             │                             │
             ▼                             │
   Benutzer chatten mit dem Agenten        │
             │                             │
             ▼                             │
   Analytics erfasst die Nutzung           │
             │                             │
             ▼                             │
   Trends und Kosten prüfen          ─────┘
```

Ein typischer Rollout läuft so ab: Beginnen Sie mit einem konservativen Daily Token Budget und der Genehmigung durch Manual Review, beobachten Sie die Analytics eine Woche lang, erhöhen Sie das Budget dort, wo es sicher ist, und verschieben Sie vertrauenswürdige Workflows auf Auto-Approve, basierend auf dem, was Ihnen das Dashboard sagt.
