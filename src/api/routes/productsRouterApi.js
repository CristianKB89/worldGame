const express = require('express');
const router = express.Router();
const productsControllerApi = require('../controllers/productsControllerApi')
let productValidation = require('../../middlewares/createProductValidator');

router.get('/', productsControllerApi.getProducts)
router.get('/productdetail/:id', productsControllerApi.productDetail)
router.post('/create', productValidation, productsControllerApi.createProductPost)
router.get('/edit/:id', productsControllerApi.edit)
router.put('/edit/:id', productsControllerApi.update)
router.delete('/delete/:id', productsControllerApi.delete)
router.get('/genres', productsControllerApi.getGenres)

module.exports = router;