# Development Workflow

**Version:** 1.1  
**Last reviewed:** 2026-08-22  
**Status:** Active

---

## 1. Purpose

This document defines the standard development workflow used for projects managed collaboratively by:

- Pedro
- ChatGPT
- Codex
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

If an inspection, validation, comparison, evidence collection, or certification action is repeated two or more times and can be expressed deterministically, evaluate converting it into a reusable tool before continuing to delegate it manually to an agent.

The objective is to reserve AI capacity for:

- interpreting anomalies;
- making technical decisions;
- designing or correcting implementation;
- evaluating risk and evidence;
- resolving cases that cannot be reduced to deterministic execution.

Prefer scripts, test harnesses, fixtures, structured outputs, and report generators for repeatable work. Choose the implementation technology according to the task and project stack; Automation First does not imply a mandatory programming language.

Automation must preserve or improve the existing quality gate. Reducing Codex usage is not a reason to weaken validation, omit evidence, or hide failures.

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

# 4. Responsibilities

## 4.1 Pedro

Pedro owns final product and development decisions.

Responsibilities include:

- defining business requirements;
- providing customer feedback;
- approving architecture decisions;
- approving checkpoints;
- performing simple local Git operations;
- deciding when work should be committed;
- deciding when work should be pushed;
- reviewing final outcomes.

Typical Git operations handled manually include:

```bash
git status
git diff
git add
git commit
git push
```

These operations should normally not consume Codex capacity.

---

# 5. ChatGPT responsibilities

ChatGPT acts primarily as:

- technical architect;
- development planner;
- analysis layer;
- repository reviewer;
- decision facilitator;
- documentation assistant;
- Codex instruction designer.

ChatGPT should be preferred for:

- architecture;
- domain modeling;
- technical decisions;
- researching implementation approaches;
- evaluating alternatives;
- analyzing customer feedback;
- designing micro-deliveries;
- reviewing published repositories;
- reviewing commits;
- reviewing GitHub CI;
- reviewing pull requests;
- preparing commit messages;
- planning migrations;
- documenting decisions.

Whenever appropriate, ChatGPT should consult GitHub rather than relying exclusively on conversation memory.

---

# 6. Codex responsibilities

Codex is reserved primarily for tasks requiring direct understanding or modification of the local codebase.

Examples include:

- multi-file implementations;
- refactoring;
- repository-wide changes;
- complex debugging;
- migrations;
- dependency changes;
- test implementation;
- build troubleshooting;
- deep codebase exploration;
- architectural changes requiring edits across multiple layers.

Codex should not normally be used for mechanical repository administration.

---

# 7. Codex usage optimization

Codex capacity is considered a limited development resource.

Before assigning work to Codex, ask:

> Does this task require understanding or modifying the local repository?

If the answer is **no**, attempt to solve it with ChatGPT, GitHub, Git, or manual tooling first.

Avoid using Codex exclusively for:

- checking GitHub;
- creating ordinary commit messages;
- performing simple commits;
- pushing;
- checking whether CI completed;
- reading already-published documentation;
- reviewing simple GitHub metadata;
- administrative repository operations.

Codex should spend its capacity primarily on development work where repository understanding provides meaningful value.

For repeated deterministic work, Codex should prefer running or improving an existing automation entry point over reconstructing the procedure interactively. If no suitable tool exists and the procedure is expected to recur, the task should evaluate creating one within the authorized scope.

Automation should emit concise, inspectable evidence whenever practical, such as:

```text
human-readable summary
structured JSON result
logs or artifacts for failed gates
effective runtime and dependency versions
```

---

# 8. Work mode

ChatGPT Work is not part of the normal development loop.

Use it only when its capabilities materially justify the agentic resource consumption.

Possible cases include:

- complex artifact production;
- intensive document workflows;
- spreadsheet work;
- specialized multi-step workflows.

Do not use Work merely to inspect a local repository when the same objective can be achieved more efficiently through the normal development process.

---

# 9. GitHub responsibilities

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

# 10. GitHub write policy

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

# 11. New session startup protocol

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

# 12. Multi-repository projects

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

# 13. Micro-deliveries

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

---

# 14. Standard Codex completion requirements

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

---

# 15. Default Codex Git rule

Unless explicitly approved for a particular task:

```text
DO NOT COMMIT
DO NOT PUSH
```

Codex implements and validates.

Checkpoint management remains a separate development decision.

---

# 16. Commit policy

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

# 17. Push policy

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

# 18. Post-push validation

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

# 19. Pull requests

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

# 20. Durable documentation

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

---

# 21. Documentation roles

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

# 22. Project conversations

ChatGPT Projects are useful for:

- continuity;
- brainstorming;
- historical reasoning;
- customer discussions;
- exploratory decisions.

They should not become the only storage location for important technical decisions.

Anything required to rebuild or correctly understand the project should eventually be documented in the repository.

---

# 23. Plugin policy

External integrations should follow the principle of least privilege.

Do not install integrations simply because they are available.

Install a plugin only when it solves a concrete problem that existing tools cannot solve efficiently.

When possible:

```text
Selected repositories > All repositories
```

Access should be expanded only when necessary.

---

# 24. Current integration strategy

The default development integration is GitHub.

Additional integrations such as:

- Supabase;
- Cloudflare;
- project management systems;
- documentation systems;

should only be added when a specific development need justifies them.

Avoid creating unnecessary parallel sources of truth.

---

# 25. Tool selection rule

Use the simplest capable tool.

Preferred order:

```text
ChatGPT
↓
Git / GitHub
↓
Codex
↓
Work / specialized agentic workflows
```

This is not a strict hierarchy.

The correct tool depends on whether the task requires local repository access, remote repository access, reasoning, or artifact manipulation.

Within any selected tool, prefer an existing deterministic workflow over repeated interactive execution when both satisfy the same requirement.

---

# 26. Standard development loop

The default workflow is:

```text
Requirement / feedback
        │
        ▼
Pedro + ChatGPT
        │
        ├─ analyze
        ├─ define architecture
        ├─ inspect GitHub
        └─ design micro-delivery
        │
        ▼
Codex instruction
        │
        ▼
Codex
        │
        ├─ modify LOCAL repository
        ├─ validate
        └─ report git status
        │
        ▼
Pedro + ChatGPT review
        │
        ├─ more work needed
        │      ↓
        │   next micro-delivery
        │
        └─ checkpoint ready
               │
               ▼
            Git LOCAL
               │
         commit when coherent
               │
               ▼
         decide when to push
               │
               ▼
             GitHub
               │
               ▼
        ChatGPT validation
               │
               ▼
         Delivery closed
```

---

# 27. Recovery rule

A project should remain understandable even if historical ChatGPT conversations are deleted.

To make this possible:

- GitHub preserves published code;
- Git preserves history;
- repository documentation preserves architecture and decisions;
- Project sources preserve stable workflow instructions;
- ChatGPT conversations provide optional historical context.

No critical project knowledge should depend exclusively on AI memory.

---

# 28. Final operational rule

Before every task, determine which category it belongs to:

### Reasoning problem

Use ChatGPT.

### Published repository question

Use ChatGPT + GitHub.

### Mechanical Git operation

Handle locally.

### Local code modification or deep repository understanding

Use Codex.

### Specialized agentic artifact workflow

Use Work only when justified.

---

# 29. Change management

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

# 30. Current status

This workflow is the active standard for projects managed collaboratively by Pedro, ChatGPT, and Codex.

Any project-specific exception should be documented inside that project's repository rather than silently changing this global workflow.
