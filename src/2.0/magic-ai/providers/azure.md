# Azure OpenAI

> **Provider ID:** `azure`
> **Hosted by:** Microsoft Azure (your-resource.openai.azure.com)
> **Best for:** Enterprises already standardised on Azure. Same OpenAI models as the OpenAI provider, but with Azure billing, regional residency, and enterprise SLAs.

## What is Azure OpenAI?

**Azure OpenAI** is Microsoft's hosted version of OpenAI's models. You create an Azure OpenAI resource, deploy specific models inside it, and call them through your Azure endpoint. Quality matches the equivalent OpenAI model; the difference is Azure-managed infrastructure: you pick a region (e.g. `eastus`, `westeurope`), use Azure billing, and inherit Azure AD / private endpoints if you need them.

## Capabilities in UnoPim

| Capability | Supported | Recommended deployments |
|------------|:---------:|-------------------------|
| Text Generation | ✓ | `gpt-4o`, `gpt-4o-mini` deployments |
| Image Generation | ✓ | `dall-e-3` deployment |
| Translation | ✓ | `gpt-4o-mini` deployment |
| Agentic PIM | ✓ | `gpt-4o` deployment |

## Supported models (deployments)

Azure doesn't expose models directly — you create **deployments** of OpenAI models in your Azure resource, each with a deployment name you choose. UnoPim sends requests to the deployment name, not the model name. Common deployments:

- A **`gpt-4o`** deployment for content generation and the AI Agent.
- A **`gpt-4o-mini`** deployment for translation and bulk content.
- A **`dall-e-3`** deployment for image generation (only available in select regions).

::: tip
Match Azure region to your data-residency requirement. For EU residency, deploy in `francecentral`, `northeurope`, `swedencentral`, or `westeurope`. DALL-E availability is regional and changes — check the Azure region table before you commit.
:::

## Get the credentials

In the [Azure portal](https://portal.azure.com/):

1. Create or open an **Azure OpenAI** resource.
2. Note the **Endpoint URL** — looks like `https://my-unopim.openai.azure.com/`.
3. Open **Keys and Endpoint** → copy `KEY 1` (or `KEY 2`).
4. Open **Model deployments** in the resource (or in [Azure AI Studio](https://oai.azure.com/)) and **Create new deployment** for each model you need (`gpt-4o`, `dall-e-3`, etc.). Note the **Deployment name** — that's what UnoPim calls.
5. Note the **API version** you want to pin (e.g. `2024-08-01-preview`). Azure ties feature support to API versions.

## Configure in UnoPim

1. Go to **Magic AI → Platforms → Add Platform**.
2. Modal fields:
   - **Provider** = `Azure OpenAI`
   - **Label** = e.g. *"Azure EU Production"*
   - **API Key** = paste `KEY 1`
   - **Endpoint URL** = `https://my-unopim.openai.azure.com/` (no trailing path)
   - **API Version** = e.g. `2024-08-01-preview`
   - **Models / Deployments** = enter each deployment name you created in Azure (these are *deployment* names, not model names).
   - **Status** = `Enabled`
3. **Save**.

::: tip
If a UnoPim feature returns *"deployment not found"*, the deployment name in UnoPim doesn't match the deployment name inside the Azure resource. Names are case-sensitive.
:::

## Use it with each Magic AI feature

In **Magic AI → Settings**:

- **Text Generation** → Platform = Azure OpenAI, Model = your `gpt-4o` deployment name.
- **Image Generation** → Platform = Azure OpenAI, Model = your `dall-e-3` deployment name (only if that deployment exists in your region).
- **Translation** → Platform = Azure OpenAI, Model = your `gpt-4o-mini` deployment name.
- **Agentic PIM** → Platform = Azure OpenAI, Model = your `gpt-4o` deployment name.

## Tips and limits

- **Quotas are per-deployment.** Azure caps tokens-per-minute and requests-per-minute per *deployment*, not per *resource*. If you hit 429, raise quota in the Azure portal or create a second deployment in another region.
- **Private endpoints.** For locked-down VNets, configure a private endpoint on the Azure OpenAI resource and put UnoPim's app server inside the same VNet — UnoPim doesn't need any code changes.
- **DALL-E availability.** DALL-E 3 is region-restricted on Azure. If your tenant region doesn't have it, route image generation to the public OpenAI provider or Gemini / xAI.
- **Versioning.** Pin the API version. Azure occasionally retires preview API versions; if Magic AI suddenly errors after weeks of working, the version may have been deprecated — bump it on the Platform page.
