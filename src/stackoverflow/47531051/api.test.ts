import getUsers from './api';

jest.mock('./api');

test('user list is an array', async () => {
  expect.assertions(1);
  const resp = await getUsers();
  expect(Array.isArray(resp)).toBeTruthy();
});
