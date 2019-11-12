const { main } = require('./');
const { setupUserAccounts } = require('./shared/user');

jest.mock('./shared/user', () => {
  return {
    setupUserAccounts: jest.fn()
  };
});

test('should mock setupUserAccounts correctly', () => {
  expect(jest.isMockFunction(setupUserAccounts)).toBeTruthy();
  (setupUserAccounts as jest.MockedFunction<typeof setupUserAccounts>).mockReturnValueOnce('fake data');
  const actualValue = main();
  expect(actualValue).toBe('fake data');
});
