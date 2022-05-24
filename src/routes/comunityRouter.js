var express = require('express');
var router = express.Router();
const path = require('path');
const multer = require ('multer');
const comunityController = require('../controllers/comunityController');

let storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null,'./public/images/usersPostImages')
    },
    filename: function (req, file, cb){
        cb(null, Date.now() + path.extname(file.originalname));
        
    }
})
let upload = multer({storage});

/* GET home page. */
router.get('/', comunityController.getAllPost);
router.post('/create/:id', upload.single('imagePost') , comunityController.createPost);
router.put('/edit/:id', upload.single('imgEdit') , comunityController.updatePost);
router.delete('/delete/:id', comunityController.delete);

module.exports = router;