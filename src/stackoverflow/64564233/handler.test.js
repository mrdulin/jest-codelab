const aws = require('aws-sdk');
const { getUser } = require('./handler');

jest.mock('aws-sdk', () => {
  const mDocumentClient = { get: jest.fn() };
  const mDynamoDB = { DocumentClient: jest.fn(() => mDocumentClient) };
  return { DynamoDB: mDynamoDB };
});
const mDynamoDb = new aws.DynamoDB.DocumentClient();

describe('64564233', () => {
  afterAll(() => {
    jest.resetAllMocks();
  });
  it('should get user', async () => {
    const mResult = { name: 'teresa teng' };
    mDynamoDb.get.mockImplementationOnce((_, callback) => callback(null, mResult));
    const actual = await getUser(1);
    expect(actual).toEqual({ name: 'teresa teng' });
    expect(mDynamoDb.get).toBeCalledWith(
      {
        TableName: 'test-table',
        Key: {
          PK: '1',
          SK: '1',
        },
      },
      expect.any(Function),
    );
  });

  it('should handler error', async () => {
    const mError = new Error('network');
    mDynamoDb.get.mockImplementationOnce((_, callback) => callback(mError));
    await expect(getUser(1)).rejects.toThrowError('network');
    expect(mDynamoDb.get).toBeCalledWith(
      {
        TableName: 'test-table',
        Key: {
          PK: '1',
          SK: '1',
        },
      },
      expect.any(Function),
    );
  });
});
