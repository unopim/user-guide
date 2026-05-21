# Kompletność produktów

Product Completeness zapewnia wizualny wynik i szczegółową ocenę jakości danych produktu w oparciu o Twoje ustawienia kompletności. Pomaga zidentyfikować, które produkty są gotowe do publikacji, a które wymagają więcej informacji.

## Jak to działa

UnoPim ocenia kompletność produktów na podstawie atrybutów przypisanych do rodziny produktu. Możesz skonfigurować, które atrybuty są "wymagane", aby produkt został uznany za kompletny.

### Wynik kompletności

Wynik jest obliczany jako procent:
`(Liczba wypełnionych wymaganych atrybutów) / (Łączna liczba wymaganych atrybutów) * 100`

## Ustawienia kompletności

Możesz zdefiniować reguły kompletności w sekcji zarządzania atrybutami.

1. Przejdź do **catalog >> Attributes families**  Wybierz rodzinę atrybutów.
2. Kliknij zakładkę **Completeness**.
3. Oznacz atrybuty jako **Required in Channels** dla oceny kompletności i zapisz.

## Kolejka obliczeń

Zadania obliczeń kompletności są przetwarzane przez kolejkę systemową, aby zapewnić aktualizacje w czasie rzeczywistym bez wpływu na wydajność.

Aby uruchomić workera kolejki, użyj:

```bash
php artisan queue:work --queue=system,default
```

## Wyświetlanie kompletności

Wynik kompletności jest widoczny w:

- **Product Datagrid**: Jako kolumna procentowa.
- **Product Edit Page**: Szczegółowy rozkład brakujących atrybutów.

<!-- ![Product Completeness](/assets/1.0/images/products/completeness.png) -->
