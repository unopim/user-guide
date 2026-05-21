<script setup>
import { ref, computed } from 'vue'

const selectedVersions = ref(['v2.1.0', 'v2.0.0', 'v2.0.0-beta.1', 'v1.0.0', 'v0.3.0', 'v0.2.0'])
const selectedDomains = ref(['ai', 'productivity', 'data-quality', 'connectivity', 'automation', 'scalability', 'reporting', 'governance'])

const versions = [
  { id: 'v2.1.0', label: 'v2.1.0' },
  { id: 'v2.0.0', label: 'v2.0.0' },
  { id: 'v2.0.0-beta.1', label: 'v2.0.0-beta.1' },
  { id: 'v1.0.0', label: 'v1.0.0' },
  { id: 'v0.3.0', label: 'v0.3.0' },
  { id: 'v0.2.0', label: 'v0.2.0' },
  { id: 'v0.1.x', label: 'v0.1.x' },
]

const domains = [
  { id: 'ai', label: 'AI i Agenci', color: '#7c3aed' },
  { id: 'productivity', label: 'Produktywność', color: '#2563eb' },
  { id: 'data-quality', label: 'Jakość danych', color: '#059669' },
  { id: 'connectivity', label: 'Łączność', color: '#dc2626' },
  { id: 'automation', label: 'Automatyzacja', color: '#d97706' },
  { id: 'scalability', label: 'Skalowalność', color: '#be185d' },
  { id: 'reporting', label: 'Raportowanie', color: '#6366f1' },
  { id: 'governance', label: 'Zarządzanie', color: '#0d9488' },
]

const features = [
  // v2.1.0
  { title: 'Narzędzie Manage Associations', desc: 'Nowe narzędzie AI Agent, które dodaje, usuwa lub listuje produkty related/up-sell/cross-sell w języku naturalnym — nie trzeba otwierać każdego produktu ręcznie. Wyniki wyszukiwania produktów wyświetlają teraz klikalne linki dla uproszczonej nawigacji.', version: 'v2.1.0', domains: ['ai', 'productivity'] },
  { title: 'Seedowanie Demo Data', desc: 'Szybki onboarding z przykładowymi produktami, kategoriami i atrybutami — dostępny przez przełącznik kreatora instalatora, flagę CLI `php artisan unopim:install --with-demo-data`, opcję konfiguracji Docker lub samodzielne polecenie `php artisan unopim:install:demo-data`.', version: 'v2.1.0', domains: ['productivity', 'governance'] },
  { title: 'Gotowy do produkcji Docker Setup', desc: 'Stos wielokontenerowy (Nginx + PHP-FPM domyślnie, opcja zapasowa Apache) dostarczony przez obrazy Docker Hub, z healthchecks, usługami Redis, Elasticsearch, Mailpit, dostrojonym pod OPcache php.ini i workflow automatycznej publikacji.', version: 'v2.1.0', domains: ['connectivity', 'scalability'] },
  { title: 'Niestandardowy dostawca MagicAI', desc: 'Podłącz dowolną usługę zgodną z OpenAI (samodzielnie hostowane bramy, proxy, niestandardowe endpointy), konfigurując niestandardowy base URL na stronie Magic AI Platforms — poza oficjalnymi presetami OpenAI/Anthropic/Gemini/Ollama/Groq.', version: 'v2.1.0', domains: ['ai', 'connectivity'] },
  { title: 'MagicAI Test Connection (ModelRecommender)', desc: 'Test Connection na Platformie używa teraz dedykowanego recommendera, który pomija modele tylko-obrazowe, zapobiegając fałszywym negatywom podczas walidacji danych uwierzytelniających.', version: 'v2.1.0', domains: ['ai', 'governance'] },
  { title: 'PrismErrorResolver', desc: 'AI Agent Chat tłumaczy błędy dostawców i Prism na przyjazne użytkownikowi komunikaty, dzięki czemu administratorzy od razu rozumieją, co poszło nie tak (limit szybkości, nieprawidłowy klucz, niedostępny model itp.).', version: 'v2.1.0', domains: ['ai', 'productivity'] },
  { title: 'Klikalne statystyki produktów na Dashboardzie', desc: 'Karty statystyk produktów na Dashboardzie (Active, Inactive, Enriched, With Variants, …) działają teraz jak chipy filtrów — kliknięcie jednego przenosi do siatki produktów wstępnie przefiltrowanej do tego zestawu.', version: 'v2.1.0', domains: ['productivity', 'reporting'] },
  { title: 'Asynchroniczna wysyłka webhooków produktów', desc: 'Dostawy webhooków tworzenia/aktualizacji produktów działają teraz jako kolejkowane zadanie SendProductWebhook, dzięki czemu akcje administratora wracają natychmiast, a opóźnienia zewnętrznych endpointów nie blokują UI administratora.', version: 'v2.1.0', domains: ['connectivity', 'automation', 'scalability'] },
  { title: 'Ograniczenie szybkości logowania administratora', desc: 'Nazwane limitery szybkości z segmentacją per-email + per-IP (5 prób/minutę) chronią endpointy logowania administratora i zapomnianego hasła przed atakami brute-force.', version: 'v2.1.0', domains: ['governance', 'scalability'] },
  { title: 'Walidacja hasła po stronie serwera', desc: 'Minimalna długość hasła 6 znaków wymuszana po stronie serwera w UserForm, zamykając lukę, w której klienci mogli omijać reguły hasła.', version: 'v2.1.0', domains: ['governance'] },
  { title: 'Ochrona przed enumeracją użytkowników', desc: 'Endpoint zapomnianego hasła zwraca teraz ogólny komunikat niezależnie od tego, czy e-mail istnieje, zapobiegając enumeracji kont przez różnice w odpowiedziach.', version: 'v2.1.0', domains: ['governance'] },
  { title: 'Ochrona przed otwartym przekierowaniem', desc: 'Przekierowania oparte na Referer przy logowaniu i zapomnianym haśle walidują teraz hosta przez parse_url(), więc sfałszowane nagłówki Referer nie mogą już przepychać użytkowników na zewnętrzne strony phishingowe.', version: 'v2.1.0', domains: ['governance'] },
  { title: 'Naprawa eskalacji uprawnień edycji użytkownika', desc: 'Dodano brakujące wpisy ACL i zabezpieczenia na poziomie kontrolera na endpointach aktualizacji i usuwania użytkownika; nie-superadministratorzy nie mogą już przypisywać ról permission_type: all. Łata wysokopoziomowe znalezisko audytu.', version: 'v2.1.0', domains: ['governance'] },
  { title: 'Middleware No-Cache dla stron administratora', desc: 'Odpowiedzi administratora zawierają nagłówki Cache-Control: no-store i Pragma: no-cache, które zapobiegają cachowaniu przez przeglądarki i proxy wrażliwych stron po wylogowaniu.', version: 'v2.1.0', domains: ['governance'] },
  { title: 'Ulepszone bezpieczne nagłówki', desc: 'Nagłówki Permissions-Policy i X-Permitted-Cross-Domain-Policies są teraz wysyłane we wszystkich odpowiedziach administratora dla silniejszych zabezpieczeń na poziomie przeglądarki.', version: 'v2.1.0', domains: ['governance'] },
  { title: 'Pomocnik sanityzacji XSS', desc: 'Pomocnik clean_content() wspierany przez HTMLPurifier usuwa dyrektywy Blade, tagi PHP i niebezpieczne HTML z treści generowanej przez użytkownika przed przechowaniem.', version: 'v2.1.0', domains: ['governance'] },
  { title: 'Filtrowanie debugowania oparte na IP', desc: 'Zmienna środowiskowa APP_DEBUG_ALLOWED_IPS ogranicza dostęp do debugbar do konkretnych adresów IP, dzięki czemu debugowanie produkcji jest bezpieczniejsze.', version: 'v2.1.0', domains: ['governance'] },
  { title: 'Ulepszone tłumaczenia holenderskie (nl_NL)', desc: 'Przebieg jakości w dziewięciu paczkach (Admin, AiAgent, Completeness, Core, DataTransfer, Installer, Product, Webhook) — nieformalny ton, usunięcie zbędnych prefiksów, czyszczenie zero-width-space. Wkład społeczności.', version: 'v2.1.0', domains: ['productivity'] },
  { title: 'Przebieg wydajności indeksów bazy danych', desc: 'Nowe indeksy na channels.code, locales.status, currencies.status oraz złożony indeks na core_config(code, channel_code, locale_code) dla szybszego wyszukiwania konfiguracji i ładowania stron administratora.', version: 'v2.1.0', domains: ['scalability'] },
  { title: 'Przebieg kompatybilności PostgreSQL', desc: 'Wsparcie wyszukiwania JSON, gramatyka jsonContains(), bramowane sterownikiem zmienne sesji trybu masowego MySQL oraz poprawki filtrów DataGrid w narzędziach AiAgent, siatkach Channel i AttributeOption.', version: 'v2.1.0', domains: ['connectivity', 'scalability'] },
  { title: 'Dopracowanie trybu ciemnego w Śledzeniu zadań', desc: 'Paski postępu i przyciski konfiguracji renderują się teraz poprawnie w trybie ciemnym wewnątrz trackera zadań import/export.', version: 'v2.1.0', domains: ['productivity'] },
  { title: 'Workflow CI dla PostgreSQL', desc: 'Dedykowany przebieg testów Pest przeciwko PostgreSQL 16 (z i bez Elasticsearch) przy każdej zmianie utrzymuje stabilność kompatybilności międzybazowej.', version: 'v2.1.0', domains: ['scalability', 'governance'] },

  // v2.0.0
  { title: 'Polecenie tłumaczenia oparte na AI', desc: 'Masowe tłumaczenie brakujących kluczy lokalizacji w 32 nieangielskich lokalizacjach przy użyciu MagicAI. Automatycznie przetłumaczyło około 18 000 wcześniej nieprzetłumaczonych kluczy w 7 paczkach.', version: 'v2.0.0', domains: ['ai', 'automation', 'productivity'] },
  { title: 'Ulepszone tłumaczenia niemieckie', desc: 'Skorygowana terminologia kolumn i ulepszona jakość lokalizacji de_DE.', version: 'v2.0.0', domains: ['productivity'] },
  { title: 'Automatyczna reindeksacja Elasticsearch po seedowaniu', desc: 'Produkty są natychmiast wyszukiwalne po seedowaniu bazy danych bez ręcznej reindeksacji.', version: 'v2.0.0', domains: ['scalability'] },
  { title: 'Międzybazowa gramatyka JSON', desc: 'Wsparcie kompatybilności PostgreSQL z ulepszoną obsługą zapytań JSON.', version: 'v2.0.0', domains: ['connectivity', 'scalability'] },

  // v2.0.0-beta.1
  { title: 'Interfejs AI Agent Chat', desc: 'Ponad 30 wbudowanych narzędzi PIM dostępnych w języku naturalnym. Twórz produkty, wyszukuj, masowo edytuj, generuj treści, zarządzaj kategoriami — wszystko przez konwersację.', version: 'v2.0.0-beta.1', domains: ['ai', 'productivity'] },
  { title: 'Multi-Platform MagicAI', desc: 'Wsparcie dla ponad 10 dostawców AI (OpenAI, Anthropic, Gemini, Ollama, Groq i więcej) z szyfrowanym przechowywaniem danych uwierzytelniających i wyborem platformy per funkcja.', version: 'v2.0.0-beta.1', domains: ['ai', 'connectivity'] },
  { title: 'Wyszukiwanie semantyczne oparte na AI', desc: 'EmbeddingSimilarityService i SemanticRankingService dostarczają inteligentne wyniki wyszukiwania na podstawie znaczenia, a nie tylko słów kluczowych.', version: 'v2.0.0-beta.1', domains: ['ai', 'productivity'] },
  { title: 'Auto-tłumaczenie przy tworzeniu/aktualizacji produktu', desc: 'Automatycznie tłumacz dane produktów na wszystkie skonfigurowane lokalizacje, gdy produkty są tworzone lub aktualizowane.', version: 'v2.0.0-beta.1', domains: ['ai', 'automation'] },
  { title: 'Kolejka zatwierdzeń dla zmian AI', desc: 'Konfigurowalne tryby dla zmian AI — auto-zatwierdzanie lub ręczny przegląd przed zastosowaniem.', version: 'v2.0.0-beta.1', domains: ['ai', 'governance'] },
  { title: 'System pamięci agenta', desc: 'Narzędzia RememberFact i RecallMemory pozwalają AI przechowywać i pobierać kontekst między interakcjami.', version: 'v2.0.0-beta.1', domains: ['ai'] },
  { title: 'Catalog Quality Monitor', desc: 'Zaplanowane polecenie, które monitoruje i raportuje o jakości danych katalogowych.', version: 'v2.0.0-beta.1', domains: ['data-quality', 'automation'] },
  { title: 'Auto-wzbogacanie', desc: 'Automatycznie wypełnia brakujące opisy produktów i pola SEO przy użyciu AI.', version: 'v2.0.0-beta.1', domains: ['ai', 'data-quality', 'automation'] },
  { title: 'Pętla zwrotna treści', desc: 'Przechwytuj preferencje użytkownika dotyczące treści generowanej przez AI, aby udoskonalać przyszłe wyjścia.', version: 'v2.0.0-beta.1', domains: ['ai', 'data-quality'] },
  { title: 'Narzędzie raportu jakości danych', desc: 'Skanuj swój katalog pod kątem brakujących danych i otrzymuj ustrukturyzowane raporty jakości.', version: 'v2.0.0-beta.1', domains: ['data-quality', 'reporting'] },
  { title: 'Narzędzie weryfikacji produktów', desc: 'Weryfikuj poszczególne produkty względem kryteriów jakości z oceną kompletności.', version: 'v2.0.0-beta.1', domains: ['data-quality'] },
  { title: 'Narzędzie planowania zadań', desc: 'Planuj i wykonuj złożone wieloetapowe operacje PIM przez AI Agent.', version: 'v2.0.0-beta.1', domains: ['ai', 'productivity'] },
  { title: 'SSE Streaming dla AI Agent Chat', desc: 'Strumieniowane odpowiedzi w czasie rzeczywistym w interfejsie czatu przy użyciu Server-Sent Events.', version: 'v2.0.0-beta.1', domains: ['ai', 'productivity'] },
  { title: 'Śledzenie budżetu tokenów', desc: 'Dzienne limity użycia i monitorowanie zużycia tokenów AI.', version: 'v2.0.0-beta.1', domains: ['ai', 'reporting', 'governance'] },
  { title: 'Trwałość konwersacji', desc: 'Sesje czatu oparte na bazie danych, które trwają między odświeżeniami przeglądarki i logowaniami.', version: 'v2.0.0-beta.1', domains: ['ai', 'productivity'] },
  { title: 'Dashboard AI Agent Analytics', desc: 'Monitoruj użycie AI, koszty i wydajność z scentralizowanego dashboardu.', version: 'v2.0.0-beta.1', domains: ['ai', 'reporting'] },
  { title: 'Swatch Types dla atrybutów', desc: 'Typy swatchy Color, Image i Text dla atrybutów Select i Multiselect — wizualne wyświetlanie opcji.', version: 'v2.0.0-beta.1', domains: ['productivity', 'data-quality'] },
  { title: 'Ulepszony Dashboard', desc: 'Widżety Statystyki produktów, Activity Charts, Completeness Scores, Gotowość kanału, Ostatnia aktywność i Transfer danych.', version: 'v2.0.0-beta.1', domains: ['reporting', 'productivity'] },
  { title: 'UI Import/Export Tracker', desc: 'Wizualizacja w czasie rzeczywistym zadań importu i eksportu z paskami postępu, wskaźnikami statusu i etykietami pipeline kroków.', version: 'v2.0.0-beta.1', domains: ['productivity', 'reporting'] },
  { title: 'Przesyłanie plików przeciągnij i upuść', desc: 'Przeciągaj pliki bezpośrednio na obszar przesyłania importu zamiast używać przeglądarki plików.', version: 'v2.0.0-beta.1', domains: ['productivity'] },
  { title: 'Sterowanie pauzą, wznowieniem i anulowaniem', desc: 'Możliwości kontroli zadań dla zadań importu i eksportu — wstrzymuj w godzinach szczytu, wznawiaj później.', version: 'v2.0.0-beta.1', domains: ['productivity', 'scalability'] },
  { title: 'Wsparcie Configurable Product w AI Agent', desc: 'Twórz i zarządzaj produktami konfigurowalnymi z super_attributes i wariantami przez AI Agent.', version: 'v2.0.0-beta.1', domains: ['ai', 'productivity'] },
  { title: 'Aktualizacja frameworka do Laravel 12', desc: 'Aktualizacja z Laravel 10 do Laravel 12 z minimalnym PHP 8.3. Zmodernizowany bootstrap, testy Pest 3.0, Sanctum 4.0.', version: 'v2.0.0-beta.1', domains: ['scalability'] },
  { title: 'Autoryzacja ACL na wszystkich narzędziach AI Agent', desc: 'Kontrola dostępu oparta na rolach wymuszana na wszystkich ponad 30 narzędziach AI Agent i 15 wcześniej niezabezpieczonych trasach API.', version: 'v2.0.0-beta.1', domains: ['governance'] },
  { title: 'Ograniczenie szybkości na endpointach AI', desc: 'Ograniczenie szybkości Throttle:30,1 na endpointach AI Agent, aby zapobiec nadużyciom.', version: 'v2.0.0-beta.1', domains: ['governance', 'scalability'] },
  { title: 'Zoptymalizowany pipeline eksportu', desc: 'Eager loading i zwiększony rozmiar partii (do 200) dla lepszej wydajności eksportu. Eksporty kategorii unikają przeciążenia pamięci.', version: 'v2.0.0-beta.1', domains: ['scalability'] },

  // v1.0.0
  { title: 'Wsparcie PostgreSQL', desc: 'Pełna kompatybilność międzybazowa — używaj PostgreSQL obok MySQL.', version: 'v1.0.0', domains: ['connectivity', 'scalability'] },
  { title: 'Zarządzanie System Prompt', desc: 'Skonfiguruj zachowanie i osobowość AI z predefiniowanymi i niestandardowymi system prompts.', version: 'v1.0.0', domains: ['ai', 'governance'] },
  { title: 'Niestandardowe Prompty dla Magic AI', desc: 'Zdefiniuj konkretne szablony promptów do generowania treści AI z dynamicznymi placeholderami.', version: 'v1.0.0', domains: ['ai', 'productivity'] },
  { title: 'Tłumaczenie wartości produktów', desc: 'Tłumacz wartości atrybutów produktów we wszystkich skonfigurowanych lokalizacjach.', version: 'v1.0.0', domains: ['productivity', 'automation'] },
  { title: 'Kompletność produktów', desc: 'Ocena jakości, która śledzi wymagane informacje o produkcie per kanał i lokalizacja.', version: 'v1.0.0', domains: ['data-quality', 'reporting'] },
  { title: 'Masowa edycja produktów', desc: 'Edytuj wiele produktów naraz — masowo aktualizuj wspólne atrybuty z datagrid.', version: 'v1.0.0', domains: ['productivity'] },
  { title: 'Webhook aktualizacji produktu', desc: 'Automatyczne wywołania zwrotne HTTP, gdy dane produktu są modyfikowane, z zakładkami Logs i History.', version: 'v1.0.0', domains: ['connectivity', 'automation'] },
  { title: 'Wsparcie wideo w Gallery', desc: 'Przesyłaj i zarządzaj plikami wideo w atrybucie galerii obok obrazów.', version: 'v1.0.0', domains: ['productivity'] },

  // v0.3.0
  { title: 'Dynamiczne kolumny Datagrid produktów', desc: 'Dostosuj, które kolumny są widoczne na liście produktów dzięki menedżerowi kolumn z przeciągnij i upuść.', version: 'v0.3.0', domains: ['productivity'] },
  { title: 'Dynamiczne filtry Datagrid produktów', desc: 'Zaawansowane filtrowanie po dowolnej widocznej kolumnie — wyszukiwanie tekstowe, listy rozwijane, zakresy dat.', version: 'v0.3.0', domains: ['productivity'] },
  { title: 'Zadania szybkiego eksportu produktów', desc: 'Dynamicznie zarządzaj szybkimi zadaniami eksportu bezpośrednio z listy produktów.', version: 'v0.3.0', domains: ['productivity'] },
  { title: 'Ulepszona funkcjonalność Magic AI', desc: 'Ulepszone generowanie treści AI z lepszymi promptami i wsparciem modeli.', version: 'v0.3.0', domains: ['ai'] },
  { title: 'Ulepszone filtry Elasticsearch', desc: 'Ulepszone indeksowanie wyszukiwania produktów i obsługa filtrów dla dużych katalogów.', version: 'v0.3.0', domains: ['scalability'] },
  { title: 'Testy end-to-end Playwright', desc: 'Kompleksowy zestaw testów E2E dla zautomatyzowanego testowania UI.', version: 'v0.3.0', domains: ['governance'] },

  // v0.2.0
  { title: 'Powiadomienia w aplikacji i e-mail', desc: 'System powiadomień w czasie rzeczywistym dla zadań importu/eksportu, zmian produktów i zdarzeń systemowych.', version: 'v0.2.0', domains: ['productivity', 'reporting'] },
  { title: 'Instalator GUI', desc: 'Webowy kreator instalacji dla łatwiejszej konfiguracji UnoPim.', version: 'v0.2.0', domains: ['productivity'] },
  { title: 'Magic Image Generation', desc: 'Generuj obrazy produktów z opisów tekstowych przy użyciu DALL-E.', version: 'v0.2.0', domains: ['ai', 'productivity'] },
  { title: 'Endpointy API PATCH i DELETE', desc: 'Nowe endpointy API do patchowania i usuwania produktów i kategorii.', version: 'v0.2.0', domains: ['connectivity'] },
  { title: 'Dynamiczne filtry zadań importu', desc: 'Skonfiguruj zaawansowane warunki filtrowania dla danych importu.', version: 'v0.2.0', domains: ['productivity'] },

  // v0.1.x
  { title: 'Główny system PIM', desc: 'Scentralizowane zarządzanie produktami z typami produktów Simple i Configurable, kategoriami, atrybutami i rodzinami.', version: 'v0.1.x', domains: ['productivity', 'governance'] },
  { title: 'Pipeline importu/eksportu', desc: 'Masowy import i eksport danych produktów i kategorii w formatach CSV, XLS, XLSX.', version: 'v0.1.x', domains: ['connectivity', 'productivity'] },
  { title: 'REST API z OAuth 2.0', desc: 'Pełne RESTful API z uwierzytelnianiem Passport OAuth 2.0 dla integracji zewnętrznych.', version: 'v0.1.x', domains: ['connectivity'] },
  { title: 'Multi-Channel i Multi-Locale', desc: 'Zarządzaj danymi produktów w wielu kanałach, lokalizacjach i walutach.', version: 'v0.1.x', domains: ['scalability', 'productivity'] },
  { title: 'Zarządzanie użytkownikami i rolami', desc: 'Użytkownicy administracyjni z kontrolą dostępu opartą na rolach i niestandardowymi uprawnieniami.', version: 'v0.1.x', domains: ['governance'] },
  { title: 'Motyw ciemny / jasny', desc: 'Przełączaj między trybem ciemnym i jasnym jednym kliknięciem. Preferencja trwa między sesjami.', version: 'v0.1.x', domains: ['productivity'] },
]

function toggleVersion(id) {
  const idx = selectedVersions.value.indexOf(id)
  if (idx > -1) selectedVersions.value.splice(idx, 1)
  else selectedVersions.value.push(id)
}

function toggleDomain(id) {
  const idx = selectedDomains.value.indexOf(id)
  if (idx > -1) selectedDomains.value.splice(idx, 1)
  else selectedDomains.value.push(id)
}

const filteredFeatures = computed(() => {
  return features.filter(f =>
    selectedVersions.value.includes(f.version) &&
    f.domains.some(d => selectedDomains.value.includes(d))
  )
})

function getDomainColor(id) {
  return domains.find(d => d.id === id)?.color || '#666'
}

function getDomainLabel(id) {
  return domains.find(d => d.id === id)?.label || id
}
</script>

# Co nowego

Odkryj wszystkie kluczowe funkcje wydane w wersjach UnoPim. Użyj poniższych filtrów, aby eksplorować funkcje według wersji i obszaru domeny.

<div class="releases-page">

<div class="filter-section">
  <div class="filter-group">
    <h4>WERSJE</h4>
    <div class="filter-chips">
      <button
        v-for="v in versions"
        :key="v.id"
        :class="['chip', { active: selectedVersions.includes(v.id) }]"
        @click="toggleVersion(v.id)"
      >
        <span v-if="selectedVersions.includes(v.id)" class="check">✓</span>
        {{ v.label }}
      </button>
    </div>
  </div>

  <div class="filter-group">
    <h4>OBSZARY DOMENY</h4>
    <div class="filter-chips">
      <button
        v-for="d in domains"
        :key="d.id"
        :class="['chip', 'domain-chip', { active: selectedDomains.includes(d.id) }]"
        :style="selectedDomains.includes(d.id) ? { borderColor: d.color, backgroundColor: d.color + '15' } : {}"
        @click="toggleDomain(d.id)"
      >
        <span v-if="selectedDomains.includes(d.id)" class="check" :style="{ color: d.color }">✓</span>
        {{ d.label }}
      </button>
    </div>
  </div>
</div>

<p class="results-count">
  Oto <strong>{{ filteredFeatures.length }}</strong> kluczowych funkcji dostarczonych w PIM dla wybranych wersji i obszarów.
</p>

<div class="features-grid">
  <div v-for="f in filteredFeatures" :key="f.title" class="feature-card">
    <h3>{{ f.title }}</h3>
    <p class="feature-desc">{{ f.desc }}</p>
    <p class="feature-version">Dostępne od <strong>{{ f.version }}</strong></p>
    <div class="domain-tags">
      <span
        v-for="d in f.domains"
        :key="d"
        class="domain-tag"
        :style="{ borderColor: getDomainColor(d), color: getDomainColor(d) }"
      >
        {{ getDomainLabel(d) }}
      </span>
    </div>
  </div>
</div>

</div>

<style scoped>
.releases-page {
  margin-top: 1rem;
}

.filter-section {
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;
}

.filter-group {
  margin-bottom: 1rem;
}

.filter-group:last-child {
  margin-bottom: 0;
}

.filter-group h4 {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: var(--vp-c-text-2);
  margin-bottom: 0.5rem;
}

.filter-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.chip {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.35rem 0.75rem;
  border: 1.5px solid var(--vp-c-divider);
  border-radius: 20px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-2);
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.15s ease;
}

.chip:hover {
  border-color: var(--vp-c-brand-1);
}

.chip.active {
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  font-weight: 600;
}

.chip .check {
  font-size: 0.75rem;
  font-weight: 700;
}

.results-count {
  font-size: 0.95rem;
  color: var(--vp-c-text-2);
  margin-bottom: 1.5rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1rem;
}

.feature-card {
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  padding: 1.25rem;
  transition: box-shadow 0.2s ease, border-color 0.2s ease;
}

.feature-card:hover {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
}

.feature-card h3 {
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
  color: var(--vp-c-text-1);
  border: none;
  padding: 0;
}

.feature-desc {
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
  line-height: 1.5;
  margin-bottom: 0.75rem;
}

.feature-version {
  font-size: 0.8rem;
  color: var(--vp-c-text-3);
  margin-bottom: 0.75rem;
}

.domain-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
}

.domain-tag {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 600;
  padding: 0.15rem 0.5rem;
  border: 1.5px solid;
  border-radius: 4px;
  background: transparent;
}
</style>
