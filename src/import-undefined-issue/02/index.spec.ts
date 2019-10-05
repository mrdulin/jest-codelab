import { UserRoles } from './@types/user';

describe.skip('import undefined issue - 2 test suites', () => {
  it('should be ADMIN', () => {
    expect(UserRoles.ADMIN).toBe('ADMIN');
  });
});
