import { Foo } from './';

describe('63957901', () => {
  it('should pass', () => {
    const testProp = {};
    const ct = new Foo.SomeClass(testProp);
    expect(ct).toBeInstanceOf(Foo.SomeClass);
  });
});
