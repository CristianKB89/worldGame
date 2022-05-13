const {validationResult} = require('express-validator');
const db = require('../database/models');
const Games = db.Game;

const productsController ={
    getProducts: (req, res) => {
        Games.findAll()
        .then(games => {
            res.render('catalog', {games})
        })
       // res.render('catalog')
    },
    productDetail: (req, res) => {
        res.render("product-detail");
    },
    shoppingCart: (req, res) => {
        res.render("shoppingCart")
    },
    createProduct: (req, res) => {
        res.render("product-create");
    },
    createProductPost: (req, res) => {
        const result = validationResult(req);
        
        if(result.errors.length > 0){
            res.render("product-create",{errors: result.mapped(), oldData: req.body});
        }
        else{
            res.send("Product created");
        }
    }
}

module.exports = productsController;