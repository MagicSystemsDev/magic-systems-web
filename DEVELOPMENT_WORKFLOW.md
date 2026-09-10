# Development Workflow

**Version:** 2.2
**Last reviewed:** 2026-09-10
**Status:** Active

---

## 1. Purpose

This document defines the standard development workflow used for projects managed collaboratively by:

- Pedro;
- ChatGPT;
- Codex;
- Kiro;
- Git;
- GitHub.

The objective is to maintain a reliable development process while:

- reducing unnecessary agentic capacity usage;
- keeping technical context recoverable;
- avoiding dependence on conversation history or AI memory;
- maintaining a clear distinction between local development and published checkpoints;
- keeping repositories and technical documentation as durable sources of truth;
- minimizing unnecessary deployments, infrastructure cycles, and repository operations;
- making evidence, assurance, closure, and authorization explicit;
- preserving strong validation without repeatedly re-running unaffected gates.

This workflow is project-independent and should be applied consistently unless a project explicitly documents an exception.

The certified operating architecture is:

```text
Pedro   = AUTHORIZES
ChatGPT = WHAT
Codex   = HOW
Kiro    = ASSURES
```

**AI recommends — Pedro authorizes.** Evidence, PASS, certification, or technical safety never grants operational authority automatically.

---

# 2. Core principles

## 2.1 AI memory is context, not source of truth

ChatGPT memory and Project conversations are useful for reasoning, historical context, preferences, product decisions, previous discussions, roadmap continuity, and working conventions.

They must not be treated as authoritative representations of the current codebase.

When technical accuracy matters, the repository, runtime evidence, and its durable documentation must be verified.

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

The repository published in GitHub, normally `origin/main` unless the project documents otherwise.

REMOTE represents the latest shared and verifiable checkpoint. It may contain committed code, documentation, CI results, releases, pull requests, issues, and published architecture decisions.

REMOTE must not automatically be assumed to contain the latest LOCAL work.

### CONTEXT

The ChatGPT Project and its conversations.

CONTEXT contains design reasoning, architectural discussions, customer feedback, previous decisions, planning, roadmap information, and working preferences.

CONTEXT helps explain **why** decisions were made. It does not replace LOCAL or REMOTE.

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

Automation must preserve or improve the existing quality gate. Reducing agent usage is not a reason to weaken validation, omit evidence, or hide failures.

Apply a stop-loss before continuing automation work when it starts to require auxiliary infrastructure absent from the original procedure, complex process/container/service discovery, significant polling or readiness handling, multiple wrapper-specific failure modes, or when the automation becomes the main source of failure. Also stop and reevaluate when manual intervention equals or exceeds the procedure being replaced, or expected maintenance clearly exceeds the benefit. Do not continue because of sunk cost.

---

## 2.4 Bounded assurance

Assurance must be strong but bounded.

When a review depends materially on security, authority, privilege, trust, or adversarial behavior, define the relevant `THREAT MODEL / TRUST BOUNDARY` before review whenever practical. State which actors, privileges, resources, and boundaries the contract is expected to resist.

A reviewer must not silently expand the threat model during a delta review. If a distinct material defect is discovered within the original delivery objective, report it explicitly as:

```text
NEW MATERIAL FINDING
```

Do not continuously redefine an existing finding until it becomes impossible to close.

---

## 2.5 Evidence must be canonical, proportional, and scoped

Evidence quality depends on reproducibility, scope, integrity, material dependencies, and review—not on whether a human or an AI initiated the command.

Use these principles:

```text
Status labels are not proof.
Absence is observed only within inspected scope.
NOT_OBSERVABLE is different from ABSENT.
Invalid evidence degrades to NOT_PROVEN.
Revalidate the smallest affected layer.
```

A passing gate remains reusable when its implementation layer and all material dependencies remain unchanged.

---

# 3. Source precedence

When determining project state, use these rules.

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
Project context + durable documentation
```

If ChatGPT memory conflicts with GitHub, verify GitHub before proceeding. If valid LOCAL evidence conflicts with REMOTE, LOCAL may legitimately be newer.

---

# 4. Responsibilities and operating planes

## 4.1 Pedro — Human Authority

Pedro retains final human authority. By default, Pedro alone accepts or rejects architecture and findings, authorizes implementation, and authorizes exceptions to this workflow.

Pedro also holds the default authority for:

- commit;
- push;
- merge;
- release;
- credentials and secrets;
- sensitive actions;
- cloud mutations;
- spending or resource expansion;
- permission elevation;
- destructive actions;
- one-shot or consumable operations.

Technical assurance never broadens an authorization beyond its explicit scope.

---

## 4.2 ChatGPT — Control / Decision Plane

ChatGPT owns the **WHAT**: architecture, planning, micro-delivery design, contracts, acceptance criteria, strategy, tool and agent selection, product analysis, conceptual review, documentation, evidence interpretation, and validation design.

ChatGPT may inspect and reconstruct REMOTE state through GitHub when appropriate.

For local/manual validation, ChatGPT should:

- define what must be proven;
- provide reproducible procedures;
- make procedures compatible with the operator's confirmed shell and environment;
- inspect capabilities, signatures, names, flags, endpoints, and contracts before inventing them when uncertainty is material;
- distinguish implementation defects from harness, environment, fixture, infrastructure, or tooling failures;
- avoid asking Pedro to rerun valid evidence when the changed layer cannot invalidate it.

ChatGPT can review architecture, reasoning, and evidence, but **ChatGPT is not the independent implementation assurance layer**. Independent implementation review belongs to `magic-reviewer`.

---

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

Do not escalate merely because a change spans many files; escalate only for a material technical reason.

Codex may inspect Git and modify the authorized working tree, but unless explicitly approved:

```text
DO NOT COMMIT
DO NOT PUSH
```

Codex should run cheap, deterministic development gates when useful, such as:

```text
formatter
lint
typecheck
focused/unit tests
git diff --check
```

When validation depends on slow, stateful, environment-sensitive, privileged, or non-deterministic LOCAL infrastructure, Codex should not repeatedly consume agentic capacity running or troubleshooting that infrastructure unless the infrastructure lifecycle itself is the delivery under test.

Codex must report exactly which infrastructure-dependent validations remain.

---

## 4.4 Kiro — Assurance Plane

Kiro supplies specialist evidence and independent implementation assurance. It is not mandatory workflow ceremony.

### `magic-investigator`

`magic-investigator` is a read-only factual and evidence specialist. Use it only when material LOCAL evidence is missing for a decision—for example repository state, documentation, current implementation, branch/worktree state, configuration, or commit-local evidence.

```text
Use investigator to close an evidence gap, not to repeat evidence already available.
```

It must not present inference as observation or claim global absence beyond the scope actually inspected. It may inspect Git read-only.

### `magic-reviewer`

`magic-reviewer` is the independent read-only implementation reviewer. It assesses defects, regressions, contracts, risk, validation, acceptance criteria, scope, tests, and implementation evidence.

Its preferred review flow is phase-bounded:

1. **Scope / completeness / cheap consistency:** confirm the required capability is present, inspect diff scope and material acceptance criteria, and identify normative or documentation contradictions.
2. **Deterministic evidence:** consume valid existing evidence before deciding whether any re-execution adds value.
3. **Semantic / adversarial assurance:** examine contracts, invariants, security, persistence, fail-open/fail-closed behavior, edge cases, regressions, interactions, and falsification.
4. **Verdict:** issue only `PASS`, `NEEDS_CHANGES`, or `BLOCKED`.

A materially unmet acceptance criterion can never result in `PASS`.

Execution evidence such as `tests PASS`, `build PASS`, or `lint PASS` is reusable execution evidence; it does not alone prove that tests adequately cover the delivery's risk or contract.

The reviewer should inspect source and directly affected tests first and reuse valid deterministic evidence. It must not rerun infrastructure merely to duplicate evidence. Repetition is justified only when a concrete changed dependency, contradiction, elevated risk, or suspicious result makes prior evidence stale or insufficient.

When a material finding determines `NEEDS_CHANGES` or `BLOCKED`, complete the current cheap or active phase to a reasonable bound and consolidate related material findings. Record:

```text
REVIEWED
UNREVIEWED DUE TO EARLY EXIT
```

Do not enter unnecessary later, more expensive phases.

### `magic-orchestrator`

`magic-orchestrator` is an **OPTIONAL ROUTER** between `magic-investigator` and `magic-reviewer`. Use it only when there is genuine ambiguity about which Kiro specialist should act.

It does not replace ChatGPT, design architecture, write code, become a mandatory wrapper, or run when the executor is known.

```text
Known executor → invoke it directly.
```

## 4.5 Work mode

ChatGPT Work is not part of the normal development loop.

Use it only when its capabilities materially justify the agentic resource consumption, for example complex artifact production, intensive document workflows, spreadsheets, or specialized multi-step workflows.

Do not use Work merely to inspect a local repository when the same objective can be achieved more efficiently through the normal development process.

---

# 5. Closure, certification, and authorization states

The workflow formally distinguishes:

```text
CERTIFIABLE
CERTIFIED
AUTHORIZED
```

### CERTIFIABLE

Assurance has found sufficient evidence to approve the technical state against the defined contract and scope.

### CERTIFIED

Pedro has accepted the micro-delivery or checkpoint as formally closed, informed by ChatGPT interpretation and the available assurance and evidence.

### AUTHORIZED

Pedro has granted a concrete operational authority, such as implementation, commit, push, deployment, provider execution, destructive action, spending, or another sensitive operation.

These states do not imply one another automatically:

```text
CERTIFIABLE ≠ CERTIFIED
CERTIFIED   ≠ AUTHORIZED
PASS        ≠ AUTHORIZED
SAFE TO DELETE ≠ DELETE AUTHORIZED
```

Authorization is scoped. Authorization for one operation does not authorize repetition, escalation, commit, push, deployment, or adjacent actions unless explicitly stated.

---

# 6. Evidence discipline and routing

The global steering policy at `C:\Users\pedro\.kiro\steering\magic-evidence-discipline.md` governs evidence handling.

Across every plane:

- distinguish `OBSERVED`, `INFERRED`, and `PROPOSED`;
- declare uncertainty;
- do not attribute an origin without evidence;
- prefer local evidence;
- limit claims to demonstrated scope;
- distinguish `ABSENT`, `PRESENT`, `NOT_OBSERVABLE`, and `NOT_PROVEN` when material;
- treat platform/account usage metrics as authoritative over estimates.

When a real platform or account metric exists for capacity or credits:

```text
platform/account metric > estimates
```

Any difference between platform total and recorded deltas remains `UNATTRIBUTED`; never distribute or estimate unobserved consumption artificially.

## 6.1 Scoped negative evidence

Absence is only `OBSERVED` within the inspected scope.

Repository-local absence does not establish global nonexistence across ignored files, protected artifacts, external systems, secret stores, runtime state, cloud resources, or uninspected repositories.

If a contract intentionally cannot observe a property, report `NOT_OBSERVABLE` rather than inventing `0`, `NONE`, or `ABSENT`.

Do not silently broaden an exact-read contract into global discovery merely to manufacture stronger evidence.

## 6.2 Status labels are not proof

Labels such as:

```text
PASS
VERIFIED
VALID
CERTIFIED
PLAN_BINDING_VALID
UNCHANGED
```

are declarations of state, not self-validating evidence.

A decision must be traceable to the canonical evidence that supports it. Consumers of certified evidence should reuse the canonical validator/schema when practical. If they cannot, they must validate all material fields that support the decision; they must not create a weaker projection that accepts states rejected by the canonical contract.

## 6.3 Invalid evidence

Missing, malformed, stale, unreadable, partially materialized, or otherwise invalid evidence must degrade to:

```text
NOT_PROVEN
```

Do not reconstruct a PASS retrospectively from surrounding context.

Before/after comparisons require valid materialization of both sides. For example, `UNCHANGED` cannot be established if either artifact or hash is absent, null, unreadable, or incomparable.

## 6.4 Evidence reuse and layer-aware revalidation

Validation must be proportional to the layer changed.

Examples:

```text
test-only change
→ focused/unit gates; do not rerun unrelated infrastructure

browser/service-only change
→ relevant unit/type/lint gates; reuse unchanged DB evidence

SQL migration/RPC change
→ database reset/migration evidence + DB tests as required

privileged runtime boundary change
→ runtime validation required

documentation-only change
→ no infrastructure validation by default
```

A previously passing gate remains valid when its implementation layer and all material dependencies have not changed.

Use the smallest sufficient validation scope first. Do not repeat the full matrix automatically.

## 6.5 Layered validation gates

Prefer validation from cheap/narrow to expensive/broad.

A common pattern is:

```text
focused test
    ↓
focused chain
    ↓
family suite
    ↓
diff check
    ↓
git scope
    ↓
infrastructure/runtime gate when required
```

The exact sequence depends on the project, but do not advance to a broader or more expensive required gate while a narrower prerequisite gate remains red.

Warnings must be classified separately from failures. A known non-blocking warning does not convert a passing gate into failure; it should still be reported with scope and impact.

## 6.6 Routing

Use the smallest agent topology that satisfies the task.

| Need | Default executor |
| --- | --- |
| Architecture or planning | ChatGPT |
| Human authorization | Pedro |
| Factual LOCAL repository investigation | `magic-investigator` |
| Implementation or code writing | Codex |
| Cheap deterministic development gates | Codex or LOCAL terminal as appropriate |
| Heavy/canonical LOCAL infrastructure validation | Pedro / LOCAL terminal |
| Independent review or verdict | `magic-reviewer` |
| Ambiguous Kiro specialist routing | `magic-orchestrator` |
| Repeated deterministic operation | Automation First |

Do not add an agent when ChatGPT already has sufficient evidence, when a reviewer is already known to be required, for trivial documentation changes, or when deterministic automation is sufficient.

**Optimize topology before model/capacity.** Decide in this order:

1. Does any agent need to run?
2. Which single specialist satisfies the need?
3. Does a second specialist add material value?
4. Only then, should model or capacity be escalated?

---

## 6.7 Independent review policy

Independent review is **REQUIRED** by default for security; authentication or authorization; persistent data or migrations; financial or business invariants; cloud or infrastructure; cross-repository contracts; core architecture; high-impact refactors; release candidates; recovery after material validation failures; and changes with significant implementation uncertainty.

It is **RECOMMENDED** for ordinary multi-file features, significant bug fixes, meaningful behavioral changes, test-architecture changes, and non-trivial dependency or configuration changes.

It is **NOT REQUIRED BY DEFAULT** for typos, copy, comments, pure documentation, formatting, simple administrative changes, and deterministic mechanically obvious changes. Pedro may require review in any case.

---

# 7. Threat models, findings, and delta review

## 7.1 Freeze closure criteria before remediation

For a material review finding, freeze a verifiable closure contract before or at the start of remediation when practical:

```text
FINDING CLOSES IF:
A
B
C
```

A finding closes only when the required semantics **and** any explicitly frozen regression evidence are satisfied.

Correct-looking implementation does not substitute for a regression test that was explicitly part of acceptance or closure criteria.

If a new independent defect appears, report:

```text
NEW MATERIAL FINDING
```

Do not mutate the original finding continuously.

## 7.2 Smallest affected layer

When Kiro returns `NEEDS_CHANGES`:

- preserve findings already closed;
- remediate the newly identified defect at the smallest sufficient layer;
- do not reopen unrelated architecture without material evidence;
- define the smallest sufficient regression test;
- do not repeat the full validation matrix automatically.

Before expanding implementation, classify the required regression matrix as:

```text
PRESENT
MISSING
```

Complete the missing evidence before redesigning code that is already semantically correct.

## 7.3 Delta modes

Use `DELTA CLOSURE` when the original review completed semantic scope. Assess only:

- active original finding(s);
- remediation diff;
- frozen closure criteria;
- associated regression;
- directly related side effects;
- still-valid reusable evidence.

Use `DELTA + RESUME` when the original review ended through early exit. Verify remediation, reuse prior evidence, resume only sections recorded as pending, then issue a global verdict.

If a full review recorded:

```text
UNREVIEWED DUE TO EARLY EXIT = NONE
```

then a later materially bounded change should normally use delta review rather than recertifying the full delivery.

A delta review is valid only while the change remains bounded and cannot invalidate previously certified scope.

---

# 8. Local infrastructure validation responsibility

When validation depends on LOCAL infrastructure that is slow, stateful, environment-sensitive, privileged, or known to fail non-deterministically, do not repeatedly consume agentic capacity running that infrastructure workflow.

## Codex

- implements the authorized delivery;
- runs cheap deterministic gates when useful;
- reports exact commands that remain for infrastructure validation;
- does not repeatedly troubleshoot Docker, databases, local service lifecycle, or equivalent infrastructure unless that behavior is itself under test.

## Pedro / LOCAL terminal

Pedro may execute final infrastructure-dependent validation, including when applicable:

- local service startup;
- database reset;
- migration application evidence;
- database test suites;
- privileged/local runtime execution;
- builds requiring process-scoped/local runtime configuration;
- container/service cleanup;
- cleanup of process-scoped credentials or variables.

The resulting raw evidence is returned to ChatGPT/Kiro for interpretation and assurance.

## ChatGPT

- defines WHAT must be validated;
- provides reproducible procedures compatible with the confirmed environment;
- interprets the resulting evidence;
- decides whether further infrastructure validation is materially necessary;
- distinguishes product defects from fixture, harness, CLI, environment, tooling, or infrastructure failures.

## Kiro

- reuses valid supplied deterministic evidence;
- reviews source and directly affected tests first;
- does not rerun infrastructure merely to duplicate evidence;
- requests repetition only for a material reason.

Human-executed validation is not weaker evidence by default. Evidence quality depends on reproducibility, scope, integrity, and review.

## 8.1 Infrastructure failure does not establish product failure

When infrastructure-dependent validation fails because of fixture state, CLI/environment behavior, harness configuration, stale process identity, malformed test helpers, service lifecycle, or similar tooling concerns, first determine whether production code is actually defective.

Do not weaken security, authorization, persistence, financial/business invariants, or production behavior merely to satisfy a faulty test or unstable harness.

Classify the failure source before deciding the remediation layer.

---

# 9. Reproducible runtime procedures

A reproducible procedure is part of the evidence contract.

## 9.1 Shell and environment compatibility

Manual execution recipes must be compatible with the operator's confirmed shell and environment.

Before relying on shell-specific flags or behavior, inspect the effective shell/version when material. Prefer conservative commands when compatibility is uncertain.

## 9.2 Inspect before inventing

When there is material risk of guessing, inspect the real capability or contract before invoking it.

This applies to, for example:

- RPC/function signatures;
- CLI flags;
- endpoints;
- request/response schemas;
- service or container names;
- canonical evidence paths;
- configuration keys;
- runtime identities.

```text
Inspect before inventing.
```

## 9.3 PASS must be conditional

Never print positive evidence after a failed prerequisite merely because the next line of a shell block executes.

Positive labels such as:

```text
PASS
PRESENT
UNCHANGED
VERIFIED
```

must be emitted only within the control-flow branch that actually established the condition.

A procedure that can print PASS after a failure is itself invalid evidence tooling.

---

# 10. Authorized and consumable operations

Operations that are one-shot, destructive, externally mutating, rate/cost constrained, or explicitly authorized for a limited count require a stricter harness boundary.

## 10.1 Fail-fast precheck boundary

All preconditions must complete successfully within the same reliable control flow before the point of consumption.

Do not assume that a visible `throw` or error in an interactive terminal stopped the remainder of a pasted block.

Prefer a single script/process with strict error handling for consumable operations.

Use an explicit boundary such as:

```text
PRECHECKS
    ↓
PRECHECK COMPLETE = PASS
    ↓
AUTHORIZED CONSUMPTION BOUNDARY
    ↓
ONE-SHOT / MUTATING OPERATION
```

Do not cross the authorized consumption boundary unless all required prechecks passed.

## 10.2 Consumed authority is not automatically restored

If the operation crossed the consumption boundary, the authorized execution may be consumed even if post-operation verification, serialization, or wrapper logic later fails.

A defective wrapper does not automatically authorize another provider call, mutation, retry, or one-shot operation.

A new execution requires either proof that the prior operation did not occur or explicit renewed authorization, according to the contract.

## 10.3 Wrapper success is not operation success

Distinguish:

```text
wrapper/process success
operation observed
provider success
schema/contract success
runtime success
```

An exit code of `0` proves only what the wrapper contract actually guarantees.

## 10.4 Observability before retry

For diagnostic or consumable operations, improve observability before repeating when the previous execution was insufficiently informative.

Prefer adding structured failure stages, explicit result artifacts, exit semantics, or other bounded diagnostics before spending another authorized execution.

---

# 11. Fault injection and regression boundaries

## 11.1 Test the original failure boundary

A remediation is not fully regression-protected if tests mock away the exact material boundary where the defect occurred.

At least one appropriate regression should exercise the original failure boundary when that boundary is material to the defect.

## 11.2 Preserve earlier guards

Before designing a fault injection:

1. identify the exact boundary under test;
2. preserve earlier eligibility checks and preconditions that are not the target;
3. advance the operation to the intended state;
4. inject the controlled failure only after the relevant boundary.

A fault injected before the intended boundary proves a different contract.

## 11.3 Prefer supported interfaces

Do not modify internal tables or implementation details of external services merely to manufacture runtime scenarios when a supported public/service interface exists.

Prefer supported interfaces for fault injection, especially when certifying real runtime behavior. Direct internal manipulation is justified only when that internal layer is itself the subject of the test or no supported alternative can prove the required contract.

---

# 12. Cross-system and privileged operations

## 12.1 Explicit partial-failure contracts

For operations spanning systems that do not share a transaction boundary, never claim distributed atomicity that does not exist.

Define, when material:

- failure before external mutation;
- external mutation success + local/DB finalization failure;
- durable intermediate state;
- reconciliation-required state;
- retry/idempotency expectations.

Preserve these distinctions through application layers, evidence, and tests.

## 12.2 Privileged server boundaries

When privileged credentials or elevated service identities are required:

- keep privilege server-side or behind the narrowest authorized boundary;
- authorize the caller before the privileged action;
- prefer narrow, action-specific endpoints;
- derive or authorize target resource identity server-side when practical;
- never expose privileged credential material to an untrusted/browser client;
- avoid generic privileged mutation surfaces without a material need.

Project-specific details belong in architecture/security documentation rather than this global workflow.

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

When review or remediation is expected, also include when material:

```text
Threat model / trust boundary
Frozen acceptance / closure criteria
Existing automation entry points
Existing reusable evidence
Missing deterministic tooling
Expected reusable artifacts
Conditions requiring agent interpretation
```

If review may end early, record `REVIEWED` and `UNREVIEWED DUE TO EARLY EXIT` so later delta review can close or resume only necessary scope.

---

# 14. Standard Codex completion requirements

Unless explicitly instructed otherwise, every Codex development task should end with:

```text
Implementation summary
Files modified
Files created
Important technical decisions
Validation results
Remaining infrastructure-dependent validation
Git status
```

Codex handoffs should use these implementation-plane terms:

```text
IMPLEMENTATION COMPLETE
IMPLEMENTATION INCOMPLETE
VALIDATION PASSED
VALIDATION FAILED
READY FOR REVIEW
NOT READY FOR REVIEW
```

Logical rule:

```text
READY FOR REVIEW
only if
IMPLEMENTATION COMPLETE
AND
VALIDATION PASSED
```

If implementation is incomplete or required validation failed, the handoff must be `NOT READY FOR REVIEW` unless the task was explicitly a partial diagnostic handoff rather than a review candidate.

Codex may report known failures, but it does not issue or replace the independent Kiro verdict. `PASS`, `NEEDS_CHANGES`, and `BLOCKED` remain Kiro review verdicts.

---

# 15. Git and checkpoint policy

## 15.1 Default Codex Git rule

Unless explicitly approved:

```text
DO NOT COMMIT
DO NOT PUSH
```

Codex implements and validates. Checkpoint management is a separate decision.

## 15.2 Commit policy

A commit should represent a coherent recoverable development state.

Do not create commits merely because a single small edit was completed.

Several compatible micro-deliveries may be accumulated before committing.

Evaluate a checkpoint when:

- an architectural sub-delivery is closed;
- required deterministic validation is complete;
- independent review has closed when required;
- the unit is independently recoverable and meaningful;
- the next phase materially increases risk or changes gate.

The deciding question remains:

> Would we want to recover or reason about this exact state later?

A reviewer PASS never authorizes commit.

## 15.3 Push policy

A local commit does not automatically require a push.

Commit and push are separately authorized decisions.

Projects may accumulate local commits before publishing, especially when push triggers CI, staging, builds, deployment, infrastructure, or external cost.

```text
Kiro PASS ≠ commit authorization
commit authorization ≠ push authorization
```

---

# 16. Documentation closure

Important decisions must not exist only inside ChatGPT conversations.

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
runbooks/
```

Operational peculiarities that are stable and reusable should be evaluated for durable documentation so agents do not repeatedly rediscover them.

For critical contracts—security, authorization, cloud, persistence, financial/business invariants, cross-system behavior—a remediation is not completely closed if authoritative documentation still describes a materially superseded contract.

Documentation closure is part of delivery closure when documentation is normative to the contract.

Project-specific incidents, exact tool bugs, local port mappings, or product-specific recovery commands belong in repository documentation/runbooks rather than this global workflow unless they establish a general rule.

---

# 17. Documentation roles

### DEVELOPMENT_WORKFLOW.md

Defines **how the team works** and should remain mostly identical across projects.

### AGENTS.md

Defines repository-specific guidance for AI/development agents.

### ARCHITECTURE.md

Defines current technical architecture and relevant boundaries.

### DOMAIN.md

Defines stable domain rules and business relationships.

### docs/decisions/

Stores important architectural or product decisions.

### docs/known-issues.md / runbooks

Tracks accepted issues and stable operational knowledge, including project/tool-specific recovery procedures.

---

# 18. Project conversations and Project Source mirror

ChatGPT Projects are useful for continuity, brainstorming, historical reasoning, customer discussions, exploratory decisions, and roadmap information.

They should not become the only storage location for important technical decisions.

For this workflow:

```text
Repository DEVELOPMENT_WORKFLOW.md → AUTHORITATIVE SOURCE
ChatGPT Project Source copy        → SYNCHRONIZED OPERATIONAL MIRROR
```

After an approved and published workflow update:

1. update, commit, and push the authoritative repository version;
2. then replace corresponding copies in relevant ChatGPT Projects.

If versions differ, the repository wins. Use `Version` and `Last reviewed` to detect desynchronization.

Do not create independent workflow variants for individual products. Project-specific rules belong in `AGENTS.md`, `ARCHITECTURE.md`, security documentation, or `docs/`.

---

# 19. Tool and version stability

Use the simplest capable tool.

Prefer an existing deterministic workflow and reusable valid evidence over repeated interactive execution when both satisfy the same requirement.

Do not introduce toolchain churn in the middle of an active validated delivery merely because a newer version exists.

Upgrade tooling during a delivery only when materially required for security, compatibility, correctness, or the delivery itself. Otherwise preserve the known working version until the checkpoint is closed and evaluate upgrades separately.

---

# 20. Local cleanup responsibility

When LOCAL infrastructure state can contaminate later work, cleanup is part of the validation/checkpoint discipline.

After relevant validation, as applicable:

- stop local runtime/service processes;
- stop project containers/services;
- verify no project-specific residual containers/processes remain;
- clear process-scoped credentials or variables when appropriate;
- preserve required evidence before cleanup.

A clean environment is checkpoint evidence only when residual state could materially affect subsequent execution. Do not make cleanup ceremony mandatory when no relevant state exists.

---

# 21. GitHub responsibilities and write policy

GitHub represents the latest published and verifiable project checkpoint.

ChatGPT may use GitHub integration to inspect repositories, branches, commits, files, documentation, pull requests, issues, CI status, Actions, and workflow results.

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

Avoid parallel LOCAL and direct-GitHub code modification because it can create divergence.

ChatGPT should not normally modify production code directly in GitHub. GitHub writes require explicit justification and authorization.

## 21.1 Post-push validation

After a checkpoint is pushed, ChatGPT may validate REMOTE state using GitHub, including:

- confirming the expected commit and branch;
- inspecting commit contents;
- validating CI / GitHub Actions;
- confirming documentation changes;
- checking pull request status when applicable.

Codex does not need to be used solely for remote verification.

## 21.2 Pull requests

Pull requests are optional and depend on project complexity and team needs.

Direct commits to `main` may be reasonable when risk is low, CI exists, changes are well validated, and review overhead adds little value.

Prefer pull requests when changes are high risk, architecture changes significantly, multiple developers contribute simultaneously, rollback/review history is particularly valuable, or branch protection requires them.

---

# 22. New session startup protocol

When starting a new ChatGPT conversation for an existing project:

1. identify the project;
2. identify the session goal;
3. read this workflow when available;
4. consult relevant GitHub repository/repositories;
5. determine the latest published checkpoint;
6. read relevant technical documentation;
7. compare repository state with available Project context;
8. do not assume GitHub contains uncommitted LOCAL work;
9. ask for LOCAL state only when it materially affects the task;
10. use Codex only when repository-local implementation/deep understanding is required;
11. reuse valid prior evidence when the current layer has not invalidated it.

---

# 23. Multi-repository projects

For projects composed of multiple repositories, treat them as parts of one system.

Before making cross-system architectural decisions, inspect relevant repositories and contracts.

Codex should receive only repositories required for the current implementation task whenever possible.

Cross-repository evidence must remain scoped: absence or PASS in one repository does not automatically establish state in another.

---

# 24. Plugins and integrations

External integrations should follow least privilege.

Do not install integrations simply because they are available. Install one only when it solves a concrete problem that existing tools cannot solve efficiently.

When possible:

```text
Selected repositories > All repositories
```

Agent permissions follow the same principle:

```text
magic-investigator → read-only
magic-reviewer     → read-only
magic-orchestrator → routing/subagent only
Codex              → writer only within authorized scope
ChatGPT            → no direct production GitHub mutation by default
Pedro              → credentials and sensitive-authorization boundary
```

New credentials, permissions, external mutations, or spending require Pedro's authorization.

The default development integration is GitHub. Add Supabase, Cloudflare, project management, documentation, or other integrations only when a concrete development need justifies them.

Avoid unnecessary parallel sources of truth.

---

# 25. Experimental project lifecycle and deprecation

Experimental projects must not be preserved indefinitely merely because they were once marked `PRESERVE / FREEZE`.

Distinguish:

```text
NOT CURRENTLY REQUIRED ≠ OBSOLETE
```

A frozen experimental project may be subjected to a formal deprecation review when architecture, tooling, operating topology, or project needs materially change.

## 25.1 Deprecation review

Verify, as applicable:

1. LOCAL Git state;
2. commits or unpublished work;
3. configured remotes;
4. untracked files;
5. original purpose;
6. functionality actually implemented;
7. current dependencies;
8. external references from other repositories;
9. active integrations or registrations;
10. credentials/shared configuration;
11. documentation that may still represent current decisions;
12. impact on current architecture.

Classify findings as:

```text
KEEP
MIGRATE
HISTORICAL
SAFE TO DELETE
```

The review must end with one of:

```text
PROJECT STILL REQUIRED
```

or:

```text
PROJECT OBSOLETE — SAFE TO DELETE
```

## 25.2 Human authority and documentation reconciliation

`PROJECT OBSOLETE — SAFE TO DELETE` is evidence and recommendation, not authorization.

```text
SAFE TO DELETE ≠ DELETE AUTHORIZED
```

Before deletion:

```text
Deprecation evidence
    ↓
PROJECT OBSOLETE — SAFE TO DELETE
    ↓
Identify KEEP / MIGRATE items
    ↓
Update authoritative documentation if required
    ↓
Synchronize mirrors
    ↓
Pedro authorizes deletion
    ↓
Delete
    ↓
Post-delete verification
```

Do not create a state where a repository has been deleted while authoritative documentation still requires preservation.

## 25.3 Post-delete verification

Verify, when material:

- target path/resource no longer exists;
- no operational external references remain;
- no active registrations/configurations remain;
- no scripts point to the removed resource;
- current architecture remains unaffected.

Possible result vocabulary:

```text
DELETION VERIFIED
NO OPERATIONAL REFERENCES REMAIN
CURRENT ARCHITECTURE UNAFFECTED
```

## 25.4 Historical note: magic-development-mcp

`magic-development-mcp` was an experimental foundation explored during an earlier multi-agent architecture. A later deprecation review determined that it is not operationally required by the current Kiro-based architecture and certified it as:

```text
PROJECT OBSOLETE — SAFE TO DELETE
```

It is not part of the current development workflow. Deletion is a separate human-authorized action and is never implied by technical deprecation certification.

---

# 26. Standard development loop

```text
Requirement / feedback
        ↓
Pedro + ChatGPT define WHAT / architecture / contract
        ↓
Define threat model / closure criteria when material
        ↓
Is material LOCAL evidence missing?
        ├─ yes → magic-investigator
        └─ no
        ↓
Codex implements HOW + cheap deterministic validation
        ↓
Does final validation depend on LOCAL infrastructure/runtime?
        ├─ yes → Pedro executes reproducible LOCAL procedure
        └─ no
        ↓
Does risk/change require independent review?
        ├─ yes → magic-reviewer reuses valid evidence + reviews semantics
        └─ no
        ↓
If finding → bounded remediation + DELTA CLOSURE / DELTA + RESUME
        ↓
CERTIFIABLE?
        ↓
Pedro + ChatGPT decide CERTIFIED / more work
        ↓
Evaluate coherent checkpoint
        ↓
Pedro authorizes commit when appropriate
        ↓
Pedro separately decides whether to push
        ↓
GitHub / CI / deployment as applicable
        ↓
ChatGPT REMOTE validation
        ↓
Delivery closed
```

`magic-orchestrator` is intentionally absent from the happy path: it is exceptional routing support, not a workflow stage.

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

Before every task, determine which category it belongs to.

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

### Heavy/canonical local infrastructure validation
Use Pedro / LOCAL terminal with a reproducible procedure, then return evidence for interpretation/review.

### Ambiguous Kiro specialist choice
Use `magic-orchestrator` only for that routing decision.

### Repeated deterministic operation
Apply Automation First.

### Specialized agentic artifact workflow
Use Work only when materially justified.

---

# 29. Change management

This workflow is stable but not immutable.

When the development environment, team size, ChatGPT capabilities, Codex/Kiro capabilities, or project requirements materially change, review this document.

Minor improvements increment the minor version:

```text
2.1 → 2.2
```

Major workflow changes increment the major version:

```text
2.x → 3.0
```

The `Last reviewed` date must be updated whenever the workflow is formally reconsidered.

Feedback discovered after the v2.2 scope freeze should be collected for a future v2.3 unless it is required only to correct or faithfully consolidate an already-approved v2.2 rule.

---

# 30. Current status

This workflow is the active standard for projects managed collaboratively by Pedro, ChatGPT, Codex, and Kiro.

Version 2.2 consolidates the operational lessons learned during Bank G, Black Rous, and Magic Systems development around bounded assurance, evidence reuse, LOCAL validation responsibility, consumable operations, reproducible harnesses, and experimental-project deprecation.

Any project-specific exception or operational peculiarity should be documented inside that project's repository rather than silently changing this global workflow.
