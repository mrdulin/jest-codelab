import { AWS_DEFAULTS } from "./types";

const mSharedIniFileCredentials = jest.fn();

const mSecretsManagerInstance = {
  getSecretValue: jest.fn().mockReturnThis(),
  promise: jest.fn()
};
const mSecretsManager = jest.fn(() => mSecretsManagerInstance);

jest.mock("aws-sdk", () => {
  return {
    SharedIniFileCredentials: mSharedIniFileCredentials,
    SecretsManager: mSecretsManager
  };
});

describe("ASMConfigService", () => {
  it("should SharedIniFileCredentials be called", async () => {
    const NODE_ENV = process.env.NODE_ENV;
    process.env.NODE_ENV = "mylocal";
    const ASMConfigService = require("./asmConfigService").default;
    await ASMConfigService.getConfig(
      "personal-sat-credentials",
      "local",
      "us-east-1"
    );
    expect(mSharedIniFileCredentials).toBeCalledWith({
      profile: AWS_DEFAULTS.PROFILE
    });
    expect(mSecretsManagerInstance.getSecretValue).toBeCalledWith({
      SecretId: "personal-sat-credentials-local"
    });
    expect(mSecretsManagerInstance.getSecretValue().promise).toBeCalledTimes(1);
    process.env.NODE_ENV = NODE_ENV;
  });
});
