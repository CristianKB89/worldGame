const {validationResult} = require('express-validator');
const productsController ={
    getProducts: (req, res) => {
        res.render("catalog")
    },
    productDetail: (req, res) => {
        res.render("product-detail");
    },
    shoppingCart: (req, res) => {
        res.render("shoppingCart")
    },
    createProduct: (req, res) => {
        res.render("product-create");
    },
    createProductPost: (req, res) => {
        const result = validationResult(req);
        
        if(result.errors.length > 0){
            res.render("product-create",{errors: result.mapped(), oldData: req.body});
        }
        else{
            res.send("Product created");
        }
    }
}

module.exports = productsController;