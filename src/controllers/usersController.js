const db = require("../database/models");
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { validationResult } = require("express-validator");
const bcrypt = require('bcryptjs')

// MODELOS

const User = db.User;

const usersController = {
  getUsers: (req, res) => {
    User.findAll().then((users) => {
      res.send(users);
    });
  },
  signup: (req, res) => {
    res.render("signup");
  },
  register: (req, res) => {
    let errorsValidation = validationResult(req);
    let oldData = req.body;
    if(errorsValidation.errors.length > 0){
        return res.render('signup',{errors: errorsValidation.errors, oldData})
    }else{
        User.create({
            email: req.body.userEmail,
            nickName: req.body.userNickname,
            name: req.body.userName,
            password: bcrypt.hashSync(req.body.userPassword, 10),
            img_user: "default.jpg"
        })
        .then(() =>{
            return res.send('Usuario creado correctamente');
        })
        .catch(err =>{res.send(err)})
    }
  },
  login: (req, res) => {
    res.render("login");
  },
  loginProcess: (req, res) => {
    let errorsValidation = validationResult(req);
    let oldData = req.body;
    if (errorsValidation.errors.length > 0) {
      return res.render("login", { errors: errorsValidation.errors, oldData });
    } else {
     /*let userToLog = User.findAll().then((user) => {user.find((e) => e.email === req.body.email)}).catch((err) => {console.log(err)})*/
      User.findOne({where:{email: req.body.email}}).then((user) => {res.redirect("/")}).catch((err) => {console.log(err)})
      /*if (userToLog){
        let passwordIsValid = bcrypt.compareSync(req.body.userPassword, userToLog.password);
        if (passwordIsValid) {
          req.session.user = userToLog;

          if (req.body.remember) {
            res.cookie("user", req.body.userEmail, {maxAge: 1000 * 120});
          }
          res.redirect('/')

        }
      }*/
    }
  },
  userProfile: (req, res) => {
    User.findByPk(req.params.id)
      .then((user) => {
        res.render("userProfile", { user });
      })
      .catch((err) => {
        console.log(err);
      });
    // res.render('userProfile');
  },
  updateUserProfile: (req, res) => {
    res.send("updatedUserProfile");
  }
};

module.exports = usersController;
