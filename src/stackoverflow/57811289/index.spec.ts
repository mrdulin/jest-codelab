import { SomeDaoImpl, IKnex } from './';

const knexMocked: jest.Mocked<IKnex> = {
  where: jest.fn().mockReturnThis(),
  raw: jest.fn().mockReturnThis(),
  select: jest.fn().mockReturnThis(),
  then: jest.fn().mockReturnThis()
};

const someDaoImpl = new SomeDaoImpl({ knex: knexMocked });

describe('SomeDaoImpl', () => {
  it('t1', async () => {
    (knexMocked.where() as jest.Mocked<IKnex>).select.mockResolvedValueOnce('mocked data');
    const actualValue = await someDaoImpl.findById('1');
    expect(actualValue).toBe('mocked data');
    expect(knexMocked.where).toBeCalledWith({ id: '1' });
    expect(knexMocked.where().select).toBeCalledTimes(1);
  });
});
