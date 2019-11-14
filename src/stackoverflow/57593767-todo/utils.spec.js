const utils = require('./utils');
const auth = require('./auth.js');

jest.mock('./auth', () => {
  return {
    auth: jest.fn()
  };
});

describe.skip('utils', () => {
  describe('#checkIfTokenIsValid', () => {
    const originalAuthToken = utils.authToken;
    afterAll(() => {
      utils.authToken = originalAuthToken;
    });

    afterEach(() => {
      jest.resetAllMocks();
    });

    test('should not check token', async () => {
      utils.authToken = undefined;
      await utils.checkIfTokenIsValid();
      expect(auth.auth).not.toBeCalled();
    });

    test('should check token', async () => {
      utils.authToken = 123;
      await utils.checkIfTokenIsValid();
      expect(auth.auth).toBeCalledTimes(1);
    });
  });
});
