import { getProduct } from './controller';
import { calcu } from './service';

jest.mock('./service.js', () => ({ calcu: jest.fn() }));

describe('Controller', () => {
  let mRes;
  let mNext;
  beforeEach(() => {
    mRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    mNext = jest.fn();
  });
  afterEach(() => {
    jest.resetAllMocks();
  });

  test('Should return message error if the id or productCode is missing', () => {
    const mReq = { body: { id: '1111' }, params: { type: 'qqqqq' } };
    getProduct(mReq, mRes, mNext);
    expect(mRes.status).toBeCalledWith(400);
    expect(mRes.status().json).toBeCalledWith({ error: { message: 'Id or productCode is required' } });
  });

  test('should call next when error happens', () => {
    const mReq = {};
    getProduct(mReq, mRes, mNext);
    expect(mNext).toBeCalledWith(expect.any(Error));
  });

  test('should return message error if type is not support', () => {
    const mReq = { params: { type: 'qqqqq' }, body: { id: '1111', productCode: '22' } };
    getProduct(mReq, mRes, mNext);
    expect(mRes.status).toBeCalledWith(400);
    expect(mRes.status().json).toBeCalledWith({ error: { message: `type ${mReq.params.type} is not support` } });
  });

  test('should return message error if calcu errors', () => {
    const mReq = { params: { type: 'x' }, body: { id: '1111', productCode: '22' } };
    const mError = new Error('calc error');
    calcu.mockImplementationOnce(() => {
      throw mError;
    });
    getProduct(mReq, mRes, mNext);
    expect(calcu).toBeCalledWith('1111', '22');
    expect(mRes.status).toBeCalledWith(400);
    expect(mRes.status().json).toBeCalledWith({ error: { message: mError.message } });
  });

  test('should return correct calc result', () => {
    const mReq = { params: { type: 'x' }, body: { id: '1111', productCode: '22' } };
    calcu.mockReturnValueOnce({ data: 'fake data' });
    getProduct(mReq, mRes, mNext);
    expect(calcu).toBeCalledWith('1111', '22');
    expect(mRes.status).toBeCalledWith(200);
    expect(mRes.status().json).toBeCalledWith({ data: 'fake data' });
  });
});
