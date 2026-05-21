# Importuj

Importowanie zbiorcze to funkcja umożliwiająca użytkownikom szybkie i wydajne wprowadzanie dużych ilości danych do systemu. Upraszcza ona proces i oszczędza czas, ponieważ nie trzeba dodawać każdej informacji pojedynczo.

Funkcja ta działa różnie dla każdego systemu i ma szeroki zakres zastosowań w wielu branżach, w tym również w [UnoPim](https://unopim.com/).

### Kroki dodawania importu zbiorczego w UnoPim

**Krok 1:** Przejdź do panelu administracyjnego UnoPim i kliknij **Transfer danych >> Importuj >> Create Import**.

   <ImagePopup src="/assets/1.0/images/data-transfer/createImport.png" alt="Create Import" />

**Krok 2:** W konfiguracji ogólnej dodaj poniższe pola:

1) **Code -** Wprowadź kod swojego procesu importu.

2) **Type -** Wybierz typ, tj. (Products, Categories), który chcesz zaimportować.

3) **File –** Wybierz plik w wybranym formacie **(CSV, XLS, XLSX)** i upewnij się, że w pliku znajdują się wszystkie wymagane pola.

4) **Download Sample –** Możesz również pobrać przykładowe pliki dla typów (Products, Categories). Upewnij się, że plik, który przesyłasz, jest podobny do tego przykładowego pliku.

5) **Image Directory Path –** Dla plików obrazów produktów pliki powinny być umieszczone w folderze **/project-root/storage/app/import/product-images**.

6) **Action –** Wybierz z konfiguracji ustawień, czy chcesz tworzyć/aktualizować, czy usuwać rekordy.

7) **Validation Strategy –** Ta unikalna funkcja umożliwia pominięcie błędów lub zatrzymanie na błędach podczas importowania danych.

8) **Allowed Errors –** Ta funkcja pozwala określić, jaka ilość błędów zostanie zignorowana podczas importowania danych.

9) **Field Separator –** Ta funkcja umożliwia ustawienie separatora pól. Na przykład, jeśli użyjesz **","** jako separatora pól, dane wewnątrz pliku zostaną rozdzielone tym znakiem.

Teraz kliknij przycisk **Save Import**.  

   <ImagePopup src="/assets/1.0/images/data-transfer/saveImport.png" alt="Save Import" />

**Krok 3:** Teraz kliknij przycisk **Import Now**, jak pokazano na poniższym obrazku.

   <ImagePopup src="/assets/1.0/images/data-transfer/importNow.png" alt="Import Now" />

**Krok 4:** Teraz kliknij **Transfer danych >> Śledzenie zadań**, gdzie zobaczysz status swojego procesu importu. Po osiągnięciu statusu completed proces importu został pomyślnie zakończony.

Możesz również uruchomić poniższe polecenie w katalogu głównym UnoPim.

**php artisan queue:listen**


   <ImagePopup src="/assets/1.0/images/data-transfer/importOutput.png" alt="Import Output" />

Dzięki powyższym krokom możesz łatwo utworzyć Importuj dane w UnoPim.