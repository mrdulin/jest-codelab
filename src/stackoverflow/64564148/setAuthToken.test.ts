import axios from 'axios';
import setAuthToken from './setAuthToken';

jest.unmock('axios');

describe('setAuthToken utility function.', () => {
  test('Sets the axios header, x-auth-token, with a token.', () => {
    let token = 'test token';
    setAuthToken(token);
    expect(axios.defaults.headers.common['x-auth-token']).toBe('test token');
  });
});
