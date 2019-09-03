interface IFoo {
  myFunc(): string;
  otherFunc(): number;
}

class Foo implements IFoo {
  public myFunc(): string {
    return 'myFunc';
  }
  public otherFunc(): number {
    return 1;
  }
}

export { Foo, IFoo };
