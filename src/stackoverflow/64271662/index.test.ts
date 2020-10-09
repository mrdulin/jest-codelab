import { invert, ValidationError } from './';

describe('64271662', () => {
  it('should throw validation error if string is empty', () => {
    expect(() => invert('')).toThrow(ValidationError);
  });
  it('should return string', () => {
    expect(invert('teresa teng')).toBe('teresa teng');
  });
});
