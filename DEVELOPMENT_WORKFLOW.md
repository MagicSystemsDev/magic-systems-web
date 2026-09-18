# Development Workflow

**Version:** 2.4
**Last reviewed:** 2026-09-17
**Status:** Pending human certification and publication

---

## 1. Purpose and operating topology

This project-independent workflow provides bounded, recoverable development. LOCAL is authoritative for current work, REMOTE for published GitHub state, and CONTEXT explains decisions but is not current source of truth.

    Pedro              = AUTHORIZES
    ChatGPT             = WHAT
    magic-investigator  = PROVES
    Codex               = HOW
    magic-reviewer      = ASSURES
    magic-orchestrator  = ROUTES

AI recommends; Pedro authorizes. Evidence, PASS, certification, technical safety, model, or effort never grants authority.

## 2. Principles and semantic evidence

    AUTONOMY != AUTHORITY
    DISCOVERED NECESSITY != WRITE AUTHORIZATION
    SEMANTIC EQUIVALENCE != PERMISSION EQUIVALENCE
    FEWER ALLOW CLICKS != MORE AUTHORITY
    MORE TEST EXECUTION != MORE ASSURANCE BY DEFAULT
    ANY EDIT != RERUN EVERYTHING

Automation is a candidate, not automatically an obligation. A claim is proven only by evidence materially exercising its contract at the relevant semantic boundary:

    PHASE LABEL != REACHED BOUNDARY
    FAILURE STAGE != ROOT CAUSE
    EXPECTED ERROR CODE != TARGET CONTRACT PROVEN
    TEST NAME != PROOF
    PASS LABEL != PROOF
    TEST COUNT != CONTRACT COVERAGE
    MOCKED RESULT != EXTERNAL PROPERTY PROVEN

Evidence depends on provenance, reproducibility, scope, integrity, and material dependencies. Use OBSERVED, PROVEN, DISPROVEN, PROVEN_FROM_STATIC_CODE, REUSED EVIDENCE, INFERRED, PROPOSED, and NOT_PROVEN when useful; at runtime distinguish REACHED, NOT_REACHED, and NOT_PROVEN. Absence is OBSERVED only in inspected scope. Invalid evidence is NOT_PROVEN. Contradictory recent LOCAL evidence is STATE_CONFLICT / NOT_PROVEN until reconciled from fresh raw evidence; do not reset, restore, clean, or checkout before attribution. Labels such as PASS, VERIFIED, VALID, or CERTIFIED are declarations, not proof. For temporal evidence: observe, timestamp, materialize, then evaluate parseability, canonical form, non-future status, staleness, and required freshness.

### 2.1 Dependency-surface reuse

    EVIDENCE VALIDITY FOLLOWS MATERIAL DEPENDENCIES

Reuse evidence only when its artifact surface and material dependencies are unchanged, no contradiction invalidates it, and provenance remains clear. A reviewer distinguishes its execution from reused human/Codex/CI evidence. Hashes may prove byte identity where material.

A **CERTIFIED ARTIFACT FREEZE** preserves certified bytes. Documentation-only or sibling work does not invalidate unrelated technical evidence. A **SUB-DELIVERY** may become a **CERTIFIED SUB-DELIVERY** and remain frozen while a sibling proceeds; its evidence remains reusable while its dependency/material surface is unchanged. Multiple certified micro-deliveries can form one controlled higher-level checkpoint without individual commits. Unexpected change to a certified artifact is TECHNICAL_ARTIFACT_DRIFT and must be handled before reuse of intersecting evidence.

### 2.2 Validation routing

Use the smallest sufficient gate: focused first, dependent family next, broad regression when warranted. Do not run broad gates while a narrow prerequisite is red.

    Codex        -> cheap/focused deterministic gates
    Pedro/LOCAL  -> heavy/canonical runtime or infrastructure validation
    ChatGPT      -> validation design and interpretation
    Kiro         -> independent evidence and assurance

**HUMAN CANONICAL VALIDATION** is valid human/LOCAL evidence at a canonical runtime/infrastructure boundary. It is not mandatory for every test and valid recent human evidence need not be repeated without material reason.

## 3. Roles

Pedro holds final authority for acceptance, implementation, exceptions, certification, commit, push, merge, release, secrets, sensitive/destructive action, cloud mutation, spending, elevation, and consumable operations.

ChatGPT defines WHAT: architecture, contracts, acceptance criteria, validation design, strategy, proof needs, and interpretation. It distinguishes implementation, fixture, harness, environment, infrastructure, and tooling failure; it is not the independent assurance layer.

magic-investigator has READ_ONLY FACTUAL AUTONOMY. When material uncertainty exists it establishes facts before implementation: resolves actual repository/runtime contracts, searches relevant historical tests, consumers, and constraints where contract evolution is material, identifies the smallest evidence-backed remediation boundary, then stops before implementation. READ_ONLY means no material repository, system, or evidence mutation. Deterministic LOCAL/OFFLINE focused tests are allowed only when they do not mutate the worktree, consume authority, create canonical ATTEMPT/RESULT artifacts, execute provider/cloud operations, or cross an unauthorized boundary. Stop for required mutation, scope expansion, unexpected repository/branch/HEAD/worktree, secrets, provider/cloud action, or STATE_CONFLICT.

Codex is principal writer; one writer by default. It owns HOW, not authority; changes authorized scope only; runs useful cheap deterministic gates; reports remaining runtime validation; and does not commit/push without explicit authority.

magic-reviewer has READ_ONLY ASSURANCE AUTONOMY. It never modifies files, certifies, or grants authority; it issues only PASS, NEEDS_CHANGES, or BLOCKED. It can provide CONTRACT ASSURANCE, IMPLEMENTATION ASSURANCE, and DELIVERY / DOCUMENTATION ASSURANCE; resolves effective code/API/type contract before findings; preserves provenance; may run permitted bounded deterministic validation; supports delta closure; and does not reopen certified/frozen surfaces without material dependency reason. It separates material findings from LOW/non-blocking observations and declares open material questions.

Independent review is required by default for security; authentication/authorization; persistent data/migrations; financial invariants; cloud/infrastructure; cross-repository contracts; core architecture; high-impact refactors; release candidates; recovery after material failure; and significant uncertainty. It is recommended for nontrivial behavior, test architecture, dependency/configuration, and ordinary multi-file changes. It is not required by default for low-risk typo, copy, formatting, pure documentation, or mechanically obvious work unless Pedro requires it.

    PASS + NON-BLOCKING OBSERVATIONS is valid.
    PASS != PERFECT
    NON-BLOCKING != MUST FIX
    NON-BLOCKING != MUST IGNORE

magic-orchestrator is an optional ROUTER only for genuinely ambiguous Kiro routing; it neither writes nor designs architecture.

Where reproducibility matters record ROLE, MODEL, EFFORT, PERMISSIONS, and RUNTIME VERSION. MODEL CHANGE != AUTHORITY CHANGE; EFFORT CHANGE != AUTHORITY CHANGE. Prefer the least expensive validated profile preserving quality/risk coverage.

## 4. Closure and authority

Applicable terms include IMPLEMENTED, TESTED, PROPERTY PROVEN, ASSURED, CERTIFIABLE, CERTIFIED, SUB-DELIVERY, CERTIFIED SUB-DELIVERY, and CERTIFIED ARTIFACT FREEZE. They are not mandatory ceremony; certification closes only defined scope.

    CONTRACT CERTIFICATION
    != IMPLEMENTATION AUTHORIZATION
    != IMPLEMENTATION CERTIFICATION
    != DELIVERY CERTIFICATION
    != COMMIT AUTHORIZATION
    != PUSH AUTHORIZATION
    != DEPLOY AUTHORIZATION
    REVIEW PASS != HUMAN CERTIFICATION
    CI GREEN != NEXT OPERATION AUTHORIZED

    AUTHORITY DOES NOT INHERIT ACROSS A BOUNDARY
    UNLESS THE EXPLICIT CONTRACT SAYS SO.

Authorization accounts for unavoidable composite effects, for example push -> automatic CI -> automatic deployment. PUSH != DEPLOY AUTHORITY remains true.

    HUMAN DECISION != MATERIALIZED EXECUTION AUTHORITY

A decision may be GRANTED while execution remains forbidden until trusted technical representation exists. If needed authority has no certified representation/verifier: AUTHORITY_GAP -> STOP. Never invent flags, variables, booleans, tokens, JSON, or another authority mechanism.

For productive authority prefer untrusted bytes -> strict verifier -> trusted representation -> execution gate. Caller-controlled fields cannot construct trusted authority where they bypass trust. Keep independent gates distinct: WHAT IS ALLOWED? != HAS THE HUMAN DECIDED TO EXECUTE IT NOW?

Source commit/hash may be authority identity. Changed certified execution source is SOURCE_BINDING_GAP; never replace expected SHA with HEAD merely to pass. Old source-bound authority can be SUPERSEDED / DO NOT REUSE. Every consumable authority defines a CONSUMPTION POINT; verification, reading, review, tests, commit, push, and creation of trusted representation do not consume it unless contract says so.

## 5. Consumable execution

    PRE-GUARDS -> ATTEMPT / CONSUMPTION -> MATERIAL EXECUTION
    -> RAW RESULT -> CANONICAL RESULT -> REPORTING

Before consumption classify dependencies as PROVABLE_PRE_ATTEMPT, NOT_PROVABLE_WITHOUT_EXECUTION, REQUIRES_EXTERNAL_RUNTIME, or REQUIRES_EXTERNAL_ACCESS. Check every deterministically provable prerequisite whose failure wastes an attempt.

Do not collapse PRESENT, IDENTITY_VALID, STRUCTURALLY_COMPATIBLE, EXECUTION_ACCESSIBLE, and RUNTIME_LAUNCHABILITY_PROVEN. If launchability needs execution, report RUNTIME_LAUNCHABILITY_NOT_PREPROVABLE, not generic PASS.

Ensure material failures can practically yield bounded useful non-secret evidence. **DIAGNOSTIC EVIDENCE HARDENING** is an independent micro-delivery that improves future evidence only. Prefer structured metadata over arbitrary output, stack traces, environment dumps, or sensitive exception text.

    CANONICAL CONSUMED STATE > REPORTING HARNESS

After canonical state proves execution, presentation failure is POST_EXECUTION_REPORTING_HARNESS_ERROR; it never authorizes retry, second ATTEMPT, regeneration, or repeated material execution. A failed/consumed identity is FAILED / CONSUMED / IMMUTABLE / NON_RETRYABLE where applicable. Do not delete/rewrite ATTEMPT/RESULT; a future attempt requires a new valid authority/generation. Prefer: material execution -> raw result -> canonical state -> parse -> friendly reporting.

## 6. Failure classification, tests, and regression

    CLASSIFY FIRST
    REMEDIATE SECOND

Classify when material: PRODUCTION_DEFECT, TEST_DEFECT, FIXTURE_DEFECT, HARNESS_DEFECT, EXPECTATION_DRIFT, ENVIRONMENT_FAILURE, INFRASTRUCTURE_FAILURE, TOOLING_FAILURE, TOOL_GUARD_BLOCK, STATE_CONFLICT, SCOPE_CONFLICT, or AUTHORITY_GAP. Tool errors are hypotheses until root cause is evidenced.

    TARGET CAPABILITY REACHED?
    NO  -> fixture / harness / environment / tooling
    YES -> compare with CURRENT contract
           violated -> possible production defect
           historical assertion only -> expectation drift

Historical tests can contain TEST / EXPECTATION DRIFT or STALE ASSERTION. Do not revert authorized production to satisfy stale history. Evolve exact allowlists/signatures, not broad wildcards/counts.

Fixtures satisfy certified persistent contracts unless rejection is intentional. Resolve target-call data before privilege reduction unless source is part of contract. Negative tests, when material, prove code plus semantic error/class/message, originating object, target capability reached, and origin at/after target boundary. A test proves only the boundary reached; use a valid baseline plus one changed field where practical. Test initial state is owned by that test.

Changes to shared schemas, constants, generated configuration, canonical strings, filenames, CLI arguments, trust IDs, provider rules, or command contracts require bounded consumer/test/fixture/doc search. This does not mean rerun everything.

## 7. Runtime, PowerShell, and cleanup

    LOGICAL FAIL-FAST != EXECUTION FAIL-FAST
    GUARD FAILURE = END OF AUTHORIZED HARNESS
    PARSE BEFORE MUTATE

Establish helpers/functions/control flow before first mutation in sensitive harnesses; keep guards, actions, checks, cleanup, and postchecks in one execution unit. For material PowerShell use StrictMode, ErrorActionPreference Stop, and explicit applicable LASTEXITCODE checks. Normalize conceptual 0/1/N pipeline collections with @(... ) before .Count/set comparison; use braced variable interpolation where a colon immediately follows a variable; materialize complex scope operands before comparing.

For sensitive ceremonies, non-secret SESSION CONTEXT should include repo, branch, HEAD, generation, authority/decision IDs, and artifact paths. Secrets/passphrases/private recovery material remain interactive and never persist in environment variables, scripts, arguments, logs, chat, or evidence.

    runtime validation -> preserve evidence -> resources required next?
    NO -> project-scoped cleanup -> verify cleanup -> continue

Cleanup is conditional, project-scoped, preserves primary failure, and uses try/finally where appropriate. Never globally prune unrelated resources without authority.

For systems without a shared transaction boundary, do not claim distributed atomicity; define material pre-mutation failure, external-success/local-finalization failure, durable intermediate state, reconciliation, and applicable retry/idempotency. PATH CONTAINMENT != SAFE TEMPORARY OWNERSHIP. Helpers writing sensitive or contractual material require, where material, a validated temporary/workspace root protected against repository, protected-root, home, and user-root ambiguity.

Production private-key generation, passphrase entry, recovery material, production signing, and private-key decryption are HUMAN-ONLY SECRET OPERATIONS. Agents may design, review, and publicly verify but must not receive production secrets. When secure interactive input is viable, do not persist interactive secrets in CLI arguments, environment variables, source, .env, structured/JSON evidence, chat/prompts, shell literals, transcripts/logs, or GitHub/CI/CD. Non-secret paths and public IDs may remain session/environment variables where safe.

## 8. Documentation, Git, and permissions

Before documentation edits perform **DOCUMENTATION AUTHORITY DISCOVERY**: identify the owner of changed truth.

    DEVELOPMENT_WORKFLOW.md -> shared process
    AGENTS.md               -> repository-specific guidance
    ARCHITECTURE.md         -> current architecture
    DOMAIN.md               -> stable domain rules
    ROADMAP                 -> planning/status where present
    SECURITY.md             -> security/privilege contract where present
    README                  -> only when materially required

Do not update by symmetry. **DOCUMENTATION CLOSURE** normally follows technical assurance; documentation-only deltas do not invalidate unrelated technical evidence. If closure requires changing certified technical artifacts, classify IMPLEMENTATION_CONFLICT or TECHNICAL_ARTIFACT_DRIFT and STOP.

Unless explicitly authorized: DO NOT COMMIT; DO NOT PUSH. Exact scope is tracked git diff --name-only plus untracked leaf files. Review new files; use exact staging, not git add .; account for attributes/EOL/representation where bytes matter.

**GUARDED COMMIT** checks expected branch/HEAD/origin/divergence, worktree/staged scope, diff, exact staging, and artifact integrity; after commit checks parent, paths, residual state, divergence. It requires separate human authority. **GUARDED PUSH** separately checks branch, HEAD, origin, divergence, clean state; afterward verifies remote SHA, divergence, and exact-SHA CI.

    COMMITTED -> PUSH AUTHORIZED -> PUBLISHED -> REMOTE SHA VERIFIED
    -> CI EXACT-SHA VERIFIED -> post-publication gate -> final establishment

Preserve canonical preauthorized command shape. For unexpected prompts: inspect -> constrain command -> retest -> only then permission delta. Prefer exact target read authority. Permission changes need static and relevant runtime acceptance. CONFIGURATION CORRECTNESS != VENDOR / PLATFORM CAPABILITY; proven limitation means STOP CONFIG ESCALATION -> document -> safe workaround if appropriate.

## 9. Micro-deliveries, handoff, and loops

Micro-deliveries declare objective, state, changes, constraints, scope, validation, and handoff. CONTRACT DISCOVERY / READ_ONLY ends CONTRACT RESOLVED or CONTRACT AMBIGUITY REMAINS and can modify zero files. AUTHORITY_GAP and DIAGNOSTIC EVIDENCE HARDENING are valid bounded conditions. STOP + EVIDENCE + FILES MODIFIED = 0 succeeds where implementation would weaken/invent contract.

Dependency gap: STOP -> exact gap -> no workaround -> bounded authorization -> certify dependency -> resume only if authority remains valid. Material remediation freezes closure criteria and separates FROZEN FINDING from NEW MATERIAL FINDING. Delta review checks the finding, diff, closure, regressions, anchors, and evidence.

Codex handoffs include applicable: CHECKPOINT; FINAL GIT STATE; SCOPE RESULT; AUTHORITY STATUS; expected/actual mutation surface; validations run/not run and reason; cross-contract consumers inspected; expected historical regressions; PRODUCTION DEFECT FOUND: YES / NO; implementation completion; readiness; commit/push authority. Do not infer IMPLEMENTED, TEST ADDED, TEST EXECUTED, or PROPERTY PROVEN from one another: each claim needs its own applicable evidence. READY FOR REVIEW requires all hard gates and sufficient proof; required MISSING, FAIL, or NOT_PROVEN is NOT READY.

    Requirement -> ChatGPT WHAT -> Contract Discovery -> investigator proof
    -> Pedro authorization -> Codex HOW -> focused validation
    -> human canonical validation / reviewer assurance when required
    -> CERTIFIABLE -> Pedro CERTIFIES -> Documentation Closure
    -> delivery assurance -> Delivery Certification -> guarded commit/push
    -> exact-SHA CI -> cleanup/final establishment

    OBSERVE -> INVESTIGATE -> PROVE BOUNDARY -> CLASSIFY
    -> DEFINE WHAT -> IMPLEMENT MINIMUM HOW -> VALIDATE -> ASSURE

## 10. Published state, sessions, and lifecycle

GitHub is the latest published/verifiable checkpoint. Prefer LOCAL -> commit -> push -> GitHub; avoid parallel LOCAL/direct-GitHub mutation. Verify exact remote branch SHA, workflow head SHA, workflow conclusion, and required job conclusions where applicable. ELIGIBLE CANDIDATE != NEXT OPERATION AUTHORIZED.

For external dependencies, identify installation/execution surfaces: local development, tests, CI, build, packaging/runtime as applicable. On CI red, classify product, test, dependency, pipeline, runner, external, or unknown cause first; invalidate only intersecting evidence, preserve historical failures, and add pipeline regression only when proportionate. Pull requests are optional, preferred where risk, architecture, collaboration, review history, rollback, or branch protection warrants them.

At session start identify project and goal; read this workflow and relevant documentation; inspect published checkpoint; compare LOCAL, REMOTE, and CONTEXT; and reuse evidence only where dependencies remain unchanged. Treat multiple repositories as one system only where contracts require it. Use least-privilege integrations only for concrete unmet needs.

Projects remain understandable if conversations disappear: Git/GitHub preserve history/publication; repository documentation preserves architecture/decisions; Project Sources preserve stable workflow instructions; conversations are optional context. Use the simplest capable tool and repo-local versioned tooling where it improves reproducibility; avoid unnecessary toolchain churn.

NOT CURRENTLY REQUIRED != OBSOLETE. A frozen experiment may be reviewed for KEEP, MIGRATE, HISTORICAL, or SAFE TO DELETE. SAFE TO DELETE is evidence, not deletion authority; reconcile authoritative documentation and KEEP/MIGRATE items before human-authorized deletion, then verify relevant absence, references, scripts, registrations, and architecture impact.

## 11. Change management and status

This workflow is stable but not immutable. Minor improvement example: 2.3 -> 2.4. Update Last reviewed when formally reconsidered. Feedback discovered after the v2.4 scope freeze targets v2.5 unless correcting or faithfully implementing a frozen v2.4 requirement.

This pending-certification v2.4 workflow consolidates refined PROVES/HOW/ASSURES topology; dependency-surface reuse, artifact freeze, and saturation; authority materialization/non-inheritance; consumable execution and diagnostics; failure classification/cross-contract regression; documentation authority/closure; guarded commit/push; human canonical validation; bounded autonomy/permission discipline; and PowerShell safety. Project-specific exceptions belong in the repository.
