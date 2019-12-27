const express = require('express');
const tokenStore = require('./token-store');

const app = express();

const someHandler = async (req, res) => {
  const token = await tokenStore.getToken();
  res.send(token);
};

app.get('/api/users', someHandler);

module.exports = app;
