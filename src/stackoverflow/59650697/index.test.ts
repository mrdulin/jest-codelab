import { createUser, models } from '.';

describe('59650697', () => {
  it('should create user with role', async () => {
    const mUser: any = { setUserRole: jest.fn() };
    jest.spyOn(models.User, 'create').mockResolvedValueOnce(mUser);
    const mUserRole: any = { id: 1, role: 'admin' };
    jest.spyOn(models.UserRole, 'create').mockResolvedValueOnce(mUserRole);
    const email = 'example@gmail.com';
    const encryptedPassword = '123';
    await createUser(email, encryptedPassword);
    expect(models.User.create).toBeCalledWith({ email, password: encryptedPassword });
    expect(models.UserRole.create).toBeCalledWith({ role: 'admin' });
    expect(mUser.setUserRole).toBeCalledWith(mUserRole);
  });
});
