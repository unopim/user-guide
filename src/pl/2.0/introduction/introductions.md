# Wprowadzenie

[UnoPim](https://unopim.com/) to system Product Information Management (PIM) o otwartym kodzie źródłowym, zbudowany na frameworku **Laravel 12** i wymagający **PHP 8.3**. Pomaga firmom organizować, zarządzać i wzbogacać informacje o produktach w jednym centralnym repozytorium.

## Funkcje

**1) Scentralizowane zarządzanie produktami-**
Zarządzaj wszystkimi danymi produktów w jednym miejscu z obsługą typów produktów Simple i Configurable.

**2) Wzbogacanie danych-**
Wzbogać informacje o produktach szczegółowymi atrybutami, w tym obsługą 12 typów danych oraz typów swatch dla wizualnych opcji atrybutów.

**3) Zarządzanie kategoriami-**
Organizuj produkty w kategorie dla łatwiejszej nawigacji z konfigurowalnymi polami kategorii.

**4) Zarządzanie użytkownikami-**
Kontroluj dostęp i uprawnienia użytkowników dzięki kontroli dostępu opartej na rolach.

**5) Integracja API-**
Bezproblemowa integracja z innymi systemami poprzez RESTful API z uwierzytelnianiem OAuth 2.0.

**6) Lokalizacja-**
Obsługa wielu języków i lokalizacji z automatycznym tłumaczeniem opartym na AI.

**7) Funkcjonalność importu/eksportu-**
Łatwy import i eksport danych produktów w formatach CSV, XLS i XLSX, z funkcją przeciągnij i upuść, śledzeniem zadań w czasie rzeczywistym oraz sterowaniem pauzą/wznowieniem/anulowaniem.

**8) Magic AI do generowania treści produktów-**
Automatycznie generuj angażujące treści produktów przy użyciu zaawansowanej technologii LLM z obsługą ponad 10 dostawców AI, w tym OpenAI, Gemini, Anthropic, Ollama i Groq.

**9) Obsługa wielu kanałów-**
Zarządzaj i dystrybuuj dane produktów w wielu kanałach sprzedaży z jednej platformy.

**10) AI Agent Chat-**
Wchodź w interakcję ze swoim PIM w języku naturalnym przez interfejs AI Agent Chat z ponad 30 wbudowanymi narzędziami PIM do zarządzania produktami, jakości danych i operacji masowych.

**11) Kompletność produktów-**
Monitoruj jakość danych dzięki ocenie kompletności produktów, która śledzi, ile wymaganych informacji zostało wypełnionych dla każdego kanału i języka.

**12) Powiadomienia-**
Bądź na bieżąco dzięki powiadomieniom w aplikacji i e-mailowym o zadaniach importu/eksportu, zmianach produktów i zdarzeniach systemowych.

**13) Webhooki-**
Automatyzuj procesy dzięki webhookom aktualizacji produktów, które uruchamiają wywołania zwrotne HTTP w przypadku zmian danych produktów.

**14) Ulepszony Dashboard-**
Uzyskaj kompleksowy przegląd katalogu dzięki widżetom statystyk produktów, wykresów aktywności, ocen kompletności, gotowości kanałów i ostatnich operacji.

**15) Masowa edycja produktów-**
Edytuj wiele produktów jednocześnie, wybierając je z datagrid i stosując zbiorcze zmiany do wspólnych atrybutów.

**16) Obsługa PostgreSQL-**
Pełna obsługa baz danych PostgreSQL oprócz MySQL dla lepszej kompatybilności międzybazowej.

## Pipeline Agentic PIM
Każda akcja oparta na AI w UnoPim — od wiadomości czatu po wzbogacanie w tle — przebiega według ustrukturyzowanej pętli 5-etapowej, aby zapewnić bezpieczeństwo, precyzję i przejrzystość:

<ImagePopup src="/assets/2.0/images/ai-agent/agentic-pim-pipeline.png" alt="Pipeline Agentic PIM — Workflow 5-etapowy" />

