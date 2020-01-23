import axios from 'axios';

export function main() {
  const BASE_URL = 'https://stackoverflow.com';
  const url = 'api';
  const data = {};
  return axios({
    method: 'GET',
    url: `${BASE_URL}/${url}`,
    data,
  });
}
