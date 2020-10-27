export default class Foo {
  constructor() {
    new exports.Bar();
  }
}

class Bar {
  constructor() {
    console.log('real Bar constructor implmentation');
  }
}

exports.Bar = Bar;
