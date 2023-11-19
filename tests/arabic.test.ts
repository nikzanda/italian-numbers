import { describe, expect, test } from '@jest/globals';
import { arabicConverter } from '../src';

describe('random numbers', () => {
  test('MMMCMXCIX === 3999', () => {
    expect(arabicConverter('MMMCMXCIX')).toBe(3999);
  });
  test('DCCLXXXIV === 784', () => {
    expect(arabicConverter('DCCLXXXIV')).toBe(784);
  });
  test('CXXIII === 123', () => {
    expect(arabicConverter('CXXIII')).toBe(123);
  });
  test('MMCCCXVII === 2317', () => {
    expect(arabicConverter('MMCCCXVII')).toBe(2317);
  });
  test('CMXLIX === 949', () => {
    expect(arabicConverter('CMXLIX')).toBe(949);
  });
  test('LXXIX === 79', () => {
    expect(arabicConverter('LXXIX')).toBe(79);
  });
  test('infinitum === Infinity', () => {
    expect(arabicConverter('infinitum')).toBe(Infinity);
  });
});

describe('tens', () => {
  test('I === 1', () => {
    expect(arabicConverter('I')).toBe(1);
  });
  test('X === 10', () => {
    expect(arabicConverter('X')).toBe(10);
  });
  test('XX === 20', () => {
    expect(arabicConverter('XX')).toBe(20);
  });
  test('XXX === 30', () => {
    expect(arabicConverter('XXX')).toBe(30);
  });
  test('XL === 40', () => {
    expect(arabicConverter('XL')).toBe(40);
  });
  test('L === 50', () => {
    expect(arabicConverter('L')).toBe(50);
  });
  test('LX === 60', () => {
    expect(arabicConverter('LX')).toBe(60);
  });
  test('LXX === 70', () => {
    expect(arabicConverter('LXX')).toBe(70);
  });
  test('LXXX === 80', () => {
    expect(arabicConverter('LXXX')).toBe(80);
  });
  test('XC === 90', () => {
    expect(arabicConverter('XC')).toBe(90);
  });
  test('C === 100', () => {
    expect(arabicConverter('C')).toBe(100);
  });
  test('CCC === 300', () => {
    expect(arabicConverter('CCC')).toBe(300);
  });
  test('D === 500', () => {
    expect(arabicConverter('D')).toBe(500);
  });
  test('DCC === 700', () => {
    expect(arabicConverter('DCC')).toBe(700);
  });
  test('DCCXXX === 730', () => {
    expect(arabicConverter('DCCXXX')).toBe(730);
  });
  test('CDXC === 490', () => {
    expect(arabicConverter('CDXC')).toBe(490);
  });
  test('M === 1000', () => {
    expect(arabicConverter('M')).toBe(1000);
  });
  test('MD === 1500', () => {
    expect(arabicConverter('MD')).toBe(1500);
  });
  test('MCMXC === 1990', () => {
    expect(arabicConverter('MCMXC')).toBe(1990);
  });
});

describe('exceptions', () => {
  test('invalid roman number', () => {
    expect(() => {
      arabicConverter('not a roman number');
    }).toThrow('invalid roman number');
  });
});
