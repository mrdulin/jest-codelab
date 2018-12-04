import express from 'express';
import axios from 'axios';

const app = express();

app.get('/ping', (req, res) => {
  axios
    .get('/health')
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      res.sendStatus(503);
    });
});

export default app;
