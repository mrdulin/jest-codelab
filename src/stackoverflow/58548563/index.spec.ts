import { main } from './';
import moment from 'moment-timezone';

jest.mock('moment-timezone', () => {
  const mTz = {
    guess: jest.fn()
  };
  return {
    tz: mTz
  };
});

describe('main', () => {
  test('should mock guess method', () => {
    (moment.tz.guess as jest.MockedFunction<typeof moment.tz.guess>).mockReturnValueOnce('Australia/Sydney');
    const actualValue = main();
    expect(jest.isMockFunction(moment.tz.guess)).toBeTruthy();
    expect(actualValue).toBe('Australia/Sydney');
    expect(moment.tz.guess).toBeCalled();
  });
});
