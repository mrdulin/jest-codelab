import { main } from './';
import { TableName } from './TableName';

jest.mock('./TableName.ts', () => {
  const mTableName = {
    save: jest.fn().mockReturnThis()
  };
  return { TableName: jest.fn(() => mTableName) };
});

const tableName = new TableName({ hashKey: '123', rangekey: '321' });

describe('main', () => {
  test('should ', async () => {
    await main();
    expect(tableName.save).toBeCalledTimes(1);
  });
});
