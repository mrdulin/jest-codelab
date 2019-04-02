import { A } from './MyClass';
import { B } from './MyAnotherClass';
import { mocked } from 'ts-jest/utils';

jest.mock('./MyAnotherClass', () => {
  const mBInstance = { someBFunctionFoo: jest.fn() };
  const mB = jest.fn(() => mBInstance);
  return { B: mB };
});

describe('47093028', () => {
  afterAll(() => {
    jest.resetAllMocks();
  });
  it('should pass', () => {
    const a = new A();
    const b = new B();
    mocked(b).someBFunctionFoo.mockImplementationOnce(() => console.log('mock someBFunctionFoo implementation'));
    a.f2();
    expect(b.someBFunctionFoo).toBeCalledWith('arg');
  });
});
