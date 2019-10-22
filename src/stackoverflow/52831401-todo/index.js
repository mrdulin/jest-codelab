const { Pool } = require('pg');
const pool = new Pool();

exports.pquery = function pquery(text, params) {
  return new Promise((resolve, reject) => {
    pool.query(text, params, (err, res) => {
      return err ? reject(err) : resolve(res);
    });
  });
};

exports.query = async function query(text, params, callback) {
  const start = Date.now();
  let err;
  let res;
  try {
    res = await exports.pquery(text, params);
  } catch (error) {
    err = error;
  }
  const duration = Date.now() - start;
  console.log('executed query', { text, duration, rows: res.rowCount });
  callback(err, res);
};
