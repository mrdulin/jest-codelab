import { main } from './';

describe('47953161', () => {
  it('should pass', async () => {
    let mockUser = {
      query: jest.fn().mockReturnThis(),
      insert: jest.fn().mockReturnThis(),
      toJSON: jest.fn().mockResolvedValueOnce({ id: 1 }),
    };
    const actual = await main(mockUser);
    expect(actual).toEqual({ id: 1 });
    expect(mockUser.query).toBeCalledWith('the trx');
    expect(mockUser.query().insert).toBeCalledWith({});
    expect(mockUser.query().insert().toJSON).toBeCalledTimes(1);
  });
});
