//---------------------------------------------------------- Requires -----------------------------------------------------------------------
const express = require('express');
const router = express.Router();
const multer = require ('multer');
const path = require('path');
const usersController = require('../controllers/usersController');
const singupValidations = require('../middlewares/signupValidationsMiddleware');
const loginValidations = require('../middlewares/loginValidation');
const userLogged = require('../middlewares/userLogged');
const userNotLogged = require('../middlewares/userNotLogged');
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

router.get('/', userNotLogged, usersController.getUsers);
router.get('/signup', userLogged ,usersController.signup);
router.post('/signup', singupValidations, usersController.register);
router.get('/login', userLogged, usersController.login);
router.get('/profile/:id',userNotLogged, usersController.userProfile);
router.put('/profile/edit/:id', upload.single('userProfileImage'), usersController.updateUserProfile);
router.post('/login', loginValidations, usersController.loginProcess);
router.get('/logout', usersController.logout);
router.delete('/profile/delete/:id', usersController.deleteUser);

module.exports = router;
