function mockFunctions() {
  const original = require.requireActual('./module');

  const genNameMock: jest.Mock<string> = jest.fn((): string => 'emilie');
  return {
    getMessage: original.getMessage,
    genName: genNameMock
  };
}
jest.mock('./module', () => mockFunctions());
// tslint:disable-next-line: no-var-requires
const m = require('./module');

describe('mock function', () => {
  it('t-0', () => {
    expect(jest.isMockFunction(m.genName)).toBeTruthy();
    expect(m.genName(1)).toBe('emilie');
  });

  it('t-1', () => {
    expect(m.genName).toHaveBeenCalled();
    expect(m.genName.mock.calls.length).toBe(1);
  });

  // mock失败, 注意看module中getMessage调用genName的方式
  it.skip('t-2', () => {
    console.log(m.genName());
    expect(m.getMessage(1)).toBe('Her name is emilie');
  });

  it.skip('t-3', () => {
    expect(m.genName.mock.calls.length).toBe(2);
  });
});
