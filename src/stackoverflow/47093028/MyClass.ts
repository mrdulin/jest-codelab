import { B } from './MyAnotherClass';

export class A {
  f2() {
    const instance = new B();
    instance.someBFunctionFoo('arg');
  }
}
