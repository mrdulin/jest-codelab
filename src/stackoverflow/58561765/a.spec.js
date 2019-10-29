jest.mock('./b', () => {
  const originalB = require.requireActual('./b');
  const partialMockedB = Object.keys(originalB).reduce((pre, methodName) => {
    pre[methodName] = jest.fn();
    return pre;
  }, {});
  return {
    ...partialMockedB,
    method3: originalB.method3 // mock all methods of b except method3
  };
});

const { main } = require('./a');
const b = require('./b');

describe('main', () => {
  test('should correct', () => {
    const logSpy = jest.spyOn(console, 'log');
    b.method1.mockReturnValueOnce('mocked method 1');
    b.method2.mockReturnValueOnce('mocked method 2');
    main();
    expect(logSpy.mock.calls[0]).toEqual(['mocked method 1']);
    expect(logSpy.mock.calls[1]).toEqual(['mocked method 2']);
    expect(logSpy.mock.calls[2]).toEqual(['method 3']);
  });
});
