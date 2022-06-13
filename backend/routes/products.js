const express = require('express');
const router = express.Router();

const { getProducts, getProduct, addProduct} = require('../controllers/products');

router.route('/').get(getProducts).post(addProduct);
router.route('/:id').get(getProduct);

module.exports = router;
