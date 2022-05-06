const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

router.get("/", productsController.getProducts);
router.get("/productdetail", productsController.productDetail);
router.get("/shoppingCart", productsController.shoppingCart);

module.exports = router;