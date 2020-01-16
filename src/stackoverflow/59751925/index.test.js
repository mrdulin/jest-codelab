import { main } from '.';
import axios from 'axios';

describe('59751925', () => {
  it('should pass', async () => {
    const mockGet = jest.spyOn(axios, 'get');
    mockGet.mockImplementation((url) => {
      switch (url) {
        case 'api/numbers':
          return Promise.resolve({ data: 1 });
        case 'api/letters':
          return Promise.resolve({ data: 'a' });
      }
    });
    const actual = await main();
    expect(actual.numbersRes).toEqual({ data: 1 });
    expect(actual.lettersRes).toEqual({ data: 'a' });
  });
});
