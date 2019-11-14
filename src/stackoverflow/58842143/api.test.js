import { getApiData } from './api';
const csv = require('csvtojson');
const request = require('request');

jest.mock('csvtojson', () => {
  const mCsvtojson = {
    fromStream: jest.fn().mockReturnThis(),
    subscribe: jest.fn()
  };
  return jest.fn(() => mCsvtojson);
});
jest.mock('request', () => {
  return { get: jest.fn() };
});

describe('getApiData', () => {
  it('csv', done => {
    const mResponse = { name: 'UT' };
    let observer;
    csv()
      .fromStream()
      .subscribe.mockImplementationOnce(onSuccess => {
        observer = onSuccess;
      });
    request.get.mockResolvedValueOnce(mResponse);
    getApiData('http://test.com');
    const mJSON = {};
    expect(observer(mJSON)).toEqual({});
    expect(request.get).toBeCalledWith('http://test.com');
    expect(csv).toHaveBeenCalled();
    expect(csv().fromStream).toBeCalledWith(expect.any(Object));
    done();
  });
});
