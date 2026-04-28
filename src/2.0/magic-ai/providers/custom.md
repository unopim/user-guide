# Custom (OpenAI-compatible)

> **Provider ID:** `custom`
> **Hosted by:** You (any endpoint that speaks the OpenAI Chat Completions API)
> **Best for:** Bring-your-own gateways — vLLM, LM Studio, LiteLLM, Bedrock proxies, in-house routers, fine-tuned models behind a private URL.

## What is Custom (OpenAI-compatible)?

The **Custom** provider is an escape hatch. If a model server speaks the **OpenAI Chat Completions** API surface — `/v1/chat/completions`, `/v1/embeddings`, optionally `/v1/images/generations` — UnoPim can call it through this provider. You supply the **Base URL** and (optionally) an **API Key**, and UnoPim treats it like any other vendor.

This is how you wire up:

- **vLLM** or **TGI** serving a Llama / Qwen / Mistral fine-tune behind your firewall.
- **LM Studio** running a local model and exposing the OpenAI-compatible endpoint.
- **LiteLLM** proxy that fronts AWS Bedrock, Vertex AI, or any provider that lacks a native UnoPim integration.
- An **internal API gateway** that adds auth, logging, or rate limiting before calling a provider.
- A **fine-tuned** model your team trained and is hosting privately.

## Capabilities in UnoPim

| Capability | Supported | Depends on |
|------------|:---------:|------------|
| Text Generation | ✓ | Endpoint exposes `/v1/chat/completions` |
| Image Generation | ✓* | Endpoint exposes `/v1/images/generations`. Most local servers do not. |
| Translation | ✓ | Endpoint exposes `/v1/chat/completions` |
| Agentic PIM | ✓* | Endpoint must support OpenAI **tool calls** for the AI Agent's tool loop. Many open-source servers handle this only partially. |

`✓*` = supported only if the upstream server actually implements that part of the API surface.

## Supported models

There's no fixed list — whatever your gateway exposes. UnoPim sends the model name verbatim in the request body, so the value you put in Models must match exactly what your endpoint expects.

Examples:

- vLLM serving `meta-llama/Meta-Llama-3.1-70B-Instruct` → enter that exact ID.
- LiteLLM fronting Bedrock Claude → enter `bedrock/anthropic.claude-3-5-sonnet-20241022-v2:0`.
- LM Studio with a Mistral GGUF → enter the model alias your LM Studio shows.

## Get the endpoint

You provide it. Two pieces:

1. **Base URL** — the root of the OpenAI-compatible API, e.g. `https://gateway.internal.example.com/v1`. Include the `/v1` if your server uses it; UnoPim concatenates the path suffix.
2. **API Key** — only if the endpoint requires authentication. If the endpoint is unauthenticated (e.g. localhost LM Studio), leave the field blank.

Confirm the endpoint works first:

```bash
curl https://gateway.internal.example.com/v1/chat/completions \
  -H "Authorization: Bearer YOUR_KEY" \
  -H "Content-Type: application/json" \
  -d '{"model":"your-model-id","messages":[{"role":"user","content":"hello"}]}'
```

If that returns a JSON response, UnoPim will work too.

## Configure in UnoPim

1. Go to **Magic AI → Platforms → Add Platform**.
2. Modal fields:
   - **Provider** = `Custom (OpenAI-compatible)`
   - **Label** = e.g. *"vLLM Llama-70B"*
   - **Base URL** = your endpoint root, e.g. `https://gateway.internal.example.com/v1`
   - **API Key** = your gateway's key, or leave blank
   - **Models** = the exact model IDs your endpoint expects
   - **Status** = `Enabled`
3. **Save**.

## Use it with each Magic AI feature

In **Magic AI → Settings**:

- **Text Generation** → Platform = Custom, Model = the ID you registered.
- **Image Generation** → only enable if your gateway implements `/v1/images/generations` — most don't.
- **Translation** → Platform = Custom, Model = a small / fast model.
- **Agentic PIM** → Platform = Custom, Model = a tool-use-capable upstream. Test with a simple "list my products" prompt before exposing to users; some open-source servers return malformed tool-call JSON.

## Tips and limits

- **The compatibility surface is partial.** "OpenAI-compatible" is rarely 100%. Confirm streaming, tool calls, and JSON mode all work end-to-end before relying on Custom in production.
- **Network reachability.** UnoPim's PHP-FPM workers must be able to reach the Base URL. If you set a private URL, make sure the application server's egress permits it.
- **Self-signed certs.** If your gateway uses a self-signed TLS cert, either install the cert in the UnoPim app server's trust store or terminate TLS at a reverse proxy with a real cert.
- **Auth schemes.** UnoPim sends the API key as `Authorization: Bearer <key>`. If your gateway uses a custom header (`x-api-key`, etc.), front it with a tiny proxy that rewrites the header.
- **Rate-limit observability.** Custom endpoints don't surface usage in OpenAI's standard format. Plan to monitor spend / latency on your gateway, not in UnoPim.
