# Kolejka zatwierdzeń

**Kolejka zatwierdzeń** to siatka bezpieczeństwa znajdująca się między zmianami proponowanymi przez AI Agent a Twoim aktywnym katalogiem. Gdy agent chce zmodyfikować dane produktu — zmienić opis, zaktualizować cenę, przypisać kategorię itp. — zmiana może zostać zatrzymana, aby ją przejrzeć przed jej wejściem w życie. Zatwierdzasz to, co wygląda dobrze, odrzucasz to, co nie, i nic nie trafia do katalogu, dopóki tego nie powiesz.

## Co robi Kolejka zatwierdzeń?

- **Przechwytuje** zapisy proponowane przez AI, zanim zostaną zatwierdzone w bazie danych.
- **Pokazuje Ci diff obok siebie** bieżącej wartości względem tego, na co agent chce ją zmienić.
- **Pozwala zatwierdzać lub odrzucać** poszczególne zmiany lub ich partie, pojedynczo lub wszystkie naraz.
- **Rejestruje** każdą decyzję do celów audytu.

Kolejka zatwierdzeń stosuje się tylko do **zapisów pochodzących z AI Agent**. Zmiany dokonane bezpośrednio przez administratorów w normalnym UI nie są kierowane przez kolejkę.

## Jak działa Kolejka zatwierdzeń?

1. **AI Agent proponuje zmianę** — wygenerowaną z instrukcji czatu, uruchomienia auto-wzbogacania lub Catalog Quality Monitor.
2. **UnoPim sprawdza Change Approval Mode** (konfigurowany w **Magic AI → Settings → Agentic PIM**):
   - **Auto-apply** — bezpieczne / wysokopewne zmiany trafiają prosto do bazy danych.
   - **Confirm & apply** (domyślny) — agent proponuje wartości, pyta o potwierdzenie w czacie, a następnie wykonuje.
   - **Manual review** — każda zmiana jest kierowana do Kolejka zatwierdzeń, bez wyjątków.
3. **UnoPim sprawdza Confidence Threshold** — jeśli pewność agenta co do zaproponowanej zmiany jest poniżej progu (domyślnie 0.7, "Balanced"), zmiana jest zatrzymywana do przeglądu niezależnie od trybu zatwierdzania.
4. **Zatrzymane zmiany lądują w Kolejka zatwierdzeń** z diffem obok siebie, znacznikiem czasowym i turą czatu, która je wygenerowała.
5. **Zatwierdzasz lub odrzucasz** każdy wpis. Zatwierdzone zmiany są commitowane natychmiast; odrzucone zmiany są odrzucane.
6. **Decyzja jest logowana**, dzięki czemu możesz audytować później.

## Konfigurowalne tryby

Kolejka zatwierdzeń obsługuje dwa szerokie tryby działania, wybierane w **Magic AI → Settings → Agentic PIM**:

### Tryb Auto-Approve

Zmiany trafiają prosto do bazy danych bez ręcznego przeglądu. Najlepsze dla rutynowych, zaufanych operacji — na przykład dobrze dostrojonego workflow auto-wzbogacania, w którym zwalidowałeś już prompt i osobowość. Szybsze, ale bez drugiej pary oczu.

### Tryb Manual Review

Każda zaproponowana zmiana jest zatrzymywana do wyraźnego zatwierdzenia. To zalecany punkt startu przy wdrażaniu AI Agent, szczególnie dla operacji masowych lub generowania treści. Wymieniasz trochę szybkości na pełny nadzór.

::: tip
Zacznij od ręcznego przeglądu, gdy uczysz się, jak agent zachowuje się na Twoim katalogu. Gdy zaufasz konkretnemu workflow (na przykład uzupełnianiu meta-opisów dla konkretnej rodziny), możesz przełączyć się na auto-approve dla tej klasy operacji.
:::

## Przeglądanie oczekujących zmian

Gdy zmiany czekają na Twój przegląd, pojawiają się w Kolejka zatwierdzeń. Każda oczekująca zmiana wyświetla:

- **Produkt lub encję, której dotyczy** — który produkt, kategoria lub rekord jest objęty zmianą.
- **Modyfikowane pole** — konkretny atrybut lub pole, które zostanie zaktualizowane.
- **Bieżącą wartość** — co pole zawiera teraz.
- **Zaproponowaną wartość** — na co AI Agent chce ją zmienić.
- **Znacznik czasowy** — kiedy agent wygenerował propozycję.

Ten układ obok siebie ułatwia dostrzeżenie, czy zaproponowana wartość jest dokładna i zgodna z marką, zanim wejdzie w życie.

## Zatwierdzanie zmian

Kliknij przycisk **Approve** na oczekującym wpisie, aby zatwierdzić tę zmianę. Zmiana trafia do bazy danych natychmiast, a wpis jest usuwany z kolejki.

Możesz również wybrać wiele wpisów i zatwierdzić je masowo — przydatne, gdy przejrzałeś partię podobnych edycji (na przykład 20 meta-opisów wszystkich w tym samym wzorcu).

## Odrzucanie zmian

Kliknij **Reject**, aby odrzucić propozycję. Zmiana zostaje porzucona i nigdy nie dociera do Twojego katalogu. Odrzucanie nie wpływa na zachowanie agenta przy przyszłych żądaniach — możesz odrzucać swobodnie bez obaw o efekty uboczne związane z treningiem.

## Kiedy wymagane jest potwierdzenie

Pewne klasy zmian zawsze proszą o wyraźne potwierdzenie, niezależnie od wybranego trybu zatwierdzania:

- **Zmiany obrazów między żądaniami** — jeśli agent proponuje zmiany w obrazach produktów lub zasobach medialnych, zostaniesz poproszony o potwierdzenie.
- **Modyfikacje masowe** — zmiany na dużą skalę dotyczące wielu produktów wyzwalają krok potwierdzenia, aby zapobiec przypadkowym masowym aktualizacjom.
- **Operacje destrukcyjne** — wszystko, co usuwa lub nadpisuje znaczną ilość danych, prosi o wyraźne potwierdzenie.

Te zabezpieczenia działają nawet w trybie Auto-Approve. Są tam, aby zatrzymać "jeden zbłąkany prompt" przed dokonaniem szkód w całym katalogu.

::: tip
Kolejka zatwierdzeń szczególnie dobrze łączy się z auto-wzbogacaniem. Pozwól agentowi generować opisy i treści SEO w tle, a następnie przejrzyj wszystko z jednego miejsca przed publikacją.
:::

## Jak kolejka współgra z innymi kontrolami bezpieczeństwa

Kolejka zatwierdzeń to jedno z czterech zabezpieczeń AI Agent. Razem tworzą model obrony wgłąb:

| Zabezpieczenie | Konfigurowane w | Co chroni |
|---|---|---|
| **Uprawnienia ACL** | Ustawienia → Role | Powstrzymuje agenta przed robieniem rzeczy, których nie może Twoja rola. |
| **Daily Token Budget** | Magic AI → Settings → Agentic PIM | Ogranicza całkowite wydatki na AI dziennie. |
| **Max Agent Steps Per Turn** | Magic AI → Settings → Agentic PIM | Ogranicza, ile narzędzi może połączyć w łańcuch pojedyncza wiadomość. |
| **Change Approval Mode + Confidence Threshold + Kolejka zatwierdzeń** | Magic AI → Settings → Agentic PIM | Zatrzymuje ryzykowne lub niskopewne zapisy do przeglądu. |

Kolejka dotyczy konkretnie **nadzoru w czasie zapisu** — po zatwierdzeniu i zapisaniu zmiana zachowuje się jak każda inna edycja katalogu i podąża za normalnym śladem audytu/historii.
