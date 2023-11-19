import {
  romanHundreds,
  romanTens,
  romanThousands,
  romanUnits,
} from '../constants/constants';

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
