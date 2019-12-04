import { AWS_DEFAULTS } from "./types";
import { SharedIniFileCredentials, SecretsManager, Credentials } from "aws-sdk";

export default class ASMConfigService {
  public static async getConfig(
    appName: string,
    environment: string,
    region: string
  ): Promise<any> {
    const config: SecretsManager.Types.ClientConfiguration = { region };
    if (process.env.NODE_ENV === "mylocal") {
      const credentials: Credentials = new SharedIniFileCredentials({
        profile: AWS_DEFAULTS.PROFILE
      });
      config.credentials = credentials;
    }
    const client = new SecretsManager(config);
    const secretName = `${appName}-${environment}`;

    return client.getSecretValue({ SecretId: secretName }).promise();
  }
}
