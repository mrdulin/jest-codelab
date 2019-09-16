describe('test function2 ', () => {
  const helperFunctions = require('./');
  helperFunctions.function1 = jest.fn();
  test('test', () => {
    helperFunctions.function1.mockReturnValueOnce(1);
    expect(helperFunctions.function2()).toEqual(3);
  });
});
