var express = require('express');
var router = express.Router();
const shoppingCartController = require('../controllers/shoppingCartController')
const userNotLoged = require('../middlewares/userNotLogged')

router.get('/:id', userNotLoged, shoppingCartController.getProducts);
router.post('/:id', shoppingCartController.addProduct);
router.delete('/:id', shoppingCartController.delete);

module.exports = router;