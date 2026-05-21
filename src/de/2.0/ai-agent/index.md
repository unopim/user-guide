# AI Agent (Agentic PIM)

Der **AI Agent** — auch **Agentic PIM** genannt — ist ein konversationeller Assistent, der direkt in UnoPim integriert ist. Anstatt durch Menüs und Formulare zu klicken, sagen Sie dem Agenten in einfacher Sprache, was Sie möchten ("create a T-shirt SKU with these attributes", "find every product missing a description", "mirror the up-sells from SKU A onto SKU B"), und er führt die Aufgabe für Sie aus, indem er im Hintergrund echte PIM-Operationen aufruft.

## Was ist der AI Agent?

Der AI Agent ist **anders als Magic AIs Zauberstab-Symbole**. Hier ist der Unterschied:

| | Magic AI (Zauberstab-Symbole) | AI Agent (Agentic PIM) |
|---|---|---|
| **Wo Sie ihn auslösen** | Klicken Sie auf den Zauberstab in einem bestimmten Feld | Chat-Schaltfläche unten rechts auf jeder Seite |
| **Interaktion** | One-Shot: klicken, generieren, akzeptieren | Konversation: mehrere Züge, mit Gedächtnis |
| **Geltungsbereich** | Ein Feld in einer Entität | Alles im Katalog — Produkte, Kategorien, Attribute, Benutzer, Rollen, Kanäle |
| **Wie er handelt** | Erzeugt Inhalt für das Feld | Ruft echte PIM-Tools auf (erstellen, aktualisieren, suchen, importieren, exportieren, löschen, in Bulk bearbeiten, …) |
| **Ausgabe** | Text oder ein Bild | Ergebnisse von Tool-Aufrufen, zurück in den Chat gestreamt |

Kurz gesagt: **Magic AI schreibt Inhalte. Der AI Agent ergreift Aktionen.**

## Wie funktioniert der AI Agent?

Jede Chat-Nachricht durchläuft diese Schleife:

1. **Sie senden eine Nachricht** im AI-Agent-Chat-Panel.
2. **Der Agent interpretiert Ihre Absicht** mithilfe der unter **Magic AI → Settings → Agentic PIM** konfigurierten Plattform/des Modells sowie der aktiven System-Prompt-Persönlichkeit und aller Tatsachen, die er sich über Sie gemerkt hat.
3. **Der Agent wählt aufzurufende Tools** aus einer Bibliothek von über 30 PIM-Tools (siehe die Seite [AI Agent Chat](./ai-agent-chat.md) für die vollständige Liste). Bei komplexen Anfragen verkettet er mehrere Tools in einem Plan.
4. **Jedes Tool wird gegen echte UnoPim-Daten ausgeführt** — aber **nur innerhalb Ihrer ACL-Berechtigungen**. Ein Tool, für das Sie keine Berechtigung haben, verweigert stillschweigend die Ausführung.
5. **Destruktive oder Änderungen mit niedriger Konfidenz gehen an die Genehmigungs-Warteschlange** (wenn Ihr Change Approval Mode entsprechend eingestellt ist), damit Sie sie vor der Anwendung überprüfen können.
6. **Die Antwort wird in Echtzeit über Server-Sent Events (SSE)** in den Chat zurückgestreamt, sodass Sie den Fortschritt sehen, während der Agent denkt und handelt.

Da der Agent über echte Tools und echte Daten verfügt, ist er leistungsfähiger als ein einfacher LLM-Chat — aber auch folgenreicher. Die Genehmigungs-Warteschlange, das Token-Budget, der Confidence Threshold und die ACL-Prüfungen sind dazu da, diese Macht unter Ihrer Kontrolle zu halten.

## Hauptfunktionen

### Produktverwaltung
Erstellen, aktualisieren, suchen, kopieren, löschen und Massenbearbeitung von Produkten, ohne den Chat zu verlassen. Der Agent bewältigt Anpassungen einzelner Produkte und katalogweite Durchläufe gleichermaßen gut.

### Datenqualität & Vollständigkeit
Bitten Sie den Agenten, den Katalog auf Lücken zu scannen — fehlende Beschreibungen, dünne SEO-Felder, Produkte unterhalb eines Vollständigkeitsschwellenwerts — und er erstellt einen strukturierten Bericht plus vorgeschlagene Korrekturen.

### Auto-Enrichment
Sagen Sie dem Agenten, er soll fehlende Beschreibungen, Meta-Titel oder andere Textfelder ausfüllen, und er generiert Inhalte, die zu Ihrer Markenstimme passen (über den aktiven System-Prompt) und zu Ihren Prompt-Vorlagen.

### Massenoperationen
Massenaktualisierung von Attributen, Neuzuweisung von Kategorien, Umschalten des Status oder Anwenden von Transformationen (anhängen/voranstellen/ersetzen) über viele SKUs hinweg — alles aus einer konversationellen Anweisung heraus.

### Aufgabenplanung
Bei mehrstufigen Arbeiten ("clean up the Summer collection: update prices, add a promotional description, and assign the Sale category") erstellt der Agent einen Plan, zeigt Ihnen die Schritte und führt sie der Reihe nach aus.

### Assoziationsverwaltung *(Neu in v2.0.x)*
Verwandte Produkte, Up-Sells und Cross-Sells über die Konversation hinzufügen, entfernen, auflisten oder spiegeln — kein Öffnen jeder Produktbearbeitungsseite mehr nötig.

### Katalog-Insights
Fragen Sie nach Zählungen, Statistiken, kürzlichen Aktivitäten oder dem Zustand von Kanälen, Benutzern und Rollen. Der Agent liefert strukturierte Zusammenfassungen, ohne dass Sie zu jeder Seite navigieren müssen.

## Echtzeit-Streaming (SSE)

Der AI Agent streamt Ausgaben mit **Server-Sent Events**. Während der Agent entscheidet, was zu tun ist, und jedes Tool aufruft, sehen Sie das Reasoning und die Ergebnisse progressiv im Chat erscheinen — Sie müssen nicht warten, bis die gesamte Antwort beendet ist. Das macht lange Operationen reaktionsfähig.

## Konversations-Persistenz

Chat-Sitzungen sind **datenbankgestützt**. Das bedeutet:

- Das Aktualisieren der Seite löscht die Konversation nicht.
- Schließen und erneutes Öffnen des Browsers erhält sie.
- Innerhalb einer Sitzung erinnert sich der Agent an das, was Sie bereits besprochen haben, sodass Sie sich darauf beziehen können ("apply that same change to SKU B too").
- Zwischen Sitzungen werden Tatsachen, die Sie den Agenten explizit zum **Merken** auffordern (über das interne `RememberFact`-Tool), übernommen.

Siehe den **Sessions**-Tab im Chat-Panel, um vergangene Konversationen wieder aufzunehmen, umzubenennen oder zu löschen.

## ACL-Autorisierung

Jedes der über 30 Tools respektiert Ihre **ACL-Berechtigungen**. Wenn Ihre Admin-Rolle keine Produkte löschen kann, kann der Agent in Ihrem Auftrag keine Produkte löschen — das entsprechende Tool wird einfach nicht ausgeführt. Dies bedeutet, dass das Gewähren von AI-Agent-Zugriff nicht erweitert, was ein Benutzer tun kann; es ändert nur, *wie* sie es tun.

## Rate Limiting

Um das System stabil und die Kosten vorhersehbar zu halten, erzwingt der AI Agent **30 Anfragen pro Minute pro Benutzer**. Wenn Sie das Limit überschreiten, antwortet der Agent mit einem Retry-Hinweis und entsperrt automatisch nach Ablauf des Fensters.

## Sicherheitskontrollen

Drei Steuerungen halten die Autonomie des Agenten in Schach — alle konfiguriert über **Magic AI → Settings → Agentic PIM**:

- **Daily Token Budget** — begrenzt, wie viel der Agent in einem 24-Stunden-Fenster ausgeben kann.
- **Max Agent Steps Per Turn** — begrenzt, wie viele Tools er für eine Benutzernachricht verketten kann.
- **Change Approval Mode** — leitet riskante oder Schreibvorgänge mit niedriger Konfidenz durch die [Genehmigungs-Warteschlange](./approval-queue.md), bevor sie Ihre Daten erreichen.

Und ein weiteres erwähnenswertes Signal: der **Confidence Threshold**. Wenn der interne Vertrauenswert des Agenten für eine vorgeschlagene Änderung unter den Schwellenwert fällt, wird die Änderung unabhängig vom Approval Mode für die manuelle Genehmigung zurückgehalten.

::: tip
Der AI Agent ist am effektivsten, wenn Sie klare, spezifische Anweisungen geben. Anstelle von "fix my products" versuchen Sie "update all products in the Electronics category that are missing a meta description". Spezifische Absicht → spezifische Tool-Aufrufe → schnellere, günstigere und genauere Ergebnisse.
:::

## Wohin als nächstes

- **[AI Agent Chat](./ai-agent-chat.md)** — Wie man Chat-Sitzungen öffnet, mit ihnen interagiert und sie verwaltet; vollständige Liste der über 30 Tools.
- **[Genehmigungs-Warteschlange](./approval-queue.md)** — Wie AI-vorgeschlagene Änderungen überprüft, genehmigt oder abgelehnt werden.
- **[Analytics](./analytics.md)** — Token-Nutzungs-, Kosten- und Aktivitäts-Dashboards für den Agenten.
- **[Magic AI Configuration](../configuration/magic-ai.md)** — Plattformen, Einstellungen, Prompts und System-Prompts, die den Agenten antreiben.
