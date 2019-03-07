const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const products = require('../controllers/products')
const router = express.Router();

//admin/add-product => GET
router.get('/add-product', products.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', products.postAddProduct);

module.exports = router;
