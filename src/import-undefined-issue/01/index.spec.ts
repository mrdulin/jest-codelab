import { UserRoles } from './@types';

describe('import undefined issue test suites', () => {
  it('should be ADMIN', () => {
    expect(UserRoles.ADMIN).toBe('ADMIN');
  });
});
