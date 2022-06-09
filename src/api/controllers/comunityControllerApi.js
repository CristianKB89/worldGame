const db = require("../../database/models");
const Publication = db.Publication;
const User = db.User;
const Games = db.Game;

const comunityControllerApi = {
  getAllPostApi: (req, res) => {
    const usersRequest = User.findAll();
    const publicationsRequest = Publication.findAll();
    const gamesRequest = Games.findAll();
    Promise.all([usersRequest, publicationsRequest, gamesRequest]).then(
      ([users, publicaciones, games]) => {
        let reversePost = publicaciones.reverse();
        res.json({
          users,
          reversePost,
          games
        });
      }
    );
  },
  updatePostApi: (req, res) => {
    console.log("req.file" + req.file);
    Publication.findByPk(req.params.id, {
      include: [
        {
          association: "user",
        },
      ],
    })
      .then((post) => {
        Publication.update(
          {
            description: req.body.description,
            img: "publicationInfraction",
          },
          {
            where: {
              id: post.dataValues.id,
            },
          }
        )
          .then((result) => res.json(result))
          .catch((err) => res.send(err));
      })
      .catch((err) => res.send(err));
  }
};
module.exports = comunityControllerApi;
