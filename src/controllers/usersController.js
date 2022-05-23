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
            res.redirect('/');
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
    if(errorsValidation.errors.length > 0){
        return res.render('login',{errors: errorsValidation.mapped(), oldData})
    }else{
      User.findAll()
      .then(users => {
        let user = users.find((user) => user.email == req.body.email);
        if (user) {
          let passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
          if (passwordIsValid) {
            delete user.userPassword
            req.session.user = user;
            if(req.body.remember){
                res.cookie('userEmail', req.body.email, {maxAge: 1000 * 60 * 60 * 24 * 7})
            }
            res.redirect("/");
          }else{
            return res.render("login", 
            {
              errors: 
                {password:
                  { msg: "Contraseña incorrecta" }
                },
              oldData
            });
            
          }
        }else{
          res.render('login', { errors: { password: {msg: 'Usuario o contraseña incorrectos' }}, oldData });
          console.log(errors)
        }
      })
     /*let userToLog = User.findAll().then((user) => {user.find((e) => e.email === req.body.email)}).catch((err) => {console.log(err)})*/
      /*if (userToLog){
        let passwordIsValid = bcrypt.compareSync(req.body.userPassword, userToLog.password);
        if (passwordIsValid) {
          req.session.user = userToLog;

          if (req.body.remember) {
            res.cookie("user", req.body.userEmail, {maxAge: 1000 * 120});
          }
          res.redirect('/')

        }else{
          res.render('login', { errors: [{ msg: 'Usuario o contraseña incorrectos' }], oldData });
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
    User.update({
      nickName: req.body.userNick,
      name: req.body.userName,
      img_user: "default.jpg"
  },{
    where: {id: req.params.id}
  }).then(() =>{
    res.redirect('/users/profile/' + req.params.id);
  })
  .catch(err =>{res.send(err)})
  },
  logout(req, res) {
    req.session.destroy();
    res.clearCookie("userEmail")
    res.redirect("/");
  },
  deleteUser: (req, res) => {
    User.destroy({
      where: {id: req.params.id}
  }).then(()=>{
    return res.send('Usuario eliminado correctamente');
  }).catch(err =>{res.send(err)})
  }
};

module.exports = usersController;
