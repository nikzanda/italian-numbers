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
 * @name ordinalConverter
 * @summary Converts a number to an italian word representation (ordinal number)
 *
 * @param {number} number - Any number
 * @param {Options} options
 * If `options.female` is true return representation in feminine style.
 * If `options.plural` is true return representation in plural style.
 * Female and plural can be used together
 * @returns {string} Italian word representation (ordinal number)
 * @throws Error if number is NaN or greater than 999999999999 or negative
 *
 * @example
 * ordinalConverter(1);
 * //=> 'primo'
 *
 * @example
 * ordinalConverter(10);
 * //=> 'decimo'
 *
 * @example
 * ordinalConverter(63);
 * //=> 'sessantatreesimo'
 *
 *
 * @example
 * ordinalConverter(Infinity);
 * //=> 'infinitesimo'
 *
 * @example
 * ordinalConverter(1, { female: true });
 * //=> 'prima'
 *
 * @example
 * ordinalConverter(15, { female: true });
 * //=> 'quindicesima'
 *
 * @example
 * ordinalConverter(109, { female: true });
 * //=> 'centonovesima'
 *
 * @example
 * ordinalConverter(1, { plural: true });
 * //=> 'primi'
 *
 * @example
 * ordinalConverter(18, { plural: true });
 * //=> 'diciottesimi'
 *
 * @example
 * ordinalConverter(89, { plural: true });
 * //=> 'ottantanovesimi'
 *
 * @example
 * ordinalConverter(1, { plural: true, female: true });
 * //=> 'prime'
 *
 * @example
 * ordinalConverter(70, { plural: true, female: true });
 * //=> 'settantesime'
 *
 * @example
 * ordinalConverter(110, { plural: true, female: true });
 * //=> 'centodecime'
 */
const ordinalConverter = (
  number: number,
  options: Options = { female: false, plural: false },
): string => {
  if (number < 0) {
    throw new Error('negative number not allowed');
  }

  const result = converter(number);

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
