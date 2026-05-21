# Eksport

Eksportowanie danych w celu zapisywania informacji w plikach jest powszechną praktyką w zarządzaniu danymi, analizie i udostępnianiu. Polega na transferze danych z systemu źródłowego do formatu pliku odpowiedniego do przechowywania, przyszłego użycia lub udostępniania innym.

### Kroki dodawania masowego eksportu w UnoPim

**Krok 1:** Przejdź do panelu administracyjnego UnoPim i kliknij **Transfer danych → Eksport** w pasku bocznym, a następnie kliknij przycisk **Create Export**.

 <ImagePopup src="/assets/2.1/images/data-transfer/export-listing.png" alt="Lista eksportów" />

**Krok 2:** W konfiguracji ogólnej dodaj poniższe pola.

1) **Code -** Wprowadź kod swojego procesu eksportu.

2) **Type -** Wybierz typ, tj. (Products, Categories), który chcesz wyeksportować.

3) **Filters -** Wybierz format pliku **(CSV, XLS, XLSX)** zgodnie z wymaganiami z rozwijanej listy.

4) **With Media -** Włącz lub wyłącz, jeśli potrzebujesz danych eksportu z mediami lub bez nich.

Teraz kliknij przycisk **Save Export**. Profil zostaje zapisany i wracasz do listy eksportów.

 <ImagePopup src="/assets/2.1/images/data-transfer/create-export-form.png" alt="Formularz tworzenia eksportu" />

Formularz tworzenia eksportu ma układ dwupanelowy:
- **Panel General (lewy)** — Code, Type (Products/Categories)
- **Panel Filters (prawy)** — File Format (rozwijana lista CSV/XLS/XLSX), With Media (przełącznik)

**Krok 3:** Z listy eksportów kliknij ikonę akcji **Export** (ikona play) na wierszu, który chcesz uruchomić. Otwiera to stronę wykonania, która pokazuje podsumowanie konfiguracji eksportu:

- **Export Profile** — Kod eksportu
- **File Format** — CSV, XLS lub XLSX
- **With Media** — Tak lub Nie

Kliknij przycisk **Export Now**. UnoPim kolejkuje zadanie i przekierowuje Cię do widoku szczegółowego **Śledzenie zadań** dla tego zadania.

## Export Tracker

**Krok 4:** Strona szczegółowa Śledzenia zadań pokazuje pipeline kroków w czasie rzeczywistym. Każdy krok zapala się zielonym znacznikiem po zakończeniu, a po zakończeniu zadania otrzymujesz baner sukcesu plus liczbę rekordów i linki do pobrania:

 <ImagePopup src="/assets/2.1/images/data-transfer/export-progress.png" alt="Strona szczegółów eksportu — pipeline kroków" />

Tracker pokazuje **pipeline kroków** z wizualnymi wskaźnikami postępu:

| Krok | Opis |
|------|-------------|
| **Queued** | Zadanie jest w kolejce oczekujące na przetworzenie |
| **Validating** | Konfiguracja eksportu jest walidowana |
| **Exporting** | Rekordy są zapisywane do pliku eksportu |
| **Complete** | Eksport zakończony pomyślnie |

Każdy krok pokazuje zielony znacznik po zakończeniu. Pod pipeline'em widzisz:
- **Komunikat sukcesu** — "Job completed successfully" z łącznym czasem trwania
- **Records Created / Updated / Deleted** — Dokładne liczby wyeksportowanych rekordów
- **Total Duration** — Jak długo trwał eksport
- **Download log** — Pobierz pełny plik logu eksportu
- Przycisk **Download Exported Files** — Kliknij, aby pobrać wygenerowany plik

### Sterowanie pauzą, wznowieniem i anulowaniem

Podczas aktywnego eksportu w trackerze pojawiają się **przyciski kontroli zadania**:

- **Pause** — Tymczasowo wstrzymaj eksport w toku. Stan zadania jest zachowywany.
- **Resume** — Kontynuuj wstrzymany eksport od miejsca, w którym został zatrzymany.
- **Cancel** — Zatrzymaj eksport całkowicie. Anulowane zadania nie mogą być wznowione.

::: tip
Funkcja pauzy i wznowienia jest szczególnie przydatna dla dużych eksportów. Możesz wstrzymać zadanie w godzinach szczytu i wznowić je w godzinach pozaszczytowych.
:::

## Quick Product Export

UnoPim obsługuje **dynamiczne zarządzanie szybkimi zadaniami eksportu produktów**. Możesz szybko wyeksportować wybrane produkty bezpośrednio z listy produktów:

1. Przejdź do **Katalog → Products**
2. Wybierz produkty, które chcesz wyeksportować (lub eksportuj wszystkie)
3. Kliknij przycisk **Quick Export** w prawym górnym rogu
4. Wybierz format (CSV, XLS, XLSX)
5. Eksport zostanie przetworzony i pobrany

::: tip
W przypadku dużych eksportów system używa **zoptymalizowanego pipeline'u eksportu** z eager loading i zwiększonym rozmiarem partii (do 200) dla lepszej wydajności. Eksporty kategorii zostały zoptymalizowane, aby uniknąć przeciążenia pamięci.
:::

W ten sposób za pomocą powyższych kroków możesz łatwo utworzyć Eksportuj dane w UnoPim.
