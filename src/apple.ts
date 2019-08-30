module.exports = () => 'apple';

const One = require('../one');
const Two = require('../two');
const Three = require('../three');
const A = require('..');
jest.mock('../one');
jest.mock('../two');
jest.mock('../three');

describe('A test cases', () => {
  test('should initiate the constructor', () => {
    const mockStaticFunction = jest.fn();
    mockStaticFunction.mockReturnValue('returns an object which does something on Multiple');
    const MockA = new A('one');
    console.log(MockA);
    Console.mockImplementation(() => ({}));
    console.log(logMedium);
    expect(Console).toHaveBeenCalledTimes(1);
  });
});
