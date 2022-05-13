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
            Game.create({
                title: req.body.title,
                rating: req.body.rating,
                awards: req.body.awards,
                release_date: req.body.release_date,
                length: req.body.length,
                genre_id: req.body.genre_id
             })
             .then(() => res.redirect('/movies'))
             .catch(error => console.log(error))
        }
    }
}

module.exports = productsController;