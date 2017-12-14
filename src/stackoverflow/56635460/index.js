const express = require('express');
const { Pool } = require('pg');

const app = express();
const pool = new Pool();

app.post('/insert', (req, res, next) => {
  const values = req.body;

  pool.query(`INSERT INTO student SET ?`, [values], (err, result) => {
    if (err) {
      err = new Error('Not Connected');
      next(err);
    } else {
      res.status(201).json({ msg: `added ${result.insertId}` });
      console.log(result);
    }
  });
});
