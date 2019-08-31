import request from './request';
import axios from 'axios';

jest.mock('axios');

describe('request', () => {
  it('should execute axios request method once', async () => {
    (axios.request as jest.Mock<any, any>).mockResolvedValueOnce({ data: 'mocked data' });
    const requestObj = {
      method: 'GET',
      url: 'http://mock.url',
      headers: {}
    };
    await request(requestObj);
    expect(axios.request).toHaveBeenCalledTimes(1);
  });
});
