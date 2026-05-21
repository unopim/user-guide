# AI Agent Analytics

Dashboard **AI Agent Analytics** pokazuje, jak agent jest używany i ile to kosztuje. Ponieważ każde żądanie AI zużywa tokeny (a tokeny kosztują pieniądze), ten dashboard pozwala utrzymać rachunek przewidywalny, wykryć nietypowe wzorce użycia i dostroić dzienny budżet.

## Co robi dashboard Analytics?

Wyświetla trzy rzeczy w jednym miejscu:

1. **Co dzieje się teraz** — dzisiejsze zużycie tokenów względem dziennego budżetu oraz ile budżetu zostało.
2. **Co działo się historycznie** — liczba konwersacji, wywołań narzędzi i wydatków na tokeny per dzień, per użytkownik i per typ operacji.
3. **Ile to kosztowało** — zużycie tokenów przeliczone na szacowaną kwotę w dolarach na podstawie cennika dostawcy.

Użyj go, aby odpowiedzieć na pytania w stylu *"Kto używa agenta najintensywniej w tym tygodniu?"*, *"Które typy operacji są największymi pożeraczami tokenów?"* i *"Czy zaraz osiągnę dzienny limit?"*

## Jak to działa?

Za każdym razem, gdy użytkownik wysyła wiadomość do AI Agent Chat, UnoPim zapisuje:

- **Kto** wysłał wiadomość (użytkownik administracyjny).
- **Które narzędzia** agent wywołał, aby odpowiedzieć.
- **Ile tokenów** zostało zużytych (prompt + completion, dla każdego wywołania narzędzia).
- **Kiedy** miała miejsce tura.

Dashboard agreguje te rekordy, aby utworzyć liczniki, wykresy i podziały na poziomie użytkownika. Rekordy utrzymują się tak długo, jak pozwala Twoja polityka retencji sesji/logów, więc analiza trendów historycznych jest dostępna od ręki.

### Skąd pochodzi dzienny budżet

**Daily Token Budget** to pojedyncza globalna liczba ustawiona w **Magic AI → Settings → Agentic PIM → Daily Token Budget** (np. `500000`). Każde wywołanie narzędzia, które wykonuje agent, dekrementuje bieżącą sumę na dany dzień. Gdy suma osiągnie zero, agent odpowiada powiadomieniem o wyczerpaniu budżetu każdemu użytkownikowi, który próbuje wysłać wiadomość. O północy (czasu serwera) licznik się resetuje.

Dashboard pokazuje **trzy pochodne liczby** na bazie tego surowego licznika: dzisiejsze użycie, pozostały budżet i procent wykorzystania.

## Przegląd dashboardu Analytics

Dashboard daje scentralizowany widok wszystkich aktywności AI Agent. Z niego możesz monitorować:

- **Łączną liczbę zużytych tokenów** w wybranym okresie.
- **Liczbę konwersacji** zainicjowanych przez każdego użytkownika administracyjnego.
- **Liczbę wywołań narzędzi** wykonanych przez agenta.
- **Dzienne i tygodniowe trendy użycia** wyświetlane na wizualnych wykresach.

<!-- TODO: Add screenshot -->

Dashboard jest dostępny z panelu administracyjnego i dostępny dla użytkowników z odpowiednimi uprawnieniami.

## Śledzenie budżetu tokenów

AI Agent działa w oparciu o **dzienny budżet tokenów** — pojedynczy globalny limit współdzielony przez wszystkich użytkowników administracyjnych. Dashboard wyświetla:

- **Dzienne użycie tokenów** — Ile tokenów zostało zużytych dzisiaj przez wszystkich użytkowników.
- **Pozostały budżet** — Tokeny wciąż dostępne na bieżący dzień.
- **Procent wykorzystania budżetu** — Wizualny wskaźnik (np. pasek postępu), ile dziennego budżetu zostało użyte.

Gdy dzienny budżet tokenów zostanie wyczerpany, AI Agent wstrzymuje pracę do końca dnia. Powiadamia użytkowników, że osiągnięto limit, i wznawia normalne działanie następnego dnia, gdy budżet się zresetuje.

::: tip
Miej oko na dzienne wykorzystanie, jeśli Twój zespół polega na auto-wzbogacaniu lub operacjach masowych. Te zadania zużywają więcej tokenów na turę niż proste zapytania wyszukujące.
:::

## Monitorowanie użycia i kosztów AI

Dashboard pomaga zrozumieć implikacje kosztowe agenta. Kluczowe metryki obejmują:

- **Zużycie tokenów per użytkownik** — Którzy członkowie zespołu używają agenta najintensywniej.
- **Zużycie tokenów per typ operacji** — Które typy operacji (tworzenie produktów, auto-wzbogacanie, skany jakości danych, generowanie obrazów itp.) zużywają najwięcej tokenów.
- **Szacowanie kosztów** — Tokeny przeliczone na szacunek w dolarach na podstawie cennika wybranego dostawcy/modelu.

<!-- TODO: Add screenshot -->

Te informacje są przydatne do budżetowania, wykrywania niekontrolowanego użycia oraz decydowania, czy przypisać tańszy model do konkretnej możliwości (np. używaj lżejszego modelu do tłumaczenia, a model premium zachowaj do generowania treści).

## Konfigurowanie dziennych budżetów tokenów

Aby ustawić lub dostosować dzienny budżet tokenów:

1. Przejdź do **Magic AI → Settings** w panelu administracyjnym.
2. Otwórz sekcję **Agentic PIM**.
3. Ustaw pole **Daily Token Budget** (np. `500000`).
4. Kliknij **Save Configuration**, aby zastosować.

<!-- TODO: Add screenshot -->

Budżet ma zastosowanie globalnie do wszystkich użytkowników administracyjnych. Gdy łączne użycie osiągnie dzienny limit, agent wstrzymuje pracę do północy.

::: tip
Zacznij od zachowawczego dziennego budżetu i podnoś go stopniowo, gdy poznajesz wzorce użycia swojego zespołu. Zapobiega to nieoczekiwanym skokom podczas wdrażania.
:::

## Przeglądanie historii użycia i trendów

Sekcja **Usage History** pozwala przeglądać przeszłą aktywność w konfigurowanych zakresach dat. Zapewnia:

- **Dzienny podział użycia** — Widok dzień po dniu zużycia tokenów i liczby konwersacji.
- **Tygodniowe i miesięczne podsumowania** — Zagregowane widoki dla analizy trendów długoterminowych.
- **Identyfikację szczytów użycia** — Wyróżnia dni lub okresy z nietypowo wysokim użyciem, abyś mógł zbadać je, zanim staną się problemem.

<!-- TODO: Add screenshot -->

Użyj tych danych historycznych, aby informować alokację budżetu, wykryć użytkowników o dużej aktywności i zidentyfikować operacje, które mogłyby skorzystać z tańszego modelu.

## Jak analytics łączy się z innymi kontrolami agenta
Dashboard analytics to warstwa obserwowalności znajdująca się na szczycie kontroli skonfigurowanych w **Magic AI → Settings → Agentic PIM**. Razem tworzą ciągłą pętlę zwrotną:

<ImagePopup src="/assets/2.1/images/ai-agent/analytics-feedback-loop.png" alt="Pętla zwrotna zarządzania AI Agent" />

Typowe wdrożenie wygląda tak: zacznij od zachowawczego Daily Token Budget i zatwierdzania Manual Review, obserwuj analitykę przez tydzień, podnieś budżet tam, gdzie to bezpieczne, i przenieś zaufane workflow do Auto-Approve na podstawie tego, co mówi Ci dashboard.

