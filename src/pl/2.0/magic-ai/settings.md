# Magic AI — Ustawienia

> **Pasek boczny:** Magic AI → **Ustawienia**
> **URL:** `/admin/configuration/general/magic_ai`

Strona **Ustawienia** to miejsce, w którym kierujesz każdą możliwość AI w UnoPim do konkretnej **platformy** i **modelu**. To także miejsce kontrolek **Agentic PIM** — budżetu tokenów, trybu zatwierdzania, przełącznika auto-wzbogacania i Catalog Quality Monitor.

## Co robi ta strona?

Zawiera cztery niezależne sekcje, jedna per możliwość:

1. **Agentic PIM** — konfiguruje AI Agent Chat (Open Agenting PIM) i jego kontrole bezpieczeństwa.
2. **Text Generation** — napędza ikony różdżki na polach tekstowych produktu/kategorii.
3. **Image Generation** — napędza ikony różdżki na atrybutach obrazu i galerii.
4. **Translation** — konfiguruje automatyczne tłumaczenie przy zapisie produktu plus polecenie masowego tłumaczenia.

Ponieważ każda sekcja ma własną listę rozwijaną platformy i modelu, możesz używać **różnych dostawców dla różnych możliwości** — na przykład OpenAI do generowania treści i Gemini do tłumaczenia.

<ImagePopup src="/assets/2.0/images/magic-ai/magic-ai-settings.png" alt="Magic AI Settings" />

## 1. Agentic PIM

Kontroluje konwersacyjnego AI Agent i workflow w tle, które napędza (auto-wzbogacanie przy tworzeniu produktu, Catalog Quality Monitor, kolejka zatwierdzeń).

| Pole | Co robi |
|-------|---|
| **Enable AI Agent Chat** | Główny przełącznik dla przycisku "Open Agenting PIM". Gdy wyłączony, przycisk czatu jest ukryty i nikt nie może rozmawiać z agentem. |
| **Max Agent Steps Per Turn** | Ile wywołań narzędzi agent może powiązać w łańcuch dla jednej wiadomości użytkownika. Lista rozwijana oferuje etykietowane presety zamiast surowych liczb — np. **`3 (Fast)`** dla zwięzłych, tanich odpowiedzi i wyższe presety dla większej autonomii. Wyższe = większa autonomia na turę; niższe = ściślejsza kontrola i tańsze tokeny. |
| **Daily Token Budget** | Globalny dzienny limit wydatków AI Agent na tokeny (np. `500000`). Po osiągnięciu limitu agent odpowiada powiadomieniem o wyczerpaniu budżetu do północy. |
| **Auto-Enrichment on Product Create** | Gdy włączone, każdy nowy produkt jest kolejkowany do wzbogacania AI — brakujące opisy, pola SEO itp. są wypełniane automatycznie. |
| **Catalog Quality Monitor** | Uruchamia zaplanowany skan AI, który raportuje brakujące, ubogie lub niespójne dane katalogowe. |
| **Confidence Threshold** | Minimalna pewność (domyślnie 0.7 — "Balanced") wymagana przed zastosowaniem zaproponowanej zmiany. Poniżej progu zmiana jest zatrzymywana do przeglądu. |
| **Change Approval Mode** | Jak zaproponowane przez AI zmiany lądują: *Auto-apply*, *Confirm & apply* (domyślny) lub *Manual review* (wszystko trafia do Approval Queue). |

::: tip
Zacznij od **Manual review**, gdy uczysz się, jak agent zachowuje się na Twoim katalogu. Przenieś zaufane workflow do Auto-apply, gdy dashboard analytics pokaże spójne, wysokopewne wyjście.
:::

## 2. Text Generation

Kontroluje ikony różdżki obok pól tekstowych produktu i kategorii (Name, Short Description, Description, Meta Title, Meta Description, URL Key itp.).

| Pole | Co robi |
|-------|---|
| **Enabled** | Przełącz generowanie tekstu włączone lub wyłączone w całym panelu administracyjnym. |
| **Default Platform** | Która platforma obsługuje żądania tekstowe. Wybierz **`-- Use Default Platform --`**, aby podążać za domyślną oznaczoną gwiazdką, lub nadpisz konkretną platformą. Platformy oznaczone `*` w liście rozwijanej są obecną domyślną. |
| **Default Model** | Model używany do tekstu, pobrany z modeli włączonych na wybranej platformie. |

## 3. Image Generation

Kontroluje ikony różdżki na atrybutach Image i Gallery. Tylko platformy, których dostawca obsługuje generowanie obrazów (OpenAI / DALL-E, Gemini, xAI), pojawiają się tutaj.

| Pole | Co robi |
|-------|---|
| **Enabled** | Przełącz generowanie obrazów włączone lub wyłączone. |
| **Default Platform** | Platforma obsługująca obrazy. Wybierz **`-- Use Default Platform --`**, aby podążać za domyślną oznaczoną gwiazdką; `*` w liście rozwijanej oznacza obecną domyślną. |
| **Default Model** | Konkretny model obrazu (np. `dall-e-3`). |

## 4. Translation

Kontroluje automatyczne tłumaczenie przy zapisie produktu i polecenie masowego tłumaczenia oparte na AI. Ponieważ tłumaczenie jest zazwyczaj wysokowolumenowe, możesz przypisać mu inną (często tańszą/szybszą) platformę.

| Pole | Co robi |
|-------|---|
| **Enabled** | Włącz lub wyłącz tłumaczenie oparte na AI. |
| **Default Platform** | Platforma używana do żądań tłumaczenia. Wybierz **`-- Use Default Platform --`**, aby podążać za domyślną oznaczoną gwiazdką; `*` w liście rozwijanej oznacza obecną domyślną. |
| **Translation Model** | Konkretny model używany do tłumaczenia — niezależny od modelu generowania tekstu. |
| **Replace Existing Value** | Włączone: ponowne tłumaczenie nadpisuje istniejące wartości lokalne. Wyłączone: tylko puste pola lokalne są wypełniane, zachowując ręczne tłumaczenia. |
| **Source Channel** | Kanał, którego wartości służą jako źródło prawdy. |
| **Target Channel** | Kanał, który otrzymuje przetłumaczone wartości. |
| **Source Locale** | Lokalizacja, z której tłumaczyć (np. `en_US`). |
| **Target Locales** | Multi-select — każda lokalizacja do automatycznego wypełnienia. |

::: tip
Możesz przypisać innego (potencjalnie tańszego lub szybszego) dostawcę AI specjalnie do tłumaczeń, zachowując premium dostawcę do generowania treści.
:::

Kliknij **Save Configuration** na dole strony, aby zastosować wszystkie zmiany. Ustawienia obowiązują natychmiast — bez konieczności restartu.

## Skąd pochodzą wartości

Listy rozwijane platformy / modelu na tej stronie są wypełniane całkowicie ze strony **[Platforms](./platforms.md)**. Jeśli platforma nie jest na liście, albo (a) jest wyłączona, (b) jej dostawca nie obsługuje tej możliwości (np. Ollama nie pojawia się w Image Generation), lub (c) jeszcze jej nie zarejestrowałeś.

Podobnie listy rozwijane Source / Target Channel i Locale sekcji **Translation** są wypełniane z Twojej konfiguracji kanałów i lokalizacji (zobacz **Ustawienia → Kanały** i **Ustawienia → Lokalizacje**).
