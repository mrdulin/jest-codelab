import { SomeClass, ISomeClassOptions } from './SomeClass';
import { mock } from '../../__utils';
import { IFoo } from './Foo';

const mockDeps: jest.Mocked<ISomeClassOptions> = {
  // foo: {
  //   myFunc: jest.fn()
  // }
  foo: mock<IFoo>('myFunc')
};

const someClass = new SomeClass(mockDeps);

describe('SomeClass', () => {
  it('#say', () => {
    (mockDeps.foo as jest.Mocked<IFoo>).myFunc.mockReturnValueOnce('https://github.com/mrdulin');
    const actualValue = someClass.say();
    expect(actualValue).toBe('https://github.com/mrdulin');
  });
});
