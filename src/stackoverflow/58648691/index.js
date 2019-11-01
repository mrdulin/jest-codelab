const fetch = require('node-fetch');

module.exports = {
  async doSomething(url, token) {
    return fetch(url).then(res => res.json());
  }
};
