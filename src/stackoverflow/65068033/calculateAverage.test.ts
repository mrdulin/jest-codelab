const { calculateAverage } = require('./calculateAverage');

// Calculate Average
describe('calculateAverage', () => {
  // Empty Array
  test('Throw Error on empty array', () => {
    expect(() => calculateAverage([])).toThrowError('Error: Empty Array (calculateAverage)');
  });

  // Test #1
  test('Test #1', () => {
    expect(calculateAverage([1, 2, 3])).toEqual(2);
  });

  // Test #2
  test('Test #2', () => {
    expect(calculateAverage([0, 2, 4, 6, 8, 10])).toEqual(5);
  });
});
