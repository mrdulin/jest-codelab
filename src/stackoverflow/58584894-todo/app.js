const express = require('express');
const { Client } = require('pg');
const app = express();

const client = new Client({
  user: 'postgres',
  host: '127.0.0.1',
  database: 'postgres',
  password: '',
  port: 5432,
});

app.post('/api/quotes', async (req, res) => {
  console.log(req.get('host'));
  await client.connect();
  const rval = await client.query('SELECT $1::text as message', ['Hello world!']);
  console.log(rval.rows[0].message);
  await client.end();
  res.json({ result: true, msg: 'Successfully inserted a quote' });
});

const port = 5000;
const hostname = 'localhost';
// const server = app.listen(port, hostname, () => {
//   console.log(`HTTP server is listening on http://${hostname}:${port}`);
// });

module.exports = app;
