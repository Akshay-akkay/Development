const express = require('express');
// const path = require('path');

// const rootDir = require('../utils/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  console.log(adminData.products);
  const { products } = adminData;
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
  res.render('shop', { prods: products, docTitle: 'Shop', path: '/' });
});

module.exports = router;
