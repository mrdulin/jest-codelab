const express = require('express');
const cors = require('cors');
const app = express();
const corsOptions = {
  origin: true,
};
const PORT = process.env.PORT || 4002;
app.use(cors(corsOptions));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.listen(PORT, (err) => {
  if (err) {
    console.log('Rumble in the Bronx! ' + err);
  } else {
    console.log(`👽 <(Communications active at port http://localhost:${PORT}/)`);
  }
});
