import { initScheduler } from '.';

jest.useFakeTimers();

describe.skip('initScheduler', () => {
  it('should pass', () => {
    const callback = jest.fn().mockResolvedValue({});
    const timeout = 1;
    initScheduler(timeout, callback);
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), timeout);
    jest.advanceTimersByTime(timeout);
    expect(callback).toBeCalled();
    expect(setTimeout).toHaveBeenCalledTimes(2);
  });
});
