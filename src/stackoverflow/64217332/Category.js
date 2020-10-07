import { isEmpty, isNull } from './validate';

export default class Category {
  constructor(name) {
    this.name = name;
  }

  set name(name) {
    if (isEmpty(name) || isNull(name)) throw new Error(`The category field needs to be filled`);
    this._name = name;
  }
  get name() {
    return this._name;
  }
}
