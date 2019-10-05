jest.mock('pg', () => {
  return {
    Pool: jest.fn(() => {
      return {
        query: jest.fn()
      };
    })
  };
});

const someModule = require('./index');
const { Pool } = require('pg');

const pool = new Pool();

describe.skip('someModule', () => {
  it('callback is called', done => {
    const text = 'QUERY TEXT';
    const params = { a: 1, b: 2 };
    // expect.assertions(2);
    const queryCallback = jest.fn((err, res) => {
      cb(err, res);
    });
    pool.query.mockImplementation((a, b, callback = queryCallback) => {
      const error = null;
      const res = {};
      callback(error, res);
    });

    const cb = jest.fn((err, res) => {
      console.log(err, res);
      expect(err).toEqual(null);
      expect(res).toEqual({});
      done();
    });

    someModule.query(text, params, cb);
    expect(pool.query).toBeCalledWith(text, params);
  });
});
