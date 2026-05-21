# Dashboard

**Dashboard** to strona startowa, którą widzisz natychmiast po zalogowaniu się do [UnoPim](https://unopim.com/). Został zaprojektowany jako jednoekranowe centrum dowodzenia: w mniej niż sekundę powinieneś móc stwierdzić, *jak duży* jest Twój katalog, *jak zdrowy* on jest, *co Twój zespół robił* i *czemu trzeba się przyjrzeć dalej* — bez klikania na żadną inną stronę.

<ImagePopup src="/assets/2.1/images/dashboard/dashboard-overview.png" alt="Przegląd Dashboardu" />

## Po co jest Dashboard?

Dashboard istnieje, aby odpowiedzieć na cztery pytania w momencie zalogowania:

| Pytanie | Gdzie znajduje się odpowiedź |
|---|---|
| **Jak duży jest mój katalog?** | Karty Przegląd katalogu + Struktura katalogu |
| **Jak zdrowe są moje dane?** | Wymaga uwagi, Completeness, Gotowość kanału |
| **Co robił zespół?** | Statystyki produktów, wykres Aktywność produktów, Ostatnia aktywność |
| **Co robić dalej?** | Szybkie akcje Baner powitalny, alerty Wymaga uwagi, panel Transfer danych |

Jest celowo nastawiony na odczyt — Dashboard raportuje stan, a następnie wskazuje odpowiednią stronę do działania. Każda karta i panel są albo klikalne (aby przeskoczyć do odpowiedniej listy), albo połączone z przyciskiem szybkiej akcji.

## Jak działa Dashboard

Strona składa się z niezależnych **widżetów**, każdy zasilany danymi z innej części UnoPim:

```
┌───────────────────────────────────────────────────┐
│ Welcome Banner   (user greeting + quick actions)  │
├───────────────────────────────────────────────────┤
│ Catalog Overview   ← products + categories tables │
│ Catalog Structure  ← attributes, locales, channels│
├───────────────────────────────────────────────────┤
│ Needs Attention    ← completeness engine          │
├───────────────────────────────────────────────────┤
│ Analytics          ← product stats + 7-day chart  │
│ Completeness       ← per-channel completeness     │
│ Channel Readiness  ← per-channel ready counts     │
├───────────────────────────────────────────────────┤
│ Operations         ← activity log + Job Tracker   │
├───────────────────────────────────────────────────┤
│ AI Agent button (floating, bottom-right)          │
│ Theme toggle (top-right, next to bell)            │
└───────────────────────────────────────────────────┘
```

Liczby i wykresy są obliczane przy ładowaniu strony (bez zaplanowanych zadań), więc Dashboard zawsze odzwierciedla bieżący stan bazy danych.

## Widżety

### Baner powitalny

Spersonalizowane powitanie — **"Cześć! [Twoje imię]"** — przypięte do góry strony. Stanowi też punkt startowy dla trzech najczęstszych akcji:

- **Utwórz produkt** — przechodzi prosto do strony tworzenia produktu.
- **Importuj dane** — otwiera workflow importu.
- **Eksportuj dane** — otwiera workflow eksportu.

::: tip
Użyj tych przycisków szybkich akcji zamiast nawigacji przez pasek boczny — Dashboard jest zoptymalizowany, aby przejść do pracy jednym kliknięciem.
:::

### Przegląd katalogu

Dwie **klikalne karty podsumowujące** pokazujące rozmiar Twojego katalogu:

| Karta | Pokazuje | Kliknięcie zabiera Cię do |
|---|---|---|
| **Total Products** | Liczba produktów we wszystkich statusach i typach. | Strona listy produktów. |
| **Total Categories** | Liczba kategorii w całym drzewie. | Strona listy kategorii. |

### Struktura katalogu

Rząd małych kart dających strukturalną migawkę konfiguracji katalogu. Przydatne do wykrywania luk konfiguracyjnych — na przykład nowego kanału bez przypisanej lokalizacji.


| Karta | Co liczy |
|---|---|
| **Total Attributes** | Atrybuty produktów zdefiniowane w systemie. |
| **Total Groups** | Grupy atrybutów. |
| **Total Families** | Rodziny atrybutów. |
| **Total Locales** | Lokalizacje skonfigurowane w kanałach. |
| **Total Currencies** | Waluty skonfigurowane do użycia w kanałach. |
| **Total Channels** | Skonfigurowane kanały sprzedaży. |

### Wymaga uwagi

Wyświetla elementy, które wymagają akcji administratora **w tej chwili**. Najczęstszym alertem są **nieuzupełnione produkty** — produkty, którym brakuje danych wymaganych do gotowości kanału. Gdy katalog jest zdrowy, ta sekcja zwija się i pozostaje wyciszona.

::: warning
Nieuzupełnione produkty mogą nie być gotowe do dystrybucji w Twoich kanałach sprzedaży. Przeglądaj tę sekcję regularnie, aby utrzymać katalog gotowy do wysyłki.
:::

### Analytics

#### Statystyki produktów

Numeryczny rozkład katalogu — najszybszy sposób na ocenę zdrowia w czasie.

| Metryka | Znaczenie |
|---|---|
| **Total Products** | Ogólna liczba produktów. |
| **Active / Inactive** | Ile produktów jest obecnie włączonych vs. wyłączonych. |
| **Product Type Distribution** | Procentowy podział między produktami prostymi a konfigurowalnymi. |
| **New This Week** | Produkty utworzone w bieżącym tygodniu. |
| **With Variants** | Produkty, które mają konfiguracje wariantów. |
| **Avg Completeness** | Średni wynik kompletności we wszystkich produktach. |
| **Enriched** | Liczba produktów oznaczonych jako w pełni wzbogacone. |

::: tip Klikalne kafle statystyk
Każdy kafelek Statystyki produktów działa teraz jak **filter chip** — kliknij *Active*, *Inactive*, *With Variants*, *Enriched* lub *New This Week*, a Dashboard przeniesie Cię prosto do listy produktów wstępnie przefiltrowanej do tego zestawu. Bez potrzeby ręcznego tworzenia filtra.
:::

#### Aktywność produktów (Ostatnie 7 dni)

Dwuliniowy wykres pokazujący **Created** vs. **Updated** produktów dziennie przez ostatnie siedem dni. Płaskie linie na zero to sygnał, że katalog się uspokoił; skoki zazwyczaj oznaczają, że właśnie zakończył się masowy import lub uruchomienie wzbogacania.

### Completeness

Pokazuje, jak dobrze Twoje dane produktów spełniają wymagania każdego **kanału**, z **rozbiciem per locale widocznym obok siebie**. Dla każdego skonfigurowanego kanału (np. *Default*, *Amazon*, *Flipkart*) karta wyświetla:

- **Ogólny procent kanału** jako kołowy wskaźnik.
- **Wiersze per locale** — jeden wiersz na lokalizację przypisaną do tego kanału (np. niemiecki, angielski, francuski), każdy z własnym wskaźnikiem.
- **Krótki werdykt** pod głównym wskaźnikiem:

| Komunikat | Znaczenie |
|---|---|
| **Almost complete** | Prawie gotowe — potrzebne są tylko drobne uzupełnienia. |
| **Low completeness, add details to improve** | Brakuje znacznych informacji o produkcie. |

Ten układ ułatwia dostrzeżenie dokładnej kombinacji kanał + lokalizacja, która blokuje produkt przed gotowością do wysyłki.

::: tip
Pracuj najpierw nad parą kanał-locale o najniższym wyniku. Produkt może być gotowy dla *Default*, ale wciąż zablokowany na *Amazon → French*, jeśli jakikolwiek wymagany atrybut brakuje w tej konkretnej kombinacji.
:::

### Gotowość kanału

Poziomy **pasek postępu per kanał** pokazujący *"X z Y produktów gotowych"* z procentem (np. *"2 z 3 produktów gotowych — 67%"*). Tam, gdzie widżet Completeness pokazuje *średnią jakość*, Gotowość kanału pokazuje *liczbę gotowych do wysyłki* — liczbę produktów, które przekraczają wymagany przez ten kanał próg pól.

### Operacje

#### Ostatnia aktywność

Chronologiczny strumień zmian w systemie. Każdy wpis przechwytuje:

| Pole | Znaczenie |
|---|---|
| **Action type** | Utworzone, zaktualizowane lub usunięte. |
| **Entity type** | Family, Attribute, Product, Category, Channel itp. |
| **User name** | Kto wykonał akcję. |
| **Timestamp** | Kiedy to się stało. |

To najszybszy sposób na odpowiedź na *"czy ktoś zmienił X ostatnio?"* bez otwierania zakładki historii na każdej encji.

#### Transfer danych

Panel statusu Twoich ostatnich zadań importu i eksportu. Każde zadanie pokazuje jeden z pięciu stanów:

| Status | Znaczenie |
|---|---|
| **Completed** | Zadanie zakończyło się pomyślnie. |
| **Processing** | Zadanie aktualnie się wykonuje. |
| **Pending** | Zadanie jest w kolejce i czeka na rozpoczęcie. |
| **Failed** | Zadanie napotkało błędy. |
| **Cancelled** | Zadanie zostało ręcznie anulowane. |

Kliknij **"View All Jobs"**, aby otworzyć pełny **Śledzenie zadań** z paskami postępu per krok i kontrolkami pause/resume/cancel.

### AI Agent

Pływający przycisk **"Open Agenting PIM"** znajduje się w prawym dolnym rogu Dashboardu (i każdej innej strony administracyjnej). Kliknięcie go otwiera konwersacyjnego AI Agenta — wpisz, czego potrzebujesz, prostym językiem naturalnym, a wywoła on odpowiednie narzędzie PIM w Twoim imieniu.

::: tip
AI Agent może tworzyć produkty, wzbogacać treści, uruchamiać skany jakości danych i odpowiadać na pytania o Twój katalog bez nawigowania po pasku bocznym. Zobacz **[AI Agent Chat](../ai-agent/ai-agent-chat.md)** dla pełnej listy ponad 30 narzędzi.
:::

### Motyw ciemny / jasny

UnoPim obsługuje przełącznik **Dark / Light Theme**. Kliknij ikonę słońca/księżyca w prawym górnym rogu paska nagłówka (obok dzwonka powiadomień), aby przełączać między trybem jasnym a ciemnym. Twoja preferencja utrzymuje się między sesjami, więc każda strona — Dashboard, lista produktów, edytory i AI Agent Chat — zachowuje wybrany motyw.

<ImagePopup src="/assets/2.1/images/settings/dark-theme.png" alt="Motyw ciemny" />

::: tip
Przełącznik motywu jest globalny. Niezależnie od wybranego trybu obowiązuje wszędzie w panelu administracyjnym, nie tylko na Dashboardzie.
:::

## Typowy workflow Dashboardu

Powszechny sposób, w jaki administratorzy używają Dashboardu na początku zmiany:

1. **Sprawdź Wymaga uwagi** — wyczyść wszelkie pilne alerty (np. nieuzupełnione produkty).
2. **Przeskanuj Completeness i Gotowość kanału** — wybierz najsłabszą parę kanał/lokalizacja i zaplanuj uporządkowanie.
3. **Przejrzyj Ostatnia aktywność** — potwierdź, że nocne zadania się zakończyły, a zmiany kolegów mają sens.
4. **Otwórz Transfer danych** — obserwuj uruchomione importy/eksporty lub przejdź do Śledzenie zadań po szczegóły.
5. **Uruchom pracę** — użyj szybkiej akcji Baner powitalny lub przycisku AI Agent, aby rozpocząć zadania dnia.

Postępowanie według tego flow zamienia Dashboard w codzienny ekran triażu, a nie tylko stronę startową.

## Odświeżanie cache Dashboardu

Cięższe widżety Dashboardu — łączne liczniki, statystyki produktów, gotowość kanałów i listę Wymaga uwagi — są cachowane, dzięki czemu strona ładuje się natychmiast nawet w dużych katalogach. Wpisy cache są unieważniane automatycznie przez zapisy (utworzenie produktu czyści `dashboard.product_stats` itp.), więc przy normalnym użyciu zawsze powinieneś widzieć świeże dane.

Jeśli kiedykolwiek będziesz musiał **wymusić odświeżenie** — na przykład po masowym imporcie do bazy danych, który zapisał poza normalną warstwą repozytorium, lub aby potwierdzić, że statystyka jest naprawdę nieaktualna, a nie po prostu cachowana — uruchom:

```sh
php artisan unopim:dashboard:refresh
```

Polecenie czyści te pięć kluczy cache:

- `dashboard.total_catalogs`
- `dashboard.total_configurations`
- `dashboard.product_stats`
- `dashboard.needs_attention`
- `dashboard.channel_readiness`

Następne żądanie trafiające na Dashboard ponownie je przeliczy z bazy danych.

::: tip Kiedy to uruchamiać
Prawie nigdy podczas normalnej operacji — UnoPim unieważnia cache za Ciebie. Sięgnij po to polecenie, gdy:

- Zaimportowałeś dane bezpośrednio przez SQL (omijając pipeline importu).
- Przywróciłeś backup bazy danych, a Dashboard pokazuje liczby sprzed przywrócenia.
- Zbudowałeś niestandardową integrację, która zapisuje przez `DB::table()` zamiast przez repozytoria UnoPim.
:::

::: tip Planowanie
Możesz wywołać `unopim:dashboard:refresh` ze swojego planera (np. raz na godzinę), jeśli masz zewnętrzne systemy zapisujące do bazy danych. Dodaj to do `app/Console/Kernel.php` obok innych harmonogramów UnoPim.
:::
