import express from 'express';

const app = express();

app.get('/test-with-token', async (req, res) => {
  res.set('token', '123');
  res.sendStatus(200);
});

app.get('/test', async (req, res) => {
  res.sendStatus(200);
});

export default app;
