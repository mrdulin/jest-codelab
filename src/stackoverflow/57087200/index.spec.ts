import axios from 'axios';
import { getCustomer } from './';

describe('getCustomer', () => {
  it('t1', async () => {
    const url = 'https://github.com/mrdulin';
    axios.patch = jest.fn().mockResolvedValueOnce({ status: 202 });
    const actualValue = await getCustomer();
    expect(actualValue).toEqual({ status: 202 });
    expect(axios.patch).toBeCalledWith(url, { customerId: '12345' });
  });
});
