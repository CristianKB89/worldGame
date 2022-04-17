var express = require('express');
var router = express.Router();
let userController = require('../controllers/userController');
/* GET users listing. */
router.get('/', userController.getUsers);
router.get('/signup', userController.signup);
module.exports = router;
