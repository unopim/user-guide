# Śledzenie zadań

> **Pasek boczny:** Transfer danych → **Śledzenie zadań**
> **URL:** `/admin/data-transfer/job-tracker`

**Śledzenie zadań** to centralna strona monitorowania każdego zadania importu i eksportu, które uruchamia UnoPim. Gdy klikasz *Import Now* lub *Export Now* z profilu lub obserwujesz odpalające się zadanie w tle, to jest ekran, który pokazuje Ci, co się dzieje teraz, co się zakończyło i co — jeśli cokolwiek — poszło nie tak.

## Czym jest Śledzenie zadań?

Pojedynczy widok każdego zadania transferu danych w systemie w czasie rzeczywistym. Zamiast szukać przez listy importów i eksportów osobno, otwierasz jedną stronę i widzisz:

- **Status każdego zadania** — queued, processing, complete, failed, cancelled, paused.
- **Postęp na żywo** — bieżący krok w pipeline, liczba rekordów utworzonych / zaktualizowanych / usuniętych do tej pory.
- **Kontrolki** — pauzowanie, wznawianie lub anulowanie zadania w toku.
- **Logi i artefakty** — pobierz log zadania lub wyeksportowany plik po zakończeniu uruchomienia.

<ImagePopup src="/assets/2.0/images/data-transfer/tracker.png" alt="Śledzenie zadań" />

## Jak to działa?

Każdy import i eksport działa jako zadanie kolejkowane. W momencie uruchomienia UnoPim:

1. Tworzy **rekord zadania** z unikalnym ID, statusem `Queued` i konfiguracją, która została przesłana.
2. Gdy worker kolejki je podchwytuje, zadanie przechodzi przez stały **pipeline kroków** — każdy krok aktualizuje rekord.
3. Strona Śledzenie zadań subskrybuje te aktualizacje i odmalowuje UI postępu na żywo (bez potrzeby odświeżania).
4. Gdy zadanie ląduje w stanie terminalnym (`Complete`, `Failed`, `Cancelled`), plik logu i wszelkie wyprodukowane artefakty stają się dostępne do pobrania z trackera.

Ponieważ każdy krok zapisuje do tego samego rekordu, możesz odejść od trackera w trakcie uruchomienia i wrócić później — strona przywraca bieżący stan z bazy danych.

## Statusy zadań

Każdy wiersz w trackerze pokazuje bieżący status zadania jako kolorowy chip:

| Status | Znaczenie |
|---|---|
| **Queued** | Zadanie jest w kolejce, oczekujące na workera. |
| **Validating** / **Validated** | Plik jest walidowany lub walidacja zakończyła się pomyślnie i import jest gotowy do uruchomienia. |
| **Processing** | Worker je podchwycił i pipeline postępuje. |
| **Paused** | Zatrzymałeś je w trakcie; stan jest zachowany i można je wznowić. |
| **Completed** | Wszystkie kroki zakończyły się pomyślnie. |
| **Failed** | Krok zwrócił błąd; sprawdź log po szczegóły. |
| **Cancelled** | Zatrzymałeś je trwale; nie można wznowić. |

## Kolumny listy trackera

Tracker to datagrid; jeden wiersz na zadanie:

| Kolumna | Opis |
|---|---|
| **ID** | Auto-inkrementowane ID zadania. Pasuje do sufiksu `#n` na powiadomieniach (np. *Import #15*). |
| **Job** | Kod profilu (np. `product_export`, `category_import`). |
| **Type** | Co jest transferowane — `Products` lub `Categories`. |
| **Job Type** | Jak zadanie zostało wyzwolone — `import`, `export` lub `system` (zaplanowane, masowe lub zainicjowane przez AI-Agent). |
| **Status** | Bieżący stan (zobacz tabelę powyżej). |
| **User** | Administrator, który uruchomił zadanie. |
| **Started at** / **Completed at** | Znaczniki czasowe. |
| **Actions** | **Ikona oka** — otwiera stronę szczegółową zadania, na której pokazany jest pipeline kroków, postęp na żywo i kontrolki Pause / Resume / Cancel. |

<ImagePopup src="/assets/2.0/images/data-transfer/tracker.png" alt="Lista Śledzenia zadań" />

## Zadania systemowe i zadania wyzwalane przez AI-Agent

Nie każdy wpis w trackerze pochodzi z ręcznego importu / eksportu. Zadania dzielą się na trzy kategorie, pokazane w kolumnie **Job Type**:

| Job Type | Skąd pochodzi |
|---|---|
| `import` | Ręczne uruchomienie z **Transfer danych → Importuj**. |
| `export` | Ręczne uruchomienie z **Transfer danych → Eksport** lub **Quick Export** z listy produktów. |
| `system` | Zadanie w tle — masowe aktualizacje produktów, zaplanowane skany jakości katalogu, uruchomienia auto-wzbogacania lub eksporty, które AI Agent wyprodukował w Twoim imieniu. Zadania zainicjowane przez AI-Agent pojawiają się z nazwami takimi jak `ai-agent-export-…`. |

Wszystkie trzy dzielą ten sam cykl życia, chipy statusu, logi i kontrolki Pause / Resume / Cancel — jedyną różnicą jest sposób, w jaki zostały uruchomione.

::: tip
Jeśli widzisz zadanie `system`, którego nie rozpoznajesz, kliknij ikonę oka, aby otworzyć stronę szczegółową. Widok szczegółowy pokazuje użytkownika, który wyzwolił łańcuch, a dla zadań AI-Agent — wiadomość czatu, która je wyprodukowała.
:::

## Pipeline kroków (na stronie szczegółów zadania)

Kliknij **ikonę oka** w wierszu w trackerze, aby otworzyć stronę szczegółów zadania. Strona szczegółów wizualizuje zadanie jako poziomy pipeline kroków. Dokładne kroki zależą od typu zadania:

### Pipeline importu

| Krok | Opis |
|------|-------------|
| **Queued** | Zadanie oczekuje na workera. |
| **Validating** | Plik jest walidowany względem reguł importu. |
| **Importing** | Rekordy są tworzone / aktualizowane / usuwane w bazie danych. |
| **Indexing** | Indeksy Elasticsearch są aktualizowane, aby produkty były wyszukiwalne. |
| **Complete** | Import zakończony pomyślnie. |

<ImagePopup src="/assets/2.0/images/data-transfer/import-progress.png" alt="Postęp importu" />

### Pipeline eksportu

| Krok | Opis |
|------|-------------|
| **Queued** | Zadanie oczekuje na workera. |
| **Validating** | Konfiguracja eksportu jest walidowana. |
| **Exporting** | Rekordy są zapisywane do pliku wyjściowego. |
| **Complete** | Eksport zakończony pomyślnie. |

<ImagePopup src="/assets/2.0/images/data-transfer/export-progress.png" alt="Postęp eksportu" />

Każdy zakończony krok renderuje się z zielonym znacznikiem. Nieudany krok renderuje się na czerwono, a pipeline zatrzymuje się tam — kolejne kroki są pomijane.

## Szczegóły pokazane dla każdego zadania

Pod pipeline'em tracker pokazuje:

- **Komunikat sukcesu / błędu** — *"Job completed successfully"* plus łączny czas trwania lub konkretny błąd, który zatrzymał uruchomienie (np. *"Required columns not found: code"*).
- **Records Created / Updated / Deleted** — dokładne liczby tego, co się zmieniło.
- **Total Duration** — jak długo trwało zadanie od queued do stanu terminalnego.
- **Download log** — pełny log importu/eksportu do przeglądu offline.
- **Download Exported Files** *(tylko dla eksportów)* — CSV/XLS/XLSX wyprodukowany przez uruchomienie.

## Kontrolki

### Pause

Podczas uruchomienia `Processing` kliknij **Pause**, aby tymczasowo wstrzymać zadanie. UnoPim zamraża stan zadania w bieżącej partii — żadne rekordy nie są tracone, nic nie jest cofane, a worker kolejki przechodzi do innej pracy.

### Resume

Dla zadania `Paused` kliknij **Resume**, aby kontynuować od następnej partii. Zadanie podchwytuje dokładnie od miejsca, w którym przerwane — już przetworzone rekordy nie są przetwarzane ponownie.

### Cancel

Kliknij **Cancel**, aby zatrzymać zadanie na stałe. Zadanie przechodzi do stanu `Cancelled` i nie można go wznowić. Rekordy już zapisane przez wcześniejsze kroki **nie** są cofane — jeśli musisz je cofnąć, uruchom import oczyszczający.

::: tip
Pause to właściwy wybór w godzinach szczytu na dużym zadaniu. Cancel jest dla sytuacji *"ten import miał zły plik"* — gdy anulujesz, zaczynasz od nowa ze strony listy.
:::

## Otwieranie Śledzenia zadań

Trzy powszechne punkty wejścia:

1. **Z paska bocznego administratora** — kliknij **Transfer danych → Śledzenie zadań**.
2. **Po uruchomieniu zadania** — przycisk *Import Now* / *Export Now* przekierowuje Cię prosto do trackera dla właśnie uruchomionego zadania.
3. **Z Dashboardu** — widżet **Transfer danych** listuje ostatnie zadania, a link *"View All Jobs"* prowadzi do trackera.

## Jak tracker odnosi się do importów i eksportów

| Strona | Rola |
|---|---|
| **[Importuj](./import.md)** | Zdefiniuj profil importu (code, type, file, validation strategy, action mode). |
| **[Eksport](./export.md)** | Zdefiniuj profil eksportu (code, type, file format, media). |
| **Śledzenie zadań** (ta strona) | Monitoruj uruchomienia, jakie produkują te profile — status, postęp, logi, artefakty. |

Profile to *konfiguracje wielokrotnego użytku*. Za każdym razem, gdy klikasz *Import Now* lub *Export Now* na profilu, tworzone jest nowe zadanie i wyświetlane w Śledzeniu zadań.

## Przetwarzanie w tle

Zadania działają na workerze kolejki Laravel. Jeśli nie widzisz postępu zadań kolejkowanych, upewnij się, że worker działa:

```bash
php artisan queue:listen
```

W produkcji uruchom workera jako zarządzaną usługę (systemd, Supervisor, …), aby pozostawał uruchomiony między restartami.
