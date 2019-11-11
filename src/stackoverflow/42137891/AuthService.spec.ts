import { AuthService } from './AuthService';

const authService = new AuthService('clientid', 'domain', 'redirectUri');

describe('AuthService', () => {
  describe('#login', () => {
    afterEach(() => {
      jest.restoreAllMocks();
    });
    it('should login successfully and return id token', async done => {
      let loginCallback;
      jest.spyOn(authService['auth0']['client'], 'login').mockImplementation((options, callback) => {
        loginCallback = callback;
        done();
      });
      const actualValue = authService.login('username', 'password');
      const mAuthResult = { idToken: '123', accessToken: '321' };
      loginCallback(null, mAuthResult);
      await expect(actualValue).resolves.toBe('123');
    });

    it('should login failed', async done => {
      let loginCallback;
      jest.spyOn(authService['auth0']['client'], 'login').mockImplementation((options, callback) => {
        loginCallback = callback;
        done();
      });
      const actualValue = authService.login('username', 'password');
      const mError = new Error('network error');
      loginCallback(mError, null);
      await expect(actualValue).rejects.toThrowError(mError);
    });
  });
});
