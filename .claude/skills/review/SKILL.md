---
name: review
description: Review current git changes and provide feedback on TypeScript, logic, tests, and security
disable-model-invocation: false
---

Review the current changes (git diff staged and unstaged) and provide feedback on:

1. **TypeScript** -- type errors, use of `any`, missing return types, implicit returns
2. **ESLint / code style** -- potential lint violations, formatting issues
3. **Logic** -- bugs, edge cases, unhandled errors, Italian orthography rules correctness
4. **Tests** -- missing tests for new or changed converter logic, edge cases not covered
5. **Security** -- exposed secrets, unvalidated inputs, regex DoS risks

For each issue found, show the file, the problematic code, and a suggested fix.
If no issues are found, say so clearly.
