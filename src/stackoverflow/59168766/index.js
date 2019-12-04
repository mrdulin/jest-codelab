const plus1 = x => x + 1;

const plus2 = x => x + 2;

const returnPlus1OrPlus2 = (number, code) =>
  code === 1 ? exports.plus1(number * 3) : exports.plus2(number);

exports.plus1 = plus1;
exports.plus2 = plus2;
export default returnPlus1OrPlus2;
