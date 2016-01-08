import { CacheManager } from '.';

const cacheManager = CacheManager.getInstance();

cacheManager.readAsPromise = jest.fn();

describe('CacheManager', () => {
  describe('#someMethod', () => {
    it('should throw error', async () => {
      (cacheManager.readAsPromise as jest.Mock<any>).mockReturnValueOnce('java');
      const actualValue = await cacheManager.someMethod('jest', 'where');
      expect(actualValue).toBe('java');
      expect(cacheManager.readAsPromise).toBeCalledWith('jest', 'where');
    });
  });
});
