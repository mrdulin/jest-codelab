import { MainNamespace } from './';

describe('MainNamespace', () => {
  it('sum test', () => {
    const mainClass = new MainNamespace.MainClass();
    expect(mainClass.sum(3, 2)).toEqual(5);
  });
});
