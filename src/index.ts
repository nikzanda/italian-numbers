import { zeroNineteen, tens, hundred, thousands, millions, billions } from './constants'

const hundredsConverter = (n: number): string => {
  if (n > 999) {
    throw new Error('greater than 999');
  }

  if (n < 100) {
    throw new Error('smaller than 100');
  }

  const firstDigit = Math.floor(n / 100);
  if (firstDigit === 1) {
    return hundred;
  }

  return zeroNineteen[firstDigit] + hundred;
}

// TODO: se finisce con 3 mettere "é"
const tensConverter = (n: number): string => {
  if (n > 99) {
    throw new Error('greater than 99');
  }

  if (n < 20) {
    return zeroNineteen[n];
  }

  const firstDigit = Math.floor(n / 10) - 2
  const secondDigit = n % 10;
  const word = tens[firstDigit]

  if (secondDigit === 0) {
    return word;
  }

  if (secondDigit === 1 || secondDigit === 8) {
    return word.slice(0, word.length - 1) + zeroNineteen[secondDigit];
  }

  return word + zeroNineteen[secondDigit]
}

const wordCalculator = (n: number): string => {
  const digitsNumber = Math.log(n) * Math.LOG10E + 1 | 0;

  if (digitsNumber < 3) {
    return tensConverter(n);
  }
  if (digitsNumber < 4) {
    if (n % 100 === 0) {
      return hundredsConverter(n)
    }

    if (n % 100 > 79 && n % 100 < 90) {
      const word = hundredsConverter(n);
      return word.slice(0, word.length - 1) + wordCalculator(n % 100);
    }
    return hundredsConverter(n) + wordCalculator(n % 100)
  }
  
  return 'oh my zsh'
}

const converter = (number: number): string => {
  if (isNaN(number)) {
    throw new Error('not a number');
  }

  // TODO: numeri negativi
  const n = Math.abs(number);

  return wordCalculator(n);
}

for (let i = 0; i < 1001; i++) {
  console.log(i, converter(i))
}

export default converter;
