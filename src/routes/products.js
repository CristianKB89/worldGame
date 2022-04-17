const express = require('express');
const router = express.Router();
const productController = require('../controllers/productControllers');

router.get("/", productController.getProducts);
router.get("/product-detail/:id", productController.productDetail);





module.exports = router;