import axios from 'axios';

export const AjaxService = {
  post: (url, data, headers?) => {
    return axios({
      method: 'POST',
      url,
      headers: headers || { 'content-type': 'application/json' },
      data
    });
  }
};
