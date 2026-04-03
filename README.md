# italian-numbers

[![npm version](https://img.shields.io/npm/v/italian-numbers)](https://www.npmjs.com/package/italian-numbers)
[![CI](https://github.com/nikzanda/italian-numbers/actions/workflows/ci.yml/badge.svg)](https://github.com/nikzanda/italian-numbers/actions/workflows/ci.yml)
[![license](https://img.shields.io/npm/l/italian-numbers)](./LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-blue)](https://www.typescriptlang.org/)

> Converts numbers to Italian word representations and vice versa. Supports cardinal numbers, ordinal numbers, and Roman numerals.

## Features

- Cardinal numbers (uno, due, tre...)
- Ordinal numbers with gender and plural support (primo/prima/primi/prime...)
- Italian words to numbers (reverse conversion)
- Roman numerals (Arabic to Roman and vice versa)
- Decimal support (`cardinalConverter(10.45, { includeDecimals: true })` -> `"dieci/45"`)
- Negative numbers (`cardinalConverter(-34)` -> `"meno trentaquattro"`)
- Written in TypeScript with full type definitions included
- Ships as ESM, CJS, and IIFE (global: `italianNumbers`)

## Installation

```sh
npm install italian-numbers
```

or

```sh
yarn add italian-numbers
```

## Usage

```js
import {
  cardinalConverter,
  ordinalConverter,
  italianConverter,
  romanConverter,
  arabicConverter,
} from 'italian-numbers';

// Cardinal numbers
cardinalConverter(1); // 'uno'
cardinalConverter(90); // 'novanta'
cardinalConverter(709); // 'settecentonove'

// Negative numbers
cardinalConverter(-34); // 'meno trentaquattro'

// Decimals
cardinalConverter(1000.05, { includeDecimals: true }); // 'mille/05'
cardinalConverter(9, { includeDecimals: true }); // 'nove/00'

// Ordinal numbers
ordinalConverter(1); // 'primo'
ordinalConverter(10); // 'decimo'
ordinalConverter(63); // 'sessantatreesimo'

// Ordinal — feminine
ordinalConverter(1, { female: true }); // 'prima'
ordinalConverter(15, { female: true }); // 'quindicesima'

// Ordinal — plural
ordinalConverter(1, { plural: true }); // 'primi'
ordinalConverter(18, { plural: true }); // 'diciottesimi'

// Ordinal — feminine plural
ordinalConverter(1, { plural: true, female: true }); // 'prime'
ordinalConverter(70, { plural: true, female: true }); // 'settantesime'

// Italian word to number
italianConverter('uno'); // 1
italianConverter('novantasette'); // 97
italianConverter('un milione tredicimila'); // 1013000
italianConverter('meno trentaquattro'); // -34
italianConverter('dieci/45'); // 10.45

// Ordinal word to number
italianConverter('zeresimo'); // 0
italianConverter('prima'); // 1
italianConverter('quattrocentotredicesime'); // 413
italianConverter('infinitesimi'); // Infinity

// Arabic to Roman
romanConverter(1); // 'I'
romanConverter(79); // 'LXXIX'
romanConverter(2317); // 'MMCCCXVII'

// Roman to Arabic
arabicConverter('MD'); // 1500
arabicConverter('CDXC'); // 490
arabicConverter('MCMXC'); // 1990
```

## API Reference

### `cardinalConverter(number, options?)`

Converts a number to its Italian cardinal word representation.

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `number` | `number` | — | The number to convert |
| `options.includeDecimals` | `boolean` | `false` | Append decimals as `/XX` |

**Returns:** `string`

**Range:** `-999999999999` to `999999999999`, plus `Infinity` / `-Infinity`

**Throws:**

| Error | When |
|-------|------|
| `not a number` | Input is `NaN` |
| `greater than 999999999999` | Input exceeds upper bound |
| `lower than -999999999999` | Input exceeds lower bound |

---

### `ordinalConverter(number, options?)`

Converts a number to its Italian ordinal word representation.

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `number` | `number` | — | The number to convert |
| `options.female` | `boolean` | `false` | Feminine form |
| `options.plural` | `boolean` | `false` | Plural form |

**Returns:** `string`

**Range:** `0` to `999999999999`, plus `Infinity`

**Throws:**

| Error | When |
|-------|------|
| `not a number` | Input is `NaN` |
| `greater than 999999999999` | Input exceeds upper bound |
| `negative number not allowed` | Input is negative |

---

### `italianConverter(word)`

Converts an Italian word representation back to a number.

| Parameter | Type | Description |
|-----------|------|-------------|
| `word` | `string` | Italian word (cardinal, ordinal, or decimal format) |

**Returns:** `number` — Returns `NaN` for unrecognized input.

Handles cardinals (`"ventuno"` -> `21`), ordinals in all forms (`"prima"` -> `1`), decimals (`"dieci/45"` -> `10.45`), negatives (`"meno tre"` -> `-3`), and infinity variants.

---

### `romanConverter(number)`

Converts an Arabic number to a Roman numeral string.

| Parameter | Type | Description |
|-----------|------|-------------|
| `number` | `number` | The number to convert |

**Returns:** `string`

**Range:** `1` to `3999`, plus `Infinity` (`"infinitum"`)

**Throws:**

| Error | When |
|-------|------|
| `not a number` | Input is `NaN` |
| `greater than 3999` | Input exceeds upper bound |
| `lower than 1` | Input is less than 1 |
| `not an integer` | Input is not a whole number |

---

### `arabicConverter(roman)`

Converts a Roman numeral string to an Arabic number.

| Parameter | Type | Description |
|-----------|------|-------------|
| `roman` | `string` | Uppercase Roman numeral string |

**Returns:** `number`

**Throws:**

| Error | When |
|-------|------|
| `invalid roman number` | Input is not a valid Roman numeral |

## Contributing

1. Fork the repository
2. Create your branch (`git checkout -b feat/my-feature`)
3. Install dependencies (`yarn install`)
4. Make your changes
5. Run lint and tests (`yarn lint && yarn test`)
6. Commit using [conventional commits](https://www.conventionalcommits.org/) (`feat:`, `fix:`, `docs:`, etc.)
7. Open a Pull Request

## License

[MIT](./LICENSE) - Nicolo Zandarin
