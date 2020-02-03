const rewire = require('rewire');
const utils = rewire('./utils');

describe('utils', () => {
  describe('#checkIfTokenIsValid', () => {
    test('should not check token', async () => {
      const authMock = jest.fn();
      utils.__set__({
        auth: authMock,
        authToken: undefined,
      });
      await utils.checkIfTokenIsValid();
      expect(authMock).not.toBeCalled();
    });

    test('should check token', async () => {
      const authMock = jest.fn().mockResolvedValueOnce('abc');
      utils.__set__({
        auth: authMock,
        authToken: 123,
      });
      await utils.checkIfTokenIsValid();
      expect(authMock).toBeCalledTimes(1);
      expect(utils.__get__('authToken')).toBe('abc');
    });
  });
});
