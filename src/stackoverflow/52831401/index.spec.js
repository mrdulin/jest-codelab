import mod from '.';
import { Pool } from 'pg';

jest.mock('pg', () => {
  const mPool = {
    query: jest.fn()
  };
  return { Pool: jest.fn(() => mPool) };
});

const pool = new Pool();

afterEach(() => {
  jest.resetAllMocks();
  jest.restoreAllMocks();
});

it('callback is called', done => {
  let queryCallback;
  pool.query.mockImplementation((text, params, callback) => {
    queryCallback = callback;
  });
  const logSpy = jest.spyOn(console, 'log');
  const userCallback = jest.fn();
  mod.query('text', 'params', userCallback);
  const mRes = { rowCount: 1 };
  queryCallback(null, mRes);
  expect(pool.query).toBeCalledWith('text', 'params', queryCallback);
  expect(userCallback).toBeCalledWith(null, mRes);
  expect(logSpy).toBeCalledWith('executed query', { text: 'text', duration: expect.any(Number), rows: 1 });
  done();
});
