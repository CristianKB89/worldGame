Games.findAll()
        .then(games =>{
            let searchedProduct = req.query.keywords.toLowerCase();
            let obtainedProduct = games.filter((specificProduct) => specificProduct.productName.toLowerCase().includes(searchedProduct));
            res.render('results', {obtainedProduct});
        })
        .catch(error => console.log(error));