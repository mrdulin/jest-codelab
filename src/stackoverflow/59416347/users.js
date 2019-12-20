import axios from 'axios';

export default class MyClass {
  constructor(config) {
    this.config = config;
  }

  async getUsers(url, params, successHandler, errorHandler) {
    return axios
      .post(url, params)
      .then((resp) => this.handleAPIResponse.call(this, resp, successHandler, errorHandler))
      .catch((error) => errorHandler);
  }

  async handleAPIResponse(resp, successHandler, errorHandler) {
    successHandler();
    return resp;
  }
}
