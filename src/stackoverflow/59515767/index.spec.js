import main from './';
import { startOfToday } from 'date-fns';

jest.mock('date-fns', () => ({ startOfToday: jest.fn() }));

describe('59515767', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });
  it('should pass', () => {
    startOfToday.mockReturnValueOnce('Tues Dec 28 2019 00:00:00 GMT+0000');
    const actual = main();
    expect(actual).toBe('Tues Dec 28 2019 00:00:00 GMT+0000');
  });
});
