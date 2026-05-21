# Atrybut produktu

Atrybut to specyfikacja lub cecha produktu — Color, Size i Pattern to wszystkie atrybuty T-shirta. Możesz utworzyć dowolną liczbę atrybutów na produkt; pełny zestaw atrybutów nadaje każdemu produktowi kształt i wyszukiwalność.

### Jak utworzyć atrybut produktu w UnoPim

Otwórz panel administracyjny i wykonaj poniższe kroki.

### Dodawanie atrybutów

**Krok 1** — Kliknij **Katalog → Attributes → Create Attributes**.

<ImagePopup src="/assets/2.1/images/attributes/createAttribute.png" alt="Utwórz atrybut" />

**Krok 2** — Wprowadź **Code** i **Data Type** w sekcji ogólnej.

<ImagePopup src="/assets/2.1/images/attributes/general.png" alt="Sekcja ogólna" />

**Uwaga** — Walidacja **Is Unique** jest dostępna tylko dla typów **Text, Datetime & Date**.

**Krok 3** — Wprowadź **Label** dla swojego atrybutu.

<ImagePopup src="/assets/2.1/images/attributes/label.png" alt="Sekcja etykiety" />

**Krok 4** — Wybierz **Validation**, jeśli chcesz, aby atrybut był wymagany lub unikalny.

**Uwaga** — Walidacja **Is Unique** jest dostępna tylko dla typów **Text, Datetime & Date**.

<ImagePopup src="/assets/2.1/images/attributes/validation.png" alt="Sekcja walidacji" />

**Krok 5** — Otwórz kartę **Configuration** po prawej stronie formularza i zaznacz odpowiednie opcje:

| Opcja | Co robi |
|---|---|
| **Value Per Locale** | Atrybut przechowuje osobną wartość dla każdej lokalizacji. Przełączaj lokalizację na stronie edycji produktu, aby wprowadzić każde tłumaczenie. |
| **Value Per Channel** | Atrybut przechowuje osobną wartość dla każdego kanału. Przydatne, gdy to samo pole różni się między sklepami (np. cena lub opis per kanał). |
| **Is Filterable** | Sprawia, że atrybut jest dostępny w szufladzie **Apply Filters** na liście produktów (zobacz [Filter products](../products/simple.md#filter-products)). Zaznacz to dla każdego atrybutu, którego chcesz używać jako filtra — `size`, `color`, `brand` itp. |

<ImagePopup src="/assets/2.1/images/attributes/configuration.png" alt="Sekcja konfiguracji" />

::: tip
Przełączenie **Is Filterable** na istniejącym atrybucie natychmiast włącza dla niego opcję **Add Filter** na liście produktów — bez potrzeby reindeksowania.
:::

Kliknij **Save Attribute**. Nowy atrybut pojawia się w datagrid.

<ImagePopup src="/assets/2.1/images/attributes/output.png" alt="Datagrid atrybutów" />

Następnie przejdź do **Katalog → Attribute Families**, otwórz rodzinę, do której chcesz dodać atrybut, i przeciągnij atrybut z listy nieprzypisanych do żądanej grupy.

<ImagePopup src="/assets/2.1/images/attributes/family.png" alt="Przypisanie rodziny atrybutów" />

Zapisz rodzinę, a następnie otwórz dowolny produkt w tej rodzinie — atrybut pojawi się teraz w formularzu edycji.

<ImagePopup src="/assets/2.1/images/attributes/product.png" alt="Atrybut pokazany na stronie edycji produktu" />

### Wizualne omówienie typów danych produktów UnoPim

**1) Text** — Pole na jedną linię tekstu. Typowe dla krótkich wejść, takich jak nazwy lub klucze URL.

<ImagePopup src="/assets/2.1/images/attributes/text.png" alt="Atrybut tekstowy" />

**2) Textarea** — Wielowierszowe pole tekstowe. Używane dla dłuższych treści, takich jak opisy produktów lub komentarze. Możesz włączyć/wyłączyć edytor WYSIWYG.

<ImagePopup src="/assets/2.1/images/attributes/textarea.png" alt="Atrybut Textarea" />

**3) Boolean** — Przełącznik prawda / fałsz. Używany do wyborów tak/nie lub włącz/wyłącz.

<ImagePopup src="/assets/2.1/images/attributes/boolean.png" alt="Atrybut Boolean" />

**4) Select** — Lista rozwijana pozwalająca na jeden wybór z predefiniowanej listy.

<ImagePopup src="/assets/2.1/images/attributes/select.png" alt="Atrybut Select" />

**5) Multiselect** — Jak Select, ale pozwala na wielokrotne wybory z listy.

<ImagePopup src="/assets/2.1/images/attributes/multiselect.png" alt="Atrybut Multiselect" />

**6) Datetime** — Wybierz konkretną datę i godzinę. Używane do harmonogramów i znaczników czasowych.

<ImagePopup src="/assets/2.1/images/attributes/datetime.png" alt="Atrybut Datetime" />

**7) Date** — Wybierz tylko datę (bez komponentu czasu).

<ImagePopup src="/assets/2.1/images/attributes/date.png" alt="Atrybut Date" />

**8) Gallery** — Zarządza wieloma obrazami **i wideo** na produkt. W v1.0.0 UnoPim dodał obsługę wideo do galerii:

1) Edytuj obrazy w galerii bez zmiany ich pozycji.
2) Przeciągnij i upuść, aby zmienić kolejność obrazów.
3) **Obsługa wideo** — przesyłaj i zarządzaj plikami wideo obok obrazów.

<ImagePopup src="/assets/2.1/images/attributes/gallery.png" alt="Atrybut Gallery z wideo" />

::: tip
Obsługa wideo w atrybucie galerii została wprowadzona w v1.0.0. Możesz przesyłać typowe formaty wideo bezpośrednio do galerii produktu.
:::

**9) Image** — Prześlij lub wyświetl pojedynczy obraz.

<ImagePopup src="/assets/2.1/images/attributes/image.png" alt="Atrybut Image" />

**10) File** — Prześlij dowolne pliki (dokumenty, obrazy itp.).

<ImagePopup src="/assets/2.1/images/attributes/file.png" alt="Atrybut File" />

**11) Checkbox** — Przełączalny checkbox dla binarnych wyborów (umowy, preferencje).

<ImagePopup src="/assets/2.1/images/attributes/checkbox.png" alt="Atrybut Checkbox" />

**12) Price** — Pole cenowe oprócz predefiniowanego atrybutu **Prices**.

<ImagePopup src="/assets/2.1/images/attributes/price.png" alt="Atrybut Price" />

## Swatch Types

UnoPim v2.0 wprowadza **Swatch Types** dla atrybutów **Select** i **Multiselect**. Swatche dają opcjom wizualną reprezentację, ułatwiając ich identyfikację i wybór.

### Typy swatchy

| Swatch Type | Opis |
|-------------|-------------|
| **Dropdown** | Standardowy wybór z rozwijanej listy (domyślny) |
| **Color** | Wyświetla kolorowe swatche dla każdej opcji |
| **Image** | Wyświetla miniatury obrazów dla każdej opcji |
| **Text** | Wyświetla etykiety tekstowe jako wizualne swatche |

### Jak włączyć Swatch Types

1. Utwórz lub edytuj atrybut **Select** lub **Multiselect**.
2. W konfiguracji atrybutu wybierz **Swatch Type** z rozwijanej listy.
3. Dla każdej opcji atrybutu skonfiguruj wartość swatcha:
   - **Color swatch** — wprowadź kod koloru hex (np. `#FF0000` dla czerwonego).
   - **Image swatch** — prześlij mały obraz dla każdej opcji.
   - **Text swatch** — wprowadź tekst wyświetlany dla każdej opcji.
4. Kliknij **Save Attribute**.

::: tip
Swatch types są szczególnie przydatne dla atrybutów takich jak Color, Material lub Pattern, gdzie wizualna reprezentacja pomaga użytkownikom szybko wybierać opcje.
:::

Wykonując powyższe kroki, możesz łatwo utworzyć **Atrybut produktu** w UnoPim.
