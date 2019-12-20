import express from 'express';
import router from './routes';

const app = express();
app.use(router);

app.use((req, res, next) => {
  res.status(404).send('Sorry cant find that!');
});

const server = app.listen(3000, function() {
  var port = this.address().port;
  console.log('Example app listening on port %s!', port);
});

export default server;
