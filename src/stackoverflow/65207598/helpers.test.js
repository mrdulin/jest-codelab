const rewire = require('rewire');
const helper = rewire('./helpers');

describe('model helpers', () => {
  describe('searchValue', () => {
    it('should return an instance', async () => {
      const searchValue = helper.__get__('searchValue');
      const mockFoo = { foo: '1' };
      const fooId = '1';
      const mockDbConnect = {
        collection: jest.fn().mockReturnThis(),
        findOne: jest.fn().mockReturnValue(mockFoo),
      };
      const res = await searchValue(fooId, mockDbConnect);
      expect(mockDbConnect.collection).toHaveBeenCalledWith('foos');
    });
  });
});
