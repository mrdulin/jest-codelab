import scrape from './scrape';
import main from './';

jest.mock('./scrape.ts', () => jest.fn().mockResolvedValueOnce('fake data'));

describe('main', () => {
  test('should return data', async () => {
    const actualValue = await main;
    expect(actualValue).toBe('fake data');
    expect(scrape).toBeCalledTimes(1);
  });
});
