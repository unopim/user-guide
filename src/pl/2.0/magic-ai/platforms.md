# Magic AI — Platforms

> **Pasek boczny:** Magic AI → **Platforms**
> **URL:** `/admin/magic-ai/platforms`

Strona **Platforms** to miejsce, w którym rejestrujesz dostawców AI, z którymi UnoPim może rozmawiać. Bez co najmniej jednej aktywnej platformy każda inna funkcja Magic AI — ikony różdżki, automatyczne tłumaczenie, auto-wzbogacanie i AI Agent Chat — pozostaje wyłączona.

## Czym jest Platforma?

*Platforma* to jedno skonfigurowane połączenie z dostawcą. Składa się z trzech części:

1. **Provider** — firma, której AI chcesz używać (OpenAI, Anthropic, Gemini, Ollama, Groq itp.).
2. **API key** — sekret, który autoryzuje UnoPim do wywoływania API tego dostawcy.
3. **Włączone modele** — które z modeli dostawcy powinny być dostępne wewnątrz UnoPim.

Możesz zarejestrować **dowolną liczbę platform**. Powszechna konfiguracja to jeden premium dostawca treści (np. OpenAI `gpt-4o`) i tańszy lub szybszy do tłumaczenia (np. Gemini `gemini-1.5-flash`). Strona Platforms trzyma je obok siebie; strona **Settings** decyduje, która platforma obsługuje którą możliwość.

## Co robi ta strona?

- Listuje każdą zarejestrowaną platformę wraz z jej statusem i modelami.
- Pozwala **dodawać**, **edytować**, **włączać/wyłączać**, **usuwać** i **ustawiać domyślną** platformę.
- Szyfruje każdy klucz API przy zapisie — klucze nigdy nie są przechowywane w postaci jawnej i są maskowane w UI.

<ImagePopup src="/assets/2.0/images/magic-ai/ai-platforms.png" alt="Platformy AI" />

## Datagrid platform

| Kolumna | Opis |
|--------|-------------|
| **Label** | Nazwa przypisana do konfiguracji platformy. |
| **Provider** | Dostawca AI (OpenAI, Anthropic, Gemini, Ollama, Groq itp.). |
| **Models** | Modele włączone dla tej platformy. |
| **Default** | Czy ta platforma jest domyślna (Tak/Nie). |
| **Status** | Włączone lub Wyłączone. |
| **Created At** | Data dodania platformy. |
| **Actions** | Gwiazdka (ustaw jako domyślną), Edit (ikona ołówka), Delete (ikona kosza). |

## Dodawanie platformy

Kliknij przycisk **Add Platform** w prawym górnym rogu. Otwiera się modal z następującymi polami:

1. **Provider** — Wybierz z listy rozwijanej (OpenAI, Anthropic, Gemini, Ollama, Groq itp.).
2. **Label** — Opisowa nazwa taka jak *"OpenAI Production"* lub *"Gemini Translation"*. To jest to, co zobaczysz na listach rozwijanych Settings.
3. **API Key** — Wklej klucz z konta dostawcy. Jest szyfrowany przed trafieniem do bazy danych.
4. **Models** — Multi-select modeli, które chcesz udostępnić. Tylko modele zaznaczone tutaj pojawiają się w listach rozwijanych Text / Image / Translation / Agentic PIM na stronie Settings.
5. **Status** — Przełącznik włączający lub wyłączający platformę.

<ImagePopup src="/assets/2.0/images/magic-ai/add-platform.png" alt="Dodaj platformę" />

::: tip
Dane uwierzytelniające API są przechowywane z szyfrowanym przechowywaniem dla bezpieczeństwa. Twoje klucze API nigdy nie są przechowywane w postaci jawnej.
:::

## Akcje platformy

- **Ikona gwiazdki** — Ustawia platformę jako **domyślną**. Wszędzie tam, gdzie strona Settings pokazuje *"Use Default Platform"*, rozwiązuje się to do platformy oznaczonej gwiazdką. Tylko jedna może być domyślna jednocześnie.
- **Ikona ołówka** — Otwiera modal edycji, dzięki czemu możesz zaktualizować etykietę, rotować klucz API, dostosować listę modeli lub przełączyć status.
- **Ikona kosza** — Usuwa konfigurację platformy. Każda funkcja, która nadal wskazuje na tę platformę w Settings, wraca do domyślnej. Nieodwracalne.

## Jak wybór platformy przepływa do funkcji

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

## Minimalna konfiguracja

Aby uruchomić jakąkolwiek funkcję Magic AI:

1. Zarejestruj co najmniej **jedną** Platformę.
2. Upewnij się, że ma co najmniej **jeden** włączony Model.
3. Ustaw jej status na **Enabled**.
4. **Oznacz gwiazdką** jedną Platformę jako domyślną.

Gdy to zrobione, przejdź do **Magic AI → Settings**, aby skierować każdą możliwość (Text / Image / Translation / Agentic PIM) do Platformy i Modelu według własnego wyboru.
