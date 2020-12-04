import { pause } from './';

jest.useFakeTimers();

describe('65135435', () => {
  it('should pass', async () => {
    const setTimeoutSpy = jest.spyOn(window, 'setTimeout');
    const pausePromise = pause({ time: 2500 });

    jest.runAllTimers();

    await pausePromise;
    expect(setTimeoutSpy).toHaveBeenCalledWith(expect.any(Function), 2500);
    expect(setTimeoutSpy).toHaveBeenCalledTimes(1);
  });
});
