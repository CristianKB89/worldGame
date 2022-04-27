const indexController = {
    index: (req, res) =>{ 
        res.render('index')
    },
    comunidad: (req, res) =>{
        res.render('community')
    }
}
module.exports = indexController;