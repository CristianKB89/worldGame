const db = require("../database/models");
const Shoppingcart = db.Shoppingcart;
const Games = db.Game;

const shoppingCartController = {
  getProducts: (req, res) => {
    let localUserId = res.locals.user.id;
    Shoppingcart.findAll({
      where: {
        user_id: req.params.id,
      },
      include: [
        {
          model: Games,
          as: "game",
        },
      ],
    })
      .then((result) => {
        console.log(result);
        res.render("shoppingCart", { result, localUserId })
      })
      .catch((err) => res.send(err));
  },
  addProduct: (req, res) => {
    Shoppingcart.create({
      user_id: res.locals.user.id,
      game_id: req.params.id,
    })
      .then((result) => res.redirect("/shoppingCart/" + res.locals.user.id))
      .catch((err) => res.send(err));
  },
  delete: (req, res) => {
    Shoppingcart.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then(() => res.redirect("/shoppingCart/" + res.locals.user.id))
      .catch((error) => console.log(error));
  },
};

module.exports = shoppingCartController;
