import { describe, expect, test } from '@jest/globals';
import { cardinalConverter, ordinalConverter, italianConverter } from '../src';

describe('ordinal round-trip 0-1000', () => {
  for (let i = 0; i <= 1000; i++) {
    test(`n. ${i}`, () => {
      const a = ordinalConverter(i);
      expect(italianConverter(a) === i).toBe(true);
    });
  }
});

describe('cardinal round-trip 0-1000', () => {
  for (let i = 0; i <= 1000; i++) {
    test(`n. ${i}`, () => {
      const word = cardinalConverter(i);
      expect(italianConverter(word)).toBe(i);
    });
  }
});
