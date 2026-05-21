# Agentic PIM

> **Barre latérale :** **Agentic PIM**
> **Les paramètres se trouvent à :** Magic AI → Settings → section *Agentic PIM* (`/admin/configuration/general/magic_ai`)

**Agentic PIM** est la fonctionnalité phare d'IA d'UnoPim — le parapluie qui couvre chaque workflow IA autonome ou semi-autonome que le produit exécute en votre nom. Depuis une seule carte de paramètres sous **Magic AI → Settings**, vous contrôlez :

- Le panneau **AI Agent Chat** (l'icône étoile flottante en bas à droite de chaque page d'administration).
- Le job en arrière-plan **Auto-Enrichment** qui remplit les champs produit manquants après la création.
- L'analyse planifiée **Catalog Quality Monitor**.
- Le **Confidence Threshold** et le **Change Approval Mode** qui décident quand les changements proposés par l'IA atteignent vos données ou aboutissent dans la file d'attente d'approbation.
- Le **Daily Token Budget** qui plafonne les dépenses combinées de tout ce qui précède.

## Que fait Agentic PIM ?

Considérez Agentic PIM comme une petite équipe de travailleurs IA surveillant votre catalogue :

| Travailleur | Déclencheur | Résultat |
|---|---|---|
| **AI Agent Chat** | Vous tapez une instruction dans le panneau de chat. | Appelle un ou plusieurs des 30+ outils PIM pour exécuter votre demande. |
| **Auto-Enrichment** | Un nouveau produit est créé (manuellement ou par import). | Remplit les descriptions manquantes, les métadonnées SEO, etc. |
| **Catalog Quality Monitor** | Planifié (arrière-plan). | Balaie le catalogue pour détecter les données minces ou incohérentes et les fait apparaître dans Nécessite votre attention. |
| **File d'approbation** | Tout travailleur IA propose un changement. | Retient ou applique le changement selon votre mode d'approbation + le seuil de confiance. |

Les quatre partagent la même Platform, le même Model, le même Prompt, le même System Prompt et le même budget de tokens — configurés une seule fois depuis **Magic AI → Settings**.

## Comment fonctionne Agentic PIM ?

Chaque action d'Agentic PIM suit le même pipeline en cinq étapes :

```
1. Trigger
   ├─ Chat message   (AI Agent Chat)
   ├─ Product create  (Auto-Enrichment)
   ├─ Schedule tick   (Catalog Quality Monitor)
   └─ API action      (anything calling the agent over HTTP)
        │
        ▼
2. Compose context
   - Entity data (+ @attribute_code placeholders expanded)
   - Matching Prompt from Magic AI → Prompts
   - Active System Prompt from Magic AI → System Prompts
   - Remembered facts (RememberFact / RecallMemory)
        │
        ▼
3. Reason (respecting Max Agent Steps Per Turn)
   - LLM picks one or more tools to call
   - Each tool runs against real UnoPim data
   - Only within the caller's ACL permissions
        │
        ▼
4. Decide how to apply the result
   - Confidence ≥ threshold + approval mode allows → apply directly
   - Below threshold OR Manual Review mode → route to Approval Queue
        │
        ▼
5. Respond
   - Chat: stream back over Server-Sent Events
   - Background: write to DB (possibly via approval queue)
   - Record token usage against the Daily Token Budget
```

Ce pipeline s'exécute au-dessus du **LaravelAiAdapter** unifié, donc changer les Platforms ou Models dans les paramètres Magic AI modifie immédiatement le comportement de chaque travailleur Agentic PIM.

## Configuration — les paramètres Agentic PIM

Ouvrez **Magic AI → Settings** et développez la carte **Agentic PIM**. Les champs sont :

| Champ | Ce qu'il fait |
|---|---|
| **Enable AI Agent Chat** | Interrupteur principal pour le panneau de chat flottant. Lorsqu'il est désactivé, l'icône étoile en bas à droite est masquée et aucun utilisateur ne peut converser avec l'agent. Auto-Enrichment et Catalog Quality Monitor continuent de s'exécuter. |
| **Max Agent Steps Per Turn** | Combien d'appels d'outils l'agent peut enchaîner pour un seul déclencheur. Préréglages de liste déroulante plutôt que nombres bruts (par exemple, **`3 (Fast)`**). Plus élevé = plus d'autonomie par tour ; plus bas = contrôle plus strict et tokens moins chers. |
| **Daily Token Budget** | Plafond quotidien global sur les tokens dépensés par Agentic PIM (par exemple, `500000`). Partagé entre le chat, l'enrichissement et la surveillance. Lorsque le plafond est atteint, chaque travailleur IA est mis en pause jusqu'au jour suivant. |
| **Auto-Enrichment on Product Create** | Lorsqu'il est activé, chaque produit nouvellement créé est mis en file d'attente pour un enrichissement en arrière-plan — les descriptions manquantes, les champs SEO, etc. sont remplis automatiquement. |
| **Catalog Quality Monitor** | Exécute un balayage IA planifié qui rapporte les données de catalogue minces, manquantes ou incohérentes dans la section **Nécessite votre attention** du tableau de bord. |
| **Confidence Threshold** | Score de confiance minimum (par défaut **0.7 — Balanced**) requis avant qu'un changement proposé ne soit appliqué sans examen. En dessous du seuil, le changement est retenu dans la file d'attente d'approbation indépendamment du mode d'approbation. |
| **Change Approval Mode** | *Auto-apply* / *Confirm & apply* / *Manual review*. Régit la façon dont les changements proposés par l'IA arrivent dans vos données. Par défaut sur *"Confirm & apply (propose values, ask to confirm, then execute)"*. |

<ImagePopup src="/assets/2.0/images/magic-ai/magic-ai-settings.png" alt="Paramètres Magic AI — section Agentic PIM" />

## Séquence de configuration recommandée

Agentic PIM a beaucoup de boutons. Un déploiement typique ressemble à ceci :

1. **Jour 0 — démarrage prudent.** Activez uniquement AI Agent Chat. Définissez *Max Agent Steps Per Turn* sur le préréglage le plus bas, Daily Token Budget sur un nombre conservateur, et Change Approval Mode sur **Manual review**.
2. **Jour 1-3 — observez dans Analytics.** Surveillez l'utilisation des tokens et quels outils l'agent appelle réellement. Examinez chaque changement dans la file d'attente d'approbation.
3. **Jour 4+ — assouplissez de manière sélective.** Augmentez le budget de tokens une fois que vous comprenez les dépenses. Déplacez les workflows de confiance (par exemple, remplir les meta descriptions dans une famille spécifique) vers **Confirm & apply** ou **Auto-apply**. Laissez les workflows risqués en Manual review.
4. **Semaine 2 — activez les travailleurs en arrière-plan.** Activez d'abord **Auto-Enrichment on Product Create** (entité unique, coût prévisible). Activez **Catalog Quality Monitor** une fois que vous êtes satisfait de la qualité de l'enrichissement.

## Comment Agentic PIM se rapporte aux autres docs

| Si vous souhaitez… | Lisez |
|---|---|
| Apprendre l'interface de chat en détail | **[AI Agent Chat](../ai-agent/ai-agent-chat.md)** |
| Examiner, approuver ou rejeter les changements proposés | **[File d'approbation](../ai-agent/approval-queue.md)** |
| Voir l'utilisation des tokens, les coûts et l'activité | **[Analytics](../ai-agent/analytics.md)** |
| Configurer Platforms, Prompts, Prompts système | **[Magic AI Configuration](../configuration/magic-ai.md)** |
| Affiner le routage par capacité (Text / Image / Translation) | **[Magic AI → Settings](../magic-ai/settings.md)** |

## Contrôles de sécurité en un coup d'œil

Quatre couches s'empilent pour maintenir l'autonomie d'Agentic PIM sous contrôle :

| Couche | Configuré à | Ce qu'elle protège |
|---|---|---|
| **Autorisations ACL** | Settings → Roles | Empêche l'agent de faire quoi que ce soit que le rôle de l'appelant ne peut pas faire. |
| **Daily Token Budget** | Magic AI → Settings → Agentic PIM | Plafonne les dépenses totales sur tous les travailleurs Agentic PIM par jour. |
| **Max Agent Steps Per Turn** | Magic AI → Settings → Agentic PIM | Plafonne combien d'outils un déclencheur peut enchaîner. |
| **Confidence Threshold + Change Approval Mode + File d'approbation** | Magic AI → Settings → Agentic PIM | Retient les écritures risquées ou à faible confiance pour examen. |

Aucun de ces éléments ne nécessite de redéploiement ou de redémarrage — enregistrez la page des paramètres Magic AI et chaque travailleur Agentic PIM récupère les nouvelles valeurs lors de sa prochaine exécution.
