# Powiadomienia

Powiadomienia w [UnoPim](https://unopim.com/) zapewniają system alertów w aplikacji w czasie rzeczywistym, który informuje administratorów o ważnych zdarzeniach i procesach w tle. Wprowadzone w **v0.2.0** system powiadomień działa równolegle z opcjonalnymi powiadomieniami e-mail, aby zapewnić, że nigdy nie przegapisz krytycznych aktualizacji.

Niezależnie od tego, czy chodzi o zakończenie masowego importu, nieudane zadanie eksportu czy zmianę produktu, powiadomienia pomagają być na bieżąco ze wszystkim, co dzieje się w Twoim PIM, bez konieczności ciągłego ręcznego sprawdzania każdej sekcji.

### Dostęp do powiadomień

Aby uzyskać dostęp do powiadomień, kliknij **ikonę dzwonka** w górnym pasku nawigacyjnym panelu administracyjnego. Otwiera to panel powiadomień, w którym możesz wyświetlić wszystkie ostatnie alerty.

 <ImagePopup src="/assets/2.1/images/notifications/notification-panel.png" alt="Panel powiadomień" />

### Typy powiadomień

UnoPim wysyła powiadomienia dla różnych zdarzeń systemowych. Poniżej znajdują się główne kategorie:

**1) Aktualizacje statusu zadań Import/Export**

Za każdym razem, gdy uruchamiasz masowe zadanie importu lub eksportu, UnoPim automatycznie wysyła powiadomienie, gdy zadanie zostanie zakończone, nie powiedzie się lub wymaga uwagi. Pozwala to monitorować długotrwałe operacje transferu danych bez pozostawania na stronie job tracker.

- **Completed** — Zadanie importu lub eksportu zakończyło się pomyślnie.
- **Failed** — Zadanie napotkało błędy i nie mogło zostać ukończone.
- **Completed with Errors** — Zadanie zakończyło się, ale niektóre rekordy zostały pominięte z powodu problemów walidacji.

**2) Zmiany produktów**

Powiadomienia mogą Cię powiadamiać, gdy występują znaczące modyfikacje danych produktów, takie jak masowe aktualizacje lub zmiany dokonywane przez API. Jest to przydatne, gdy wielu członków zespołu pracuje jednocześnie nad katalogiem produktów.

**3) Powiadomienia systemowe**

Ogólne alerty na poziomie systemu, takie jak przypomnienia o zaplanowanej konserwacji lub ważne zmiany konfiguracji, są również dostarczane przez panel powiadomień.

### Funkcje panelu powiadomień

Kliknij **ikonę dzwonka** w prawym górnym rogu nagłówka, aby otworzyć panel. **Zielona kropka** na dzwonku wskazuje nieprzeczytane powiadomienia.

<ImagePopup src="/assets/2.1/images/notifications/notification-panel.png" alt="Panel powiadomień" />

Panel listuje ostatnie powiadomienia. Każdy wpis pokazuje:

- **Title** — typ zadania + numer sekwencyjny, np. `Import #15`, `Export #1`. Numer pasuje do kolumny **ID** w [Śledzenie zadań](../data-transfer/job-tracker.md), więc możesz kliknąć i znaleźć dokładne uruchomienie.
- **Body** — kod profilu + stan terminalny, np. *"Import 'Test' completed"* — przydatne do rozróżniania wielu uruchomień tego samego profilu.
- **Relatywny znacznik czasowy** — np. *"4 days ago"*.

Dwie akcje znajdują się na dole panelu:

- **View All** — otwiera pełną stronę powiadomień, gdzie możesz przeglądać, filtrować i zarządzać poszczególnymi wpisami.
- **Mark as Read** — pojedyncza akcja masowa, która czyści stan nieprzeczytany dla każdego powiadomienia widocznego w panelu.

::: tip
Kontrolki *Mark as Read / Unread* i *Clear Notifications* per powiadomienie znajdują się teraz na pełnej stronie powiadomień (przez **View All**). Sam panel zachowuje tylko masowe akcje *Mark as Read* i *View All*, więc pozostaje skanowalny.
:::

### Powiadomienia e-mail

Oprócz powiadomień w aplikacji UnoPim obsługuje powiadomienia e-mail dla krytycznych zdarzeń. Gdy są włączone, system wysyła e-mail na zarejestrowany adres e-mail administratora obok powiadomienia w aplikacji.

**Jak działają powiadomienia e-mail**

Powiadomienia e-mail są wysyłane automatycznie dla kluczowych zdarzeń, takich jak zakończenia i niepowodzenia zadań import/export. Zapewnia to, że nawet jeśli nie jesteś aktywnie zalogowany do panelu administracyjnego, nadal otrzymujesz terminowe aktualizacje.

**Konfiguracja**

Dostarczanie e-mail jest konfigurowane na poziomie infrastruktury przez plik `.env` UnoPim — ustaw `MAIL_MAILER`, `MAIL_HOST`, `MAIL_USERNAME`, `MAIL_PASSWORD` i `MAIL_FROM_ADDRESS`, aby pasowały do Twojego dostawcy poczty (SMTP, Mailgun, Postmark itp.). UnoPim używa standardowych sterowników poczty Laravel i automatycznie podchwytuje ustawienia przy uruchomieniu aplikacji.

::: tip
Przetestuj swoją konfigurację poczty od początku do końca przed poleganiem na e-mailach powiadomień. Wyzwol zdarzenie niskiej stawki (np. mały import) i potwierdź, że e-mail dotarł; jeśli nie, sprawdź swój log Laravel (`storage/logs/laravel.log`) pod kątem błędów poczty.
:::

Używając powiadomień w aplikacji i e-mail razem, możesz zapewnić pełną widoczność wszystkich ważnych zdarzeń w Twojej instancji UnoPim.
