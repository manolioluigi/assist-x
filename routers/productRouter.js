const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// rotte prodotti
router.post('/products', productController.createProduct);

module.exports = router;
