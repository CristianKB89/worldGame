const userController = {
    getUsers: (req, res) => {
        res.send('respond with a resource');
    },
    signup: (req, res) => {
        res.render('signup');
    }
}

module.exports = userController;