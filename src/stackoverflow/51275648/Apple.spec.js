const functions = require('./Apple.js');

describe('Apple', () => {
  it('Should run Apple', () => {
    functions.Orange = jest.fn().mockImplementation(() => {
      return 3;
    });
    expect(functions.Apple()).toEqual(3);
  });
});
