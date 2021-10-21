const apiModel = require('./api');
const db = require('./db');

describe('api', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });
  test('should update product status', async () => {
    const mData = { product_id: 1, status: 'no store' };
    const mResult = [{ affectedRows: 1 }];
    const querySpy = jest.spyOn(db, 'query').mockResolvedValueOnce(mResult);
    const actualValue = await apiModel.updateProductStatus(mData);
    expect(actualValue).toEqual(mResult[0]);
    expect(querySpy).toBeCalledWith('UPDATE products SET ? WHERE PRODUCT_ID = ?', [
      { STATUS: 'no store', UPDATED_TIMESTAMP: expect.any(Number) },
      1
    ]);
  });

  test.skip('should handle error', async () => {
    const mData = { product_id: 1, status: 'no store' };
    const mError = new Error('connection error');
    const querySpy = jest.spyOn(db, 'query').mockRejectedValueOnce(mError);
    const errorSpy = jest.spyOn(console, 'error');
    await expect(apiModel.updateProductStatus(mData)).rejects.toThrowError(
      new TypeError("Cannot read property '0' of undefined")
    );
    expect(querySpy).toBeCalledWith('UPDATE products SET ? WHERE PRODUCT_ID = ?', [
      { STATUS: 'no store', UPDATED_TIMESTAMP: expect.any(Number) },
      1
    ]);
    expect(errorSpy).toBeCalledWith(mError);
  });
});
