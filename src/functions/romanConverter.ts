import {
  romanHundreds,
  romanTens,
  romanThousands,
  romanUnits,
} from '../constants/constants';

const wordCalculator = (n: number): string => {
  const unit = n % 10;
  const ten = Math.floor(n / 10) % 10;
  const hundred = Math.floor(n / 100) % 10;
  const thousand = Math.floor(n / 1000) % 10;

  return `${romanThousands[thousand]}${romanHundreds[hundred]}${romanTens[ten]}${romanUnits[unit]}`;
};

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
    throw new Error('minor than 1');
  }

  const n = Math.abs(number);

  let result = wordCalculator(n);

  result = result.replaceAll('0', '');
  return result;
};

export default romanConverter;
