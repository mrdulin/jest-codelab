import axios from 'axios';

const api = axios.create({
  baseURL: 'window.apiPath',
  withCredentials: true,
});

api.interceptors.request.use(
  (config) => {
    const newConfig = Object.assign({}, config);
    newConfig.headers.Accept = 'application/json';

    return newConfig;
  },
  (error) => Promise.reject(error),
);

export default api;
