import User from '../user.model';

describe('user model test suites', () => {
  it('should instante user correctly', () => {
    const user: User = new User({ name: 'test' });
    expect(user instanceof User).toBeTruthy();
  });

  it('should get user name correctly', () => {
    const name = 'test';
    const user: User = new User({ name });
    expect(user.getName()).toBe(name);
  });

  it('should get a user with default data', () => {
    const user: User = new User();
    expect(user instanceof User).toBeTruthy();
    expect(user.getName()).toBe('');
  });
});
