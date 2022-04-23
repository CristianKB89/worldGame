const fs = require('fs');
const path = require('path');
const {validationResult} = require('express-validator')

const usersController = {
    getUsers: (req, res) => {
        res.send('respond with a resource');
    },
    signup: (req, res) => {
        res.render('signup');
    }
}

module.exports = usersController;