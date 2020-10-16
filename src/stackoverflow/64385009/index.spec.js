import axios from 'axios';
import { getUser } from './';

jest.mock('axios', () => {
  return { get: jest.fn() };
});
describe('64385009', () => {
  it('test getUser', async () => {
    const expectedUser = [{ id: '1', name: 'Alice' }];
    axios.get.mockResolvedValueOnce(expectedUser);
    const result = await getUser();
    expect(result).toEqual(expectedUser);
    expect(axios.get).toBeCalledWith('./user');
  });
});
