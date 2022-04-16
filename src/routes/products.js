const express = require('express');
const router = express.Router();
const productController = require('../controllers/productControllers');

router.get("/", productController.getProducts);




module.exports = router;