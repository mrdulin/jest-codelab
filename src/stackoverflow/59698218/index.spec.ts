describe('59698218', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it('when host = stage', () => {
    Object.defineProperty(window, 'location', {
      value: { host: 'stage' },
      writable: true,
    });
    const { relatedServicesList } = require('./index');
    expect(relatedServicesList[relatedServicesList.length - 1]).toEqual({
      label: 'generalAdminCustomsServices.landing.title',
      link: '/demo',
    });
  });

  it('when host != stage', () => {
    Object.defineProperty(window, 'location', {
      value: { host: 'demo' },
      writable: true,
    });
    const { relatedServicesList } = require('./index');
    expect(relatedServicesList[relatedServicesList.length - 1]).toEqual({
      label: 'generalAdminCustomsServices.landing.title',
      link: '/test',
    });
  });
});
