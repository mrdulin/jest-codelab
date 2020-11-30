describe('App', () => {
  beforeEach(() => {
    jest.resetModules();
  });
  it('returns a mocked value of config.foo', () => {
    jest.doMock('./config', () => ({ foo: 'baz' }));
    const App = require('./app').default;
    expect(App()).toBe('baz');
  });

  it('returns the default value of config.foo', () => {
    jest.doMock('./config', () => ({ foo: 'bar' }));
    const App = require('./app').default;
    expect(App()).toBe('bar');
  });
});
