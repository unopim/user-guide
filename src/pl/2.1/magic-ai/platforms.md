# Magic AI — Platforms

> **Pasek boczny:** Magic AI → **Platforms**
> **URL:** `/admin/magic-ai/platforms`

Strona **Platforms** to miejsce, w którym rejestrujesz dostawców AI, z którymi UnoPim może rozmawiać. Bez co najmniej jednej aktywnej platformy każda inna funkcja Magic AI — ikony różdżki, automatyczne tłumaczenie, auto-wzbogacanie i AI Agent Chat — pozostaje wyłączona.

## Czym jest Platforma?

*Platforma* to jedno skonfigurowane połączenie z dostawcą. Składa się z trzech części:

1. **Provider** — firma, której AI chcesz używać (OpenAI, Anthropic, Gemini, Ollama, Groq, **Custom** itp.).
2. **API key** — sekret, który autoryzuje UnoPim do wywoływania API tego dostawcy.
3. **Włączone modele** — które z modeli dostawcy powinny być dostępne wewnątrz UnoPim.

Możesz zarejestrować **dowolną liczbę platform**. Powszechna konfiguracja to jeden premium dostawca treści (np. OpenAI `gpt-4o`) i tańszy lub szybszy do tłumaczenia (np. Gemini `gemini-1.5-flash`). Strona Platforms trzyma je obok siebie; strona **Settings** decyduje, która platforma obsługuje którą możliwość.

::: tip Custom Provider
Potrzebujesz wywołać usługę zgodną z OpenAI, której nie ma na liście — na przykład samodzielnie hostowaną bramę, korporacyjne proxy lub alternatywnego dostawcę inferencji? Wybierz dostawcę **Custom** i podaj własny **Base URL**. UnoPim skieruje żądania przez ten sam pipeline `LaravelAiAdapter` używany dla wbudowanych dostawców.
:::

## Co robi ta strona?

- Listuje każdą zarejestrowaną platformę wraz z jej statusem i modelami.
- Pozwala **dodawać**, **edytować**, **włączać/wyłączać**, **usuwać** i **ustawiać domyślną** platformę.
- Szyfruje każdy klucz API przy zapisie — klucze nigdy nie są przechowywane w postaci jawnej i są maskowane w UI.

<ImagePopup src="/assets/2.1/images/magic-ai/ai-platforms.png" alt="Platformy AI" />

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

1. **Provider** — Wybierz z listy rozwijanej (OpenAI, Anthropic, Gemini, Ollama, Groq, **Custom** itp.).
2. **Label** — Opisowa nazwa taka jak *"OpenAI Production"* lub *"Gemini Translation"*. To jest to, co zobaczysz na listach rozwijanych Settings.
3. **Base URL** *(tylko dostawca Custom)* — Endpoint zgodny z OpenAI do wywołania (np. `https://gateway.example.com/v1`). Pokazywany tylko gdy **Provider = Custom**.
4. **API Key** — Wklej klucz z konta dostawcy. Jest szyfrowany przed trafieniem do bazy danych.
5. **Models** — Multi-select modeli, które chcesz udostępnić. Tylko modele zaznaczone tutaj pojawiają się w listach rozwijanych Text / Image / Translation / Agentic PIM na stronie Settings.
6. **Status** — Przełącznik włączający lub wyłączający platformę.

<ImagePopup src="/assets/2.1/images/magic-ai/add-platform.png" alt="Dodaj platformę" />

::: tip
Dane uwierzytelniające API są przechowywane z szyfrowanym przechowywaniem dla bezpieczeństwa. Twoje klucze API nigdy nie są przechowywane w postaci jawnej.
:::

### Test Connection

Po zapisaniu użyj akcji **Test Connection** w wierszu platformy, aby zweryfikować dane uwierzytelniające przed poleganiem na niej. Test jest napędzany przez nowy **ModelRecommender**, który:

- Wybiera model obsługujący tekst z włączonej listy (modele tylko-obrazowe są pomijane, aby nie zwracały fałszywego negatywu).
- Wysyła małe żądanie sondujące do dostawcy.
- Raportuje jasny pass/fail. Jeśli się nie powiedzie, [PrismErrorResolver](../ai-agent/index.md) tłumaczy bazowy błąd dostawcy na komunikat przyjazny użytkownikowi (nieprawidłowy klucz, limit szybkości, niedostępny model itp.).

::: tip
Uruchamiaj Test Connection za każdym razem, gdy rotujesz klucz API, zmieniasz Base URL dostawcy Custom lub zaznaczasz nowy model — to najszybszy sposób na potwierdzenie, że platforma jest zdrowa, bez otwierania AI Agent Chat.
:::

## Akcje platformy

- **Ikona gwiazdki** — Ustawia platformę jako **domyślną**. Wszędzie tam, gdzie strona Settings pokazuje *"Use Default Platform"*, rozwiązuje się do platformy oznaczonej gwiazdką. Tylko jedna może być domyślna jednocześnie.
- **Test Connection**  — Waliduje dane uwierzytelniające, Base URL (dla dostawców Custom) i co najmniej jeden użyteczny model tekstowy. Modele tylko-obrazowe są pomijane automatycznie.
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

Każde żądanie — od pojedynczego generowania pola po złożony plan AI Agent — podąża za **Pipeline Agentic PIM**:

<ImagePopup src="/assets/2.1/images/ai-agent/agentic-pim-pipeline.png" alt="Pipeline Agentic PIM — Workflow 5-etapowy" />


## Minimalna konfiguracja

Aby uruchomić jakąkolwiek funkcję Magic AI:

1. Zarejestruj co najmniej **jedną** platformę.
2. Upewnij się, że ma co najmniej **jeden** włączony Model.
3. Ustaw jej status na **Enabled**.
4. **Oznacz gwiazdką** jedną platformę jako domyślną.

Gdy to zrobione, przejdź do **Magic AI → Settings**, aby skierować każdą możliwość (Text / Image / Translation / Agentic PIM) do platformy i modelu według własnego wyboru.
