const { ValueClass } = require('./ValueClass');

const component = async () => {
  const objValueClass = new ValueClass();
  const accessValue = await objValueClass.getValue();
  console.log('accessValue###', accessValue);
};

module.exports = component;
