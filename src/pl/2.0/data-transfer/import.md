# Importuj

Bulk import to funkcja, która pozwala użytkownikom importować duże ilości danych do systemu szybko i wydajnie. Upraszcza proces i oszczędza czas, eliminując potrzebę dodawania każdej informacji jedna po drugiej.

Funkcja działa różnie dla każdego systemu i ma szeroką gamę zastosowań w wielu branżach, w tym także w [UnoPim](https://unopim.com/).

### Kroki dodawania masowego importu w UnoPim

**Krok 1:** Przejdź do panelu administracyjnego UnoPim i kliknij **Transfer danych → Importuj** w pasku bocznym, a następnie kliknij przycisk **Create Import**.

 <ImagePopup src="/assets/2.0/images/data-transfer/import-listing.png" alt="Lista importów" />

**Krok 2:** W konfiguracji ogólnej dodaj poniższe pola:

1) **Code -** Wprowadź kod swojego procesu importu.

2) **Type -** Wybierz typ, tj. (Products, Categories), który chcesz zaimportować.

3) **File / Images –** połączony panel obejmujący zarówno plik danych, jak i wszelkie obrazy produktów, do których plik się odnosi:
   - **File \*** – przeciągnij plik **CSV / XLSX / XLS** na obszar przesyłania (*"Click to upload or drag and drop"*) lub kliknij, aby przeglądać. Dozwolone typy plików są pokazane pod etykietą.
   - **Download {Type} Sample CSV** – link pobierający przykładowy plik dla wybranego Type (np. *"Download Categories Sample CSV"*, gdy Type to Categories). Użyj go, aby potwierdzić oczekiwany układ kolumn przed przesłaniem własnego pliku.
   - **Images → Path** – dwuczęściowa ścieżka, której UnoPim używa do lokalizowania obrazów produktów:
     - Prefiks jest zablokowany na `storage/app/public/`.
     - Edytowalny sufiks domyślnie jest podobny do `import-images/my-products`.
     - Kliknij **Upload Images to set Path**, aby przesłać folder obrazów; UnoPim zapisuje go pod prefiksem i automatycznie wypełnia sufiks za Ciebie.
   - Tekst pomocniczy pod polem: *"Place images in `storage/app/public/`. For images at `storage/app/public/import-images`, include `import-images/` in the path and use only the file name in the import file."*

4) **Action –** Wybierz Create/Update lub Delete z panelu Settings, aby kontrolować, czy pasujące wiersze są upserted czy usuwane.

5) **Validation Strategy –** Wybierz **Skip Errors** lub **Stop on Errors**, aby zdecydować, jak importer reaguje, gdy wiersz nie przejdzie walidacji.

6) **Allowed Errors –** Maksymalna liczba błędów na poziomie wiersza, jakie import toleruje przed zatrzymaniem. Domyślnie: **`10`**.

7) **Field Separator –** Znak, który oddziela kolumny w pliku CSV. Domyślnie: **`;`** (średnik). Używany tylko dla plików CSV.

Teraz kliknij przycisk **Save Import**.

 <ImagePopup src="/assets/2.0/images/data-transfer/create-import-form.png" alt="Formularz tworzenia importu" />

Formularz tworzenia importu ma układ dwupanelowy:
- **Panel General (lewy)** — Code, Type (Products/Categories) plus połączony blok **File / Images** z obszarem przesyłania pliku, linkiem *Download {Type} Sample CSV* i polem **Images → Path** z przyciskiem *Upload Images to set Path*.
- **Panel Settings (prawy)** — Action (Create/Update), Validation Strategy (Stop on Errors / Skip Errors), Allowed Errors (domyślnie `10`), Field Separator (domyślnie `;`).

### Przesyłanie plików przeciągnij i upuść

UnoPim v2.0 obsługuje **Drag-and-Drop File Upload** dla plików importu. Obszar przesyłania wyświetla **"Click to upload or drag and drop"** z obsługiwanymi typami plików (CSV, XLSX, XLS). Możesz przeciągnąć plik bezpośrednio z menedżera plików na obszar przesyłania z przerywaną linią.

### Dynamiczne filtry zadań importu

Zadania importu obsługują **dynamiczne filtry**, które pozwalają konfigurować zaawansowane warunki filtrowania dla danych importu. Pomaga to kontrolować dokładnie, które rekordy są importowane na podstawie konkretnych kryteriów.

**Krok 3:** Z listy importów kliknij ikonę akcji **Import** (ikona play) na wierszu importu, który chcesz uruchomić. Otwiera to stronę wykonania, która pokazuje podsumowanie konfiguracji importu:

- **Import Profile** — Kod importu
- **File Path** — Lokalizacja przesłanego pliku
- **Action Mode** — Create/Update lub Delete

Kliknij przycisk **Import Now**, aby rozpocząć przetwarzanie. UnoPim kolejkuje zadanie i przekierowuje Cię do widoku szczegółowego **Śledzenie zadań** dla tego zadania.

## Import/Export Tracker

**Krok 4:** Strona szczegółowa Śledzenia zadań pokazuje pipeline kroków w czasie rzeczywistym. Jeśli walidacja wykrywa błędy, strona wyświetla je z numerami wierszy i dokładnym polem, które się nie powiodło, plus przycisk **Download Full Report**:

 <ImagePopup src="/assets/2.0/images/data-transfer/import-progress.png" alt="Strona szczegółów importu — błędy walidacji" />

Tracker pokazuje **pipeline kroków** z wizualnymi wskaźnikami postępu:

| Krok | Opis |
|------|-------------|
| **Queued** | Zadanie jest w kolejce oczekujące na przetworzenie |
| **Validating** | Plik jest walidowany względem reguł importu |
| **Importing** | Rekordy są tworzone/aktualizowane w bazie danych |
| **Indexing** | Indeksy Elasticsearch są aktualizowane |
| **Complete** | Import zakończony pomyślnie |

Każdy krok pokazuje zielony znacznik po zakończeniu. Pod pipeline'em widzisz:
- **Komunikat sukcesu/błędu** — Czy zadanie zakończyło się, czy nie powiodło, ze szczegółami
- **Records Created / Updated / Deleted** — Dokładne liczby tego, co się zmieniło
- **Total Duration** — Jak długo trwał import
- **Download log** — Pobierz pełny plik logu importu
- **Szczegóły błędu** — Jeśli walidacja się nie powiedzie, widzisz konkretne błędy (np. "Required columns not found: code")

### Sterowanie pauzą, wznowieniem i anulowaniem

Podczas aktywnego importu w trackerze pojawiają się **przyciski kontroli zadania**:

- **Pause** — Tymczasowo wstrzymaj import w toku. Stan zadania jest zachowywany i można go później wznowić.
- **Resume** — Kontynuuj wstrzymany import od miejsca, w którym został zatrzymany.
- **Cancel** — Zatrzymaj import całkowicie. Anulowane zadania nie mogą być wznowione.

::: tip
Funkcja pauzy i wznowienia jest szczególnie przydatna dla dużych importów. Możesz wstrzymać zadanie w godzinach szczytu i wznowić je w godzinach pozaszczytowych.
:::

Możesz również uruchomić poniższe polecenie w korzeniu UnoPim, aby przetworzyć kolejkę importów:

```bash
php artisan queue:listen
```

W ten sposób za pomocą powyższych kroków możesz łatwo utworzyć Importuj dane w UnoPim.
