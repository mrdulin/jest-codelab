const foo = (): void =>
  test('this is a test', () => {
    expect(true).toBeTruthy();
  });

describe('test suites', () => {
  foo();
});
