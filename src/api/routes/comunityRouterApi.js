var express = require('express');
var router = express.Router();
const comunityControllerApi = require('../../api/controllers/comunityControllerApi');


/* GET home page. */
router.get('/', comunityControllerApi.getAllPostApi);
router.put('/edit/:id', comunityControllerApi.updatePostApi);

module.exports = router;