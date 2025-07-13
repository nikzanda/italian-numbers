import {
  romanHundreds,
  romanTens,
  romanThousands,
  romanUnits,
} from '../constants/constants';

/**
 * Converts an Arabic numeral into its Roman numeral representation.
 *
 * This function converts a given Arabic number (integer) into its equivalent
 * Roman numeral format. It supports numbers within the range of 1 to 3999,
 * inclusive.
 *
 * @param {number} number - The Arabic numeral to convert. Must be an integer between 1 and 3999.
 * @returns {string} The Roman numeral representation of the input number.
 * @throws {Error} Throws an error if the input is not a valid number.
 * @throws {Error} Throws an error if the number is less than 1 or greater than 3999.
 *
 * @example
 * romanConverter(1); // 'I'
 * romanConverter(79); // 'LXXIX'
 * romanConverter(2317); // 'MMCCCXVII'
 * romanConverter(NaN); // Throws Error: "not a number"
 * romanConverter(0); // Throws Error: "lower than 1"
 * romanConverter(4000); // Throws Error: "greater than 3999"
 * romanConverter(Infinity); // 'infinitum'
 */
const romanConverter = (number: number): string => {
  if (Number.isNaN(number)) {
    throw new Error('not a number');
  }
  if (number === Infinity) {
    return 'infinitum';
  }

  if (number > 3999) {
    throw new Error('greater than 3999');
  }

  if (number < 1) {
    throw new Error('lower than 1');
  }

  const unit = number % 10;
  const ten = Math.floor(number / 10) % 10;
  const hundred = Math.floor(number / 100) % 10;
  const thousand = Math.floor(number / 1000) % 10;

  const result = `${romanThousands[thousand]}${romanHundreds[hundred]}${romanTens[ten]}${romanUnits[unit]}`;
  return result;
};

export default romanConverter;
