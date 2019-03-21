import Component from '../Component';
const comp = new Component();

Object.defineProperty(comp, 'isBottom', {
  get: jest.fn((): boolean => false)
});

describe('component test suites', () => {
  it('t-1', () => {
    expect(comp.isBottom).toBeFalsy();
  });

  it('t-2', () => {
    expect(comp.render()).toBeFalsy();
  });
});
