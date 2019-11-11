import fs from 'fs';
import * as jsonUtils from './';

describe('jsonUtils', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  describe('#jsonEidtor', () => {
    test('should read json and write file correctly', async () => {
      let callback;
      jest.spyOn(fs, 'writeFile').mockImplementation((path, data, cb) => {
        callback = cb;
      });
      const logSpy = jest.spyOn(console, 'log');
      const mResponse = { v2: { b: { connections: [{ someLayer: { someField: '' } }] } } };
      jest.spyOn(jsonUtils, 'jsonReader').mockResolvedValueOnce(mResponse);
      await jsonUtils.jsonEditor('somePath', 'v2', 'b', 0, 'someLayer', 'someField', 'fake value');
      expect(fs.writeFile).toBeCalledWith(
        'somePath',
        JSON.stringify({ v2: { b: { connections: [{ someLayer: { someField: 'fake value' } }] } } }, null, 2),
        callback
      );
      callback();
      expect(logSpy).toBeCalledWith('write file successfully');
    });

    test('should throw error when write file error', async () => {
      let callback;
      jest.spyOn(fs, 'writeFile').mockImplementation((path, data, cb) => {
        callback = cb;
      });
      const logSpy = jest.spyOn(console, 'log');
      const mResponse = { v2: { b: { connections: [{ someLayer: { someField: '' } }] } } };
      jest.spyOn(jsonUtils, 'jsonReader').mockResolvedValueOnce(mResponse);
      await jsonUtils.jsonEditor('somePath', 'v2', 'b', 0, 'someLayer', 'someField', 'fake value');
      expect(fs.writeFile).toBeCalledWith(
        'somePath',
        JSON.stringify({ v2: { b: { connections: [{ someLayer: { someField: 'fake value' } }] } } }, null, 2),
        callback
      );
      const err = new Error('write file error');
      expect(() => callback(err)).toThrowError(err);
      expect(logSpy).not.toBeCalled();
    });
  });

  describe('#jsonReader', () => {
    test('should return response', async () => {
      const actualValue = await jsonUtils.jsonReader('somePath');
      expect(actualValue).toEqual({ v1: { a: { connections: [{ someLayer: { someField: 'real value' } }] } } });
    });
  });
});
