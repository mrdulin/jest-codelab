// tslint:disable-next-line: no-namespace
export namespace Foo {
  export function bar() {
    console.log('bar');
  }

  export namespace Bar {
    export function baz() {
      exports.bar();
    }
  }
}
