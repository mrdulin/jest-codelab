import * as funcs from './';

describe('myFunction', () => {
  afterEach(() => {
    // restore to original value if needed
    (global as any).check = false;
  });
  it('should call doOtherStuff', () => {
    const doOtherStuffSpy = jest.spyOn(funcs, 'doOtherStuff');
    funcs.myFunction();
    expect(doOtherStuffSpy).toBeCalled();
  });

  it('should call doStuff', () => {
    (global as any).check = true;
    const doStuffSpy = jest.spyOn(funcs, 'doStuff');
    funcs.myFunction();
    expect(doStuffSpy).toBeCalled();
  });
});
