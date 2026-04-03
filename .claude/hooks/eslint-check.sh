#!/bin/bash
# Hook: run ESLint on edited/written files after each Edit/Write tool use.
# Exit 0 = allow, Exit 2 = block (Claude sees stderr and can fix).

set -uo pipefail

FILE_PATH=$(jq -r '.tool_input.file_path // empty')

# Skip if no file path or not a JS/TS file
if [ -z "$FILE_PATH" ] || [[ ! "$FILE_PATH" =~ \.(ts|tsx|js|jsx)$ ]]; then
  exit 0
fi

# Skip generated files (dist, node_modules)
if [[ "$FILE_PATH" == */dist/* ]] || \
   [[ "$FILE_PATH" == */node_modules/* ]]; then
  exit 0
fi

PROJECT_ROOT="${CLAUDE_PROJECT_DIR:-$(pwd)}"

# Verify eslint is available
if [ ! -f "$PROJECT_ROOT/node_modules/.bin/eslint" ]; then
  exit 0
fi

# Run ESLint -- on failure, send output to stderr and exit 2 to block
cd "$PROJECT_ROOT"
LINT_OUTPUT=$(npx eslint "$FILE_PATH" 2>&1) || {
  echo "$LINT_OUTPUT" >&2
  exit 2
}
