import Koa from 'koa';
import Router from 'koa-router';
import fetch from 'node-fetch';

const app = new Koa();

const router = new Router();

router.get('/test', async ctx => {
  const options = { method: 'GET' };
  const url = 'https://myapi.com/test';
  try {
    const response = await fetch(url, options);
    ctx.body = await response.json();
  } catch (error) {
    error.fetchUrl = url;
    throw error;
  }
});

app.use(router.routes());

function createHttpServer() {
  return app.listen(3000);
}

if (require.main === module) {
  createHttpServer();
}

export default createHttpServer;
