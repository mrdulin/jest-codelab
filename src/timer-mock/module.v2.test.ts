import { timerGame } from './module';

// 使用jest.runAllTimers之前必须使用jest.useFakeTimers，否则：
// A function to advance timers was called but the timers API is not mocked with fake timers. Call `jest.useFakeTimers()` in this test or enable fake timers globally by setting `"timers": "fake"` in the configuration file. This warning is likely a result of a default configuration change in Jest 15.
// Release Blog Post: https://jestjs.io/blog/2016/09/01/jest-15.html
jest.useFakeTimers();

describe('use jest.runAllTimers', () => {
  const callback = jest.fn();

  afterEach(() => {
    callback.mockReset();
  });

  test('calls the callback after 1 second', () => {
    expect(jest.isMockFunction(timerGame)).toBeFalsy();

    expect(callback).not.toHaveBeenCalled();

    timerGame(callback);

    // 快进所有的定时器，直到定时器执行完毕
    // 不用等待真实的定时器的时间
    jest.runAllTimers();

    expect(callback).toHaveBeenCalled();
    expect(callback.mock.calls).toHaveLength(1);
  });
});

describe('use jest.runTimersToTime', () => {
  const callback = jest.fn();

  afterEach(() => {
    callback.mockReset();
  });
  test('calls the callback after 5 second via runTimersToTime', () => {
    expect(callback).not.toHaveBeenCalled();

    timerGame(callback);

    jest.runTimersToTime(5 * 1000);

    expect(callback).toHaveBeenCalled();
    expect(callback.mock.calls).toHaveLength(1);
  });
});
