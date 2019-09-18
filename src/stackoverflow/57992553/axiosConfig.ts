import axios from 'axios';
const apiClient = axios.create({
  baseURL: `${process.env.VUE_APP_ROOT_API}`
});

export default apiClient;
