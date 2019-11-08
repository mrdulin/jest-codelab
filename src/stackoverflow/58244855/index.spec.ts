import fs, { ReadStream } from 'fs';
import path from 'path';
import { SomeClass } from './';

const myClass = new SomeClass();
const DATA_DIR = './.tmp';

afterEach(() => {
  jest.restoreAllMocks();
});

test('functionToTest success', async () => {
  const readStream: ReadStream = fs.createReadStream(path.resolve(__dirname, `${DATA_DIR}/genericCsv.csv`));
  const events: { [event: string]: (...args: any[]) => void } = {};
  jest.spyOn(readStream, 'on').mockImplementation((event: string, listener: (...args: any[]) => void) => {
    events[event] = listener;
    return readStream;
  });
  jest.spyOn(myClass, 'processStreamData');

  await expect(myClass.functionToTest(readStream)).resolves.toEqual(undefined);
  events.data('fake data');
  expect(myClass.processStreamData).toBeCalledWith('fake data');
});

test('functionToTest finish', async () => {
  const readStream: ReadStream = fs.createReadStream(path.resolve(__dirname, `${DATA_DIR}/genericCsv.csv`));
  const events: { [event: string]: (...args: any[]) => void } = {};
  jest.spyOn(readStream, 'on').mockImplementation((event: string, listener: (...args: any[]) => void) => {
    events[event] = listener;
    return readStream;
  });
  jest.spyOn(Promise, 'resolve');

  await expect(myClass.functionToTest(readStream)).resolves.toEqual(undefined);
  events.finish();
  expect(Promise.resolve).toBeCalledTimes(1);
});
