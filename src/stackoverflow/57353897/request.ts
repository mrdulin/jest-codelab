import axios from 'axios';
const serialize = data => data;
const getLocalstorage = key => key;
const successResponse = () => console.log('successResponse');
const throwHttpError = error => new Error(error);

export default async (request, httpService = axios) => {
  const { method, data, headers } = request;
  let { url } = request;
  const token = getLocalstorage('token');
  if (token) {
    headers.token = token;
  }
  if (method === 'GET') {
    if (data) {
      url += `?${serialize(data)}`;
    }
  }

  return httpService
    .request({
      method,
      url,
      headers: Object.assign({}, headers),
      ...(method !== 'GET' && { data })
    })
    .then(successResponse, error => {
      throwHttpError(error);
    });
};
