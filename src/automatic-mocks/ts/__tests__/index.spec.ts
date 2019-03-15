import utils from '../utils';

describe('automatic mocks test suites', () => {
  it('if utils are mocked', () => {
    expect((utils.getJSON as jest.Mock).mock).toBeTruthy();
  });

  it('mocked implementation', () => {
    (utils.getJSON as jest.Mock).mockReturnValue(123);
    expect(utils.getJSON({ name: 'test' })).toBe(123);
  });
});
