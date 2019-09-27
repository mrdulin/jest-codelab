const buildEngine = () => 'Engine';

const buildCar = () => {
  const engine = exports.buildEngine();
  return engine + ' and ' + 'Car Body';
};

exports.buildEngine = buildEngine;
exports.buildCar = buildCar;
