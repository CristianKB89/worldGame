const db = require("../database/models");
const Publication = db.Publication;
const User = db.User;
const Games = db.Game;

const comunityController = {
  getAllPost: (req, res) => {
    const publicationTime = (day) => {
      let toDay = new Date().getTime();
      let dia = day.getDate();
      let mes = day.getMonth() + 1;
      let anio = day.getFullYear();
      let hora = day.getHours();
      let publicationDay = new Date(`${anio}-${mes}-${dia}`).getTime();
      let diff = toDay - publicationDay;
      let total = Math.floor(diff / (1000 * 60 * 60 * 24));
      let totalHours = Math.floor(diff / (1000 * 60 * 60) - hora);
      if (total === 0) {
        if (totalHours === 1) {
          return `Hace ${totalHours} hora`;
        } else {
          return `Hace ${totalHours} horas`;
        }
      } else {
        if (total === 1) {
          return `Hace ${total} dia`;
        } else {
          return `Hace ${total} dias`;
        }
      }
    };
    const usersRequest = User.findAll();
    const publicationsRequest = Publication.findAll();
    const gamesRequest = Games.findAll();
    Promise.all([usersRequest, publicationsRequest, gamesRequest]).then(
      ([users, publicaciones, games]) => {
        let localUser = res.locals.user;
        let reversePost = publicaciones.reverse();
        res.render("community", {
          users,
          reversePost,
          localUser,
          publicationTime,
          games
        });
      }
    );
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
    console.log("req.file" + req.file);
    Publication.findByPk(req.params.id, {
      include: [
        {
          association: "user",
        },
      ],
    })
      .then((post) => {
        let imgvar =
          req.file != undefined ? req.file.filename : post.dataValues.img;
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
