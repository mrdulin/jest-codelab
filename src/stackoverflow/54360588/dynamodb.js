const AWS = require('aws-sdk');
const Promise = require('bluebird');

const client = new AWS.DynamoDB.DocumentClient();

module.exports.db = (method, params) => {
  console.log('access dynamodb');
  return Promise.fromCallback((cb) => client[method](params, cb));
};
