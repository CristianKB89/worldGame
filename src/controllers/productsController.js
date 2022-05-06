const productsController ={
    getProducts: (req, res) => {
        res.render("catalog")
    },
    productDetail: (req, res) => {
        res.render("product-detail");
    },
    shoppingCart: (req, res) => {
        res.render("shoppingCart");
    }
}

module.exports = productsController;