const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.post('/api/categories', (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
});

if (require.main === module) {
  app.listen(port, () => {
    console.info(`Listening on port ${port}...`);
  });
}

module.exports = app;
