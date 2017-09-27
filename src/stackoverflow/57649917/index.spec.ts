describe('57649917', () => {
  it('should mock all methods of SomeClass', () => {
    jest.doMock('./');
    const { SomeClass } = require('./');
    const logSpy = jest.spyOn(console, 'log');
    const mInstance = new SomeClass();
    expect(jest.isMockFunction(mInstance.find)).toBeTruthy();
    expect(jest.isMockFunction(mInstance.findById)).toBeTruthy();
    mInstance.find();
    mInstance.findById(1);
    expect(mInstance.find).toBeCalledTimes(1);
    expect(mInstance.findById).toBeCalledTimes(1);
    expect(logSpy).not.toBeCalled();
  });

  it('should call the real methods of SomeClass', () => {
    jest.unmock('./');
    const logSpy = jest.spyOn(console, 'log');
    const { SomeClass } = require('./');
    const instance = new SomeClass();
    instance.find();
    instance.findById(1);
    expect(logSpy.mock.calls[0]).toEqual(['find']);
    expect(logSpy.mock.calls[1]).toEqual(['findById']);
  });
});
