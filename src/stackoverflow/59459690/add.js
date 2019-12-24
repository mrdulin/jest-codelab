const formidable = require('formidable');
const _ = require('lodash');
const validator = require('./validator');

const accountTypes = ['moderator'];
const boom = {
  badRequest: (err) => err,
};

const ctrl = {};
ctrl.addAccount = async (req, res, next) => {
  const form = new formidable.IncomingForm();

  form.multiples = true;

  form.parse(req, async function(err, fields, files) {
    const accountType = _.get(fields, 'accountType');

    if (accountTypes.indexOf(accountType) === -1) {
      next(boom.badRequest('Account type is not supported'));
      return;
    }
    try {
      await validator.validate(fields);
      res.status(200).send('OK');
    } catch (err) {
      next(boom.badRequest(err));
    }
  });
};

module.exports = ctrl;
