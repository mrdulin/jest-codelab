jest.mock('./auth.js', () => {
  return {
    auth: jest.fn()
  };
});

const utils = require('./utils');
const { auth } = require('./auth.js.js');

describe('utils', () => {
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
      expect(auth).not.toBeCalled();
    });

    test('should check token', async () => {
      utils.authToken = 123;
      await utils.checkIfTokenIsValid();
      expect(auth).toBeCalledTimes(1);
    });
  });
});
