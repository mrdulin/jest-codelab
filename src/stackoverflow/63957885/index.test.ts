import {injectArray} from './'

const mockFn = jest.fn();

describe('injectArray()', () => {
  it('returns a new array with the function injected into the objects', () => {
    expect(injectArray([{
      name: 'John Doe',
      age: 25
    }], mockFn)).toEqual([{
      name: 'John Doe',
      age: 25,
      fn: expect.any(Function)
    }]);
  });
});