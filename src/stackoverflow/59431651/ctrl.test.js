import reportModel from './models/report';
const ctrl = require('./ctrl');

jest.mock('./models/report', () => {
  const mReportModel = {
    addReport: jest.fn(() => true),
  };
  return jest.fn(() => mReportModel);
});

describe('59431651', () => {
  it('should pass', async () => {
    const mReq = { body: 'mocked data', dbConnection: {} };
    const mRes = {};
    await ctrl.addReport(mReq, mRes);
    expect(reportModel).toBeCalledWith(mReq.dbConnection);
    expect(reportModel(mReq.dbConnection).addReport).toHaveBeenCalledTimes(1);
  });
});
