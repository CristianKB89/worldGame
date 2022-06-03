const express = require('express');
const router = express.Router();
const multer = require('multer');
const usersControllerApi = require('../controllers/usersControllerApi')

let storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null,'./public/images/usersProfileImages')
    },
    filename: function (req, file, cb){
        cb(null, Date.now() + path.extname(file.originalname));
        
    }
})
let upload = multer({storage});

router.get('/', usersControllerApi.getUsers);
router.get('/profile/:id', usersControllerApi.userProfile)
router.put('/edit/:id', usersControllerApi.updateUserProfile)

module.exports = router;