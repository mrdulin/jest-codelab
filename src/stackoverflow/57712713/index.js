const { Viewer } = require('./viewer');
const util = require('./util');

module.exports = {
  createViewer: container => {
    if (util.isElement(container)) {
      return new Viewer(container);
    } else {
      throw new Error('Invalid Element when attempting to create underlying viewer.');
    }
  }
};
