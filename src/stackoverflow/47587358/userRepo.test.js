import { UserRepo } from './userRepo';
import { userTable } from './userTable';

jest.mock('./userTable', () => {
  const mUserTable = {
    find: jest.fn().mockReturnThis(),
    sort: jest.fn().mockReturnThis(),
    exec: jest.fn(),
  };
  return { userTable: mUserTable };
});

describe('47587358', () => {
  afterAll(() => {
    jest.resetAllMocks();
  });
  it('should get user by nick', async () => {
    const mResult = [{ _pNick: '_pNick', _firstName: '_firstName', _userName: '_userName', _phoneNumber: 123456, _userID: 1 }];
    userTable.exec.mockImplementationOnce((fn) => {
      fn(null, mResult);
    });
    const actual = await UserRepo.getBypNick('jest');
    expect(actual).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          nick: expect.any(String),
          firstName: expect.any(String),
          userName: expect.any(String),
          phoneNumber: expect.any(Number),
          userId: expect.any(Number),
        }),
      ]),
    );
    expect(userTable.find).toBeCalledWith({ _pNick: new RegExp(`^jest`, 'i') });
    expect(userTable.sort).toBeCalledWith({ _pNick: 1 });
    expect(userTable.exec).toBeCalledWith(expect.any(Function));
  });

  it('should handle error', async () => {
    const mError = new Error('network');
    userTable.exec.mockImplementationOnce((fn) => {
      fn(mError, null);
    });
    await expect(UserRepo.getBypNick('jest')).rejects.toThrowError('network');
    expect(userTable.find).toBeCalledWith({ _pNick: new RegExp(`^jest`, 'i') });
    expect(userTable.sort).toBeCalledWith({ _pNick: 1 });
    expect(userTable.exec).toBeCalledWith(expect.any(Function));
  });
});
