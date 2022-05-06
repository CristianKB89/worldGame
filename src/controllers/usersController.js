const fs = require('fs');
const path = require('path');
const {validationResult} = require('express-validator')

const usersController = {
    getUsers: (req, res) => {
        res.send('respond with a resource');
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
        }
        res.send('hola');
    },
    login: (req, res) => {
        res.render('login');
    },
    userProfile: (req, res) => {
        res.render('userProfile');
    }
}

module.exports = usersController;