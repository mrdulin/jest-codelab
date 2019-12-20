import express from 'express';

const app = express();

app.post('/api/users/auth/register', (req, res) => {
  res.status(400).json({ errArray: [] });
});

const port = 3001 || process.env.PORT;
const server = app.listen(port, () => console.log(`Server running on port ${port}`));

export default server;
