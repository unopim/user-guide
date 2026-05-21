# Wprowadzenie

[UnoPim](https://unopim.com/) to system Product Information Management (PIM) o otwartym kodzie źródłowym, zbudowany na frameworku **Laravel 12** i wymagający **PHP 8.3**. Pomaga firmom organizować, zarządzać i wzbogacać informacje o produktach w jednym centralnym repozytorium.

::: tip Aktualna wersja — v2.1.0
Ten przewodnik dotyczy UnoPim **v2.1.0**, wydanej 13 maja 2026 r. Wersja v2.1.0 wprowadza gotowy do produkcji stos Docker, jednokliknięciowe seedowanie Demo Data, narzędzie AI Agent `ManageAssociations`, niestandardowych dostawców MagicAI, asynchroniczne webhooki produktów, klikalne statystyki na dashboardzie oraz dedykowany pakiet wzmocnień bezpieczeństwa. Pełną listę można znaleźć w **[Co nowego](../releases/)**.
:::

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

**17) Gotowy do produkcji setup Docker**  -
Uruchom pełny stos jednym poleceniem przy użyciu oficjalnych obrazów Docker Hub. Konfiguracja wielokontenerowa z Nginx + PHP-FPM (dostępna opcja zapasowa Apache), Redis, Elasticsearch i Mailpit — wszystko z healthchecks, dostrojonym pod OPcache `php.ini` i workflow automatycznej publikacji.

**18) Seedowanie Demo Data**  -
Oceń UnoPim natychmiast dzięki realistycznym danym przykładowym. Włącz demo data z kreatora instalatora, przekaż `--with-demo-data` do `php artisan unopim:install` lub uruchom samodzielne polecenie `php artisan unopim:install:demo-data` w dowolnym momencie po instalacji.

**19) Niestandardowi dostawcy MagicAI**  -
Podłącz dowolną usługę zgodną z OpenAI — samodzielnie hostowane bramy, proxy lub alternatywne endpointy — wybierając dostawcę *Custom* na stronie Magic AI Platforms i podając własny base URL.

**20) Asynchroniczne webhooki produktów**  -
Webhooki tworzenia/aktualizacji produktów są wysyłane w tle jako kolejkowane zadanie `SendProductWebhook`, dzięki czemu akcje administratora wracają natychmiast nawet gdy odbierający endpoint jest wolny.

**21) Klikalne statystyki Dashboard**  -
Kafle statystyk produktów na Dashboardzie (Aktywne, Nieaktywne, Wzbogacone, Z wariantami, …) działają teraz jak chipy filtrów — kliknij jeden, aby przejść głęboko do siatki produktów wstępnie przefiltrowanej do tego zestawu.

**22) Wzmocnienie bezpieczeństwa**  -
Ograniczenie szybkości logowania administratora, walidacja hasła po stronie serwera, ochrona przed enumeracją użytkowników w funkcji zapomnianego hasła, blokowanie otwartego przekierowania, zabezpieczenie przed eskalacją uprawnień przy edycji użytkownika, pomocnik sanityzacji XSS `clean_content()` oraz debugbar ograniczony do IP przez `APP_DEBUG_ALLOWED_IPS`.
