# Magic AI — Platforms

> **Seitenleiste:** Magic AI → **Platforms**
> **URL:** `/admin/magic-ai/platforms`

Die Seite **Platforms** ist der Ort, an dem Sie die KI-Anbieter registrieren, mit denen UnoPim sprechen darf. Ohne mindestens eine aktive Plattform bleibt jede andere Magic-AI-Funktion — Zauberstab-Symbole, automatische Übersetzung, Auto-Enrichment und der AI Agent Chat — ausgeschaltet.

## Was ist eine Plattform?

Eine *Plattform* ist eine konfigurierte Provider-Verbindung. Sie hat drei Teile:

1. **Provider** — das Unternehmen, dessen KI Sie verwenden möchten (OpenAI, Anthropic, Gemini, Ollama, Groq usw.).
2. **API-Schlüssel** — das Geheimnis, das UnoPim autorisiert, die API dieses Anbieters aufzurufen.
3. **Aktivierte Modelle** — welche Modelle des Anbieters in UnoPim verfügbar sein sollen.

Sie können **so viele Plattformen registrieren, wie Sie möchten**. Ein gängiges Setup ist ein Premium-Anbieter für Inhalte (z. B. OpenAI `gpt-4o`) und ein günstigerer oder schnellerer für die Übersetzung (z. B. Gemini `gemini-1.5-flash`). Die Plattformen-Seite hält sie nebeneinander; die Seite **Settings** entscheidet, welche Plattform welche Fähigkeit bedient.

## Was macht diese Seite?

- Listet jede registrierte Plattform mit ihrem Status und ihren Modellen auf.
- Lässt Sie eine Plattform **hinzufügen**, **bearbeiten**, **aktivieren/deaktivieren**, **löschen** und **als Standard festlegen**.
- Verschlüsselt jeden API-Schlüssel beim Speichern — Schlüssel werden nie im Klartext gespeichert und in der Benutzeroberfläche maskiert.

<ImagePopup src="/assets/2.0/images/magic-ai/ai-platforms.png" alt="KI-Plattformen" />

## Plattformen-Datagrid

| Spalte | Beschreibung |
|--------|-------------|
| **Label** | Der Name, den Sie der Plattformkonfiguration zugewiesen haben. |
| **Provider** | Der KI-Anbieter (OpenAI, Anthropic, Gemini, Ollama, Groq usw.). |
| **Models** | Die für diese Plattform aktivierten Modelle. |
| **Default** | Ob diese Plattform die Standardplattform ist (Ja/Nein). |
| **Status** | Aktiviert oder Deaktiviert. |
| **Created At** | Datum, an dem die Plattform hinzugefügt wurde. |
| **Actions** | Stern (als Standard festlegen), Bearbeiten (Stift-Symbol), Löschen (Papierkorb-Symbol). |

## Hinzufügen einer Plattform

Klicken Sie auf die Schaltfläche **Add Platform** in der oberen rechten Ecke. Ein Modal mit den folgenden Feldern wird geöffnet:

1. **Provider** — Wählen Sie aus dem Dropdown (OpenAI, Anthropic, Gemini, Ollama, Groq usw.).
2. **Label** — Ein beschreibender Name wie *„OpenAI Production"* oder *„Gemini Translation"*. Dies ist das, was Sie in den Settings-Dropdowns sehen werden.
3. **API Key** — Fügen Sie den Schlüssel aus Ihrem Provider-Konto ein. Er wird verschlüsselt, bevor er die Datenbank erreicht.
4. **Models** — Multi-Select der Modelle, die Sie verfügbar machen möchten. Nur die hier angekreuzten Modelle erscheinen in den nachgelagerten Text / Image / Translation / Agentic PIM-Dropdowns auf der Settings-Seite.
5. **Status** — Umschalten, um die Plattform zu aktivieren oder zu deaktivieren.

<ImagePopup src="/assets/2.0/images/magic-ai/add-platform.png" alt="Plattform hinzufügen" />

::: tip
API-Anmeldedaten werden zur Sicherheit mit verschlüsselter Credential-Speicherung gespeichert. Ihre API-Schlüssel werden nie im Klartext gespeichert.
:::

## Plattform-Aktionen

- **Stern-Symbol** — Setzt die Plattform als **Standard**. Überall, wo die Settings-Seite *„Use Default Platform"* anzeigt, wird sie auf die mit dem Stern markierte Plattform aufgelöst. Es kann immer nur eine die Standardplattform sein.
- **Stift-Symbol** — Öffnet das Bearbeitungsmodal, damit Sie das Label aktualisieren, den API-Schlüssel rotieren, die Modellliste anpassen oder den Status umschalten können.
- **Papierkorb-Symbol** — Löscht die Plattformkonfiguration. Jede Funktion, die in den Einstellungen immer noch auf diese Plattform zeigt, fällt auf den Standard zurück. Unwiderruflich.

## Wie die Plattformauswahl in die Funktionen fließt

```
Platforms (provider + key + models)
        │
        ▼
Settings (pick platform + model per feature)
        │
        ├─► Text Generation ──► Wand icons on text fields
        ├─► Image Generation ──► Wand icons on image/gallery fields
        ├─► Translation ──────► Auto-translate on save + bulk command
        └─► Agentic PIM ──────► AI Agent Chat
```

## Mindesteinrichtung

Um überhaupt eine Magic-AI-Funktion zum Laufen zu bringen:

1. Registrieren Sie mindestens **eine** Plattform.
2. Stellen Sie sicher, dass sie mindestens **ein** Modell aktiviert hat.
3. Setzen Sie ihren Status auf **Enabled**.
4. **Markieren** Sie eine Plattform als Standard mit einem Stern.

Sobald das erledigt ist, gehen Sie zu **Magic AI → Settings**, um jede Fähigkeit (Text / Image / Translation / Agentic PIM) an eine Plattform und ein Modell Ihrer Wahl weiterzuleiten.
