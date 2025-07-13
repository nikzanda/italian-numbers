import {
  zeroNineteen,
  tens,
  hundred,
  thousands,
  millions,
  billions,
  and,
} from '../constants/constants';

type Options = {
  includeDecimals?: boolean;
}

const tensConverter = (n: number): string => {
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
  const firstDigit = Math.floor(n / 100);
  if (firstDigit === 1) {
    return hundred;
  }

  return zeroNineteen[firstDigit] + hundred;
};

const wordCalculator = (n: number): string => {
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

/**
 * Converts a numeric value into its Italian cardinal word representation.
 *
 * This function accepts a number and returns its Italian word representation
 * as a cardinal number. Optionally, it can include the decimal part in the result.
 * The valid range for the input number is -999999999999 to 999999999999.
 *
 * @param {number} number - The numeric value to convert. Must be a valid finite number.
 * @param {Options} options - Configuration options. Default is `{ includeDecimals: false }`.
 * @param {boolean} [options.includeDecimals=false]
 * - Whether to include the decimal part in the result.
 *
 * @returns {string} The Italian cardinal word representation of the input number.
 *
 * @throws {Error}
 * Throws an error if the input is not a valid number.
 * @throws {Error}
 * Throws an error if the input is greater than 999999999999 or lower than -999999999999.
 *
 * @example
 * cardinalConverter(1); // 'uno'
 * cardinalConverter(90); // 'novanta'
 * cardinalConverter(709); // 'settecentonove'
 * cardinalConverter(1000.05, { includeDecimals: true }); // 'mille/05'
 * cardinalConverter(9, { includeDecimals: true }); // 'nove/00'
 * cardinalConverter(-1); // 'meno uno'
 * cardinalConverter(Infinity); // 'infinito'
 * cardinalConverter(NaN); // Throws Error: "not a number"
 */
const cardinalConverter = (
  number: number,
  options: Options = { includeDecimals: false },
): string => {
  if (Number.isNaN(number)) {
    throw new Error('not a number');
  }
  if (number === Infinity) {
    return 'infinito';
  }

  if (number > 999999999999) {
    throw new Error('greater than 999999999999');
  }
  if (number < -999999999999) {
    throw new Error('lower than 999999999999');
  }

  let prepend = '';
  if (number < 0) {
    prepend = 'meno ';
  }
  const n = Math.trunc(Math.abs(number));

  let result = prepend + wordCalculator(n);
  if (result.endsWith('tre') && result !== 'tre') {
    result = result.replace(/.$/, 'é');
  }

  result = result.replaceAll(/(?<=\w+)tre\s/g, 'tré ');

  if (options.includeDecimals) {
    const decimals = Math.abs(Math.floor((number * 100) % 100));
    result = `${result}/${decimals.toString().padStart(2, '0')}`;
  }

  return result;
};

export default cardinalConverter;
