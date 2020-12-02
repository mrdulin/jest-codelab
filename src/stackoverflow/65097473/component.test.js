const { ValueClass } = require('./ValueClass');
const component = require('./component');

jest.mock('./ValueClass', () => {
  const valueClassInstance = {
    getValue: jest.fn(),
  };
  return { ValueClass: jest.fn(() => valueClassInstance) };
});

describe('** Handler unit tests **', () => {
  afterAll(() => {
    jest.resetAllMocks();
  });
  test('test 1', async () => {
    const objValueClass = new ValueClass();
    objValueClass.getValue.mockResolvedValue('abcd');
    const res = await component();
    expect(objValueClass.getValue).toBeCalledTimes(1);
  });
});
