<div align="center">

[![License: MIT](https://img.shields.io/badge/License-MIT-lightgrey.svg)](LICENSE)
[![Jev](https://img.shields.io/badge/TypeSafe-Jev-0d9488)](https://typesafe.ai/blog/introducing-system-one-models-and-jev)
[![API docs](https://img.shields.io/badge/API-Docs-0f766e)](https://docs.typesafe.ai/api)
[![Python SDK](https://img.shields.io/badge/Python-SDK-3776ab)](https://github.com/typesafe-ai/typesafe-sdk-python)
[![JavaScript SDK](https://img.shields.io/badge/JavaScript-SDK-f7df1e?logo=javascript&logoColor=111827)](https://github.com/typesafe-ai/typesafe-sdk-js)

</div>

# Awesome Jev by TypeSafe

<p align="center"><a href="https://youtu.be/BOn4OMC8O9c"><img src="https://i.ytimg.com/vi/BOn4OMC8O9c/maxresdefault.jpg" width="720"></a></p>
<p align="center"><a href="https://youtu.be/BOn4OMC8O9c"><b>▶ Watch: Jev: 8 Wild Things People Already Built With TypeSafe's New AI Model </b></a></p>

An evidence-backed, practical collection of use cases, patterns, prompts, and starter code for **Jev**, TypeSafe AI’s first **System One Model**.

Jev is built for software that needs a judgment, not a paragraph:

```text
text or JSON state + typed questions → constrained answers + probabilities → your code
```

Use it to classify, route, score, detect, rank, extract, verify, and gate automation. Keep the final control flow, thresholds, and side effects in code.

> This is an independent community collection. It is not an official TypeSafe AI repository. Product behavior, prices, limits, and model aliases can change.
>
> Snapshot reviewed: **September 19, 2026.**

## Related Projects

- [awesome-gpt-6-astra](https://github.com/Anil-matcha/awesome-gpt-6-astra) — sibling evidence-backed use-case collection for a general-purpose reasoning model.
- [awesome-meta-muse-agent](https://github.com/Anil-matcha/awesome-meta-muse-agent) — copy-paste Muse agent briefs with explicit connectors, approval boundaries, and evidence workflows.
- [BTK audit studies](https://boringtoolskit.com/blog/seo-audit-cost-2026/) — Jev-powered technical SEO audit cost study and calculator-site comparison: 1,204 pages crawled, 4,816 typed judgments per run, $0.0048 per 12-query triage batch.
- [awesome-agent-apis](https://github.com/Anil-matcha/awesome-agent-apis) — catalog of APIs and tools that typed decisions can route to.
- [open-business-agents](https://github.com/Anil-matcha/open-business-agents) — specialized business agents that can use Jev as a decision and safety layer.
- [awesome-generative-ai-apps](https://github.com/Anil-matcha/awesome-generative-ai-apps) — production-oriented AI app templates where Jev can help with routing, guardrails, and verification.
- [llm-wiki-agent](https://github.com/SamurAIGPT/llm-wiki-agent) — persistent, interlinked knowledge workflow that pairs naturally with semantic retrieval and citation checks.

## Related directories

- [Awesome Jev directory](https://awesomejev.com/) — searchable, daily-refreshed directory of Jev repositories, live demos, benchmarks, and articles; use it for discovery, not as an endorsement.
- [yibie/awesome-jev](https://github.com/yibie/awesome-jev) — high-signal field guide with explicit inclusion and evidence rules.
- [cobanov/awesome-jev](https://github.com/cobanov/awesome-jev) — source-backed ecosystem list organized around SDKs, agent tooling, workflows, games, reproductions, and evaluation.
- [AnotiaWang/awesome-jev](https://github.com/AnotiaWang/awesome-jev) — broad index covering official resources, clients, agent tools, games, research, cookbooks, and patterns.
- [awesome-typesafe](https://github.com/AbdelStark/awesome-typesafe) — broader TypeSafe/System One index including official resources and community projects.
- [valentynkit/awesome-jev-typesafe](https://github.com/valentynkit/awesome-jev-typesafe) — CC0 and awesome-lint clean, sorted by what you would install, with a short "know before you build" section on the limits.
- [MrJev/awesome-jev](https://github.com/MrJev/awesome-jev) — selective list behind a 10-star bar, paired with hands-on reviews at [mrjev.com](https://mrjev.com/best-jev-tools/) that record what each tool sends and where.

## The short version

Most LLMs produce strings for people. Jev evaluates a state against questions whose answer spaces you define in advance. It returns typed values and probability distributions that ordinary software can branch on.

That makes Jev a good fit for the fuzzy middle between brittle rules and expensive generative workflows:

| If your application needs to… | Reach for… |
|---|---|
| Pick one value from a known set | `Choice` |
| Measure a position on an ordered rubric | `Score` |
| Estimate whether a condition is true | `Noul` |
| Decide whether to act, review, or fall back | probabilities + confidence + code |
| Write an explanation, code, or a reply | an LLM, optionally after Jev routes or verifies it |

## Quick facts

| Item | Current detail | Source |
|---|---|---|
| Model | **Jev**, TypeSafe’s flagship and first System One model | [Introduction](https://docs.typesafe.ai/introduction) |
| API model alias | `jev-latest` | [Models](https://docs.typesafe.ai/models) |
| Current version listed by TypeSafe | `jev-1.13.0` | [Models](https://docs.typesafe.ai/models) |
| Endpoint | `POST https://api.typesafe.ai/v1/systemone` | [API reference](https://docs.typesafe.ai/api) |
| Input | A string, JSON object, or array of text values | [State](https://docs.typesafe.ai/concepts/state) |
| Output | `Choice`, `Score`, and `Noul` answers with typed fields; Choice and Score also include probabilities and confidence | [Primitives](https://docs.typesafe.ai/primitives) |
| Current listed price | `$0.042 / 1M` input tokens; output tokens listed as free | [Models](https://docs.typesafe.ai/models) |
| Current listed limits | `250,000` tokens/second and `1,200` requests/minute; TypeSafe says limits can change dynamically | [Models](https://docs.typesafe.ai/models) |
| Context length | `64k` tokens per request; TypeSafe documents `32k` for state plus the longest question | [Models](https://docs.typesafe.ai/models) |
| Alias behavior | `jev-latest` and `jev-preview` resolve to versioned releases; aliases can move | [Models](https://docs.typesafe.ai/models) |
| Calibration guidance | Pin a versioned model ID when thresholds depend on model behavior, and log the version returned in each response | [Models](https://docs.typesafe.ai/models) |
| Language guidance | English is the primary language; test non-English workloads on representative data before relying on calibrated thresholds | [Models](https://docs.typesafe.ai/models) |
| Data handling | TypeSafe says customer requests and responses are not used to train models; check current enterprise retention terms for zero-data-retention requirements | [Models](https://docs.typesafe.ai/models) |
| Modalities | Text only for now; images, audio, and video are not supported | [System One](https://docs.typesafe.ai/concepts/system-one) |
| Availability | Early access at launch; check the [TypeSafe console](https://console.typesafe.ai/) | [Launch post](https://typesafe.ai/blog/introducing-system-one-models-and-jev) |

TypeSafe’s launch materials report **70–500 ms** end-to-end response times for TypeSafe and describe Jev as roughly two orders of magnitude faster and more efficient for System One-shaped tasks. Treat those as vendor-reported, workload-dependent results; benchmark your own state, question design, network path, and concurrency.

### Official access paths

| Path | Best fit | Notes |
|---|---|---|
| [Official API and SDKs](https://docs.typesafe.ai/api) | Direct production integrations | Use the TypeSafe Python or JavaScript SDK, or call `POST /v1/systemone` directly when you need full control over retries and transport. |
| [Vercel AI Gateway](https://vercel.com/ai-gateway/models/jev) | AI SDK applications | Jev is available as `typesafe-ai/jev`; provider pricing, limits, and gateway behavior should be checked separately from the direct API. |
| [Cloudflare Workers AI](https://developers.cloudflare.com/ai/models/typesafe/jev/) | Edge and Workers deployments | The model is listed as `typesafe/jev`; verify platform-specific context, rate, and data-handling terms. |
| [System One adapter for Python](https://github.com/typesafe-ai/system-one-adapter-python) | Local or provider-backed compatibility testing | A drop-in System One-shaped adapter backed by OpenAI, Anthropic, or OpenAI-compatible models; useful for comparison and development, not a substitute for production Jev calibration. |
| [TypeSafe agent skill](https://docs.typesafe.ai/agent-skill) | Claude Code, Codex, and other coding agents | Official instructions make Jev available as a typed decision tool inside an agent workflow. |

## Read first

1. [Introduction](https://docs.typesafe.ai/introduction) — the core mental model.
2. [State](https://docs.typesafe.ai/concepts/state) — how to package messages, records, policies, and application context.
3. [Primitives](https://docs.typesafe.ai/primitives) — when to use `Choice`, `Score`, or `Noul`.
4. [Confidence](https://docs.typesafe.ai/confidence) — how to turn uncertainty into safe routing.
5. [Patterns](https://docs.typesafe.ai/patterns) — fan-out, confidence gates, composite scoring, and intent routing.
6. [API reference](https://docs.typesafe.ai/api) — the request and response contract.

## Quick start

### Python

The official Python SDK reads `TYPESAFE_API_KEY` from the environment and defaults to `jev-latest`.

```bash
python -m pip install typesafe-sdk
export TYPESAFE_API_KEY="your-key"
python examples/python/quickstart.py
```

```python
from typesafe_sdk import Choice, Noul, Score, TypeSafeClient

state = {
    "ticket": "I was charged twice and need the duplicate refunded today.",
    "account_tier": "business",
}

with TypeSafeClient() as client:
    response = client.system_one(
        state=state,
        questions={
            "intent": Choice(
                instructions="What is the customer's main request?",
                criteria={
                    "refund": "The customer wants money returned.",
                    "technical_help": "The customer needs a bug or integration fixed.",
                    "information": "The customer is asking for information only.",
                    "other": "None of the other options clearly fits.",
                },
            ),
            "is_urgent": Noul(
                instructions="Does the ticket explicitly communicate time pressure?",
            ),
            "frustration": Score(
                instructions="How frustrated does the customer appear?",
                criteria=[
                    "Calm and neutral",
                    "Concerned but civil",
                    "Very angry or using strong language",
                ],
            ),
        },
    )

print(response.answers["intent"].choice)
print(response.answers["intent"].probabilities)
print(response.answers["is_urgent"].noul)
print(response.answers["frustration"].score)
```

### JavaScript / TypeScript

```bash
npm install @typesafe-ai/sdk
export TYPESAFE_API_KEY="your-key"
npx tsx examples/typescript/quickstart.ts
```

```ts
import { choice, noul, score, TypeSafeClient } from "@typesafe-ai/sdk";

const client = new TypeSafeClient();
const result = await client.systemOne({
  state: {
    ticket: "I was charged twice and need the duplicate refunded today.",
  },
  questions: {
    intent: choice("What is the customer's main request?", {
      refund: "The customer wants money returned.",
      technical_help: "The customer needs a bug or integration fixed.",
      information: "The customer is asking for information only.",
      other: "None of the other options clearly fits.",
    }),
    isUrgent: noul("Does the ticket explicitly communicate time pressure?"),
    frustration: score("How frustrated does the customer appear?", [
      "Calm and neutral",
      "Concerned but civil",
      "Very angry or using strong language",
    ]),
  },
});

console.log(result.answers.intent.choice);
console.log(result.answers.isUrgent.noul);
console.log(result.answers.frustration.score);
```

See the [official Python SDK](https://github.com/typesafe-ai/typesafe-sdk-python), [official JavaScript SDK](https://github.com/typesafe-ai/typesafe-sdk-js), and [Quick start](https://docs.typesafe.ai/introduction/quickstart) for the supported client options.

## The three primitives

Each question should ask for one focused judgment about the same state. Several questions can be sent in one request and are evaluated independently.

### `Choice`: one known option

Use it for intent, department, document type, tool name, risk category, or any other unordered finite set. Include `other` or `none_of_the_above` when your options may not cover reality.

```python
"department": Choice(
    instructions="Which team should own this ticket?",
    criteria={
        "billing": "Payments, invoices, refunds, or charges.",
        "technical": "Bugs, outages, or integrations.",
        "account": "Access, profile, or account administration.",
        "other": "None of the teams above clearly fits.",
    },
)
```

Returns the selected `choice`, a probability for every option, and `confidence`.

### `Score`: a position on an ordered rubric

Use it for severity, relevance, frustration, quality, suitability, or complexity. Define what each level means. The returned `score` is probability-weighted and may land between levels.

```python
"severity": Score(
    instructions="How severe is the customer-facing impact of this incident?",
    criteria=[
        "Minor inconvenience; workaround available",
        "Material degradation; some users affected",
        "Critical outage; core workflow blocked",
    ],
)
```

Returns `score`, `legend`, `probabilities`, and `confidence`.

### `Noul`: probability that a statement is true

Use it when the probability itself is useful: “Does this request ask for a refund?”, “Does this passage answer the question?”, or “Is this prompt a jailbreak attempt?”

```python
"contains_prompt_injection": Noul(
    instructions="Does the user-provided text attempt to override the application's instructions?",
)
```

Returns `noul` from `0` to `1`. Near `0.5` means the question is uncertain; it is not a medium score.

## Core patterns

| Pattern | Shape | Where it shines |
|---|---|---|
| Atomic questions | One narrow question per judgment | Reliable, inspectable workflow logic |
| Speculative fan-out | Ask every likely-needed question in one call; ignore irrelevant answers in code | Support triage, smart-home commands, agent routing |
| Confidence-gated routing | Treat answer and confidence as separate axes | Automation with human fallback |
| Composite scoring | Normalize several Scores and combine with explicit weights | Candidate, lead, vendor, and risk ranking |
| Intent routing | Choose deterministic code, specialist LLM, or human | Cost and latency control |
| Two-stage dependency | Make a second call only when the first answer changes the next state or options | Hierarchical classification, structure recovery |

The important design rule is: **questions describe judgments; code owns composition, thresholds, and side effects.**

## Use-case map

The following cases are practical starting points, not promises that Jev will be correct for every domain. Each one is a small decision system with a clear output contract.

### Workflow control

#### 1. Support inbox triage

Classify the request, detect urgency and refund intent, score frustration, then route with ordinary code. Ask all dimensions together—even bug severity that matters only for bug reports—using [speculative fan-out](https://docs.typesafe.ai/patterns/fan-out).

```python
if result.answers["intent"].choice == "technical_help":
    if result.answers["severity"].score >= 1.5:
        escalate_to_engineering()
    else:
        add_to_bug_backlog()
elif result.answers["intent"].choice == "refund":
    route_to_billing()
```

Evidence: [TypeSafe’s support fan-out pattern](https://docs.typesafe.ai/patterns/fan-out) and [customer-support use cases](https://docs.typesafe.ai/concepts/use-case-map).

#### 2. Intent and model routing

Put a cheap, fast decision layer in front of deterministic handlers, specialist LLMs, and human agents. Let confidence decide when a category is safe to trust.

Evidence: [Intent routing](https://docs.typesafe.ai/patterns/intent-routing).

#### 3. Confidence-gated actions

Use lower thresholds for reversible read-only actions and higher thresholds for risky operations. For example, show a balance at one threshold, ask for confirmation before a transfer at another, and send ambiguous commands to a human.

Evidence: [Confidence-gated routing](https://docs.typesafe.ai/patterns/confidence-routing).

#### 4. Typed function and tool dispatch

Map a natural-language command to a function name and closed-set arguments. Jev chooses only from the values your function accepts; code still validates authorization, required fields, and side effects before execution.

Evidence: [Function-calling cookbook](https://docs.typesafe.ai/cookbooks/function_calling).

### Retrieval and knowledge

#### 5. RAG passage filtering

Score relevance, answer support, contradiction, and prompt-injection risk for each retrieved passage. Pass only evidence that clears your application’s thresholds to the answering model.

Evidence: [Classifying RAG passages](https://docs.typesafe.ai/cookbooks/classifying_rag_passages).

#### 6. Semantic search and re-ranking

Use BM25 or embeddings to create a shortlist, then score each query–candidate pair with a `Noul` and sort by the returned value. This gives the semantic stage a numeric signal without asking a generative model to invent a scale.

Evidence: [Re-ranking cookbook](https://docs.typesafe.ai/cookbooks/rerank_typesafe) and [line-by-line search](https://docs.typesafe.ai/cookbooks/semantic_find).

Community implementation: [Jev Search](https://github.com/superagents-lab/jev-search) uses the user's request and retrieved titles and snippets as state, asks Jev `Noul` questions about each result's relevance, then uses application code to deduplicate URLs, sort results, and group lower-scoring matches separately. It also uses `Choice` and `Noul` judgments to select query candidates, time ranges, and sources before retrieval through Search1API; the [live demo](https://jev.s1.dev) displays links and snippets with relevance scores, which are model judgments rather than verified accuracy. This is an independent Search1API project, not an official TypeSafe product.

#### 7. Citation and claim verification

Compare a claim, its cited passage, and the source document. Ask whether the passage supports, contradicts, or fails to establish the claim, and route low-confidence results to review.

Evidence: [Double-checking citations](https://docs.typesafe.ai/cookbooks/citation_check).

#### 8. Knowledge-graph entity alignment

For each candidate pair, choose `merge`, `leave_unlinked`, or `curator_review`, or score how likely the records refer to the same entity. Keep the final merge policy deterministic and auditable.

Evidence: [Knowledge-graph entity alignment](https://docs.typesafe.ai/cookbooks/entity_alignment).

### Safety and quality

#### 9. LLM input/output guardrails

Screen prompts, generated replies, and tool calls with hazard `Noul`s and a harm `Score`. Your policy can pass, review, block, or route instead of relying only on a system prompt.

Evidence: [Guardrails for LLMs](https://docs.typesafe.ai/cookbooks/llm_guardrails).

#### 10. Semantic code and writing linting

Turn team conventions into narrow yes/no checks and run them in CI. Use the result to annotate a pull request or request review; do not silently rewrite code or policy text.

Evidence: [Semantic code linting in the TypeSafe use-case map](https://docs.typesafe.ai/concepts/use-case-map).

#### 11. Policy, compliance, and document verification

Check contracts, filings, marketing claims, or support replies against explicit requirements. Return structured findings and escalate high-impact or ambiguous cases to a named reviewer.

Evidence: [Legal and compliance use cases](https://docs.typesafe.ai/concepts/use-case-map).

#### 12. Self-consistency and uncertain labels

Add an explicit uncertain option to a moderation or classification space, or compare repeated decisions on high-risk inputs. Use disagreement as a review signal, not as a reason to blindly majority-vote.

Evidence: [TypeSafe’s self-consistency cookbooks](https://docs.typesafe.ai/llms.txt).

### Data and operations

#### 13. Structured extraction with validation

Recover known fields from messy text by first finding candidate spans with deterministic code, then using Jev to choose the requested span or label. Normalize dates, amounts, and identifiers in code and validate them before storage.

Evidence: [Pre-parsed value extraction](https://docs.typesafe.ai/cookbooks/pre_parsed_value_extraction_cookbook) and [date extraction](https://docs.typesafe.ai/cookbooks/date_extraction_cookbook).

#### 14. Composite candidate, lead, or vendor scoring

Score independent dimensions—such as role evidence, technical depth, and communication—then combine normalized values with weights you own. The same design works for lead fit, vendor risk, ad suitability, and claim complexity.

Evidence: [Composite scoring](https://docs.typesafe.ai/patterns/composite-scoring).

#### 15. Feature extraction for classical ML

Convert language into probabilistic features such as purchase intent, churn signals, competitive pressure, or complaint severity, then feed them into a supervised model alongside structured features.

Evidence: [Feature extraction use cases](https://docs.typesafe.ai/concepts/use-case-map).

#### 16. High-cardinality and hierarchical classification

For large taxonomies, use staged choices or a probability-aware beam. Let the first decision choose a branch and ask a second question only when the next option set depends on that branch.

Evidence: [Hierarchical classification](https://docs.typesafe.ai/cookbooks/hierarchical_classification).

### Real-time and agentic systems

#### 17. Smart-home and UI command control

Fan out across command category, domain, device type, and action in one request. Use deterministic code for permissions and execution, and hand general conversation to a generative model when the request is outside the closed command space.

Evidence: [Smart-home demo](https://docs.typesafe.ai/demos/smart-home).

#### 18. Agent harness routing and skill suggestion

Use Jev to decide whether a turn needs a skill, tool, retrieval step, or expensive reasoning model. Keep tool descriptions, authorization, and stop conditions outside the model’s answer space.

Evidence: [Agent skill](https://docs.typesafe.ai/agent-skill) and [skill-suggestion cookbook](https://docs.typesafe.ai/cookbooks/skill_suggestion).

Community implementation: [Augustus](https://github.com/24601/Augustus) takes the desired software behavior as state, decomposes it into typed `Choice`, `Score`, and `Noul` questions about where semantic judgment belongs, and keeps thresholds, composition, and side effects in application code. It ships a decision-design card and requires a smallest falsifying experiment before a design is treated as settled. Independent agent skill, not an official TypeSafe product.

### Recent workflow evaluations and cookbook patterns

The following additions come from TypeSafe’s current workflow evaluations and cookbooks. They are useful reference architectures, not guarantees that a model decision is correct. Keep arithmetic, authorization, thresholds, and side effects in code.

#### 19. Security incident response

Join an alert with asset context, open tickets, registered devices, maintenance windows, and standing authorizations. Ask whether the activity is unauthorized, whether an existing record explains it, and how strong the evidence is; then let a deterministic playbook choose close, queue, notify, or containment. Only ask deeper questions about credentials, sessions, processes, and spread after the first branch requires them.

Source: [Security Incidents workflow](https://evals.typesafe.ai/security_incidents).

#### 20. Agent-trace observability

Review a completed agent run—including instructions, conversation, tool calls, final response, and feedback—for permission breaches, task completion, satisfaction, expectation gaps, and silent failures. Route the trace to auto-close, human review, bug filing, or on-call escalation.

Source: [Agent Trace Observability workflow](https://evals.typesafe.ai/agent_trace_observability).

#### 21. Invoice matching and payment controls

Evaluate an invoice against its purchase order, contract, vendor record, prior invoices, correspondence, delivery evidence, and approvals. Use Jev for semantic checks such as duplicate/fraud/wrong-vendor signals and use code for totals, dates, account numbers, and payment execution. Emit actions such as pay, schedule, hold, dispute lines, request correction, or route for approval.

Source: [Invoice Processing workflow](https://evals.typesafe.ai/invoice_processing).

#### 22. Multi-action customer service

Treat a support turn as a set of possible actions rather than a single intent label: say something, refund, freeze a card, set an intent, hand off, flag for review, or close. Fan out over intent, frustration, urgency, consent, fraud, legal risk, and requests for a person; then verify the assistant’s previous claims against account records before allowing a consequential action.

Source: [Customer Service workflow](https://evals.typesafe.ai/customer_service).

#### 23. Expense-claim approval

Check receipt readability, classify the expense, compare meal claims with a policy threshold, and route only the exceptions for approval. Sums and other deterministic calculations belong in code; Jev supplies the semantic readings that select the next rule.

Source: [Expense Claims example in the workflow evals](https://evals.typesafe.ai/).

#### 24. Confidence-aware insurance claims triage

Run a claims rubric as independent `Noul`s for coverage, exclusions, documentation, fraud indicators, review requirements, and related conditions. Preserve each probability and map a middle band to `uncertain`/human review rather than forcing pay or deny.

Source: [Self-consistency for Nouls](https://docs.typesafe.ai/cookbooks/consistency_noul_cookbook) and [insurance claims on the use-case map](https://docs.typesafe.ai/concepts/use-case-map).

#### 25. Abstaining content moderation

Use `Choice` questions for labels such as threat, spam, and general content, with an explicit uncertain outcome or confidence gate. This lets a moderation system measure label stability and send borderline posts to review instead of turning close probabilities into automatic removals.

Source: [Self-consistency for Choices](https://docs.typesafe.ai/cookbooks/consistency_choice_cookbook) and [moderation and trust & safety](https://docs.typesafe.ai/concepts/use-case-map).

#### 26. Batched regulatory and policy review

Ask many independent questions about one long document in one request—for example, whether a policy contains particular obligations, exceptions, or prohibited claims—then use code to assemble the briefing. This is a map-reduce-shaped workflow for document corpora: retrieve or split in code, evaluate in batches, aggregate deterministically.

Source: [Parallel questions](https://docs.typesafe.ai/cookbooks/parallel_questions).

#### 27. Structure recovery from messy text

Recover headings, lists, code blocks, callouts, and paragraph boundaries from plain text that lost its formatting. Use one pass to reconnect hard-wrapped lines and a second typed classification pass for blocks; keep the final Markdown renderer deterministic.

Source: [Structure recovery](https://docs.typesafe.ai/cookbooks/autoformat.md).

#### 28. Verified structured-data extraction cascades

Have a small generative model extract candidate fields, use Jev `Noul`s to check whether each value is missing, unrelated, or unsupported by the source, and escalate only failed fields to a larger reasoning model. This is useful for invoices, claims, applications, and forms where extraction quality matters more than free-form prose.

Source: [SDE cascade](https://docs.typesafe.ai/cookbooks/sde_cascade).

#### 29. Autoresearch for semantic ML features

Let a research loop propose Jev questions, turn free text into numeric `Score`/`Noul` features, train a downstream supervised model, inspect held-out errors, and propose the next questions. The feature table, validation split, and final model stay under ordinary ML tooling.

Source: [Autoresearch feature discovery](https://docs.typesafe.ai/cookbooks/autoresearch_feature_discovery).

#### 30. Confidence-aware hierarchical classification

Classify a document into a fine-grained taxonomy, then use the returned confidence to decide whether to report the narrow label, roll up to a parent category, or ask for review. This avoids a second model call when the taxonomy already provides a safe fallback.

Source: [Classification using confidence](https://docs.typesafe.ai/cookbooks/classification_using_confidence).

#### 31. Real-time game-state and high-cardinality control

When a program can describe the current state and legal actions, Jev can make a fast decision inside the loop: choose a move from a generated action set, or choose the next link from a large frontier such as a Wikiracing page. Keep collision checks, legal-action generation, game rules, deadlines, and fallback actions in code.

Source: [TypeSafe’s launch examples for real-time applications, Doom, and Wikiracing](https://typesafe.ai/blog/introducing-system-one-models-and-jev).

### Additional industry use cases from the current TypeSafe map

These are additional domains explicitly listed in the official use-case map. Each is a good candidate for a small state object, atomic questions, and a code-owned review branch.

| Domain | Example Jev workflow | Source |
|---|---|---|
| Scientific discovery | Screen papers, label themes in qualitative research, check manuscript citations, and link entities to evidence. | [Example use-case map](https://docs.typesafe.ai/concepts/use-case-map) |
| Recruiting | Evaluate job-related evidence, match candidates to roles, route applications, and escalate uncertain cases. | [Example use-case map](https://docs.typesafe.ai/concepts/use-case-map) |
| Lead generation | Score ICP fit, buyer relevance, pain points, and purchase intent before routing leads. | [Example use-case map](https://docs.typesafe.ai/concepts/use-case-map) |
| Insurance claims | Classify first-notice-of-loss records, detect missing information and fraud indicators, and prioritize adjuster review. | [Example use-case map](https://docs.typesafe.ai/concepts/use-case-map) |
| Financial crime | Evaluate transaction narratives, KYC material, and alert histories; match entities and prioritize investigator queues. | [Example use-case map](https://docs.typesafe.ai/concepts/use-case-map) |
| Legal and compliance | Find missing clauses, prohibited claims, and policy violations in contracts, filings, and marketing material. | [Example use-case map](https://docs.typesafe.ai/concepts/use-case-map) |
| E-commerce marketplaces | Normalize listings, extract product attributes, detect counterfeit or prohibited-listing signals, and route exceptions. | [Example use-case map](https://docs.typesafe.ai/concepts/use-case-map) |
| Moderation and trust & safety | Apply organization-specific criteria to toxicity, harassment, spam, fraud, unsafe advice, and personal-data exposure. | [Example use-case map](https://docs.typesafe.ai/concepts/use-case-map) |
| Advertising | Check brand safety, audience suitability, regulatory claims, creative quality, and ad-to-landing-page alignment. | [Example use-case map](https://docs.typesafe.ai/concepts/use-case-map) |
| Gaming | Moderate chat, score engagement or frustration, detect abuse and churn signals, and route player support. | [Example use-case map](https://docs.typesafe.ai/concepts/use-case-map) |
| Risk assessment | Turn incident reports, claims, transaction descriptions, and vendor assessments into probabilistic risk features. | [Example use-case map](https://docs.typesafe.ai/concepts/use-case-map) |
| Demand forecasting | Extract purchase intent, urgency, product interest, supply concerns, and competitive pressure for a time-series model. | [Example use-case map](https://docs.typesafe.ai/concepts/use-case-map) |
| Knowledge graphs | Classify entity types and relationships, detect contradictions, and support probabilistic traversal. | [Example use-case map](https://docs.typesafe.ai/concepts/use-case-map) |

### Recent independent implementations

These are community projects, not TypeSafe endorsements. They show how the same decision-layer interface is being used outside the official examples; treat demos, dry runs, and financial or home-automation integrations as experiments that require your own safety controls.

| Implementation | Use case | Evidence |
|---|---|---|
| [Jev plays Snake](https://github.com/sorrycc/typesafe-snake) | Real-time game control: code generates legal moves and exact state facts, while Jev chooses one move per tick. | Repository |
| [Home Assistant Jev](https://github.com/AboveColin/HA-Jev) | Expose `Noul`, `Choice`, and `Score` answers as automation entities and actions for household workflows. | Repository |
| [Jev MCP server](https://github.com/jkudish/jev-mcp) | Give coding agents typed claim verification, content screening, and semantic ranking tools. | Repository |
| [Jev logs](https://github.com/reachjalil/jevlogs) | Annotate OpenTelemetry/log records with Jev decisions and optionally skip expensive analysis for low-value traces. | Repository |
| [Jev trader](https://github.com/jarrodwatts/jev-trader) | Experimental sub-second market-side decision loop; the project documents a default dry-run and a separate live-trading path. | Repository |
| [jev-align (Sutro)](https://github.com/sutro-sh/jev-align) | Active-learning CLI that evaluates tabular rows with Jev `Choice`, `Score`, or `Noul` questions, sends uncertain and audit samples to a human, and uses GEPA to propose revised definitions while the user retains every label and acceptance decision. | [Jev adapter](https://github.com/sutro-sh/jev-align/blob/main/src/jev_align/jev.py) and [learning loop](https://github.com/sutro-sh/jev-align/blob/main/src/jev_align/session.py) |
| [JevRouter](https://github.com/BillionsBobby/JevRouter) | Model, tool, and subagent routing: Jev answers one typed `Choice` over a candidate capability set while router code owns availability, permissions, risk, confirmation, and fallback policy. | [Router](https://github.com/BillionsBobby/JevRouter/blob/main/src/router.ts) and [provider](https://github.com/BillionsBobby/JevRouter/blob/main/src/provider.ts) |
| [jev-social](https://github.com/socai-io/jev-social) | Social research routing: Jev `Choice` selects the platform and bounded socai operation from observed state, while code rejects malformed or low-confidence decisions before the local CLI performs read-only browser work. | [Classifier](https://github.com/socai-io/jev-social/blob/main/src/classifier.js) and [action loop](https://github.com/socai-io/jev-social/blob/main/src/actions.js) |
| [QuantDinger](https://github.com/OpenByteInc/QuantDinger) | Opt-in live pre-trade gate that sends structured strategy, market, position, exposure, and budget state to Jev `Choice` questions; application code validates probabilities and confidence, blocks rejected entries, bypasses exits and protective orders, and falls back to a configured LLM or a fail-open audited path when Jev is unavailable. | [Implementation](https://github.com/OpenByteInc/QuantDinger/blob/main/backend_api_python/app/services/ai_decision_filter.py) |
| [jev-curate](https://github.com/AkashPriyadarshii/jev-curate) | High-throughput synthetic dataset sifter in Rust: evaluates JSONL and Parquet rows via Jev Noul checks and streams clean/rejected rows to disk. | Repository |
| [is-malicious](https://github.com/luantak/is-malicious) | Scans source, configuration, build, and CI files with Jev `Noul`, `Score`, and `Choice` questions; code-owned thresholds trigger a second pass and determine report severity. | Repository |
| [TypeSafe AI Swift SDK](https://github.com/alterhq/typesafe-sdk-swift) | Swift 6 client for Jev `Choice`, `Score`, and `Noul` questions with strict concurrency, application-owned authentication and retry policy, and network-free tests. | Repository |
| [jev-seo](https://github.com/AkashPriyadarshii/jev-seo) | Zero-cost agent-first SEO and GEO search radar CLI and MCP server. | Repository |
| [jev-superpowers](https://github.com/AkashPriyadarshii/jev-superpowers) | Agentic software-development framework upgraded with TypeSafe Jev typed decisions. | Repository |
| [jev-scout](https://github.com/AkashPriyadarshii/jev-scout) | Open-source repository and crate scout powered by Jev scoring, with Rust, CLI, and MCP surfaces. | Repository |
| [jev-git](https://github.com/AkashPriyadarshii/jev-git) | Rust pre-commit and pre-push gate that screens staged diffs for secrets and destructive commands using Jev Noul checks. | Repository |
| [jevcal](https://github.com/abhixhek/jevcal) | Fits per-question confidence thresholds on labelled data, verifies them on a held-out split, and writes a calibration lock file. | Repository |
| [Janus](https://github.com/FirasSX914/Janus) | Measures calibration and confidence-based routing, with raw JSONL and figures committed for inspection. | Repository |
| [jevql](https://github.com/kylemclaren/jevql) | Adds Jev `Noul`, `Choice`, and `Score` filters, probability sorts, and choice groups to semantic SQL over Postgres. | Repository |
| [jev-pref](https://github.com/doeixd/jev-pref) | Semantic code review: project preferences from AGENTS.md are encoded as rules in `jev-pref.json` and checked with Jev against diff hunks, staged files, or PRs; findings are fed back to the coding agent (`npx jev-pref setup`, MIT). | Repository |
| [wakegate](https://github.com/shitianfang/wakegate) | Experimental wake gate for long-running agents: before a sleeping agent's LLM is resumed on a timer or incoming event, Jev answers one `Choice` (`wake` / `not_yet` / `unrelated`) against the agent's own sleep note; code skips the wakeup only when `wake` is below 0.2 and always wakes on user messages, bare timers, a skip limit, errors, and timeouts. | Repository |
| [Supercov](https://github.com/supercorp-ai/supercov) | Code quality and coverage for coding agents. | Repository |
| [jevkit](https://github.com/ariel-frischer/jevkit) | Typed-decisions CLI: Rust command-line client that accepts `Choice`/`Score`/`Noul` question sets in terse YAML or JSON, validates them offline with 13 lint rules before any call, expands them to the canonical wire payload, and prints parsed answers as JSON; thresholds and exit codes stay in the caller's shell script. | Repository |
| [jev-skip](https://github.com/valentynkit/jev-skip) | Browser extension that reads the YouTube caption track and paints a per-segment sponsor probability on the seek bar before the intro ends, with no crowd database. | Repository; reports catching 77% of SponsorBlock's sponsor seconds across 23 videos at $0.0008 a video. |
| [jev-plays-pokemon-red](https://github.com/valentynkit/jev-plays-pokemon-red) | Real-time game control on PyBoy: deterministic code owns the route and arithmetic while Jev picks only at branches, and each battle turn's faint prediction is scored by Brier against RAM state. | Repository |
| [Jev Trade](https://github.com/aowang-ai/jev-trade) | Each Hyperliquid tick is evaluated as book, tape, and position state; Jev answers `Choice` questions for long/short, open/close/hold, and leverage; application code owns quoting and whether an order is sent. Documents a dry-run path and a separate live-trading path. | Repository |
| [jev-use](https://github.com/shitianfang/jev-use) | Claude Code / Codex / pi plugin that hands steps needing no text output to Jev: MCP tools batch typed `Noul`/`Choice`/`Score` questions about agent state, and a typed escalation contract returns generation-shaped or low-confidence steps to the LLM. | Repository |
| [Jev Web Analyzer](https://github.com/replynodes/jev-web-analyzer) | Public SaaS landing-page evaluation: clean Markdown is the state and ten bounded `Choice` questions ask what a first-time visitor is likely to understand; URL validation, SSRF protection, bounds, caching, sanitization, and presentation remain in application code. | [Integration](https://github.com/replynodes/jev-web-analyzer/blob/main/app/api/analyze/route.ts), [questions](https://github.com/replynodes/jev-web-analyzer/blob/main/lib/founder-questions.ts) |
| [Jev Reranker (Rust CLI)](https://github.com/shinpr/jev-reranker) | Retrieval post-processing CLI that asks Jev separate `Noul` questions for ranking, evidence filtering, and extractive compression, with Rust applying the resulting order and thresholds. | [Jev questions](https://github.com/shinpr/jev-reranker/blob/149ed84e4d3cce66bb3cc997a105d6a252983834/src/http.rs#L224-L240), [selection logic](https://github.com/shinpr/jev-reranker/blob/149ed84e4d3cce66bb3cc997a105d6a252983834/src/ranking.rs#L30-L101), and [evaluation write-up](https://www.norsica.jp/blog/what-retrieval-still-hasnt-decided) |
| [nlgrep](https://github.com/YehuiTang0316/jev-nlgrep) | File search: evaluates code, docs, logs, and text with Jev `Noul` questions against natural-language conditions, while TypeScript applies probability thresholds and returns ranked files with source lines. | [Jev adapter](https://github.com/YehuiTang0316/jev-nlgrep/blob/ceec0d92be8577abd36729d1d4ddae36710e23b4/src/jev.ts) and [search policy](https://github.com/YehuiTang0316/jev-nlgrep/blob/ceec0d92be8577abd36729d1d4ddae36710e23b4/src/search.ts) |
| [slop-grader](https://github.com/lukstei/slop-grader) | Text and documentation quality: CLI tool that checks markdown files against custom rulesets using typed Jev scores and line-level flags, then guides an AI agent to auto-fix violations. | Repository |
| [Soupbase](https://github.com/spoonnotfound/soupbase) | Lateral-thinking puzzle adjudication: Jev `Choice` questions classify player questions and check proposed solutions against required facts, while application code validates results and enforces confidence thresholds before marking a puzzle solved. | [Jev integration](https://github.com/spoonnotfound/soupbase/blob/4e071a5a500f7db2a8ec4f5a3f99aa02a4c784aa/src/server/model.ts) and [solution gate](https://github.com/spoonnotfound/soupbase/blob/4e071a5a500f7db2a8ec4f5a3f99aa02a4c784aa/src/server/guess.ts) |
| [Jev Auto Router](https://github.com/miniLV/Jev-Auto-Router) | Experimental Codex CLI routing: Jev `Choice` selects a host-available model/reasoning pair per call from compact task state; a local Responses proxy preserves the session, while fallback and independent verification remain application-owned. | [Jev adapter](https://github.com/miniLV/Jev-Auto-Router/blob/master/src/jev-adapter.ts), [verification](https://github.com/miniLV/Jev-Auto-Router/blob/master/src/verification.ts), and [prototype status](https://github.com/miniLV/Jev-Auto-Router/blob/master/README.en.md) |

### Curated ecosystem additions

These projects add useful integration surfaces that are easy to miss in a use-case-only list. They are included because their public documentation exposes a concrete Jev decision boundary or a reusable developer workflow; inclusion is not an endorsement.

| Project | Area | Why it belongs |
|---|---|---|
| [typesafe-mcp](https://github.com/itsmostafa/typesafe-mcp) | Agent tooling | Go MCP server and CLI for exposing typed Jev decisions to coding agents and automation. |
| [Jevbridge](https://github.com/gamesonrblx/Jevbridge) | Agent tooling | Agent integration bridge that makes Jev decisions available alongside coding-workflow tools. |
| [jev-axi](https://github.com/shiftynick/jev-axi) | Decision CLI | Command-line primitives for picking, rating, checking, ranking, triaging, and guarding actions. |
| [jev-guard](https://github.com/leepokai/jev-guard) | Guardrails | Experimental tool-call risk scoring with explicit deny, ask, and allow outcomes. |
| [pg-jev](https://github.com/realZachi/pg-jev) | Data and SQL | PostgreSQL extension for asking typed semantic questions over table data. |
| [jev-tree](https://github.com/reachjalil/jev-tree) | Classification | Hierarchical decision-tree workflow for routing high-cardinality categories with Jev. |
| [Jev Ultrafast](https://github.com/browser-use/jev-ultrafast) | Browser use | Jev chooses the browser operation and element while a smaller model writes text, keeping action selection explicit. |
| [Jev for Chrome](https://github.com/chy4pro/jev-for-chrome) | Browser use | Unofficial Chrome extension port of Jev Ultrafast: one Jev request per step selects the operation and DOM element, code owns the loop, budgets and stale checks, and two Noul cross-checks (goal reached, stuck) gate DONE and BLOCKED. |
| [typesafe-mario](https://github.com/fhshaik/typesafe-mario) | Games and simulation | Uses structured emulator state and typed decisions for game control. |
| [jev-drone](https://github.com/RomanSlack/jev-drone) | Robotics and simulation | Experimental MuJoCo quadrotor control loop with Jev in the decision path. |
| [jev-belay](https://github.com/valentynkit/jev-belay) | Guardrails | Claude Code Stop hook that checks transcript evidence before trusting a "done" claim, spending one four-question Jev call only when files changed with no passing check since, and failing open on any error. |
| [jev-commit](https://github.com/valentynkit/jev-commit) | Git tooling | Pre-commit hook that uses one Jev call to check whether the commit message matches the staged diff, flags debug leftovers and unmentioned work, and blocks only when it detects a credential. |
| [jev.nvim](https://github.com/valentynkit/jev.nvim) | Editor tooling | Neovim plugin that splits the buffer into functions with Treesitter, scores each against a plain-language question with Jev, and lists answers in the quickfix window ranked by probability. |

### Benchmarks, calibration, and open reproductions

Keep measured results separate from demos. A useful benchmark record includes the versioned model ID, question definitions, dataset and sample count, deterministic baseline, metric, latency or cost, and the behavior on ambiguous or out-of-domain cases.

| Project | Focus | How to interpret it |
|---|---|---|
| [jev-benchmarks](https://github.com/AbdelStark/jev-benchmarks) | Evaluation and benchmark harnesses | Useful for comparing decision quality and operational behavior; inspect the dataset and protocol before reusing a number. |
| [jev-korean-benchmark](https://github.com/mahlernim/jev-korean-benchmark) | Korean-language evaluation | A language-specific benchmark candidate; treat results as workload evidence rather than a general multilingual guarantee. |
| [openjev-sglang](https://github.com/ekzhang/openjev-sglang) | Open reproduction | Jev-inspired/open-model infrastructure; it is not the hosted TypeSafe Jev model. |
| [jevmlx](https://github.com/bnsd55/jevmlx) | Local MLX experimentation | Jev-style parallel decisions on MLX for local experimentation; compare semantics and calibration separately from hosted Jev. |
| [typesafe-ai-benchmark](https://github.com/iammrduncan/typesafe-ai-benchmark) | Structured-decision comparison | A benchmark project for TypeSafe-shaped decisions; record whether a run uses the official API, a gateway, or an adapter. |
| [PlayJev](https://github.com/OmniJev/PlayJev) | Open reproduction | Open 0.8B model that reads a game frame and scores the moves the game lists in one forward pass; weights, games and the reproduction script are public, and it is not the hosted Jev model. |

For every benchmark entry, prefer a committed dataset or fixture, a reproducible command, and a clear statement of whether the result measures Jev, an adapter, an open reproduction, or a different model with a similar interface.

Have a project that belongs here? See [Adding your implementation](#adding-your-implementation) below.

## A production-shaped decision loop

```text
      ┌────────────┐
      │ state      │  text / JSON records / policy / history
      └─────┬──────┘
            │
            ▼
      ┌────────────┐      typed questions
      │ Jev        │  ──────────────────────┐
      └─────┬──────┘                         │
            │ answers + distributions       │
            ▼                                │
      ┌────────────┐  high confidence       ▼
      │ code       │ ───────────────────► act / route / rank
      │ thresholds │
      └─────┬──────┘  uncertain or risky
            └───────────────────────────► review / confirm / fallback
```

A useful implementation boundary is:

1. **Inspect** the state and decide which judgments the workflow needs.
2. **Evaluate** atomic questions together where they share the same state.
3. **Compose** answers, probabilities, and business rules in code.
4. **Gate** side effects by risk-specific thresholds.
5. **Record** the version, question definitions, distributions, chosen path, and reviewer outcome.
6. **Calibrate** thresholds on representative labeled data and revisit them after model or policy changes.

## What Jev is not

- It is not a chatbot, copywriter, code generator, or explanation engine.
- It does not return arbitrary strings. The answer space comes from the question you define.
- It is not a guarantee that a semantic judgment is correct. Calibration describes groups of predictions, not any individual answer.
- It is not a replacement for authorization, deterministic validation, policy enforcement, or human review in high-impact workflows.
- It does not currently accept images, audio, or video.

When you need a free-form answer, pair Jev with a generative model: let Jev route, retrieve, verify, or guard the call, then let the LLM write within the boundaries your application enforces.

## Safety and reliability checklist

- Keep API keys server-side and restrict which services may call the endpoint.
- Include an `other`, `unknown`, or `review` option whenever the option list can be incomplete.
- Set thresholds per action and risk level; do not copy one global threshold across the system.
- Treat low confidence as a first-class branch: ask for clarification, use a fallback, or involve a person.
- Version state schemas, question instructions, criteria, and policy code together.
- Log the versioned model returned in the response, not only the alias sent in the request.
- Store probability distributions for audit and calibration, not just the winning label.
- Use the SDK’s default retry behavior for `429` and `529`, or implement exponential backoff for direct HTTP calls.
- Make side effects an explicit second step after inspection and approval.
- Evaluate with your own representative cases, including ambiguity, adversarial text, missing fields, and out-of-domain inputs.

## Included examples

| Path | What it demonstrates |
|---|---|
| [`examples/python/quickstart.py`](examples/python/quickstart.py) | One request mixing Choice, Noul, and Score |
| [`examples/python/workflows.py`](examples/python/workflows.py) | Support triage, guardrail questions, semantic re-ranking, and composite scoring |
| [`examples/python/decision_policies.py`](examples/python/decision_policies.py) | Pure policy code for confidence gates and weighted scores |
| [`examples/typescript/quickstart.ts`](examples/typescript/quickstart.ts) | TypeScript SDK usage |
| [`tests/test_decision_policies.py`](tests/test_decision_policies.py) | Offline tests that need no API key |
| [`docs/jev-use-case-playbook.md`](docs/jev-use-case-playbook.md) | Detailed, implementation-oriented case studies |
| [`docs/coding-agent-use-cases.md`](docs/coding-agent-use-cases.md) | Agent harness and coding-agent patterns |

Run the offline checks:

```bash
python -m unittest discover -s tests -v
```

Run a live example only after setting `TYPESAFE_API_KEY`:

```bash
python examples/python/quickstart.py
```

## Repository metadata

The intended GitHub description and topic set are recorded in [`docs/repository-metadata.md`](docs/repository-metadata.md). The topic list is capped at **20**.

## Official references

- [TypeSafe AI](https://typesafe.ai/)
- [Introducing System One Models & Jev](https://typesafe.ai/blog/introducing-system-one-models-and-jev)
- [TypeSafe documentation](https://docs.typesafe.ai/introduction)
- [API reference](https://docs.typesafe.ai/api)
- [Models, aliases, prices, and limits](https://docs.typesafe.ai/models)
- [State](https://docs.typesafe.ai/concepts/state)
- [Primitives](https://docs.typesafe.ai/primitives)
- [Confidence](https://docs.typesafe.ai/confidence)
- [Patterns](https://docs.typesafe.ai/patterns)
- [Example use cases](https://docs.typesafe.ai/concepts/use-case-map)
- [Workflow evaluations](https://evals.typesafe.ai/)
- [Quick start](https://docs.typesafe.ai/introduction/quickstart)
- [Official Python SDK](https://github.com/typesafe-ai/typesafe-sdk-python)
- [Official JavaScript SDK](https://github.com/typesafe-ai/typesafe-sdk-js)
- [Official agent skill guide](https://docs.typesafe.ai/agent-skill)
- [Official agent skills repository](https://github.com/typesafe-ai/skills)
- [System One adapter for Python](https://github.com/typesafe-ai/system-one-adapter-python)
- [Vercel AI Gateway Jev](https://vercel.com/ai-gateway/models/jev)
- [Cloudflare Workers AI Jev](https://developers.cloudflare.com/ai/models/typesafe/jev/)
- [TypeSafe console](https://console.typesafe.ai/)

## Contributing

Useful contributions are small, reproducible, and honest about uncertainty:

- add a use case with a clear state, question contract, code-owned policy, and source;
- include a fixture or offline test when behavior can be checked without an API key;
- report model version, date, thresholds, and evaluation set for performance claims;
- separate TypeSafe-reported results from your own measurements;
- avoid putting credentials, private customer data, or irreversible actions in examples.

See [CONTRIBUTING.md](CONTRIBUTING.md) for the review and evidence checklist used for new projects, benchmarks, and use cases.

### Adding your implementation

Built something on Jev? Open a PR that adds one row to the [Recent independent implementations](#recent-independent-implementations) table (or a short "Community implementation" note under the closest matching use case if a table row doesn't fit). To get merged quickly:

1. **Keep the diff small.** One row or one short paragraph, in the closest matching section. Don't reformat unrelated content in the same PR.
2. **Name it, don't sell it.** One sentence on what state it evaluates, what typed questions it asks (`Choice` / `Score` / `Noul`), and where application code owns policy, thresholds, or side effects.
3. **Disclose affiliation.** Say in the PR description if you built or maintain the project. That's fine — this list is for independent implementations, not just third-party ones — but it must be stated.
4. **Link to evidence.** A public repo, and ideally the specific file(s) that call the Jev API, so reviewers can verify the claim without trusting the description.
5. **Make it inspectable.** Public source, a license, and a README that explains setup and any data sent to providers. No closed demos as the only evidence.
6. **Don't overclaim.** No unverified performance/benchmark numbers. Mark experimental or dry-run-only paths (e.g., trading, financial, or home-automation actions) explicitly.

Listing here is not a TypeSafe endorsement — see the disclaimer above the table.

## License

MIT — see [LICENSE](LICENSE).
