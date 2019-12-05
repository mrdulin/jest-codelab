import MyService from './myService';
import { ConfigService } from './asmConfigService';
import rp from 'request-promise-native';

jest.mock('./asmConfigService.ts', () => {
  const mConfigService = {
    getConfig: jest.fn(),
  };
  return { ConfigService: mConfigService };
});
jest.mock('request-promise-native', () => {
  return jest.fn();
});

describe('MyService', () => {
  afterEach(() => {
    jest.restoreAllMocks();
    jest.resetAllMocks();
  });
  it('#getMyToken', async () => {
    const mConfig = {
      ThisSecretString: JSON.stringify({
        ThisclientId: 'fake id',
        ThisclientSecret: 'fake secret',
      }),
    };
    (ConfigService.getConfig as jest.Mocked<any>).mockResolvedValueOnce(mConfig);
    const jsonParseSpy = jest.spyOn(JSON, 'parse');
    const actual = await MyService.getMyToken('1');
    expect(actual).toBeUndefined();
    expect(jsonParseSpy).toBeCalledWith(mConfig.ThisSecretString);
    expect(rp).toBeCalledWith({
      headers: {
        'This-Client-Id': 'fake id',
        'This-Client-Secret': 'fake secret',
      },
      url: `https://example.com/1`,
      'content-type': 'application/json',
      accept: 'application/json',
    });
  });
});
