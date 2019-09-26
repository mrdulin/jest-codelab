import { main } from './main';
import impClient from './client';

jest.mock('./client.ts', () => {
  const mockedClient = {
    getClient: jest.fn()
  };
  return jest.fn(() => mockedClient);
});

const client = impClient();

describe('main', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });
  it('should return client correctly', async () => {
    (client.getClient as jest.MockedFunction<typeof client.getClient>).mockResolvedValueOnce('abcde');
    const customerId = '1';
    const actualValue = await main(customerId);
    expect(actualValue).toBe('abcde');
  });
});
