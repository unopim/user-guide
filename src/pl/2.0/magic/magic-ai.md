# Magic AI

**Magic AI** to warstwa treści AI UnoPim. Generuje treści produktów i kategorii (tekst + obrazy), tłumaczy wartości między lokalizacjami i napędza asystenta Agentic PIM — wszystko przy użyciu dowolnego z ponad 10 obsługiwanych dostawców AI pod spodem.

## Co robi Magic AI?

Po skonfigurowaniu Magic AI (zobacz [Magic AI Configuration](../configuration/magic-ai.md)) pojawia się w panelu administracyjnym w pięciu miejscach:

| Powierzchnia | Co produkuje | Jak to wyzwalasz |
|---|---|---|
| **Ikona różdżki na polach tekstowych** | Nazwy, opisy, pola SEO meta, treść kategorii | Kliknij różdżkę obok obsługiwanego pola |
| **Ikona różdżki na polach obrazu/galerii** | Obrazy produktów wygenerowane z opisu tekstowego | Kliknij różdżkę obok atrybutu obrazu |
| **Auto-tłumaczenie przy zapisie produktu** | Przetłumaczone wartości dla każdej docelowej lokalizacji | Automatyczne, gdy włączone; także przez polecenie masowe |
| **Wyszukiwanie oparte na AI** | Wyniki wyszukiwania semantycznego uszeregowane według znaczenia, nie tylko słów kluczowych | Zwykłe pole wyszukiwania |
| **AI Agent Chat (Agentic PIM)** | Wyniki ponad 30 wywołań narzędzi | Przycisk czatu w prawym dolnym rogu |

Wszystkie pięć dzielą te same połączenia dostawców, tę samą bibliotekę promptów i tę samą osobowość systemu — więc konfigurujesz Magic AI raz, a każda funkcja to podchwytuje.

## Jak działa Magic AI?

Każda akcja Magic AI podąża za tym samym pipeline'em:

1. **Trigger** — kliknij ikonę różdżki, zapisz produkt, uruchom polecenie tłumaczenia lub wyślij wiadomość czatu.
2. **Context assembly** — UnoPim łączy bieżące dane docelowej encji, odpowiedni szablon **Prompt** (z rozszerzonymi placeholderami `@attribute`) i aktywną osobowość **System Prompt**.
3. **Dispatch** — złożone żądanie przechodzi przez zunifikowany `LaravelAiAdapter` do platformy i modelu wybranego dla tej możliwości w **Magic AI → Settings**.
4. **Response** — dostawca zwraca tekst, obraz lub tłumaczenie.
5. **Apply** — wynik jest wstawiany do pola (tekst/obraz), zapisywany do kolumn lokalizacji (tłumaczenie) lub strumieniowany do czatu (agent).

Zunifikowany adapter oznacza, że możesz **zmieniać dostawców bez dotykania workflow** — przełącz domyślną platformę w Magic AI → Settings i każda funkcja używa nowej przy następnym żądaniu.

## Generowanie treści

Dzięki Magic AI możesz bez wysiłku generować angażujące treści **produktów i kategorii** — nazwy, opisy, metadane SEO i więcej.

<ImagePopup src="/assets/2.0/images/magic-ai/content.png" alt="Generowanie treści Magic AI" />

Zamiast pisać każdy opis ręcznie, Magic AI komponuje je dla Ciebie z danych, które produkt już ma (nazwa, kategoria, kluczowe atrybuty), skonfigurowanego szablonu promptu i aktywnej osobowości systemu.

### Obsługiwani dostawcy AI

UnoPim zapewnia natywne wsparcie dla wielu dostawców AI poprzez system **Multi-Platform MagicAI**. Możesz skonfigurować jednego lub więcej dostawców z szyfrowanym przechowywaniem danych uwierzytelniających dla bezpiecznego zarządzania kluczami API.

**A) Dla treści — UnoPim obsługuje tych dostawców AI:**

* **OpenAI** – gpt-4o, gpt-4o-mini, gpt-3.5-turbo, dall-e-2, dall-e-3
* **Anthropic** – rodzina modeli Claude (Opus, Sonnet, Haiku) do generowania tekstu i rozumowania
* **Ollama** – llama2, llama3, mistral, qwen, deepseek-coder, phi, llava
* **Gemini** – gemini-2.5-pro, gemini-2.5-flash, gemini-2.0-flash, gemini-1.5-flash-latest, gemini-1.5-pro
* **Groq (xAI)** – deepseek-r1-distill-llama-70b, llama-3.1-8b-instant, openai/gpt-oss-120b, openai/gpt-oss-20b, groq/compound, qwen/qwen3-32b, moonshotai/kimi-k2-instruct-0905

::: tip
Wszyscy dostawcy są zarządzani przez zunifikowaną implementację **LaravelAiAdapter**. Możesz przełączać dostawców bez zmiany swojego workflow.
:::

## Jak generować treści tekstowe z AI

Wykonaj te kroki, aby wygenerować treści tekstowe dla swoich produktów przy użyciu Magic AI:

1. Przejdź do **Katalog → Products** i kliknij **Edit** na produkcie.
2. Znajdź pole tekstowe obsługujące generowanie AI (Name, Short Description, Description, Meta Title, Meta Description itp.).
3. Kliknij **ikonę Magic AI** (ikona iskierka/różdżka) obok pola.
4. AI generuje treść w oparciu o:
   - Skonfigurowany **Prompt** dla tego typu pola (z **Magic AI → Prompts**).
   - Istniejące dane produktu (nazwa, kategoria, atrybuty) — które są podstawiane tam, gdzie prompt używa placeholderów `@attribute_code`.
   - Aktywną osobowość **System Prompt** (ton, temperatura, maksymalne tokeny).
5. Wygenerowana treść pojawia się w polu.
6. Przejrzyj i edytuj wygenerowaną treść w razie potrzeby.
7. Kliknij **Save Product**, aby zachować zmiany.

Możesz również generować treści dla kategorii, otwierając stronę edycji kategorii i używając ikony różdżki na obsługiwanych polach.

::: tip
Skonfiguruj preferowanego dostawcę AI i model w **Magic AI → Settings → Text Generation** przed użyciem tej funkcji. Wybierz model, który równoważy jakość i koszt dla Twoich potrzeb.
:::

## Jak generować obrazy z AI

Wykonaj te kroki, aby wygenerować obrazy produktów przy użyciu Magic AI:

1. Przejdź do **Katalog → Products** i kliknij **Edit** na produkcie.
2. Znajdź atrybut **Image** lub **Gallery**.
3. Kliknij **ikonę Magic AI** obok pola obrazu.
4. Wprowadź opis obrazu, którego chcesz (lub zaakceptuj domyślny prompt Image z **Magic AI → Prompts**).
5. AI generuje obraz produktu pasujący do opisu.
6. Przejrzyj wygenerowany obraz.
7. Zaakceptuj go, aby dołączyć do produktu.
8. Kliknij **Save Product**.

::: tip
Generowanie obrazów wymaga platformy, której dostawca obsługuje obrazy (OpenAI z DALL-E, Gemini lub xAI). Skonfiguruj to w **Magic AI → Settings → Image Generation**.
:::

## Niestandardowe prompty

Magic AI obsługuje **Custom Prompts** do generowania treści. Prompt to szablon instrukcji, który mówi modelowi, *co* wyprodukować — na przykład `Write a detailed product description for @name highlighting its features, benefits, and @color variant.` Każdy placeholder (`@name`, `@color`, …) jest zastępowany rzeczywistą wartością z encji w czasie generowania.

Możesz tworzyć prompty dla konkretnych przypadków użycia, takich jak:
- "Generate a professional product description for an electronics store"
- "Write SEO-optimized content with keywords for fashion products"
- "Create a brief 50-word summary suitable for mobile displays"

Zarządzaj promptami z **Magic AI → Prompts**. Każdy prompt należy do **typu encji** (produkt / kategoria) i **celu** (tekst / obraz).

<!-- TODO: Add screenshot of custom prompts configuration -->

## Zarządzanie System Prompt

**System Prompts** konfigurują ogólną **osobowość** AI — głos, ton i parametry generowania (temperatura, maksymalne tokeny) — i stosują się do każdej funkcji Magic AI. Tylko **jeden** system prompt jest aktywny w danym momencie, więc cały katalog zachowuje spójny głos.

Zarządzaj nimi z **Magic AI → System Prompts**. Zobacz [sekcję System Prompts w Magic AI Configuration](../configuration/magic-ai.md#system-prompts) dla pełnej listy 10 predefiniowanych osobowości dostarczonych z UnoPim.

<!-- TODO: Add screenshot of system prompt management -->

## Magic Image

Magic AI zawiera funkcję **generowania obrazów** napędzaną przez DALL-E (OpenAI) i innych dostawców obsługujących obrazy. Możesz tworzyć obrazy produktów bezpośrednio z opisu tekstowego:

1. Przejdź do strony edycji produktu.
2. Kliknij ikonę **Magic AI** w pobliżu pola obrazu / galerii.
3. Wprowadź opis obrazu, który chcesz wygenerować.
4. Wybierz model (np. `dall-e-2` lub `dall-e-3`).
5. Kliknij **Generate**.

<!-- TODO: Add screenshot of Magic Image generation -->

## Auto-tłumaczenie

Magic AI zapewnia **automatyczne tłumaczenie** danych produktów. Gdy włączone, zapisanie produktu wyzwala tłumaczenie wszystkich pól specyficznych dla lokalizacji (nazwa, opisy, pola meta, …) na każdą skonfigurowaną docelową lokalizację. Twój katalog pozostaje wielojęzyczny bez ręcznego kopiowania i wklejania.

### UI ustawień tłumaczenia

Sekcja Translation znajduje się na stronie Magic AI Settings w **Magic AI → Settings**. Pola:

| Pole | Co robi |
|---|---|
| **Enabled** | Główny przełącznik dla tłumaczenia opartego na AI. |
| **Default Platform** | Platforma AI używana do tłumaczeń. Możesz wybrać innego dostawcę niż swoja platforma generowania treści — przydatne do optymalizacji kosztów lub szybkości. |
| **Translation Model** | Konkretny model używany do zadań tłumaczenia. Niezależny od modelu generowania tekstu. |
| **Replace Existing Value** | Włączone: nadpisz istniejące wartości lokalne. Wyłączone: wypełnij tylko puste lokalizacje, zachowując ręczne tłumaczenia. |
| **Source Channel** | Kanał, którego wartości są źródłem prawdy tłumaczenia. |
| **Target Channel** | Kanał, który otrzymuje przetłumaczone wartości. |
| **Source Locale** | Lokalizacja, z której tłumaczyć (np. `en_US`). |
| **Target Locales** | Multi-select — każda lokalizacja do automatycznego wypełnienia. |

::: tip
Używaj **Replace Existing Value** ostrożnie. Wyłączone zachowuje wszelkie ręczne tłumaczenia, które już zrobiłeś; włączone regeneruje wszystko od nowa.
:::

### Jak działa auto-tłumaczenie

Gdy auto-tłumaczenie jest włączone i produkt jest tworzony lub aktualizowany:

1. UnoPim odczytuje wartości locale źródłowego dla każdego pola specyficznego dla lokalizacji.
2. Dla każdej docelowej lokalizacji wywołuje platformę/model tłumaczenia z wartością źródłową i językiem docelowym.
3. Zapisuje przetłumaczone wartości do kolumn lokalizacji docelowych, respektując przypisania kanał/locale, dzięki czemu wypełniane są tylko lokalizacje powiązane z docelowym kanałem.

Jeśli **Replace Existing Value** jest wyłączone, krok tłumaczenia pomija pola, które już mają wartość lokalną — zachowując Twoje ręczne edycje.

### Ręczne tłumaczenie przez przełącznik lokalizacji

Możesz również tłumaczyć ręcznie: otwórz produkt, przełącz na docelową lokalizację w **przełączniku lokalizacji** na górze formularza edycji i wpisz tłumaczenia lub wywołaj ikonę różdżki na każdym polu. Atrybuty obsługujące wartości per-locale pokazują plakietkę locale (np. `EN_US`), więc wiesz, którą lokalizację edytujesz.

### Polecenie tłumaczenia oparte na AI

Do masowego tłumaczenia istniejących danych UnoPim v2.0 dostarcza **AI-Powered Translation Command**, które używa Magic AI do wypełniania brakujących kluczy lokalizacji we wszystkich 32 nieangielskich lokalizacjach. Automatycznie przetłumaczyło około **18 000 wcześniej nieprzetłumaczonych kluczy** w 7 paczkach podczas samego wydania v2.0 — to samo polecenie jest dostępne dla Twojego katalogu.

::: tip
Dla obciążeń tłumaczeniowych wysokiego wolumenu przypisz szybszego/tańszego dostawcę do tłumaczenia i zachowaj premium dostawcę do generowania treści. Magic AI pozwala podzielić je per możliwość.
:::

## Wyszukiwanie oparte na AI

UnoPim v2.0 wprowadza **AI-Powered Search**, które używa podobieństwa embeddingu i rankingu semantycznego, aby dostarczyć bardziej inteligentne wyniki. Zamiast dopasowywać słowa kluczowe znak po znaku, rozumie znaczenie stojące za zapytaniem.

Pod maską:
- **Embedding Similarity Service** — konwertuje dane produktów na wektory embeddingu, dzięki czemu zapytania i produkty mogą być porównywane semantycznie.
- **Semantic Ranking Service** — zmienia kolejność wyników w zależności od tego, jak ściśle pasują do intencji zapytania, nie tylko do słów.

<!-- TODO: Add screenshot of AI-powered search results -->

## Auto-wzbogacanie

**Auto-Enrichment** automatycznie wypełnia brakujące informacje o produkcie — opisy, meta tytuły, meta opisy i inne pola tekstowe oznaczone jako niekompletne. Po włączeniu w **Magic AI → Settings → Agentic PIM** Magic AI analizuje każdy produkt i generuje wartości dla pustych pól.

To jest szczególnie przydatne dla:
- Produktów importowanych masowo, którym brakuje opisów.
- Produktów bez metadanych SEO.
- Niekompletnych rekordów oznaczonych przez system kompletności.

<!-- TODO: Add screenshot of auto-enrichment in action -->

Wzbogacone wartości mogą być kierowane przez [Approval Queue](../ai-agent/approval-queue.md), jeśli chcesz je przejrzeć przed wprowadzeniem na żywo.

## AI w czacie Agentic PIM

AI Agent Chat ponownie wykorzystuje możliwości **Generate Content** i **Generate Image** Magic AI jako narzędzia. Możesz prosić o generowanie treści w prostym języku bez opuszczania czatu — a agent używa tych samych platform, promptów i System Prompt, które skonfigurowałeś, więc wyniki pasują do reszty katalogu.

Przykładowe prompty czatu:

- "Generate a product description for SKU SHOE-100"
- "Create an image for product Nike Air Max"

Zobacz stronę [AI Agent Chat](../ai-agent/ai-agent-chat.md) dla pełnej listy narzędzi i wzorców interakcji.

## Magic AI vs. AI Agent — w pigułce

| | Ikony różdżki Magic AI | AI Agent (Agentic PIM) |
|---|---|---|
| **Wyzwalacz** | Kliknij różdżkę obok pola | Przycisk czatu; konwersacyjnie |
| **Zakres** | Jedno pole na jednej encji naraz | Cokolwiek w katalogu |
| **Wyjście** | Tekst / obraz dla pola | Wyniki narzędzi strumieniowane do czatu |
| **Wieloetapowe** | Nie — jedno żądanie, jedna odpowiedź | Tak — może planować i łączyć wywołania narzędzi w łańcuch |
| **Używa platform/promptów/System Prompts?** | Tak | Tak |
| **Ma własną warstwę bezpieczeństwa?** | Podgląd na poziomie pola przed zapisem | Approval Queue, Confidence Threshold, Token Budget, Max Steps |

To dwa interfejsy nad **tym samym jądrem Magic AI** — skonfiguruj Magic AI raz w **Magic AI → Platforms / Settings / Prompts / System Prompts**, a oba zestawy funkcji zaświecą się.
