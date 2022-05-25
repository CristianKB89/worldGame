const { validationResult } = require("express-validator");
const db = require("../database/models");
const Games = db.Game;
const Genres = db.Genre;

const productsController = {
  getProducts: (req, res) => {
    
    Games.findAll().then((games) => {
      let result = [];
      if(req.query.searchCatalog){
        for(let i = 0; i < games.length; i++){
          if(games[i].title.toLowerCase().includes(req.query.searchCatalog.toLowerCase())){
            result.push(games[i]);
          }
        }
      }else if(req.query.pc == 'on'){
        for(let i = 0; i < games.length; i++){
          if(games[i].pc == 1){
            result.push(games[i]);
          }
        }
      }else if(req.query.xbox == 'on'){
        for(let i = 0; i < games.length; i++){
          if(games[i].xbox == 1){
            result.push(games[i]);
          }
        }
      }else if(req.query.playstation == 'on'){
        for(let i = 0; i < games.length; i++){
          if(games[i].playstation == 1){
            result.push(games[i]);
          }
        }
      }else if(req.query.none == 'on'){
        for(let i = 0; i < games.length; i++){
          if(games[i].discount == 0){
            result.push(games[i]);
          }
        }
      }else if(req.query.less == 'on'){
        for(let i = 0; i < games.length; i++){
          if(games[i].discount < 50 && games[i].discount > 0){
            result.push(games[i]);
          }
        }
      }else if(req.query.none == 'on'){
        for(let i = 0; i < games.length; i++){
          if(games[i].discount > 50){
            result.push(games[i]);
          }
        }
      }else{
        result = games;
      }
      res.render("catalog", { games: result });
    });
  },
  productDetail: (req, res) => {
    let gamesRequest = Games.findByPk(req.params.id, {
      include: [
        {
          association: "genre",
        },
      ],
    });

    let genresRequest = Genres.findAll();

    Promise.all([gamesRequest, genresRequest])

    .then(([game, genres]) => {
      res.render("product-detail", { game, genres });
    })
    .catch((error) => console.log(error));
  },
  createProduct: (req, res) => {
    res.render("product-create");
  },
  createProductPost: (req, res) => {
    const result = validationResult(req);

    if (result.errors.length > 0) {
      res.render("product-create", {
        errors: result.mapped(),
        oldData: req.body,
      });
    } else {
      Games.create({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        discount: req.body.discount,
        img_card: req.file ? req.file.filename : "default.jpg",
        rating_age: req.body.ratingAge,
        genre_id: req.body.genre,
        xbox: req.body.xbox,
        pc: req.body.pc,
        playstation: req.body.play,
      })
        .then((result) => {
          res.redirect('/products')
        })
        .catch((error) => console.log(error));
    }
  },
  edit: function (req, res) {
    let gamesRequest = Games.findByPk(req.params.id, {
      include: [
        {
          association: "genre",
        },
      ],
    });

    let genresRequest = Genres.findAll();

    Promise.all([gamesRequest, genresRequest])

      .then(([game, genres]) => {
        res.render("product-edit", { game, genres });
      })
      .catch((error) => console.log(error));
  },
  update: function (req, res) {
    Games.findByPk(req.params.id, {
      include: [
        {
          association: "genre",
        },
      ],
    }).then((result) => {
      Games.update(
        {
          title: req.body.title,
          description: req.body.description,
          price: req.body.price,
          discount: req.body.discount,
          img_card: req.file ? req.file.filename : result.dataValues.img_card,
          rating_age: req.body.ratingAge,
          genre_id: req.body.genre,
          xbox: req.body.xbox,
          pc: req.body.pc,
          playstation: req.body.play,
        },
        {
          where: {
            id: result.dataValues.id,
          },
        }
      )
      .then((result) => {
        console.log(result);
        res.redirect('/products')
      })
      .catch((error) => console.log(error));
    });
  },
  delete: function (req, res) {
    Games.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then(() => res.redirect("/products"))
      .catch((error) => console.log(error));
  },
};

module.exports = productsController;
