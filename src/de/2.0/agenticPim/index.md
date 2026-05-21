# Agentic PIM

> **Seitenleiste:** **Agentic PIM**
> **Einstellungen befinden sich unter:** Magic AI → Settings → Abschnitt *Agentic PIM* (`/admin/configuration/general/magic_ai`)

**Agentic PIM** ist die Flaggschiff-KI-Funktion von UnoPim — das Dach, das jeden autonomen oder halbautonomen KI-Workflow abdeckt, den das Produkt in Ihrem Auftrag ausführt. Aus einer einzigen Einstellungskarte unter **Magic AI → Settings** steuern Sie:

- Das **AI Agent Chat**-Panel (das schwebende Sternsymbol unten rechts auf jeder Admin-Seite).
- Den **Auto-Enrichment**-Hintergrundjob, der nach der Erstellung fehlende Produktfelder füllt.
- Den geplanten **Catalog Quality Monitor**-Scan.
- Den **Confidence Threshold** und den **Change Approval Mode**, die entscheiden, wann KI-vorgeschlagene Änderungen Ihre Daten erreichen oder in der Genehmigungs-Warteschlange landen.
- Das **Daily Token Budget**, das die kombinierten Ausgaben über alle oben genannten Funktionen hinweg begrenzt.

## Was macht Agentic PIM?

Stellen Sie sich Agentic PIM als ein kleines Team von KI-Mitarbeitern vor, die Ihren Katalog überwachen:

| Mitarbeiter | Auslöser | Ergebnis |
|---|---|---|
| **AI Agent Chat** | Sie geben im Chat-Panel eine Anweisung ein. | Ruft eines oder mehrere von über 30 PIM-Tools auf, um Ihre Anfrage auszuführen. |
| **Auto-Enrichment** | Ein neues Produkt wird erstellt (manuell oder per Import). | Füllt fehlende Beschreibungen, SEO-Metadaten usw. aus. |
| **Catalog Quality Monitor** | Geplant (Hintergrund). | Durchsucht den Katalog nach dünnen oder inkonsistenten Daten und meldet sie unter „Aufmerksamkeit erforderlich". |
| **Genehmigungs-Warteschlange** | Ein KI-Mitarbeiter schlägt eine Änderung vor. | Hält die Änderung zurück oder wendet sie an, basierend auf Ihrem Approval Mode + Confidence Threshold. |

Alle vier teilen sich dieselbe Plattform, dasselbe Modell, denselben Prompt, denselben System-Prompt und dasselbe Token-Budget — einmal konfiguriert unter **Magic AI → Settings**.

## Wie funktioniert Agentic PIM?

Jede Agentic-PIM-Aktion folgt derselben fünfstufigen Pipeline:

```
1. Auslöser
   ├─ Chat-Nachricht   (AI Agent Chat)
   ├─ Produkt anlegen  (Auto-Enrichment)
   ├─ Zeitplan-Tick    (Catalog Quality Monitor)
   └─ API-Aktion       (jeder Aufruf des Agenten über HTTP)
        │
        ▼
2. Kontext zusammenstellen
   - Entitätsdaten (+ @attribute_code-Platzhalter aufgelöst)
   - Passender Prompt aus Magic AI → Prompts
   - Aktiver System Prompt aus Magic AI → System Prompts
   - Gemerkte Fakten (RememberFact / RecallMemory)
        │
        ▼
3. Schlussfolgern (unter Beachtung von Max Agent Steps Per Turn)
   - LLM wählt ein oder mehrere Tools für den Aufruf
   - Jedes Tool wird gegen echte UnoPim-Daten ausgeführt
   - Nur innerhalb der ACL-Berechtigungen des Aufrufers
        │
        ▼
4. Entscheiden, wie das Ergebnis angewendet wird
   - Konfidenz ≥ Schwellenwert + Genehmigungsmodus erlaubt → direkt anwenden
   - Unter Schwellenwert ODER Manual-Review-Modus → an Genehmigungs-Warteschlange weiterleiten
        │
        ▼
5. Antworten
   - Chat: Rückgabe als Stream über Server-Sent Events
   - Hintergrund: Schreiben in die DB (ggf. über die Genehmigungs-Warteschlange)
   - Token-Nutzung gegen das Daily Token Budget erfassen
```

Diese Pipeline läuft auf dem einheitlichen **LaravelAiAdapter**, sodass ein Wechsel von Plattformen oder Modellen unter Magic AI Settings sofort das Verhalten jedes Agentic-PIM-Mitarbeiters ändert.

## Konfiguration — die Agentic-PIM-Einstellungen

Öffnen Sie **Magic AI → Settings** und klappen Sie die **Agentic PIM**-Karte auf. Die Felder sind:

| Feld | Was es bewirkt |
|---|---|
| **Enable AI Agent Chat** | Hauptschalter für das schwebende Chat-Panel. Bei „Aus" wird das Sternsymbol unten rechts ausgeblendet und kein Benutzer kann mit dem Agenten kommunizieren. Auto-Enrichment und der Catalog Quality Monitor laufen weiter. |
| **Max Agent Steps Per Turn** | Wie viele Tool-Aufrufe der Agent für einen einzelnen Trigger verketten darf. Dropdown-Voreinstellungen statt Rohzahlen (z. B. **`3 (Fast)`**). Höher = mehr Autonomie pro Zug; niedriger = strengere Kontrolle und günstigere Token. |
| **Daily Token Budget** | Globale tägliche Obergrenze für die von Agentic PIM ausgegebenen Token (z. B. `500000`). Gemeinsam genutzt über Chat, Anreicherung und Überwachung. Wenn die Obergrenze erreicht ist, pausiert jeder KI-Mitarbeiter bis zum nächsten Tag. |
| **Auto-Enrichment on Product Create** | Wenn aktiviert, wird jedes neu erstellte Produkt in die Warteschlange für die Hintergrundanreicherung gestellt — fehlende Beschreibungen, SEO-Felder usw. werden automatisch ausgefüllt. |
| **Catalog Quality Monitor** | Führt einen geplanten KI-Scan aus, der dünne, fehlende oder inkonsistente Katalogdaten in den Dashboard-Abschnitt **Aufmerksamkeit erforderlich** meldet. |
| **Confidence Threshold** | Minimaler Konfidenzwert (Standard **0.7 — Balanced**), der erforderlich ist, bevor eine vorgeschlagene Änderung ohne Überprüfung angewendet wird. Unterhalb des Schwellenwerts wird die Änderung unabhängig vom Approval Mode in der Genehmigungs-Warteschlange zurückgehalten. |
| **Change Approval Mode** | *Auto-apply* / *Confirm & apply* / *Manual review*. Steuert, wie KI-vorgeschlagene Änderungen in Ihren Daten landen. Standardwert ist *"Confirm & apply (Werte vorschlagen, zur Bestätigung auffordern, dann ausführen)"*. |

<ImagePopup src="/assets/2.0/images/magic-ai/magic-ai-settings.png" alt="Magic AI Settings — Abschnitt Agentic PIM" />

## Empfohlene Setup-Reihenfolge

Agentic PIM hat viele Stellschrauben. Ein typischer Rollout sieht so aus:

1. **Tag 0 — vorsichtiger Start.** Aktivieren Sie nur den AI Agent Chat. Setzen Sie *Max Agent Steps Per Turn* auf die niedrigste Voreinstellung, das Daily Token Budget auf eine konservative Zahl und den Change Approval Mode auf **Manual review**.
2. **Tag 1-3 — beobachten Sie die Analytics.** Beobachten Sie den Token-Verbrauch und welche Tools der Agent tatsächlich aufruft. Überprüfen Sie jede Änderung in der Genehmigungs-Warteschlange.
3. **Ab Tag 4 — selektiv lockern.** Erhöhen Sie das Token-Budget, sobald Sie die Ausgaben verstehen. Verschieben Sie vertrauenswürdige Workflows (z. B. das Ausfüllen von Meta-Beschreibungen in einer bestimmten Familie) auf **Confirm & apply** oder **Auto-apply**. Belassen Sie riskante Workflows in Manual review.
4. **Woche 2 — Hintergrund-Worker einschalten.** Aktivieren Sie zuerst **Auto-Enrichment on Product Create** (Einzel-Entität, vorhersehbare Kosten). Aktivieren Sie **Catalog Quality Monitor**, sobald Sie mit der Anreicherungsqualität zufrieden sind.

## Wie sich Agentic PIM auf andere Dokumente bezieht

| Wenn Sie möchten… | Lesen Sie |
|---|---|
| Die Chat-Benutzeroberfläche im Detail kennenlernen | **[AI Agent Chat](../ai-agent/ai-agent-chat.md)** |
| Vorgeschlagene Änderungen überprüfen, genehmigen oder ablehnen | **[Genehmigungs-Warteschlange](../ai-agent/approval-queue.md)** |
| Token-Nutzung, Kosten und Aktivität anzeigen | **[Analytics](../ai-agent/analytics.md)** |
| Plattformen, Prompts, System-Prompts konfigurieren | **[Magic AI Configuration](../configuration/magic-ai.md)** |
| Routing pro Fähigkeit feinjustieren (Text / Image / Translation) | **[Magic AI → Settings](../magic-ai/settings.md)** |

## Sicherheitskontrollen auf einen Blick

Vier Ebenen stapeln sich, um die Autonomie von Agentic PIM in Schach zu halten:

| Ebene | Konfiguriert unter | Was sie schützt |
|---|---|---|
| **ACL-Berechtigungen** | Settings → Roles | Verhindert, dass der Agent etwas tut, was die Rolle des Aufrufers nicht darf. |
| **Daily Token Budget** | Magic AI → Settings → Agentic PIM | Begrenzt die Gesamtausgaben über alle Agentic-PIM-Mitarbeiter pro Tag. |
| **Max Agent Steps Per Turn** | Magic AI → Settings → Agentic PIM | Begrenzt, wie viele Tools ein einzelner Trigger verketten kann. |
| **Confidence Threshold + Change Approval Mode + Genehmigungs-Warteschlange** | Magic AI → Settings → Agentic PIM | Hält riskante oder Schreiboperationen mit niedriger Konfidenz zur Überprüfung zurück. |

Keine davon erfordert ein erneutes Deployen oder einen Neustart — speichern Sie die Magic-AI-Einstellungsseite und jeder Agentic-PIM-Mitarbeiter übernimmt bei seinem nächsten Lauf die neuen Werte.
