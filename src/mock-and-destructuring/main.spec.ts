// mock before destructuring import in main.ts
const mockSharedIniFileCredentials = jest.fn();
const mockSecretsManager = jest.fn();

jest.mock("./aws-sdk.ts", () => {
  return {
    SharedIniFileCredentials: mockSharedIniFileCredentials,
    SecretsManager: mockSecretsManager
  };
});

describe("mock-and-destructuring", () => {
  it("should pass", () => {
    // destructured import after mocking in main.ts
    const { main } = require("./main");
    main();
    expect(mockSharedIniFileCredentials).toBeCalledTimes(1);
  });
});
