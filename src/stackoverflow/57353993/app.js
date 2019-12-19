const express = require('express');
const app = express();
const xmlparser = require('express-xml-bodyparser');

app.use(xmlparser());
app.post('/', (req, res) => {
  res.json(req.body);
});

module.exports = app;
