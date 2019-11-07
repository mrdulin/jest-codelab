const ddb = require('./ddb');

describe('mailExist', () => {
  const TableName = process.env.TableName;
  const fakeTableName = 'fake table name';
  beforeAll(() => {
    process.env.TableName = fakeTableName;
  });
  afterAll(() => {
    process.env.TableName = TableName;
  });

  test('should not exist', async () => {
    const tools = require('./tools');
    const email = 'example@example.com';
    const scanSpy = jest.spyOn(ddb, 'scan').mockResolvedValueOnce({});
    const actualValue = await tools.mailExist(email);
    expect(actualValue).toEqual({});
    expect(scanSpy).toBeCalledWith({
      TableName: fakeTableName,
      FilterExpression: 'email = :email',
      ExpressionAttributeValues: {
        ':email': email
      },
      ProjectionExpression: ['uid']
    });
  });
});
