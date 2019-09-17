const anotherFunction = require('./anotherFunction.js');

module.exports = (app, io) => {
  return (req, res) => {
    const { id, value } = req.query;
    req.app.locals['target' + id].pwmWrite(value);
    anotherFunction(app, io);
    res.send({ value });
  };
};
