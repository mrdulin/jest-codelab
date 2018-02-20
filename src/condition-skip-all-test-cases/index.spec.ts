describe('condition-skip-all-test-cases test suites', () => {
  // https://stackoverflow.com/questions/52887335/how-can-i-skip-test-cases-when-some-value-is-falsy-in-beforeeach-hook
  let user;
  beforeEach(() => {
    user = null;
    if (user) {
      console.info('user found');
    } else {
      console.info('user not found');
    }
  });

  // if (user) {
  //   it('t-1', () => {
  //     expect(1).toBe(1);
  //   });
  // }

  it('t-2', () => {
    if (user) {
      expect(2).toBe(2);
    } else {
      throw new Error('user not found');
    }
  });

  it('t-3', () => {
    if (user) {
      expect(2).toBe(2);
    } else {
      throw new Error('user not found');
    }
  });
});
