const db = require('../database/models');
const Games = db.Game;

const indexController = {
    index: (req, res) =>{  Games.findAll()
        .then(games => {
            const numX = () => Math.floor(Math.random() * games.length)
            const freeGames = games.filter(i => i.dataValues.discount === 100)
            res.render('index', {
                game1: games[numX()].dataValues,
                game2: games[numX()].dataValues,
                game3: games[numX()].dataValues,
                game4: games[numX()].dataValues,
                game5: games[numX()].dataValues,
                game6: games[numX()].dataValues,
                game7: games[numX()].dataValues,
                game8: games[numX()].dataValues,
                freeGame1: freeGames[0],
                freeGame2: freeGames[1],
                userLog: res.locals.user
            })
        })
    },
    /* search: (req, res) =>{
        Games.findAll()
        .then(games =>{
            let searchedProduct = req.query.keywords.toLowerCase();
            let obtainedProduct = games.filter((specificProduct) => specificProduct.productName.toLowerCase().includes(searchedProduct));
            res.render('results', {obtainedProduct});
        })
        .catch(error => console.log(error));
    }, */
    comunidad: (req, res) =>{
        res.render('community')
    }
}
module.exports = indexController;