import { viewText } from './';
import fs from 'fs';

const mockPoem =
  'Some say the world will end in fire, Some say in ice. From what I’ve tasted of desire I hold with those who favor fire ... And would suffice.';

describe('viewText', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  test('prints poem to console', done => {
    const logSpy = jest.spyOn(console, 'log');
    let readFileCallback;
    // @ts-ignore
    jest.spyOn(fs, 'readFile').mockImplementation((path, options, callback) => {
      readFileCallback = callback;
    });

    viewText();
    readFileCallback(null, mockPoem);
    expect(logSpy).toBeCalledWith(mockPoem);
    expect(fs.readFile).toBeCalledWith('poem.txt', 'utf8', readFileCallback);
    done();
  });

  test('should throw error when read file failed', done => {
    let readFileCallback;
    // @ts-ignore
    jest.spyOn(fs, 'readFile').mockImplementation((path, options, callback) => {
      readFileCallback = callback;
    });

    viewText();
    const mError = new Error('read file failed');
    expect(() => readFileCallback(mError, null)).toThrowError(mError);
    expect(fs.readFile).toBeCalledWith('poem.txt', 'utf8', readFileCallback);
    done();
  });
});
