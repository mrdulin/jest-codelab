import { namedExport } from './nodeModule';
import api from './api';

const apiCall = () => {
  return api.makeCall().then(
    () => {},
    (error) => {
      if (error.status === 403) {
        namedExport.logout();
      }
    },
  );
};

export default { apiCall };
