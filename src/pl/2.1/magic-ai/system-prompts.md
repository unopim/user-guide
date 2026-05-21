# Magic AI — Prompty systemowe

> **Pasek boczny:** Magic AI → **Prompty systemowe**
> **URL:** `/admin/magic-ai/system-prompts`

Strona **Prompty systemowe** kontroluje **osobowość** AI — głos, ton i parametry generowania, które znajdują się pod każdym żądaniem treści w UnoPim. Tylko jeden System Prompt jest aktywny jednocześnie, więc cały katalog zachowuje spójny głos.

## Czym jest System Prompt?

*System Prompt* to preambuła, którą Magic AI dodaje przed każdym promptem skierowanym do użytkownika przed wysłaniem żądania do modelu. Ustawia:

- **Tone** — przyjazny vs. formalny, zwięzły vs. bogaty, autorytatywny vs. swobodny.
- **Temperature** — jak kreatywne lub deterministyczne jest wyjście (0.0 = zwięzłe i powtarzalne, 1.0 = zróżnicowane i pomysłowe).
- **Max Tokens** — jak długa może być odpowiedź.

Jeśli [**Prompt**](./prompts.md) mówi, *co* napisać dla konkretnego pola (*"write a product description mentioning `@name` and `@color`"*), **System Prompt** mówi, *jak* powinno to brzmieć — a to "jak" stosuje się do każdej treści, którą system produkuje.

## Co robi ta strona?

- Listuje 10 predefiniowanych System Prompts dostarczonych z UnoPim plus dowolne niestandardowe, które utworzysz.
- Pozwala **tworzyć**, **edytować**, **włączać/wyłączać** i **usuwać** System Prompts.
- Wymusza, że tylko jeden System Prompt jest aktywny jednocześnie — włączenie nowego automatycznie wyłącza poprzedni.

<ImagePopup src="/assets/2.1/images/magic-ai/system-prompts.png" alt="Prompty systemowe" />

## Gdzie aktywny System Prompt jest stosowany
Każde żądanie AI w UnoPim przepływa przez zunifikowany pipeline, w którym aktywny System Prompt jest dodawany jako warstwa osobowości.

Ponieważ aktywny System Prompt stosuje się do **każdej** funkcji AI — ikon różdżki, automatycznego tłumaczenia, auto-wzbogacania i AI Agent — przełączenie go natychmiast zmienia głos każdego wyjścia AI w całym katalogu.

## Datagrid Promptów systemowych

| Kolumna | Opis |
|--------|-------------|
| **Title** | Nazwa system promptu. |
| **Tone** | Ton konwersacyjny (np. Confident, Vivid, Brief). |
| **Max Tokens** | Maksymalna liczba tokenów dla odpowiedzi AI. |
| **Temperature** | Poziom kreatywności (niższy = bardziej skoncentrowany, wyższy = bardziej kreatywny). |
| **Status** | Włączone lub Wyłączone. |
| **Created At** | Data utworzenia system promptu. |
| **Updated At** | Data ostatniej modyfikacji system promptu. |
| **Actions** | Edit (ikona ołówka), Delete (ikona kosza). |

## Predefiniowane Prompty systemowe

UnoPim jest dostarczany z 10 predefiniowanymi Promptami systemowymi. Tylko jeden może być włączony jednocześnie.

| Tytuł | Ton | Temperature | Uwagi |
|-------|------|-------------|-------|
| Authoritative Guide | Confident, assertive, instructional | 0.65 | |
| Descriptive Storyteller | Vivid, rich, engaging | 0.9 | |
| Concise Responder | Brief, to-the-point | 0.5 | |
| Technical Expert | Precise, analytical | 0.6 | |
| Casual Conversationalist | Informal, relaxed | 0.75 | |
| Motivational Coach | Energetic, encouraging | 0.85 | |
| Empathetic Listener | Warm, understanding | 0.6 | |
| Witty Commentator | Clever, humorous | 0.9 | |
| Professional Advisor | Formal, respectful | 0.65 | |
| Friendly Assistant | Friendly, helpful, casual | 0.7 | Włączony domyślnie |

## Tworzenie System Prompt

Kliknij przycisk **Create System Prompt**. Skonfiguruj:

- **Title** — Nazwa, która pojawia się w datagrid (np. *"Luxury Brand Voice"*).
- **Tone description** — Opis głosu w prostym języku. Model czyta to w czasie żądania, więc bądź konkretny: *"Write in an understated, elegant tone. Use concise sentences. Avoid marketing hyperbole."*
- **Max Tokens** — Ogranicza długość odpowiedzi. Niższe wartości produkują krótsze, tańsze wyjście; wyższe wartości dają modelowi więcej miejsca.
- **Temperature** — 0.0 do 1.0. Niskie wartości (0.3–0.5) są najlepsze dla niezawodnego, powtarzalnego wyjścia; wysokie wartości (0.8–1.0) dodają różnorodność i polot.
- **Status** — Włączenie tego automatycznie wyłącza aktualnie aktywny System Prompt.

## Wybieranie temperatury

| Temperature | Najlepsza dla |
|---|---|
| **0.0 – 0.4** | Specyfikacje techniczne, pola SEO meta, treść referencyjna — gdzie powtarzalność ma znaczenie. |
| **0.5 – 0.7** | Ogólne opisy produktów, treść kategorii, codzienna treść marketingowa. |
| **0.8 – 1.0** | Treść stylu życia, opowiadanie, treść w stylu bloga — gdzie różnorodność i kreatywność błyszczą. |

::: tip
Tylko jeden System Prompt może być aktywny jednocześnie. Włączenie nowego System Prompt automatycznie wyłącza poprzednio aktywny. Wybierz osobowość, która pasuje do tonu, który chcesz w całym katalogu — przełączanie w trakcie sprawi, że starsza i nowsza treść będą wydawać się niespójne.
:::

## Prompty vs. Prompty systemowe

| | Prompt | Prompt systemowy |
|---|---|---|
| **Zakres** | Per pole / per cel | Globalnie w całym systemie |
| **Mówi** | *Co* napisać | *Jak* napisać |
| **Ile aktywnych** | Tyle ile utworzyłeś | Dokładnie jeden |
| **Placeholdery** | Tak (`@attribute_code`) | Nie — pisane jako proste instrukcje |
| **Typowa częstotliwość zmian** | Często — dostrajane per atrybut, per przypadek użycia | Rzadko — powiązane z głosem marki |

Zobacz **[Prompts](./prompts.md)** dla warstwy instrukcji per-pole, która łączy się z aktywnym System Prompt w czasie generowania.
