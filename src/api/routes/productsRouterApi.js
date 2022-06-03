const express = require('express');
const router = express.Router();
const productsControllerApi = require('../controllers/productsControllerApi')
let productValidation = require('../../middlewares/createProductValidator');

router.get('/', productsControllerApi.getProducts)
router.get('/productdetail/:id', productsControllerApi.productDetail)
router.post('/create', productValidation, productsControllerApi.createProductPost)

module.exports = router;