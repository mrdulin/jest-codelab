import request from './request';
import axios from 'axios';

jest.mock('axios', () => {
  return {
    request: jest.fn()
  };
});

describe('request', () => {
  it('should execute axios request method once', async () => {
    (axios.request as jest.MockedFunction<typeof axios.request>).mockResolvedValueOnce({ data: 'mocked data' });
    const requestObj = {
      method: 'GET',
      url: 'http://mock.url',
      headers: {}
    };
    await request(requestObj);
    expect(axios.request).toHaveBeenCalledTimes(1);
  });
});
