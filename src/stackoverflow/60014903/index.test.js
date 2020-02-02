import { SomeClass } from './';

describe('60014903', () => {
  afterEach(() => {
    jest.restoreAllMocks();
    jest.resetAllMocks();
  });
  it('should pass', () => {
    jest.spyOn(SomeClass.prototype, 'skipLinkFocusHandler');
    const mSkipNav = {
      addEventListener: jest.fn().mockImplementationOnce((event, handler) => {
        handler();
      }),
    };
    document.querySelector = jest.fn().mockReturnValueOnce(mSkipNav);
    const instance = new SomeClass();
    instance.skipToBotHandler();
    expect(document.querySelector).toBeCalledWith('.skipnav');
    expect(mSkipNav.addEventListener).toBeCalledWith('click', expect.any(Function));
    expect(instance.skipLinkFocusHandler).toBeCalledTimes(1);
  });
});
