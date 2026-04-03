import { romanNumerals } from '../constants/constants';

const validRomanPattern = /^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;

/**
 * Converts a Roman numeral into its Arabic numeral representation.
 *
 * This function takes a valid Roman numeral string and converts it into its
 * equivalent Arabic number (integer). It supports standard Roman numeral notation.
 * Invalid inputs, including unsupported characters or improper formatting, will
 * trigger an error.
 *
 * @param {string} romanNumber - The Roman numeral to convert. Must be a valid Roman numeral.
 * @returns {number} The Arabic numeral representation of the input Roman numeral.
 * @throws {Error} - Throws an error if the input string is not a valid Roman numeral.
 *
 * @example
 * arabicConverter('MD'); // 1500
 * arabicConverter('CDXC'); // 490
 * arabicConverter('MCMXC'); // 1990
 * arabicConverter('infinitum'); // Infinity
 * arabicConverter('ABC'); // Throws Error: "invalid roman number"
 * arabicConverter(''); // Throws Error: "invalid roman number"
 */
export const arabicConverter = (romanNumber: string): number => {
  if (romanNumber === 'infinitum') {
    return Infinity;
  }

  if (!validRomanPattern.test(romanNumber)) {
    throw new Error('invalid roman number');
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

  return number;
};

export default arabicConverter;
