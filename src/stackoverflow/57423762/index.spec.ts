import request from 'request-promise';
import csv from 'csvtojson';
import os from 'os';
import { remoteCSVToJSON } from './';

jest.mock('csvtojson', () => {
  const mCsv = {
    on: jest.fn(),
    fromString: jest.fn().mockReturnThis()
  };
  return jest.fn(() => mCsv);
});

jest.mock('request-promise', () => {
  return {
    get: jest.fn()
  };
});

describe('remoteCSVToJSON', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  test('should request and convert csv to json', async () => {
    const events: any = {};
    csv()
      .fromString()
      .on.mockImplementation(function(this: any, ...args: any[]) {
        const [event, handler] = args;
        events[event] = handler;
        return this;
      });
    const mGetResponse = { data: 'fake data' };
    (request.get as jest.MockedFunction<typeof request.get>).mockResolvedValueOnce(mGetResponse);
    const infoSpy = jest.spyOn(console, 'info');

    const actualValue = remoteCSVToJSON('url', {});
    const mJsonObj = { id: 1, name: 'mrdulin' };
    expect(jest.isMockFunction(csv)).toBeTruthy();
    await new Promise(resolve => setTimeout(resolve, 0));
    expect(csv).toBeCalledWith({
      noheader: false,
      delimiter: ',',
      workerNum: os.cpus().length
    });
    expect(csv().fromString).toBeCalledWith(mGetResponse);
    events['json'](mJsonObj);
    events['end']();
    await expect(actualValue).resolves.toEqual([mJsonObj]);
    expect(request.get).toBeCalledWith('url');
    expect(infoSpy).toBeCalledWith('convert csv to json done');
  });

  test('should throw error when convert error', async () => {
    const events: any = {};
    csv()
      .fromString()
      .on.mockImplementation(function(this: any, ...args: any[]) {
        const [event, handler] = args;
        events[event] = handler;
        return this;
      });
    const mGetResponse = { data: 'fake data' };
    (request.get as jest.MockedFunction<typeof request.get>).mockResolvedValueOnce(mGetResponse);

    const actualValue = remoteCSVToJSON('url', {});
    const mJsonObj = { id: 1, name: 'mrdulin' };
    expect(jest.isMockFunction(csv)).toBeTruthy();
    await new Promise(resolve => setTimeout(resolve, 0));
    expect(csv).toBeCalledWith({
      noheader: false,
      delimiter: ',',
      workerNum: os.cpus().length
    });
    expect(csv().fromString).toBeCalledWith(mGetResponse);
    events['json'](mJsonObj);
    const mError = new Error('mock error');
    events['error'](mError);
    await expect(actualValue).rejects.toThrowError(mError);
    expect(request.get).toBeCalledWith('url');
  });
});
