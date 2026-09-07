# Development Workflow

**Version:** 2.1
**Last reviewed:** 2026-09-06
**Status:** Active

---

## 1. Purpose

This document defines the standard development workflow used for projects managed collaboratively by:

- Pedro
- ChatGPT
- Codex
- Kiro
- Git
- GitHub

The objective is to maintain a reliable development process while:

- reducing unnecessary Codex usage;
- keeping technical context recoverable;
- avoiding dependence on conversation history or AI memory;
- maintaining a clear distinction between local development and published checkpoints;
- keeping repositories and technical documentation as durable sources of truth;
- minimizing unnecessary deployments and repository operations.

This workflow is project-independent and should be applied consistently unless a project explicitly documents an exception.

The certified operating architecture is:

```text
Pedro   = AUTHORIZES
ChatGPT = WHAT
Codex   = HOW
Kiro    = ASSURES
```

**AI recommends — Pedro authorizes.** A PASS from an agent is evidence, not automatic authorization.

---

# 2. Core principles

## 2.1 AI memory is context, not source of truth

ChatGPT memory and Project conversations are useful for:

- reasoning;
- historical context;
- preferences;
- product decisions;
- previous discussions;
- roadmap continuity.

They must not be treated as authoritative representations of the current codebase.

When technical accuracy matters, the repository and its documentation must be verified.

---

## 2.2 Distinguish LOCAL, REMOTE, and CONTEXT

Every project can have three different states.

### LOCAL

The repository located on the development machine.

It represents the newest development state and may contain:

- modified files;
- new files;
- uncommitted work;
- local commits not yet pushed;
- experimental changes;
- work completed by Codex but not published.

LOCAL may therefore be ahead of GitHub.

### REMOTE

The repository published in GitHub.

Normally:

```text
origin/main
```

REMOTE represents the latest shared and verifiable checkpoint.

GitHub may contain:

- committed code;
- documentation;
- CI results;
- releases;
- pull requests;
- issues;
- published architecture decisions.

REMOTE must not automatically be assumed to contain the latest LOCAL work.

### CONTEXT

The ChatGPT Project and its conversations.

CONTEXT contains:

- design reasoning;
- architectural discussions;
- customer feedback;
- previous decisions;
- planning;
- roadmap information;
- working preferences.

CONTEXT helps explain **why** decisions were made.

It does not replace LOCAL or REMOTE.

---

## 2.3 Automation First

If an inspection, validation, comparison, evidence collection, or certification action is repeated two or more times and can be expressed deterministically, classify it as an `AUTOMATION CANDIDATE` and evaluate it before continuing to delegate it manually to an agent. A candidate is not an obligation to implement automation.

The objective is to reserve AI capacity for:

- interpreting anomalies;
- making technical decisions;
- designing or correcting implementation;
- evaluating risk and evidence;
- resolving cases that cannot be reduced to deterministic execution.

Prefer scripts, test harnesses, fixtures, structured outputs, and report generators for repeatable work. Choose the implementation technology according to the task and project stack; Automation First does not imply a mandatory programming language.

Before implementation, evaluate the operation's stability, sufficiently deterministic interfaces, added complexity, required discovery/orchestration/polling, probable implementation and debugging cost, expected future frequency, maintenance, and preservation or improvement of the quality gate. Record one of these outcomes when the evaluation is material:

```text
AUTOMATION APPROVED
AUTOMATION DEFERRED
AUTOMATION REJECTED FOR NOW
KEEP REPRODUCIBLE EXPLICIT PROCEDURE
```

Automation must preserve or improve the existing quality gate. Reducing Codex usage is not a reason to weaken validation, omit evidence, or hide failures. Automation First does not require converting every repeated operation into a script: a focused, reproducible explicit procedure is valid when automation costs more than the expected repetition.

Apply a stop-loss before continuing automation work when it starts to require auxiliary infrastructure absent from the original procedure, complex process/container/service discovery, significant polling or readiness handling, multiple wrapper-specific failure modes, or—after an initial remediation—the main problem belongs to the automation rather than the original quality gate. Also stop and reevaluate when manual intervention equals or exceeds the procedure being replaced, or expected maintenance clearly exceeds the benefit. Do not continue because of sunk cost.

When full automation would cost more than the expected repetition, document the decision and keep the procedure focused and reproducible.

---

# 3. Source precedence

When determining the state of a project, use the following rule.

For published project state:

```text
GitHub > ChatGPT memory
```

For work currently under development:

```text
LOCAL repository > GitHub
```

For reasoning and historical intent:

```text
Project context + documentation
```

If ChatGPT memory conflicts with GitHub, GitHub must be verified before proceeding.

If Codex reports valid uncommitted local changes, those changes may legitimately be newer than GitHub.

---

# 4. Responsibilities and operating planes

## 4.1 Pedro — Human Authority

Pedro retains final human authority. By default, Pedro alone accepts or rejects architecture and findings, authorizes implementation, and authorizes exceptions to this workflow. Pedro also holds the default authority for commit, push, merge, release, credentials, secrets, sensitive actions, cloud mutations, spending or resource expansion, and permission elevation.

## 4.2 ChatGPT — Control / Decision Plane

ChatGPT owns the **WHAT**: architecture, planning, micro-delivery design, contracts, acceptance criteria, strategy, tool and agent selection, product analysis, conceptual review, documentation, and evidence interpretation. It may inspect and reconstruct REMOTE state through GitHub when appropriate.

ChatGPT can review architecture, reasoning, and evidence, but **ChatGPT is not the independent implementation assurance layer**. Independent implementation review belongs to `magic-reviewer`; `magic-orchestrator` only routes between Kiro specialists when routing is genuinely ambiguous.

## 4.3 Codex — Implementation Plane

Codex is the principal writer and implementer. It handles implementation, refactoring, tests, debugging, migrations, dependency and configuration changes, build troubleshooting, multi-file changes, and repository-wide changes.

```text
One writer by default.
Codex owns HOW, not authorization.
```

Current baseline:

```yaml
Codex:
  Model: GPT-5.6 Terra
  Effort: Medium
```

Do not escalate merely because a change spans many files; escalate only for a material technical reason. Codex may inspect Git and modify the authorized working tree, but unless explicitly approved:

```text
DO NOT COMMIT
DO NOT PUSH
```

## 4.4 Kiro — Assurance Plane

Kiro supplies specialist evidence and independent implementation assurance. It is not mandatory workflow ceremony.

### `magic-investigator`

`magic-investigator` is a read-only factual and evidence specialist. Use it only when material LOCAL evidence is missing for a decision—for example repository state, documentation, current implementation, branch/worktree state, configuration, or commit-local evidence.

```text
Use investigator to close an evidence gap, not to repeat evidence already available.
```

It must not present inference as observation or claim global absence beyond the scope actually inspected. It may inspect Git read-only.

### `magic-reviewer`

`magic-reviewer` is the independent read-only implementation reviewer. It assesses defects, regressions, contracts, risk, validation, acceptance criteria, scope, tests, and implementation evidence. Its preferred review flow is phase-bounded:

1. **Scope / completeness / cheap consistency:** confirm the required capability is present, inspect diff scope and evident material acceptance criteria, and identify related normative or documentation contradictions.
2. **Deterministic evidence:** consume valid existing evidence before deciding whether any deterministic validation needs re-execution.
3. **Semantic / adversarial assurance:** examine contracts, invariants, security, persistence, fail-open/fail-closed behavior, edge cases, regressions, interactions, and falsification.
4. **Verdict:** issue only `PASS`, `NEEDS_CHANGES`, or `BLOCKED`.

A materially unmet acceptance criterion can never result in `PASS`.

Its verdicts are `PASS`, `NEEDS_CHANGES`, and `BLOCKED`. It must not use model memory as a finding; absence of evidence does not automatically establish incompatibility. Prefer commit-local evidence, falsify candidates before a verdict, and consolidate findings with the same cause. A `LOW` finding alone does not produce `NEEDS_CHANGES`; optional hardening or additional test coverage is not a material defect. It may inspect the Git diff and history needed for review, but never mutates Git.

Execution evidence such as `tests PASS`, `build PASS`, or `lint PASS` is reusable execution evidence; it does not alone demonstrate that tests adequately cover the delivery's risk or contract. Coverage adequacy remains a semantic assurance question. The reviewer may inspect behavior actually covered, unexercised invariants, failure modes, edge cases, and adversarial behavior without re-running the entire suite.

When a material finding determines `NEEDS_CHANGES` or `BLOCKED`, complete the current cheap or active phase to a reasonable bound and consolidate related material findings. Record what was `REVIEWED` and what remains `UNREVIEWED DUE TO EARLY EXIT`; do not enter unnecessary later, more expensive phases. This phase-bounded early exit replaces any interpretation of first finding as immediate stop.

For remediation, use a delta review. `DELTA CLOSURE` applies when the original review completed semantic scope: assess the original finding, remediation diff, associated regression, directly related side effects, reusable evidence, and verdict without recertifying the entire delivery. `DELTA + RESUME` applies when the original review ended through early exit: verify remediation, reuse prior evidence, resume only the review sections recorded as pending, then issue a global verdict. Do not repeat what was already certified.

### `magic-orchestrator`

`magic-orchestrator` is an **OPTIONAL ROUTER** between `magic-investigator` and `magic-reviewer`. Use it only when there is genuine ambiguity about which Kiro specialist should act.

It does not replace ChatGPT, design architecture, write code, become a mandatory wrapper, or run when the executor is known. It needs no Git operations for normal routing.

```text
Known executor → invoke it directly.
```

---

# 5. Work mode

ChatGPT Work is not part of the normal development loop.

Use it only when its capabilities materially justify the agentic resource consumption.

Possible cases include:

- complex artifact production;
- intensive document workflows;
- spreadsheet work;
- specialized multi-step workflows.

Do not use Work merely to inspect a local repository when the same objective can be achieved more efficiently through the normal development process.

---

# 6. Evidence discipline and routing

The global steering policy at `C:\Users\pedro\.kiro\steering\magic-evidence-discipline.md` governs evidence handling. Across every plane:

- distinguish `OBSERVED`, `INFERRED`, and `PROPOSED`;
- declare uncertainty;
- do not attribute an origin without evidence;
- prefer local evidence;
- limit claims to demonstrated scope; and
- treat platform/account usage metrics as authoritative over estimates.

When a real platform or account metric exists for capacity or credits, `platform/account metric > estimates` for total-consumption analysis. Before/after intervention metrics may support attribution, but any difference between the platform total and recorded deltas remains `UNATTRIBUTED`; never distribute or estimate unobserved consumption artificially.

Reviewers should first consume deterministic evidence that is valid, current, and from the same working tree. Do not automatically re-run formatter, lint, typecheck, tests, builds, Git diff checks, migrations, counts, or other mechanical validations when sufficiently concrete evidence already exists. Independent re-execution remains permitted for a material reason—such as elevated risk, contradiction, a change that could invalidate evidence, or specific falsification—and the reviewer should briefly state why repetition added value.

Use the smallest agent topology that satisfies the task. Do not use two agents when one is enough.

| Need | Default executor |
| --- | --- |
| Architecture or planning | ChatGPT |
| Human authorization | Pedro |
| Factual LOCAL repository investigation | `magic-investigator` |
| Implementation or code writing | Codex |
| Independent review or verdict | `magic-reviewer` |
| Ambiguous Kiro specialist routing | `magic-orchestrator` |
| Simple task with a known executor | Invoke that executor directly |
| Repeated deterministic operation | Automation First |

Do not add an agent when ChatGPT already has sufficient evidence, when a reviewer is already known to be required, for trivial documentation changes, or when deterministic automation is sufficient.

**Optimize topology before model/capacity.** Decide in this order:

1. Does any agent need to run?
2. Which single specialist satisfies the need?
3. Does a second specialist add material value?
4. Only then, should model or capacity be escalated?

For Kiro, the reviewer baseline is `Auto`; use the investigator only for missing evidence and the orchestrator only for real routing ambiguity. Estimated tool-call counts are not authoritative economic accounting.

## 6.1 Independent review policy

Independent review is **REQUIRED** by default for security; authentication or authorization; persistent data or migrations; financial or business invariants; cloud or infrastructure; cross-repository contracts; core architecture; high-impact refactors; release candidates; recovery after material validation failures; and changes with significant implementation uncertainty.

It is **RECOMMENDED** for ordinary multi-file features, significant bug fixes, meaningful behavioral changes, test-architecture changes, and non-trivial dependency or configuration changes.

It is **NOT REQUIRED BY DEFAULT** for typos, copy, comments, pure documentation, formatting, simple administrative changes, and deterministic mechanically obvious changes. Pedro may require review in any case.

---

# 7. GitHub responsibilities

GitHub represents the latest published and verifiable project checkpoint.

ChatGPT may use the GitHub integration to inspect:

- repositories;
- branches;
- commits;
- files;
- documentation;
- pull requests;
- issues;
- CI status;
- GitHub Actions;
- workflow results.

GitHub should be used to reconstruct the published technical state of a project.

---

# 8. GitHub write policy

Although integrations may technically permit write operations, ChatGPT should not normally modify production code directly in GitHub.

The preferred code flow is:

```text
LOCAL
↓
Git commit
↓
Git push
↓
GitHub
```

Avoid creating parallel modifications such as:

```text
Codex modifies LOCAL
+
ChatGPT modifies GitHub directly
```

because this can cause divergence between local and remote states.

GitHub write operations from ChatGPT should only be used when explicitly justified and approved.

---

# 9. New session startup protocol

When starting a new ChatGPT conversation for an existing project:

1. Identify the project.
2. Identify the goal of the current session.
3. Read this workflow when available.
4. Consult the relevant GitHub repository or repositories.
5. Determine the latest published checkpoint.
6. Read relevant technical documentation.
7. Compare repository state with available Project context.
8. Do not assume GitHub contains uncommitted local work.
9. Ask for LOCAL state only when it materially affects the task.
10. Use Codex only when repository-local work is required.

This allows a project to remain recoverable even if old conversations are eventually removed.

---

# 10. Multi-repository projects

For projects composed of multiple repositories, ChatGPT should treat them as parts of one system.

Before making cross-system architectural decisions, inspect the relevant repositories.

Examples may include:

```text
frontend
backend
database / core-data
installer
licensing
contracts
documentation
public website
```

GitHub may be used to reconstruct the published architecture across repositories.

Codex should only receive the repositories required for the current implementation task whenever possible.

---

# 11. Micro-deliveries

Development work should be divided into coherent micro-deliveries.

A micro-delivery should contain:

```text
Objective

Relevant context

Current state

Required changes

Constraints

Out of scope

Required validations

Expected final report
```

This reduces unnecessary Codex exploration and keeps implementation sessions focused.

When a micro-delivery includes repeated certification or validation steps, it should also identify:

```text
Existing automation entry points

Missing deterministic tooling

Expected reusable artifacts

Conditions that require agent interpretation
```

Existing deterministic evidence should be identified when available so reviewers can reuse it before re-executing it. If review may end early, the handoff should identify sections as `REVIEWED` or `UNREVIEWED DUE TO EARLY EXIT` so a later delta review can close or resume only the necessary scope.

---

# 12. Standard Codex completion requirements

Unless explicitly instructed otherwise, every Codex development task should end with:

```text
Implementation summary

Files modified

Files created

Important technical decisions

Validation results

Git status
```

Required validation may include, depending on the project:

```text
formatter
lint
typecheck
tests
build
```

Codex should report failures clearly.

Codex handoffs should prefer these implementation-plane terms:

```text
IMPLEMENTATION COMPLETE
IMPLEMENTATION INCOMPLETE
VALIDATION PASSED
VALIDATION FAILED
READY FOR REVIEW
```

Codex may report known failures, but it does not issue or replace the independent Kiro verdict when independent review is required. `PASS`, `NEEDS_CHANGES`, and `BLOCKED` remain Kiro verdicts.

---

# 13. Default Codex Git rule

Unless explicitly approved for a particular task:

```text
DO NOT COMMIT
DO NOT PUSH
```

Codex implements and validates.

Checkpoint management remains a separate development decision.

---

# 14. Commit policy

A commit should represent a coherent recoverable development state.

Do not create commits merely because a single small edit was completed.

Several compatible micro-deliveries may be accumulated before committing.

Example:

```text
Micro-delivery A
+
Micro-delivery B
+
Micro-delivery C
↓
Coherent checkpoint
↓
Commit
```

The deciding question is:

> Would we want to recover or reason about this exact state later?

If yes, it is probably a valid checkpoint.

---

# 15. Push policy

A local commit does not automatically require a push.

Projects may accumulate local commits before publishing them.

This is especially useful when pushes trigger:

- staging deployments;
- CI pipelines;
- external builds;
- infrastructure operations.

Example:

```text
Local changes
↓
Local commit
↓
Additional development
↓
Publishable checkpoint
↓
Push
↓
CI / deployment
```

Project-specific deployment policies take precedence when documented.

---

# 16. Post-push validation

After a checkpoint is pushed, ChatGPT can validate the REMOTE state using GitHub.

Validation may include:

- confirming the commit exists;
- confirming the expected branch;
- inspecting commit contents;
- validating CI;
- reviewing GitHub Actions;
- confirming documentation changes;
- checking pull request status if applicable.

Codex does not need to be used solely for remote verification.

---

# 17. Pull requests

Pull requests are optional and depend on project complexity and team needs.

A small team may reasonably use direct commits to `main` when:

- risk is low;
- CI exists;
- changes are well validated;
- review overhead would provide little value.

Pull requests should be preferred when:

- changes are high risk;
- architecture changes significantly;
- multiple developers contribute simultaneously;
- rollback/review history is particularly valuable;
- protected branches require them.

The workflow may evolve as team size increases.

---

# 18. Durable documentation

Important project decisions must not exist only inside ChatGPT conversations.

When a decision becomes stable, it should eventually be represented in repository documentation.

Typical files include:

```text
README.md
AGENTS.md
ARCHITECTURE.md
DOMAIN.md
docs/
docs/decisions/
docs/known-issues.md
```

The exact structure depends on each project.

Operational peculiarities that have been investigated and are stable and reusable should be evaluated for durable documentation, so agents do not repeatedly spend reasoning capacity rediscovering them. Suitable destinations include `docs/known-issues.md`, runbooks, `AGENTS.md`, or equivalent technical documentation. Do not document every incident automatically; document knowledge when it is sufficiently stable and reusable.

---

# 19. Documentation roles

Use documentation according to purpose.

### DEVELOPMENT_WORKFLOW.md

Defines **how the team works**.

It should remain mostly identical across projects.

### AGENTS.md

Defines repository-specific guidance for AI/development agents.

### ARCHITECTURE.md

Defines the current technical architecture.

### DOMAIN.md

Defines stable domain rules and business relationships.

### docs/decisions/

Stores important architectural or product decisions.

### docs/known-issues.md

Tracks accepted or unresolved technical issues.

---

# 20. Project conversations

ChatGPT Projects are useful for:

- continuity;
- brainstorming;
- historical reasoning;
- customer discussions;
- exploratory decisions.

They should not become the only storage location for important technical decisions.

Anything required to rebuild or correctly understand the project should eventually be documented in the repository.

## 20.1 Project Source mirror rule

For this workflow:

```text
Repository DEVELOPMENT_WORKFLOW.md → AUTHORITATIVE SOURCE
ChatGPT Project Source copy        → SYNCHRONIZED OPERATIONAL MIRROR
```

The Project Source copy provides immediate context when a conversation begins. After an approved and published workflow update, first update, commit, and push the authoritative repository version, then replace the corresponding copies in relevant ChatGPT Projects. If versions differ, the repository wins. Use `Version` and `Last reviewed` to detect desynchronization.

Do not create independent workflow variants for Bank G, Black Rous, or other products. Their particular rules belong in project-specific files such as `AGENTS.md`, `ARCHITECTURE.md`, and documentation under `docs/`.

---

# 21. Plugin policy

External integrations should follow the principle of least privilege.

Do not install integrations simply because they are available.

Install a plugin only when it solves a concrete problem that existing tools cannot solve efficiently.

When possible:

```text
Selected repositories > All repositories
```

Access should be expanded only when necessary.

Agent permissions follow the same rule:

```text
magic-investigator → read-only
magic-reviewer     → read-only
magic-orchestrator → routing/subagent only
Codex              → writer only within authorized scope
ChatGPT            → no direct production GitHub mutation by default
Pedro              → credentials and sensitive-authorization boundary
```

Do not expose secrets unnecessarily or elevate Kiro or an IDE to administrator without explicit need. New credentials, permissions, external mutations, or spending require Pedro's authorization.

---

# 22. Current integration strategy

The default development integration is GitHub.

Additional integrations such as:

- Supabase;
- Cloudflare;
- project management systems;
- documentation systems;

should only be added when a specific development need justifies them.

Avoid creating unnecessary parallel sources of truth.

`magic-development-mcp` is **PRESERVE / FREEZE — NOT CURRENTLY REQUIRED**. It is an experimental/frozen foundation and not part of the default development workflow. Do not automatically continue Assignment, WriterLock, MCP tools, Kiro integration, or Codex integration.

Reopen it only for a concrete unmet need, such as multiple concurrent writers, deterministic writer locking, a durable delivery ledger, persistent multi-repository coordination, automated handoffs, missing enforcement capabilities, or large-scale automated auditability. Do not delete the repository.

---

# 23. Tool selection rule

Use the simplest capable tool.

The routing matrix in section 6 is the default selection rule; it is not a strict hierarchy. The correct tool depends on whether the task requires authorization, reasoning, local or remote repository access, implementation, evidence, independent assurance, or artifact manipulation.

Within any selected tool, prefer an existing deterministic workflow and reusable valid evidence over repeated interactive execution when both satisfy the same requirement. Automation candidates remain subject to the Automation First evaluation and stop-loss rules.

---

# 24. Standard development loop

```text
Requirement / feedback
        ↓
Pedro + ChatGPT define WHAT / architecture / contract
        ↓
Is material LOCAL evidence missing?
        ├─ yes → magic-investigator
        └─ no
        ↓
Codex implements HOW + validates + handoff
        ↓
Does risk/change require independent review?
        ├─ yes → magic-reviewer
        └─ no
        ↓
Pedro + ChatGPT interpret result / decide
        ↓
more work OR accepted
        ↓
Pedro Git checkpoint
        ↓
commit when coherent → decide when to push → GitHub
        ↓
ChatGPT REMOTE validation
        ↓
Delivery closed
```

`magic-orchestrator` is intentionally absent from the happy path: it is exceptional routing support, not a workflow stage.

Where independent review occurs, it normally proceeds from cheap scope/completeness checks, through reusable deterministic evidence, to semantic/adversarial assurance. A material finding may end the review after the current phase is reasonably consolidated, with reviewed and pending scope recorded for delta closure or resume.

---

# 25. Recovery rule

A project should remain understandable even if historical ChatGPT conversations are deleted.

To make this possible:

- GitHub preserves published code;
- Git preserves history;
- repository documentation preserves architecture and decisions;
- Project sources preserve stable workflow instructions;
- ChatGPT conversations provide optional historical context.

No critical project knowledge should depend exclusively on AI memory.

---

# 26. Final operational rule

Before every task, determine which category it belongs to:

### Reasoning problem

Use ChatGPT.

### Published repository question

Use ChatGPT + GitHub.

### Mechanical Git operation

Handle locally.

### Local code modification or deep repository understanding

Use Codex.

### Material LOCAL factual evidence gap

Use `magic-investigator`.

### Independent implementation assurance

Use `magic-reviewer` when required or justified by the review policy.

### Ambiguous Kiro specialist choice

Use `magic-orchestrator` only for that routing decision.

### Specialized agentic artifact workflow

Use Work only when justified.

---

# 27. Change management

This workflow is intended to be stable but not immutable.

When the development environment, team size, ChatGPT capabilities, Codex capabilities, or project requirements materially change, review this document.

Minor improvements increment the version:

```text
1.0 → 1.1
```

Major workflow changes increment the major version:

```text
1.x → 2.0
```

The `Last reviewed` date should be updated whenever the workflow is formally reconsidered.

---

# 28. Current status

This workflow is the active standard for projects managed collaboratively by Pedro, ChatGPT, Codex, and Kiro.

Any project-specific exception should be documented inside that project's repository rather than silently changing this global workflow.
