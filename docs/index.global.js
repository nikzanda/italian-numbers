"use strict";
var italianNumbers = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // src/index.ts
  var src_exports = {};
  __export(src_exports, {
    arabicConverter: () => arabicConverter_default,
    cardinalConverter: () => cardinalConverter_default,
    italianConverter: () => italianConverter_default,
    ordinalConverter: () => ordinalConverter_default,
    romanConverter: () => romanConverter_default
  });

  // src/constants/constants.ts
  var zeroNineteen = [
    "zero",
    "uno",
    "due",
    "tre",
    "quattro",
    "cinque",
    "sei",
    "sette",
    "otto",
    "nove",
    "dieci",
    "undici",
    "dodici",
    "tredici",
    "quattordici",
    "quindici",
    "sedici",
    "diciassette",
    "diciotto",
    "diciannove"
  ];
  var zeroTenOrdinals = [
    "zeresimo",
    "primo",
    "secondo",
    "terzo",
    "quarto",
    "quinto",
    "sesto",
    "settimo",
    "ottavo",
    "nono",
    "decimo"
  ];
  var tens = [
    "venti",
    "trenta",
    "quaranta",
    "cinquanta",
    "sessanta",
    "settanta",
    "ottanta",
    "novanta"
  ];
  var hundred = "cento";
  var thousands = ["mille", "mila"];
  var millions = ["un milione", " milioni"];
  var billions = ["un miliardo", " miliardi"];
  var and = " e ";
  var romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1e3
  };
  var romanUnits = [
    "",
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",
    "IX"
  ];
  var romanTens = [
    "",
    "X",
    "XX",
    "XXX",
    "XL",
    "L",
    "LX",
    "LXX",
    "LXXX",
    "XC"
  ];
  var romanHundreds = [
    "",
    "C",
    "CC",
    "CCC",
    "CD",
    "D",
    "DC",
    "DCC",
    "DCCC",
    "CM"
  ];
  var romanThousands = [
    "",
    "M",
    "MM",
    "MMM"
  ];
  var unitsDict = {
    un: 1,
    uno: 1,
    due: 2,
    tre: 3,
    tr\u00E9: 3,
    quattro: 4,
    cinque: 5,
    sei: 6,
    sette: 7,
    otto: 8,
    nove: 9,
    dieci: 10,
    undici: 11,
    dodici: 12,
    tredici: 13,
    quattordici: 14,
    quindici: 15,
    sedici: 16,
    diciassette: 17,
    diciotto: 18,
    diciannove: 19
  };
  var tensDict = {
    venti: 20,
    trenta: 30,
    quaranta: 40,
    cinquanta: 50,
    sessanta: 60,
    settanta: 70,
    ottanta: 80,
    novanta: 90
  };

  // src/functions/cardinalConverter.ts
  var tensConverter = (n) => {
    if (n < 20) {
      return zeroNineteen[n];
    }
    const firstDigit = Math.floor(n / 10) - 2;
    const secondDigit = n % 10;
    const word = tens[firstDigit];
    if (secondDigit === 0) {
      return word;
    }
    if (secondDigit === 1 || secondDigit === 8) {
      return word.slice(0, word.length - 1) + zeroNineteen[secondDigit];
    }
    return word + zeroNineteen[secondDigit];
  };
  var hundredsConverter = (n) => {
    const firstDigit = Math.floor(n / 100);
    if (firstDigit === 1) {
      return hundred;
    }
    return zeroNineteen[firstDigit] + hundred;
  };
  var wordCalculator = (n) => {
    const digitsNumber = Math.log(n) * Math.LOG10E + 1 | 0;
    if (digitsNumber < 3) {
      return tensConverter(n);
    }
    if (digitsNumber < 4) {
      if (n % 100 === 0) {
        return hundredsConverter(n);
      }
      if (n % 100 > 79 && n % 100 < 90) {
        const word = hundredsConverter(n);
        return word.slice(0, word.length - 1) + wordCalculator(n % 100);
      }
      return hundredsConverter(n) + wordCalculator(n % 100);
    }
    if (digitsNumber < 7) {
      const firstDigits = Math.floor(n / 1e3);
      if (firstDigits === 1) {
        if (n % 1e3 === 0) {
          return thousands[0];
        }
        return thousands[0] + wordCalculator(n % 1e3);
      }
      if (n % 1e3 === 0) {
        return wordCalculator(firstDigits) + thousands[1];
      }
      return wordCalculator(firstDigits) + thousands[1] + wordCalculator(n % 1e3);
    }
    if (digitsNumber < 10) {
      const firstDigits = Math.floor(n / 1e6);
      if (firstDigits === 1) {
        if (n % 1e6 === 0) {
          return millions[0];
        }
        return millions[0] + and + wordCalculator(n % 1e6);
      }
      if (n % 1e6 === 0) {
        return wordCalculator(firstDigits) + millions[1];
      }
      return wordCalculator(firstDigits) + millions[1] + and + wordCalculator(n % 1e6);
    }
    if (digitsNumber < 13) {
      const firstDigits = Math.floor(n / 1e9);
      if (firstDigits === 1) {
        if (n % 1e9 === 0) {
          return billions[0];
        }
        return billions[0] + and + wordCalculator(n % 1e9);
      }
      if (n % 1e9 === 0) {
        return wordCalculator(firstDigits) + billions[1];
      }
      return wordCalculator(firstDigits) + billions[1] + and + wordCalculator(n % 1e9);
    }
    return "oh my zsh";
  };
  var cardinalConverter = (number, options = { includeDecimals: false }) => {
    if (Number.isNaN(number)) {
      throw new Error("not a number");
    }
    if (number === Infinity) {
      return "infinito";
    }
    if (number > 999999999999) {
      throw new Error("greater than 999999999999");
    }
    if (number < -999999999999) {
      throw new Error("lower than 999999999999");
    }
    let prepend = "";
    if (number < 0) {
      prepend = "meno ";
    }
    const n = Math.trunc(Math.abs(number));
    let result = prepend + wordCalculator(n);
    if (result.endsWith("tre") && result !== "tre") {
      result = result.replace(/.$/, "\xE9");
    }
    result = result.replaceAll(/(?<=\w+)tre\s/g, "tr\xE9 ");
    if (options.includeDecimals) {
      const decimals = Math.abs(Math.floor(number * 100 % 100));
      result = `${result}/${decimals.toString().padStart(2, "0")}`;
    }
    return result;
  };
  var cardinalConverter_default = cardinalConverter;

  // src/functions/ordinalConverter.ts
  var converter = (n) => {
    if (n < 11) {
      return zeroTenOrdinals[n];
    }
    let word = cardinalConverter_default(n);
    word = word.replaceAll(" e ", " ");
    word = word.replace(/([io])\s([ou])/g, (_match, p1, p2) => {
      if (p2 === "o") {
        return p1;
      }
      if (p2 === "u") {
        return p2;
      }
      return "";
    });
    word = word.replaceAll(/un\s/g, "");
    word = word.replaceAll(/ouno$/g, "uno");
    word = word.replaceAll(/ootto$/g, "otto");
    word = word.replaceAll(" ", "");
    const lastDigit = n % 10;
    if (n % 100 !== 13 && lastDigit === 3) {
      return `${word.replace(/.$/, "e")}esimo`;
    }
    if (n % 100 !== 16 && lastDigit === 6) {
      return `${word}esimo`;
    }
    if (n % 100 === 10) {
      return word.replace(/dieci$/g, "decimo");
    }
    if (word.endsWith("mila")) {
      return word.replace(/mila/, "millesimo");
    }
    return `${word.replace(/.$/, "")}esimo`;
  };
  var ordinalConverter = (number, options = { female: false, plural: false }) => {
    if (number < 0) {
      throw new Error("negative number not allowed");
    }
    const n = Math.trunc(number);
    const result = converter(n);
    const { female, plural } = options;
    if (female && plural) {
      return result.replace(/.$/, "e");
    }
    if (female) {
      return result.replace(/.$/, "a");
    }
    if (plural) {
      return result.replace(/.$/, "i");
    }
    return result;
  };
  var ordinalConverter_default = ordinalConverter;

  // src/functions/romanConverter.ts
  var romanConverter = (number) => {
    if (Number.isNaN(number)) {
      throw new Error("not a number");
    }
    if (number === Infinity) {
      return "infinitum";
    }
    if (number > 3999) {
      throw new Error("greater than 3999");
    }
    if (number < 1) {
      throw new Error("lower than 1");
    }
    const unit = number % 10;
    const ten = Math.floor(number / 10) % 10;
    const hundred2 = Math.floor(number / 100) % 10;
    const thousand = Math.floor(number / 1e3) % 10;
    const result = `${romanThousands[thousand]}${romanHundreds[hundred2]}${romanTens[ten]}${romanUnits[unit]}`;
    return result;
  };
  var romanConverter_default = romanConverter;

  // src/functions/arabicConverter.ts
  var arabicConverter = (romanNumber) => {
    if (romanNumber === "infinitum") {
      return Infinity;
    }
    const romanLetters = Object.keys(romanNumerals);
    if (Array.from(romanNumber).some((letter) => !romanLetters.includes(letter))) {
      throw new Error("invalid roman number");
    }
    let number = 0;
    for (let i = 0; i < romanNumber.length; i++) {
      let arabicNumber = romanNumerals[romanNumber.charAt(i)];
      if (i + 1 < romanNumber.length) {
        const nextArabicNumber = romanNumerals[romanNumber.charAt(i + 1)];
        if (arabicNumber < nextArabicNumber) {
          arabicNumber *= -1;
        }
      }
      number += arabicNumber;
    }
    let isValid;
    try {
      isValid = romanNumber === romanConverter_default(number);
    } catch {
      throw new Error("invalid roman number");
    }
    if (!isValid) {
      throw new Error("invalid roman number");
    }
    return number;
  };
  var arabicConverter_default = arabicConverter;

  // src/functions/italianConverter.ts
  var tensConverter2 = (word) => {
    if (unitsDict[word]) {
      return unitsDict[word];
    }
    const ten = Object.keys(tensDict).find((w) => word.startsWith(w.slice(0, -1)));
    if (!ten) {
      return NaN;
    }
    const result = tensDict[ten];
    if (word === ten) {
      return result;
    }
    let [, unit] = word.split(ten);
    if (!unit) {
      [, unit] = word.split(ten.slice(0, -1));
    }
    if (!unitsDict[unit]) {
      return NaN;
    }
    return result + unitsDict[unit];
  };
  var hundredsConverter2 = (word) => {
    const [hundred2, ten] = word.split("cento");
    if (ten === void 0) {
      return tensConverter2(hundred2);
    }
    let result = -1;
    if (hundred2 === "") {
      result = 100;
    } else {
      if (!unitsDict[hundred2]) {
        return NaN;
      }
      result = unitsDict[hundred2] * 100;
    }
    if (ten !== "") {
      const tensWord = ten.startsWith("tt") ? `o${ten}` : ten;
      result += tensConverter2(tensWord);
    }
    return result;
  };
  var numberCalculator = (word) => {
    let index = word.indexOf("miliard");
    if (index > -1) {
      const sub = word.slice(index + 8);
      let rest = 0;
      if (sub) {
        rest = numberCalculator(sub);
      }
      return hundredsConverter2(word.slice(0, index)) * 1e9 + rest;
    }
    index = word.indexOf("milion");
    if (index > -1) {
      const sub = word.slice(index + 7);
      let rest = 0;
      if (sub) {
        rest = numberCalculator(sub);
      }
      return hundredsConverter2(word.slice(0, index)) * 1e6 + rest;
    }
    index = word.indexOf("mila");
    if (index > -1) {
      const sub = word.slice(index + 4);
      let rest = 0;
      if (sub) {
        rest = numberCalculator(sub);
      }
      return hundredsConverter2(word.slice(0, index)) * 1e3 + rest;
    }
    index = word.indexOf("mille");
    if (index > -1) {
      const sub = word.slice(index + 5);
      if (!sub) {
        return 1e3;
      }
      return 1e3 + hundredsConverter2(sub);
    }
    return hundredsConverter2(word);
  };
  var getNumberFromOrdinal = (ordinal) => {
    let cardinal = ordinal;
    cardinal = cardinal.replace(/decim\w$/, "dieci");
    cardinal = cardinal.replace(/centesim\w$/, "cento");
    cardinal = cardinal.replace(/^millesim\w$/, "mille");
    cardinal = cardinal.replace(/millesim\w$/, "mila");
    cardinal = cardinal.replace(/^milionesim\w$/, "unmilione");
    cardinal = cardinal.replace(/milionesim\w$/, "milioni");
    cardinal = cardinal.replace(/^miliardesim\w$/, "unmiliardo");
    cardinal = cardinal.replace(/miliardesim\w$/, "miliardi");
    cardinal = cardinal.replace(/ventesim\w$/, "venti");
    cardinal = cardinal.replace(/ntesim\w$/, "nta");
    cardinal = cardinal.replace(/unesim\w$/, "uno");
    cardinal = cardinal.replace(/quattresim\w$/, "quattro");
    cardinal = cardinal.replace(/ottesim\w$/, "otto");
    cardinal = cardinal.replace(/duesim\w$/, "due");
    cardinal = cardinal.replace(/cinquesim\w$/, "cinque");
    cardinal = cardinal.replace(/settesim\w$/, "sette");
    cardinal = cardinal.replace(/novesim\w$/, "nove");
    cardinal = cardinal.replace(/undicesim\w$/, "undici");
    cardinal = cardinal.replace(/dodicesim\w$/, "dodici");
    cardinal = cardinal.replace(/tredicesim\w$/, "tredici");
    cardinal = cardinal.replace(/quattordicesim\w$/, "quattordici");
    cardinal = cardinal.replace(/quindicesim\w$/, "quindici");
    cardinal = cardinal.replace(/sedicesim\w$/, "sedici");
    cardinal = cardinal.replace(/esim\w$/, "");
    cardinal = cardinal.replace(/^milione/, "unmilione");
    cardinal = cardinal.replace(/^miliard/, "unmiliardo");
    cardinal = cardinal.replace(/centuno/, "centouno");
    cardinal = cardinal.replace(/centotto/, "centootto");
    cardinal = cardinal.replace(/miliarduno/, "miliardouno");
    cardinal = cardinal.replace(/miliardotto/, "miliardootto");
    return cardinal;
  };
  var italianConverter = (word) => {
    let escapedWord = word.toLowerCase();
    escapedWord = escapedWord.replaceAll(" e ", "");
    escapedWord = escapedWord.replaceAll(" ", "");
    let multiplier = 1;
    if (escapedWord.startsWith("meno")) {
      multiplier = -1;
      escapedWord = escapedWord.replace("meno", "");
    }
    if (word === "infinito") {
      return Infinity;
    }
    if (word === "zero") {
      return 0;
    }
    let decimals = 0;
    if (escapedWord.match(/\/\d\d$/)) {
      let stringDecimals;
      [escapedWord, stringDecimals] = escapedWord.split("/");
      decimals = parseInt(stringDecimals, 10) / 100;
    }
    if (escapedWord.match(/\w*(a|o|e|i)$/)) {
      const index = zeroTenOrdinals.findIndex((ord) => escapedWord.startsWith(ord.slice(0, -1)));
      if (index !== -1) {
        return index;
      }
      if (escapedWord.match(/infinitesim(a|o|e|i)$/)) {
        return Infinity;
      }
      if (escapedWord.match(/\w*(esim|decim)(a|o|e|i)$/)) {
        escapedWord = getNumberFromOrdinal(escapedWord);
      }
    }
    const result = numberCalculator(escapedWord) * multiplier + decimals;
    return result;
  };
  var italianConverter_default = italianConverter;
  return __toCommonJS(src_exports);
})();
//# sourceMappingURL=index.global.js.map