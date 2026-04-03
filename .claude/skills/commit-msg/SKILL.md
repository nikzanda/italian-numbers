---
name: commit-msg
description: Analyze the current git diff and suggest a commit message following conventional commits for semantic-release
disable-model-invocation: false
---

Analyze the current git diff (staged and unstaged changes) and suggest a commit message.

Rules:
- English only
- Imperative mood (e.g. "Add feature", "Fix bug", "Refactor service")
- Format: `<type>: <short description>` where type is one of: feat, fix, refactor, chore, docs, test, style
- Max 72 characters for the first line
- This project uses `semantic-release`: `feat` triggers a minor bump, `fix` triggers a patch bump
- If the changes are too broad for a single commit, suggest how to split them into smaller focused commits
