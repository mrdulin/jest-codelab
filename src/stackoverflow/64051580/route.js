const express = require('express');
const router = express.Router();

router.get('', (req, res, next) => {
  try {
    res.status(200).render('../views/');
  } catch (error) {
    next(error);
  }
});

router.get('*', (req, res, next) => {
  try {
    res.status(404).render('../views/not-found');
  } catch (error) {
    next(error);
  }
});

module.exports = router;
