import { describe, expect, test } from '@jest/globals';
import converter from '../src/index';

describe('one and eight tests', () => {
  test('21 === ventuno', () => {
    expect(converter(21)).toBe('ventuno');
  });
  test('28 === ventotto', () => {
    expect(converter(28)).toBe('ventotto');
  });
});

describe('exceptions', () => {
  test('greater than 999999999999', () => {
    expect(() => {
      converter(9999999999991);
    }).toThrow('greater than 999999999999');
  });

  test('not a number', () => {
    expect(() => {
      converter(Number('string'));
    }).toThrow('not a number');
  });
});

describe('ones tests', () => {
  test('1 === uno', () => {
    expect(converter(1)).toBe('uno');
  });
  test('100 === cento', () => {
    expect(converter(100)).toBe('cento');
  });
  test('1000 === mille', () => {
    expect(converter(1000)).toBe('mille');
  });
  test('1000000 === un milione', () => {
    expect(converter(1000000)).toBe('un milione');
  });
  test('1000000000 === un miliardo', () => {
    expect(converter(1000000000)).toBe('un miliardo');
  });
});

describe('threes tests', () => {
  test('3 === tre', () => {
    expect(converter(3)).toBe('tre');
  });
  test('33 === trentatré', () => {
    expect(converter(33)).toBe('trentatré');
  });
  test('333 === trecentotrentatré', () => {
    expect(converter(333)).toBe('trecentotrentatré');
  });
  test('3333 === tremilatrecentotrentatré', () => {
    expect(converter(3333)).toBe('tremilatrecentotrentatré');
  });
  test('3000000 === tre milioni', () => {
    expect(converter(3000000)).toBe('tre milioni');
  });
  test('3000033 === tre milioni e trentatré', () => {
    expect(converter(3000033)).toBe('tre milioni e trentatré');
  });
  test('33003000 === trentatré milioni e tremila', () => {
    expect(converter(33003000)).toBe('trentatré milioni e tremila');
  });
  test('3033000000 === tre miliardi e trentatré milioni', () => {
    expect(converter(3033000000)).toBe('tre miliardi e trentatré milioni');
  });
  test('3003000000 === tre miliardi e tre milioni', () => {
    expect(converter(3003000000)).toBe('tre miliardi e tre milioni');
  });
  test('3000 === tremila', () => {
    expect(converter(3000)).toBe('tremila');
  });
  test('23000 === ventitremila', () => {
    expect(converter(23000)).toBe('ventitremila');
  });
  test('103103103103 === centotré miliardi e centotré milioni e centotremilacentotré', () => {
    expect(converter(103103103103)).toBe('centotré miliardi e centotré milioni e centotremilacentotré');
  });
});

describe('random tests', () => {
  test('27347687 === ventisette milioni e trecentoquarantasettemilaseicentottantasette', () => {
    expect(converter(27347687)).toBe('ventisette milioni e trecentoquarantasettemilaseicentottantasette');
  });

  test('12341 === dodicimilatrecentoquarantuno', () => {
    expect(converter(12341)).toBe('dodicimilatrecentoquarantuno');
  });
  test('-34564 === meno trentaquattromilacinquecentosessantaquattro', () => {
    expect(converter(-34564)).toBe('meno trentaquattromilacinquecentosessantaquattro');
  });
  test('2398406 === due milioni e trecentonovantottomilaquattrocentosei', () => {
    expect(converter(2398406)).toBe('due milioni e trecentonovantottomilaquattrocentosei');
  });
  test('Infinity === infinito', () => {
    expect(converter(Infinity)).toBe('infinito');
  });
  test('9654367 === nove milioni e seicentocinquantaquattromilatrecentosessantasette', () => {
    expect(converter(9654367)).toBe('nove milioni e seicentocinquantaquattromilatrecentosessantasette');
  });
  test('100100100 === cento milioni e centomilacento', () => {
    expect(converter(100100100)).toBe('cento milioni e centomilacento');
  });
  test('999999999999 === novecentonovantanove miliardi e novecentonovantanove milioni e novecentonovantanovemilanovecentonovantanove', () => {
    expect(converter(999999999999)).toBe('novecentonovantanove miliardi e novecentonovantanove milioni e novecentonovantanovemilanovecentonovantanove');
  });
});
