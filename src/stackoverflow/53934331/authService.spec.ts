import { postAuthUser } from './authService';
import axios from 'axios';

jest.mock('axios', () => {
  return {
    post: jest.fn()
  };
});

describe('authService', () => {
  describe('#postAuthUser', () => {
    it('login user', () => {
      (axios.post as jest.MockedFunction<typeof axios.post>).mockResolvedValueOnce({});
      return postAuthUser({ username: 'user', password: 'password' }).then(data => {
        expect(data).toEqual({});
        expect(axios.post).toBeCalledWith('https://github.com/mrdulin', { username: 'user', password: 'password' });
      });
    });
  });
});
