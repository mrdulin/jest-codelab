const mockReactRouterDom = (path) => {
  jest.doMock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useLocation: () => ({
      pathname: path,
    }),
  }));
};

describe('64477184', () => {
  beforeEach(() => {
    jest.resetModules();
  });
  it('should pass', () => {
    mockReactRouterDom('/teresa-teng');
    const { usePageViews } = require('./');
    const actual = usePageViews();
    expect(actual).toEqual({ pathname: '/teresa-teng' });
  });
  it('should pass too', () => {
    mockReactRouterDom('/best-singers');
    const { usePageViews } = require('./');
    const actual = usePageViews();
    expect(actual).toEqual({ pathname: '/best-singers' });
  });
});
