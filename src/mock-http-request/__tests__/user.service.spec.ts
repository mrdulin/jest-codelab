jest.mock('../myRequest');

import * as userService from '../user.service';
import User from '../user.model';

describe('user service test suites', () => {
  it('should get a user', async () => {
    expect.assertions(1);
    const actualValue = await userService.getUserById(4);
    const expectValue = new User({ name: 'Mark' });
    expect(actualValue).toEqual(expectValue);
  });

  it('should get an error when user not found', async () => {
    expect.assertions(1);
    const userID = 6666;
    try {
      await userService.getUserById(userID);
    } catch (error) {
      expect(error).toEqual({ error: `User with ${userID} not found.` });
    }
  });
});
