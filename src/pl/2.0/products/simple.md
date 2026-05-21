# Prosty produkt

**Simple Product** to pojedynczy, samodzielny SKU — jeden fizyczny element z jednym zestawem atrybutów i bez wariacji. To najbardziej powszechny typ produktu w UnoPim i właściwy wybór, gdy produkt *nie* potrzebuje rozmiaru, koloru lub innych wariantów.

## Czym jest Simple Product?

| | Simple Product |
|---|---|
| **Struktura** | Jeden SKU, jeden zestaw wartości atrybutów, jeden wiersz w siatce produktów. |
| **Kiedy używać** | Element nie ma wariantów lub każdy wariant powinien być zarządzany jako własny osobny rekord. |
| **Typowe przykłady** | Książka, pojedynczy kolor farby, konkretne pudełko śrub, notatnik na pierścieniach. |
| **Porównaj z** | [Configurable Product](./configurable.md) — używaj go, gdy jeden wpis katalogowy musi grupować wiele wariantów rozmiaru/koloru/materiału pod jednym rodzicem. |

## Jak to działa?

Simple Product jest tworzony w dwóch fazach:

1. **Create** — ustawiasz typ produktu na `Simple`, wybierasz rodzinę atrybutów i nadajesz mu SKU. To tworzy minimalny rekord.
2. **Edit** — UnoPim przekierowuje Cię na stronę edycji produktu, gdzie wypełniasz atrybuty zdefiniowane przez rodzinę (nazwa, opis, cena, kategorie, obrazy, asocjacje, …) i zapisujesz.

Ponieważ dostępność atrybutów jest napędzana przez **rodzinę atrybutów**, Simple Product w rodzinie `default` ma inny zestaw edytowalnych pól niż w, powiedzmy, rodzinie `books`. Zarządzanie kształtem Simple Product oznacza zarządzanie jego rodziną — zobacz [Attribute Family](../attribute/attribute-family.md).

## Jak utworzyć Simple Product

### Krok 1 — Rozpocznij tworzenie

1. Kliknij **Katalog → Products**.
2. W prawym górnym rogu kliknij **Create Product**. Otwiera się dialog zatytułowany **"Create New Product"**.
3. Wypełnij trzy pola:
   - **Type** — `Simple`.
   - **Family** — rodzina atrybutów, która kontroluje, jakie pola pojawią się na stronie edycji.
   - **SKU** — unikalny identyfikator produktu.
4. Kliknij **Save Product**.

<ImagePopup src="/assets/2.0/images/simple-product/simple.png" alt="Modal tworzenia Simple Product" />

UnoPim zamyka dialog i przekierowuje Cię na stronę edycji, gdzie można wypełnić każde pozostałe pole.

<ImagePopup src="/assets/2.0/images/simple-product/editProduct.png" alt="Edytuj Simple Product" />

### Krok 2 — Wypełnij szczegóły produktu

Strona edycji grupuje atrybuty według **Attribute Group** (General, Short Description, Description, Price, Technical, Categories, Associations, …). Dokładnie, które grupy pojawiają się, zależy od rodziny wybranej przy tworzeniu.

Rodzina `default` wymaga co najmniej:

| Pole | Znaczenie |
|---|---|
| **SKU** | Unikalny identyfikator produktu. Nie może być duplikowany. |
| **Name** | Wyświetlana nazwa pokazywana klientom. |
| **URL Key** | Slug bezpieczny dla URL do linków sklepu. |

Dodatkowe wbudowane sekcje dla rodziny `default`:

| Sekcja | Cel |
|---|---|
| **Short Description** | Jedno- lub dwuliniowe podsumowanie. Pojawia się na kartach listy i podglądach SEO. |
| **Description** | Pełna treść produktu — można użyć edytora WYSIWYG. |
| **Price** | Cena sprzedaży plus cena kosztu per waluta. |
| **Technical** | Przełącznik statusu — włącza/wyłącza produkt. |
| **Categories** | Przypisz produkt do jednej lub wielu kategorii (w tym kategorii głównej). |
| **Associations** | Linki produktów Related / Up-sell / Cross-sell (zobacz poniżej). |

Każda sekcja pojawia się jako własna karta na stronie edycji. Karty **Short Description** i **Description** zawierają edytor WYSIWYG dla tekstu wzbogaconego. Karta **Price** pokazuje jeden wiersz na skonfigurowaną walutę. Karta **Technical** zawiera zielony przełącznik **Status** — pozostaw go *Enabled*, aby produkt był uważany za aktywny. Karta **Categories** otwiera selektor drzewa; zaznacz każdy węzeł, do którego produkt należy. Wszystkie karty dzielą ten sam przycisk *Save Product* w prawym górnym rogu strony.

### Krok 3 — Dodaj asocjacje

Na dole strony edycji możesz połączyć ten produkt z innymi. Wszystkie trzy sekcje działają tak samo: kliknij **Add**, wyszukaj po SKU, a następnie kliknij **Add Selected Product**.

| Asocjacja | Kiedy używać |
|---|---|
| **Related Products** | Podobne alternatywy — pomaga klientom odkryć substytuty, które mogą również polubić. |
| **Up-Sell Products** | Wersje wyższej klasy — lepszy TV, szybszy laptop, bardziej wytrzymały tablet. |
| **Cross-Sell Products** | Komplementarne elementy — etui ochronne + laptop, adapter + telefon. |

Każda z trzech kart asocjacji ma ten sam układ: przycisk **Add** otwiera selektor wyszukiwania po SKU, zaznaczone produkty pojawiają się jako lista pod spodem z przyciskiem ✕, aby je usunąć, i nie ma limitu na to, ile możesz dodać.

### Krok 4 — Zapisz

Kliknij **Save Product** w prawym górnym rogu strony edycji. Zostajesz przekierowany z powrotem do **Products Data Grid**, gdzie nowy produkt pojawia się jako wiersz z jego SKU, miniaturą obrazu, nazwą, rodziną atrybutów, chipem statusu, typem (*Simple*) i procentem kompletności.

<ImagePopup src="/assets/2.0/images/simple-product/datagrid.png" alt="Datagrid produktów" />

::: tip
Atrybuty obsługujące wartości per kanał pokazują **plakietkę kanału**. Atrybuty obsługujące wartości per lokalizacja pokazują **plakietkę lokalizacji**. Atrybuty obsługujące oba pokazują obie plakietki — są to pola, które odwiedzisz ponownie, gdy przełączysz kanały lub lokalizacje na stronie edycji.
:::

## Praca z Simple Product po utworzeniu

Po utworzeniu Simple Product obsługuje pełny zestaw funkcji produktu UnoPim. Reszta tej strony grupuje je według tego, co próbujesz zrobić.

### Tłumacz wartości między lokalizacjami

UnoPim obsługuje **Product Values Translation** — wartości per lokalizacja dla każdego atrybutu oznaczonego jako specyficzny dla lokalizacji.

<ImagePopup src="/assets/2.0/images/simple-product/product-edit-locale.png" alt="Edycja produktu z przełącznikiem lokalizacji" />

#### Ręczne tłumaczenie

1. Otwórz produkt w **Katalog → Products**.
2. Na górze strony edycji użyj dwóch przełączników:
   - **Channel Switcher** (np. *Default*) — wybiera, którego kanału wartości edytujesz.
   - **Locale Switcher** (np. *English (United States)*) — wybiera lokalizację.
3. Przełącz na docelową lokalizację. Formularz przeładowuje się z wartościami tej lokalizacji. Pola specyficzne dla lokalizacji pokazują plakietkę lokalizacji (np. `EN_US`).
4. Wprowadź przetłumaczone wartości (Name, Description, URL Key, …).
5. Kliknij **Save Product**.
6. Powtórz per lokalizację.

::: tip
Plakietka **DEFAULT** oznacza specyficzny dla kanału. Plakietka lokalizacji (np. `EN_US`) oznacza specyficzny dla lokalizacji. Obie plakietki razem oznaczają, że atrybut obsługuje wartości per kanał **i** per lokalizacja.
:::

#### Automatyczne tłumaczenie z Magic AI

Włącz **Magic AI → Settings → Translation**, a każdy zapis produktu automatycznie tłumaczy pola specyficzne dla lokalizacji na docelowe lokalizacje:

1. Włącz **Enabled**.
2. Ustaw **Source Channel** i **Source Locale** (język, w którym piszesz).
3. Ustaw **Target Channel** i **Target Locales**.
4. Wybierz **Translation Model** — możesz użyć tańszego/szybszego dostawcy.
5. Opcjonalnie włącz **Replace Existing Value**, aby nadpisywać istniejące tłumaczenia przy ponownym uruchomieniu.

Zobacz [Magic AI — Settings](../magic-ai/settings.md) dla pełnego odniesienia pól.

### Sprawdź kompletność

UnoPim oblicza wynik **Product Completeness** per produkt, per kanał, per lokalizacja:

- Wynik jest wyświetlany jako procent (np. 89%).
- Produkty o niskiej kompletności pokazują *"Low completeness, add details to improve"*.
- Produkty prawie kompletne pokazują *"Almost complete, just a few details left"*.
- Dashboard agreguje kompletność per kanał w widżecie **Completeness**.

::: tip
Połącz kompletność z **Magic AI Auto-Enrichment** (Magic AI → Settings → Agentic PIM), aby automatycznie wypełniać brakujące pola i podnosić wynik.
:::

### Przejrzyj historię zmian

Kliknij zakładkę **History** na stronie edycji produktu, aby zobaczyć każdą zmianę. Każdy wpis rejestruje:

- Datę/godzinę zmiany.
- Użytkownika, który ją dokonał.
- Dokładne pola, które zostały zmodyfikowane, z wartościami przed/po.

Kliknij **ikonę oka** na dowolnym wpisie, aby otworzyć widok szczegółowy pokazujący wartości przed i po obok siebie. UnoPim śledzi historię dla **produktów, kategorii, atrybutów, rodzin atrybutów i kanałów** z tym samym UI.

### Duplikuj produkt

Aby utworzyć nowy produkt zaszczepiony z istniejącego:

1. W **Katalog → Products** znajdź wiersz do skopiowania.
2. Kliknij **ikonę Copy** (schowek) w kolumnie Actions.
3. UnoPim tworzy duplikat z nowym SKU.
4. Edytuj kopię, aby ją dostosować.

## Praca z listą produktów

Lista w **Katalog → Products** to miejsce, w którym znajdujesz, filtrujesz, masowo edytujesz i eksportujesz produkty.

### Zarządzaj kolumnami

Kliknij przycisk **Columns**, aby otworzyć modal **Manage columns**.

<ImagePopup src="/assets/2.0/images/simple-product/columns-selector.png" alt="Selektor kolumn" />

| Panel | Zawartość |
|---|---|
| **Available Columns** (lewy) | Każdy atrybut, który może być pokazany jako kolumna — ID, Parent, Created/Updated At, URL Key, Tax Category, Short Description, Description, Price, Cost, Meta Title, Meta Keywords, Meta Description plus każdy niestandardowy atrybut. Wyszukiwanie + paginacja. |
| **Selected Columns** (prawy) | Aktualnie widoczne kolumny. Domyślnie: SKU, Image, Name, Attribute Family, Status, Type, Complete. |

Aby dostosować:

1. Przeciągnij z Available do Selected, aby dodać kolumnę.
2. Przeciągnij w Selected, aby zmienić kolejność.
3. Przeciągnij poza Selected (lub kliknij remove), aby ukryć.
4. Kliknij **Apply**.

### Filtruj produkty

Kliknij **Filter** nad datagrid, aby wysunąć szufladę **Apply Filters** z prawej strony ekranu. Szuflada zawiera stały zestaw wbudowanych pól filtra plus przycisk **Add Filter** dla niestandardowych atrybutów.

**Filtry wbudowane** (zawsze pokazywane):

- **SKU** — dopasowanie tekstowe.
- **Name** — dopasowanie tekstowe.
- **Attribute Family** — lista rozwijana wszystkich skonfigurowanych rodzin.
- **Status** — lista rozwijana Enabled / Disabled.
- **Type** — lista rozwijana Simple / Configurable.

**Add Filter (atrybuty niestandardowe)**

Kliknij **Add Filter** na dole szuflady, aby dołączyć filtr dla dowolnego atrybutu, który ma zaznaczone **Is Filterable** na karcie Configuration (zobacz [Product Attribute → Configuration](../attribute/product-attribute.md#add-attributes)). Tak filtrujesz listę po `color`, `size`, `brand` lub dowolnym innym atrybucie istotnym dla Twojego katalogu:

1. W szufladzie kliknij **Add Filter**.
2. Wybierz atrybut z listy rozwijanej — listowane są tylko atrybuty z **Is Filterable = on**.
3. Wprowadź lub wybierz wartość(-ci) do filtrowania. Kształt wejścia zależy od typu danych atrybutu (wejście tekstowe, lista rozwijana, zakres dat, checkbox itp.).
4. Powtórz **Add Filter**, aby ułożyć więcej filtrów — łączą się z logiką AND.

Kliknij **Save** na dole szuflady, aby zastosować zestaw filtrów. Datagrid przeładowuje się pokazując tylko pasujące wiersze. Aby wyczyścić, otwórz szufladę ponownie i usuń poszczególne chipy filtra lub przeładuj stronę, aby zresetować.

::: tip
Jeśli atrybutu, po którym chcesz filtrować, nie ma na liście rozwijanej Add Filter, przejdź do **Katalog → Attributes**, edytuj atrybut, zaznacz **Is Filterable** w karcie Configuration i zapisz. Pojawia się natychmiast na liście rozwijanej.
:::

### Masowa edycja

UnoPim obsługuje **Edycja zbiorcza** na dowolnym atrybucie wspólnym dla wybranych produktów:

1. Przejdź do **Katalog → Products**.
2. Zaznacz wiersze, które chcesz edytować.
3. Otwórz listę rozwijaną **Bulk Actions**.
4. Wybierz **Edit** i wybierz atrybut.
5. Wprowadź nową wartość i zastosuj.

#### Masowe włączanie / wyłączanie

1. Wybierz wiele produktów.
2. Na pasku akcji masowej wybierz **Enable** lub **Disable**.

#### Masowe usuwanie

1. Wybierz produkty.
2. Kliknij **Delete**.
3. Potwierdź — usunięcie jest trwałe.

### Szybki eksport

Eksportuj wybrane (lub wszystkie) produkty bezpośrednio z listy:

1. Wybierz produkty.
2. Kliknij **Quick Export** w prawym górnym rogu, obok **Create Product**.
3. Wybierz **CSV**, **XLS** lub **XLSX** z selektora formatów.
4. UnoPim generuje plik w tle i pobiera go do Twojej przeglądarki po zakończeniu przetwarzania. Możesz obserwować postęp zadania na stronie **Śledzenie zadań**, gdy czekasz.

Dla zaplanowanych lub przefiltrowanych eksportów użyj pełnego workflow **[Eksport](../data-transfer/export.md)** w Transferze danych.

## Powiązane materiały

- **[Configurable Product](./configurable.md)** — kiedy używać wariantów zamiast pojedynczego Simple SKU.
- **[Attribute Family](../attribute/attribute-family.md)** — kontroluje, jakie pola pojawiają się na Simple Product.
- **[Magic AI — Settings](../magic-ai/settings.md)** — skonfiguruj auto-tłumaczenie i auto-wzbogacanie dla produktów.
- **[AI Agent Chat](../ai-agent/ai-agent-chat.md)** — twórz, aktualizuj i masowo edytuj Simple Products w języku naturalnym.
