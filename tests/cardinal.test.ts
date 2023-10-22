import { describe, expect, test } from '@jest/globals';
import { cardinalConverter } from '../src';

describe('one and eight tests', () => {
  test('21 === ventuno', () => {
    expect(cardinalConverter(21)).toBe('ventuno');
  });
  test('28 === ventotto', () => {
    expect(cardinalConverter(28)).toBe('ventotto');
  });
});

describe('exceptions', () => {
  test('greater than 999999999999', () => {
    expect(() => {
      cardinalConverter(9999999999991);
    }).toThrow('greater than 999999999999');
  });
  test('not a number', () => {
    expect(() => {
      cardinalConverter(Number('string'));
    }).toThrow('not a number');
  });
});

describe('ones tests', () => {
  test('1 === uno', () => {
    expect(cardinalConverter(1)).toBe('uno');
  });
  test('100 === cento', () => {
    expect(cardinalConverter(100)).toBe('cento');
  });
  test('1000 === mille', () => {
    expect(cardinalConverter(1000)).toBe('mille');
  });
  test('1000000 === un milione', () => {
    expect(cardinalConverter(1000000)).toBe('un milione');
  });
  test('1000000000 === un miliardo', () => {
    expect(cardinalConverter(1000000000)).toBe('un miliardo');
  });
});

describe('threes tests', () => {
  test('3 === tre', () => {
    expect(cardinalConverter(3)).toBe('tre');
  });
  test('33 === trentatré', () => {
    expect(cardinalConverter(33)).toBe('trentatré');
  });
  test('333 === trecentotrentatré', () => {
    expect(cardinalConverter(333)).toBe('trecentotrentatré');
  });
  test('3333 === tremilatrecentotrentatré', () => {
    expect(cardinalConverter(3333)).toBe('tremilatrecentotrentatré');
  });
  test('3000000 === tre milioni', () => {
    expect(cardinalConverter(3000000)).toBe('tre milioni');
  });
  test('3000033 === tre milioni e trentatré', () => {
    expect(cardinalConverter(3000033)).toBe('tre milioni e trentatré');
  });
  test('33003000 === trentatré milioni e tremila', () => {
    expect(cardinalConverter(33003000)).toBe('trentatré milioni e tremila');
  });
  test('3033000000 === tre miliardi e trentatré milioni', () => {
    expect(cardinalConverter(3033000000)).toBe('tre miliardi e trentatré milioni');
  });
  test('3003000000 === tre miliardi e tre milioni', () => {
    expect(cardinalConverter(3003000000)).toBe('tre miliardi e tre milioni');
  });
  test('3000 === tremila', () => {
    expect(cardinalConverter(3000)).toBe('tremila');
  });
  test('23000 === ventitremila', () => {
    expect(cardinalConverter(23000)).toBe('ventitremila');
  });
  test('103103103103 === centotré miliardi e centotré milioni e centotremilacentotré', () => {
    expect(cardinalConverter(103103103103)).toBe('centotré miliardi e centotré milioni e centotremilacentotré');
  });
});

describe('random tests', () => {
  test('27347687 === ventisette milioni e trecentoquarantasettemilaseicentottantasette', () => {
    expect(cardinalConverter(27347687)).toBe('ventisette milioni e trecentoquarantasettemilaseicentottantasette');
  });
  test('200000000 === duecento milioni', () => {
    expect(cardinalConverter(200000000)).toBe('duecento milioni');
  });
  test('12341 === dodicimilatrecentoquarantuno', () => {
    expect(cardinalConverter(12341)).toBe('dodicimilatrecentoquarantuno');
  });
  test('-34564 === meno trentaquattromilacinquecentosessantaquattro', () => {
    expect(cardinalConverter(-34564)).toBe('meno trentaquattromilacinquecentosessantaquattro');
  });
  test('2398406 === due milioni e trecentonovantottomilaquattrocentosei', () => {
    expect(cardinalConverter(2398406)).toBe('due milioni e trecentonovantottomilaquattrocentosei');
  });
  test('Infinity === infinito', () => {
    expect(cardinalConverter(Infinity)).toBe('infinito');
  });
  test('9654367 === nove milioni e seicentocinquantaquattromilatrecentosessantasette', () => {
    expect(cardinalConverter(9654367)).toBe('nove milioni e seicentocinquantaquattromilatrecentosessantasette');
  });
  test('100100100 === cento milioni e centomilacento', () => {
    expect(cardinalConverter(100100100)).toBe('cento milioni e centomilacento');
  });
  test('999999999999 === novecentonovantanove miliardi e novecentonovantanove milioni e novecentonovantanovemilanovecentonovantanove', () => {
    expect(cardinalConverter(999999999999)).toBe('novecentonovantanove miliardi e novecentonovantanove milioni e novecentonovantanovemilanovecentonovantanove');
  });
});
