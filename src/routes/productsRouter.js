const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

router.get("/", productsController.getProducts);
router.get("/productdetail", productsController.productDetail);

module.exports = router;