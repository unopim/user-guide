# Webhooki

Webhooki w [UnoPim](https://unopim.com/) pozwalają wysyłać powiadomienia o aktualizacjach produktów w czasie rzeczywistym do zewnętrznego URL przy każdej zmianie danych produktu. Zamiast odpytywać API, podłączone systemy (sklepy e-commerce, ERP, marketplace) otrzymują żądanie HTTP w momencie utworzenia, aktualizacji lub usunięcia produktu.

Strona ustawień webhooków znajduje się w **Configuration → Webhooks** w pasku bocznym administratora.

::: tip Asynchroniczna wysyłka
Wysyłanie webhooków działa teraz w tle jako kolejkowane zadanie **`SendProductWebhook`**. Przy tworzeniu i aktualizacji produktu listener `Product` wysyła zadanie do kolejki **`webhooks`** (`->onQueue('webhooks')`). Akcje zapisu administratora wracają natychmiast — wolny odbierający endpoint nie może już zablokować UI. Wpisy logu webhooków są nadal rejestrowane po zakończeniu zadania; kolumna `webhook_logs.user_id` jest teraz nullable, aby obsługiwać wysyłki systemowe.
:::

## Uruchamianie workera kolejki

Ponieważ wysyłki webhooków są kolejkowane w kolejce **`webhooks`**, zwykłe `php artisan queue:work` **nie** drenuje ich — musisz dołączyć `webhooks` do listy `--queue`. Większość instalacji UnoPim uruchamia jednego workera, który pobiera ze wszystkich kolejek używanych przez platformę:

```sh
php artisan queue:work --queue=webhooks,system,default,completeness
```

| Kolejka | Używana przez |
|---|---|
| **`webhooks`** | Zadanie `SendProductWebhook` — powiadomienia tworzenia/aktualizacji produktu. |
| **`system`** | Zadania na poziomie systemu, takie jak kolejki tłumaczeń i indeksowanie. |
| **`default`** | Domyślna kolejka Laravel — wszystko wysyłane bez wyraźnej kolejki. |
| **`completeness`** | `BulkProductCompletenessJob` i przeliczanie kompletności per produkt. |

::: warning
Jeśli uruchomisz `php artisan queue:work` bez `--queue=webhooks,...`, wysyłki webhooków będą stać w kolejce na zawsze, a zakładka **Logs** będzie wydawać się pusta, mimo że zapisy administratora wyglądają udane. Zawsze dołączaj `webhooks` do listy kolejek (lub uruchom dedykowanego workera tylko dla `webhooks`).
:::

::: tip Supervisor / systemd
W produkcji nadzoruj to polecenie przez Supervisor lub systemd, aby worker uruchamiał się automatycznie po awarii. Uruchom `php artisan queue:restart` po każdym wdrożeniu, aby workerzy podchwycili Twój najnowszy kod.
:::

## Polityka ponawiania

Jeśli Twój endpoint odbierający jest niedostępny lub zwraca błąd, UnoPim **nie** poddaje się po pierwszej próbie. Zadanie `SendProductWebhook` ma wbudowaną politykę ponawiania:

| Ustawienie | Wartość | Co oznacza |
|---|---|---|
| **Tries** | `3` | UnoPim próbuje każdego webhooka do **trzech razy** przed oznaczeniem go jako nieudany. |
| **Backoff** | `30 seconds` | Po nieudanej próbie UnoPim czeka **30 sekund** przed ponowieniem. |

Tak więc w najgorszym przypadku pojedynczy zapis produktu może wytworzyć do **trzech** prób dostarczenia rozłożonych na około minutę. Każda próba rejestruje wiersz w zakładce **Logs**, dzięki czemu możesz zobaczyć dokładnie, co się stało — sukces przy próbie 1 to jeden wiersz logu, dwa niepowodzenia plus sukces przy próbie 3 to trzy wiersze logu.

::: tip Spraw, aby Twój endpoint był idempotentny
Ponieważ ten sam payload może dotrzeć więcej niż raz (np. próba #1 wygasła, ale faktycznie się powiodła po stronie serwera), zbuduj swój endpoint odbierający tak, aby przetwarzanie **tego samego zdarzenia dwukrotnie dawało ten sam wynik**. Powszechnym wzorcem jest deduplikacja na podstawie pola `event_id` przychodzącego JSON.
:::

::: warning Worker musi być uruchomiony dla ponowień
Logika ponawiania uruchamia się tylko wtedy, gdy worker kolejki aktywnie pobiera z kolejki `webhooks`. Jeśli zatrzymasz workera, ponowienia są wstrzymane do ponownego uruchomienia — nie wygasają.
:::

## Zakładka General

Zakładka **General** to miejsce, w którym włączasz webhooka i konfigurujesz URL docelowy. Używa układu dwóch paneli.

<ImagePopup src="/assets/2.1/images/settings/webhook-settings.png" alt="Ustawienia webhooka" />

### Włącz webhooka i ustaw URL

**Krok 1:** Przejdź do **Configuration → Webhooks** w pasku bocznym administratora. Zakładka **General** jest wybrana domyślnie.

**Krok 2:** W panelu **General** po lewej stronie przełącz **Active Webhook**, aby włączyć dostarczanie webhooka.

**Krok 3:** W panelu **Ustawienia** po prawej stronie wprowadź swój **Webhook URL** (np. `https://example.com/webhook`). To jest endpoint, który będzie otrzymywał żądania POST przy każdej zmianie danych produktu.

**Krok 4:** Kliknij przycisk **Save** w prawym górnym rogu strony, aby zastosować konfigurację.

::: tip
Użyj usługi takiej jak [webhook.site](https://webhook.site) podczas rozwoju, aby sprawdzić payloady wysyłane przez UnoPim przed zbudowaniem logiki przetwarzania.
:::

## Zakładka Logs

Zakładka **Logs** wyświetla rekord każdego żądania webhooka, które UnoPim wysłał. Użyj go do monitorowania statusu dostarczenia i rozwiązywania problemów.

<ImagePopup src="/assets/2.1/images/settings/webhook-logs.png" alt="Logi webhooka" />

Datagrid logów zawiera następujące kolumny:

| Kolumna | Opis |
|---|---|
| **Id** | Unikalny identyfikator wpisu logu |
| **Date/Time** | Kiedy żądanie webhooka zostało wysłane |
| **SKU** | SKU produktu, który wyzwolił webhooka |
| **User** | Administrator, którego akcja wyzwoliła zmianę |
| **Status** | Kod statusu odpowiedzi HTTP zwrócony przez Twój endpoint |
| **Actions** | Wyświetl szczegóły pojedynczego wpisu logu |

Możesz użyć **paska wyszukiwania** do wyszukiwania po kodzie, przycisku **Filter** do zawężenia wyników i kontrolek **paginacji** do przeglądania wpisów.

::: tip
Jeśli widzisz kody statusu inne niż 200 w logach, sprawdź, czy Twój endpoint jest osiągalny, zwraca odpowiedź 200 OK i może poprawnie obsłużyć przychodzący payload JSON.
:::

## Zakładka History

Zakładka **History** śledzi każdą zmianę dokonaną w samej konfiguracji webhooka. Użyj jej do audytu, kiedy ustawienia zostały zmodyfikowane i przez kogo.

<ImagePopup src="/assets/2.1/images/settings/webhook-history.png" alt="Historia webhooka" />

Datagrid historii zawiera następujące kolumny:

| Kolumna | Opis |
|---|---|
| **Date/Time** | Kiedy zmiana konfiguracji została dokonana |
| **Version** | Numer wersji migawki konfiguracji |
| **User** | Administrator, który dokonał zmiany |
| **Actions** | Kliknij ikonę oka, aby wyświetlić pełne szczegóły zmian |

To jest przydatne do śledzenia, kiedy URL webhooka został zaktualizowany, kiedy webhook został włączony lub wyłączony, i który użytkownik dokonał zmiany.

## Podsumowanie szybkiej konfiguracji

1. Przejdź do **Configuration → Webhooks**.
2. Na zakładce **General** włącz **Active Webhook**.
3. Wprowadź swój **Webhook URL** w panelu Ustawienia.
4. Kliknij **Save**.
5. Przełącz na zakładkę **Logs**, aby monitorować wychodzące dostawy webhooków i zweryfikować pomyślne odpowiedzi.
6. Przełącz na zakładkę **History**, aby przejrzeć poprzednie zmiany konfiguracji.

::: tip
Jeśli Twój endpoint odbierający jest tymczasowo niedostępny, wyłącz Active Webhook, aby wstrzymać dostawy. Twoja konfiguracja jest zachowana i możesz ją ponownie włączyć w dowolnym momencie bez ponownego wprowadzania URL.
:::
