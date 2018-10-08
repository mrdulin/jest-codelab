exports.getMessage = function(num) {
  return `Her name is ${exports.genName(num)}, age is ${exports.getAge()}`;
};

exports.genName = (num) => 'novaline';

exports.getAge = () => 26;
