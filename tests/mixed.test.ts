import { describe, expect, test } from '@jest/globals';
import { ordinalConverter, italianConverter } from '../src';

describe('all', () => {
  for (let i = 0; i <= 1000; i++) {
    test(`n. ${i}`, () => {
      const a = ordinalConverter(i);
      expect(italianConverter(a) === i).toBe(true);
    });
  }
});
