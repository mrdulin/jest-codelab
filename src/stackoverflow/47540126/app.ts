import express from 'express';
import bodyParser from 'body-parser';

import * as moduleA from './moduleA';
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/signup', async (req, res) => {
  try {
    const hashed = await moduleA.hash(req.body.password);
    console.log(hashed);
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }
});

export default app;
