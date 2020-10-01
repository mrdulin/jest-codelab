const { db } = require('./dynamodb');
const AWS = require('aws-sdk');

jest.mock('aws-sdk', () => {
  const mClient = { get: jest.fn() };
  const mDynamoDB = {
    DocumentClient: jest.fn(() => mClient),
  };
  return { DynamoDB: mDynamoDB };
});

const mockClient = new AWS.DynamoDB.DocumentClient();

describe('54360588', () => {
  afterAll(() => {
    jest.resetAllMocks();
  });
  it('should pass', async () => {
    mockClient.get.mockImplementationOnce((err, callback) => {
      callback(null, 'fake data');
    });
    const actual = await db('get', null);
    expect(actual).toBe('fake data');
    expect(mockClient.get).toBeCalledWith(null, expect.any(Function));
  });
});
