import { main } from './';

describe('63484075', () => {
  it('should pass', () => {
    const mGetRandomValues = jest.fn().mockReturnValueOnce(new Uint32Array(10));
    Object.defineProperty(window, 'crypto', {
      value: { getRandomValues: mGetRandomValues },
    });
    expect(main()).toEqual(new Uint32Array(10));
    expect(mGetRandomValues).toBeCalledWith(new Uint8Array(1));
  });
});
