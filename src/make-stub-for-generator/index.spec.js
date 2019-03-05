const funcs = require('./');

describe('funcs', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  it('should pass', () => {
    const gen = funcs.func2();
    expect(gen.next().value).toBe(42);
    expect(funcs.func1).toBeDefined();
    expect(funcs.func2).toBeDefined();
  });

  it('should make a stub for func1 correctly with an iterable string', () => {
    jest.spyOn(funcs, 'func1').mockReturnValueOnce('666');
    const gen = funcs.func2();
    expect(gen.next().value).toBe('6');
    expect(gen.next().value).toBe('6');
    expect(gen.next().value).toBe('6');
    expect(gen.next()).toEqual({ value: undefined, done: true });
    expect(funcs.func1).toBeCalledTimes(1);
  });

  it('should make a stub for func1 correctly with an generator function', () => {
    function* mGen() {
      yield 666;
    }
    jest.spyOn(funcs, 'func1').mockImplementationOnce(mGen);
    const gen = funcs.func2();
    expect(gen.next()).toEqual({ value: 666, done: false });
    expect(gen.next()).toEqual({ value: undefined, done: true });
    expect(funcs.func1).toBeCalledTimes(1);
  });
});
