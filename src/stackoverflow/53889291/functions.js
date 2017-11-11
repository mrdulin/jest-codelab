function funcOne() {
  return exports.funcTwo();
}

function funcTwo() {
  return 'func two';
}

exports.funcOne = funcOne;
exports.funcTwo = funcTwo;
