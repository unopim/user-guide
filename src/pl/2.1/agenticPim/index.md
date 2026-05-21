# Agentic PIM

> **Pasek boczny:** **Agentic PIM**
> **Ustawienia znajdują się w:** Magic AI → Settings → sekcja *Agentic PIM* (`/admin/configuration/general/magic_ai`)

**Agentic PIM** to flagowa funkcja AI UnoPim — parasol obejmujący każdy autonomiczny lub półautonomiczny przepływ AI, który produkt uruchamia w Państwa imieniu. Z jednej karty ustawień w **Magic AI → Settings** kontrolują Państwo:

- Panel **AI Agent Chat** (pływająca ikona gwiazdki w prawym dolnym rogu każdej strony administracyjnej).
- Zadanie w tle **Auto-Enrichment**, które uzupełnia brakujące pola produktów po ich utworzeniu.
- Zaplanowany skan **Catalog Quality Monitor**.
- **Confidence Threshold** oraz **Change Approval Mode**, które decydują, kiedy zmiany zaproponowane przez AI trafiają do Państwa danych lub do Kolejki zatwierdzeń.
- **Daily Token Budget**, który ogranicza łączne wydatki we wszystkich powyższych obszarach.

## Co robi Agentic PIM?

Wyobraź sobie Agentic PIM jako mały zespół pracowników AI obserwujących Państwa katalog:

| Pracownik | Wyzwalacz | Wynik |
|---|---|---|
| **AI Agent Chat** | Wpisujesz instrukcję w panelu czatu. | Wywołuje jedno lub więcej z ponad 30 narzędzi PIM, aby zrealizować Twoje żądanie. |
| **Auto-Enrichment** | Nowy produkt jest tworzony (ręcznie lub przez import). | Uzupełnia brakujące opisy, metadane SEO itp. |
| **Catalog Quality Monitor** | Zaplanowany (w tle). | Przegląda katalog pod kątem ubogich lub niespójnych danych i zgłasza je w sekcji Needs Attention. |
| **Kolejka zatwierdzeń** | Dowolny pracownik AI proponuje zmianę. | Wstrzymuje lub stosuje zmianę w oparciu o tryb zatwierdzania i próg pewności. |

Wszystkie cztery dzielą tę samą platformę, model, prompt, system prompt i budżet tokenów — konfigurowane jednorazowo w **Magic AI → Settings**.

## Jak działa Agentic PIM?
Każda akcja Agentic PIM przebiega według tego samego pięcioetapowego pipeline'u:

<ImagePopup src="/assets/2.1/images/ai-agent/agentic-pim-pipeline.png" alt="Pipeline Agentic PIM — Workflow 5-etapowy" />

Ten pipeline działa na bazie zunifikowanego **LaravelAiAdapter**, więc przełączanie platform lub modeli w ustawieniach Magic AI natychmiast zmienia zachowanie każdego pracownika Agentic PIM.


## Konfiguracja — ustawienia Agentic PIM

Otwórz **Magic AI → Settings** i rozwiń kartę **Agentic PIM**. Pola są następujące:

| Pole | Co robi |
|---|---|
| **Enable AI Agent Chat** | Główny przełącznik dla pływającego panelu czatu. Gdy jest wyłączony, ikona gwiazdki w prawym dolnym rogu jest ukryta i żaden użytkownik nie może rozmawiać z agentem. Auto-Enrichment i Catalog Quality Monitor nadal działają. |
| **Max Agent Steps Per Turn** | Ile wywołań narzędzi agent może połączyć w łańcuch dla jednego wyzwalacza. Predefiniowane wartości w rozwijanej liście zamiast surowych liczb (np. **`3 (Fast)`**). Wyższe = większa autonomia na turę; niższe = ściślejsza kontrola i tańsze tokeny. |
| **Daily Token Budget** | Globalny dzienny limit tokenów wydawanych przez Agentic PIM (np. `500000`). Współdzielony przez czat, wzbogacanie i monitorowanie. Po osiągnięciu limitu każdy pracownik AI wstrzymuje pracę do następnego dnia. |
| **Auto-Enrichment on Product Create** | Po włączeniu każdy nowo utworzony produkt jest kolejkowany do wzbogacania w tle — brakujące opisy, pola SEO itp. są wypełniane automatycznie. |
| **Catalog Quality Monitor** | Uruchamia zaplanowany skan AI, który raportuje ubogie, brakujące lub niespójne dane katalogowe do sekcji **Needs Attention** na Dashboardzie. |
| **Confidence Threshold** | Minimalny wynik pewności (domyślnie **0.7 — Balanced**) wymagany do zastosowania zaproponowanej zmiany bez przeglądu. Poniżej progu zmiana jest zatrzymywana w Kolejce zatwierdzeń niezależnie od trybu zatwierdzania. |
| **Change Approval Mode** | *Auto-apply* / *Confirm & apply* / *Manual review*. Reguluje, jak zaproponowane przez AI zmiany trafiają do Państwa danych. Domyślnie *"Confirm & apply (propose values, ask to confirm, then execute)"*. |

<ImagePopup src="/assets/2.1/images/magic-ai/magic-ai-settings.png" alt="Magic AI Settings — sekcja Agentic PIM" />

## Zalecana sekwencja konfiguracji

Agentic PIM ma wiele pokręteł. Typowe wdrożenie wygląda następująco:

1. **Dzień 0 — ostrożny start.** Włącz tylko AI Agent Chat. Ustaw *Max Agent Steps Per Turn* na najniższy preset, Daily Token Budget na zachowawczą liczbę, a Change Approval Mode na **Manual review**.
2. **Dni 1-3 — obserwuj w Analytics.** Obserwuj zużycie tokenów i to, jakie narzędzia agent faktycznie wywołuje. Przeglądaj każdą zmianę w Kolejce zatwierdzeń.
3. **Dzień 4+ — selektywnie poluzuj kontrolę.** Podnieś budżet tokenów, gdy zrozumiesz wydatki. Przenieś zaufane workflow (np. uzupełnianie meta-opisów w konkretnej rodzinie) do **Confirm & apply** lub **Auto-apply**. Ryzykowne workflow pozostaw w Manual review.
4. **Tydzień 2 — włącz pracowników w tle.** Najpierw włącz **Auto-Enrichment on Product Create** (pojedyncza encja, przewidywalny koszt). Włącz **Catalog Quality Monitor**, gdy będziesz zadowolony z jakości wzbogacania.

## Jak Agentic PIM odnosi się do innych dokumentów

| Jeśli chcesz… | Przeczytaj |
|---|---|
| Poznać szczegółowo UI czatu | **[AI Agent Chat](../ai-agent/ai-agent-chat.md)** |
| Przeglądać, zatwierdzać lub odrzucać zaproponowane zmiany | **[Approval Queue](../ai-agent/approval-queue.md)** |
| Zobaczyć zużycie tokenów, koszty i aktywność | **[Analytics](../ai-agent/analytics.md)** |
| Skonfigurować platformy, prompty, system prompts | **[Magic AI Configuration](../configuration/magic-ai.md)** |
| Dostroić routing per-capability (Text / Image / Translation) | **[Magic AI → Settings](../magic-ai/settings.md)** |

## Kontrole bezpieczeństwa w pigułce

Cztery warstwy łączą się, aby utrzymać autonomię Agentic PIM pod kontrolą:

| Warstwa | Konfigurowana w | Co chroni |
|---|---|---|
| **Uprawnienia ACL** | Ustawienia → Role | Powstrzymuje agenta przed zrobieniem czegokolwiek, czego nie może rola wywołującego. |
| **Daily Token Budget** | Magic AI → Settings → Agentic PIM | Ogranicza całkowite wydatki na wszystkich pracowników Agentic PIM dziennie. |
| **Max Agent Steps Per Turn** | Magic AI → Settings → Agentic PIM | Ogranicza, ile narzędzi może być powiązanych w jeden wyzwalacz. |
| **Confidence Threshold + Change Approval Mode + Kolejka zatwierdzeń** | Magic AI → Settings → Agentic PIM | Zatrzymuje ryzykowne lub niskopewne zapisy do przeglądu. |

Żadna z nich nie wymaga ponownego wdrożenia ani restartu — zapisz stronę ustawień Magic AI, a każdy pracownik Agentic PIM odbierze nowe wartości przy następnym uruchomieniu.
