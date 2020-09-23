import { mod } from './';

describe('63640360', () => {
  it('should pass', () => {
    const mStorage = {
      get: jest.fn().mockImplementationOnce((key, callback) => {
        callback(null, 'teresa teng');
      }),
    };
    mod.init(mStorage);
    const actual = mod.get();
    expect(actual).toBe('teresa teng');
    expect(mStorage.get).toBeCalledWith('key', expect.any(Function));
  });
});
