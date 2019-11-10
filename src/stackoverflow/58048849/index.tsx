import React from 'react';
import { ipcRenderer } from './electron';

const AccountCheckModule = () => {
  const [listingsCount, setListingsCount] = React.useState(0);

  React.useEffect(() => {
    ipcRenderer.on('count-listings', (event, count) => {
      setListingsCount(count);
    });

    ipcRenderer.send('count-listings', 2);

    // Cleanup the listener events so that memory leaks are avoided.
    return function cleanup() {
      ipcRenderer.removeAllListeners('count-listings');
    };
  }, []);

  return <div>{listingsCount}</div>;
};

export default AccountCheckModule;
