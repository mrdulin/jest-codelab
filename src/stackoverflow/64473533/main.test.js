describe('64473533', () => {
  beforeEach(() => {
    jest.resetModules();
  });
  it('should work with delay - original', () => {
    const { main } = require('./main');
    const actual = main();
    expect(actual).toBe(5);
  });
  it('should work with delay - mocked', () => {
    jest.doMock('./config', () => ({ DELAY_SECONDS: 0 }));
    const { main } = require('./main');
    const actual = main();
    expect(actual).toBe(0);
  });
});
