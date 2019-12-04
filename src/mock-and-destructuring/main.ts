import { SecretsManager, SharedIniFileCredentials } from "./aws-sdk";

export function main() {
  const credentials = new SharedIniFileCredentials();
  const secretsManager = new SecretsManager();
}
