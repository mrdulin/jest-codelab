describe('Testing Async Selectors', () => {
  beforeEach(() => {
    jest.resetModules();
  });
  it('should mock axios', async () => {
    jest.doMock('axios');
    const Axios = require('axios');
    expect(jest.isMockFunction(Axios)).toBeTruthy();
  });

  it('should not mock axios', async () => {
    jest.dontMock('axios');
    const Axios = require('axios');
    expect(jest.isMockFunction(Axios)).toBeFalsy();
  });
});
