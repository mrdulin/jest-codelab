const routes = {};
jest.mock('express', () => {
  const mExpress = {
    post: jest.fn((path, controller) => {
      routes[path] = controller;
    })
  };
  return jest.fn(() => mExpress);
});

let queryCallback;
jest.mock('pg', () => {
  const mpool = {
    query: jest.fn((query, values, callback) => {
      queryCallback = callback;
    })
  };
  const mPool = jest.fn(() => mpool);
  return { Pool: mPool };
});

require('./index');
const express = require('express');
const { Pool } = require('pg');
const app = express();
const pool = new Pool();

describe('insert', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  test('should insert data correctly', done => {
    const logSpy = jest.spyOn(console, 'log');
    expect(app.post).toBeCalledWith('/insert', expect.any(Function));
    const mReq = { body: 1 };
    const mRes = { status: jest.fn().mockReturnThis(), json: jest.fn().mockReturnThis() };
    routes['/insert'](mReq, mRes);
    expect(pool.query).toBeCalledWith('INSERT INTO student SET ?', [1], expect.any(Function));
    const mResult = { insertId: 1 };
    queryCallback(null, mResult);
    expect(mRes.status).toBeCalledWith(201);
    expect(mRes.status().json).toBeCalledWith({ msg: 'added 1' });
    expect(logSpy).toBeCalledWith(mResult);
    done();
  });

  test('should call error handler middleware', () => {
    expect(app.post).toBeCalledWith('/insert', expect.any(Function));
    const mReq = { body: 1 };
    const mRes = { status: jest.fn().mockReturnThis(), json: jest.fn().mockReturnThis() };
    const mNext = jest.fn();
    routes['/insert'](mReq, mRes, mNext);
    expect(pool.query).toBeCalledWith('INSERT INTO student SET ?', [1], expect.any(Function));
    const mError = new Error('network error');
    queryCallback(mError, null);
    expect(mNext).toBeCalledWith(new Error('Not Connected'));
  });
});
