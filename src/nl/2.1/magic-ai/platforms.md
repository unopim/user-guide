# Magic AI — Platforms

> **Zijbalk:** Magic AI → **Platforms**
> **URL:** `/admin/magic-ai/platforms`

De **Platforms**-pagina is waar u de AI-providers registreert waarmee UnoPim mag communiceren. Zonder ten minste één actief platform blijft elke andere Magic AI-functie — toverstaf-iconen, automatische vertaling, auto-enrichment en de AI Agent Chat — uitgeschakeld.

## Wat is een Platform?

Een *Platform* is één geconfigureerde providerverbinding. Het heeft drie delen:

1. **Provider** — het bedrijf waarvan u de AI wilt gebruiken (OpenAI, Anthropic, Gemini, Ollama, Groq, **Custom**, enz.).
2. **API-sleutel** — het geheim dat UnoPim autoriseert om de API van die provider aan te roepen.
3. **Ingeschakelde modellen** — welke van de modellen van de provider beschikbaar moeten zijn binnen UnoPim.

U kunt **zoveel Platforms registreren als u wilt**. Een veelvoorkomende setup is één premium-provider voor content (bijv. OpenAI `gpt-4o`) en een goedkopere of snellere voor vertaling (bijv. Gemini `gemini-1.5-flash`). De Platforms-pagina houdt ze naast elkaar; de **Instellingen**-pagina beslist welk Platform welke capability afhandelt.

::: tip Custom Provider
Moet u een OpenAI-compatibele service aanroepen die niet op de presetlijst staat — bijvoorbeeld een zelf-gehoste gateway, een corporate proxy of een alternatieve inference-provider? Kies de **Custom**-provider en lever uw eigen **Base URL** aan. UnoPim routeert verzoeken via dezelfde `LaravelAiAdapter`-pipeline die voor de ingebouwde providers wordt gebruikt.
:::

## Wat doet deze pagina?

- Toont elk Platform dat u hebt geregistreerd, samen met de status en modellen.
- Laat u Platforms **toevoegen**, **bewerken**, **in-/uitschakelen**, **verwijderen** en als **standaard instellen**.
- Versleutelt elke API-sleutel bij opslaan — sleutels worden nooit in platte tekst opgeslagen en worden in de UI gemaskeerd.

<ImagePopup src="/assets/2.1/images/magic-ai/ai-platforms.png" alt="AI Platforms" />

## Platforms-datagrid

| Kolom | Beschrijving |
|--------|-------------|
| **Label** | De naam die u aan de platformconfiguratie hebt toegewezen. |
| **Provider** | De AI-provider (OpenAI, Anthropic, Gemini, Ollama, Groq, enz.). |
| **Models** | De modellen die zijn ingeschakeld voor dit platform. |
| **Default** | Of dit platform de standaard is (Ja/Nee). |
| **Status** | Ingeschakeld of Uitgeschakeld. |
| **Created At** | Datum waarop het platform is toegevoegd. |
| **Actions** | Ster (instellen als standaard), Bewerken (potloodicoon), Verwijderen (prullenbakicoon). |

## Een Platform toevoegen

Klik op de knop **Add Platform** in de rechterbovenhoek. Een modal opent met de volgende velden:

1. **Provider** — Selecteer uit de dropdown (OpenAI, Anthropic, Gemini, Ollama, Groq, **Custom**, enz.).
2. **Label** — Een beschrijvende naam zoals *"OpenAI Production"* of *"Gemini Translation"*. Dit is wat u in de Instellingen-dropdowns ziet.
3. **Base URL** *(alleen Custom-provider)* — Het OpenAI-compatibele endpoint om aan te roepen (bijv. `https://gateway.example.com/v1`). Alleen getoond wanneer **Provider = Custom**.
4. **API Key** — Plak de sleutel van uw provideraccount. Deze wordt versleuteld voordat hij in de database belandt.
5. **Models** — Multi-select de modellen die u beschikbaar wilt maken. Alleen de modellen die u hier aanvinkt, verschijnen in de downstream Text / Image / Translation / Agentic PIM-dropdowns op de Instellingen-pagina.
6. **Status** — Schakel om het platform in of uit te schakelen.

<ImagePopup src="/assets/2.1/images/magic-ai/add-platform.png" alt="Add Platform" />

::: tip
API-credentials worden voor de veiligheid opgeslagen met encrypted credential storage. Uw API-sleutels worden nooit in platte tekst opgeslagen.
:::

### Test Connection

Na het opslaan, gebruik de actie **Test Connection** op de platformrij om credentials te verifiëren voordat u erop vertrouwt. De test wordt aangedreven door de nieuwe **ModelRecommender**, die:

- Een text-capable model selecteert uit uw ingeschakelde lijst (image-only modellen worden overgeslagen, zodat ze geen false-negative retourneren).
- Een klein probe-verzoek tegen de provider verzendt.
- Een duidelijke pass/fail rapporteert. Bij falen vertaalt de [PrismErrorResolver](../ai-agent/index.md) de onderliggende providerfout naar een gebruikersvriendelijk bericht (ongeldige sleutel, rate limit, model niet beschikbaar, enz.).

::: tip
Voer Test Connection uit telkens wanneer u een API-sleutel roteert, de Base URL van een Custom-provider wijzigt of een nieuw model aanvinkt — het is de snelste manier om te bevestigen dat het platform gezond is zonder de AI Agent Chat te openen.
:::

## Platform-acties

- **Ster-icoon** — Stelt het platform in als de **standaard**. Overal waar de Instellingen-pagina *"Use Default Platform"* toont, lost het op naar het ster-platform. Slechts één kan tegelijk de standaard zijn.
- **Test Connection**  — Valideert credentials, de Base URL (voor Custom-providers) en ten minste één bruikbaar text-model. Image-only modellen worden automatisch overgeslagen.
- **Potlood-icoon** — Opent de bewerk-modal zodat u het label kunt bijwerken, de API-sleutel kunt roteren, de modellijst kunt aanpassen of de status kunt omschakelen.
- **Prullenbak-icoon** — Verwijdert de platformconfiguratie. Elke functie die nog steeds naar dit platform verwijst in Instellingen valt terug op de standaard. Onomkeerbaar.

## Hoe platform-selectie naar functies stroomt

```
Platforms (provider + key + models)
        │
        ▼
Settings (pick platform + model per feature)
        │
        ├─► Text Generation ──► Wand icons on text fields
        ├─► Image Generation ──► Wand icons on image/gallery fields
        ├─► Translation ──────► Auto-translate on save + bulk command
        └─► Agentic PIM ──────► AI Agent Chat
```

Elk verzoek — van een enkele veldgeneratie tot een complex AI Agent-plan — volgt de **Agentic PIM Pipeline**:

<ImagePopup src="/assets/2.1/images/ai-agent/agentic-pim-pipeline.png" alt="Agentic PIM Pipeline — 5-staps workflow" />


## Minimum setup

Om welke Magic AI-functie dan ook werkend te krijgen:

1. Registreer ten minste **één** Platform.
2. Zorg ervoor dat het ten minste **één** Model heeft ingeschakeld.
3. Stel de Status in op **Enabled**.
4. **Ster** één Platform als de standaard.

Zodra dat is gebeurd, ga naar **Magic AI → Instellingen** om elke capability (Text / Image / Translation / Agentic PIM) naar een Platform en Model van uw keuze te routeren.
