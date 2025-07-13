# italian-numbers

[![npm](https://nodei.co/npm/italian-numbers.png)](https://www.npmjs.com/package/italian-numbers)

## Purpose

### Converts a number to an italian word representation and vice versa

Works with positive and negative integers from **-999999999999** (meno novecentonovantanove miliardi e novecentonovantanove milioni e novecentonovantanovemilanovecentonovantanove) to **999999999999** (novecentonovantanove miliardi e novecentonovantanove milioni e novecentonovantanovemilanovecentonovantanove).

The representation can be a cardinal number (uno, due, tre...) or an ordinal number (primo, secondo, terzo). Ordinal numbers can also be translated in feminine form (prima, seconda, terza...), in plural form (primi, secondi, terzi...) or plural feminine (prime, seconde, terze...).

Also works with `Infinity` (infinito).

### Converts an Arabic number to a Roman number and vice versa

Works with positive integers from **1** (I) to **3999** (MMMCMXCIX).

Also works with `Infinity` (infinitum).

## Installation

Install using

```sh
npm install --save italian-numbers
```

or

```sh
yarn add --save italian-numbers
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

// 🔢 Cardinal numbers representation
cardinalConverter(1); // 'uno'
cardinalConverter(90); // 'novanta'
cardinalConverter(709); // 'settecentonove'

// 🥇 Ordinal numbers representation
ordinalConverter(1); // 'primo'
ordinalConverter(10); // 'decimo'
ordinalConverter(63); // 'sessantatreesimo'

ordinalConverter(1, { female: true }); // 'prima'
ordinalConverter(15, { female: true }); // 'quindicesima'
ordinalConverter(109, { female: true }); // 'centonovesima'

ordinalConverter(1, { plural: true }); // 'primi'
ordinalConverter(18, { plural: true }); // 'diciottesimi'
ordinalConverter(89, { plural: true }); // 'ottantanovesimi'

ordinalConverter(1, { plural: true, female: true }); // 'prime'
ordinalConverter(70, { plural: true, female: true }); // 'settantesime'
ordinalConverter(110, { plural: true, female: true }); // 'centodecime'

// 🔁 Italian word representation to number
italianConverter('uno'); // 1
italianConverter('novantasette'); // 97
italianConverter('un milione tredicimila'); // 1013000
italianConverter('zeresimo'); // 0
italianConverter('prima'); // 1
italianConverter('quattrocentotredicesime'); // 413
italianConverter('infinitesimi'); // Infinity

// 🏛️ Arabic to Roman
romanConverter(1); // 'I'
romanConverter(79); // 'LXXIX'
romanConverter(2317); // 'MMCCCXVII'

// 🕌 Roman to Arabic
arabicConverter('MD'); // 1500
arabicConverter('CDXC'); // 490
arabicConverter('MCMXC'); // 1990
```
