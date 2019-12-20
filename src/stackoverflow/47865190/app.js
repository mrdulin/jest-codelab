const express = require('express');
const app = express();

app.post('/auth/signup', (req, res) => {
  const data = {
    success: true,
    message: 'registration success',
    token: '123',
    user: {},
  };
  res.json(data);
});

module.exports = app;
