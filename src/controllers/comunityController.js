const db = require("../database/models");
const Publication = db.Publication;

const comunityController = {
  getAllPost: (req, res) => {
    Publication.findAll().then((publicaciones) => {
      res.render("community", { publicaciones });
    });
  },
  createPost: (req, res) => {
    Publication.create({
      title: req.body.game,
      description: req.body.description,
      img: req.file ? req.file.filename : "none",
      user_id: req.params.id,
    })
      .then((result) => res.redirect("/community"))
      .catch((err) => res.send(err));
  },
  updatePost: (req, res) => {
    console.log('req.file'+req.file);
    Publication.findByPk(req.params.id, {
      include: [
        {
          association: "user",
        },
      ],
    })
      .then((post) => {
        let imgvar = req.file != undefined ? req.file.filename : post.dataValues.img
        Publication.update(
          {
            title: req.body.game,
            description: req.body.description,
            img: imgvar,
            user_id: post.dataValues.user_id,
          },
          {
            where: {
              id: post.dataValues.id,
            },
          }
        )
          .then((result) => res.redirect("/community"))
          .catch((err) => res.send(err));
      })
      .catch((err) => res.send(err));
  },
  delete: (req, res) => {
    Publication.destroy({
      where: {
        id: req.params.id,
      },
    })
    .then(() => res.redirect("/community"))
    .catch((error) => console.log(error));
  },
};
module.exports = comunityController;
