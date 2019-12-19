const express = require('express');
const request = require('request-promise');
const app = express();

app.post('/abc', async (req, res) => {
  const url = req.protocol + '://' + req.get('host');
  const rval = await request.post(`${url}/def`);
  res.send(rval);
});
app.post('/def', (req, res) => {
  res.send('def');
});

module.exports = app;
