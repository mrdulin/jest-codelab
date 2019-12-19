const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.text());
app.post('/myservice/v1/api/user', (req, res) => {
  console.log(req.body);
  res.status(201).send('user created successfully.');
});

module.exports = app;
