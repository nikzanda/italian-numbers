import { zeroTenOrdinals } from '../constants/constants';
import cardinalConverter from './cardinalConverter';

type Options = {
  female?: boolean;
  plural?: boolean;
}

const converter = (n: number): string => {
  if (n < 11) {
    return zeroTenOrdinals[n];
  }

  let word = cardinalConverter(n);

  word = word.replaceAll(' e ', ' ');
  word = word.replace(/([io])\s([ou])/g, (_match, p1, p2) => {
    if (p2 === 'o') {
      return p1;
    }
    if (p2 === 'u') {
      return p2;
    }
    return '';
  });
  word = word.replaceAll(/un\s/g, '');
  word = word.replaceAll(/ouno$/g, 'uno');
  word = word.replaceAll(/ootto$/g, 'otto');
  word = word.replaceAll(' ', '');

  const lastDigit = n % 10;

  if (n % 100 !== 13 && lastDigit === 3) {
    return `${word.replace(/.$/, 'e')}esimo`;
  }
  if (n % 100 !== 16 && lastDigit === 6) {
    return `${word}esimo`;
  }
  if (n % 100 === 10) {
    return word.replace(/dieci$/g, 'decimo');
  }
  if (word.endsWith('mila')) {
    return word.replace(/mila/, 'millesimo');
  }

  return `${word.replace(/.$/, '')}esimo`;
};

/**
 * Converts a number into its Italian word representation in ordinal form.
 *
 * @param {number} number
 * A positive integer or Infinity. Must be a valid number (not NaN), less than
 * or equal to 999,999,999,999.
 * Infinity is represented as "infinitesimo".
 * @param {Options} options
 * Configuration options for the conversion.
 * - `options.female` (optional): If `true`, returns the representation in feminine form.
 * - `options.plural` (optional): If `true`, returns the representation in plural form.
 *
 * Both `female` and `plural` can be used together.
 *
 * @returns {string}
 * The Italian word representing the ordinal number.
 * Example:
 *  - 1 -> "primo",
 *  - 10 -> "decimo",
 *  - Infinity -> "infinitesimo".
 *
 * @throws {Error} Throws an error if:
 *  - The number is NaN.
 *  - The number is greater than 999,999,999,999.
 *  - The number is negative.
 *
 * @example
 * // Basic usage:
 * ordinalConverter(1); // 'primo'
 * ordinalConverter(10); // 'decimo'
 * ordinalConverter(63); // 'sessantatreesimo'
 *
 * // Special case:
 * ordinalConverter(Infinity); // 'infinitesimo'
 *
 * // Feminine form:
 * ordinalConverter(1, { female: true }); // 'prima'
 * ordinalConverter(15, { female: true }); // 'quindicesima'
 * ordinalConverter(109, { female: true }); // 'centonovesima'
 *
 * // Plural form:
 * ordinalConverter(1, { plural: true }); // 'primi'
 * ordinalConverter(18, { plural: true }); // 'diciottesimi'
 * ordinalConverter(89, { plural: true }); // 'ottantanovesimi'
 *
 * // Feminine plural form:
 * ordinalConverter(1, { plural: true, female: true }); // 'prime'
 * ordinalConverter(70, { plural: true, female: true }); // 'settantesime'
 * ordinalConverter(110, { plural: true, female: true }); // 'centodecime'
 *
 * @description
 * This function converts numbers into their ordinal form in Italian, handling:
 * - Standard ordinal forms.
 * - Feminine and/or plural variations.
 * - Special case for Infinity.
 * - Error handling for invalid inputs.
 *
 * Note:
 * - The `female` and `plural` options modify only the suffix of the word
 * (e.g., "a" for feminine or "i/e" for plural forms).
 * - For large numbers or unexpected inputs, ensure proper validation before usage.
 */
const ordinalConverter = (
  number: number,
  options: Options = { female: false, plural: false },
): string => {
  if (number < 0) {
    throw new Error('negative number not allowed');
  }

  const n = Math.trunc(number);
  const result = converter(n);

  const { female, plural } = options;

  if (female && plural) {
    return result.replace(/.$/, 'e');
  }

  if (female) {
    return result.replace(/.$/, 'a');
  }

  if (plural) {
    return result.replace(/.$/, 'i');
  }

  return result;
};

export default ordinalConverter;
