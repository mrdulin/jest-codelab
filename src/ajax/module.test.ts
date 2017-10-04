jest.mock('./request');

import * as user from './user.service';

describe('ajax test suites', () => {
  it('works with promises', async () => {
    expect.assertions(1);
    const data = await user.getUserName(4);
    expect(data).toEqual('Mark');
  });
});
