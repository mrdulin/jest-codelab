const { listEntities } = require('./');
const Datastore = require('@google-cloud/datastore');

jest.mock('@google-cloud/datastore', () => {
  const mDatasotre = {
    runQuery: jest.fn(),
    createQuery: jest.fn(),
  };
  return jest.fn(() => mDatasotre);
});

describe('47128513', () => {
  describe('#listEntities', () => {
    afterAll(() => {
      jest.resetAllMocks();
    });
    it('should list entities', async () => {
      const mDatastore = Datastore();
      mDatastore.createQuery.mockReturnValueOnce('fake query');
      mDatastore.runQuery.mockResolvedValueOnce([{ id: 1 }]);
      const actual = await listEntities('kind');
      expect(actual).toEqual({ id: 1 });
      expect(mDatastore.createQuery).toBeCalledWith('kind');
      expect(mDatastore.runQuery).toBeCalledWith('fake query');
    });
  });
});
