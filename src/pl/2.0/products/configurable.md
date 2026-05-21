# Produkt konfigurowalny

**Configurable Product** to pojedynczy wpis katalogowy, który grupuje wiele wariantów — każdy z własnym SKU — pod jednym rodzicem. To, czego używasz, gdy jeden produkt występuje w kilku *opcjach* (rozmiar, kolor, materiał) i chcesz, aby wszystkie te opcje były zarządzane razem, a nie jako rozłączne produkty proste.

## Czym jest Produkt konfigurowalny?

| | Produkt konfigurowalny |
|---|---|
| **Struktura** | Jeden rodzic SKU + N wariantów potomnych (każdy z własnym SKU). |
| **Kiedy używać** | Element ma wariacje — T-shirty w S/M/L × Czerwony/Niebieski/Zielony, buty w różnych rozmiarach, etui na telefon w różnych kolorach. |
| **Typowe przykłady** | T-shirt sprzedawany w 3 rozmiarach × 4 kolorach, sofa w 3 opcjach tkaniny, laptop w wielu pojemnościach pamięci. |
| **Porównaj z** | [Simple Product](./simple.md) — używaj go, gdy nie ma wariantów lub każdy wariant jest naprawdę osobnym produktem. |

Atrybuty definiujące warianty nazywane są **super atrybutami** (lub *atrybutami konfigurowalnymi*) — to są osie, wzdłuż których produkt się różni (np. `size`, `color`). Każdy inny atrybut (opis, kategoria, obrazy, asocjacje) jest edytowany na rodzicu i dziedziczony przez warianty, chyba że go nadpiszesz.

## Jak to działa?

Produkt konfigurowalny jest tworzony w trzech fazach:

1. **Utwórz rodzica** — ustaw typ produktu na `Configurable`, wybierz rodzinę, wprowadź SKU i wybierz **super atrybuty**, które będą definiować warianty.
2. **Wypełnij atrybuty rodzica** — opis, kategorie, obrazy, ceny, asocjacje. Wszystko, co powinno być wspólne dla wariantów, idzie tutaj.
3. **Dodaj warianty** — w sekcji **Variations** utwórz po jednym potomku na kombinację (np. `Size=M, Color=Red`). Każdy potomek ma własne SKU i może nadpisywać wartości specyficzne dla wariantu.

W czasie wykonywania rodzic działa jako rekord publiczny, a warianty przechowują dane specyficzne dla opcji (i często własny magazyn, cenę, obraz).

## Jak utworzyć Produkt konfigurowalny

### Krok 1 — Rozpocznij tworzenie

1. Kliknij **Katalog → Products**.
2. Kliknij **Create Product** w prawym górnym rogu. Otwiera się dialog **"Create New Product"**.
3. Wypełnij:
   - **Type** — `Configurable`.
   - **Family** — rodzina atrybutów, która kontroluje, jakie pola pojawiają się na rodzicu.
   - **SKU** — SKU rodzica (musi być unikalne).
4. Kliknij **Save Product**.

<ImagePopup src="/assets/2.0/images/configurable-product/configurable.png" alt="Modal tworzenia produktu konfigurowalnego" />

UnoPim przekierowuje Cię na stronę edycji i prosi o wybór super atrybutów.

### Krok 2 — Wybierz super atrybuty

Super atrybuty to osie, wzdłuż których produkt się różni — zazwyczaj te z typami danych Select lub Multiselect (np. `size`, `color`). Tylko atrybuty oznaczone jako *usable for variants* na rodzinie pojawiają się tutaj.

<ImagePopup src="/assets/2.0/images/configurable-product/configurableAttributes.png" alt="Super atrybuty konfigurowalne" />

v2.0 obsługuje również:

- **Elastyczny wybór super atrybutów** podczas tworzenia produktu.
- **Format `variants_json`** do programatycznej / masowej definicji wariantów.
- **Seeder wariantów oparty na rozmiarach** do szybkiego generowania siatek rozmiarów.

::: warning
Super atrybuty są **zablokowane po utworzeniu wariantów**. Zaplanuj osie wariantów z góry — zmiana ich później wymaga usunięcia i ponownego utworzenia wariantów.
:::

### Krok 3 — Wypełnij atrybuty rodzica

Podobnie jak Simple Product, strona edycji rodzica grupuje atrybuty według **Attribute Group** (General, Descriptions, Categories, Associations, …). Dokładnie, które grupy pojawiają się, zależy od rodziny.

Rodzina `default` wymaga co najmniej:

| Pole | Znaczenie |
|---|---|
| **SKU** | SKU rodzica — identyfikator dla rekordu konfigurowalnego. |
| **Name** | Wyświetlana nazwa wspólna dla wszystkich wariantów. |
| **URL Key** | Slug bezpieczny dla URL do linkowania w sklepie. |

Inne sekcje do wypełnienia na rodzicu:

| Sekcja | Cel |
|---|---|
| **Short Description** | Podsumowanie niezależne od wariantów. |
| **Description** | Pełna treść — zwykle wspólna dla wariantów. |
| **Technical** | Przełącznik statusu — włącza/wyłącza cały zestaw konfigurowalny. |
| **Categories** | Przypisanie kategorii dla konfigurowalnego (dotyczy wszystkich wariantów). |
| **Associations** | Produkty Related / Up-sell / Cross-sell (zobacz poniżej). |

Każda sekcja renderuje się jako własna karta na stronie edycji. Karty **Description** zawierają edytor WYSIWYG. Karta **Technical** zawiera zielony przełącznik **Status** — pozostawienie go wyłączonego wyłącza cały konfigurowalny (rodzica **i** wszystkie warianty). Karta **Categories** otwiera selektor drzewa; wszystko, co tutaj wybierzesz, stosuje się do każdego wariantu.

<ImagePopup src="/assets/2.0/images/configurable-product/editProduct.png" alt="Strona edycji produktu konfigurowalnego" />

### Krok 4 — Dodaj warianty

Przewiń do sekcji **Variations** i kliknij **Add Product**, aby utworzyć wariant potomny. Otwiera się modal z jednym wejściem na super atrybut plus pole **SKU** dla samego wariantu.

Dla każdego wariantu:

1. Wprowadź wartości dla super atrybutów (np. `Size = M`, `Color = Red`).
2. Wprowadź SKU wariantu.
3. Opcjonalnie nadpisz dowolne pola specyficzne dla wariantu (cena, obraz, magazyn).
4. Kliknij **Add**, aby zapisać wariant. Pojawia się on w tabeli pod sekcją Variations obok rodzeństwa, które już utworzyłeś.

<ImagePopup src="/assets/2.0/images/configurable-product/addVariant.png" alt="Formularz dodawania wariantu" />

Możesz dodać tyle wariantów, ile produkt potrzebuje. T-shirt z Size × Color = 3 × 4 potrzebuje 12 wariantów; seeder oparty na rozmiarach może to przyspieszyć.

### Krok 5 — Dodaj asocjacje

Na dole strony edycji rodzica połącz ten konfigurowalny produkt z innymi produktami:

| Asocjacja | Kiedy używać |
|---|---|
| **Related Products** | Podobne alternatywy, które klienci mogą również polubić. |
| **Up-Sell Products** | Wersje wyższej klasy — linia premium kurtek, szybszy laptop. |
| **Cross-Sell Products** | Komplementarne elementy — skarpetki do butów, kable do elektroniki. |

Dla każdej sekcji kliknij **Add**, wyszukaj po SKU, wybierz i potwierdź. Wszystkie trzy karty asocjacji akceptują tyle produktów, ile potrzebujesz.

### Krok 6 — Zapisz

Kliknij **Save Product** w prawym górnym rogu strony edycji. Zostajesz przekierowany z powrotem do **Products Data Grid**, gdzie konfigurowalny pojawia się z *Configurable* w kolumnie **Type**. Warianty nie pokazują się jako osobne wiersze — są dostępne tylko przez sekcję **Variations** rodzica.

<ImagePopup src="/assets/2.0/images/configurable-product/datagrid.png" alt="Produkt konfigurowalny w Datagrid" />

::: tip
Atrybuty z **plakietką kanału** przechowują wartości per kanał; z **plakietką lokalizacji**, per lokalizacja; z obiema, per kanał **i** per lokalizacja. Stosuje się to do rodzica i wariantów.
:::

## Praca z Produktem konfigurowalnym po utworzeniu

Produkty konfigurowalne obsługują te same funkcje cyklu życia co Simple Products — kompletność, tłumaczenie, masowa edycja, historia, eksport, kopia. Kilka zachowań jest specyficznych dla konfigurowalnych:

### Kompletność

Silnik kompletności ocenia **zarówno rodzica, jak i jego warianty**. Zagregowany wynik uwzględnia brakujące wymagane atrybuty na każdym poziomie, więc nawet dobrze wypełniony rodzic z pustym wariantem może obniżyć wynik.

- Kompletność jest obliczana per kanał **i** per lokalizacja.
- Widżet **Completeness** na Dashboardzie agreguje wszystkie produkty, w tym konfigurowalne.
- Warianty o niskiej kompletności są oznaczane do uwagi obok rodzica.

::: tip
Najpierw wypełnij atrybuty rodzica (opis, obrazy, kategorie). Następnie przejdź przez warianty, aby ustawić wartości specyficzne dla wariantu (SKU, cena, obraz per wariant). Praca top-down jest szybsza niż przeskakiwanie między wariantami.
:::

### Tłumaczenie

Pola specyficzne dla lokalizacji na rodzicu i na każdym wariancie mogą być tłumaczone ręcznie (przełącznik lokalizacji na górze strony edycji) lub automatycznie przez **[Magic AI — Settings](../magic-ai/settings.md)** Translation. Ten sam workflow stosuje się do obu typów produktów — zobacz [Simple Product → Translate values across locales](./simple.md#translate-values-across-locales).

### Masowa edycja

Użyj **Bulk Edit** na liście produktów, aby zaktualizować atrybuty w wielu produktach konfigurowalnych naraz. Wybierz wiersze, wybierz atrybut, wprowadź wartość, zastosuj. Zobacz [Simple Product → Bulk edit](./simple.md#bulk-edit).

### Historia

Kliknij zakładkę **History** na stronie edycji rodzica dla śladu audytu każdej zmiany — edycje atrybutów, przełączenia statusu, zmiany kategorii, zmiany asocjacji. Każdy wpis listuje datę, użytkownika i konkretne pola, które się zmieniły z wartościami przed i po. Każdy wariant ma własną historię dostępną z jego indywidualnego widoku edycji.

### Szybki eksport

Wybierz konfigurowalny(-e) w **Katalog → Products** i użyj **Quick Export** (w prawym górnym rogu, obok Create Product), aby pobrać w CSV, XLS lub XLSX. Eksport łączy rekord rodzica z jego wariantami w jednym pliku, więc importowanie wyniku z powrotem odtwarza pełną strukturę konfigurowalną. Dla zaplanowanych lub przefiltrowanych eksportów użyj pełnego workflow **[Eksport](../data-transfer/export.md)**.

## Powiązane materiały

- **[Simple Product](./simple.md)** — dla samodzielnych SKU bez wariantów.
- **[Attribute Family](../attribute/attribute-family.md)** — kontroluje, których atrybutów (w tym kandydatów super atrybutów) konfigurowalny może używać.
- **[Product Attribute](../attribute/product-attribute.md)** — jak oznaczyć atrybut jako użyteczny dla wariantów.
- **[Magic AI — Settings](../magic-ai/settings.md)** — auto-tłumaczenie treści wariantów między lokalizacjami.
- **[AI Agent Chat](../ai-agent/ai-agent-chat.md)** — v2.0-beta.1 wprowadził wsparcie AI Agent do tworzenia i zarządzania produktami konfigurowalnymi przez czat.
