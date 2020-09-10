describe('63811749', () => {
  beforeEach(() => {
    jest.resetModules();
  });
  it('node mock false', async () => {
    jest.doMock('detect-node', () => false);
    const { myTestFn } = await import('./fn');
    myTestFn();
  });

  it('node mock true', async () => {
    jest.doMock('detect-node', () => true);
    const { myTestFn } = await import('./fn');
    myTestFn();
  });
});
