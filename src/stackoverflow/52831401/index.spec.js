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

describe('someModule', () => {
  it('callback is called', done => {
    expect.assertions(2);
    const cb = jest.fn((err, res) => {
      expect(err).toEqual(null);
      expect(res).toEqual({});
      done();
    });
    pool.query.mockImplementation((a, b, callback) => {
      console.log(a, b);
      const error = null;
      const res = {};
      callback(error, res);
    });
    someModule.query('QUERY TEXT', { a: 1, b: 2 }, cb);
  });
});
