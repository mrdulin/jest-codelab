import { redisGet } from './';

describe('63253476', () => {
  it('should found addresses', async () => {
    const mClient = {
      get: jest.fn().mockImplementationOnce((params, callback) => {
        callback(null, '{"id": 1}');
      }),
    };
    const mReq = { params: { postCode: 123, houseNumber: 456 } };
    const mRes = { status: jest.fn().mockReturnThis(), send: jest.fn() };
    const mNext = jest.fn();
    await redisGet(mClient)(mReq, mRes, mNext);
    expect(mClient.get).toBeCalledWith(JSON.stringify({ postCode: 123, houseNumber: 456 }), expect.any(Function));
    expect(mRes.status).toBeCalledWith(200);
    expect(mRes.send).toBeCalledWith({ error: false, message: `Addresses found.`, data: { id: 1 } });
    expect(mNext).not.toBeCalled();
  });

  it('should handle error', async () => {
    const mErr = new Error('timeout');
    const mClient = {
      get: jest.fn().mockImplementationOnce((params, callback) => {
        callback(mErr);
      }),
    };
    const mReq = { params: { postCode: 123, houseNumber: 456 } };
    const mRes = { status: jest.fn().mockReturnThis(), send: jest.fn() };
    const mNext = jest.fn();
    await redisGet(mClient)(mReq, mRes, mNext);
    expect(mClient.get).toBeCalledWith(JSON.stringify({ postCode: 123, houseNumber: 456 }), expect.any(Function));
    expect(mRes.status).toBeCalledWith(400);
    expect(mRes.send).toBeCalledWith({ error: mErr, message: `Bad request` });
    expect(mNext).not.toBeCalled();
  });

  it('should do nothing and call next middleware', async () => {
    const mClient = {
      get: jest.fn().mockImplementationOnce((params, callback) => {
        callback();
      }),
    };
    const mReq = { params: { postCode: 123, houseNumber: 456 } };
    const mRes = { status: jest.fn().mockReturnThis(), send: jest.fn() };
    const mNext = jest.fn();
    await redisGet(mClient)(mReq, mRes, mNext);
    expect(mClient.get).toBeCalledWith(JSON.stringify({ postCode: 123, houseNumber: 456 }), expect.any(Function));
    expect(mRes.status).not.toBeCalled();
    expect(mRes.send).not.toBeCalled();
    expect(mNext).toBeCalled();
  });
});
