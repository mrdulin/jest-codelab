const aws = require('aws-sdk');

function sesSendEmail(message) {
  const ses = new aws.SES({ apiVersion: '2020-12-01' });
  const params = {
    Source: 'xyz@gmail.com',
    Template: 'deviceUsageStatisticsEmailTemplate',
    Destination: {
      ToAddresses: ['abc@gmail.com'],
    },
    TemplateData: message,
  };

  ses.sendTemplatedEmail(params, (err, data) => {
    if (err) {
      return console.error(err);
    }
    console.log(data);
  });
}

const exportFunctions = { sesSendEmail };

module.exports = exportFunctions;
