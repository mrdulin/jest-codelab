import { AuthService } from './AuthService';
import * as auth0 from './auth0';

jest.mock('./auth0', () => {
  return {
    WebAuth: jest.fn(() => {
      return {
        client: {
          login: jest.fn()
        }
      };
    })
  };
});

const authService = new AuthService('clientid', 'domain', 'redirectUri');

describe('AuthService', () => {
  describe('#login', () => {
    it('t1', async () => {
      const mockedAuth0 = new auth0.WebAuth();
      expect(jest.isMockFunction(mockedAuth0.client.login));
      (mockedAuth0.client.login as jest.Mocked<any>).mockImplementation((options, callback) => {
        console.log(options);
        const err = null;
        const authResult = { idToken: '123', accessToken: '321' };
        callback(err, authResult);
      });
      const actualValue = await authService.login('username', 'password');
    });
  });
});
