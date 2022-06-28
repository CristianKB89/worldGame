const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const productsControllerApi = require('../controllers/productsControllerApi')
let productValidation = require('../../middlewares/createProductValidator');

const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, './public/images/products')
    },
    filename: function(req, file, cb){
        cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`)
    }
});
let upload = multer({storage});

router.get('/', productsControllerApi.getProducts)
router.get('/productdetail/:id', productsControllerApi.productDetail)
router.post('/create', productValidation, productsControllerApi.createProductPost)
router.get('/edit/:id', productsControllerApi.edit)
router.put('/edit/:id', productsControllerApi.update)
router.delete('/delete/:id', productsControllerApi.delete)
router.get('/genres', productsControllerApi.getGenres)

module.exports = router;