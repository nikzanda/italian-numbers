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
