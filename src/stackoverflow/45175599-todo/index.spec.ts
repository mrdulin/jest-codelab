import { Foo } from '.';

jest.mock('./', () => {
  const mBar = {
    baz: jest.fn()
  };
  const mFoo = {
    bar: jest.fn(),
    Bar: mBar
  };
  return { Foo: mFoo };
});

describe.skip('ts namespace', () => {
  it('should ', () => {
    const logSpy = jest.spyOn(console, 'log');
    Foo.Bar.baz();
    expect(Foo.bar).toBeCalledTimes(1);
    expect(logSpy).toBeCalledWith('bar');
  });
});
