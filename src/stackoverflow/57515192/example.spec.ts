import { example } from './example';
import { Db } from './Db';

jest.mock('./Db.ts', () => {
  const collectionMocked = {
    updateOne: jest.fn()
  };
  const connectionMocked = {
    collection: jest.fn(() => collectionMocked)
  };

  const DbMocked = {
    connect: jest.fn(),
    connection: connectionMocked
  };
  return {
    Db: jest.fn(() => DbMocked)
  };
});

const db = new Db();

describe('example', () => {
  test('should call mongoDB updateOne() method', async () => {
    const Data = db.connection.collection('data');
    (db.connect as jest.MockedFunction<any>).mockResolvedValueOnce({});
    (Data.updateOne as jest.MockedFunction<any>).mockResolvedValueOnce('mocked value');
    const actualValue = await example('1');
    expect(actualValue).toBe('mocked value');
    expect(Data.updateOne).toHaveBeenCalledWith({ id: '1' }, { $set: { anything: 'else' } });
  });
});
