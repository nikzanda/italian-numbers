import {
  romanHundreds,
  romanTens,
  romanThousands,
  romanUnits,
} from '../constants/constants';

/**
 * @name romanConverter
 * @summary Converts an Arabic number to a Roman number
 *
 * @param {number} number - Arabic number
 * @returns {string} Roman string representation
 * @throws Error if number is NaN or greater than 3999 or lower than 1
 *
 * @example
 * romanConverter(1);
 * //=> 'I'
 *
 * @example
 * romanConverter(79);
 * //=> 'LXXIX'
 *
 * @example
 * romanConverter(2317);
 * //=> 'MMCCCXVII'
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
