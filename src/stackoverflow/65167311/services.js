import Config from './config';
import axiosInstance from './axiosInstance';

function createQuery() {}

const getUser = (params) => {
  const query = createQuery(params);
  const url = `${Config.users}${query ? query : ''}`;
  return axiosInstance
    .get(url)
    .then((response) => {
      return response.data.data;
    })
    .catch((error) => {
      return false;
    });
};

export const apiService = { getUser };
