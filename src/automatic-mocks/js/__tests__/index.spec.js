import utils from '../utils';

describe('automatic mocks test suites', () => {
  it('if utils are mocked', () => {
    expect(utils.getJSON.mock).toBeTruthy();
  });
});
