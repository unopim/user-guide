# Magic AI — System-Prompts

> **Seitenleiste:** Magic AI → **System-Prompts**
> **URL:** `/admin/magic-ai/system-prompts`

Die **System-Prompts**-Seite steuert die **Persönlichkeit** der KI — die Stimme, die Tonalität und die Generierungsparameter, die unter jeder Inhaltsanfrage in UnoPim sitzen. Es ist immer nur ein System-Prompt zur gleichen Zeit aktiv, sodass Ihr gesamter Katalog eine konsistente Stimme behält.

## Was ist ein System-Prompt?

Ein *System-Prompt* ist eine Präambel, die Magic AI vor jeden benutzerseitigen Prompt stellt, bevor die Anfrage an das Modell gesendet wird. Er legt fest:

- **Tonalität** — freundlich vs. formell, prägnant vs. lebendig, autoritativ vs. lässig.
- **Temperatur** — wie kreativ oder deterministisch die Ausgabe ist (0,0 = kompakt und wiederholbar, 1,0 = vielfältig und einfallsreich).
- **Max Tokens** — wie lang die Antwort sein kann.

Während ein [**Prompt**](./prompts.md) sagt, *was* für ein bestimmtes Feld zu schreiben ist (*„Schreibe eine Produktbeschreibung mit `@name` und `@color`"*), sagt ein **System-Prompt**, *wie* es klingen soll — und dieses „wie" gilt für jedes Stück Inhalt, das das System produziert.

## Was macht diese Seite?

- Listet die 10 voreingestellten System-Prompts, die mit UnoPim ausgeliefert werden, plus alle benutzerdefinierten, die Sie erstellen.
- Lässt Sie System-Prompts **erstellen**, **bearbeiten**, **aktivieren/deaktivieren** und **löschen**.
- Erzwingt, dass immer nur ein System-Prompt aktiv ist — das Aktivieren eines neuen deaktiviert automatisch den vorherigen.

<ImagePopup src="/assets/2.0/images/magic-ai/system-prompts.png" alt="System-Prompts" />

## Wo der aktive System-Prompt angewendet wird

```
Beliebige Magic-AI-Anfrage (Zauberstab-Symbol, Auto-Übersetzung, Agent-Chat, Auto-Enrichment)
           │
           ▼
Magic AI wählt den passenden Prompt        ← aus Magic AI → Prompts
           │
           ▼
Aktiver System Prompt wird vorangestellt   ← aus Magic AI → System Prompts
   (Ton + Temperatur + Max-Tokens)
           │
           ▼
Kombinierte Anfrage an Plattform + Modell  ← aus Magic AI → Settings
```

Da der aktive System-Prompt für **jede** KI-Funktion gilt — Zauberstab-Symbole, automatische Übersetzung, Auto-Enrichment und der AI Agent — ändert der Wechsel sofort die Stimme jeder KI-Ausgabe im gesamten Katalog.

## System-Prompts-Datagrid

| Spalte | Beschreibung |
|--------|-------------|
| **Title** | Der Name des System-Prompts. |
| **Tone** | Die konversationelle Tonalität (z. B. Confident, Vivid, Brief). |
| **Max Tokens** | Die maximale Anzahl von Tokens für KI-Antworten. |
| **Temperature** | Das Kreativitätsniveau (niedriger = fokussierter, höher = kreativer). |
| **Status** | Aktiviert oder Deaktiviert. |
| **Created At** | Datum, an dem der System-Prompt erstellt wurde. |
| **Updated At** | Datum, an dem der System-Prompt zuletzt geändert wurde. |
| **Actions** | Bearbeiten (Stift-Symbol), Löschen (Papierkorb-Symbol). |

## Voreingestellte System-Prompts

UnoPim wird mit 10 voreingestellten System-Prompts ausgeliefert. Es kann immer nur einer aktiviert sein.

| Title | Tone | Temperature | Hinweise |
|-------|------|-------------|-------|
| Authoritative Guide | Confident, assertive, instructional | 0.65 | |
| Descriptive Storyteller | Vivid, rich, engaging | 0.9 | |
| Concise Responder | Brief, to-the-point | 0.5 | |
| Technical Expert | Precise, analytical | 0.6 | |
| Casual Conversationalist | Informal, relaxed | 0.75 | |
| Motivational Coach | Energetic, encouraging | 0.85 | |
| Empathetic Listener | Warm, understanding | 0.6 | |
| Witty Commentator | Clever, humorous | 0.9 | |
| Professional Advisor | Formal, respectful | 0.65 | |
| Friendly Assistant | Friendly, helpful, casual | 0.7 | Standardmäßig aktiviert |

## Erstellen eines System-Prompts

Klicken Sie auf die Schaltfläche **System-Prompt erstellen**. Konfigurieren Sie:

- **Title** — Der Name, der im Datagrid erscheint (z. B. *„Luxury Brand Voice"*).
- **Tone description** — Eine Beschreibung der Stimme in Klartextsprache. Das Modell liest dies zur Anfragezeit, also seien Sie spezifisch: *„Write in an understated, elegant tone. Use concise sentences. Avoid marketing hyperbole."*
- **Max Tokens** — Begrenzt die Antwortlänge. Niedrigere Werte produzieren kürzere, günstigere Ausgaben; höhere Werte geben dem Modell mehr Raum.
- **Temperature** — 0,0 bis 1,0. Niedrige Werte (0,3–0,5) sind am besten für zuverlässige, wiederholbare Ausgaben; hohe Werte (0,8–1,0) fügen Abwechslung und Flair hinzu.
- **Status** — Das Aktivieren dieses deaktiviert automatisch den derzeit aktiven System-Prompt.

## Eine Temperatur wählen

| Temperatur | Am besten geeignet für |
|---|---|
| **0,0 – 0,4** | Technische Spezifikationen, SEO-Metafelder, Referenzinhalte — wo Wiederholbarkeit zählt. |
| **0,5 – 0,7** | Allgemeine Produktbeschreibungen, Kategorietext, alltägliche Marketinginhalte. |
| **0,8 – 1,0** | Lifestyle-Inhalte, Storytelling, blogartige Texte — wo Abwechslung und Kreativität glänzen. |

::: tip
Es kann immer nur ein System-Prompt aktiv sein. Das Aktivieren eines neuen System-Prompts deaktiviert automatisch den zuvor aktiven. Wählen Sie eine Persönlichkeit, die dem Ton entspricht, den Sie über den gesamten Katalog hinweg wünschen — mitten im Flug zu wechseln, macht ältere und neuere Inhalte inkonsistent.
:::

## Prompts vs. System-Prompts

| | Prompt | System-Prompt |
|---|---|---|
| **Geltungsbereich** | Pro Feld / pro Zweck | Global über das gesamte System |
| **Sagt** | *Was* zu schreiben ist | *Wie* zu schreiben ist |
| **Wie viele aktiv** | So viele, wie Sie erstellt haben | Genau einer |
| **Platzhalter** | Ja (`@attribute_code`) | Nein — als Klartextanweisungen geschrieben |
| **Typische Änderungskadenz** | Häufig — pro Attribut, pro Anwendungsfall abgestimmt | Selten — an die Markenstimme gebunden |

Siehe **[Prompts](./prompts.md)** für die Pro-Feld-Anweisungsschicht, die sich zur Generierungszeit mit dem aktiven System-Prompt kombiniert.
