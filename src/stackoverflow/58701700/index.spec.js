import { userPreSaveHook } from './';

describe('userPreSaveHook', () => {
  test('should execute next middleware when password is modified', async () => {
    const mNext = jest.fn();
    const mContext = {
      isModified: jest.fn()
    };
    mContext.isModified.mockReturnValueOnce(false);
    await userPreSaveHook.call(mContext, mNext);
    expect(mContext.isModified).toBeCalledWith('password');
    expect(mNext).toBeCalledTimes(1);
  });

  test('should has password and remove passwordConfirm field', async () => {
    const mNext = jest.fn();
    const mContext = {
      isModified: jest.fn(),
      passwordConfirm: 'aaa',
      password: '123456'
    };
    mContext.isModified.mockReturnValueOnce(true);
    await userPreSaveHook.call(mContext, mNext);
    expect(mContext.isModified).toBeCalledWith('password');
    expect(mNext).toBeCalledTimes(1);
    expect(mContext.passwordConfirm).toBeUndefined();
    expect(mContext.password).not.toBe('123456');
  });
});
