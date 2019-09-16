const chunk = require('./index');

describe('Chunk function', () => {
  test('should correctly divide an array of 10 elements with chunk size 2', () => {
    const chunked = chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2);
    expect(chunked).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]);
  });
});
