import { functionToBeTested } from './';

jest.useFakeTimers();

test('should return correctly', async () => {
  const logSpy = jest.spyOn(console, 'log');
  const promise = functionToBeTested();
  jest.runAllTimers();
  await expect(promise).resolves.toBe('anything');
  expect(logSpy).toBeCalledWith('not logging :/');
});
