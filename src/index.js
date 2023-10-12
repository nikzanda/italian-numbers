"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./constants");
var hundredsConverter = function (n) {
    if (n > 999) {
        throw new Error('greater than 999');
    }
    if (n < 100) {
        throw new Error('smaller than 100');
    }
    var firstDigit = Math.floor(n / 100);
    if (firstDigit === 1) {
        return constants_1.hundred;
    }
    return constants_1.zeroNineteen[firstDigit] + constants_1.hundred;
};
var tensConverter = function (n) {
    if (n > 99) {
        throw new Error('greater than 99');
    }
    if (n < 20) {
        return constants_1.zeroNineteen[n];
    }
    var firstDigit = Math.floor(n / 10) - 2;
    var secondDigit = n % 10;
    var word = constants_1.tens[firstDigit];
    if (secondDigit === 0) {
        return word;
    }
    if (secondDigit === 1 || secondDigit === 8) {
        return word.slice(0, word.length - 1) + constants_1.zeroNineteen[secondDigit];
    }
    return word + constants_1.zeroNineteen[secondDigit];
};
var wordCalculator = function (n) {
    var digitsNumber = Math.log(n) * Math.LOG10E + 1 | 0;
    if (digitsNumber < 3) {
        return tensConverter(n);
    }
    if (digitsNumber < 4) {
        if (n % 100 === 0) {
            return hundredsConverter(n);
        }
        if (n % 100 > 79 && n % 100 < 90) {
            var word = hundredsConverter(n);
            return word.slice(0, word.length - 1) + wordCalculator(n % 100);
        }
        return hundredsConverter(n) + wordCalculator(n % 100);
    }
    return 'oh my zsh';
};
var converter = function (number) {
    if (isNaN(number)) {
        throw new Error('not a number');
    }
    // TODO: numeri negativi
    var n = Math.abs(number);
    return wordCalculator(n);
};
for (var i = 0; i < 1001; i++) {
    console.log(i, converter(i));
}
exports.default = converter;
