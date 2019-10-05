export class MyClass {
  constructor() {}

  public async func1() {
    return this.func2();
  }
  public func2(int?: number) {
    return false;
  }
}
