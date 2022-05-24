const db = require('../database/models')
const User = db.User
async function menuIsLogged (req, res, next){
    res.locals.isLogged = false;
    /*User.findAll()
    .then(users => {
        let emailCookies = req.cookies.userEmail;
        let userCookie = users.find((user) => user.email == emailCookies);
        if (userCookie){
            req.session.user = userCookie;
        }
        
        if(req.session.user){
            res.locals.isLogged = true;
            res.locals.user = req.session.user;
        }
    })*/
    /*if(req.session.user){
        res.locals.isLogged = true;
        res.locals.user = req.session.user;
    }*/
    if (req.cookies.userEmail){
        let userCookie = await User.findOne({
            where: {
                email: req.cookies.userEmail
            }
        })
        if(userCookie){
            req.session.user = userCookie;
        }
    }
    if(req.session.user){
        let users = await User.findByPk(req.session.user.id);
        res.locals.isLogged = true;
        res.locals.user = users;
    }
    next();
}
module.exports = menuIsLogged;