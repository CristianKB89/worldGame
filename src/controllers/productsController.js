const {validationResult} = require('express-validator');
const db = require('../database/models');
const Games = db.Game;
const Genres = db.Genre;

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
            Games.create({
                title: req.body.title,
                description: req.body.description,
                price: req.body.price,
                discount: req.body.discount,
                imgCard: (req.file)?req.file.filename:"default.jpg",
                rating_age: req.body.ratingAge,
                genre_id: req.body.genre,
                //platform_id: checkboxes?????????????
             })
             .then(() => res.redirect('/products'))
             .catch(error => console.log(error))
        }
    },
    edit: function(req,res) {
        let gamesRequest = Games.findByPk(req.params.id,{
            include: [
                {
                    association: 'genre'
                }/*,
                    assciation:'platforms'*/
            ]
        });
        
        let genresRequest = Genres.findAll();

        Promise.all([gamesRequest, genresRequest])
        .then(([game, genres]) => {
            res.render('???', {game, genres})
        })
        .catch((error) => console.log(error))
    },
    update: function (req,res) {
        Movies.update({
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            discount: req.body.discount,
            imgCard: (req.file)?req.file.filename:"default.jpg",
            rating_age: req.body.ratingAge,
            genre_id: req.body.genre,
            //platform_id: checkboxes?????????????
         },{
             where: {
                 id: req.params.id
             }
         })
         .then(() => res.redirect('/products'))
         .catch(error => console.log(error))
    },
    delete: function (req,res) {
        Games.findByPk(req.params.id)
        .then((game) => res.render('???', {game}))
        .catch((error) => console.log(error))
    },
    destroy: function (req,res) {
        Games.destroy({
            where:{
                id: req.params.id
            }
        })
        .then(() => res.redirect('/products'))
        .catch((error) => console.log(error))
    }
}

module.exports = productsController;