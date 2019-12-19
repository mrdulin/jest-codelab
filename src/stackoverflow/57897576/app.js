import express, { Router } from 'express';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
    this.exceptions();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    const routes = new Router();
    routes.post('/api/users', (req, res) => {
      res.status(201).json({ user: {} });
    });
    this.server.use(routes);
  }

  exceptions() {
    this.server.use(async (err, req, res, next) => {
      return res.status(500).send(err);
    });
  }
}

export default new App().server;
