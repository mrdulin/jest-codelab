import pg from 'pg';
import fn from './';
import { someAsyncFunction } from './someAsyncFunction';

jest.mock('./someAsyncFunction', () => {
  return { someAsyncFunction: jest.fn() };
});
jest.mock('pg', () => {
  const mClient = { connect: jest.fn(), query: jest.fn(), end: jest.fn() };
  return { Client: jest.fn(() => mClient) };
});

describe('46152048', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.resetAllMocks();
  });
  it('should query success', async (done) => {
    someAsyncFunction.mockResolvedValueOnce('select 1;');
    const mClient = new pg.Client();
    mClient.connect.mockResolvedValueOnce();
    await fn({}, {}, (err, result) => {
      expect(pg.Client).toBeCalledWith('someConnectionString');
      expect(someAsyncFunction).toBeCalledWith('test');
      expect(mClient.query).toBeCalledWith('select 1;');
      expect(mClient.end).toBeCalledTimes(1);
      expect(err).toBeNull();
      expect(result).toBe('success');
      done();
    });
  });

  it('should handle error if connect database failed', async () => {
    const mError = new Error('network');
    const mClient = new pg.Client();
    mClient.connect.mockRejectedValueOnce(mError);
    await fn({}, {}, (err, result) => {
      expect(err.message).toBe('network');
      expect(result).toBeUndefined();
    });
  });

  it('should handle error if query failed', async () => {
    const mError = new Error('network');
    const mClient = new pg.Client();
    mClient.connect.mockResolvedValueOnce();
    mClient.query.mockRejectedValueOnce(mError);
    await fn({}, {}, (err, result) => {
      expect(err.message).toBe('network');
      expect(mClient.end).toBeCalledTimes(1);
      expect(result).toBeUndefined();
    });
  });
});
