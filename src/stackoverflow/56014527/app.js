const work = require('./work');
const express = require('express');

const app = express();

app.use(work).get('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = app;
