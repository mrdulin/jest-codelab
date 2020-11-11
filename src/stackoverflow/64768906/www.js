const http = require('http');
const app = require('./app');

http.createServer(app).listen(process.env.SERVER_PORT || 3000);
