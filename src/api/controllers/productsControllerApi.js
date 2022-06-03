const { validationResult } = require("express-validator");
const db = require("../../database/models");
const Games = db.Game;
const Genres = db.Genre;
const Library = db.Library;

const productsControllerApi = {
    
  getProducts: (req, res) => {
    Games.findAll({
      include: [
        {
          model: Genres,
          as: "genre",
        },
      ],
    })
        .then(games => res.send(games))
        .catch(err => res.send(err));
  },
  productDetail: (req, res) => {
    let gamesRequest = Games.findByPk(req.params.id, {
      include: [
        {
          association: "genre",
        },
      ],
    });

    let genresRequest = Genres.findAll()

    Promise.all([gamesRequest, genresRequest])

    .then(([game, genres]) => {
      res.send({ game, genres });
    })
    .catch((error) => console.log(error));
  },
  createProductPost: (req, res) => {
    const result = validationResult(req);

    if (result.errors.length > 0) {
      res.send({
        errors: result.mapped(),
        oldData: req.body,
      });
    } else {
      Games.create({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        discount: req.body.discount,
       // img_card: req.file ? req.file.filename : "default.jpg",
        rating_age: req.body.ratingAge,
        genre_id: req.body.genre,
        xbox: req.body.xbox,
        pc: req.body.pc,
        playstation: req.body.play
      })
        .then((result) => {
          res.send(result)
        })
        .catch((error) => console.log(error));
    }
  }
}

module.exports = productsControllerApi