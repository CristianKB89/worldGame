const productsController ={
    getProducts: (req, res) => {
        res.render("catalog")
    },
    productDetail: (req, res) => {
        res.render("product-detail");
    }
}

module.exports = productsController;