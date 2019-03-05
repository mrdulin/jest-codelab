function* func1() {
  yield 42;
}

function* func2() {
  yield* exports.func1();
}

exports.func2 = func2;
exports.func1 = func1;
