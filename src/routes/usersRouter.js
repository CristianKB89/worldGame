//---------------------------------------------------------- Requires -----------------------------------------------------------------------
const express = require('express');
const router = express.Router();
const multer = require ('multer');
const path = require('path');
const usersController = require('../controllers/usersController');
const singupValidations = require('../middlewares/signupValidationsMiddleware');
const loginValidations = require('../middlewares/loginValidation');
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
router.post('/signup', upload.single('userProfileImage'), singupValidations, usersController.register);
router.get('/login', usersController.login);
router.get('/profile/:id', usersController.userProfile);
router.put('/profile/:id', upload.single('userProfileImage'), usersController.updateUserProfile);
router.post('/login', loginValidations, usersController.loginProcess);

module.exports = router;
