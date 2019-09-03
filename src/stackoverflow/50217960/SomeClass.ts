import { IFoo } from './Foo';

interface ISomeClass {
  say(): string;
}

interface ISomeClassOptions {
  foo: IFoo;
}

class SomeClass implements ISomeClass {
  private foo: IFoo;
  constructor(options: ISomeClassOptions) {
    this.foo = options.foo;
  }
  public say(): string {
    return this.foo.myFunc();
  }
}

export { SomeClass, ISomeClassOptions };
