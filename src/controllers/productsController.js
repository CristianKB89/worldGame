const {validationResult} = require('express-validator');
const db = require('../database/models');
const Platforms = db.Platform;
const Games = db.Game;
const Genres = db.Genre;
const platforms_games = db.platforms_games;

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
                img_card: (req.file)?req.file.filename:"default.jpg",
                rating_age: req.body.ratingAge,
                genre_id: req.body.genre
             })
            .then((result) => {
                if(typeof req.body.platform === 'string'){
                    platforms_games.create({
                        platform_id: req.body.platform,
                        game_id: result.dataValues.id
                    })
                    .then(result =>{
                        console.log(result);
                    })
                    .catch(error => console.log(error))
                }else{
                    req.body.platform.forEach(element => {
                        platforms_games.create({
                            platform_id: element,
                            game_id: result.dataValues.id
                        })
                        .then(result =>{
                            console.log(result);
                        })
                        .catch(error => console.log(error))
                    });
                }
                res.redirect('/products')
            })
            .catch(error => console.log(error))
        }
    },
    edit: function(req,res) {

        let gamesRequest = Games.findByPk(req.params.id,{
            include: [
                {
                    association: 'genre'
                }
            ]
        });
        
        let genresRequest = Genres.findAll();
        let plaftormsRequest = Platforms.findAll();
        let platforms_gamesRequest = platforms_games.findAll();

        Promise.all([gamesRequest, genresRequest, plaftormsRequest, platforms_gamesRequest])
        
        .then(([game, genres, platforms, platforms_games]) => {
            
            let arr = []
            let specificPlatform = platforms_games.filter(i => i.dataValues.game_id == game.id) 
            specificPlatform.map(platform => arr.push(platform.dataValues.platform_id))
            res.render('product-edit', {game, genres, platforms, arr})
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