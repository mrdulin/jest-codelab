import { trimLeft, trimRight } from './';

describe('59430114', () => {
  describe('#trimLeft', () => {
    it('t1', () => {
      expect(trimLeft(' jestjs')).toBe('jestjs');
    });
    it('t2', () => {
      Object.defineProperty(String.prototype, 'trimLeft', { value: undefined });
      expect(trimLeft(' jestjs')).toBe('jestjs');
    });
  });

  describe('#trimRight', () => {
    it('t1', () => {
      expect(trimRight('jestjs ')).toBe('jestjs');
    });
    it('t2', () => {
      Object.defineProperty(String.prototype, 'trimRight', { value: undefined });
      expect(trimRight('jestjs ')).toBe('jestjs');
    });
  });
});
