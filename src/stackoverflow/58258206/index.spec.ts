import { ABTest } from './';

describe('ABTest', () => {
  afterEach(() => {
    jest.restoreAllMocks();
    (window as any).rg_version = '';
  });
  it('should filter and get the correct value', () => {
    const floorSpy = jest.spyOn(Math, 'floor').mockReturnValueOnce(90);
    const logSpy = jest.spyOn(console, 'log');
    ABTest();
    expect((window as any).rg_version).toBe('time40');
    expect(floorSpy).toBeCalledTimes(1);
    expect(logSpy).toBeCalledTimes(0);
  });

  it('should get default value', () => {
    const floorSpy = jest.spyOn(Math, 'floor').mockReturnValueOnce(80);
    const logSpy = jest.spyOn(console, 'log');
    ABTest(true);
    expect((window as any).rg_version).toBe('time30');
    expect(floorSpy).toBeCalledTimes(1);
    expect(logSpy.mock.calls[0]).toEqual([
      'TimedRefresh - AB Test Issue-831 (90 and above get their refresh time changed) randomized value = ',
      80
    ]);
    expect(logSpy.mock.calls[1]).toEqual([
      'TimedRefresh - ABTestValue - change in refresh time in seconds (30 is default) - ',
      30
    ]);
  });
});
