import { main } from '.';
import axios from 'axios';

jest.mock('axios', () => jest.fn());

describe('59873406', () => {
  it('should pass', async () => {
    const mResponse = { data: 'mock data' };
    axios.mockResolvedValueOnce(mResponse);
    const response = await main();
    expect(response).toEqual(mResponse);
    expect(axios).toBeCalledWith({ method: 'GET', url: 'https://stackoverflow.com/api', data: {} });
  });
});
