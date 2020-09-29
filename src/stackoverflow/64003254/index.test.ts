import fns, { myObject } from './';

jest.mock('./', () => {
  return {
    myObject: { key: 'teresa teng' },
    func1: jest.fn(),
    func2: jest.fn(),
  };
});

describe('64003254', () => {
  it('should pass', () => {
    expect(jest.isMockFunction(fns.func1)).toBeTruthy();
    expect(jest.isMockFunction(fns.func2)).toBeTruthy();
    expect(myObject.key).toBe('teresa teng');
  });
});
