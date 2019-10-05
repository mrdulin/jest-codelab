import express from 'express';
import expressService from './expressService';
import http from 'http';

const app = express();
const PORT = process.env.PORT || 3000;

expressService(app);

function createHttpServer() {
  const httpServer: http.Server = app.listen(PORT, () => {
    console.log('server started at http://localhost:' + PORT);
  });

  return httpServer;
}

if (require.main === module) {
  createHttpServer();
}

export default createHttpServer;
