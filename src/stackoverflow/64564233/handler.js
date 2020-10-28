const aws = require('aws-sdk');
const dynamoDb = new aws.DynamoDB.DocumentClient();

const promisify = (foo) =>
  new Promise((resolve, reject) => {
    foo((error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });

const getUser = (userId) =>
  promisify((callback) =>
    dynamoDb.get(
      {
        TableName: 'test-table',
        Key: {
          PK: `${userId}`,
          SK: `${userId}`,
        },
      },
      callback,
    ),
  ).then((user) => {
    console.log(`Retrieved user: ${userId}`);
    return user;
  });

module.exports = { getUser };
