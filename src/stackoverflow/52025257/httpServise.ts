import axios from 'axios';

function getHeaders() {
  return {};
}

export const httpServise = {
  patch: (url, params) => {
    return new Promise((resolve, reject) => {
      axios(url, {
        method: 'PATCH',
        headers: getHeaders(),
        data: params
      }).then(
        res => {
          resolve(res);
        },
        err => {
          reject(err);
        }
      );
    });
  }
};
