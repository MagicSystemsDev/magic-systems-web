# Development Workflow

**Version:** 2.3
**Last reviewed:** 2026-09-14
**Status:** Active

---

## 1. Purpose

This document defines the standard workflow used by Pedro, ChatGPT, Codex, Kiro, Git, and GitHub. It keeps context recoverable, distinguishes LOCAL development from published checkpoints, makes evidence, assurance, closure, and authorization explicit, and avoids unnecessary infrastructure cycles.

It also protects integrity of evidence and proof boundaries, bounded agent autonomy without authority expansion, and exact scope/artifact integrity where material. It is project-independent unless a project documents an explicit exception.

    Pedro   = AUTHORIZES
    ChatGPT = WHAT
    Codex   = HOW
    Kiro    = ASSURES

AI recommends — Pedro authorizes. Evidence, PASS, certification, or technical safety never grants operational authority automatically.

# 2. Core principles

## 2.1 AI memory is context, not source of truth

ChatGPT memory and Project conversations help with reasoning, history, preferences, and decisions, but are not authoritative representations of the current codebase. Verify repository, runtime evidence, and durable documentation whenever technical accuracy matters.

## 2.2 Distinguish LOCAL, REMOTE, and CONTEXT

LOCAL is authoritative for current development state and can include modifications, uncommitted work, new files, local commits, and experiments. REMOTE is authoritative for published GitHub state, normally origin/main, but is not necessarily newer than LOCAL. CONTEXT explains why decisions were made but does not replace LOCAL or REMOTE.

## 2.3 Automation First

Evaluate repeated deterministic inspection, validation, comparison, evidence, or certification work as an AUTOMATION CANDIDATE; it is not automatically an implementation obligation. Prefer scripts, harnesses, fixtures, structured outputs, and report generators when they preserve or improve the gate. Stop and reevaluate if automation requires absent auxiliary infrastructure, complex discovery/polling, wrapper-specific failures, or more maintenance than benefit. Never reduce evidence or validation merely to save agent capacity.

## 2.4 Bounded assurance and autonomy

Assurance must be strong but bounded. Define the material THREAT MODEL / TRUST BOUNDARY before security-, authority-, privilege-, trust-, or adversarial-sensitive review where practical. A reviewer must not silently expand it during delta review; report a distinct defect as NEW MATERIAL FINDING.

    AUTONOMY != AUTHORITY

An agent may autonomously execute previously authorized capabilities inside a bounded task envelope. Autonomy never expands operational authority.

## 2.5 Semantic proof, canonical evidence, and dependencies

    Names, labels, test counts, and status strings are not proof.
    A claim is proven only by evidence that materially exercises the contract
    and reaches the relevant semantic boundary.

    TEST NAME != PROOF
    PASS LABEL != PROOF
    TEST COUNT != CONTRACT COVERAGE
    MOCKED RESULT != EXTERNAL PROPERTY PROVEN

Evidence quality depends on provenance, reproducibility, scope, integrity, and material dependencies. Evidence validity follows material dependency change, not workflow phase or elapsed ceremony: the current tree needs sufficient evidence, but ANY EDIT != RERUN EVERYTHING. Revalidate only evidence whose material dependency surface could have changed.

# 3. Source precedence

For published state: GitHub > ChatGPT memory. For current development: LOCAL repository > GitHub. For reasoning and history: Project context + durable documentation. Valid LOCAL evidence may legitimately be newer than REMOTE.

# 4. Responsibilities and operating planes

## 4.1 Pedro — Human Authority

Pedro retains final human authority for architecture/finding acceptance, implementation authorization, and exceptions. Pedro also holds default authority for commit, push, merge, release, credentials/secrets, sensitive or destructive actions, cloud mutation, spending, elevation, and consumable operations. Technical assurance never broadens explicit scope.

## 4.2 ChatGPT — Control / Decision Plane

ChatGPT owns the WHAT: architecture, planning, contracts, acceptance criteria, validation design, strategy, evidence interpretation, and choosing the smallest sufficient gate. It distinguishes implementation, harness, fixture, environment, and tooling failures; defines proof needs; and avoids rerunning valid evidence without a material dependency reason. It is not the independent implementation assurance layer.

## 4.3 Codex — Implementation Plane

Codex is the principal writer and implementer.

    One writer by default.
    Codex owns HOW, not authorization.
    DO NOT COMMIT
    DO NOT PUSH

Those prohibitions remain unless explicitly approved. Codex may modify only the authorized working tree, should run useful cheap deterministic gates, and must report remaining infrastructure-dependent validation. READY FOR REVIEW is a hard gate under section 14.

## 4.4 Kiro — Assurance Plane

Kiro supplies specialist evidence and independent implementation assurance; it is not mandatory ceremony.

### magic-investigator

magic-investigator has READ_ONLY FACTUAL AUTONOMY within the authorized repository/task envelope. It may read/search files; inspect source, tests, docs, config, and Git read-only state; reconstruct factual repository state; and perform Contract Discovery. It stops for required mutation, scope expansion, unexpected repository/branch/HEAD/worktree, secret material, or provider/cloud action.

It distinguishes OBSERVED, PROVEN_FROM_STATIC_CODE, INFERRED, PROPOSED, and NOT_PROVEN when material; irrelevant labels need not be printed.

### magic-reviewer

magic-reviewer has READ_ONLY ASSURANCE AUTONOMY: it may traverse an authorized review scope using permitted read-only operations, but never acquires mutation, commit, push, deploy, secret, or provider/cloud authority. It reviews scope/completeness, reuses valid deterministic evidence, examines semantic/adversarial boundaries, and issues only PASS, NEEDS_CHANGES, or BLOCKED as assurance verdicts, not human decisions. Record REVIEWED / UNREVIEWED DUE TO EARLY EXIT when material.

Its read-only autonomy continues only while the task envelope remains valid. It must STOP and report for required mutation, scope expansion, unexpected repository, branch, HEAD, working tree, or review scope, secret material, provider/cloud action, or STATE_CONFLICT. For STATE_CONFLICT, reconcile fresh evidence before continuing assurance conclusions for the conflicted scope. These boundaries do not broaden authority.

### magic-orchestrator

magic-orchestrator is an OPTIONAL ROUTER only when the Kiro executor is genuinely ambiguous. It is outside the happy path and does not write or design architecture.

## 4.5 Work mode

Use ChatGPT Work only where specialized capability materially justifies the cost, not for routine repository inspection.

# 5. Closure, certification, and authorization states

Use these terms when material; they are not a mandatory state machine:

    IMPLEMENTED      required source/capability exists.
    TESTED           applicable tests executed successfully.
    PROPERTY PROVEN  required property has sufficient evidence at the correct boundary.
    ASSURED          independent assurance evaluated applicable implementation/evidence.
    CERTIFIABLE      defined technical closure criteria satisfied.
    CERTIFIED        Pedro accepts the checkpoint as formally closed.

Operational dimensions remain independent: COMMIT AUTHORIZED, COMMITTED, PUSH AUTHORIZED, PUBLISHED, REMOTE VERIFIED, CI VERIFIED, POST-PUBLICATION ESTABLISHED, NEXT OPERATION AUTHORIZED, and RUNTIME / PROVIDER AUTHORIZED.

    One state does not imply another unless the explicit contract says so.
    CERTIFIABLE != CERTIFIED
    CERTIFIED != AUTHORIZED
    CERTIFIED does not upgrade NOT_PROVEN to PROVEN.

Certification closes only the defined acceptance scope.

# 6. Evidence discipline and routing

Use this taxonomy when material:

    OBSERVED
    PROVEN_FROM_STATIC_CODE
    REUSED EVIDENCE
    INFERRED
    PROPOSED
    NOT_PROVEN

REUSED EVIDENCE is valid evidence produced previously or by another actor; it must not falsely claim reviewer execution. Platform/account metrics outrank estimates.

## 6.1 Scoped negative evidence and boundary provenance

Absence is OBSERVED only within inspected scope. Evidence must originate from a source capable of observing the boundary it claims to prove:

    LOCAL projection != canonical proof of REMOTE
    mocked boundary != real external property
    source CSS != rendered browser result

## 6.2 Labels and canonical evidence

Labels such as PASS, VERIFIED, VALID, or CERTIFIED are declarations, not proof. Use real canonical runner results when valid execution exists; do not fix estimated counts as a contract where the runner discovers them dynamically.

## 6.3 Invalid, temporal, and contradictory evidence

Invalid evidence degrades to NOT_PROVEN. For temporal evidence: observe, timestamp, materialize, then evaluate parseability, canonical form, non-future status, staleness, and required freshness window.

Contradictory recent LOCAL observations mean STATE_CONFLICT / NOT_PROVEN. Gather fresh raw evidence and reconcile first; do not reset, restore, clean, or checkout before attribution.

## 6.4 Evidence reuse and layer-aware revalidation

Use the smallest sufficient validation scope. A passing gate remains reusable when its layer and material dependencies are unchanged. Test-only changes may need focused gates; service-only changes may reuse unchanged DB evidence; SQL changes need relevant DB evidence; privileged runtime changes need runtime validation; documentation-only changes normally need no infrastructure validation.

## 6.5 Layered validation gates

Prefer cheap/narrow to expensive/broad: focused test, focused chain, family suite, diff check, Git scope, then required infrastructure/runtime gate. Do not advance past a red narrower prerequisite. Classify warnings separately.

## 6.6 Routing

Use the smallest agent topology: ChatGPT for architecture/planning and interpretation; Pedro for authorization and heavy/canonical LOCAL validation; investigator for factual LOCAL gaps; Codex for writing and cheap gates; reviewer for independent assurance; orchestrator only for ambiguous Kiro routing.

## 6.7 Independent review policy

Review is required by default for security, auth/authorization, persistent data/migrations, financial invariants, cloud/infrastructure, cross-repository contracts, core architecture, high-impact refactors, release candidates, recovery after material failures, or significant uncertainty. It is recommended for nontrivial behavior, test architecture, dependency/configuration, and ordinary multi-file changes; it is not required by default for typos, copy, pure documentation, formatting, or mechanically obvious work. Pedro may require it in any case.

# 7. Threat models, findings, and delta review

Freeze a verifiable closure contract for material remediation:

    FINDING CLOSES IF:
    A
    B
    C

State FROZEN FINDING RESOLVED or FROZEN FINDING NOT RESOLVED; keep NEW MATERIAL FINDING separate. Use FULL REVIEW, DELTA CLOSURE, or DELTA + RESUME. Delta review checks frozen finding, remediation diff, closure criteria, direct regressions, applicable frozen anchors, and reusable evidence. Previously closed findings remain closed unless the delta touches their boundary, contradictory evidence invalidates closure, or an independent material defect is found. Do not reopen accepted architecture without a material reason.

# 8. Local infrastructure validation responsibility

    Codex          → cheap deterministic gates
    Pedro / LOCAL  → heavy/canonical runtime or infrastructure validation
    ChatGPT        → validation design and interpretation
    Kiro           → evidence reuse and assurance

This does not require Pedro to execute every test. Valid recent human evidence should not be repeated without material reason. Infrastructure failure alone does not establish product failure; classify product, harness, fixture, environment, infrastructure, and tooling causes.

# 9. Reproducible runtime procedures

## 9.1 Execution-unit integrity

    LOGICAL FAIL-FAST != EXECUTION FAIL-FAST
    GUARD FAILURE = END OF AUTHORIZED HARNESS

Where safety/evidence depends on structured control flow, keep guards, actions, exit checks, cleanup, and postchecks in one real execution unit: a .ps1, one invoked script block, one process, or an existing deterministic harness. For material PowerShell, use strict mode, ErrorActionPreference Stop, and explicit LASTEXITCODE checks for applicable native commands.

## 9.2 PASS integrity and repo-local tooling

A PASS is valid only if the check completed, no parser/runtime/control-flow error invalidated it, and its semantics match the contract. Harness text alone is insufficient. Prefer a repo-local versioned tool over an assumed global installation where it improves reproducibility.

# 10. Authorized and consumable operations

    AUTHORITY IS TYPED AND SCOPED
    DESIGN APPROVED != EXECUTION AUTHORIZED
    KEY GENERATED != SIGNING AUTHORIZED
    SIGNED != EXECUTION AUTHORIZED
    CI GREEN != NEXT OPERATION AUTHORIZED

Possible types are DESIGN, CERTIFICATION, CRYPTOGRAPHIC, EXECUTION, CONSUMPTION, COMMIT, PUBLICATION, and DEPLOYMENT; not all apply to every delivery. For sensitive confirmation: DISPLAYED → HUMAN CONFIRMED → IMMUTABLY BOUND → SIGNED / EXECUTED. The executed value must materially bind to the confirmed value.

If a durable/write-once operation materializes state but later verification fails, record separately write state, verification state, authority consumption state, and runtime/downstream state.

    POST-WRITE FAILURE != SAFE RETRY

Improve observability before repeating an insufficiently informative consumable operation. Distinguish wrapper/process success, operation observed, provider success, schema/contract success, and runtime success.

# 11. Fault injection and regression boundaries

    A TEST PROVES ONLY THE SEMANTIC BOUNDARY IT ACTUALLY REACHES.

A labelled open/write/flush/reread failure, byte mismatch, or digest mismatch must actually materialize and reach that condition; a name or exception message is not proof. For validators with multiple caller-controlled inputs, use a fully valid baseline plus one changed field for one negative case where practical.

    TEST INITIAL STATE MUST BE OWNED BY THE TEST THAT REQUIRES IT.

Avoid order-dependent hidden preconditions, especially in lifecycle, auth, reservations, concurrency, and write-once flows. Materialize real governance/security fixtures where the contract needs them.

A fake proves application behavior given fake output; it does not prove the external/platform property it replaces. If only mock evidence exists for a real-boundary property, it is NOT_PROVEN. Private/internal seams are acceptable only where they add no public API, unsafe production injection, or semantic change; reach the real boundary; and do not weaken security.

# 12. Cross-system and privileged operations

For systems without a shared transaction boundary, do not claim distributed atomicity. Define material pre-mutation failure, external-success/local-finalization failure, durable intermediate state, reconciliation, retry, and idempotency behavior.

    PATH CONTAINMENT != SAFE TEMPORARY OWNERSHIP

Helpers writing sensitive or contractual material must demonstrate a fresh validated temporary root where material: canonical paths, fresh workspace, repository/protected/home/user-root exclusion, and fail-closed ambiguity.

HUMAN-ONLY SECRET OPERATION applies to production private-key generation, passphrase entry, recovery material, production signing, and private-key decryption. Agents may design, review, and publicly verify, but must not receive production secrets. Do not persist interactive secrets in CLI arguments, environment variables, source, .env, JSON evidence, chat, prompts, shell literals, transcripts, or GitHub/CI when secure interactive prompting is viable.

# 13. Micro-deliveries

Micro-deliveries contain objective, context/state, required changes, constraints, out-of-scope scope, validations, and expected handoff.

## 13.1 Contract Discovery

CONTRACT DISCOVERY / READ_ONLY is a valid micro-delivery. It ends CONTRACT RESOLVED or CONTRACT AMBIGUITY REMAINS and may have files modified = 0.

## 13.2 Contract Gap Protocol

    STOP → identify exact gap → no workaround → no implicit architecture expansion
    → new bounded dependency delivery / authorization → certify dependency
    → resume original task if authorization remains valid

    DEPENDENCY GAP != IMPLICIT SCOPE EXPANSION

BLOCKED BY DEPENDENCY does not automatically revoke original task authorization.

## 13.3 Micro-pass discipline

For work too broad for a predictable pass, use bounded micro-passes declaring WRITABLE FILES, FROZEN FILES, OBJECTIVE, VALIDATION, and HANDOFF. Closed pass artifacts are frozen by default unless scope expansion is explicit.

# 14. Standard Codex completion requirements

Codex handoffs include applicable fields without forcing irrelevant fields for trivial work:

    CHECKPOINT
    WRITABLE FILES / FROZEN FILES
    PRODUCTION CODE CHANGED / TESTS CHANGED / PRIVATE TEST SEAMS
    IMPLEMENTED / TEST ADDED / TEST EXECUTED
    PROPERTY PROVEN / PROPERTY NOT PROVEN
    VALIDATION RESULTS / REMAINING LOCAL OR RUNTIME VALIDATION
    PRODUCTION DEFECT FOUND: YES / NO
    IMPLEMENTATION COMPLETE / INCOMPLETE
    VALIDATION PASSED / FAILED
    READY FOR REVIEW / NOT READY FOR REVIEW
    GIT STATUS
    COMMIT AUTHORIZED / NOT AUTHORIZED
    PUSH AUTHORIZED / NOT AUTHORIZED

READY FOR REVIEW only if every required hard acceptance gate is present and sufficiently proven. MISSING, FAIL, or required NOT_PROVEN means NOT READY FOR REVIEW. Codex must not infer IMPLEMENTED, TEST ADDED, TEST EXECUTED, and PROPERTY PROVEN from one another. Kiro verdicts remain independent.

# 15. Git and checkpoint policy

Unless explicitly approved: DO NOT COMMIT and DO NOT PUSH. A reviewer PASS does not authorize commit; a commit does not authorize push.

Where exact scope is material, real scope is the union of tracked git diff --name-only and untracked leaf files from git ls-files --others --exclude-standard. Git status --short is a useful summary, not sole exact-scope evidence. Review relevant new files completely; git diff alone is insufficient.

After staging, compare git diff --cached --name-only with authorized scope. Prefer exact git add paths for frozen scope; do not use git add . as a default pattern there. When bytes/digests matter, inspect applicable .gitattributes, account for filters/EOL normalization, inspect/hash necessary worktree and staged-blob forms, and prove committed representation matches contract.

    DISCOVERED NECESSITY != WRITE AUTHORIZATION

Stop for SCOPE EXPANSION REQUIRED when an unauthorized file/surface is needed, unless supporting files were already authorized.

# 16. Documentation closure

Stable important decisions belong in durable repository documentation, not only conversation. Documentation closure is delivery closure when normative. Review depends on semantic authority, not extension: typo, formatting, and explanatory wording are low risk; authoritative roadmaps, architecture/security contracts, authorization rules, deployment/current-state declarations, operational procedures, and normative decisions are material. A documentation-only delivery can be independently certifiable when the document is authoritative.

# 17. Documentation roles

DEVELOPMENT_WORKFLOW.md defines shared process; AGENTS.md repository-specific guidance; ARCHITECTURE.md current architecture; DOMAIN.md stable domain rules; docs/decisions material decisions; and docs/known-issues.md / runbooks durable operational knowledge.

# 18. Project conversations and Project Source mirror

Repository DEVELOPMENT_WORKFLOW.md is authoritative; a ChatGPT Project Source copy is a synchronized operational mirror. After an approved/published workflow update, update/push the repository source first, then replace relevant mirrors. If versions differ, the repository wins.

# 19. Tool and version stability

Use the simplest capable tool and reusable valid evidence. Prefer a repo-local versioned tool where it improves reproducibility. Do not add toolchain churn mid-delivery unless security, compatibility, correctness, or the delivery requires it.

# 20. Local cleanup responsibility

    RESOURCE LIFECYCLE IS PART OF VALIDATION LIFECYCLE.

After a phase starts resources, ask whether the next phase needs them. If not, preserve evidence first, then stop project-specific services/resources, verify they stopped, and clear applicable temporary process state. Cleanup is scoped, not universal ceremony. Never globally prune or delete unrelated/persistent data without explicit authorization.

# 21. GitHub responsibilities and write policy

GitHub is the latest published/verifiable checkpoint. Prefer LOCAL → commit → push → GitHub; avoid parallel LOCAL/direct-GitHub code mutation. GitHub writes require explicit authorization.

## 21.1 Publication and exact-SHA verification

    COMMITTED → PUSH AUTHORIZED → PUBLISHED → REMOTE SHA VERIFIED
    → CI EXACT-SHA VERIFIED → POST-PUBLICATION GATE when contract defines one
    → FINAL ESTABLISHMENT

Verify exact remote branch SHA, workflow head SHA, workflow conclusion, and required job conclusions. PUSH SUCCEEDED != CI VERIFIED. A green published state may be only an eligible candidate: ELIGIBLE CANDIDATE != NEXT OPERATION AUTHORIZED.

## 21.2 Dependency integration and CI failure classification

For external dependencies, identify installation/execution surfaces: local development, tests, CI, build, packaging/runtime as applicable. Do not declare complete where a needed surface cannot obtain it. On CI red, classify product, test, dependency, pipeline, runner, external, or unknown root cause first; invalidate only intersecting evidence and use bounded remediation/delta review where suitable. Preserve historical failures as historical evidence even if later green. Add deterministic pipeline regression only when proportionate.

## 21.3 Pull requests

Pull requests are optional; prefer them for high risk, major architecture, multi-developer, valuable review/rollback history, or branch-protection cases.

# 22. New session startup protocol

Identify project and goal; read workflow/relevant documentation; inspect published checkpoint; compare LOCAL, REMOTE, and context; do not assume GitHub contains uncommitted work; and reuse valid evidence where dependencies remain unchanged. A contradiction with a recent LOCAL checkpoint is STATE_CONFLICT / NOT_PROVEN: gather fresh evidence before calling it drift.

# 23. Multi-repository projects

Treat multiple repositories as one system only where contracts require it. Inspect relevant repositories before cross-system decisions, limit Codex scope to what implementation needs, and keep evidence scoped to the boundary it covers.

# 24. Plugins and integrations

Use least privilege and install integrations only for concrete unmet needs. Investigator and reviewer are read-only; orchestrator routes only; Codex writes only within authorized scope; ChatGPT has no direct production-GitHub mutation by default; Pedro remains the credentials and sensitive-authorization boundary. New credentials, permissions, external mutations, or spending require Pedro.

# 25. Experimental project lifecycle and deprecation

NOT CURRENTLY REQUIRED != OBSOLETE. A frozen experiment may undergo formal deprecation review when circumstances materially change.

## 25.1 Deprecation review

Inspect, as applicable, LOCAL Git state, unpublished work, remotes, untracked files, original purpose/functionality, dependencies, external references, registrations, credentials/shared configuration, documentation, and architecture impact. Classify KEEP, MIGRATE, HISTORICAL, or SAFE TO DELETE, ending PROJECT STILL REQUIRED or PROJECT OBSOLETE — SAFE TO DELETE.

## 25.2 Human authority and documentation reconciliation

PROJECT OBSOLETE — SAFE TO DELETE is evidence, not deletion authority:

    SAFE TO DELETE != DELETE AUTHORIZED

Reconcile KEEP/MIGRATE items and authoritative documentation/mirrors before Pedro authorizes deletion.

## 25.3 Post-delete verification

Verify, when material, target absence, operational references/registrations, scripts, and architecture impact. Useful results include DELETION VERIFIED, NO OPERATIONAL REFERENCES REMAIN, and CURRENT ARCHITECTURE UNAFFECTED.

## 25.4 Historical note: magic-development-mcp

magic-development-mcp was an experimental foundation from an earlier architecture and is not operationally required by the current Kiro-based workflow. Its deletion remains separate human-authorized action.

# 26. Standard development loop

    Requirement / feedback
            ↓
    Pedro + ChatGPT define WHAT / contract
            ↓
    Contract Discovery if needed
            ↓
    Pedro authorizes implementation
            ↓
    Codex implements bounded HOW + cheap gates
            ↓
    READY FOR REVIEW?
            ↓
    Pedro executes canonical LOCAL/runtime validation when required
            ↓
    Independent review when required
            ↓
    Remaining browser/runtime/provider domain when applicable
            ↓
    Finding? → frozen closure contract → bounded remediation
             → DELTA CLOSURE / DELTA + RESUME
            ↓
    CERTIFIABLE? → Pedro decides CERTIFIED
            ↓
    evaluate checkpoint → explicit commit authorization → exact staging + commit
            ↓
    separate push authorization → publish → remote exact-SHA / CI verification
            ↓
    post-publication gate if defined → final checkpoint establishment

magic-orchestrator remains outside the happy path.

# 27. Recovery rule

Projects must remain understandable if conversations disappear: Git/GitHub preserve history and publication; repository documentation preserves architecture and decisions; Project sources preserve stable workflow instructions; conversations are optional context.

# 28. Final operational rule

Classify each task: ChatGPT for reasoning and published-state questions; local tools for mechanical Git; Codex for authorized local modification/deep understanding; investigator for material LOCAL factual gaps; reviewer for independent assurance; Pedro/LOCAL for heavy canonical validation; orchestrator only for ambiguous Kiro routing; Automation First for repeated deterministic work; Work only where specialized capability is justified.

# 29. Change management

This workflow is stable but not immutable. Minor improvements increment the minor version:

    2.2 → 2.3

Update Last reviewed whenever formally reconsidered. Feedback discovered after the v2.3 scope freeze targets future v2.4 unless needed to correct or faithfully consolidate an already approved v2.3 rule.

# 30. Current status

This is the active v2.3 workflow for Pedro, ChatGPT, Codex, and Kiro. It consolidates execution-unit integrity; semantic proof; evidence provenance/reuse; typed authority; exact Git/artifact scope; contract discovery/gaps; publication/CI establishment; conditional runtime/browser validation; resource hygiene; and bounded Kiro read-only autonomy.

Project-specific exceptions and operational details belong in the project repository rather than silently changing this workflow.
