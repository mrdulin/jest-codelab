const express = require('express');
const app = express();
const port = 3000;
const db = {
  async sync(options) {},
};

const start = async () => {
  try {
    if (process.env.NODE_ENV) {
      await db.sync({ force: false });
    }

    app.get('/', (request, response) => {
      response.send('Please feel free to use our api with /api');
    });

    return app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (err) {
    console.log(err.message);
  }
};

export default start;
