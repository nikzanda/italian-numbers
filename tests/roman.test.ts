import { describe, expect, test } from '@jest/globals';
import { romanConverter } from '../src';

describe('random numbers', () => {
  test('3999 === MMMCMXCIX', () => {
    expect(romanConverter(3999)).toBe('MMMCMXCIX');
  });
  test('784 === DCCLXXXIV', () => {
    expect(romanConverter(784)).toBe('DCCLXXXIV');
  });
  test('123 === CXXIII', () => {
    expect(romanConverter(123)).toBe('CXXIII');
  });
  test('2317 === MMCCCXVII', () => {
    expect(romanConverter(2317)).toBe('MMCCCXVII');
  });
  test('949 === CMXLIX', () => {
    expect(romanConverter(949)).toBe('CMXLIX');
  });
  test('79 === LXXIX', () => {
    expect(romanConverter(79)).toBe('LXXIX');
  });
  test('Infinity === infinitum', () => {
    expect(romanConverter(Infinity)).toBe('infinitum');
  });
});

describe('tens', () => {
  test('1 === I', () => {
    expect(romanConverter(1)).toBe('I');
  });
  test('10 === X', () => {
    expect(romanConverter(10)).toBe('X');
  });
  test('20 === XX', () => {
    expect(romanConverter(20)).toBe('XX');
  });
  test('30 === XXX', () => {
    expect(romanConverter(30)).toBe('XXX');
  });
  test('40 === XL', () => {
    expect(romanConverter(40)).toBe('XL');
  });
  test('50 === L', () => {
    expect(romanConverter(50)).toBe('L');
  });
  test('60 === LX', () => {
    expect(romanConverter(60)).toBe('LX');
  });
  test('70 === LXX', () => {
    expect(romanConverter(70)).toBe('LXX');
  });
  test('80 === LXXX', () => {
    expect(romanConverter(80)).toBe('LXXX');
  });
  test('90 === XC', () => {
    expect(romanConverter(90)).toBe('XC');
  });
  test('100 === C', () => {
    expect(romanConverter(100)).toBe('C');
  });
  test('300 === CCC', () => {
    expect(romanConverter(300)).toBe('CCC');
  });
  test('500 === D', () => {
    expect(romanConverter(500)).toBe('D');
  });
  test('700 === DCC', () => {
    expect(romanConverter(700)).toBe('DCC');
  });
  test('730 === DCCXXX', () => {
    expect(romanConverter(730)).toBe('DCCXXX');
  });
  test('490 === CDXC', () => {
    expect(romanConverter(490)).toBe('CDXC');
  });
  test('1000 === M', () => {
    expect(romanConverter(1000)).toBe('M');
  });
  test('1500 === MD', () => {
    expect(romanConverter(1500)).toBe('MD');
  });
  test('1990 === MCMXC', () => {
    expect(romanConverter(1990)).toBe('MCMXC');
  });
});

describe('exceptions', () => {
  test('greater than 3999', () => {
    expect(() => {
      romanConverter(4000);
    }).toThrow('greater than 3999');
  });
  test('not a number', () => {
    expect(() => {
      romanConverter(Number('string'));
    }).toThrow('not a number');
  });
  test('lower than 1', () => {
    expect(() => {
      romanConverter(0);
    }).toThrow('lower than 1');
  });
});
