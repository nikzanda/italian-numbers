import { romanNumerals } from '../constants/constants';
import romanConverter from './romanConverter';

export const arabicConverter = (romanNumber: string): number => {
  if (romanNumber === 'infinitum') {
    return Infinity;
  }

  const romanLetters = Object.keys(romanNumerals);
  if (Array.from(romanNumber).some((letter) => !romanLetters.includes(letter))) {
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

  let isValid: boolean;
  try {
    isValid = romanNumber === romanConverter(number);
  } catch {
    throw new Error('invalid roman number');
  }

  if (!isValid) {
    throw new Error('invalid roman number');
  }

  return number;
};

export default arabicConverter;
