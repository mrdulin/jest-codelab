import rp from 'request-promise-native';
import { ConfigService } from './asmConfigService';

const token_URI = 'https://example.com';

export default class MyService {
  public static async getMyToken(myAccountIdhere?: string) {
    const { ThisSecretString } = await ConfigService.getConfig('my-token-credentials');
    const { ThisclientId, ThisclientSecret } = JSON.parse(ThisSecretString);

    const params = {
      headers: {
        'This-Client-Id': ThisclientId,
        'This-Client-Secret': ThisclientSecret,
      },
      url: `${token_URI}/${myAccountIdhere}`,
      'content-type': 'application/json',
      accept: 'application/json',
    };
    return rp(params);
  }
}
