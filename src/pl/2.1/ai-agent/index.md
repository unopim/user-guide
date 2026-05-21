# AI Agent (Agentic PIM)

**AI Agent** — nazywany również **Agentic PIM** — to konwersacyjny asystent wbudowany bezpośrednio w UnoPim. Zamiast klikać przez menu i formularze, mówisz agentowi w prostym języku, czego chcesz ("utwórz SKU T-shirta z tymi atrybutami", "znajdź każdy produkt bez opisu", "skopiuj up-sells z SKU A na SKU B"), a on wykonuje zadanie za Ciebie, wywołując pod spodem rzeczywiste operacje PIM.

## Czym jest AI Agent?

AI Agent **różni się od ikon różdżki w Magic AI**. Oto różnica:

| | Magic AI (ikony różdżki) | AI Agent (Agentic PIM) |
|---|---|---|
| **Gdzie go wyzwalasz** | Klikasz różdżkę w konkretnym polu | Przycisk czatu w prawym dolnym rogu dowolnej strony |
| **Interakcja** | Jednorazowa: kliknij, generuj, zaakceptuj | Konwersacja: wieloturowa, z pamięcią |
| **Zakres** | Jedno pole w jednej encji | Cokolwiek w katalogu — produkty, kategorie, atrybuty, użytkownicy, role, kanały |
| **Jak działa** | Tworzy treść dla pola | Wywołuje rzeczywiste narzędzia PIM (create, update, search, import, export, delete, bulk-edit, …) |
| **Wynik** | Tekst lub obraz | Wyniki wywołań narzędzi, strumieniowane z powrotem do czatu |

Krótko mówiąc: **Magic AI pisze treść. AI Agent podejmuje działania.**

## Jak działa AI Agent?
Każda wiadomość czatu przepływa przez **Pipeline Agentic PIM**, 5-etapową pętlę zapewniającą bezpieczeństwo, precyzję i przejrzystość:

<ImagePopup src="/assets/2.1/images/ai-agent/agentic-pim-pipeline.png" alt="Pipeline Agentic PIM — Workflow 5-etapowy" />

Ponieważ agent ma rzeczywiste narzędzia i rzeczywiste dane, jest potężniejszy niż zwykły czat LLM — ale też bardziej brzemienny w skutkach. Kolejka zatwierdzeń, budżet tokenów, próg pewności i kontrole ACL istnieją, aby utrzymać tę moc pod Państwa kontrolą.


## Kluczowe możliwości

### Zarządzanie produktami
Twórz, aktualizuj, wyszukuj, kopiuj, usuwaj i masowo edytuj produkty bez opuszczania czatu. Agent równie dobrze obsługuje pojedyncze poprawki produktów, jak i masowe operacje w całym katalogu.

### Jakość i kompletność danych
Poproś agenta o skanowanie katalogu pod kątem luk — brakujących opisów, ubogich pól SEO, produktów poniżej progu kompletności — a wygeneruje ustrukturyzowany raport oraz sugerowane poprawki.

### Auto-Enrichment
Powiedz agentowi, aby uzupełnił brakujące opisy, meta-tytuły lub dowolne inne pola tekstowe, a wygeneruje treść pasującą do głosu Państwa marki (poprzez aktywny System Prompt) oraz do szablonów promptów.

### Operacje masowe
Masowo aktualizuj atrybuty, przypisuj na nowo kategorie, przełączaj status lub stosuj transformacje (append/prepend/replace) na wielu SKU naraz — wszystko z jednej instrukcji konwersacyjnej.

### Planowanie zadań
Dla pracy wieloetapowej ("uporządkuj kolekcję Summer: zaktualizuj ceny, dodaj promocyjny opis i przypisz kategorię Sale"), agent buduje plan, pokazuje kroki i wykonuje je sekwencyjnie.

### Zarządzanie asocjacjami *(Nowość w v2.1.0)*
Dodawaj, usuwaj, listuj lub kopiuj produkty powiązane, up-sells i cross-sells poprzez konwersację — nie trzeba otwierać strony edycji każdego produktu. Wyniki wyszukiwania produktów w czacie renderują się teraz jako **klikalne linki**, dzięki czemu można przeskoczyć prosto do strony edycji produktu.

### Wgląd w katalog
Pytaj o liczby, statystyki, ostatnią aktywność lub stan kanałów, użytkowników i ról. Agent zwraca ustrukturyzowane podsumowania bez konieczności nawigacji do każdej strony.

## Strumieniowanie w czasie rzeczywistym (SSE)

AI Agent strumieniuje wyjście używając **Server-Sent Events**. Gdy agent decyduje, co zrobić, i wywołuje każde narzędzie, widzisz rozumowanie i wyniki pojawiające się progresywnie w czacie — nie musisz czekać, aż cała odpowiedź się zakończy. Sprawia to, że długie operacje wydają się responsywne.

## Trwałość konwersacji

Sesje czatu są **oparte na bazie danych**. To znaczy:

- Odświeżenie strony nie czyści konwersacji.
- Zamknięcie i ponowne otwarcie przeglądarki ją zachowuje.
- W ramach pojedynczej sesji agent pamięta, co już zostało omówione, więc możesz odwoływać się do tego ("zastosuj tę samą zmianę także do SKU B").
- Między sesjami fakty, o których pamiętanie wyraźnie poprosisz agenta (poprzez wewnętrzne narzędzie `RememberFact`), są przenoszone dalej.

Zobacz zakładkę **Sessions** w panelu czatu, aby wznowić, zmienić nazwę lub usunąć poprzednie konwersacje.

## Autoryzacja ACL

Każde z ponad 30 narzędzi respektuje Twoje **uprawnienia ACL**. Jeśli Twoja rola administratora nie może usuwać produktów, agent nie może usuwać produktów w Twoim imieniu — odpowiednie narzędzie po prostu się nie wykona. Oznacza to, że przyznanie dostępu do AI Agent nie poszerza tego, co może zrobić użytkownik; zmienia tylko *sposób*, w jaki to robi.

## Ograniczanie szybkości

Aby utrzymać stabilność systemu i przewidywalność kosztów, AI Agent wymusza **30 żądań na minutę na użytkownika**. Po przekroczeniu limitu agent odpowiada powiadomieniem o ponowieniu i odblokowuje się automatycznie po upływie okna.

## Kontrole bezpieczeństwa

Trzy kontrole utrzymują autonomię agenta w ryzach — wszystkie konfigurowane w **Magic AI → Settings → Agentic PIM**:

- **Daily Token Budget** — ogranicza, ile agent może wydać w oknie 24-godzinnym.
- **Max Agent Steps Per Turn** — ogranicza, ile narzędzi może powiązać w łańcuch dla jednej wiadomości użytkownika.
- **Change Approval Mode** — kieruje ryzykowne lub niskopewne zmiany przez [Kolejka zatwierdzeń](./approval-queue.md), zanim trafią do danych.

I jeszcze jeden sygnał warty poznania: **Confidence Threshold**. Jeśli wewnętrzny wynik pewności agenta dla zaproponowanej zmiany spadnie poniżej progu, zmiana jest wstrzymywana do ręcznego zatwierdzenia, niezależnie od trybu zatwierdzania.

::: tip
AI Agent jest najbardziej skuteczny, gdy podajesz jasne, konkretne instrukcje. Zamiast "napraw moje produkty", spróbuj "zaktualizuj wszystkie produkty w kategorii Electronics, którym brakuje meta-opisu". Konkretna intencja → konkretne wywołania narzędzi → szybsze, tańsze i dokładniejsze wyniki.
:::

## Dokąd dalej

- **[AI Agent Chat](./ai-agent-chat.md)** — Jak otwierać, wchodzić w interakcje i zarządzać sesjami czatu; pełna lista ponad 30 narzędzi.
- **[Kolejka zatwierdzeń](./approval-queue.md)** — Jak zmiany zaproponowane przez AI są przeglądane, zatwierdzane lub odrzucane.
- **[Analytics](./analytics.md)** — Dashboardy zużycia tokenów, kosztów i aktywności dla agenta.
- **[Magic AI Configuration](../configuration/magic-ai.md)** — Platformy, ustawienia, prompty i system prompts napędzające agenta.
