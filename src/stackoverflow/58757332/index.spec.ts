import * as mod from './';

describe('test suites', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  it('#requestForSomething', () => {
    const action = { type: 'GET_DATA', productDetails: {} };
    const spy = jest.spyOn(mod, 'getData').mockReturnValueOnce(action);
    const dispatchSpy = jest.spyOn(mod.store, 'dispatch');
    mod.requestForSomething(1);
    expect(spy).toBeCalledWith(1);
    expect(dispatchSpy).toBeCalledWith(action);
  });

  it('#getData', () => {
    const spy = jest.spyOn(mod, 'someFunction').mockReturnValueOnce({});
    const actualValue = mod.getData(1);
    expect(actualValue).toEqual({ type: 'GET_DATA', productDetails: {} });
    expect(spy).toBeCalledWith(1);
  });

  it('#someFunction', () => {
    const actualValue = mod.someFunction(1);
    expect(actualValue).toBe(1);
  });
});
