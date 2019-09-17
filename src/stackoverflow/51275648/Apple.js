function Apple() {
  return Orange(1, 2);
}

function Orange(arg1, arg2) {
  return arg1 + arg2;
}

exports.Apple = Apple;
exports.Orange = exports.Orange;
