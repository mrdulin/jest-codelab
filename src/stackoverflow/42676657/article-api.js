const fetch = require('node-fetch');

function articleMiddleware(next) {
  const articleApiListUrl = 'https://github.com/mrdulin';
  const headers = {};
  const method = 'get';
  const body = {};

  return fetch(articleApiListUrl, { headers, method, body }).then(() => next({ some: 'data' }));
}

exports.articleMiddleware = articleMiddleware;
