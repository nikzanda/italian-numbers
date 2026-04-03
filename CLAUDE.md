# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

`italian-numbers` is a TypeScript npm library that converts numbers to Italian word representations and vice versa. It supports cardinal numbers, ordinal numbers, and Roman numerals.

## Commands

- **Build:** `npx tsup` (uses tsup, outputs CJS/ESM/IIFE to `dist/`)
- **Test:** `yarn test` (Jest with ts-jest)
- **Run single test:** `yarn test -- --testPathPattern=cardinal`
- **Lint:** `yarn lint`
- **Watch:** `yarn watch` (nodemon)
- **Clean:** `yarn clean`

## Architecture

The library exports 5 converter functions from `src/index.ts`:

- `cardinalConverter` — number → Italian cardinal word (e.g., `1` → `"uno"`)
- `ordinalConverter` — number → Italian ordinal word (e.g., `1` → `"primo"`, supports `female`/`plural` options)
- `italianConverter` — Italian word → number (reverse of cardinal/ordinal)
- `romanConverter` — Arabic number → Roman numeral string
- `arabicConverter` — Roman numeral string → Arabic number

All converters use shared lookup tables from `src/constants/constants.ts` (Italian word arrays, Roman numeral mappings, dictionary maps for reverse lookups).

Range: integers from -999999999999 to 999999999999 for Italian words; 1–3999 for Roman numerals. `Infinity` is handled specially.

## Key Patterns

- Each converter is a default export in its own file under `src/functions/`
- Internal helper functions (e.g., `tensConverter`, `hundredsConverter`, `wordCalculator`) are module-private, not exported
- The `cardinalConverter` applies Italian orthography rules: vowel elision (e.g., `vent` + `uno` → `ventuno`) and accent on trailing `tre` (→ `tré`)
- Tests live in a separate `tests/` directory (not co-located), using Jest with `@jest/globals`

## Release

Automated via `semantic-release` with `@semantic-release/git`. Commit messages follow conventional commits to trigger version bumps.
