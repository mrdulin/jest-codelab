import { User } from './user';

describe('65148503', () => {
  it('should pass', async () => {
    const user = await User.findById('id_test');
    expect(user).toBeDefined();
    // expect(user!.password).not.toBe('older_password');
    expect(user.password).not.toBe('older_password');
  });
});
