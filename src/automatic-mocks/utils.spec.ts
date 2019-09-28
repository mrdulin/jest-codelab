jest.enableAutomock();

import utils from './utils';

describe('automatic mocks test suites', () => {
  it('should mock all methods of utils', () => {
    expect((utils.getJSON as jest.Mock).mock).toBeTruthy();
    expect(jest.isMockFunction(utils.authorize)).toBeTruthy();
    expect(jest.isMockFunction(utils.isAuthorized)).toBeTruthy();
  });

  test('implementation created by automock', () => {
    expect(utils.authorize()).toBeUndefined();
    expect(utils.isAuthorized('wizard')).toBeUndefined();
  });

  it('mocked implementation', () => {
    (utils.getJSON as jest.Mock).mockReturnValue(123);
    expect(utils.getJSON({ name: 'test' })).toBe(123);
  });
});
