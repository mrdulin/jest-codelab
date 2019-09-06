import axios from 'axios';

export const status = ({ loginUrl = '/', logoutUrl = '/' }) => {
  return axios.get(`/auth?login=${loginUrl}&logout=${logoutUrl}`);
};
