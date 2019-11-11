import { buildUrl } from './buildUrl';
import config from './config';

describe('buildUrl', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  it('should throw error when baseUrl is null', () => {
    const defaultOptions = {};
    const data = ['fake data'];
    const hasSpy = jest.spyOn(config, 'has').mockReturnValueOnce(true);
    const getSpy = jest.spyOn(config, 'get').mockReturnValueOnce(null);
    expect(() => buildUrl('1.44444', data[0], defaultOptions)).toThrowError('some error');
    expect(hasSpy).toBeCalledWith('imgBaseUrl');
    expect(getSpy).toBeCalledWith('imgBaseUrl');
  });

  it('should log baseUrl', () => {
    const defaultOptions = {};
    const data = ['fake data'];
    const hasSpy = jest.spyOn(config, 'has').mockReturnValueOnce(true);
    const getSpy = jest.spyOn(config, 'get').mockReturnValueOnce('https://github.com/mrdulin');
    const logSpy = jest.spyOn(console, 'log');
    buildUrl('1.44444', data[0], defaultOptions);
    expect(hasSpy).toBeCalledWith('imgBaseUrl');
    expect(getSpy).toBeCalledWith('imgBaseUrl');
    expect(logSpy).toBeCalledWith('https://github.com/mrdulin');
  });
});
