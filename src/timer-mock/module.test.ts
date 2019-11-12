import { timerGame } from './module';

jest.useFakeTimers();

describe('use jest.useFakeTimers', () => {
  const callback = jest.fn();

  afterEach(() => {
    callback.mockReset();
  });

  test('waits 1 second before ending the game', () => {
    timerGame();
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
  });

  test('test callback afterEach status', () => {
    expect(callback.mock.calls).toHaveLength(0);
    expect(callback.mock.instances).toHaveLength(0);
  });
});
