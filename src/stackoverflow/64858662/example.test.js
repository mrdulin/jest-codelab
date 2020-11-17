import Logger from 'logging-library';
import example from './example';

jest.mock(
  'logging-library',
  () => {
    return { error: jest.fn() };
  },
  { virtual: true },
);

describe('64858662', () => {
  afterAll(() => {
    jest.resetAllMocks();
  });
  test('will log an error', () => {
    example();
    expect(Logger.error).toHaveBeenCalledWith(new Error('Example Error'));
  });
});
