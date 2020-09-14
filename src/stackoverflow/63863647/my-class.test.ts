import { MyClass } from './my-class';
import Knex from 'knex';

describe('63863647', () => {
  it('should pass', async () => {
    const chainable = ({
      transacting: jest.fn().mockResolvedValueOnce({ id: '1', name: 'a' }),
    } as unknown) as Knex.ChainableInterface;
    const mKnex = ({
      select: jest.fn().mockReturnThis(),
      withSchema: jest.fn().mockReturnThis(),
      from: jest.fn().mockReturnThis(),
      where: jest.fn().mockReturnValueOnce(chainable),
    } as unknown) as Knex;

    const mTransaction = ({} as unknown) as Knex.Transaction;
    const myclass = new MyClass(mKnex, mTransaction);
    const actual = await myclass.myMethod('1');
    expect(actual).toEqual({ id: '1', name: 'a' });
    expect(mKnex.select).toBeCalledWith('name');
    expect(mKnex.withSchema).toBeCalledWith('public');
    expect(mKnex.from).toBeCalledWith('table');
    expect(mKnex.where).toBeCalledWith({ id: '1' });
    expect(chainable.transacting).toBeCalledWith(mTransaction);
  });
});
