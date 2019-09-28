import B from './B';
import { Y } from './util';

export default class A extends B {
  constructor() {
    super('/A');
    this.setCors('');
    this.app.post('', this.X.bind(this));
  }

  public X(req, res) {
    Y();
  }
}
