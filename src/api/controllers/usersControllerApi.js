const db = require("../../database/models");

const User = db.User;
const Publication = db.Publication;
const Games = db.Game;
const Library = db.Library;

const usersControllerApi = {
    getUsers: (req, res) => {
        User.findAll()
        .then((users) => {
          res.json(users);
        });
    },
    userProfile: (req, res) => {
        let userRequest = User.findByPk(req.params.id);
        let publicationsRequest = Publication.findAll({
          where: { user_id: req.params.id },
        });
        let libraryRequest = Library.findAll({
          where: {
            user_id: req.params.id,
          },
          include: [
            {
              model: Games,
              as: "game",
            },
          ],
        });
        Promise.all([
          userRequest,
          publicationsRequest,
          libraryRequest,
        ])
        .then(([user, posts, library]) => {
        res.json({
            user,
            posts,
            library,
        });
        })
        .catch((err) => {
        console.log(err);
        });
      },
    updateUserProfile: (req, res) => {
    User.findByPk(req.params.id)
        .then(() => {
        User.update(
            {
            nickName: req.body.userNickname,
            name: req.body.userName,
            },
            {
            where: { id: req.params.id },
            }
        )
            .then((result) => {
            res.json(result);
            })
            .catch((err) => {
            res.send(err);
            });
        })
        .catch((err) => {
        console.log(err);
        });
    },

}

module.exports = usersControllerApi;