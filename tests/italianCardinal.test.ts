import { describe, expect, test } from '@jest/globals';
import { italianConverter } from '../src';

describe('one and eight tests', () => {
  test('21 === ventuno', () => {
    expect(italianConverter('ventuno')).toBe(21);
  });
  test('28 === ventotto', () => {
    expect(italianConverter('ventotto')).toBe(28);
  });
});

describe('NaN', () => {
  test('NaN === blabla', () => {
    expect(italianConverter('blabla')).toBe(NaN);
  });
  test('NaN === ventottobla', () => {
    expect(italianConverter('ventottobla')).toBe(NaN);
  });
  test('NaN === centozero', () => {
    expect(italianConverter('centozero')).toBe(NaN);
  });
});

describe('ones tests', () => {
  test('1 === uno', () => {
    expect(italianConverter('uno')).toBe(1);
  });
  test('100 === cento', () => {
    expect(italianConverter('cento')).toBe(100);
  });
  test('1000 === mille', () => {
    expect(italianConverter('mille')).toBe(1000);
  });
  test('1000000 === un milione', () => {
    expect(italianConverter('un milione')).toBe(1000000);
  });
  test('1000000000 === un miliardo', () => {
    expect(italianConverter('un miliardo')).toBe(1000000000);
  });
});

describe('threes tests', () => {
  test('3 === tre', () => {
    expect(italianConverter('tre')).toBe(3);
  });
  test('33 === trentatré', () => {
    expect(italianConverter('trentatré')).toBe(33);
  });
  test('333 === trecentotrentatré', () => {
    expect(italianConverter('trecentotrentatré')).toBe(333);
  });
  test('3333 === tremilatrecentotrentatré', () => {
    expect(italianConverter('tremilatrecentotrentatré')).toBe(3333);
  });
  test('3000000 === tre milioni', () => {
    expect(italianConverter('tre milioni')).toBe(3000000);
  });
  test('3000033 === tre milioni e trentatré', () => {
    expect(italianConverter('tre milioni e trentatré')).toBe(3000033);
  });
  test('33003000 === trentatré milioni e tremila', () => {
    expect(italianConverter('trentatré milioni e tremila')).toBe(33003000);
  });
  test('3033000000 === tre miliardi e trentatré milioni', () => {
    expect(italianConverter('tre miliardi e trentatré milioni')).toBe(3033000000);
  });
  test('3003000000 === tre miliardi e tre milioni', () => {
    expect(italianConverter('tre miliardi e tre milioni')).toBe(3003000000);
  });
  test('3000 === tremila', () => {
    expect(italianConverter('tremila')).toBe(3000);
  });
  test('23000 === ventitremila', () => {
    expect(italianConverter('ventitremila')).toBe(23000);
  });
  test('103103103103 === centotré miliardi e centotré milioni e centotremilacentotré', () => {
    expect(italianConverter('centotré miliardi e centotré milioni e centotremilacentotré')).toBe(103103103103);
  });
});

describe('min-max', () => {
  test('999999999999 === novecentonovantanove miliardi e novecentonovantanove milioni e novecentonovantanovemilanovecentonovantanove', () => {
    expect(italianConverter('novecentonovantanove miliardi e novecentonovantanove milioni e novecentonovantanovemilanovecentonovantanove')).toBe(999999999999);
  });

  test('-999999999999 === meno novecentonovantanove miliardi e novecentonovantanove milioni e novecentonovantanovemilanovecentonovantanove', () => {
    expect(italianConverter('meno novecentonovantanove miliardi e novecentonovantanove milioni e novecentonovantanovemilanovecentonovantanove')).toBe(-999999999999);
  });

  test('0 === zero', () => {
    expect(italianConverter('zero')).toBe(0);
  });

  test('Infinity === infinito', () => {
    expect(italianConverter('infinito')).toBe(Infinity);
  });
});

describe('decimal tests', () => {
  test('9 === nove/00', () => {
    expect(italianConverter('nove/00')).toBe(9);
  });
  test('10.45 === dieci/45', () => {
    expect(italianConverter('dieci/45')).toBe(10.45);
  });
  test('10.00 === dieci/00', () => {
    expect(italianConverter('dieci/00')).toBe(10.00);
  });
  test('10.06 === dieci/06', () => {
    expect(italianConverter('dieci/06')).toBe(10.06);
  });
  test('145.6 === centoquarantacinque/60', () => {
    expect(italianConverter('centoquarantacinque/60')).toBe(145.6);
  });
  test('3450.0 === tremilaquattrocentocinquanta/00', () => {
    expect(italianConverter('tremilaquattrocentocinquanta/00')).toBe(3450.0);
  });
  test('10000.99 === diecimila/99', () => {
    expect(italianConverter('diecimila/99')).toBe(10000.99);
  });
});

describe('random tests', () => {
  test('27347687 === ventisette milioni e trecentoquarantasettemilaseicentottantasette', () => {
    expect(italianConverter('ventisette milioni e trecentoquarantasettemilaseicentottantasette')).toBe(27347687);
  });
  test('200000000 === duecento milioni', () => {
    expect(italianConverter('duecento milioni')).toBe(200000000);
  });
  test('12341 === dodicimilatrecentoquarantuno', () => {
    expect(italianConverter('dodicimilatrecentoquarantuno')).toBe(12341);
  });
  test('-34564 === meno trentaquattromilacinquecentosessantaquattro', () => {
    expect(italianConverter('meno trentaquattromilacinquecentosessantaquattro')).toBe(-34564);
  });
  test('2398406 === due milioni e trecentonovantottomilaquattrocentosei', () => {
    expect(italianConverter('due milioni e trecentonovantottomilaquattrocentosei')).toBe(2398406);
  });
  test('9654367 === nove milioni e seicentocinquantaquattromilatrecentosessantasette', () => {
    expect(italianConverter('nove milioni e seicentocinquantaquattromilatrecentosessantasette')).toBe(9654367);
  });
  test('100100100 === cento milioni e centomilacento', () => {
    expect(italianConverter('cento milioni e centomilacento')).toBe(100100100);
  });
  test('1013000 === un milione tredicimila', () => {
    expect(italianConverter('un milione tredicimila')).toBe(1013000);
  });
  test('1010 === milledieci', () => {
    expect(italianConverter('milledieci')).toBe(1010);
  });
});
