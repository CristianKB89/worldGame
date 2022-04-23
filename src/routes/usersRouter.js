//---------------------------------------------------------- Requires -----------------------------------------------------------------------
const express = require('express');
const router = express.Router();
const multer = require ('multer');
const path = require('path');
const usersController = require('../controllers/usersController');
// const registerValidations = require('../middlewares/registerValidationsMiddleware');

//---------------------------------------------- Multer Configurations -----------------------------------------------------------------------
let storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null,'./public/images/usersProfileImages')
    },
    filename: function (req, file, cb){
        cb(null, Date.now() + path.extname(file.originalname));
        
    }
})
let upload = multer({storage});

//---------------------------------------------- usersRouter -----------------------------------------------------------------------

router.get('/', usersController.getUsers);
router.get('/signup', usersController.signup);
router.get('/login', usersController.login);

module.exports = router;
