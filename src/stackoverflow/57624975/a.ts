import one from './one';
import two from './two';
import three from './three';

class A {
  public static checkTesting(param) {
    switch (param) {
      case 'one':
        return one;
      case 'two':
        return two;
      default:
        return three;
    }
  }
  private testing;
  constructor(param) {
    this.testing = A.checkTesting(param);
  }
}

export { A };
