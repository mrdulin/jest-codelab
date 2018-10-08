jest.mock('./request');

import * as user from './user.service';

describe('ajax test suites', () => {
  it('works with promises', () => {
    expect.assertions(1);
    const p = user.getUserName(4);
    console.log(p);
    return p.then((data) => expect(data).toEqual('Mark'));
  });
});
