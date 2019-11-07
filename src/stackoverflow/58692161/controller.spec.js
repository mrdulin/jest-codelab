const controller = require('./controller');
const apiModel = require('./api');

describe('updateProductStatus controller', () => {
  const mReq = { body: {} };
  const mRes = { send: jest.fn() };
  beforeEach(() => {
    jest.restoreAllMocks();
  });
  test('should send success response', async () => {
    const mResult = { affectedRows: 2 };
    const updateProductStatusSpy = jest.spyOn(apiModel, 'updateProductStatus').mockResolvedValueOnce(mResult);
    await controller.updateProductStatus(mReq, mRes);
    expect(mRes.send).toBeCalledWith({ status: 'success', message: 'product status updated.' });
    expect(updateProductStatusSpy).toBeCalledWith(mReq.body);
  });

  test('should send error response', async () => {
    const mResult = { affectedRows: 0 };
    const updateProductStatusSpy = jest.spyOn(apiModel, 'updateProductStatus').mockResolvedValueOnce(mResult);
    await controller.updateProductStatus(mReq, mRes);
    expect(mRes.send).toBeCalledWith({ status: 'error', message: 'failed to update product status.' });
    expect(updateProductStatusSpy).toBeCalledWith(mReq.body);
  });
});
