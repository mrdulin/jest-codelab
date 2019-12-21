import validationSchema from './_validation/report';
import reportModel from './models/report';

const ctrl = {};

ctrl.addReport = async (req, res) => {
  const { body } = req;
  const validatedData = await validationSchema.validate(body);
  const report = await reportModel(req.dbConnection).addReport(validatedData);
};

module.exports = ctrl;
