import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { LocalStorageService } from './local-storage.service';

const prefix = '[er-decision-making-tool] ';

describe('LocalStorageService', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    localStorage.clear();
  });

  describe('get', () => {
    it('should return parsed value with prefixed key', () => {
      const mockValue = { data: 'test' };

      localStorage.setItem(`${prefix}test-key`, JSON.stringify(mockValue));

      const result = LocalStorageService.get('test-key');

      expect(result).toEqual(mockValue);
    });

    it('should return null for non-existing key', () => {
      const result = LocalStorageService.get('non-existing');

      expect(result).toBeNull();
    });
  });

  describe('set', () => {
    it('should store value with prefixed key', () => {
      const testValue = { foo: 'bar' };

      LocalStorageService.set('test-key', testValue);

      const storedValue = localStorage.getItem(`${prefix}test-key`);

      expect(storedValue).toBe(JSON.stringify(testValue));
    });

    it.each([
      { type: 'string', value: 'string', expected: '"string"' },
      { type: 'number', value: 123, expected: '123' },
      { type: 'boolean', value: true, expected: 'true' },
      { type: 'null', value: null, expected: 'null' },
      { type: 'object', value: { a: 1 }, expected: '{"a":1}' },
      { type: 'array', value: [1, 2, 3], expected: '[1,2,3]' },
    ])('should handle different data types $type', ({ value, expected }) => {
      LocalStorageService.set('test-key', value);
      const storedValue = localStorage.getItem(`${prefix}test-key`);

      expect(storedValue).toBe(expected);
    });
  });
});
