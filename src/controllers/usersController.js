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
    login: (req, res) => {
        res.render('login');
    },
    userProfile: (req, res) => {
        res.render('userProfile');
    }
}

module.exports = usersController;