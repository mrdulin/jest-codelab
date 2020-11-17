import { SecretManagerServiceClient } from '@google-cloud/secret-manager';

const getSecrets = async (storeId) => {
  try {
    const client = new SecretManagerServiceClient();
    const [accessReponse] = await client.accessSecretVersion({
      name: `projects/messaging-service-dev-b4f0/secrets/STORE_${storeId}_MESSANGER_CHANNEL_TOKEN/versions/latest`,
    });
    const responsePayload = accessReponse.payload!.data!.toString();
    return responsePayload;
  } catch (error) {
    console.error(`getSecretInfo: ${error.message}`);
    throw error;
  }
};

export default getSecrets;
