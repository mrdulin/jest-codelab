describe('64051580', () => {
  afterEach(() => {
    jest.resetModules();
    jest.restoreAllMocks();
  });
  it('should render views', () => {
    const express = require('express');
    const mRouter = { get: jest.fn() };
    jest.spyOn(express, 'Router').mockImplementationOnce(() => mRouter);
    const mReq = {};
    const mRes = { status: jest.fn().mockReturnThis(), render: jest.fn() };
    const mNext = jest.fn();
    mRouter.get.mockImplementation((path, callback) => {
      if (path === '') {
        callback(mReq, mRes, mNext);
      }
    });
    require('./route');
    expect(mRes.status).toBeCalledWith(200);
    expect(mRes.render).toBeCalledWith('../views/');
  });

  it('should handle error', () => {
    const express = require('express');
    const mRouter = { get: jest.fn() };
    jest.spyOn(express, 'Router').mockImplementationOnce(() => mRouter);
    const mReq = {};
    const mErr = new Error('parse');
    const mRes = {
      status: jest.fn().mockReturnThis(),
      render: jest.fn().mockImplementationOnce(() => {
        throw mErr;
      }),
    };
    const mNext = jest.fn();
    mRouter.get.mockImplementation((path, callback) => {
      if (path === '') {
        callback(mReq, mRes, mNext);
      }
    });
    require('./route');
    expect(mNext).toBeCalledWith(mErr);
  });

  it('should render 404 not found view', () => {
    const express = require('express');
    const mRouter = { get: jest.fn() };
    jest.spyOn(express, 'Router').mockImplementationOnce(() => mRouter);
    const mReq = {};
    const mRes = { status: jest.fn().mockReturnThis(), render: jest.fn() };
    const mNext = jest.fn();
    mRouter.get.mockImplementation((path, callback) => {
      if (path === '*') {
        callback(mReq, mRes, mNext);
      }
    });
    require('./route');
    expect(mRes.status).toBeCalledWith(404);
    expect(mRes.render).toBeCalledWith('../views/not-found');
  });
});
