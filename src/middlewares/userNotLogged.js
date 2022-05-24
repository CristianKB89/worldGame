function userNotLogged (req,res,next){
    if(!req.session.user){
        res.redirect('/')
    };
        next()
    
}
module.exports = userNotLogged;