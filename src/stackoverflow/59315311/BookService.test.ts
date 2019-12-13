import { BookService } from './BookService';
import rp from 'request-promise-native';

jest.mock('request-promise-native', () => jest.fn());

describe('BookService', () => {
  afterEach(() => {
    jest.resetAllMocks();
    jest.restoreAllMocks();
  });
  describe('#getAllBookInCategory', () => {
    beforeEach(() => {
      process.env.BOOK_HOST = 'example.com';
      process.env.BOOKAPI_VERSION = 'v1';
    });
    afterEach(() => {
      process.env.BOOK_HOST = '';
      process.env.BOOKAPI_VERSION = '';
    });
    it('should make request correctly', async () => {
      const mAuthvalue = 'mocked auth value';
      jest.spyOn(BookService as any, 'getAuthValue').mockResolvedValueOnce(mAuthvalue);
      const mResponse = 'success';
      rp.mockResolvedValueOnce(mResponse);
      const actual = await BookService.getAllBookInCategory('programming');
      expect(actual).toEqual(mResponse);
      expect(rp).toBeCalledWith({
        method: 'GET',
        url: 'https://example.com/bookapi/v1/iterative/bookCategory/programming/books/all',
        headers: {
          Host: 'example.com',
          Authorization: mAuthvalue,
        },
        body: undefined,
        json: true,
      });
    });

    it('should print an error when make request failed', async () => {
      const mAuthvalue = 'mocked auth value';
      jest.spyOn(BookService as any, 'getAuthValue').mockResolvedValueOnce(mAuthvalue);
      const logSpy = jest.spyOn(console, 'log');
      const mError = new Error('Internal server error');
      rp.mockRejectedValueOnce(mError);
      await BookService.getAllBookInCategory('programming');
      expect(rp).toBeCalledWith({
        method: 'GET',
        url: 'https://example.com/bookapi/v1/iterative/bookCategory/programming/books/all',
        headers: {
          Host: 'example.com',
          Authorization: mAuthvalue,
        },
        body: undefined,
        json: true,
      });
      expect(logSpy).toBeCalledWith(`Failed to get All Books in given category ${mError}`);
    });
  });
});
