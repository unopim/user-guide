# Genehmigungs-Warteschlange

Die **Genehmigungs-Warteschlange** ist das Sicherheitsnetz, das zwischen den vom AI Agent vorgeschlagenen Änderungen und Ihrem Live-Katalog sitzt. Wenn der Agent Produktdaten ändern möchte — eine Beschreibung ändern, einen Preis aktualisieren, eine Kategorie zuweisen usw. — kann die Änderung zur Überprüfung zurückgehalten werden, bevor sie wirksam wird. Sie genehmigen, was richtig aussieht, lehnen ab, was nicht passt, und nichts erreicht den Katalog, es sei denn, Sie sagen es.

## Was macht die Genehmigungs-Warteschlange?

- **Fängt** vom AI vorgeschlagene Schreibvorgänge ab, bevor sie in die Datenbank übernommen werden.
- **Zeigt Ihnen ein Side-by-Side-Diff** des aktuellen Werts im Vergleich zu dem, was der Agent ändern möchte.
- **Lässt Sie einzelne Änderungen oder Batches** einzeln oder gleichzeitig genehmigen oder ablehnen.
- **Zeichnet** jede Entscheidung zur Überprüfung auf.

Die Genehmigungs-Warteschlange gilt nur für **Schreibvorgänge, die vom AI Agent stammen**. Änderungen, die direkt von Admins über die normale Benutzeroberfläche vorgenommen werden, werden nicht über die Warteschlange geleitet.

## Wie funktioniert die Genehmigungs-Warteschlange?

1. **Der AI Agent schlägt eine Änderung vor** — generiert aus einer Chat-Anweisung, einem Auto-Enrichment-Lauf oder dem Catalog Quality Monitor.
2. **UnoPim prüft den Change Approval Mode** (konfiguriert in **Magic AI → Settings → Agentic PIM**):
   - **Auto-apply** — sichere/hochkonfidente Änderungen gehen direkt in die Datenbank.
   - **Confirm & apply** (Standard) — der Agent schlägt Werte vor, fragt im Chat nach Bestätigung und führt dann aus.
   - **Manual review** — jede Änderung wird ohne Ausnahme an die Genehmigungs-Warteschlange weitergeleitet.
3. **UnoPim prüft den Confidence Threshold** — wenn das Vertrauen des Agenten in die vorgeschlagene Änderung unter dem Schwellenwert liegt (Standard 0.7, „Balanced"), wird die Änderung unabhängig vom Approval Mode zur Überprüfung zurückgehalten.
4. **Zurückgehaltene Änderungen landen in der Genehmigungs-Warteschlange** mit einem Side-by-Side-Diff, Zeitstempel und dem Chat-Zug, der sie erzeugt hat.
5. **Sie genehmigen oder lehnen ab** jeden Eintrag. Genehmigte Änderungen werden sofort übernommen; abgelehnte Änderungen werden verworfen.
6. **Die Entscheidung wird protokolliert**, damit Sie sie später überprüfen können.

## Konfigurierbare Modi

Die Genehmigungs-Warteschlange unterstützt zwei breite Betriebsmodi, die unter **Magic AI → Settings → Agentic PIM** ausgewählt werden:

### Auto-Approve-Modus

Änderungen gehen direkt in die Datenbank, ohne manuelle Überprüfung. Am besten geeignet für routinemäßige, vertrauenswürdige Operationen — zum Beispiel einen gut abgestimmten Auto-Enrichment-Workflow, bei dem Sie den Prompt und die Persönlichkeit bereits validiert haben. Schneller, aber kein zweites Augenpaar.

### Manual-Review-Modus

Jede vorgeschlagene Änderung wird zur expliziten Genehmigung zurückgehalten. Dies ist der empfohlene Ausgangspunkt beim Einführen des AI Agent, insbesondere für Massenoperationen oder die Inhaltsgenerierung. Sie tauschen ein wenig Geschwindigkeit gegen vollständige Aufsicht.

::: tip
Beginnen Sie mit Manual Review, während Sie lernen, wie sich der Agent in Ihrem Katalog verhält. Sobald Sie einem bestimmten Workflow vertrauen (z. B. dem Ausfüllen von Meta-Beschreibungen für eine bestimmte Familie), können Sie für diese Operationsklasse auf Auto-Approve umschalten.
:::

## Ausstehende Änderungen überprüfen

Wenn Änderungen Ihrer Überprüfung warten, erscheinen sie in der Genehmigungs-Warteschlange. Jede ausstehende Änderung zeigt:

- **Das betroffene Produkt oder die Entität** — auf welches Produkt, welche Kategorie oder welchen Datensatz sich die Änderung bezieht.
- **Das geänderte Feld** — das spezifische Attribut oder Feld, das aktualisiert wird.
- **Der aktuelle Wert** — was das Feld gerade enthält.
- **Der vorgeschlagene Wert** — auf welchen Wert der AI Agent es ändern möchte.
- **Der Zeitstempel** — wann der Agent den Vorschlag generiert hat.

Dieses Side-by-Side-Layout macht es einfach zu erkennen, ob der vorgeschlagene Wert genau und markengerecht ist, bevor er übernommen wird.

## Änderungen genehmigen

Klicken Sie auf die Schaltfläche **Approve** bei einem ausstehenden Eintrag, um diese Änderung zu übernehmen. Die Änderung gelangt sofort in die Datenbank und der Eintrag wird aus der Warteschlange entfernt.

Sie können auch mehrere Einträge auswählen und sie im Bulk genehmigen — nützlich, wenn Sie einen Batch ähnlicher Bearbeitungen überprüft haben (z. B. 20 Meta-Beschreibungen, die alle demselben Muster folgen).

## Änderungen ablehnen

Klicken Sie auf **Reject**, um einen Vorschlag zu verwerfen. Die Änderung wird verworfen und erreicht Ihren Katalog nie. Das Ablehnen beeinflusst das Verhalten des Agenten bei zukünftigen Anfragen nicht — Sie können frei ablehnen, ohne sich über Trainings-Nebeneffekte Sorgen machen zu müssen.

## Wenn eine Bestätigung erforderlich ist

Bestimmte Änderungsklassen fordern unabhängig vom gewählten Approval Mode immer eine explizite Bestätigung:

- **Bildänderungen zwischen Anfragen** — wenn der Agent Änderungen an Produktbildern oder Medien-Assets vorschlägt, werden Sie zur Bestätigung aufgefordert.
- **Massenänderungen** — großangelegte Änderungen, die viele Produkte betreffen, lösen einen Bestätigungsschritt aus, um versehentliche Massenupdates zu verhindern.
- **Destruktive Operationen** — alles, was eine erhebliche Menge an Daten entfernt oder überschreibt, fragt nach einer expliziten Bestätigung.

Diese Schutzmaßnahmen laufen auch im Auto-Approve-Modus. Sie sind dazu da, zu verhindern, dass „ein verirrter Prompt" katalogweiten Schaden anrichtet.

::: tip
Die Genehmigungs-Warteschlange passt besonders gut zu Auto-Enrichment. Lassen Sie den Agenten Beschreibungen und SEO-Inhalte im Hintergrund generieren und überprüfen Sie dann alles von einem Ort aus, bevor es veröffentlicht wird.
:::

## Wie die Warteschlange mit anderen Sicherheitskontrollen interagiert

Die Genehmigungs-Warteschlange ist eine von vier Schutzmaßnahmen am AI Agent. Zusammen bilden sie ein Defense-in-Depth-Modell:

| Schutzmaßnahme | Konfiguriert unter | Was sie schützt |
|---|---|---|
| **ACL-Berechtigungen** | Settings → Roles | Verhindert, dass der Agent Dinge tut, die Ihre Rolle nicht darf. |
| **Daily Token Budget** | Magic AI → Settings → Agentic PIM | Begrenzt die KI-Gesamtausgaben pro Tag. |
| **Max Agent Steps Per Turn** | Magic AI → Settings → Agentic PIM | Begrenzt, wie viele Tools eine einzelne Nachricht verketten kann. |
| **Change Approval Mode + Confidence Threshold + Genehmigungs-Warteschlange** | Magic AI → Settings → Agentic PIM | Hält riskante oder Schreibvorgänge mit niedriger Konfidenz zur Überprüfung zurück. |

Die Warteschlange dreht sich speziell um die **Schreib-Zeit-Aufsicht** — sobald eine Änderung genehmigt und geschrieben wurde, verhält sie sich wie jede andere Katalog-Bearbeitung und folgt dem normalen Audit-/Verlaufspfad.
