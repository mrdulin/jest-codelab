import TestClass from './testClass';

describe('TestClass', () => {
  test('The constructor sets the loader correctly', () => {
    jest.spyOn(console, 'log');
    const testClassObj = new TestClass({ type: 'model' });
    expect(typeof testClassObj.loader).toBe('function');
    expect(testClassObj.loader.name).toBe('model');
    testClassObj.loader();
    expect(console.log).toBeCalledWith('do something to return models data');
  });
});
