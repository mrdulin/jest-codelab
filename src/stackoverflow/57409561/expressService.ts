import { Application } from 'express-serve-static-core';
import express, { Router } from 'express';
import cors from 'cors';

const expressService = (app: Application) => {
  app.use(cors());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  const api = Router();

  api.get('/health', (req, res) => {
    res.sendStatus(200);
  });

  app.use(api);
};

export default expressService;
