import { getClient } from './';
import { collection } from './collection';

jest.mock('./collection');

describe('64811936', () => {
  it('should pass 1', () => {
    getClient();
    expect(collection).toBeCalledWith('Null');
  });

  it('should pass 2', () => {
    const DB_COLLECTION = process.env.DB_COLLECTION;
    process.env.DB_COLLECTION = 'test';
    getClient();
    expect(collection).toBeCalledWith('test');
    process.env.DB_COLLECTION = DB_COLLECTION;
  });
});
