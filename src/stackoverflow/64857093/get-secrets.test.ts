import { SecretManagerServiceClient } from '@google-cloud/secret-manager';
import getSecrets from './get-secrets';

const accessReponse = {
  payload: { data: { name: 'teresa teng' } },
};
const mClient = {
  accessSecretVersion: jest.fn(),
};

jest.mock('@google-cloud/secret-manager', () => {
  const mSecretManagerServiceClient = jest.fn(() => mClient);
  return { SecretManagerServiceClient: mSecretManagerServiceClient };
});

describe('getSecrets', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.resetAllMocks();
    jest.restoreAllMocks();
  });

  it('should console log correct message if token exist on global', async () => {
    mClient.accessSecretVersion.mockResolvedValueOnce([accessReponse]);
    const actual = await getSecrets('1');
    expect(actual).toEqual({ name: 'teresa teng' }.toString());
    expect(SecretManagerServiceClient).toBeCalledTimes(1);
    expect(mClient.accessSecretVersion).toBeCalledWith({
      name: `projects/messaging-service-dev-b4f0/secrets/STORE_1_MESSANGER_CHANNEL_TOKEN/versions/latest`,
    });
  });

  it('should log error and rethrow it', async () => {
    const errorLogSpy = jest.spyOn(console, 'error');
    const mError = new Error('network');
    mClient.accessSecretVersion.mockRejectedValueOnce(mError);
    await expect(getSecrets('1')).rejects.toThrowError('network');
    expect(SecretManagerServiceClient).toBeCalledTimes(1);
    expect(mClient.accessSecretVersion).toBeCalledWith({
      name: `projects/messaging-service-dev-b4f0/secrets/STORE_1_MESSANGER_CHANNEL_TOKEN/versions/latest`,
    });
    expect(errorLogSpy).toBeCalledWith('getSecretInfo: network');
  });
});
