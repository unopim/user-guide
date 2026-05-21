# AI Agent Chat

Der **AI Agent Chat** ist die konversationelle Benutzeroberfläche für Agentic PIM. Aus einem einzigen Chat-Fenster können Sie Produkte, Kategorien, Attribute, Datenqualität und Massenoperationen verwalten — einfach durch die Beschreibung dessen, was Sie benötigen.

## Was macht der AI Agent Chat?

Das Chat-Panel ist ein einziger Einstiegspunkt für **über 30 PIM-Tools**. Wenn Sie eine Nachricht eingeben, geht der Agent wie folgt vor:

- Interpretiert Ihre Absicht.
- Wählt ein oder mehrere Tools zum Aufruf aus (Produkt erstellen, suchen, Massenbearbeitung, Inhalt generieren, Assoziationen verwalten usw.).
- Führt die Tools gegen echte UnoPim-Daten innerhalb Ihrer ACL-Berechtigungen aus.
- Streamt die Ergebnisse in Echtzeit zurück in den Chat.

Alles, was Sie über die Admin-Benutzeroberfläche tun können, können Sie auch tun, indem Sie im Chat danach fragen — und der Agent kann mehrere Schritte in einer Anfrage verketten, sodass Aufgaben, die viele Klicks erfordern würden, zu einer einzigen Anweisung zusammenfallen.

## Wie funktioniert es?

```
You type a message
        │
        ▼
Agent reads: message + session history + remembered facts + active System Prompt
        │
        ▼
Agent picks a tool (or plans a chain of tools)
        │
        ▼
Each tool runs against UnoPim data (gated by your ACL permissions)
        │
        ▼
Risky / low-confidence changes → Approval Queue
Safe changes → applied immediately
        │
        ▼
Response streams back into chat over SSE
```

Die für diese Reasoning-Schleife verwendete Plattform und das Modell werden unter **Magic AI → Settings → Agentic PIM** konfiguriert. Die Persönlichkeit (Tonalität, Temperatur, max. Token) kommt aus dem aktiven **System-Prompt**.

## Den AI Agent Chat öffnen

Klicken Sie auf das schwebende **Sternsymbol** unten rechts auf einer beliebigen Admin-Seite. Das Chat-Panel gleitet vom rechten Rand mit der Kopfzeile **"Agenting PIM — AI-powered operations"** herein.

 <ImagePopup src="/assets/2.0/images/ai-agent/ai-agent-chat.png" alt="AI Agent Chat" />

Ein Einstellungs-Zahnrad ⚙ in der Panel-Kopfzeile springt zu `/admin/ai-agent/settings` (was zu **Magic AI → Settings** führt), wo Sie Plattformen, Modelle und Budgets konfigurieren können.

Das Panel hat drei Tabs:
- **Capabilities** — Durchsuchen Sie die über 30 Tools, die der Agent aufrufen kann.
- **Chat** — Konversationelle Oberfläche. Wenn leer, zeigt sie *"How can I help with your catalog?"* unter einem Sternsymbol und der Kopfzeile **General Chat**.
- **Sessions** — Ihre vergangenen Konversationen. Ein Zahlen-Badge am Tab zeigt, wie viele Sitzungen ungelesen sind.

 <ImagePopup src="/assets/2.0/images/ai-agent/ai-agent-chat-tab.png" alt="AI Agent Chat Tab" />

Sobald geöffnet, gleitet das Chat-Panel von der rechten Seite des Bildschirms herein. Sie können sofort Ihre Anfrage eingeben.

## Capabilities-Tab

Der Capabilities-Tab listet jedes Tool auf, das der Agent aufrufen kann. Jedes Tool repräsentiert eine bestimmte PIM-Operation, die Sie über natürliche Sprache auslösen können — Sie rufen Tools nicht namentlich auf, Sie beschreiben, was Sie wollen, und der Agent wählt das richtige aus.

| # | Tool | Was es tut |
|---|------|-------------|
| 1 | **Create from Image** | Fotos hochladen, um Produkte automatisch zu erstellen |
| 2 | **Update Products** | Attribute/Status nach SKU aktualisieren |
| 3 | **Search Products** | Produkte nach SKU, Name oder Status finden |
| 4 | **Find Similar** | Ähnliche Produkte mit KI finden |
| 5 | **Generate Content** | KI-generierter Name, Beschreibung & SEO |
| 6 | **Generate Image** | Produktbilder aus Text erstellen |
| 7 | **Edit Product Image** | Hintergrund entfernen, verbessern & retuschieren |
| 8 | **Assign Categories** | Kategoriepfade Produkten zuweisen |
| 9 | **List Attributes** | Familienattribute & Optionen anzeigen |
| 10 | **Export Products** | CSV/XLSX-Export generieren |
| 11 | **Bulk Import CSV** | CSV/XLSX hochladen für Batch-Update |
| 12 | **Delete Products** | Produkte nach SKU-Liste entfernen |
| 13 | **Create Category** | Neue Kategorien zum Katalog hinzufügen |
| 14 | **Category Tree** | Vollständige Kategoriehierarchie anzeigen |
| 15 | **Create Attribute** | Neue Produktattribute hinzufügen |
| 16 | **Manage Options** | Attributoptionen hinzufügen oder auflisten |
| 17 | **Attribute Families** | Familien auflisten, erstellen oder inspizieren |
| 18 | **Bulk Edit** | Massenaktualisierung von Produkten nach Regeln |
| 19 | **Catalog Summary** | Statistiken, Zählungen & kürzliche Aktivitäten |
| 20 | **Channels** | Kanäle, Locales & Währungen anzeigen |
| 21 | **Users** | Admin-Benutzer & Details anzeigen |
| 22 | **Roles** | Rollen & Berechtigungen anzeigen |
| 23 | **Ask Anything** | Freiform-PIM-Assistent |
| 24 | **Manage Associations** | Verwandte/Up-Sell-/Cross-Sell-Produkte über natürliche Sprache hinzufügen, entfernen oder auflisten *(v2.0.x)* |

::: tip
Jedes Tool respektiert Ihre ACL-Berechtigungen. Wenn Ihre Admin-Rolle eine bestimmte Operation nicht erlaubt, wird das entsprechende Tool stillschweigend nicht ausgeführt — der Agent kann Ihre Rolle nie umgehen.
:::

## Layout der Chat-Oberfläche

Die Chat-Oberfläche besteht aus den folgenden Bereichen:

- **Nachrichtenbereich** — Zeigt den Konversationsverlauf zwischen Ihnen und dem AI Agent an, einschließlich Antworten, Tool-Ausgaben und Statusupdates.
- **Eingabefeld** — Eine Texteingabe unten, in die Sie Ihre Befehle oder Fragen eingeben. Tastatur-Hinweis: **Enter** zum Senden, **Shift+Enter** für eine neue Zeile.
- **Anhang-Symbol (Büroklammer)** — Hängen Sie eine Datei (Bild, CSV) an die Nachricht an.
- **Plattform-Dropdown** — Wählen Sie, welche konfigurierte KI-Plattform diese spezifische Nachricht bearbeitet (siehe unten).
- **Modell-Dropdown** — Wählen Sie, welches Modell auf dieser Plattform diese spezifische Nachricht bearbeitet.
- **Senden-Schaltfläche** — Sendet Ihre Nachricht zur Verarbeitung an den AI Agent.

### Eine Plattform oder ein Modell für eine einzelne Nachricht auswählen

Mit der Chat-Eingabeleiste können Sie die Standardplattform und das Standardmodell **pro Nachricht** überschreiben, ohne die globalen Standardwerte unter **Magic AI → Settings** zu ändern.

| Dropdown | Was es zeigt | Quelle |
|---|---|---|
| **Platform** | Jede aktivierte Plattform (z. B. *OpenAI (Openai)*). | **Magic AI → Platforms** |
| **Model** | Auf der ausgewählten Plattform aktivierte Modelle (z. B. *gpt-5.4*). | Auf dieser Plattform abgehakte Modelle |

Die Überschreibung gilt für eine Nachricht; die nächste Nachricht greift wieder auf das zurück, was die Dropdowns gerade zeigen.

**Wann das nützlich ist:**

- **Kostenkontrolle** — leiten Sie eine einfache Abfrage an ein günstiges, schnelles Modell weiter, während Sie ein Premium-Modell für die Anreicherung behalten.
- **Qualitätsexperimente** — senden Sie dieselbe Eingabeaufforderung zweimal mit verschiedenen Modellen und vergleichen Sie.
- **Provider-Isolation** — leiten Sie sensible Eingabeaufforderungen an eine selbstgehostete Ollama-Plattform weiter, ohne die globale Einstellung zu berühren.

Wenn Sie möchten, dass eine Änderung für jeden Benutzer und jede Funktion gilt, bearbeiten Sie stattdessen **Magic AI → Settings → Agentic PIM**.

## Arten von Befehlen

Unten sind die Hauptkategorien aufgeführt, was Sie den Agenten tun lassen können. Da der Agent Tools aus Ihrer Absicht heraus wählt, müssen Sie keine Tool-Namen merken — beschreiben Sie einfach das gewünschte Ergebnis.

### Produktoperationen

Produkte erstellen, aktualisieren, suchen und in Massen bearbeiten.

**Beispiel-Prompts:**
- "Create a simple product with SKU TSHIRT-001 and name Blue T-Shirt"
- "Update the price of product SKU LAPTOP-PRO to 999.99"
- "Search for all products in the Footwear category"
- "Bulk update status to enabled for all products with SKU starting with SHOE"

### Kategorieverwaltung

Verwalten Sie den Kategoriebaum.

**Beispiel-Prompts:**
- "Show me all root categories"
- "List products assigned to the Electronics category"

### Datenqualitätsberichte

Scannen Sie Ihren Katalog auf fehlende oder unvollständige Daten und erhalten Sie strukturierte Berichte, auf die Sie reagieren können.

**Beispiel-Prompts:**
- "Run a data quality scan on all products in the Clothing category"
- "Which products are missing a description?"
- "Show me products with completeness score below 50%"

### Produktverifizierung & Qualitätsbewertung

Verifizieren Sie einzelne Produkte gegen Qualitätskriterien.

**Beispiel-Prompts:**
- "Check the completeness of product SKU JACKET-100"
- "Verify data quality for all products in the Default family"

### Auto-Enrichment

Lassen Sie den Agenten fehlende Inhalte — Beschreibungen, SEO-Felder usw. — ausfüllen. Der Agent verwendet alles, was das Produkt bereits hat (Name, Kategorie, Attribute), um passende Inhalte zu erzeugen.

**Beispiel-Prompts:**
- "Generate a short description for product SKU SNEAKER-200"
- "Auto-fill missing meta descriptions for all products in the Accessories category"
- "Enrich the SEO fields for product SKU WATCH-050"

::: tip
Auto-Enrichment funktioniert am besten, wenn das Produkt bereits grundlegende Informationen wie einen Namen und eine Kategorie hat. Der Agent stützt sich auf diesen Kontext, um kohärente, markengerechte Inhalte zu erzeugen.
:::

### Aufgabenplanung

Bei mehrstufigen Arbeiten erstellt der Agent einen Plan, zeigt ihn Ihnen und führt ihn Schritt für Schritt aus.

**Beispiel-Prompts:**
- "Plan and execute: update all products in the Summer collection to have a 20% discount and a new promotional description"
- "Create a task plan to review and enrich all products with missing images"

### Massentransformationen

Wenden Sie Transformationen (Anhängen, Voranstellen, Ersetzen) auf viele SKUs in einem einzigen Schritt an.

**Beispiel-Prompts:**
- "Bulk update all products with status disabled to enabled"
- "Change the category of all products with SKU prefix LEGACY to the Archive category"

### Assoziationen verwalten

Eingeführt in **v2.0.x**, ermöglicht Ihnen das **Manage Associations**-Tool, verwandte Produkte, Up-Sells und Cross-Sells über eine Konversation hinzuzufügen, zu entfernen oder aufzulisten — ohne jedes Produkt einzeln öffnen zu müssen.

**Beispiel-Prompts:**
- "Add SKU BELT-100 as a cross-sell on SKU JEANS-200"
- "Remove all up-sell products from SKU PHONE-CASE-BLACK"
- "List cross-sell products linked to SKU LAPTOP-PRO"
- "Mirror the related products of SKU SHIRT-001 onto SKU SHIRT-002"

### Agent-Memory-System

Der Agent verfügt über ein kleines Langzeitgedächtnis, das über Sitzungen hinweg bestehen bleibt. Es verwendet zwei interne Tools:

- **RememberFact** — Speichert eine Tatsache oder Präferenz, die Sie ihm zum Merken sagen.
- **RecallMemory** — Ruft gespeicherte Tatsachen ab, wenn sie für die aktuelle Anfrage relevant sind.

**Beispiel-Prompts:**
- "Remember that our standard product description format starts with the brand name"
- "Recall what I told you about our naming convention"

### Content-Feedback-Schleife

Wenn der Agent Inhalte generiert, können Sie ihm Feedback geben, und er wird zukünftige Ausgaben in derselben Sitzung anpassen — und, falls stark genug, die Präferenz für das nächste Mal merken.

**Beispiel-Prompts:**
- "That description is too long, make it shorter and more direct"
- "I prefer a formal tone for product descriptions"
- "Rewrite that but focus more on the material and durability"

## Echtzeit-Streaming-Antworten

Antworten werden mit **Server-Sent Events (SSE)** in Echtzeit in den Chat gestreamt. Sie sehen das Reasoning des Agenten, Tool-Aufrufe und Ergebnisse progressiv erscheinen, anstatt auf die gesamte Antwort warten zu müssen. Bei langen Operationen (z. B. einem 200-Produkt-Massenupdate) können Sie den Fortschritt live mitverfolgen.

## Sessions-Tab

Der Sessions-Tab listet jeden vergangenen Chat auf. Jeder Eintrag zeigt den Sitzungstitel, die Anzahl der Nachrichten und das Datum der letzten Aktivität.

 <ImagePopup src="/assets/2.0/images/ai-agent/ai-agent-sessions.png" alt="AI Agent Sessions" />

### Sitzungen verwalten

- **+ New Session** — Starten Sie eine saubere Konversation ohne vorherigen Kontext. Nützlich, wenn Sie zu einer anderen Aufgabe wechseln.
- **Sitzung löschen** — Die Schaltfläche mit dem Papierkorb-Symbol entfernt eine Sitzung dauerhaft. Unwiderruflich.
- **Eine Sitzung fortsetzen** — Klicken Sie auf einen beliebigen Eintrag, um ihn wieder zu öffnen. Vollständiger Verlauf und Kontext werden wiederhergestellt, sodass der Agent genau dort weitermacht, wo Sie aufgehört haben.

### Sitzungspersistenz

Sitzungen sind datenbankgestützt, was bedeutet:

- **Seiten-Aktualisierungen** löschen Ihre Konversation nicht.
- **Browser-Sitzungen** werden erhalten — schließen Sie den Tab, kommen Sie später zurück, machen Sie weiter.
- **Kontext bleibt innerhalb einer Sitzung erhalten**, sodass der Agent sich erinnert, was Sie früher im selben Thread besprochen haben ("apply the same change to SKU B").
- Sitzungen bleiben **über Anmeldungen hinweg** erhalten, sodass Ihr Verlauf immer verfügbar ist, wenn Sie sich wieder anmelden.

::: tip
Starten Sie eine neue Sitzung, wenn Sie zu einer anderen Aufgabe wechseln. Fokussierte Sitzungen führen zu besseren Tool-Entscheidungen, da der Agent keinen irrelevanten Kontext jonglieren muss.
:::
