# Konfiguracja Magic AI

**Magic AI** to wbudowana warstwa UnoPim do generowania, wzbogacania i tłumaczenia treści produktów i kategorii za pomocą dużych modeli językowych (LLM). Zanim będziesz mógł korzystać z jakiejkolwiek funkcji AI — ikon różdżki Magic AI na polach produktu, AI Agent Chat, automatycznego tłumaczenia lub auto-wzbogacania — musisz najpierw skonfigurować Magic AI z paska bocznego administratora.

<ImagePopup src="/assets/2.0/images/configuration/AiConfiguration.png" alt="Przegląd konfiguracji Magic AI" />

## Co robi Magic AI?

Magic AI łączy Twoją instancję UnoPim z jednym lub więcej zewnętrznymi dostawcami AI (OpenAI, Anthropic, Gemini, Ollama, Groq itp.) i udostępnia tę moc wewnątrz PIM na cztery sposoby:

| Możliwość | Gdzie pojawia się w UI | Co robi |
|---|---|---|
| **Generowanie tekstu** | Ikona różdżki obok pól tekstowych produktu/kategorii | Pisze nazwy, opisy, pola SEO meta, treści kategorii |
| **Generowanie obrazów** | Ikona różdżki obok atrybutów obrazu/galerii | Tworzy obrazy produktów z opisu tekstowego |
| **Tłumaczenie** | Automatyczne przy zapisie produktu plus polecenie masowe | Tłumaczy wartości specyficzne dla lokalizacji we wszystkich skonfigurowanych lokalizacjach |
| **Agentic PIM (AI Agent Chat)** | Przycisk "Open Agenting PIM" w prawym dolnym rogu | Konwersacyjny asystent, który wywołuje ponad 30 narzędzi PIM w Twoim imieniu |

Wszystkie cztery dzielą te same połączenia dostawców, bibliotekę promptów i osobowość systemu — więc gdy zmienisz ustawienia Magic AI, każda funkcja AI w UnoPim podchwyci zmianę.

## Jak działa Magic AI?

Pipeline jest taki sam dla każdej funkcji AI:

1. **Wyzwalasz żądanie** — klikasz ikonę różdżki, zapisujesz produkt z włączonym auto-tłumaczeniem lub wysyłasz wiadomość czatu do AI Agent.
2. **UnoPim składa wejście** — łączy:
   - Dane docelowej encji (np. nazwa produktu, atrybuty, kategoria)
   - Pasujący **Prompt** z Magic AI → Prompts (z rozszerzonymi placeholderami `@attribute`)
   - Aktywną osobowość **System Prompt** (ton, temperatura, maksymalne tokeny)
3. **UnoPim przekazuje żądanie** przez zunifikowany **LaravelAiAdapter** do platformy/modelu wybranego w Magic AI → Settings.
4. **Dostawca odpowiada** wygenerowanym tekstem, obrazem lub tłumaczeniem.
5. **UnoPim stosuje wynik** — albo bezpośrednio do pola, do bazy danych (po opcjonalnym zatwierdzeniu) lub strumieniuje z powrotem do czatu.

Wszystko między krokiem 2 a krokiem 5 jest konfigurowane z czterech podstron opisanych poniżej: **Platforms**, **Settings**, **Prompts** i **System Prompts**.

::: tip
Klucze API nigdy nie pojawiają się w postaci jawnej. Wszystkie dane uwierzytelniające dostawców są przechowywane w bazie danych z **szyfrowanym przechowywaniem danych uwierzytelniających**, a klucz jest maskowany w UI po zapisaniu.
:::

## Menu Magic AI

Rozwiń **Magic AI** w pasku bocznym administratora, a zobaczysz cztery podelementy menu. Każdy z nich obejmuje określoną część konfiguracji AI — razem dają pełną kontrolę nad *tym, który dostawca działa, których modeli używa, którymi instrukcjami się kieruje i z jaką osobowością mówi*.

| Element menu | URL | Co konfigurujesz tutaj | Kiedy odwiedzać |
|---|---|---|---|
| **Platforms** | `/admin/magic-ai/platforms` | Połączenia z dostawcami — dodaj konto OpenAI / Anthropic / Gemini / Ollama / Groq, wklej jego klucz API i wybierz, które z jego modeli włączyć. | Pierwsza konfiguracja, rotowanie kluczy API, dodawanie nowego dostawcy, włączanie nowych modeli. |
| **Settings** | `/admin/configuration/general/magic_ai` | Routing per-capability — wybierz, która platforma + model obsługuje Text Generation, Image Generation, Translation i Agentic PIM. Także miejsce dla dziennego budżetu tokenów, trybu zatwierdzania i przełączników auto-wzbogacania. | Za każdym razem, gdy chcesz zmienić dostawcę funkcji, dostroić limity bezpieczeństwa lub włączyć/wyłączyć funkcje. |
| **Prompts** | `/admin/magic-ai/prompts` | Szablony promptów — tekst instrukcji, który Magic AI wysyła z każdym żądaniem, używając placeholderów `@attribute_code`, które są zastępowane rzeczywistymi wartościami encji. | Dostosowywanie wyjścia AI do głosu marki, dodawanie promptów dla nowych atrybutów lub kategorii, modyfikowanie domyślnych promptów. |
| **System Prompts** | `/admin/magic-ai/system-prompts` | Globalna osobowość AI — ton, temperatura, maksymalne tokeny. Tylko jedna jest aktywna jednocześnie, więc cały katalog zachowuje spójny głos. | Zmiana ogólnego tonu (formalny vs. swobodny, zwięzły vs. opisowy), dostrajanie kreatywności, ograniczenie długości odpowiedzi. |

### Jak cztery elementy menu są ze sobą połączone

```
        ┌────────────────────────┐
        │   1. Platforms         │   ← add providers + models
        │   Provider + API key   │
        │   + enabled models     │
        └────────┬───────────────┘
                 │ feeds the dropdowns in
                 ▼
        ┌────────────────────────┐
        │   2. Settings          │   ← route each capability to a platform+model
        │   Text / Image /       │
        │   Translation /        │
        │   Agentic PIM          │
        └───┬──────┬──────┬──────┘
            │      │      │
            │      │      └── uses ──► 4. System Prompts  (global personality)
            │      │                    — one active at a time
            │      │
            │      └── uses ──► 3. Prompts  (per-entity, per-purpose templates)
            │                    — `@placeholders` filled from entity data
            │
            └── keeps everything within ACL, budget, and approval-mode limits
```

**Czytaj od góry do dołu, konfigurujesz raz, używasz wszędzie.** Kliknięcie różdżki na opisie produktu, auto-tłumaczone pole lub wiadomość czatu do AI Agent — wszystkie podążają tą samą ścieżką przez te cztery elementy menu.

### Minimalna kolejność konfiguracji

Jeśli konfigurujesz Magic AI po raz pierwszy, odwiedź elementy menu w tej kolejności:

1. **Platforms** — dodaj co najmniej jednego dostawcę, wklej klucz API, włącz modele, których planujesz używać, i **oznacz jeden gwiazdką jako domyślny**.
2. **Settings** — włącz potrzebne możliwości (Text / Image / Translation / Agentic PIM) i wybierz platformę + model dla każdej. Ustaw Daily Token Budget i Change Approval Mode przy okazji.
3. **Prompts** — przejrzyj dostarczone prompty; dostosuj lub dodaj własne, aby AI pisało w głosie, którego oczekuje Twój katalog.
4. **System Prompts** — potwierdź, że aktywna osobowość pasuje do tonu, którego chcesz w całym katalogu. W razie potrzeby włącz inną.

Po zapisaniu tych czterech stron każda funkcja Magic AI w panelu administracyjnym — ikony różdżki, automatyczne tłumaczenie, auto-wzbogacanie i AI Agent Chat — jest gotowa do użycia.

## Platforms

Przejdź do **Magic AI → Platforms**, aby zarządzać połączeniami z dostawcami AI, których używa każda funkcja Magic AI.

<ImagePopup src="/assets/2.0/images/magic-ai/ai-platforms.png" alt="Platformy AI" />

### Czym jest "Platforma"

*Platforma* to jedno skonfigurowane połączenie z dostawcą: dostawca (OpenAI, Anthropic, Gemini, Ollama, Groq, …), klucz API oraz lista modeli, które włączyłeś od tego dostawcy. Możesz skonfigurować dowolną liczbę platform — na przykład jedną platformę OpenAI do pisania, jedną platformę Gemini do tłumaczenia i jedną platformę Ollama do obciążeń on-prem — a UnoPim skieruje każdą funkcję AI do platformy, którą przypisałeś.

### Datagrid platform

| Kolumna | Opis |
|--------|-------------|
| **Label** | Nazwa przypisana konfiguracji platformy |
| **Provider** | Dostawca AI (OpenAI, Anthropic, Gemini, Ollama, Groq itp.) |
| **Models** | Modele włączone dla tej platformy |
| **Default** | Czy ta platforma jest domyślna (Tak/Nie) |
| **Status** | Włączone lub Wyłączone |
| **Created At** | Data dodania platformy |
| **Actions** | Gwiazdka (ustaw jako domyślną), Edit (ikona ołówka), Delete (ikona kosza) |

### Dodawanie platformy

Kliknij **Add Platform** w prawym górnym rogu. Otwiera się dwuetapowy modal zatytułowany **"Add AI Platform"**.

**Krok 1 — wybierz dostawcę.**

Pierwszy ekran modalu ma tylko jedno pole:

- **Provider *** — lista rozwijana zawierająca każdego obsługiwanego dostawcę (OpenAI, Anthropic, Gemini, Ollama, Groq itp.).

Wybierz dostawcę i kliknij **Save**. Modal rozszerza się, aby pokazać resztę pól.

<ImagePopup src="/assets/2.0/images/magic-ai/add-platform.png" alt="Dodaj platformę AI — Krok 1" />

**Krok 2 — wypełnij szczegóły specyficzne dla dostawcy.**

- **Label** — Wprowadź opisową nazwę dla tej konfiguracji platformy (np. *"OpenAI Production"*, *"Gemini Translation"*). Ta nazwa pojawia się na listach rozwijanych w Magic AI → Settings.
- **API Key** — Wklej klucz API z konta dostawcy. Jest szyfrowany przy zapisie i maskowany w UI później.
- **Models** — Multiselect listujący modele dostępne od wybranego dostawcy. Tylko modele zaznaczone tutaj pojawiają się na listach rozwijanych Settings.
- **Status** — Przełącznik do włączania lub wyłączania platformy.

Kliknij **Save**, aby zakończyć. Platforma pojawia się w datagrid.

::: tip
Dane uwierzytelniające API są przechowywane z szyfrowanym przechowywaniem dla bezpieczeństwa. Twoje klucze API nigdy nie są przechowywane w postaci jawnej.
:::

### Akcje platformy

- **Ikona gwiazdki** — Ustawia platformę jako **domyślną**. Domyślna to ta, której system używa, gdy funkcja jest ustawiona na *"Use Default Platform"*. Tylko jedna platforma może być domyślna jednocześnie.
- **Ikona ołówka** — Otwiera modal edycji, aby zaktualizować etykietę, klucz API, modele lub status platformy.
- **Ikona kosza** — Usuwa konfigurację platformy. Tej akcji nie można cofnąć.

### Jak wybór platformy przepływa do funkcji

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

## Settings

Przejdź do **Magic AI → Settings** w pasku bocznym. Otwiera to stronę konfiguracji pod `/admin/configuration/general/magic_ai` z czterema sekcjami — jedna per możliwość. Dla każdej możliwości wybierasz **którą platformę** i **który model** powinien ją obsługiwać. Używanie różnych platform dla różnych możliwości pozwala niezależnie optymalizować koszty, szybkość i jakość.

<ImagePopup src="/assets/2.0/images/magic-ai/magic-ai-settings.png" alt="Magic AI Settings" />

### 1. Agentic PIM

Ta sekcja kontroluje **AI Agent Chat** (konwersacyjnego asystenta) oraz autonomiczne workflow, które napędza: auto-wzbogacanie przy tworzeniu produktu, monitorowanie jakości katalogu oraz kolejkę zatwierdzeń, która stoi przed zmianami proponowanymi przez AI.

| Pole | Co robi |
|-------|---|
| **Enable AI Agent Chat** | Główny przełącznik dla przycisku czatu "Open Agenting PIM". Gdy wyłączony, pływający przycisk jest ukryty i nikt nie może rozmawiać z agentem. |
| **Max Agent Steps Per Turn** | Ile wywołań narzędzi agent może połączyć w łańcuch dla jednej wiadomości użytkownika (domyślnie: 5). Wyższe = większa autonomia na turę; niższe = ściślejsza kontrola i tańsze tokeny. |
| **Daily Token Budget** | Twardy dzienny limit tokenów wydawanych przez agenta (np. 500 000). Po osiągnięciu limitu agent odpowiada powiadomieniem o wyczerpaniu budżetu do następnego dnia. |
| **Auto-Enrichment on Product Create** | Gdy włączone, każdy nowo utworzony produkt jest kolejkowany do wzbogacania AI — brakujące opisy, pola SEO itp. są wypełniane automatycznie. |
| **Catalog Quality Monitor** | Uruchamia zaplanowany skan AI, który raportuje brakujące, ubogie lub niespójne dane w całym katalogu. |
| **Confidence Threshold** | Minimalny wynik pewności (domyślnie: 0.7 — "Balanced"), jaki AI musi osiągnąć, zanim zaproponowana zmiana zostanie zastosowana. Poniżej progu zmiany są zatrzymywane do przeglądu. |
| **Change Approval Mode** | Jak zaproponowane przez AI zmiany trafiają do Twoich danych: *Auto-apply*, *Confirm & apply* (domyślny — AI proponuje wartości, pyta Cię, a następnie wykonuje) lub *Manual review* (wszystko trafia do Approval Queue). |

### 2. Text Generation

Ta sekcja kontroluje ikony różdżki obok pól tekstowych (nazwa produktu, opisy, pola SEO meta, treść kategorii). Gdy użytkownik klika ikonę różdżki, UnoPim wysyła prompt pola do platformy i modelu skonfigurowanego tutaj.

| Pole | Co robi |
|-------|---|
| **Enabled** | Przełącznik włączający lub wyłączający generowanie tekstu w całym panelu administracyjnym. |
| **Default Platform** | Wybierz, która platforma obsługuje żądania tekstowe. Wybierz *"Use Default Platform"*, aby podążać za platformą oznaczoną gwiazdką, lub nadpisz konkretną. |
| **Default Model** | Model używany do generowania tekstu, pobrany z modeli włączonych na wybranej platformie. |

### 3. Image Generation

Ta sekcja kontroluje ikony różdżki na atrybutach Image i Gallery. Wymienione są tylko platformy, których dostawca obsługuje generowanie obrazów (OpenAI / DALL-E, Gemini, xAI).

| Pole | Co robi |
|-------|---|
| **Enabled** | Przełącznik włączający lub wyłączający generowanie obrazów. |
| **Default Platform** | Platforma obsługująca obrazy do użycia. |
| **Default Model** | Konkretny model obrazu (np. `dall-e-3`). |

### 4. Translation

Tłumaczenie może działać automatycznie przy zapisie produktu, a także może być wyzwolone masowo przez polecenie tłumaczenia. Ponieważ tłumaczenie jest zazwyczaj wysokowolumenowe, Magic AI pozwala przypisać **inną platformę** — zazwyczaj tańszą lub szybszą — wyłącznie do tego zadania.

| Pole | Co robi |
|-------|---|
| **Enabled** | Przełącznik włączający lub wyłączający tłumaczenie oparte na AI. |
| **Default Platform** | Platforma używana do żądań tłumaczenia. |
| **Translation Model** | Konkretny model używany do tłumaczenia — niezależny od modelu generowania tekstu. |
| **Replace Existing Value** | Włączone: ponowne tłumaczenie nadpisuje istniejące wartości lokalne. Wyłączone: tylko puste pola lokalne są wypełniane, zachowując ręczne tłumaczenia. |
| **Source Channel** | Kanał, którego wartości służą jako źródło prawdy. |
| **Target Channel** | Kanał, który otrzymuje przetłumaczone wartości. |
| **Source Locale** | Lokalizacja, z której tłumaczyć (np. `en_US`). |
| **Target Locales** | Multi-select; wybierz każdą lokalizację, którą chcesz automatycznie wypełnić. |

::: tip
Możesz przypisać innego (potencjalnie tańszego lub szybszego) dostawcę AI specjalnie dla tłumaczeń, zachowując premium dostawcę do generowania treści.
:::

Kliknij **Save Configuration** na dole strony, aby zastosować wszystkie zmiany. Ustawienia obowiązują natychmiast — bez konieczności restartu.

## Prompts

Przejdź do **Magic AI → Prompts**, aby zarządzać **szablonami promptów**, które mówią AI, co produkować. Prompt to instrukcja wysyłana z każdym żądaniem generowania; to miejsce, w którym wprowadzasz głos marki, wymaganą strukturę lub reguły specyficzne dla katalogu.

<ImagePopup src="/assets/2.0/images/magic-ai/prompts.png" alt="Prompty" />

### Jak działają prompty

Każdy prompt jest powiązany z **Entity Type** (produkt lub kategoria) i **Purpose** (Text Generation lub Image Generation). W czasie generowania UnoPim:

1. Wybiera prompt, który pasuje do encji i celu.
2. Zastępuje każdy placeholder `@attribute_code` rzeczywistą wartością z encji.
3. Dodaje aktywną osobowość System Prompt na wierzch.
4. Wysyła połączone instrukcje do platformy/modelu skonfigurowanego dla tej możliwości.

Tak więc prompt `Write a product description for @name in the @color variant` staje się w czasie generowania czymś w stylu `Write a product description for Air Max 90 in the Blue variant`.

### Datagrid promptów

| Kolumna | Opis |
|--------|-------------|
| **Title** | Nazwa promptu |
| **Prompt** | Tekst promptu z placeholderami |
| **Entity Type** | Encja, do której odnosi się prompt (produkt lub kategoria) |
| **Purpose** | Czy prompt jest dla Text Generation czy Image Generation |
| **Created At** | Data utworzenia promptu |
| **Updated At** | Data ostatniej modyfikacji promptu |
| **Actions** | Edit (ikona ołówka), Delete (ikona kosza) |

### Tworzenie promptu

Kliknij przycisk **Create Prompt**, aby dodać nowy prompt. Wypełnij:

- **Title** — jak pojawia się na liście.
- **Prompt** — tekst instrukcji. Użyj placeholderów `@attribute_code` dla każdej wartości, którą chcesz wypełnić z encji.
- **Entity Type** — produkt lub kategoria.
- **Purpose** — Text Generation lub Image Generation.

### Dostarczone prompty

UnoPim jest dostarczany z **18 predefiniowanymi promptami**. Większość celuje w generowanie obrazów (style fotografii produktowej), a kilka w generowanie tekstu. Wszystkie celują w `product` jako Entity Type. Przykłady, które zobaczysz na liście:

| Tytuł | Cel |
|---|---|
| Packaging Mockup | Image Generation |
| Hero Banner Image | Image Generation |
| Multi-Angle Product | Image Generation |
| Flat Lay Composition | Image Generation |
| Product with Size Reference | Image Generation |
| Close-Up Detail Shot | Image Generation |
| Lifestyle Product Image | Image Generation |
| White Background Product Shot | Image Generation |
| Product Elevator Pitch | Text Generation |
| Product Brief | Text Generation |

Otwórz **Magic AI → Prompts**, aby zobaczyć pełną listę, edytować dowolny preset lub utworzyć nowe.

::: tip
Używaj kodów atrybutów jako placeholderów (z prefiksem `@`) w swoich promptach. AI zastąpi je rzeczywistymi wartościami z przetwarzanego produktu lub kategorii.
:::

## Prompty systemowe

Przejdź do **Magic AI → Prompty systemowe**, aby skonfigurować **osobowość** AI — ton, styl i parametry generowania, które znajdują się pod każdym promptem.

<ImagePopup src="/assets/2.0/images/magic-ai/system-prompts.png" alt="Prompty systemowe" />

### Jak System Prompt różni się od Prompt

- **Prompt** mówi, *co* napisać dla konkretnego pola ("write a product description …").
- **System Prompt** mówi, *jak* pisać — głos, ton, kreatywność, długość. Jest stosowany przed każdym promptem, globalnie.

Tylko **jeden System Prompt jest aktywny w danym momencie**. Włączenie nowego automatycznie wyłącza poprzedni, więc cały katalog zachowuje spójny głos.

### Datagrid Promptów systemowych

| Kolumna | Opis |
|--------|-------------|
| **Title** | Nazwa system promptu |
| **Tone** | Ton konwersacyjny (np. Confident, Vivid, Brief) |
| **Max Tokens** | Maksymalna liczba tokenów dla odpowiedzi AI |
| **Temperature** | Poziom kreatywności (niższy = bardziej skoncentrowany, wyższy = bardziej kreatywny) |
| **Status** | Włączone lub Wyłączone |
| **Created At** | Data utworzenia system promptu |
| **Updated At** | Data ostatniej modyfikacji system promptu |
| **Actions** | Edit (ikona ołówka), Delete (ikona kosza) |

### Predefiniowane Prompty systemowe

UnoPim jest dostarczany z 10 predefiniowanymi Promptami systemowymi. Wszystkie są dostarczane z **Max Tokens = 1024**; tylko Temperature się różni. Tylko jeden System Prompt może być włączony jednocześnie.

| Tytuł | Ton | Temperature | Uwagi |
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
| Friendly Assistant | Friendly, helpful, casual | 0.7 | Włączony domyślnie |

### Tworzenie System Prompt

Kliknij przycisk **Create System Prompt**, aby zdefiniować nową osobowość AI. Skonfiguruj:

- **Title** — pokazuje się w datagrid.
- **Tone description** — opis głosu w prostym języku (model to czyta).
- **Max Tokens** — ogranicza długość odpowiedzi. Niższe wartości = krótsze wyjście i niższy koszt.
- **Temperature** — 0.0–1.0. Niskie wartości utrzymują odpowiedzi zwięzłe i powtarzalne; wysokie wartości dodają różnorodność i polot.
- **Status** — włączenie tej wyłącza aktualnie aktywny prompt.

::: tip
Tylko jeden system prompt może być aktywny jednocześnie. Włączenie nowego system promptu automatycznie wyłącza poprzednio aktywny. Wybierz system prompt, który pasuje do tonu, który chcesz w całej treści generowanej przez AI.
:::

## Checklist konfiguracji

Zanim zaczniesz używać funkcji Magic AI, upewnij się, że zrobiłeś wszystkie cztery z tych:

1. **Magic AI → Platforms** — Dodaj co najmniej jedną platformę, wklej klucz API, włącz pożądane modele i **oznacz jedną gwiazdką jako domyślną**.
2. **Magic AI → Settings** — Włącz potrzebne możliwości (Text / Image / Translation / Agentic PIM) i wybierz platformę + model dla każdej.
3. **Magic AI → Prompts** — Przejrzyj dostarczone prompty lub utwórz własne, aby pasowały do głosu marki.
4. **Magic AI → System Prompts** — Potwierdź, że aktywna osobowość pasuje do tonu, który chcesz w katalogu.

Po skonfigurowaniu tych czterech stron każda funkcja Magic AI — ikony różdżki, AI Agent Chat, automatyczne tłumaczenie i auto-wzbogacanie — będzie działać bez dalszej konfiguracji.
