import { Users } from './';

describe('test suites', () => {
  let getUserSpyOn;
  beforeEach(() => {
    getUserSpyOn = jest.spyOn(Users, 'getUser');
  });
  afterEach(() => {
    getUserSpyOn.mockRestore();
  });
  it('t1', async () => {
    const userMocked = { id: 1, name: 'Joe' };
    getUserSpyOn.mockResolvedValueOnce(userMocked);
    const actualValue = await Users.getUser(1);
    expect(actualValue).toEqual(userMocked);
  });
  it('t2', async () => {
    const userMocked = { id: 1, name: 'mrdulin' };
    getUserSpyOn.mockResolvedValueOnce(userMocked);
    const actualValue = await Users.getUser(1);
    expect(actualValue).toEqual(userMocked);
  });
});
