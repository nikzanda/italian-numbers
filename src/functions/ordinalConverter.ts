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

  // TODO: miliardesimo, miliardottesimo ecc...
  let word = cardinalConverter(n);
  word = word.replaceAll(/un\s/g, '');
  word = word.replaceAll(/\se\s/g, '');
  word = word.replaceAll(' ', '');

  const lastDigit = n % 10;

  if (n % 100 !== 13 && lastDigit === 3) {
    return `${word.replace(/.$/, 'e')}esimo`;
  }
  if (n > 20 && lastDigit === 6) {
    return `${word}esimo`;
  }

  if (word.endsWith('mila')) {
    return word.replace(/mila/, 'millesimo');
  }

  return `${word.replace(/.$/, '')}esimo`;
};

const ordinalConverter = (
  number: number,
  options: Options = { female: false, plural: false },
): string => {
  const n = Math.abs(number);

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
