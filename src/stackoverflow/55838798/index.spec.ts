import { main } from './';
import moment from 'moment';

jest.mock('moment', () => {
  const mMoment = {
    format: jest.fn().mockReturnThis(),
    valueOf: jest.fn()
  };
  return jest.fn(() => mMoment);
});

describe('main', () => {
  test('should mock moment() and moment().format() correctly ', () => {
    (moment().format as jest.MockedFunction<any>)
      .mockReturnValueOnce('2018–01–30T12:34:56+00:00')
      .mockReturnValueOnce('01–30-2018');
    expect(jest.isMockFunction(moment)).toBeTruthy();
    expect(jest.isMockFunction(moment().format)).toBeTruthy();
    const actualValue = main();
    expect(actualValue).toEqual({ currentDateMoment: '2018–01–30T12:34:56+00:00', currentDateFormatted: '01–30-2018' });
  });
});
