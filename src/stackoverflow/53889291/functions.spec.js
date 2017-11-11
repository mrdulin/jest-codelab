const functions = require('./functions');

describe('functions test suites', () => {
  it('funcOne', () => {
    const funcTwoSpyOn = jest.spyOn(functions, 'funcTwo').mockReturnValueOnce('my test func');
    const actualValue = functions.funcOne();
    expect(actualValue).toBe('my test func');
    expect(funcTwoSpyOn).toBeCalledTimes(1);
    funcTwoSpyOn.mockRestore();
  });
  it('funcTwo', () => {
    const actualValue = functions.funcTwo();
    expect(actualValue).toBe('func two');
  });
});
