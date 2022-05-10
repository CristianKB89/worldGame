const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const fs = require('fs');
const path = require('path');
const {validationResult} = require('express-validator')

// MODELOS

const User = db.User;

const usersController = {
    getUsers: (req, res) => {
        User.findAll()
        .then(users =>{
            res.send(users);
        })
    },
    signup: (req, res) => {
        res.render('signup');
    },
    register: (req, res) => {
        let errorsValidation = validationResult(req);
        console.log(errorsValidation);
        let oldData = req.body;
        console.log(oldData);
        if(errorsValidation.errors.length > 0){
            return res.render('signup',{errors: errorsValidation.errors, oldData})
        }else{
            User.create({
                email: req.body.email,
                nickName: req.body.userNickname,
                name: req.body.userName,
                password: req.body.password,
                img_user: "default.jpg"
            })
            .then(() =>{
                return res.send('Usuario creado correctamente');
            })
            .catch(err =>{res.send(err)})
        }
    },
    login: (req, res) => {
        res.render('login');
    },
    loginProcess: (req, res) => {
        let errorsValidation = validationResult(req);
        let oldData = req.body;
        if(errorsValidation.errors.length > 0){
            return res.render('login',{errors: errorsValidation.errors, oldData})
        }else{
            res.send('hola');
        }
        
    },
    userProfile: (req, res) => {
        res.render('userProfile');
    }
}

module.exports = usersController;