const ddb = require('./ddb');

const table = process.env.TableName;

module.exports.mailExist = async email => {
  if (!email) {
    throw new Error('Missing parameters');
  }
  return await ddb.scan({
    TableName: table,
    FilterExpression: 'email = :email',
    ExpressionAttributeValues: {
      ':email': email
    },
    ProjectionExpression: ['uid']
  });
};
