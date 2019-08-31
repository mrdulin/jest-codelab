import { main } from '.';
import { apiClient } from './apiClient';

describe('main', () => {
  it('should get data correctly', async () => {
    apiClient.get = jest.fn().mockResolvedValueOnce('mocked data');
    const actualValue = await main('jest');
    expect(actualValue).toBe('mocked data');
    expect(apiClient.get).toBeCalledWith('jest');
  });

  it('should throw error', async () => {
    apiClient.get = jest.fn().mockRejectedValueOnce(new Error('network error'));
    await expect(main('go')).rejects.toThrowError(new Error('get error'));
    expect(apiClient.get).toBeCalledWith('go');
  });
});
