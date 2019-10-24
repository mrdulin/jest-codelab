import * as a from './a';

describe('getData', () => {
  it('myFunc is called', async () => {
    const logSpy = jest.spyOn(console, 'log');
    const myFuncMock = jest.spyOn(a, 'myFunc').mockResolvedValueOnce('mocked data');
    await a.getData();
    expect(myFuncMock).toHaveBeenCalled();
    expect(logSpy).toBeCalledWith('mocked data');
  });
});
