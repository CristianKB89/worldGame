const db = require("../../database/models");
const Publication = db.Publication;

const comunityControllerApi = {
  getAllPostApi: (req, res) => {
    Publication.findAll()
      .then(
        (publicaciones) => {
          let reversePost = publicaciones.reverse();
          res.json(reversePost);
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
