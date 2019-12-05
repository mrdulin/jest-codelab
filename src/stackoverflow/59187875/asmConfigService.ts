export class ConfigService {
  public static async getConfig(token) {
    return {
      ThisSecretString: JSON.stringify({
        ThisclientId: 'real id',
        ThisclientSecret: 'real secret',
      }),
    };
  }
}
