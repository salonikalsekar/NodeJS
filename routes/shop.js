const path = require('path');
const products = require('../controllers/products')

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/', products.getProducts);

module.exports = router;
