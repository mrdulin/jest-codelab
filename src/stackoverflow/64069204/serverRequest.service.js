import { get } from 'axios';

export const serverRequest = {
  get: (url, params) => {
    try {
      return get(url, params);
    } catch (err) {
      return new Error('server error');
    }
  },
};
