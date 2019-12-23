import useResponsive from './useResponsive';

describe('useResponsive', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });
  it('should match media', () => {
    const mMediaQueryList = [];
    window.matchMedia = jest.fn().mockReturnValueOnce({ matches: mMediaQueryList });
    const options: Array<[string, string]> = [['(min-width: 400px)', 'some result']];
    const actual = useResponsive(options);
    expect(actual).toBe('some result');
  });

  it('should not match media', () => {
    window.matchMedia = jest.fn().mockReturnValueOnce({ matches: undefined });
    const options: Array<[string, string]> = [['(min-width: 400px)', 'some result']];
    const actual = useResponsive(options);
    expect(actual).toBeUndefined();
  });
});
