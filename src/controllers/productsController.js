const productsController ={
    getProducts: (req, res) => {
        res.render("product-detail", {
            title: "Product Detail"
        })
    },
    productDetail: (req, res) => {
        res.render("product-detail");
    },
    createProduct: (req, res) => {
        res.render("product-create");
    }
}

module.exports = productsController;