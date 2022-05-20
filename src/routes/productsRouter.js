const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const productsController = require('../controllers/productsController');

// Configuración de multer
const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, './public/images/products')
    },
    filename: function(req, file, cb){
        cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`)
    }
});
let upload = multer({storage});
//middlewares

let productValidation = require('../middlewares/createProductValidator');

//rutas

router.get("/", productsController.getProducts);
router.get("/productdetail/:id", productsController.productDetail);
router.get("/shoppingCart", productsController.shoppingCart);
//creación de producto
router.get ("/create", productsController.createProduct);
router.post("/create", upload.single("imgCard"), productValidation, productsController.createProductPost);
//edición de producto
router.get('/edit/:id', productsController.edit);
router.put('/edit/:id', upload.single('imgCard'), productsController.update);
router.delete('/edit/:id', productsController.delete);

module.exports = router;