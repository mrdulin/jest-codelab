import decode from 'jwt-decode';
import { checkAuth } from '.';

jest.mock('jwt-decode', () => jest.fn());

const mLocalStorage = {
  _storage: {},
  getItem: jest.fn((key) => {
    return this._storage[key];
  }),
  setItem: jest.fn((key, value) => {
    this._storage[key] = value;
  }),
};
global.localStorage = mLocalStorage;

describe('auth', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });
  it('allows the user to login successfully', async () => {
    localStorage.setItem('token', 'fake_token_user');
    const token = localStorage.getItem('token');

    decode.mockImplementationOnce((token) => {
      return {
        exp: new Date().getTime() / 1000 + 1,
        iat: 1575751766,
        userData: { isAdmin: true, login: 'one92tb', userId: 1 },
      };
    });

    expect(token).toBe('fake_token_user');
    expect(checkAuth()).toBe(true);
  });
});
