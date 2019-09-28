// https://stackoverflow.com/questions/52887335/how-can-i-skip-test-cases-when-some-value-is-falsy-in-beforeeach-hook

const userService = {
  async getUserById(id: string): Promise<object | null> {
    return null;
  }
};

export const itif = (name: string, condition: () => boolean | Promise<boolean>, cb) => {
  it(name, async done => {
    if (await condition()) {
      cb(done);
    } else {
      console.warn(`[skipped]: ${name}`);
      done();
    }
  });
};

describe('condition-skip-all-test-cases test suites', () => {
  async function isUserExists() {
    const user = await userService.getUserById('1');
    return user ? true : false;
  }

  let getUserByIdSpy;
  async function conditionWithMock() {
    getUserByIdSpy = jest.spyOn(userService, 'getUserById').mockResolvedValueOnce({ userId: 1 });
    return isUserExists();
  }

  itif('should skip the test if no user found by id', isUserExists, done => {
    expect('run test').toBe('run test');
    done();
  });

  itif('should run the test if user found by id', conditionWithMock, done => {
    console.log('should run this test');
    expect.assertions(3);
    expect('run test').toBe('run test');
    expect(jest.isMockFunction(userService.getUserById)).toBeTruthy();
    getUserByIdSpy.mockRestore();
    expect(jest.isMockFunction(userService.getUserById)).toBeFalsy();
    done();
  });
});
