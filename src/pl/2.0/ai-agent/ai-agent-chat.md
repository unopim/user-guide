# AI Agent Chat

**AI Agent Chat** to konwersacyjny interfejs użytkownika dla Agentic PIM. Z jednego okna czatu możesz zarządzać produktami, kategoriami, atrybutami, jakością danych i operacjami masowymi — po prostu opisując, czego potrzebujesz.

## Co robi AI Agent Chat?

Panel czatu to pojedynczy punkt wejścia do **ponad 30 narzędzi PIM**. Gdy wpisujesz wiadomość, agent:

- Interpretuje Twoją intencję.
- Wybiera jedno lub więcej narzędzi do wywołania (utwórz produkt, wyszukaj, masowo edytuj, generuj treść, zarządzaj asocjacjami itp.).
- Uruchamia narzędzia na rzeczywistych danych UnoPim w ramach Twoich uprawnień ACL.
- Strumieniuje wyniki z powrotem do czatu w czasie rzeczywistym.

Wszystko, co możesz zrobić z UI administratora, możesz zrobić, prosząc o to w czacie — a agent może połączyć kilka kroków w jedno żądanie, więc zadania, które wymagałyby wielu kliknięć, kondensują się do pojedynczej instrukcji.

## Jak to działa?

```
You type a message
        │
        ▼
Agent reads: message + session history + remembered facts + active System Prompt
        │
        ▼
Agent picks a tool (or plans a chain of tools)
        │
        ▼
Each tool runs against UnoPim data (gated by your ACL permissions)
        │
        ▼
Risky / low-confidence changes → Approval Queue
Safe changes → applied immediately
        │
        ▼
Response streams back into chat over SSE
```

Platforma i model używane dla tej pętli rozumowania są konfigurowane w **Magic AI → Settings → Agentic PIM**. Osobowość (ton, temperatura, maksymalne tokeny) pochodzi z aktywnego **System Prompt**.

## Otwieranie AI Agent Chat

Kliknij pływającą **ikonę gwiazdki** w prawym dolnym rogu dowolnej strony administracyjnej. Panel czatu wysuwa się z prawej krawędzi z nagłówkiem **"Agenting PIM — AI-powered operations"**.

 <ImagePopup src="/assets/2.0/images/ai-agent/ai-agent-chat.png" alt="AI Agent Chat" />

Koło zębate ⚙ w nagłówku panelu przenosi do `/admin/ai-agent/settings` (które rozwiązuje się do **Magic AI → Settings**), gdzie możesz skonfigurować platformy, modele i budżety.

Panel ma trzy zakładki:
- **Capabilities** — Przeglądaj ponad 30 narzędzi, które agent może wywołać.
- **Chat** — Interfejs konwersacyjny. Gdy jest pusty, pokazuje *"How can I help with your catalog?"* pod ikoną gwiazdki i nagłówkiem **General Chat**.
- **Sessions** — Twoje poprzednie konwersacje. Numeryczna odznaka na zakładce pokazuje, ile sesji jest nieprzeczytanych.

 <ImagePopup src="/assets/2.0/images/ai-agent/ai-agent-chat-tab.png" alt="Zakładka AI Agent Chat" />

Po otwarciu panel czatu wysuwa się z prawej strony ekranu. Możesz od razu zacząć wpisywać swoje żądanie.

## Zakładka Capabilities

Zakładka Capabilities listuje każde narzędzie, które agent może wywołać. Każde narzędzie reprezentuje konkretną operację PIM, którą możesz wyzwolić w języku naturalnym — nie wywołujesz narzędzi po nazwie, opisujesz, czego chcesz, a agent wybiera odpowiednie.

| # | Narzędzie | Co robi |
|---|------|-------------|
| 1 | **Create from Image** | Prześlij zdjęcia, aby automatycznie utworzyć produkty |
| 2 | **Update Products** | Aktualizuj atrybuty/status po SKU |
| 3 | **Search Products** | Znajdź produkty po SKU, nazwie lub statusie |
| 4 | **Find Similar** | Znajdź podobne produkty przy użyciu AI |
| 5 | **Generate Content** | Generowane przez AI nazwa, opis i SEO |
| 6 | **Generate Image** | Twórz obrazy produktów z tekstu |
| 7 | **Edit Product Image** | Usuwanie tła, ulepszanie i retusz |
| 8 | **Assign Categories** | Przypisuj ścieżki kategorii do produktów |
| 9 | **List Attributes** | Wyświetl atrybuty rodzin i opcje |
| 10 | **Export Products** | Generuj eksport CSV/XLSX |
| 11 | **Bulk Import CSV** | Prześlij CSV/XLSX do masowej aktualizacji |
| 12 | **Delete Products** | Usuwaj produkty po liście SKU |
| 13 | **Create Category** | Dodawaj nowe kategorie do katalogu |
| 14 | **Category Tree** | Wyświetl pełną hierarchię kategorii |
| 15 | **Create Attribute** | Dodawaj nowe atrybuty produktów |
| 16 | **Manage Options** | Dodawaj lub listuj opcje atrybutów |
| 17 | **Attribute Families** | Listuj, twórz lub inspekcjonuj rodziny |
| 18 | **Edycja zbiorcza** | Masowa aktualizacja produktów według reguł |
| 19 | **Catalog Summary** | Statystyki, liczby i ostatnia aktywność |
| 20 | **Channels** | Wyświetl kanały, lokalizacje i waluty |
| 21 | **Users** | Wyświetl użytkowników administratorów i szczegóły |
| 22 | **Roles** | Wyświetl role i uprawnienia |
| 23 | **Ask Anything** | Wolnoformowy asystent PIM |
| 24 | **Manage Associations** | Dodawaj, usuwaj lub listuj produkty powiązane/up-sell/cross-sell w języku naturalnym *(v2.0.x)* |

::: tip
Każde narzędzie respektuje Twoje uprawnienia ACL. Jeśli Twoja rola administratora nie pozwala na konkretną operację, odpowiednie narzędzie po cichu się nie wykona — agent nigdy nie może obejść Twojej roli.
:::

## Układ interfejsu czatu

Interfejs czatu składa się z następujących obszarów:

- **Obszar wiadomości** — Wyświetla historię konwersacji między Tobą a AI Agent, w tym odpowiedzi, wyjścia narzędzi i aktualizacje statusu.
- **Pole wprowadzania** — Wejście tekstowe na dole, gdzie wpisujesz polecenia lub pytania. Wskazówka klawiaturowa: **Enter**, aby wysłać, **Shift+Enter** dla nowej linii.
- **Ikona załącznika (spinacz)** — Dołącz plik (obraz, CSV) do wiadomości.
- **Lista rozwijana Platform** — Wybierz, która skonfigurowana platforma AI obsłuży tę konkretną wiadomość (zobacz poniżej).
- **Lista rozwijana Model** — Wybierz, który model na tej platformie obsłuży tę konkretną wiadomość.
- **Przycisk Send** — Przesyła Twoją wiadomość do AI Agent do przetworzenia.

### Wybieranie platformy lub modelu dla pojedynczej wiadomości

Pasek wejściowy czatu pozwala nadpisać domyślną platformę i model **per wiadomość**, bez zmiany globalnych domyślnych w **Magic AI → Settings**.

| Lista rozwijana | Co pokazuje | Źródło |
|---|---|---|
| **Platform** | Każdą włączoną platformę (np. *OpenAI (Openai)*). | **Magic AI → Platforms** |
| **Model** | Modele włączone na wybranej platformie (np. *gpt-5.4*). | Modele zaznaczone na tej platformie |

Nadpisanie trwa przez jedną wiadomość; następna wiadomość wraca do tego, co aktualnie pokazują listy rozwijane.

**Kiedy to jest przydatne:**

- **Kontrola kosztów** — kieruj proste wyszukiwanie do taniego, szybkiego modelu, zachowując model premium do wzbogacania.
- **Eksperymenty z jakością** — wyślij ten sam prompt dwa razy z różnymi modelami i porównaj.
- **Izolacja dostawcy** — kieruj wrażliwe prompty do samodzielnie hostowanej platformy Ollama bez dotykania globalnego ustawienia.

Jeśli chcesz, aby zmiana utrzymała się dla każdego użytkownika i każdej funkcji, edytuj zamiast tego **Magic AI → Settings → Agentic PIM**.

## Typy poleceń

Poniżej znajdują się główne kategorie rzeczy, o które możesz poprosić agenta. Ponieważ agent wybiera narzędzia na podstawie Twojej intencji, nie musisz pamiętać nazw narzędzi — po prostu opisz pożądany wynik.

### Operacje na produktach

Twórz, aktualizuj, wyszukuj i masowo edytuj produkty.

**Przykładowe prompty:**
- "Create a simple product with SKU TSHIRT-001 and name Blue T-Shirt"
- "Update the price of product SKU LAPTOP-PRO to 999.99"
- "Search for all products in the Footwear category"
- "Bulk update status to enabled for all products with SKU starting with SHOE"

### Zarządzanie kategoriami

Zarządzaj drzewem kategorii.

**Przykładowe prompty:**
- "Show me all root categories"
- "List products assigned to the Electronics category"

### Raporty jakości danych

Skanuj swój katalog pod kątem brakujących lub niekompletnych danych i otrzymuj ustrukturyzowane raporty, na podstawie których możesz działać.

**Przykładowe prompty:**
- "Run a data quality scan on all products in the Clothing category"
- "Which products are missing a description?"
- "Show me products with completeness score below 50%"

### Weryfikacja produktów i ocena jakości

Weryfikuj poszczególne produkty względem kryteriów jakości.

**Przykładowe prompty:**
- "Check the completeness of product SKU JACKET-100"
- "Verify data quality for all products in the Default family"

### Auto-Enrichment

Pozwól agentowi uzupełnić brakującą treść — opisy, pola SEO itp. Agent używa tego, co produkt już ma (nazwa, kategoria, atrybuty), aby wygenerować pasującą treść.

**Przykładowe prompty:**
- "Generate a short description for product SKU SNEAKER-200"
- "Auto-fill missing meta descriptions for all products in the Accessories category"
- "Enrich the SEO fields for product SKU WATCH-050"

::: tip
Auto-enrichment działa najlepiej, gdy produkt ma już podstawowe informacje, takie jak nazwa i kategoria. Agent opiera się na tym kontekście, aby wygenerować spójną treść zgodną z marką.
:::

### Planowanie zadań

Dla pracy wieloetapowej agent buduje plan, pokazuje go Tobie i wykonuje krok po kroku.

**Przykładowe prompty:**
- "Plan and execute: update all products in the Summer collection to have a 20% discount and a new promotional description"
- "Create a task plan to review and enrich all products with missing images"

### Transformacje masowe

Stosuj transformacje (append, prepend, replace) na wielu SKU naraz.

**Przykładowe prompty:**
- "Bulk update all products with status disabled to enabled"
- "Change the category of all products with SKU prefix LEGACY to the Archive category"

### Zarządzaj asocjacjami

Wprowadzone w **v2.0.x** narzędzie **Manage Associations** pozwala dodawać, usuwać lub listować produkty powiązane, up-sells i cross-sells poprzez konwersację — nie trzeba otwierać każdego produktu osobno.

**Przykładowe prompty:**
- "Add SKU BELT-100 as a cross-sell on SKU JEANS-200"
- "Remove all up-sell products from SKU PHONE-CASE-BLACK"
- "List cross-sell products linked to SKU LAPTOP-PRO"
- "Mirror the related products of SKU SHIRT-001 onto SKU SHIRT-002"

### System pamięci agenta

Agent ma małą pamięć długoterminową, która trwa między sesjami. Używa dwóch wewnętrznych narzędzi:

- **RememberFact** — Przechowuje fakt lub preferencję, którą każesz mu zapamiętać.
- **RecallMemory** — Pobiera zapamiętane fakty, gdy są istotne dla bieżącego żądania.

**Przykładowe prompty:**
- "Remember that our standard product description format starts with the brand name"
- "Recall what I told you about our naming convention"

### Pętla zwrotna treści

Gdy agent generuje treść, możesz go skierować informacją zwrotną, a dostosuje przyszłe wyjścia w tej samej sesji — a jeśli jest wystarczająco mocna, zapamięta preferencję na następny raz.

**Przykładowe prompty:**
- "That description is too long, make it shorter and more direct"
- "I prefer a formal tone for product descriptions"
- "Rewrite that but focus more on the material and durability"

## Odpowiedzi strumieniowane w czasie rzeczywistym

Odpowiedzi strumieniują się do czatu w czasie rzeczywistym przy użyciu **Server-Sent Events (SSE)**. Widzisz rozumowanie agenta, wywołania narzędzi i wyniki pojawiające się progresywnie zamiast czekać na całą odpowiedź. Dla długich operacji (np. masowej aktualizacji 200 produktów) pozwala to oglądać postęp na żywo.

## Zakładka Sessions

Zakładka Sessions listuje każdy poprzedni czat. Każdy wpis pokazuje tytuł sesji, liczbę wiadomości i datę ostatniej aktywności.

 <ImagePopup src="/assets/2.0/images/ai-agent/ai-agent-sessions.png" alt="Sesje AI Agent" />

### Zarządzanie sesjami

- **+ New Session** — Rozpocznij czystą konwersację bez wcześniejszego kontekstu. Przydatne, gdy przełączasz się na inne zadanie.
- **Delete session** — Przycisk ikony kosza trwale usuwa sesję. Nieodwracalne.
- **Resume a session** — Kliknij dowolny wpis, aby go ponownie otworzyć. Pełna historia i kontekst są przywracane, więc agent kontynuuje dokładnie tam, gdzie skończyliście.

### Trwałość sesji

Sesje są oparte na bazie danych, co oznacza:

- **Odświeżenia strony** nie czyszczą Twojej konwersacji.
- **Sesje przeglądarki** są zachowywane — zamknij zakładkę, wróć później, wznów.
- **Kontekst jest zachowywany w ramach sesji**, więc agent pamięta, co omawialiście wcześniej w tym samym wątku ("apply the same change to SKU B").
- Sesje trwają **między logowaniami**, więc Twoja historia jest zawsze dostępna, gdy zalogujesz się ponownie.

::: tip
Rozpocznij nową sesję, gdy przełączasz się na inne zadanie. Skoncentrowane sesje produkują lepsze wybory narzędzi, ponieważ agent nie żongluje niepowiązanym kontekstem.
:::
