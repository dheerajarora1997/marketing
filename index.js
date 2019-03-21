const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('common/landing');
});

module.exports = router;
