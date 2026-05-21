# Introductie

[UnoPim](https://unopim.com/) is een open-source Product Information Management (PIM)-systeem gebouwd op het **Laravel 12**-framework en vereist **PHP 8.3**. Het helpt bedrijven hun productinformatie te organiseren, beheren en verrijken in één centrale opslagplaats.

::: tip Huidige versie — v2.1.0
Deze handleiding behandelt UnoPim **v2.1.0**, uitgebracht op 13 mei 2026. v2.1.0 brengt een productieklare Docker-stack, één-klik Demo Data-seeding, de `ManageAssociations` AI Agent-tool, MagicAI Custom Providers, asynchrone product-webhooks, klikbare dashboard-statistieken en een speciale beveiligingsversteviging. Zie **[Wat is er nieuw](../releases/)** voor de volledige lijst.
:::

## Functies

**1) Gecentraliseerd Productbeheer-**
Beheer al uw productgegevens op één plek met ondersteuning voor Simple- en Configurable-producttypen.

**2) Gegevensverrijking-**
Verbeter uw productinformatie met gedetailleerde attributen, inclusief ondersteuning voor 12 datatypen en swatch-typen voor visuele attribuutopties.

**3) Categoriebeheer-**
Organiseer producten in categorieën voor eenvoudigere navigatie, met aanpasbare categorievelden.

**4) Gebruikersbeheer-**
Beheer gebruikerstoegang en machtigingen met op rollen gebaseerde toegangscontrole.

**5) API-integratie-**
Integreer naadloos met andere systemen via RESTful API's met OAuth 2.0-authenticatie.

**6) Lokalisatie-**
Ondersteuning voor meerdere talen en locales met automatische AI-gestuurde vertaling.

**7) Import/Export-functionaliteit-**
Importeer en exporteer eenvoudig productgegevens met CSV-, XLS- en XLSX-indelingen, met drag-and-drop bestandsupload, realtime job-tracking en pauze/hervat/annuleer-besturingselementen.

**8) Magic AI voor het Genereren van Productcontent-**
Genereer automatisch boeiende productcontent met behulp van geavanceerde LLM-technologie met ondersteuning voor 10+ AI-providers, waaronder OpenAI, Gemini, Anthropic, Ollama en Groq.

**9) Multi-Channel-ondersteuning-**
Beheer en distribueer uw productgegevens via meerdere verkoopkanalen vanaf één platform.

**10) AI Agent Chat-**
Communiceer met uw PIM in natuurlijke taal via de AI Agent Chat-interface met 30+ ingebouwde PIM-tools voor productbeheer, datakwaliteit en bulkoperaties.

**11) Productvolledigheid-**
Bewaak de datakwaliteit met productvolledigheidsscoring die bijhoudt hoeveel verplichte informatie per kanaal en locale is ingevuld.

**12) Notificaties-**
Blijf op de hoogte met in-app- en e-mailnotificaties voor import/export-jobs, productwijzigingen en systeemgebeurtenissen.

**13) Webhooks-**
Automatiseer workflows met product-update-webhooks die HTTP-callbacks activeren wanneer productgegevens wijzigen.

**14) Verbeterd Dashboard-**
Krijg een uitgebreid overzicht van uw catalogus met widgets voor productstatistieken, activiteitsgrafieken, volledigheidsscores, kanaalgereedheid en recente operaties.

**15) Product Bulk Edit-**
Bewerk meerdere producten tegelijk door ze te selecteren in de datagrid en bulkwijzigingen toe te passen op gedeelde attributen.

**16) PostgreSQL-ondersteuning-**
Volledige ondersteuning voor PostgreSQL-databases naast MySQL voor verbeterde cross-database-compatibiliteit.

**17) Productieklare Docker Setup**  -
Start de volledige stack met één commando met behulp van de officiële Docker Hub-images. Multi-container setup met Nginx + PHP-FPM (Apache fallback beschikbaar), Redis, Elasticsearch en Mailpit — allemaal met healthchecks, OPcache-getunede `php.ini` en een auto-publish workflow.

**18) Demo Data Seeding**  -
Evalueer UnoPim onmiddellijk met realistische voorbeeldgegevens. Schakel demo data in vanuit de installer wizard, geef `--with-demo-data` mee aan `php artisan unopim:install`, of voer het standalone commando `php artisan unopim:install:demo-data` op elk gewenst moment na installatie uit.

**19) MagicAI Custom Providers**  -
Sluit elke OpenAI-compatibele service aan — zelf-gehoste gateways, proxies of alternatieve endpoints — door de *Custom*-provider te selecteren op de pagina Magic AI Platforms en uw eigen base URL op te geven.

**20) Asynchrone Product-Webhooks**  -
Webhooks voor productaanmaak/-bijwerking worden op de achtergrond afgehandeld als een wachtrij-`SendProductWebhook`-job, zodat beheeracties onmiddellijk terugkeren, zelfs wanneer het ontvangende endpoint traag is.

**21) Klikbare Dashboard-statistieken**  -
Producttegel-statistieken op het Dashboard (Actief, Inactief, Verrijkt, Met Varianten, …) fungeren nu als filterchips — klik op één en u wordt diep gelinkt naar de productgrid, vooraf gefilterd op die set.

**22) Beveiligingsversteviging**  -
Admin-login rate limiting, server-side wachtwoordvalidatie, bescherming tegen gebruikersopsomming bij wachtwoord-vergeten, blokkering van open redirects, beveiliging tegen privilege-escalatie bij gebruikersbewerking, `clean_content()` XSS-saneringshelper en `APP_DEBUG_ALLOWED_IPS` IP-beperkte debugbar.
