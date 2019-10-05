const aws = require('aws-sdk');
aws.config.update({ region: 'us-east-1' });
const ssm = new aws.SSM();
const baseSsm = `/mybox/`;

module.exports = {
  async getSsmVar(name) {
    const params = {
      Name: baseSsm + name,
      WithDecryption: true
    };
    const request = await ssm.getParameter(params).promise();
    return request;
  }
};
