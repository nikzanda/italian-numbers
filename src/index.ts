import {
  zeroNineteen, tens, hundred, thousands, millions, and, billions,
} from './constants';

const tensConverter = (n: number): string => {
  if (n > 99) {
    throw new Error('greater than 99');
  }
  if (n < 20) {
    return zeroNineteen[n];
  }

  const firstDigit = Math.floor(n / 10) - 2;
  const secondDigit = n % 10;
  const word = tens[firstDigit];

  if (secondDigit === 0) {
    return word;
  }

  if (secondDigit === 1 || secondDigit === 8) {
    return word.slice(0, word.length - 1) + zeroNineteen[secondDigit];
  }

  return word + zeroNineteen[secondDigit];
};

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
};

const wordCalculator = (n: number): string => {
  // eslint-disable-next-line no-bitwise
  const digitsNumber = Math.log(n) * Math.LOG10E + 1 | 0;

  if (digitsNumber < 3) {
    return tensConverter(n);
  }
  if (digitsNumber < 4) {
    if (n % 100 === 0) {
      return hundredsConverter(n);
    }

    if (n % 100 > 79 && n % 100 < 90) {
      const word = hundredsConverter(n);
      return word.slice(0, word.length - 1) + wordCalculator(n % 100);
    }
    return hundredsConverter(n) + wordCalculator(n % 100);
  }
  // thousands
  if (digitsNumber < 7) {
    const firstDigits = Math.floor(n / 1000);
    if (firstDigits === 1) {
      if (n % 1000 === 0) {
        return thousands[0];
      }
      return thousands[0] + wordCalculator(n % 1000);
    }
    if (n % 1000 === 0) {
      return wordCalculator(firstDigits) + thousands[1];
    }
    return (
      wordCalculator(firstDigits) + thousands[1] + wordCalculator(n % 1000)
    );
  }
  // millions
  if (digitsNumber < 10) {
    const firstDigits = Math.floor(n / 1000000);
    if (firstDigits === 1) {
      if (n % 1000000 === 0) {
        return millions[0];
      }
      return millions[0] + and + wordCalculator(n % 1000000);
    }
    if (n % 1000000 === 0) {
      return wordCalculator(firstDigits) + millions[1];
    }
    return (
      wordCalculator(firstDigits) + millions[1] + and + wordCalculator(n % 1000000)
    );
  }
  // billions
  if (digitsNumber < 13) {
    const firstDigits = Math.floor(n / 1000000000);
    if (firstDigits === 1) {
      if (n % 1000000000 === 0) {
        return billions[0];
      }
      return billions[0] + and + wordCalculator(n % 1000000000);
    }
    if (n % 1000000000 === 0) {
      return wordCalculator(firstDigits) + billions[1];
    }
    return (
      wordCalculator(firstDigits) + billions[1] + and + wordCalculator(n % 1000000000)
    );
  }

  return 'oh my zsh';
};

const converter = (number: number): string => {
  if (Number.isNaN(number)) {
    throw new Error('not a number');
  }
  if (number === Infinity) {
    return 'infinito';
  }

  if (number > 999999999999) {
    throw new Error('greater than 999999999999');
  }

  let prepend = '';
  if (number < 0) {
    prepend = 'meno ';
  }
  const n = Math.abs(number);

  return prepend + wordCalculator(n);

  // TODO: tré
  // if (n === 3) {
  //   return `${prepend}tre`;
  // }

  // let result = prepend + wordCalculator(n);
  // if (result.includes(' tré')) {
  //   result = result.replace(' tré', ' tre');
  // }
  // if (result.includes('tré ')) {
  //   result = result.replace('tré ', 'tre ');
  // }

  // return result;
};

// for (let i = 1000000000; i < 999999999999; i += 10000003) {
//   console.log(i, converter(i));
// }

export default converter;
