import { AgeVerification } from './';

describe('age verifiction service test', () => {
  let ageVerification;
  beforeEach(() => {
    ageVerification = new AgeVerification();
    history.back = jest.fn();
  });
  afterAll(() => {
    jest.restoreAllMocks();
    jest.resetAllMocks();
  });
  it('returns user to referrer if declined and referrer is available', () => {
    const originalReferrer = document.referrer;
    Object.defineProperty(document, 'referrer', { value: 'Refferer Test', configurable: true });
    ageVerification.onDeclineCallback();
    expect(history.back).toHaveBeenCalledTimes(1);
    Object.defineProperty(document, 'referrer', { value: originalReferrer });
  });

  it('should print log', () => {
    const logSpy = jest.spyOn(console, 'log');
    ageVerification.onDeclineCallback();
    expect(logSpy.mock.calls[0]).toEqual(['boom ']);
    expect(logSpy.mock.calls[1]).toEqual(['redirect to our age policy page']);
  });
});
