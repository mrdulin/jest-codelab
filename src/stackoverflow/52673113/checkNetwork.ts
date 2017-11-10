import NetInfo from '@react-native-community/netinfo';
import { NO_NETWORK_CONNECTION } from './errors';

const checkNetwork = (): Promise<boolean | string> =>
  new Promise((resolve, reject) => {
    NetInfo.isConnected
      .fetch()
      .then(isConnected => (isConnected ? resolve(true) : reject(NO_NETWORK_CONNECTION)))
      .catch(() => reject(NO_NETWORK_CONNECTION));
  });

export default checkNetwork;
