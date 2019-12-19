const app = require('./server.js');
const s = app.listen(3000, () => {
  console.log(`HTTP server is listening on http://localhost:${s.address().port}`);
});
