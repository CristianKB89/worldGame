const { validationResult } = require("express-validator");
const db = require("../../database/models");
const Games = db.Game;
const Genres = db.Genre;

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
        .then(games => res.json(games))
        .catch(err => res.json(err));
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
      res.json({ game, genres });
    })
    .catch((error) => res.json(error));
  },
  createProductPost: (req, res) => {
    const result = validationResult(req);

    if (result.errors.length > 0) {
      res.json({
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
          res.json(result)
        })
        .catch((error) => res.json(error));
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
        res.json({ game, genres });
      })
      .catch((error) => res.json(error));
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
          //img_card: req.file ? req.file.filename : result.dataValues.img_card,
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
      .then((result) => res.json(result))
      .catch((error) => res.json(error));
    });
  },
  delete: function (req, res) {
    Games.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((result) => res.json(result))
      .catch((error) => res.json(error));
  },
  getGenres: (req, res) => {
    Genres.findAll()
      .then(result => res.json(result))
      .catch((error) => res.json(error));
  }
}

module.exports = productsControllerApi