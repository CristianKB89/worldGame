const indexController = {
    index: (req, res) =>{ 
        res.render('index')
    },
    /* search: (req, res) =>{
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        let searchedProduct = req.query.keywords.toLowerCase();
        let obtainedProduct = products.filter((specificProduct) => specificProduct.productName.toLowerCase().includes(searchedProduct));
        res.render('./users/results', {products, searchedProduct, obtainedProduct});
    } */
    comunidad: (req, res) =>{
        res.render('community')
    }
}
module.exports = indexController;