const function1 = () => {
  return 123;
};
const function2 = () => {
  return exports.function1() + 2;
};

exports.function1 = function1;
exports.function2 = function2;
