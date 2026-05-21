# Magic AI — Prompts

> **Pasek boczny:** Magic AI → **Prompts**
> **URL:** `/admin/magic-ai/prompts`

Strona **Prompts** to miejsce, w którym zarządzasz **szablonami instrukcji**, które Magic AI wysyła do modelu z każdym żądaniem. Dobrze napisany prompt to to, co stanowi różnicę między ogólnym wypełniaczem AI a treścią, która pasuje do Twojej marki i katalogu.

## Czym jest Prompt?

*Prompt* to instrukcja, która mówi AI, *co* wyprodukować dla konkretnego pola. To krótki kawałek tekstu z opcjonalnymi **placeholderami** — tokenami takimi jak `@name`, `@color`, `@material` — które Magic AI zastępuje rzeczywistymi wartościami z encji w czasie generowania.

Przykładowy prompt:

> `Write a detailed product description for @name highlighting its features, benefits, and @color variant.`

Gdy ten prompt zostanie uruchomiony przeciwko produktowi o nazwie *Air Max 90* z `color = Blue`, staje się:

> `Write a detailed product description for Air Max 90 highlighting its features, benefits, and Blue variant.`

Każdy prompt jest powiązany z dwoma osiami:

- **Entity Type** — jakiego typu rekordu dotyczy: `product` lub `category`.
- **Purpose** — co produkuje: `Text Generation` lub `Image Generation`.

Magic AI automatycznie wybiera pasujący prompt, gdy klikasz ikonę różdżki, uruchamiasz auto-wzbogacanie lub prosisz AI Agent o wygenerowanie treści.

## Co robi ta strona?

- Listuje każdy szablon promptu dostępny w systemie.
- Pozwala **tworzyć**, **edytować** i **usuwać** prompty.
- Pokazuje, do której encji i celu służy każdy prompt, dzięki czemu możesz zobaczyć pokrycie na pierwszy rzut oka.

<ImagePopup src="/assets/2.1/images/magic-ai/prompts.png" alt="Prompty" />

## Jak prompty są używane w czasie generowania

```
User clicks wand icon on a field
           │
           ▼
Magic AI picks the prompt that matches
   entity type (product/category) + purpose (text/image)
           │
           ▼
`@attribute_code` placeholders are replaced
   with the entity's real attribute values
           │
           ▼
Active System Prompt (tone + temperature) is prepended
           │
           ▼
Request sent to the Platform + Model
   configured on Magic AI → Settings
           │
           ▼
Generated content appears in the field
```

## Datagrid promptów

| Kolumna | Opis |
|--------|-------------|
| **Title** | Nazwa promptu. |
| **Prompt** | Tekst promptu z placeholderami. |
| **Entity Type** | Encja, do której odnosi się prompt (`product` lub `category`). |
| **Purpose** | Czy prompt jest dla `Text Generation` czy `Image Generation`. |
| **Created At** | Data utworzenia promptu. |
| **Updated At** | Data ostatniej modyfikacji promptu. |
| **Actions** | Edit (ikona ołówka), Delete (ikona kosza). |

## Tworzenie promptu

Kliknij przycisk **Create Prompt**. Wypełnij:

- **Title** — Jak pojawia się na liście. Użyj czegoś rozpoznawalnego jak *"Product Description — Long Form"*.
- **Prompt** — Tekst instrukcji. Użyj placeholderów `@attribute_code` dla każdej wartości, którą chcesz pobrać z encji. Możesz odwoływać się do dowolnego kodu atrybutu zdefiniowanego w rodzinie atrybutów encji.
- **Entity Type** — `product` lub `category`.
- **Purpose** — `Text Generation` lub `Image Generation`.

### Reguły placeholderów

- Placeholdery mają prefiks `@` i używają **kodu atrybutu**, nie etykiety. Na przykład atrybut "Product Color" z kodem `color` jest odwoływany jako `@color`.
- Jeśli atrybut nie ma wartości na encji, placeholder jest zastępowany pustym ciągiem — więc pisz prompty defensywnie (np. `highlighting its @color variant if specified`).
- Możesz łączyć wiele placeholderów w jednym prompcie; Magic AI rozszerza je wszystkie w jednym przebiegu.

## Przykładowe prompty

Oto przykłady promptów, które są dostarczane z UnoPim:

| Tytuł | Prompt | Typ encji | Cel |
|-------|--------|-------------|---------|
| AI Product Description | Write a detailed product description for @name highlighting its features, benefits and @color variant. | product | Text Generation |
| AI Product Image | Generate a professional product photo of @name on a clean white background with studio lighting. | product | Image Generation |
| AI Category Description | Write a compelling category description for @name that helps customers browse products. | category | Text Generation |

::: tip
Używaj kodów atrybutów jako placeholderów (z prefiksem `@`) w swoich promptach. Magic AI zastępuje je rzeczywistymi wartościami z przetwarzanego produktu lub kategorii.
:::

## Prompty vs. Prompty systemowe — jaka jest różnica?

- **Prompt** mówi, *co* napisać dla konkretnego pola ("write a product description that mentions `@name` and `@color`").
- **Prompt systemowy** mówi, *jak* pisać — głos, ton, kreatywność, długość. Obowiązuje globalnie, przed każdym promptem.

Zobacz stronę **[Prompty systemowe](./system-prompts.md)** dla warstwy osobowości, która znajduje się pod każdym promptem.
