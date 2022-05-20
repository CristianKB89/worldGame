const db = require('../database/models');
const Publication = db.Publication;

const comunityController = {
    getAllPost: (req, res) => {
        Publication.findAll()
        .then(publicaciones => {
            res.render('community', {publicaciones})
        })
    },
    createPost: (req, res) => {
        Publication.create({
            title: req.body.game,
            description: req.body.description,
            img: req.file ? req.file.filename : "default.jpg",
            user_id: req.params.id
        })
        .then(result => res.redirect('/comunidad'))
        .catch(err => res.send(err))
    },
    updatePost:(req, res) => {
        Publication.findByPk(req.params.id, {
            include: [
              {
                association: "user",
              },
            ],
          })
        .then(post => {
            Publication.update({
                title: req.body.game,
                description: req.body.description,
                img: req.file ? req.file.filename : post.dataValues.img,
                user_id: post.dataValues.user_id
            },
            {
              where: {
                id: post.dataValues.id,
              },
            })
            .then(result => res.redirect('/comunidad'))
            .catch(err => res.send(err))
        })
        .catch(err => res.send(err))
    }
}
module.exports = comunityController;